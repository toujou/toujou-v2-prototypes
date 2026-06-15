import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ToujouPortfolioGalleryStyles } from "./toujou-portfolio-gallery.styles.js";

@customElement('toujou-portfolio-gallery')
export class ToujouPortfolioGallery extends LitElement {
    static styles = [ ToujouPortfolioGalleryStyles ];

    @property({ type: Number }) _currentImageIndex: number = 1;
    @property({ type: Number }) _imageCount: number | undefined = 0;

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
     * Render the slots for the element's content
     */
    render() {
        return html`
            <slot id="slider" name="slider"></slot>
            <slot id="button" name="button" @click="${this._handleButtonClick}"></slot>
        `
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
