export {};

declare global {
    interface Window {
        onYouTubeIframeAPIReady?: () => void;
    }
}

/**
 * Cached YouTube API loading promise.
 */
let youtubeApiPromise: Promise<void> | null = null;

/**
 * Counter for generated YouTube iframe IDs.
 */
let youtubeIframeIdCounter = 0;

/**
 * Cached YouTube players by iframe.
 */
const youtubePlayers = new WeakMap<HTMLIFrameElement, Promise<YT.Player>>();

/**
 * Permissions required by YouTube for autoplay and media playback.
 */
const REQUIRED_YOUTUBE_ALLOW_FEATURES = [
    'autoplay',
    'encrypted-media',
    'picture-in-picture',
] as const;

/**
 * URL of the official YouTube IFrame Player API script.
 */
const YOUTUBE_IFRAME_API_URL = 'https://www.youtube.com/iframe_api';

/* Custom Events */
const POSTER_REVEAL_ACTIVATE_EVENT = 'toujou-poster-reveal-activate';
const POSTER_REVEAL_VIDEO_PLAY_REQUESTED_EVENT = 'toujou-poster-reveal-video-play-requested';
const POSTER_REVEAL_VIDEO_PLAYING_EVENT = 'toujou-poster-reveal-video-playing';
const POSTER_REVEAL_VIDEO_ERROR_EVENT = 'toujou-poster-reveal-video-error';

const YOUTUBE_HOSTS = [
    'youtube.com',
    'youtube-nocookie.com',
    'youtu.be',
];

const VIMEO_HOSTS = [
    'vimeo.com',
];

type PosterRevealVideoProvider = 'youtube' | 'vimeo';

interface PosterRevealEventDetail {
    provider: PosterRevealVideoProvider;
    error?: unknown;
}

/**
 * Maximum time to wait for an iframe reload.
 */
const IFRAME_RELOAD_TIMEOUT_MS = 5000;

/**
 * Loads the YouTube IFrame API only once.
 */
function loadYouTubeIframeApi(): Promise<void> {
    if (youtubeApiPromise) return youtubeApiPromise;

    youtubeApiPromise = new Promise((resolve, reject) => {
        if (typeof YT !== 'undefined' && YT.Player) {
            resolve();
            return;
        }

        const previousCallback = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = () => {
            previousCallback?.();
            resolve();
        };

        if (!document.querySelector(`script[src="${YOUTUBE_IFRAME_API_URL}"]`)) {
            const script = document.createElement('script');

            script.src = YOUTUBE_IFRAME_API_URL;
            script.onerror = () => {
                reject(new Error('Failed to load YouTube IFrame API.'));
            };

            document.head.appendChild(script);
        }
    });

    return youtubeApiPromise;
}


/**
 * Gets or creates a YouTube player instance for an iframe.
 *
 * @param iframe - The YouTube iframe element.
 */
function getYouTubePlayer(iframe: HTMLIFrameElement): Promise<YT.Player> {
    const existing = youtubePlayers.get(iframe);
    if (existing) return existing;

    const playerPromise = loadYouTubeIframeApi().then(
        () =>
            new Promise<YT.Player>((resolve) => {
                if (!iframe.id) {
                    iframe.id = `youtube-player-${++youtubeIframeIdCounter}`;
                }

                // Use the existing iframe instead of creating a new one.
                new YT.Player(iframe.id, {
                    events: {
                        onReady: (event) => resolve(event.target),
                    },
                });
            }),
    );

    youtubePlayers.set(iframe, playerPromise);
    return playerPromise;
}

/**
 * Ensures required autoplay permissions are set.
 *
 * @param iframe - The YouTube iframe element.
 * @returns true if the attribute was missing and had to be added.
 */
function ensureYouTubeAutoplayAllowed(iframe: HTMLIFrameElement): boolean {
    const current = new Set(
        iframe.allow
            .split(';')
            .map((feature) => feature.trim())
            .filter(Boolean),
    );

    let changed = false;
    for (const feature of REQUIRED_YOUTUBE_ALLOW_FEATURES) {
        if (!current.has(feature)) {
            current.add(feature);
            changed = true;
        }
    }

    if (changed) {
        iframe.allow = Array.from(current).join('; ');
    }

    return changed;
}

/**
 * Reloads an iframe after changing permissions. Needed after changing the `allow` attribute,
 * since Permissions Policy is only (re-)evaluated when the frame actually navigates
 *
 * @param iframe - The iframe element to reload.
 */
