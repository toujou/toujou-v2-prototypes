import { LitElement } from 'lit';
export declare class ToujouMediaInfo extends LitElement {
    isOpen: boolean;
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
    private _toggleIsOpen;
}
declare global {
    interface HTMLElementTagNameMap {
        'toujou-media-info': ToujouMediaInfo;
    }
}
