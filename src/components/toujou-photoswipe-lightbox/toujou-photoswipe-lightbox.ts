import { LitElement, PropertyValues } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import PhotoSwipe from 'photoswipe';
// @ts-ignore
import PhotoSwipeLightbox from 'photoswipe/lightbox';
// @ts-ignore
import PhotoSwipeVideoPlugin from 'photoswipe-video-plugin';

@customElement('toujou-photoswipe-lightbox')
export class ToujouPhotoswipeLightbox extends LitElement {
    @property({ type: Array })
    lightboxItems: HTMLElement[] = [];

    @property({ type: Set })
    lightboxParents = new Set<HTMLElement>();

    @property({ type: Set })
    lightboxes = new Set<PhotoSwipeLightbox>();

    private readonly parentIdAttribute = 'lightbox-parent-id';

    protected createRenderRoot(): Element | ShadowRoot {
        return this;
    }

    updated(changed: PropertyValues<this>) {
        if (changed.has('lightboxItems')) {
            this._handleLightboxItemsChange();
        }
    }

    connectedCallback() {
        super.connectedCallback();

        this.lightboxItems = Array.from(document.querySelectorAll('.lightbox-item'));
    }

    /**
     * Register a new UI element: caption
     * @param {PhotoSwipeLightbox} lightbox
     */
    _handleUiRegister = (lightbox: PhotoSwipeLightbox) => {
        lightbox.pswp.ui.registerElement({
            name: 'caption',
            order: 9,
            isButton: false,
            appendTo: 'root',
            onInit: (el: HTMLElement) => {
                lightbox.pswp.on('change', () => this._handleChange(el, lightbox));
            },
        });
    }

    /**
     * React to change on the lightbox so that we can add the correct caption text
     * @param {HTMLElement} el
     * @param {PhotoSwipeLightbox} lightbox
     */
    _handleChange = (el: HTMLElement, lightbox: PhotoSwipeLightbox) => {
        let captionText = '';
        const currSlideElement = lightbox.pswp.currSlide.data.element;

        if (currSlideElement) {
            captionText = currSlideElement.getAttribute('title');
        }

        el.textContent = captionText ? captionText : '';
    }

    /**
     * Set the lightboxParents elements according to the lightboxItems found
     */
    _handleLightboxItemsChange = () => {
        this.lightboxItems.forEach((item) => {
            const itemLightboxParent = item.closest(`[${this.parentIdAttribute}]`) as HTMLElement;
            this.lightboxParents.add(itemLightboxParent);
        });

        this._handleLightboxParentsChange();
    }

    /**
     * Initialize a lightbox element for each of the lightbox parents
     */
    _handleLightboxParentsChange = () => {
        this.lightboxParents.forEach((lightboxParent) => {
            this._initLightbox(lightboxParent);
        })
    }

    /**
     * Initialize  single instance of a PhotoSwipe lightbox and save it to the lightboxParents set
     * @param {HTMLElement} lightboxParent
     */
    _initLightbox = (lightboxParent: HTMLElement) => {
        const lightbox: PhotoSwipeLightbox = new PhotoSwipeLightbox({
            gallery: lightboxParent,
            children: '[lightbox-item-id]',
            pswpModule: PhotoSwipe,
            allowPanToNext: true,
            preloaderDelay: 0,
        })

        lightbox.on('uiRegister', () => this._handleUiRegister(lightbox));

        lightbox.videoPlugin = new PhotoSwipeVideoPlugin(lightbox, {
            autoplay: false
        });

        lightbox.init();

        this.lightboxes.add(lightbox);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-photoswipe-lightbox': ToujouPhotoswipeLightbox
    }
}
