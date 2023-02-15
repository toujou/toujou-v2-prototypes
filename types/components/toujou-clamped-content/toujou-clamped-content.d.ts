import { LitElement } from 'lit';
export declare class ToujouClampedContent extends LitElement {
    #private;
    static styles: import("lit").CSSResult[];
    private isOpen;
    protected clampDisabled: boolean;
    render(): import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'toujou-clamped-content': ToujouClampedContent;
    }
}
