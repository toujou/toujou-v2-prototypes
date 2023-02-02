import PhotoSwipe from 'photoswipe';
// @ts-ignore
import PhotoSwipeLightbox from 'photoswipe/lightbox';
// @ts-ignore
import PhotoSwipeVideoPlugin from 'photoswipe-video-plugin';

const pswpLightboxCreator = {
    items: [] as HTMLElement[],
    parents: new Set<HTMLElement>(),
    lightboxes: new Set<PhotoSwipeLightbox>(),
    parentIdAttribute: 'lightbox-parent-id',
    itemIdAttribute: 'lightbox-item-id',
}

function initPhotoswipeLightboxCreator() {
    pswpLightboxCreator.items = Array.from(document.querySelectorAll(`[${pswpLightboxCreator.itemIdAttribute}]`));

    pswpLightboxCreator.items.forEach((item) => {
        const itemLightboxParent = item.closest(`[${pswpLightboxCreator.parentIdAttribute}]`) as HTMLElement;
        pswpLightboxCreator.parents.add(itemLightboxParent);
    });

    _initParents();
}

/**
 * Initialize a lightbox element for each of the lightbox parents
 */
function _initParents() {
    pswpLightboxCreator.parents.forEach((parent) => {
        _initLightbox(parent);
    })
}

/**
 * Initialize  single instance of a PhotoSwipe lightbox and save it to the lightboxParents set
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
}

function _handleUiRegister(lightbox: PhotoSwipeLightbox): void {
    lightbox.pswp.ui.registerElement({
        name: 'caption',
        order: 9,
        isButton: false,
        appendTo: 'root',
        onInit: (el: HTMLElement) => {
            lightbox.pswp.on('change', () => _handleChange(el, lightbox));
        },
    });
}

function _handleChange(el: HTMLElement, lightbox: PhotoSwipeLightbox): void {
    let captionText = '';
    const currSlideElement = lightbox.pswp.currSlide.data.element;

    if (currSlideElement) {
        captionText = currSlideElement.getAttribute('title');
    }

    el.textContent = captionText ? captionText : '';
}

if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(() => {
        initPhotoswipeLightboxCreator();
    });
} else {
    document.addEventListener("DOMContentLoaded", () => {
        initPhotoswipeLightboxCreator();
    });
}

console.log('HELLO')
