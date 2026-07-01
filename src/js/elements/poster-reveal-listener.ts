/**
 * Ensures that an iframe URL contains `mute=1`.
 *
 * Muted playback is often required for autoplay to work reliably across browsers.
 *
 * @param src - The iframe source URL.
 * @returns The updated URL with `mute=1`.
 */
function ensureMuted(src: string): string {
    const url = new URL(src);

    if (!url.searchParams.has('mute')) {
        url.searchParams.set('mute', '1');
    }

    return url.toString();
}

/**
 * Starts playback of a YouTube iframe using the YouTube IFrame API.
 *
 * @param iframe - The YouTube iframe element.
 */
function playYouTube(iframe: HTMLIFrameElement): void {
    if (!iframe.src) {
        return;
    }

    const updatedSrc = ensureMuted(iframe.src);

    if (iframe.src !== updatedSrc) {
        iframe.src = updatedSrc;
    }

    requestAnimationFrame(() => {
        iframe.contentWindow?.postMessage(
            JSON.stringify({
                event: 'command',
                func: 'playVideo',
                args: [],
            }),
            '*',
        );
    });
}

/**
 * Starts playback of a Vimeo iframe using the Vimeo Player API.
 *
 * @param iframe - The Vimeo iframe element.
 */
function playVimeo(iframe: HTMLIFrameElement): void {
    iframe.contentWindow?.postMessage(
        { method: 'play' },
        '*',
    );
}

/**
 * Starts playback for all supported embedded video iframes.
 *
 * @param iframes - A list of iframe elements to process.
 */
function playEmbeddedVideos(iframes: NodeListOf<HTMLIFrameElement>): void {
    iframes.forEach((iframe) => {
        const src = iframe.src;

        if (src.includes('youtube')) {
            playYouTube(iframe);
            return;
        }

        if (src.includes('vimeo.com')) {
            playVimeo(iframe);
        }
    });
}

/**
 * Registers a global listener that reacts to poster reveal activation events.
 *
 * When a `<toujou-poster-reveal>` component is activated, all embedded
 * video iframes within the component are automatically started.
 */
function initPosterRevealListener(): void {
    window.addEventListener('toujou-poster-reveal-activate', (event) => {
        const posterRevealEl = event.target as HTMLElement;
        const iframes = posterRevealEl.querySelectorAll('iframe');

        playEmbeddedVideos(iframes);
    });
}

initPosterRevealListener();
