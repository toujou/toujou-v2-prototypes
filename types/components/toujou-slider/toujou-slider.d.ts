import { LitElement } from 'lit';
export declare class ToujouSlider extends LitElement {
    constructor();
    render(): import("lit-html").TemplateResult<1>;
    firstUpdated(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'toujou-slider': ToujouSlider;
    }
}
