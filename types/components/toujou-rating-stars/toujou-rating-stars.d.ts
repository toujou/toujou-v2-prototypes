import { LitElement, PropertyValues } from 'lit';
export declare class ToujouRatingStars extends LitElement {
    static styles: import("lit").CSSResult[];
    entities: string[];
    ratingEntity: string;
    ratingTotal: number;
    ratingValue: number;
    percentage: number;
    render(): import("lit-html").TemplateResult<1>;
    updated(changed: PropertyValues<this>): void;
    updatePercentage(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'toujou-rating-stars': ToujouRatingStars;
    }
}
