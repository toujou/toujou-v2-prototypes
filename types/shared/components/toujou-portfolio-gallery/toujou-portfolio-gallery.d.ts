import { LitElement } from 'lit';
export declare class ToujouPortfolioGallery extends LitElement {
    #private;
    static styles: import("lit").CSSResult[];
    _currentImageIndex: number;
    _imageCount: number | undefined;
    /**
     * Render the slots for the element's content
     */
    render(): import("lit").TemplateResult<1>;
    /**
     * Open lightbox when the button is clicked
     */
    _handleButtonClick(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'toujou-portfolio-gallery': ToujouPortfolioGallery;
    }
}
