import { LitElement } from 'lit';
export declare class ToujouClampedContent extends LitElement {
    #private;
    static styles: import("lit").CSSResult[];
    private isOpen;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'toujou-clamped-content': ToujouClampedContent;
    }
}
