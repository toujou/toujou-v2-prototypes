import { LitElement } from 'lit';
export declare class ToujouBreadcrumb extends LitElement {
    static styles: import("lit").CSSResult[];
    breakpoint: number;
    isMobile: boolean;
    list: HTMLOListElement | null;
    listItems: HTMLLIElement[] | null;
    toggleButtons: HTMLButtonElement[] | null;
    mobileMenuIsOpen: Boolean;
    private _mql;
    render(): import("lit-html").TemplateResult<1>;
    constructor();
    firstUpdated(): void;
    connectedCallback(): void;
    /**
     * Calculate at which width the breakpoint between "mobile" and "normal" mode is
     */
    _calculateBreakpoint(): void;
    /**
     * Toggle the mobile menu open / close
     */
    _handleToggleClick(): void;
    /**
     * Get clones of all the nav list items and copy them into the fake list element
     */
    _populateFakeList(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'toujou-breadcrumb': ToujouBreadcrumb;
    }
}
