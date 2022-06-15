import { LitElement, css, unsafeCSS } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
// @ts-ignore
import Splide from "@splidejs/splide";

// @ts-ignore
import splideSliderStyles from "@splidejs/splide/dist/css/splide.min.css";

@customElement('toujou-slider')
export class ToujouSlider extends LitElement {

    // public static styles = [ splideSliderStyles ];
    public static styles = css`${unsafeCSS(splideSliderStyles)}`

    @property({ type: Object })
    splideContainer: Element | null = null;

    @property({ type: Boolean, attribute: 'show-counter' })
    showCounter: Boolean = false;

    @property({ type: Boolean, attribute: 'auto-play' })
    autoplay: Boolean = false;

    @property()
    private _currentIndexCounterElement: HTMLElement | null = null;

    @property()
    private _totalSlidesCounterElement: HTMLElement | null = null;

    @state()
    private _numberOfSlides: Number = 0;

    @state()
    private _activeSlideIndex: Number = 1;

    @property()
    private splideSlider: any;

    constructor() {
        super();

        this._handlePaginationUpdate = this._handlePaginationUpdate.bind(this);
        this._handleSliderMount = this._handleSliderMount.bind(this);
    }

    createRenderRoot() { return this;}

    firstUpdated() {
        this.splideContainer = this.querySelector('.splide') || null;

        if (!this.splideContainer) {
            console.error("TOUJOU: Could not get necessary elements to initialize the slider");
            return;
        } else {
            this._initSlider();
        }
    }

    _initSlider() {
        const sliderOptions = {
            classes: {
                pagination: 'splide__pagination toujou-slider-bullets',
                page: 'splide__pagination__page toujou-slider-bullets__bullet',
            },
            type: 'fade',
            rewind: true,
            autoplay: this.autoplay,
            pauseOnHover: this.autoplay,
            pauseOnFocus: this.autoplay,
        }

        // @ts-ignore
        this.splideSlider = new Splide(this.splideContainer, sliderOptions);

        this.splideSlider!.on( 'mounted', this._handleSliderMount);
        this.splideSlider!.on( 'moved', this._handlePaginationUpdate);

        this.splideSlider!.mount();
        console.log(this.splideSlider);
    }

    _handleSliderMount(event: Event) {
        this._getCounterInfo();
        this._initiCounter();

        console.log('====>', event);
    }

    _initiCounter() {
        this._numberOfSlides = this.splideSlider.Components.Elements.slides.length;
        this._updateSliderCounter();
    }

    _getCounterInfo() {
        this._currentIndexCounterElement = this.querySelector('.toujou-slider-count__current');
        this._totalSlidesCounterElement = this.querySelector('.toujou-slider-count__total');
    }


    _handlePaginationUpdate(event: number) {
        this._activeSlideIndex = event + 1;
        this._updateSliderCounter()
    }

    _updateSliderCounter() {
        this._currentIndexCounterElement!.textContent = String(this._activeSlideIndex);
        this._totalSlidesCounterElement!.textContent = String(this._numberOfSlides);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-slider': ToujouSlider
    }
}
