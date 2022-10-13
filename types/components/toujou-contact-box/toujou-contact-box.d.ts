import { LitElement } from 'lit';
export declare class ToujouContactBox extends LitElement {
    openContactBoxBodyAttribute: string;
    keyCodes: {
        tab: number;
        escape: number;
    };
    selectors: {
        focusableEls: string;
        contactStateInput: string;
        closeButton: string;
    };
    private _closeButton;
    private _contactStateInput;
    private state;
    private _focusableEls;
    private _firstFocusableEl;
    private _lastFocusableEl;
    private _prevContentFocusEl;
    protected createRenderRoot(): Element | ShadowRoot;
    /**
     * When the state changes we should:
     *  - toggle body attribute
     *  - focus trap
     *  - add / remove keydown event listeners
     * @param value
     */
    set _state(value: boolean);
    get _value(): boolean;
    /**
     * Get necessary elements and initialize
     */
    connectedCallback(): void;
    /**
     * Remove event listeners
     */
    disconnectedCallback(): void;
    /**
     * Get focusable elements and add event listeners
     */
    _init(): void;
    /**
     * When the state input changes we should set the corresponding state to the this._state variable
     */
    _handleStateInputStateChange(): void;
    /**
     * Check if click target was the backdrop. if so, close contact box by "clicking" on close button
     * @param event
     */
    _handleClick(event: MouseEvent): void;
    /**
     * React to key down events
     *  - Esc key should close the contact box
     *  - tab should move to next focusable element
     *  - tab + shift should move to previous focusable element
     * @param event
     */
    _handleKeyDown(event: KeyboardEvent): void;
    /**
     * Close the contact box when the escape key is pressed
     */
    _handleEscapePress(): void;
    /**
     * Focus trap inside the contact box
     * - tab should move to next focusable element
     * - tab + shift should move to previous focusable element
     * @param event
     */
    _handleTabPress(event: KeyboardEvent): void;
    /**
     * Close the contact box when the close button is clicked
     */
    _handleCloseButtonClick(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'toujou-contact-box': ToujouContactBox;
    }
}
