import { LitElement, PropertyValues } from 'lit';
export declare class ToujouMediaInfo extends LitElement {
    isOpen: boolean;
    private readonly isOpenParentAttribute;
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
    constructor();
    updated(changed: PropertyValues<this>): void;
    /**
     * Handle click on whole element to prevent click on element behind when open
     * @param event
     */
    _handleClick: (event: any) => void;
    /**
     * Toggle to "isOpen" property, which also reflects as an attribute on the element
     * @private
     */
    private _toggleIsOpen;
}
declare global {
    interface HTMLElementTagNameMap {
        'toujou-media-info': ToujouMediaInfo;
    }
}
