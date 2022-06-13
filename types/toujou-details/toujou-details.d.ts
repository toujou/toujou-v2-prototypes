import { LitElement } from 'lit';
export declare class ToujouDetails extends LitElement {
    static styles: import("lit").CSSResult[];
    accordionParentTag: string;
    /**
     * Is true if the toujou-details element is a child of a toujou-details-accordion element
     */
    isAccordionItem: boolean;
    /**
     * Reference to the <details> element in the shadowRoot
     */
    detailsEl: HTMLDetailsElement | null;
    /**
     * Reflect to the host element, so we can also style elements on the light dom
     */
    isOpen: boolean;
    constructor();
    connectedCallback(): void;
    firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * Update the isOpen property according to the 'open' attribute on the details element
     * and dispatch a custom event so other elements can react to the change
     *
     * @param event
     */
    _handleDetailsChange(event: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'toujou-details': ToujouDetails;
    }
}
