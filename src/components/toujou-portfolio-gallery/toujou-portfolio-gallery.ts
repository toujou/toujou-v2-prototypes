import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ToujouPortfolioGalleryStyles } from "./toujou-portfolio-gallery.styles.js";
import PhotoSwipe from 'photoswipe';
// @ts-ignore
import PhotoSwipeLightbox from 'photoswipe/lightbox';

@customElement('toujou-portfolio-gallery')
export class ToujouPortfolioGallery extends LitElement {
    static styles = [ ToujouPortfolioGalleryStyles ];

    @property({ type: Number }) _currentImageIndex: number = 1;
    @property({ type: Number }) _imageCount: number | undefined = 0;
    private lightbox: any;

    /**
     * Get the child elements of the slider
     */
    get #sliderContent() {
        const sliderSlot = this.shadowRoot?.querySelector('#slider') as HTMLSlotElement;
        if (!sliderSlot) return null;

        const sliderElements = sliderSlot.assignedElements({ flatten: true });
        return sliderElements[0] || null;
    }

    /**
     * Get the first image link inside the slider
     */
    get #firstSliderImageLink() {
        const firstImage = this.#sliderContent?.querySelector('a.slider__item') as HTMLAnchorElement;
        return  firstImage || null;
    }

    /**
     * Get the portfolio id, so we can create a unique lightbox
     * @private
     */
    get #portfolioGalleryID() {
        const portfolioGalleryID = this.getAttribute('id');
        return portfolioGalleryID ? `#${portfolioGalleryID}` : undefined;
    }

    /**
     * Initialize the lightbox when the portfolio gallery element first loads
     */
    connectedCallback() {
        super.connectedCallback();

        this._initializeLightbox();
    }

    /**
     * Render the slots for the element's content
     */
    render() {
        return html`
            <slot id="slider" name="slider"></slot>
            <slot id="button" name="button" @click="${this._handleButtonClick}"></slot>
        `
    }

    /**
     * Initialize the lightbox with the correct settings
     */
    _initializeLightbox() {
        this.lightbox = new PhotoSwipeLightbox({
            gallery: this.#portfolioGalleryID,
            children: '.slider-slide',
            pswpModule: PhotoSwipe,
            allowPanToNext: true,
            preloaderDelay: 0,
        })

        this.lightbox.on('uiRegister', () => this._handleLightboxUiRegister());
        this.lightbox.init();
    }

    /**
     * Add the caption text to the lightbox
     */
    _handleLightboxUiRegister = () => {
        this.lightbox.pswp.ui.registerElement({
            name: 'caption',
            order: 9,
            isButton: false,
            appendTo: 'root',
            onInit: (el: HTMLElement) => {
                this.lightbox.pswp.on('change', () => this._handleLightboxChange(el));
            },
        });
    }

    /**
     * React to change on the lightbox so that we can add the correct caption text
     * @param {HTMLElement} el
     */
    _handleLightboxChange = (el: HTMLElement) => {
        let captionText = '';
        const currSlideElement = this.lightbox.pswp.currSlide.data.element || null;
        const currSlideLink = currSlideElement?.querySelector('a.slider__item') || null;
        if (currSlideLink) {
            captionText = currSlideLink.getAttribute('title');
        }

        el.textContent = captionText ? captionText : '';
    }

    /**
     * Open lightbox when the button is clicked
     */
    _handleButtonClick() {
        const currentVisibleImageLink = this.#sliderContent?.querySelector('.slider-slide.is-active.is-visible .slider__item') as HTMLAnchorElement;
        currentVisibleImageLink
            ? currentVisibleImageLink.click()
            : this.#firstSliderImageLink.click();
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-portfolio-gallery': ToujouPortfolioGallery
    }
}