function reloadIframe(iframe: HTMLIFrameElement): Promise<void> {
    return new Promise((resolve, reject) => {
        let timeout: number;

        const onLoad = () => {
            window.clearTimeout(timeout);
            iframe.removeEventListener('load', onLoad);
            resolve();
        };

        timeout = window.setTimeout(() => {
            iframe.removeEventListener('load', onLoad);
            reject(new Error('Timed out while reloading iframe.'));
        }, IFRAME_RELOAD_TIMEOUT_MS);

        iframe.addEventListener('load', onLoad);

        try {
            const url = new URL(iframe.src, window.location.href);

            // Force a real navigation even if the URL did not change.
            url.searchParams.set('_r', Date.now().toString());

            iframe.src = url.toString();
        } catch (error) {
            window.clearTimeout(timeout);
            iframe.removeEventListener('load', onLoad);
            reject(error);
        }
    });
}

/**
 * Starts YouTube playback with autoplay-safe settings.
 *
 * @param posterReveal - The toujou-poster-reveal element.
 * @param iframe - The YouTube iframe element.
 */
async function playYouTube(
    posterReveal: HTMLElement,
    iframe: HTMLIFrameElement,
): Promise<void> {
    try {
        dispatchPosterRevealEvent(posterReveal, POSTER_REVEAL_VIDEO_PLAY_REQUESTED_EVENT, { provider: 'youtube' });

        if (ensureYouTubeAutoplayAllowed(iframe)) {
            await reloadIframe(iframe);

            // The iframe re-navigated, so any previously created player instance is now stale
            youtubePlayers.delete(iframe);
        }

        const player = await getYouTubePlayer(iframe);
        startYouTubePlayback(player);

        dispatchPosterRevealEvent(posterReveal, POSTER_REVEAL_VIDEO_PLAYING_EVENT, { provider: 'youtube' });
    } catch (error) {
        dispatchPosterRevealEvent(posterReveal, POSTER_REVEAL_VIDEO_ERROR_EVENT, { provider: 'youtube', error });

        console.warn(
            'Could not start YouTube video playback.',
            {
                src: iframe.src,
                error,
            },
        );
    }
}

/**
 * Starts playback while respecting autoplay restrictions.
 *
 * @param player - The YouTube player instance.
 */
function startYouTubePlayback(player: YT.Player): void {
    player.mute();
    player.setVolume(30);
    player.playVideo();
    player.unMute();
}

/**
 * Plays a Vimeo video inside an iframe using the Vimeo Player API.
 *
 * @param posterReveal - The toujou-poster-reveal element.
 * @param iframe - The Vimeo iframe element.
 */
function playVimeo(
    posterReveal: HTMLElement,
    iframe: HTMLIFrameElement,
): void {
    dispatchPosterRevealEvent(posterReveal, POSTER_REVEAL_VIDEO_PLAY_REQUESTED_EVENT, { provider: 'vimeo' });

    iframe.contentWindow?.postMessage({ method: 'play' }, '*');

    dispatchPosterRevealEvent(posterReveal, POSTER_REVEAL_VIDEO_PLAYING_EVENT, { provider: 'vimeo' });
}

/**
 * Gets the video provider from an iframe URL.
 *
 * @param iframe - The iframe element.
 * @returns 'youtube' | 'vimeo' | null
 */
function getVideoProvider(iframe: HTMLIFrameElement): 'youtube' | 'vimeo' | null {
    try {
        const { hostname } = new URL(iframe.src, window.location.href);

        if (YOUTUBE_HOSTS.some(
            (host) => hostname === host || hostname.endsWith(`.${host}`)
        )) {
            return 'youtube';
        }

        if (VIMEO_HOSTS.some(
            (host) => hostname === host || hostname.endsWith(`.${host}`)
        )) {
            return 'vimeo';
        }
    } catch {
        // Empty or unparsable src - not a recognized provider.
    }

    return null;
}

/**
 * Plays all supported embedded videos inside a NodeList of iframes.
 *
 * @param posterReveal - The toujou-poster-reveal element.
 * @param iframes - List of iframe elements containing embedded videos.
 */
function playEmbeddedVideos(
    posterReveal: HTMLElement,
    iframes: NodeListOf<HTMLIFrameElement>,
): void {
    iframes.forEach((iframe) => {
        const provider = getVideoProvider(iframe);

        switch (provider) {
            case 'youtube':
                void playYouTube(posterReveal, iframe);
                break;

            case 'vimeo':
                playVimeo(posterReveal, iframe);
                break;
        }
    });
}

/**
 * Dispatches a poster reveal event from the toujou-poster-reveal element.
 */
function dispatchPosterRevealEvent(
    posterReveal: HTMLElement,
    eventName: string,
    detail?: PosterRevealEventDetail,
): void {
    posterReveal.dispatchEvent(
        new CustomEvent(eventName, { bubbles: true, detail }),
    );
}

/**
 * Starts videos when a poster reveal is activated.
 */
function initPosterRevealListener(): void {
    window.addEventListener(POSTER_REVEAL_ACTIVATE_EVENT, (event) => {
        const target = event.target as HTMLElement | null;
        if (!target) return;

        const iframes = target.querySelectorAll('iframe');

        playEmbeddedVideos(target, iframes);
    });
}

initPosterRevealListener();
