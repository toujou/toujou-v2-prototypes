import { LitElement } from 'lit';
/**
 * Burger button class which dispatches events on click and listens to media query changes
 */
export declare class ToujouBurgerButton extends LitElement {
    /**
     * Internal state
     */
    _state: boolean;
    stateChangeEventName: string;
    targetToggleAttribute: string;
    topbarMqlChangeEventName: string;
    /**
     * When the state changes we need to update the UI attributes on the relevant elements
     * @param value
     */
    set state(value: boolean): void;
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
     * toggle the button state when the button is clicked
     */
    _handleClickEvent: () => void;
    /**
     * Toggle the button state on keyboard 'space' or 'enter' press
     * @param event
     */
    _handleKeyUp: (event: KeyboardEvent) => void;
    /**
     * Toggle the button state and dispatch custom event so other elements can react to it
     */
    _toggleState: () => void;
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
