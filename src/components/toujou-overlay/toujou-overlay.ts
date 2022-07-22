import { LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('toujou-overlay')
export class ToujouOverlay extends LitElement {
    @property({ type: String })
    _overlayId: string | null = null;

    @property({ type: HTMLElement })
    _warningEl: Element | null = null;

    @property({ type: HTMLElement })
    _closeButton: Element | null = null;

    @property({ type: Array })
    _buttons: Element[] = [];

    @property({ type: String })
    _overlayCookie: string | false = false;

    @property({ type: String })
    _state: string = 'open';

    private COOKIE_STATES = {
        ACCEPTED: 'accepted',
        REJECTED: 'rejected',
    }

    private STATE = {
        OPEN: 'open',
        CLOSED: 'closed'
    }

    protected createRenderRoot(): Element | ShadowRoot {
        return this;
    }

    constructor() {
        super();

        this._handleButtonClick = this._handleButtonClick.bind(this);
        this._handleCloseButtonClick = this._handleCloseButtonClick.bind(this);
    }

    /**
     * Set correct internal state value and show / hide overlay accordingly
     * @param value
     */
    // @ts-ignore
    set state(value) {
        this._state = value;
        this._state === this.STATE.OPEN ? this._showOverlay() : this._hideOverlay();
    }

    /**
     * Get value from internal state
     */
    // @ts-ignore
    get state() {
        return this._state;
    }

    connectedCallback() {
        super.connectedCallback();
        this._getElements();

        if (location.hash === '#aaa') {
            this._setCookie(this.COOKIE_STATES.ACCEPTED);
        }

        this._overlayCookie = this._checkCookie('toujou-overlay-' + this._overlayId)

        if (this._buttons.length) {
            this._buttons.forEach((button) => {
                button.addEventListener('click', this._handleButtonClick)
            })
        }

        if (this._closeButton) {
            this._closeButton.addEventListener('click', this._handleCloseButtonClick)
        }

        if (!this._overlayCookie) {
            this.state = this.STATE.OPEN;
        } else if (this._overlayCookie === this.COOKIE_STATES.REJECTED) {
            this.state = this.STATE.OPEN;
        } else if (this._overlayCookie === this.COOKIE_STATES.ACCEPTED) {
            this.state = this.STATE.CLOSED;
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        if (this._buttons.length) {
            this._buttons.forEach((button) => {
                button.removeEventListener('click', this._handleButtonClick);
            })
        }

        if (this._closeButton) {
            this._closeButton.removeEventListener('click', this._handleCloseButtonClick);
        }
    }

    /**
     * Close overlay when the close button is clicked
     */
    _handleCloseButtonClick() {
        this.state = this.STATE.CLOSED;
        this._setCookie(this.COOKIE_STATES.ACCEPTED)
    }

    /**
     * Check which button was clicked and set state accordingly
     * @param event
     */
    _handleButtonClick(event: Event) {
        event.preventDefault();
        const target = event?.target as HTMLButtonElement;
        const choice: string | null = target.getAttribute('data-overlay-value') || null;


        if (choice === 'no') {
            this.state = this.STATE.OPEN;
            this._setCookie(this.COOKIE_STATES.REJECTED);
            this._showWarning();
        } else if (choice === 'yes') {
            this.state = this.STATE.CLOSED;
            this._setCookie(this.COOKIE_STATES.ACCEPTED);
        }
        target.blur();
    }

    /**
     * Get necessary elements
     */
    _getElements(): void {
        this._overlayId = this.getAttribute('id') || null;
        this._warningEl = this.querySelector('.overlay__warning');
        this._closeButton = this.querySelector('.overlay__close-button');
        this._buttons = Array.from(this.querySelectorAll('.overlay__buttons .button'));
    }

    /**
     * Set cookie with the correct name and state
     * @param choice
     */
    _setCookie(choice: string): void {
        document.cookie = `toujou-overlay-${this._overlayId}=${choice};path=/;`;
    }

    /**
     * Get cookie for the current overlay
     * @param cookieName
     */
    _checkCookie(cookieName: string): string | false {
        const match = document.cookie.match(new RegExp('(^| )' + cookieName + '=([^;]+)'));
        return match ? match[2] : false;
    }

    /**
     * Show overlay by setting the style and preventing body scroll in background
     */
    _showOverlay() {
        this.style.display = 'flex';
        document.body.setAttribute('overlay-open', '');
    }

    /**
     * Hide overlay by setting display to none, allow body scroll again
     */
    _hideOverlay() {
        this.style.display = 'none';
        document.body.removeAttribute('overlay-open');
    }

    /**
     * Add attribute to show warning and hide the buttons
     */
    _showWarning() {
        this.setAttribute('warning-visible', '');
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-overlay': ToujouOverlay
    }
}
