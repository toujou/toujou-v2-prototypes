import PhotoSwipe from 'photoswipe';
// @ts-expect-error
import PhotoSwipeLightbox from 'photoswipe/lightbox';
// @ts-expect-error
import PhotoSwipeVideoPlugin from 'photoswipe-video-plugin';

// Create a global object to hold the element's variables and config
const pswpLightboxCreator = {
    items: [] as HTMLElement[],
    parents: new Set<HTMLElement>(),
    lightboxes: new Set<PhotoSwipeLightbox>(),
    parentIdAttribute: 'lightbox-parent-id',
    itemIdAttribute: 'lightbox-item-id',
}

/**
 * Initialize the element by getting add lightbox items from the page
 */
function initPhotoswipeLightboxCreator() {
    pswpLightboxCreator.items = Array.from(document.querySelectorAll(`[${pswpLightboxCreator.itemIdAttribute}]`));

    pswpLightboxCreator.items.forEach((item) => {
        const itemLightboxParent = item.closest(`[${pswpLightboxCreator.parentIdAttribute}]`) as HTMLElement;
        pswpLightboxCreator.parents.add(itemLightboxParent);
    });

    _initParents();
}

/**
 * Initialize a lightbox element for each of the lightbox parent element
 */
function _initParents() {
    pswpLightboxCreator.parents.forEach((parent) => {
        _initLightbox(parent);
    })
}

/**
 * Initialize  single instance of a PhotoSwipe lightbox
 * @param {HTMLElement} parent
 */
function _initLightbox(parent: HTMLElement) {
    const lightbox: PhotoSwipeLightbox = new PhotoSwipeLightbox({
        gallery: parent,
        children: `[${pswpLightboxCreator.itemIdAttribute}]`,
        pswpModule: PhotoSwipe,
        allowPanToNext: true,
        preloaderDelay: 0,
    })

    lightbox.on('uiRegister', () => _handleUiRegister(lightbox));

    lightbox.videoPlugin = new PhotoSwipeVideoPlugin(lightbox, {
        autoplay: false
    });

    lightbox.init();

    pswpLightboxCreator.lightboxes.add(lightbox);

    parent.dispatchEvent(new CustomEvent('toujou-lightbox-init', {
        bubbles: true,
        composed: true,
        detail: {
            el: parent,
            lightbox: lightbox
        }
    }))
}

/**
 * Set up the lightbox to show the required elements
 * @param {PhotoSwipeLightbox} lightbox
 */
function _handleUiRegister(lightbox: PhotoSwipeLightbox): void {
    lightbox.pswp.ui.registerElement({
        name: 'caption',
        order: 9,
        isButton: false,
        appendTo: 'root',
        onInit: (el: HTMLElement) => {
            lightbox.pswp.element.setAttribute('aria-label', 'Lightbox');
            lightbox.pswp.on('change', () => _handleChange(el, lightbox));
        },
    });
}

/**
 * Replace the lightbox caption with the image's title text
 * @param {HTMLElement} el
 * @param {PhotoSwipeLightbox} lightbox
 */
function _handleChange(el: HTMLElement, lightbox: PhotoSwipeLightbox): void {
    let captionText = '';
    const currSlideElement = lightbox.pswp.currSlide.data.element;

    if (currSlideElement) {
        captionText = currSlideElement.getAttribute('title');
    }

    el.textContent = captionText ? captionText : '';
}

/**
 * Wait for the page to completely load before initializing the photoswipe-lightbox-creator script
 */
if (document.readyState !== "loading") {
    setTimeout(() => {
        initPhotoswipeLightboxCreator();
    });
} else {
    document.addEventListener("DOMContentLoaded", () => {
        initPhotoswipeLightboxCreator();
    });
}
