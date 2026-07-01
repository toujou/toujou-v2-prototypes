type YouTubeCommand =
    | 'mute'
    | 'unMute'
    | 'playVideo'
    | 'pauseVideo'
    | 'setVolume';

/**
 * Sends a command to a YouTube iframe using the IFrame Player API.
 *
 * @param iframe - The YouTube iframe element.
 * @param func - The YouTube API command to execute.
 * @param args - Optional arguments for the command.
 */
function postYouTubeCommand(
    iframe: HTMLIFrameElement,
    func: YouTubeCommand,
    args: unknown[] = [],
): void {
    iframe.contentWindow?.postMessage(
        JSON.stringify({
            event: 'command',
            func,
            args,
        }),
        '*',
    );
}

/**
 * Plays a YouTube video inside an iframe and applies
 * autoplay-safe settings (mute first, then adjust volume).
 *
 * @param iframe - The YouTube iframe element.
 */
function playYouTube(iframe: HTMLIFrameElement): void {
    if (!iframe.contentWindow) return;

    requestAnimationFrame(() => {
        // Required for autoplay policies in most browsers
        postYouTubeCommand(iframe, 'mute');
        postYouTubeCommand(iframe, 'playVideo');

        // Slight delay ensures player is ready before state changes
        setTimeout(() => {
            postYouTubeCommand(iframe, 'setVolume', [30]);
            postYouTubeCommand(iframe, 'unMute');
        }, 200);
    });
}

/**
 * Plays a Vimeo video inside an iframe using the Vimeo Player API.
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
 * Detects the video provider based on iframe source URL.
 *
 * @param iframe - The iframe element.
 * @returns 'youtube' | 'vimeo' | null
 */
function getVideoProvider(iframe: HTMLIFrameElement): 'youtube' | 'vimeo' | null {
    const src = iframe.src;

    if (src.includes('youtube')) return 'youtube';
    if (src.includes('vimeo.com')) return 'vimeo';

    return null;
}

/**
 * Plays all supported embedded videos inside a NodeList of iframes.
 *
 * @param iframes - List of iframe elements containing embedded videos.
 */
function playEmbeddedVideos(iframes: NodeListOf<HTMLIFrameElement>): void {
    iframes.forEach((iframe) => {
        const provider = getVideoProvider(iframe);

        switch (provider) {
            case 'youtube':
                playYouTube(iframe);
                break;

            case 'vimeo':
                playVimeo(iframe);
                break;
        }
    });
}

/**
 * Initializes a global event listener for a poster reveal activation event.
 *
 * When a `<toujou-poster-reveal>` element is activated, all embedded
 * videos inside it are automatically started.
 */
function initPosterRevealListener(): void {
    window.addEventListener('toujou-poster-reveal-activate', (event) => {
        const target = event.target as HTMLElement | null;
        if (!target) return;

        const iframes = target.querySelectorAll('iframe');
        playEmbeddedVideos(iframes);
    });
}

initPosterRevealListener();
