import { LitElement, PropertyValues } from 'lit';
export declare class ToujouRatingStars extends LitElement {
    static styles: import("lit").CSSResult[];
    entities: string[];
    ratingEntity: string;
    ratingTotal: number;
    ratingValue: number;
    percentage: number;
    private readonly percentageCssVariable;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * Update the percentage when the relevant attributes change
     * @param changed
     */
    updated(changed: PropertyValues<this>): void;
    /**
     * Calculate the "rest percentage" depending on the ratingValue and ratingTotal values.
     * Set the correct value to the --rating-stars-percentage variable
     */
    updatePercentage(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'toujou-rating-stars': ToujouRatingStars;
    }
}
