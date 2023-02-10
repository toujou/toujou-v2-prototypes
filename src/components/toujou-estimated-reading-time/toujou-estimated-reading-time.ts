import { LitElement, html, PropertyValues } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('toujou-estimated-reading-time')
export class ToujouEstimatedReadingTime extends LitElement {
    @property({ type: Number })
    wordCount: number = 0;

    @property({ type: Number })
    duration: number = 0;

    @property({ type: String, attribute: 'target-selector'})
    targetSelector: string = '';

    @property({ type: String, attribute: 'minutes-singular-text' })
    minutesSingularText: string = "minute";

    @property({ type: String, attribute: 'minutes-plural-text' })
    minutesPluralText: string = "minutes"

    @property({ type: String, attribute: 'less-than-text' })
    lessThanText: string = "under";

    @property({ type: Number, attribute: 'reading-speed' })
    readingSpeed: number = 250;

    get result() {
        const durationInMinutes = Math.round(this.duration);
        if (durationInMinutes === 0) {
            return `${this.lessThanText} 1 ${this.minutesSingularText}`;
        } else if (durationInMinutes === 1) {
            return `1 ${this.minutesSingularText}`;
        } else {
            return `${durationInMinutes} ${this.minutesPluralText}`
        }
    }

    render() {
        return html`
            <slot name="label" class="label"></slot>
            ${this.result}
        `
    }

    constructor() {
        super();

        if (document.readyState === "complete" || document.readyState === "interactive") {
            setTimeout(this.#init);
        } else {
            document.addEventListener("DOMContentLoaded", this.#init);
        }
    }

    updated(changed: PropertyValues<this>) {
        if (changed.has('wordCount')) {
            this.duration = Math.ceil(this.wordCount / this.readingSpeed);
        }
    }

    #init = () => {
        const targetEl = document.querySelector(`${this.targetSelector}`);
        if (!targetEl) return;

        this.wordCount += this.#getWordsInElement(targetEl as HTMLElement);
    }

    #getWordsInElement(el: HTMLElement): number {
        return el.textContent?.split(" ").length || 0;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-estimated-reading-time': ToujouEstimatedReadingTime
    }
}
