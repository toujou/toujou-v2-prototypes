import { LitElement, PropertyValues } from 'lit'
import { customElement, property } from 'lit/decorators.js'

enum COOKIE_STATES {
    ACCEPTED = 'accepted',
    REJECTED = 'rejected'
}

enum STATE {
    OPEN = 'open',
    CLOSED = 'closed'
}

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

    @property({ type: String, attribute: 'state', reflect: true })
    state: string = STATE.CLOSED;

    @property({ type: Boolean, attribute: 'warning-visible', reflect: true })
    warningVisible: boolean = false;

    protected createRenderRoot(): Element | ShadowRoot {
        return this;
    }

    constructor() {
        super();

        this._handleButtonClick = this._handleButtonClick.bind(this);
        this._handleCloseButtonClick = this._handleCloseButtonClick.bind(this);
    }


    connectedCallback() {
        super.connectedCallback();
        this._getElements();

        if (location.hash === '#aaa') {
            this._setCookie(COOKIE_STATES.ACCEPTED);
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
            this.state = STATE.OPEN;
        } else if (this._overlayCookie === COOKIE_STATES.REJECTED) {
            this.state = STATE.OPEN;
        } else if (this._overlayCookie === COOKIE_STATES.ACCEPTED) {
            this.state = STATE.CLOSED;
        }
    }

    updated(_changedProperties: PropertyValues) {
        super.updated(_changedProperties);

        if (_changedProperties.has('state')) {
            // Enable/disable body scroll via overlay-open attribute
            document.body.toggleAttribute('overlay-open', STATE.OPEN === this.state);
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
        this.state = STATE.CLOSED;
        this._setCookie(COOKIE_STATES.ACCEPTED)
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
            this.state = STATE.OPEN;
            this._setCookie(COOKIE_STATES.REJECTED);
            this.warningVisible = true;
        } else if (choice === 'yes') {
            this.state = STATE.CLOSED;
            this._setCookie(COOKIE_STATES.ACCEPTED);
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
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-overlay': ToujouOverlay
    }
}
