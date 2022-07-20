import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('toujou-burger-button')
export class ToujouBurgerButton extends LitElement {

    /**
     * Selector to the target element to toggle
     */
    @property({
        type: String,
        attribute: 'toggle-element-selector',
    })
    toggleElementSelector: string | null = null;

    /**
     * DOM target element to toggle when state changes
     */
    @property({
        type: HTMLElement,
    })
    _elementToToggle: HTMLElement | null = null;

    /**
     * Internal state
     */
    @property({
        type: Boolean
    })
    _state: boolean = false;

    // constants
    static clickEventName = 'toujou-burger-button-click'
    static targetToggleAttribute = 'open-nav'

    /**
     * When the state changes we need to update the UI attributes on the relevant elements
     * @param value
     */
    // @ts-ignore
    set state(value: boolean): void {
        this._state = value;
        this.setAttribute('aria-pressed', String(value));
        this.setAttribute('aria-expanded', String(value));
        this._elementToToggle?.setAttribute(ToujouBurgerButton.targetToggleAttribute, String(value));
    }
    
    // @ts-ignore
    get state() {
        return this._state;
    }

    render() {
        return html`<slot name="content"></slot>`
    }

    connectedCallback() {
        super.connectedCallback();

        // Get the target element from the DOM. If not found, print error to console
        this._elementToToggle = document.querySelector(this.toggleElementSelector!);
        if (!this._elementToToggle) {
            console.error('TOUJOU: Could not find the toggle element for the burger menu. Please make sure you are using a valid selector');
            return;
        }

        this.addEventListener('click', this._handleClickEvent.bind(this));
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.removeEventListener('click', this._handleClickEvent.bind(this));
    }

    /**
     * When the button is clicked: update the state, dispatch custom event
     */
    _handleClickEvent() {
        this.state = !this._state;

        this.dispatchEvent(new CustomEvent(ToujouBurgerButton.clickEventName, {
            bubbles: true,
            composed: true,
            detail: { state: this.state }
        }));
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-burger-button': ToujouBurgerButton
    }
}
