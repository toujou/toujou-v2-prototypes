import { LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ToujouDetails } from "../toujou-details/toujou-details";

@customElement('toujou-details-accordion')
export class ToujouDetailsAccordion extends LitElement {

    /**
     * Backend option, allow only on child <toujou-details> element to be open at a time
     */
    @property({
        type: Boolean,
        attribute: "single-expand-mode"
    })
    singleExpandMode: boolean = false;

    /**
     * List of all the child <toujou-details> elements
     */
    @property({
        type: Array
    })
    toujouDetailsElements: ToujouDetails[] = [];

    constructor() {
        super();
    }

    connectedCallback() {
        this.addEventListener('toujou-details-connected', this._handleDetailsConnected);
        this.addEventListener('toujou-details-toggle', this._handleDetailsToggle);

        this.dispatchEvent(new CustomEvent('toujou-details-accordion-connected', {
            bubbles: true,
            composed: true,
            detail: {
                accordionEl: this
            }
        }));
    }

    disconnectedCallback() {
        this.removeEventListener('toujou-details-connected', this._handleDetailsConnected);
        this.removeEventListener('toujou-details-toggle', this._handleDetailsToggle);
    }

    _handleDetailsConnected(event: Event): void {
        this.toujouDetailsElements.push((<any>event).detail.detailsEl);
    }

    /**
     * If we are on single-expand-mode, we must close all other <toujou-details> when a new one opens
     * For printing we must allow all accordion items to be open
     * @param event
     */
    _handleDetailsToggle(event: Event) {
        if (!this.singleExpandMode || window.matchMedia('print').matches || !((<any>event).detail.state)) return;

        const currentDetailsId = (<any>event).detail.detailsEl.id;
        this.toujouDetailsElements.forEach((detailsEl) => {
            if (detailsEl.id === currentDetailsId) return;
            detailsEl.isOpen = false;
        })
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-details-accordion': ToujouDetailsAccordion
    }
}

