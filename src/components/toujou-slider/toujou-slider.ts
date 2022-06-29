import { LitElement, css, unsafeCSS } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
// @ts-ignore
import Splide from "@splidejs/splide";
// @ts-ignore
import splideSliderStyles from "@splidejs/splide/dist/css/splide.min.css";

@customElement('toujou-slider')
export class ToujouSlider extends LitElement {

    public static styles = css`${unsafeCSS(splideSliderStyles)}`

    /**
     * Reference to the node that where the slider will be initialized (".splide")
     */
    @property({ type: Object })
    splideContainer: Element | null = null;

    /**
     * Show or hide the count at the bottom of the slider
     */
    @property({ type: Boolean, attribute: 'show-count' })
    showCount: Boolean = false;

    /**
     * Toggle on / off the autoplay function
     */
    @property({ type: Boolean, attribute: 'auto-play' })
    autoplay: Boolean = false;

    /**
     * Count element where we display the number of the current active slide
     * @private
     */
    @property()
    private _currentIndexCountElement: HTMLElement | null = null;

    /**
     * Count element where we should the total number of slider
     * @private
     */
    @property()
    private _totalSlidesCountElement: HTMLElement | null = null;

    /**
     * Total number of slides on the page, to be used on the count element
     * @private
     */
    @state()
    private _numberOfSlides: Number = 0;

    /**
     * Index of currently active slide, to be used on the count element
     * @private
     */
    @state()
    private _activeSlideIndex: Number = 1;

    /**
     * Reference to the Splice instance
     * @private
     */
    @property()
    private splideSlider: any;

    /**
     * Number of slides to show per "page"
     * Docs: https://splidejs.com/guides/options/#perpage
     */
    @property({ reflect: true, attribute: 'slides-to-show' })
    slidesToShow: number = 1;

    /**
     * Number of slider to advance per move
     * Docs: https://splidejs.com/guides/options/#permove
     */
    @property({ reflect: true, attribute: 'slides-per-move' })
    slidesPerMove: number = 1;

    /**
     * Type of slider. Valid values are "loop", "slide" and "fade"
     * Docs: https://splidejs.com/guides/options/#type
     */
    @property({ reflect: true, attribute: 'slider-type' })
    sliderType: 'loop' | 'slide' | 'fade' = 'loop';

    /**
     * Gap between the slides
     * Docs: https://splidejs.com/guides/options/#gap
     */
    @property({ reflect: true, attribute: 'slider-gap' })
    sliderGap: string = '0';

    /**
     * Duration between automatic moves when autoplay is active
     * Docs: https://splidejs.com/guides/options/#interval
     */
    @property({ reflect: true, attribute: 'autoplay-interval' })
    autoplayInterval: string = '6000';

    /**
     * Stringified JSON with object defining the breakpoints for the slider
     * Docs: https://splidejs.com/guides/options/#breakpoints
     */
    @property({ reflect: true, attribute: 'slider-breakpoints' })
    sliderBreakpoints: string | null = null;

    @property({ reflect: true, attribute: 'slider-padding' })
    sliderPadding: string = '0';

    @property({ reflect: true, attribute: 'slider-focus-center' })
    sliderFocusCenter: string | boolean = false;

    constructor() {
        super();

        this._handlePaginationUpdate = this._handlePaginationUpdate.bind(this);
        this._handleSliderMount = this._handleSliderMount.bind(this);
    }

    /**
     * Disable shadow root
     */
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

    /**
     * Initialize the slider with the correct options
     * Full list of options here: https://splidejs.com/guides/options/
     */
    private _initSlider() {
        const sliderOptions = {
            classes: {
                pagination: 'splide__pagination slider-bullets',
                page: 'splide__pagination__page slider-bullets__bullet',
            },
            type: this.sliderType,
            autoplay: this.autoplay,
            interval: this.autoplayInterval,
            pauseOnHover: this.autoplay,
            pauseOnFocus: this.autoplay,
            perPage: this.slidesToShow,
            perMove: this.slidesPerMove,
            gap: this.sliderGap,
            breakpoints: this.sliderBreakpoints,
            reducedMotion: {
                speed: 0,
                rewindSpeed: 0,
                autoplay: 'pause'
            },
            padding: this.sliderPadding,

        }

        if (this.sliderFocusCenter === 'true') {
            sliderOptions.focus = 'center';
            sliderOptions.trimSpace = false;
        }

        if (this.sliderBreakpoints) {
            sliderOptions.breakpoints = JSON.parse(this.sliderBreakpoints);
        }

        // @ts-ignore
        this.splideSlider = new Splide(this.splideContainer, sliderOptions);

        this.splideSlider!.on( 'mounted', this._handleSliderMount);
        this.splideSlider!.on( 'moved', this._handlePaginationUpdate);

        this.splideSlider!.mount();
    }

    /**
     * Setup the count element when the element first mounts
     */
    private _handleSliderMount() {
        this._getCountInfo();
        this._initCount();
    }

    /**
     * Get the DOM elements that are used to display the count information
     */
    private _getCountInfo() {
        this._currentIndexCountElement = this.querySelector('.slider-count__current');
        this._totalSlidesCountElement = this.querySelector('.slider-count__total');
    }

    /**
     * Initialize the count element and update count elements in the DOM
     */
    private _initCount() {
        this._numberOfSlides = this.splideSlider.Components.Elements.slides.length;
        this._updateSliderCount();
    }

    /**
     * Trigger a count update whenever the pagination updates
     * @param event
     */
    private _handlePaginationUpdate(event: number) {
        this._activeSlideIndex = event + 1;
        this._updateSliderCount()
    }

    /**
     * Update the count elements with the correct content
     */
    private _updateSliderCount() {
        this._currentIndexCountElement!.textContent = String(this._activeSlideIndex);
        this._totalSlidesCountElement!.textContent = String(this._numberOfSlides);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-slider': ToujouSlider
    }
}
