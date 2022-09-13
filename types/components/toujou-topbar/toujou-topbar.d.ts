import { LitElement } from 'lit';
/**
 * Topbar element
 */
export declare class ToujouTopbar extends LitElement {
    burgerButtonClickEvent: string;
    mqlChangeEventName: string;
    openNavBodyAttribute: string;
    _isOpen: boolean;
    _mql: MediaQueryList;
    _isMobile: boolean;
    protected createRenderRoot(): Element | ShadowRoot;
    /**
     * Add event listeners
     */
    connectedCallback(): void;
    /**
     * Remove event listeners
     */
    disconnectedCallback(): void;
    /**
     * Set correct isOpen value according to state of burger button click event
     * Add / remove attribute from the body element so we can prevent scroll in the background
     * @param event
     */
    _handleBurgerButtonClick(event: Event): void;
    /**
     * When the window grows to desktop width:
     *  - dispatch a "media query change" event that other elements (burger and navigation) can reacto to
     *  - set the internal isOpen state to false
     * @param event
     */
    _handleMqlChange(event: MediaQueryListEvent): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'toujou-topbar': ToujouTopbar;
    }
}
