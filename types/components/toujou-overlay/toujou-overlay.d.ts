import { LitElement, PropertyValues } from 'lit';
export declare class ToujouOverlay extends LitElement {
    _overlayId: string | null;
    _warningEl: Element | null;
    _closeButton: Element | null;
    _buttons: Element[];
    _overlayCookie: string | false;
    state: string;
    warningVisible: boolean;
    protected createRenderRoot(): Element | ShadowRoot;
    constructor();
    connectedCallback(): void;
    updated(_changedProperties: PropertyValues): void;
    disconnectedCallback(): void;
    /**
     * Close overlay when the close button is clicked
     */
    _handleCloseButtonClick(): void;
    /**
     * Check which button was clicked and set state accordingly
     * @param event
     */
    _handleButtonClick(event: Event): void;
    /**
     * Get necessary elements
     */
    _getElements(): void;
    /**
     * Set cookie with the correct name and state
     * @param choice
     */
    _setCookie(choice: string): void;
    /**
     * Get cookie for the current overlay
     * @param cookieName
     */
    _checkCookie(cookieName: string): string | false;
}
declare global {
    interface HTMLElementTagNameMap {
        'toujou-overlay': ToujouOverlay;
    }
}
