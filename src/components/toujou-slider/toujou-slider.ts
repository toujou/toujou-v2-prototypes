import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
// @ts-ignore
import Splide from "@splidejs/splide";

// @ts-ignore
import splideSliderStyles from "@splidejs/splide/dist/css/splide.min.css";

@customElement('toujou-slider')
export class ToujouSlider extends LitElement {

    // public static styles = [ toujouSliderStyles ];

    constructor() {
        super();
    }

    render() {
        return html`
            <style>${splideSliderStyles}</style>
        `
    }

    createRenderRoot() { return this;}

    firstUpdated() {
        new Splide(this).mount();
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-slider': ToujouSlider
    }
}
