import { LitElement } from 'lit';
export declare class ToujouGallery extends LitElement {
    private lightbox;
    private get galleryID();
    protected createRenderRoot(): Element | ShadowRoot;
    connectedCallback(): void;
    /**
     * Register a new UI element: the caption
     */
    _handleUiRegister: () => void;
    /**
     * Reacto to change on the lightbox so we can add the correct caption text
     * @param {HTMLElement} el
     */
    _handleChange: (el: HTMLElement) => void;
}
declare global {
    interface HTMLElementTagNameMap {
        'toujou-gallery': ToujouGallery;
    }
}
