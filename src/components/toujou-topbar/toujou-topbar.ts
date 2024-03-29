import { LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

/**
 * Topbar element
 */
@customElement('toujou-topbar')
export class ToujouTopbar extends LitElement {
    // Constants
    burgerButtonStateChangeEvent = 'toujou-burger-button-state-change';
    mqlChangeEventName = 'toujou-topbar-breakpoint-change';
    openNavBodyAttribute = 'nav-is-open';

    @property({ type: Boolean, reflect: true, attribute: 'open-nav' })
    _isOpen: boolean = false;

    @property({ type: MediaQueryList })
    _mql: MediaQueryList = window.matchMedia("(max-width: 839px)");

    @property({ type: Boolean, })
    _isMobile: boolean = this._mql.matches;

    protected createRenderRoot(): Element | ShadowRoot {
        return this;
    }

    /**
     * Add event listeners
     */
    connectedCallback() {
        super.connectedCallback();

        window.addEventListener(this.burgerButtonStateChangeEvent, this._handleBurgerButtonClick.bind(this));
        this._mql.addEventListener('change', this._handleMqlChange.bind(this));
    }

    /**
     * Remove event listeners
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        window.removeEventListener(this.burgerButtonStateChangeEvent, this._handleBurgerButtonClick.bind(this));
        this._mql.removeEventListener('change', this._handleMqlChange.bind(this));
    }

    /**
     * Set correct isOpen value according to state of burger button click event
     * Add / remove attribute from the body element, so we can prevent scroll in the background
     * @param event
     */
    _handleBurgerButtonClick(event: Event) {
        this._isOpen = (<CustomEvent>event).detail.state;
        this._isOpen
            ? document.body.setAttribute(this.openNavBodyAttribute, '')
            : document.body.removeAttribute(this.openNavBodyAttribute);
    }

    /**
     * When the window grows to desktop width:
     *  - dispatch a "media query change" event that other elements (burger and navigation) can reacto to
     *  - set the internal isOpen state to false
     * @param event
     */
    _handleMqlChange(event: MediaQueryListEvent) {
        const isMobile = event.matches;
        this.dispatchEvent(new CustomEvent(this.mqlChangeEventName, {
            bubbles: true,
            composed: true,
            detail: { state: isMobile }
        }));

        if (!isMobile) {
            this._isOpen = false;
        }
    }
}


declare global {
    interface HTMLElementTagNameMap {
        'toujou-topbar': ToujouTopbar
    }
}
