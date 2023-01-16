import { html, LitElement, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';

class ToujouTopbutton extends LitElement {
    @property({ type: Boolean, attribute: "is-visible", reflect: true })
    private visible: boolean = false;

    static get is() {
        return 'toujou-topbutton';
    }

    constructor() {
        super();

        this._checkVisibility = this._checkVisibility.bind(this);
    }

    render() {
        return html`
            <slot id="content"></slot>
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        this.setAttribute('role', 'button');
        this._checkVisibility();

        window.addEventListener('scroll', this._checkVisibility);
        window.addEventListener('resize', this._checkVisibility);
        this.addEventListener('click', this._handleClick);
        this.addEventListener('keyup', this._handleKeyUp);
    }

    disconnectedCallback() {
        window.removeEventListener('scroll', this._checkVisibility);
        window.addEventListener('resize', this._checkVisibility);
        this.removeEventListener('click', this._handleClick);
        this.removeEventListener('keyup', this._handleKeyUp);

        super.disconnectedCallback();
    }

    updated(changedProperties: PropertyValues) {
        super.updated(changedProperties);
        if (changedProperties.has('visible')) {
            this.setAttribute('aria-hidden', (!this.visible).toString());
        }
    }

    /**
     * Get the viewport height
     */
    get _viewportHeight(): number {
        return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    }

    /**
     * Check if the button is visible according to the amount scrolled and the viewport height
     */
    _checkVisibility = (): void => {
        this.visible = document.body.scrollTop > this._viewportHeight || document.documentElement.scrollTop > this._viewportHeight;
    }

    /**
     * When the button is clicked we scroll to the top of the page and reset focus
     */
    _handleClick(): void {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
        this._resetFocus()
    }

    /**
     * Detect "Enter" + "Space" keyboard event to trigger button activation and improve accessibility
     * @param event
     */
    _handleKeyUp(event: KeyboardEvent): void {
        if (event.key === 'Enter' || event.code === 'Enter' || event.code === 'Space' || event.key === ' ') {
            this._handleClick();
        }
    }

    /**
     * Reset focus / return focus to start of the page
     */
    _resetFocus() {
        const focusedElement = document.activeElement as HTMLElement;
        if (!focusedElement) return;
        focusedElement.blur();
    }
}

customElements.define(ToujouTopbutton.is, ToujouTopbutton);
