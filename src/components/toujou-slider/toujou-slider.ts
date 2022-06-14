import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

// @ts-ignore
import toujouSliderStyles from "./toujou-slider.css";

@customElement('toujou-slider')
export class ToujouSlider extends LitElement {

    public static styles = [ toujouSliderStyles ];

    constructor() {
        super();
        console.log('toujou slider starting up...')

        console.log(toujouSliderStyles);
    }

    render() {
        return html`
            <h1>HELLO</h1>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-slider': ToujouSlider
    }
}
