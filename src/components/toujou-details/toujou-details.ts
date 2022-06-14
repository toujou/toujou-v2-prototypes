import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { ToujouDetailsStyles } from "./toujou-details.styles.js";

@customElement('toujou-details')
export class ToujouDetails extends LitElement {

    static styles = [ ToujouDetailsStyles ];

    accordionParentTag = 'toujou-details-accordion';

    /**
     * Is true if the toujou-details element is a child of a toujou-details-accordion element
     */
    @property({
        type: Boolean
    })
    isAccordionItem: boolean = false;

    /**
     * Reference to the <details> element in the shadowRoot
     */
    @property({
        type: HTMLDetailsElement
    })
    detailsEl: HTMLDetailsElement | null = null;

    /**
     * Reflect to the host element, so we can also style elements on the light dom
     */
    @property({
        type: Boolean,
        reflect: true,
        attribute: 'is-open'
    })
    isOpen: boolean = false;

    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();
        this.isAccordionItem = !!this.closest(this.accordionParentTag);

        if (this.isAccordionItem) {
            this.dispatchEvent(new CustomEvent('toujou-details-connected', {
                bubbles: true,
                composed: true,
                detail: {
                    detailsEl: this
                }
            }));
        }
    }

    firstUpdated() {
        this.detailsEl = this.shadowRoot!.querySelector('.details');
        this.isOpen = this.detailsEl?.hasAttribute('open') || false;
    }

    render() {
        return html`
            <details class="details" ?open="${this.isOpen}" @toggle="${this._handleDetailsChange}">
                <summary class="details__summary">
                    <slot name="summary"></slot>
                    <slot name="chevron"></slot>
                </summary>
                <section class="details__content">
                    <slot name="content"></slot>
                </section>
            </details>
        `
    }

    /**
     * Update the isOpen property according to the 'open' attribute on the details element
     * and dispatch a custom event so other elements can react to the change
     *
     * @param event
     */
    _handleDetailsChange(event: Event) {
        const eventTarget = event.target as HTMLDetailsElement;
        this.isOpen = eventTarget.hasAttribute('open') || false;

        if (this.isAccordionItem) {
            this.dispatchEvent(new CustomEvent('toujou-details-toggle', {
                bubbles: true,
                composed: true,
                detail: {
                    detailsEl: this,
                    state: this.isOpen
                }
            }));
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-details': ToujouDetails
    }
}
