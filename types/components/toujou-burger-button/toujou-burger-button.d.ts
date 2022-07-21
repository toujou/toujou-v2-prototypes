import { LitElement } from 'lit';
/**
 * Burger button class which dispatches events on click and listens to media query changes
 */
export declare class ToujouBurgerButton extends LitElement {
    /**
     * Internal state
     */
    _state: boolean;
    clickEventName: string;
    targetToggleAttribute: string;
    topbarMqlChangeEventName: string;
    /**
     * When the state changes we need to update the UI attributes on the relevant elements
     * @param value
     */
    set state(value: boolean);
    get state(): boolean;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * Add event listeners
     */
    connectedCallback(): void;
    /**
     * Remove event listeners
     */
    disconnectedCallback(): void;
    /**
     * When the button is clicked: update the state, dispatch custom event
     */
    _handleClickEvent(): void;
    /**
     * Close the button when the window grows to desktop width
     * @param event
     */
    _handleMqlChange(event: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'toujou-burger-button': ToujouBurgerButton;
    }
}
