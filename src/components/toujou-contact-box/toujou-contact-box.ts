import { LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('toujou-contact-box')
export class ToujouContactBox extends LitElement {
    // Constants
    openContactBoxBodyAttribute = 'contact-box-is-open';
    keyCodes = {
        tab: 9,
        escape: 27,
    };
    selectors = {
        focusableEls: '.contact-box__close, a.contact-box__link',
        contactStateInput: '#contact-state',
        closeButton: '.contact-box__close',
    };

    @property({ type: HTMLElement })
    private _closeButton: HTMLButtonElement | null = null;

    @property({ type: HTMLInputElement })
    private _contactStateInput: HTMLInputElement | null = null;

    @property({ type: Boolean })
    private state: boolean = false;

    @property({ type: HTMLElement })
    private _focusableEls: HTMLElement[] = [];

    @property({ type: HTMLElement })
    private _firstFocusableEl: HTMLElement | null = null;

    @property({ type: HTMLElement })
    private _lastFocusableEl: HTMLElement | null = null;

    @property({ type: HTMLElement })
    private _prevContentFocusEl: HTMLElement | null = null;

    protected createRenderRoot(): Element | ShadowRoot {
        return this;
    }

    /**
     * When the state changes we should:
     *  - toggle body attribute
     *  - focus trap
     *  - add / remove keydown event listeners
     * @param value
     */
    set _state(value: boolean) {
        this.state = value;

        if (this.state) {
            document.body.setAttribute(this.openContactBoxBodyAttribute, '');
            window.addEventListener('keydown', this._handleKeyDown.bind(this));
            this._prevContentFocusEl = document.activeElement as HTMLElement;
            this.focus();
        } else {
            this._contactStateInput!.checked = false;
            document.body.removeAttribute(this.openContactBoxBodyAttribute);
            window.removeEventListener('keydown', this._handleKeyDown);
            this._prevContentFocusEl?.focus();
        }
    }

    get _value() {
        return this.state;
    }

    /**
     * Get necessary elements and initialize
     */
    connectedCallback() {
        this._contactStateInput = document.querySelector(this.selectors.contactStateInput);
        this._closeButton = this.querySelector(this.selectors.closeButton);

        if (!this._closeButton || !this._contactStateInput) {
            console.error('TOUJOU: Could not find the necessary elements for the contact box');
            return;
        } else {
            this._init();
        }
    }

    /**
     * Remove event listeners
     */
    disconnectedCallback() {
        this._contactStateInput?.removeEventListener('change', this._handleStateInputStateChange);
        this.removeEventListener('click', this._handleClick);
        this._closeButton?.removeEventListener('click', this._handleCloseButtonClick);
    }

    /**
     * Get focusable elements and add event listeners
     */
    _init() {
        this._focusableEls = Array.from(this.querySelectorAll(this.selectors.focusableEls));
        this._firstFocusableEl = this._focusableEls[0];
        this._lastFocusableEl = this._focusableEls[this._focusableEls.length - 1];
        this._contactStateInput?.addEventListener('change', this._handleStateInputStateChange.bind(this));
        this.addEventListener('click', this._handleClick.bind(this));
        this._closeButton?.addEventListener('click', this._handleCloseButtonClick.bind(this));
    }

    /**
     * When the state input changes we should set the corresponding state to the this._state variable
     */
    _handleStateInputStateChange() {
        this._state = this._contactStateInput?.checked || false;
    }

    /**
     * Check if click target was the backdrop. if so, close contact box by "clicking" on close button
     * @param event
     */
    _handleClick(event: MouseEvent) {
        const clickedElement = event.target as HTMLElement;
        if (clickedElement === this && this._closeButton) {
            this._state = false;
        }
    }

    /**
     * React to key down events
     *  - Esc key should close the contact box
     *  - tab should move to next focusable element
     *  - tab + shift should move to previous focusable element
     * @param event
     */
    _handleKeyDown(event: KeyboardEvent) {
        if (!this.state) return;

        if (event.key === 'Escape' || event.keyCode === this.keyCodes.escape) {
            this._handleEscapePress();
        } else if (event.key === 'Tab' || event.keyCode === this.keyCodes.tab) {
            this._handleTabPress(event);
        }
    }

    /**
     * Close the contact box when the escape key is pressed
     */
    _handleEscapePress() {
        this._state = false;
    }

    /**
     * Focus trap inside the contact box
     * - tab should move to next focusable element
     * - tab + shift should move to previous focusable element
     * @param event
     */
    _handleTabPress(event: KeyboardEvent) {
        if (event.shiftKey) {
            if (document.activeElement === this._firstFocusableEl) {
                event.preventDefault();
                this._lastFocusableEl?.focus();
            }
        } else {
            if (document.activeElement === this._lastFocusableEl) {
                event.preventDefault();
                this._firstFocusableEl?.focus();
            }
        }
    }

    /**
     * Close the contact box when the close button is clicked
     */
    _handleCloseButtonClick() {
        this._state = false;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-contact-box': ToujouContactBox
    }
}