/**
 * Initializes autoplay or control behavior for videos with the `data-is-autoplay="1"` attribute,
 * based on the user's `prefers-reduced-motion` setting.
 */
function initAutoplayVideos(): void {
    const isReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const videos: NodeListOf<HTMLVideoElement> = document.querySelectorAll('video[data-is-autoplay="1"]');
    console.log('11', videos, isReduceMotion);

    videos.forEach((video: HTMLVideoElement) => {
        if (!isReduceMotion) {
            video.setAttribute('autoplay', '');
        } else {
            video.setAttribute('controls', '');
        }
    });
}

/**
 * Runs `initAutoplayVideos` once the DOM is fully loaded.
 * If the document is already ready, runs it immediately.
 */
if (document.readyState !== 'loading') {
    setTimeout(() => {
        initAutoplayVideos();
    });
} else {
    document.addEventListener('DOMContentLoaded', () => {
        initAutoplayVideos();
    });
}
