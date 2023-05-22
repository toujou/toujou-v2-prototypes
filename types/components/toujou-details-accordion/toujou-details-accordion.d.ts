import { LitElement } from 'lit';
import { ToujouDetails } from "../toujou-details/toujou-details";
export declare class ToujouDetailsAccordion extends LitElement {
    /**
     * Backend option, allow only on child <toujou-details> element to be open at a time
     */
    singleExpandMode: boolean;
    /**
     * List of all the child <toujou-details> elements
     */
    toujouDetailsElements: ToujouDetails[];
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    _handleDetailsConnected(event: Event): void;
    /**
     * If we are on single-expand-mode, we must close all other <toujou-details> when a new one opens
     * For printing we must allow all accordion items to be open
     * @param event
     */
    _handleDetailsToggle(event: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'toujou-details-accordion': ToujouDetailsAccordion;
    }
}
