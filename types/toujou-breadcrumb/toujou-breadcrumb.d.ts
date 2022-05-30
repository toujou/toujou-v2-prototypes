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
    disconnectedCallback(): void;
    _calculateBreakpoint(): void;
    _handleToggleClick(): void;
    _populateFakeList(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'toujou-breadcrumb': ToujouBreadcrumb;
    }
}
