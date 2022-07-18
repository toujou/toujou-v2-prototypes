import { LitElement } from 'lit';
export declare class ToujouGallery extends LitElement {
    static styles: import("lit").CSSResult;
    private lightbox;
    constructor();
    createRenderRoot(): this;
    connectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'toujou-gallery': ToujouGallery;
    }
}
