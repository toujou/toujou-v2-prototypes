import { LitElement } from 'lit';
export declare class ToujouPortfolioGallery extends LitElement {
    #private;
    static styles: import("lit").CSSResult[];
    _currentImageIndex: number;
    _imageCount: number | undefined;
    private lightbox;
    protected videoPlugin: any;
    /**
     * Initialize the lightbox when the portfolio gallery element first loads
     */
    connectedCallback(): void;
    /**
     * Render the slots for the element's content
     */
    render(): import("lit-html").TemplateResult<1>;
    /**
     * Initialize the lightbox with the correct settings
     */
    _initializeLightbox(): void;
    /**
     * Add the caption text to the lightbox
     */
    _handleLightboxUiRegister: () => void;
    /**
     * React to change on the lightbox so that we can add the correct caption text
     * @param {HTMLElement} el
     */
    _handleLightboxChange: (el: HTMLElement) => void;
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
