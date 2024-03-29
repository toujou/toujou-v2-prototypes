import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

/**
 * Burger button class which dispatches events on click and listens to media query changes
 */
@customElement('toujou-burger-button')
export class ToujouBurgerButton extends LitElement {
    /**
     * Internal state
     */
    @property({ type: Boolean })
    _state: boolean = false;

    // constants
    stateChangeEventName = 'toujou-burger-button-state-change';
    targetToggleAttribute = 'open-nav';
    topbarMqlChangeEventName = 'toujou-topbar-breakpoint-change';

    /**
     * When the state changes we need to update the UI attributes on the relevant elements
     * @param value
     */
    // @ts-ignore
    set state(value: boolean): void {
        this._state = value;
        this.setAttribute('aria-pressed', String(value));
        this.setAttribute('aria-expanded', String(value));
    }
    
    // @ts-ignore
    get state() {
        return this._state;
    }

    render() {
        return html`<slot name="content"></slot>`
    }

    /**
     * Add event listeners
     */
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('click', this._handleClickEvent);
        this.addEventListener('keyup', this._handleKeyUp);
        window.addEventListener(this.topbarMqlChangeEventName, this._handleMqlChange.bind(this));
    }

    /**
     * Remove event listeners
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.removeEventListener('click', this._handleClickEvent);
        this.removeEventListener('keyup', this._handleKeyUp);

        window.removeEventListener(this.topbarMqlChangeEventName, this._handleMqlChange.bind(this));
    }

    /**
     * toggle the button state when the button is clicked
     */
    _handleClickEvent = () => {
        this._toggleState();
    }

    /**
     * Toggle the button state on keyboard 'space' or 'enter' press
     * @param event
     */
    _handleKeyUp = (event: KeyboardEvent) => {
        if (event.key === 'Enter' || event.code === 'Enter' || event.code === 'Space' || event.key === ' ') {
            this._toggleState();
        }
    }

    /**
     * Toggle the button state and dispatch custom event so other elements can react to it
     */
    _toggleState = () => {
        this.state = !this._state;

        this.dispatchEvent(new CustomEvent(this.stateChangeEventName, {
            bubbles: true,
            composed: true,
            detail: { state: this.state }
        }));
    }

    /**
     * Close the button when the window grows to desktop width
     * @param event
     */
    _handleMqlChange(event: Event) {
        if (!(<CustomEvent>event).detail.state) {
            this.state = false;
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-burger-button': ToujouBurgerButton
    }
}
