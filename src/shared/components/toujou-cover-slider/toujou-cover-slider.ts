import { LitElement } from "lit";
import { customElement, property } from 'lit/decorators.js';
import Splide from "@splidejs/splide";

@customElement('toujou-cover-slider')
export class ToujouCoverSlider extends LitElement {

    @property({ type: Object })
    splideContainer: HTMLElement | null = null;

    @property()
    private splideSlider: any;

    @property({ type: Number })
    private _maxCardWidth: number | null = null;

    @property({ type: Number })
    private _cardGap: number | null = null;

    @property({ type: Number })
    private _cardWidthWithGap: number | null = null;

    @property({ type: Number })
    private _sliderWidth: number | null = null;

    @property({ type: Number })
    private _slidesThatFitIntoScreen: number | null = null;

    @property({ type: Number })
    private _numberOfSlidesInSlider: number = 0;

    @property({ type: Boolean, reflect: true, attribute: 'is-slider' })
    private _isSlide: boolean = false;

    @property({ type: ResizeObserver })
    private _resizeObserver: ResizeObserver | null = null;

    constructor() {
        super();

        // Update the cover slider UI whenever the element changes size
        this._resizeObserver = new ResizeObserver((entries) => {
            entries.forEach(() => this._updateUI());
        });
    }

    connectedCallback() {
        super.connectedCallback();
        this._resizeObserver!.observe(this);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this._resizeObserver!.unobserve(this);
    }

    /**
     * Disable shadow root
     */
    createRenderRoot() { return this; }

    firstUpdated() {
        this._updateCustomProperties();
        this._numberOfSlidesInSlider = this.querySelectorAll('.cover-slider__item').length;
        this.splideContainer = this.querySelector('.splide') || null;

        if (!this.splideContainer) {
            console.error("TOUJOU: Could not get necessary elements to initialize the slider");
            return;
        } else {
            this._initSlider();
            this._updateUI();
        }
    }

    /**
     * Initialize the cover slider element with the correct options
     * @private
     */
    private _initSlider = () => {
        this._slidesThatFitIntoScreen = this._calculateSlidesThatFitIntoScreen();

        const sliderOptions = {
            classes: {
                pagination: 'splide__pagination slider-bullets',
                page: 'splide__pagination__page slider-bullets__bullet',
            },
            type: this._isSlide ? 'loop' : 'slide',
            autoplay: false,
            perPage: Math.floor(this._slidesThatFitIntoScreen),
            perMove: 1,
            gap: this._cardGap,
            padding: {
                right: this._calculatePadding()
            },
            width: this._cardWidthWithGap,
            reducedMotion: {
                speed: 0,
                rewindSpeed: 0,
                autoplay: 'pause'
            },
        }

        // @ts-ignore
        this.splideSlider = new Splide(this.splideContainer, sliderOptions);

        this.splideSlider!.on('mounted', this._handleSliderMount);

        this.splideSlider!.mount();
    }

    /**
     * Setup the count element when the element first mounts
     */
    private _handleSliderMount = () => {
        this._removeSlidesTabpanelRole();

        this.dispatchEvent(new CustomEvent('toujou-cover-slider-mounted', {
            bubbles: true,
            composed: true,
            detail: {
                el: this.splideSlider
            }
        }));
    }

    /**
     * Update the slider options by destroying it and creating it again
     */
    private _updateSliderOptions = () => {
        if (this.splideSlider) {
            this.splideSlider.destroy();
            this._initSlider();
        }
    }

    /**
     * Get new values and update the cover slider UI accordingly
     */
    private _updateUI() {
        this._updateCustomProperties();
        this._isSlide = this._slidesThatFitIntoScreen! <= this._numberOfSlidesInSlider;
        this._updateSliderOptions();
    }

    /**
     * Get current values of the css properties and update private variables
     */
    private _updateCustomProperties() {
        const computedStyles = getComputedStyle(this);
        this._maxCardWidth = +computedStyles.getPropertyValue('--cover-slider-card-max-width');
        this._cardGap = +computedStyles.getPropertyValue('--cover-slider-card-gap');
        this._cardWidthWithGap = this._maxCardWidth + this._cardGap;
    }

    /**
     * Calculate how many cards can fit on the screen
     */
    private _calculateSlidesThatFitIntoScreen() {
        this._sliderWidth = this.getBoundingClientRect().width;
        return Math.ceil(this._sliderWidth / this._cardWidthWithGap!) + 0.5;
    }

    /**
     * Calculate padding percentage, so we can show half a card on the right side of the screen
     */
    private _calculatePadding() {
        const numberOfParts = this._slidesThatFitIntoScreen! * 2;
        return `${100 / numberOfParts}%`;
    }

    /**
     * Remove the "tabpanel" role from slides to fix accessibility error
     * @private
     */
    private _removeSlidesTabpanelRole() {
        const elsWithPanelTabRole = this.splideSlider.root.querySelectorAll('*[role="tabpanel"]');
        if (!elsWithPanelTabRole) return;

        elsWithPanelTabRole.forEach((el: HTMLElement) => {
            el.removeAttribute('role');
            el.removeAttribute('aria-label');
        });
    }
}
