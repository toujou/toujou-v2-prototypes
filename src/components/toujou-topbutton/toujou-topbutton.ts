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
    }

    disconnectedCallback() {
        window.removeEventListener('scroll', this._checkVisibility);
        window.addEventListener('resize', this._checkVisibility);
        this.removeEventListener('click', this._handleClick);

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
     * When the button is clicked we scroll to the top of the page and set focus on the 1st element on the page
     */
    _handleClick(): void {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
        const firstFocusableElement = this._getFirstFocusableElementOnPage();
        if (firstFocusableElement) {
            firstFocusableElement.focus();
            requestAnimationFrame(() => {
                firstFocusableElement.focus();
            })
        }
    }

    /**
     * Get first element on the page, so we can set focus once the button is clicked
     */
    _getFirstFocusableElementOnPage = (): HTMLElement | undefined => {
        let firstFocusableElement = document.querySelector(':not(:is(.header, .navigation)) :is(a, input, select, textarea, button, [tabindex]:not([tabindex="-1"]))')

        if (firstFocusableElement) {
            return firstFocusableElement as HTMLElement;
        } else {
            console.error('TOUJOU: Could not add focus to the first element on the page');
            return;
        }
    }
}

customElements.define(ToujouTopbutton.is, ToujouTopbutton);
