import { LitElement } from 'lit';
export declare class ToujouBurgerButton extends LitElement {
    /**
     * Selector to the target element to toggle
     */
    toggleElementSelector: string | null;
    /**
     * DOM target element to toggle when state changes
     */
    _elementToToggle: HTMLElement | null;
    /**
     * Internal state
     */
    _state: boolean;
    static clickEventName: string;
    static targetToggleAttribute: string;
    /**
     * When the state changes we need to update the UI attributes on the relevant elements
     * @param value
     */
    set state(value: boolean);
    get state(): boolean;
    render(): import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * When the button is clicked: update the state, dispatch custom event
     */
    _handleClickEvent(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'toujou-burger-button': ToujouBurgerButton;
    }
}
