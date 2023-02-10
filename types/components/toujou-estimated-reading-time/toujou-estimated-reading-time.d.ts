import { LitElement, PropertyValues } from 'lit';
export declare class ToujouEstimatedReadingTime extends LitElement {
    #private;
    wordCount: number;
    duration: number;
    targetSelector: string;
    minutesSingularText: string;
    minutesPluralText: string;
    lessThanText: string;
    readingSpeed: number;
    get result(): string;
    render(): import("lit-html").TemplateResult<1>;
    constructor();
    updated(changed: PropertyValues<this>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'toujou-estimated-reading-time': ToujouEstimatedReadingTime;
    }
}
