import { LitElement } from 'lit';
export declare class ToujouOverlay extends LitElement {
    _overlayId: string | null;
    _warningEl: Element | null;
    _closeButton: Element | null;
    _buttons: Element[];
    _overlayCookie: string | false;
    _state: string;
    private COOKIE_STATES;
    private STATE;
    protected createRenderRoot(): Element | ShadowRoot;
    constructor();
    /**
     * Set correct internal state value and show / hide overlay accordingly
     * @param value
     */
    set state(value: string);
    /**
     * Get value from internal state
     */
    get state(): string;
    connectedCallback(): void;
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
    /**
     * Show overlay by setting the style and preventing body scroll in background
     */
    _showOverlay(): void;
    /**
     * Hide overlay by setting display to none, allow body scroll again
     */
    _hideOverlay(): void;
    /**
     * Add attribute to show warning and hide the buttons
     */
    _showWarning(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'toujou-overlay': ToujouOverlay;
    }
}
