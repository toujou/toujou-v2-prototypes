import { LitElement } from 'lit';
export declare class ToujouGallery extends LitElement {
    private lightbox;
    protected videoPlugin: any;
    private get galleryID();
    protected createRenderRoot(): Element | ShadowRoot;
    connectedCallback(): void;
    /**
     * Register a new UI element: caption
     */
    _handleUiRegister: () => void;
    /**
     * React to change on the lightbox so that we can add the correct caption text
     * @param {HTMLElement} el
     */
    _handleChange: (el: HTMLElement) => void;
}
declare global {
    interface HTMLElementTagNameMap {
        'toujou-gallery': ToujouGallery;
    }
}
