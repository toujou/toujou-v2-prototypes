import { LitElement, html, PropertyValues } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ToujouRatingStarsStyles } from "./toujou-rating-stars.styles";

@customElement('toujou-rating-stars')
export class ToujouRatingStars extends LitElement {
    static styles = [ToujouRatingStarsStyles];

    @property({ type: Array })
    entities: string[] = [];

    @property({ type: String, attribute: 'rating-entity' })
    ratingEntity: string = '';

    @property({ type: Number, attribute: 'rating-total' })
    ratingTotal: number = 0;

    @property({ type: Number, attribute: 'rating-value' })
    ratingValue: number = 0;

    @property({ type: Number })
    percentage: number = 0;

    render() {
        console.log('this', this.ratingEntity, this.ratingTotal, this.ratingValue, this.entities);
        return html`
           ${this.entities.map((entity: string) => {
               return html`
                   <span class="entity">${entity}</span>
               `
           })}
           <span class="overlay"></span>
        `
    }

    updated(changed: PropertyValues<this>) {
        if (changed.has('ratingTotal')) {
            this.entities = Array(this.ratingTotal).fill(this.ratingEntity);
            this.updatePercentage();
        }
        if (changed.has('ratingValue')) {
            this.entities = Array(this.ratingTotal).fill(this.ratingEntity);
            this.updatePercentage();
        }
    }

    updatePercentage() {
        this.percentage = (this.ratingValue / this.ratingTotal) * 100;
        console.log('per', this.percentage);
        document.documentElement.style.setProperty('--rating-stars-percentage', `${100 - this.percentage}%`);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-rating-stars': ToujouRatingStars
    }
}
