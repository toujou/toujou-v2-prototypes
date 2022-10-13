import { LitElement } from 'lit';
export declare class ToujouContactBox extends LitElement {
    private _closeButton;
    protected createRenderRoot(): Element | ShadowRoot;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * Check if click target was the backdrop. if so, close contact box by "clicking" on close button
     * @param event
     */
    _handleClick(event: MouseEvent): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'toujou-contact-box': ToujouContactBox;
    }
}
