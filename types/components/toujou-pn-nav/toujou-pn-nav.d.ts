export declare class ToujouPnNav extends HTMLElement {
    private links;
    constructor();
    protected createRenderRoot(): HTMLElement | DocumentFragment;
    connectedCallback(): void;
    disconnectedCallback(): void;
    _onLinkClick: (event: MouseEvent) => void;
}
declare global {
    interface HTMLElementTagNameMap {
        'toujou-pn-nav': ToujouPnNav;
    }
}
