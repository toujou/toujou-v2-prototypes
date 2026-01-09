import { LitElement } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
// @ts-ignore
import Splide from "@splidejs/splide";

@customElement('toujou-slider')
export class ToujouSlider extends LitElement {

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
    @property({ reflect: true, attribute: 'auto-play-interval' })
    autoplayInterval: string = '6000';

    /**
     * Stringified JSON with object defining the breakpoints for the slider
     * Docs: https://splidejs.com/guides/options/#breakpoints
     */
    @property({ reflect: true, attribute: 'slider-breakpoints' })
    sliderBreakpoints: string | null = null;

    /**
     * Carousel padding
     * https://splidejs.com/guides/options/#padding
     */
    @property({ reflect: true, attribute: 'slider-padding' })
    sliderPadding: string = '0';

    /**
     * Center the active slide
     * https://splidejs.com/guides/options/#focus
     * https://splidejs.com/guides/options/#trimspace
     */
    @property({ reflect: true, attribute: 'slider-focus-center' })
    sliderFocusCenter: string | boolean = false;

    /**
     * Define the aspect ratio of the images on the carousel
     * https://splidejs.com/guides/options/#heightratio
     */
    @property({ reflect: true, attribute: 'slider-aspect-ratio' })
    sliderAspectRatio: string = '0.5625';

    /**
     * Number of clones to be created on each side of the carousel
     * Docs: https://splidejs.com/guides/options/#clones
     */
    @property({ reflect: true, attribute: 'slider-clones-amount' })
    sliderClonesAmount: number | null = null;

    @property({ attribute: 'arrow-prev-aria-label' })
    arrowPrevAriaLabel: string = '';

    @property({ attribute: 'arrow-next-aria-label' })
    arrowNextAriaLabel: string = '';

    @property({ attribute: 'arrow-first-aria-label' })
    arrowFirstAriaLabel: string = '';

    @property({ attribute: 'arrow-last-aria-label' })
    arrowLastAriaLabel: string = '';

    @property({ attribute: 'bullets-list-aria-label' })
    bulletsListAriaLabel: string = '';

    @property({ attribute: 'single-bullet-aria-label' })
    singleBulletAriaLabel: string = '';

    /**
     * If 'min', the media query for breakpoints will be min-width, or otherwise max-width.
     * Docs: https://splidejs.com/guides/options/#mediaquery
     */
    @property({ reflect: true, attribute: 'slider-media-query' })
    sliderMediaQuery: 'min' | 'max' = 'max';

    constructor() {
        super();

        this._handlePaginationUpdate = this._handlePaginationUpdate.bind(this);
        this._handleSliderMount = this._handleSliderMount.bind(this);
    }

    /**
     * Disable shadow root
     */
    createRenderRoot() {
        return this;
    }

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
     * Build the i18n configuration object for Splide.
     * Only aria-label strings that are explicitly provided via attributes are added to the returned object.
     *
     * @private
     */
    private _buildI18nOptions() {
        const i18n: Record<string, string> = {};

        if (this.arrowPrevAriaLabel) {
            i18n.prev = this.arrowPrevAriaLabel;
        }

        if (this.arrowNextAriaLabel) {
            i18n.next = this.arrowNextAriaLabel;
        }

        if (this.arrowFirstAriaLabel) {
            i18n.first = this.arrowFirstAriaLabel;
        }

        if (this.arrowLastAriaLabel) {
            i18n.last = this.arrowLastAriaLabel;
        }

        if (this.bulletsListAriaLabel) {
            i18n.select = this.bulletsListAriaLabel;
        }

        if (this.singleBulletAriaLabel) {
            i18n.slideX = `${this.singleBulletAriaLabel} %s`;
        }

        return Object.keys(i18n).length ? i18n : undefined;
    }

    /**
     * Initialize the slider with the correct options
     * Full list of options here: https://splidejs.com/guides/options/
     */
    private _initSlider() {
        let sliderOptions = {
            classes: {
                pagination: 'splide__pagination slider-bullets',
                page: 'splide__pagination__page slider-bullets__bullet',
            },
            type: this.sliderType,
            autoplay: this.autoplay,
            interval: this.autoplayInterval,
            pauseOnHover: this.autoplay,
            pauseOnFocus: this.autoplay,
            perPage: parseInt(String(this.slidesToShow)),
            perMove: this.slidesPerMove,
            gap: this.sliderGap,
            heightRatio: this.sliderAspectRatio,
            mediaQuery: this.sliderMediaQuery,
            reducedMotion: {
                speed: 0,
                rewindSpeed: 0,
                autoplay: 'pause'
            },
            padding: this.sliderPadding,
            i18n: this._buildI18nOptions(),
            focusableNodes: '*',
            breakpoints: undefined,
        }

        if (this.sliderFocusCenter === 'true') {
            // @ts-ignore
            sliderOptions.focus = 'center';
            // @ts-ignore
            sliderOptions.trimSpace = false;
        }

        if (this.sliderBreakpoints) {
            try {
                sliderOptions.breakpoints = JSON.parse(this.sliderBreakpoints);
            } catch (error) {
                console.error('Error parsing slider breakpoints JSON:', error, '\n', 'Received breakpoints JSON:', '\n', this.sliderBreakpoints);
            }
        }

        if (this.sliderClonesAmount) {
            // @ts-ignore
            sliderOptions.clones = this.sliderClonesAmount;
        }

        // @ts-ignore
        this.splideSlider = new Splide(this.splideContainer, sliderOptions);

        this.splideSlider!.on('mounted', this._handleSliderMount);
        this.splideSlider!.on('moved', this._handlePaginationUpdate);

        this.splideSlider!.mount();
    }

    /**
     * Setup the count element when the element first mounts
     */
    private _handleSliderMount() {
        this._getCountInfo();
        this._initCount();
        this._removeSlidesTabpanelRole();
        this._addAriaLabelToSliderContainer();

        this.dispatchEvent(new CustomEvent('toujou-slider-mounted', {
            bubbles: true,
            composed: true,
            detail: {
                el: this.splideSlider
            }
        }));
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

    /**
     * Add an aria-label attribute to the slider container element to fix a11y error
     * @private
     */
    private _addAriaLabelToSliderContainer() {
        const containerId = this.splideContainer?.id;
        this.splideContainer?.setAttribute('aria-label', `Slider - ${containerId}`)
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
        this._updateSliderCount();

        this.dispatchEvent(new CustomEvent('toujou-slider-moved', {
            bubbles: true,
            composed: true,
            detail: {
                el: this.splideSlider,
                activeIndex: this._activeSlideIndex
            }
        }));
    }

    /**
     * Update the count elements with the correct content
     */
    private _updateSliderCount() {
        if (this._currentIndexCountElement) {
            this._currentIndexCountElement.textContent = String(this._activeSlideIndex);
        }

        if (this._totalSlidesCountElement) {
            this._totalSlidesCountElement.textContent = String(this._numberOfSlides);
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-slider': ToujouSlider
    }
}
