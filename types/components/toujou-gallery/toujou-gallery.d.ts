import { LitElement } from 'lit';
export declare class ToujouGallery extends LitElement {
    protected createRenderRoot(): Element | ShadowRoot;
    connectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'toujou-gallery': ToujouGallery;
    }
}
