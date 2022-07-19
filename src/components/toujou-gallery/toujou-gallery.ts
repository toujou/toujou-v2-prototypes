import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import PhotoSwipe from 'photoswipe';
import PhotoSwipeLightbox from 'photoswipe/lightbox';

@customElement('toujou-gallery')
export class ToujouGallery extends LitElement {

    private lightbox: any;

    // @ts-ignore
    private get galleryID(): string | undefined {
        const galleryId = this.getAttribute('id');
        return galleryId ? `#${galleryId}` : undefined;
    }

    protected createRenderRoot(): Element | ShadowRoot {
        return this;
    }

    connectedCallback() {
        super.connectedCallback();

        this.lightbox = new PhotoSwipeLightbox({
            gallery: this.galleryID,
            children: 'a',
            pswpModule: PhotoSwipe,
            allowPanToNext: true,
            preloaderDelay: 0,
        })

        this.lightbox.on('uiRegister', () => this._handleUiRegister());
        this.lightbox.init();
    }

    /**
     * Register a new UI element: caption
     */
    _handleUiRegister = () => {
        this.lightbox.pswp.ui.registerElement({
            name: 'caption',
            order: 9,
            isButton: false,
            appendTo: 'root',
            onInit: (el: HTMLElement) => {
                this.lightbox.pswp.on('change', () => this._handleChange(el));
            },
        });
    }

    /**
     * React to change on the lightbox so that we can add the correct caption text
     * @param {HTMLElement} el
     */
    _handleChange = (el: HTMLElement) => {
        let captionText = '';
        const currSlideElement = this.lightbox.pswp.currSlide.data.element;

        if (currSlideElement) {
            captionText = currSlideElement.getAttribute('title');
        }

        el.textContent = captionText ? captionText : '';
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-gallery': ToujouGallery
    }
}
