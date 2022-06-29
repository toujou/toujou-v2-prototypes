import { LitElement } from 'lit';
export declare class ToujouSlider extends LitElement {
    static styles: import("lit").CSSResult;
    /**
     * Reference to the node that where the slider will be initialized (".splide")
     */
    splideContainer: Element | null;
    /**
     * Show or hide the count at the bottom of the slider
     */
    showCount: Boolean;
    /**
     * Toggle on / off the autoplay function
     */
    autoplay: Boolean;
    /**
     * Count element where we display the number of the current active slide
     * @private
     */
    private _currentIndexCountElement;
    /**
     * Count element where we should the total number of slider
     * @private
     */
    private _totalSlidesCountElement;
    /**
     * Total number of slides on the page, to be used on the count element
     * @private
     */
    private _numberOfSlides;
    /**
     * Index of currently active slide, to be used on the count element
     * @private
     */
    private _activeSlideIndex;
    /**
     * Reference to the Splice instance
     * @private
     */
    private splideSlider;
    /**
     * Number of slides to show per "page"
     * Docs: https://splidejs.com/guides/options/#perpage
     */
    slidesToShow: number;
    /**
     * Number of slider to advance per move
     * Docs: https://splidejs.com/guides/options/#permove
     */
    slidesPerMove: number;
    /**
     * Type of slider. Valid values are "loop", "slide" and "fade"
     * Docs: https://splidejs.com/guides/options/#type
     */
    sliderType: 'loop' | 'slide' | 'fade';
    /**
     * Gap between the slides
     * Docs: https://splidejs.com/guides/options/#gap
     */
    sliderGap: string;
    /**
     * Duration between automatic moves when autoplay is active
     * Docs: https://splidejs.com/guides/options/#interval
     */
    autoplayInterval: string;
    /**
     * Stringified JSON with object defining the breakpoints for the slider
     * Docs: https://splidejs.com/guides/options/#breakpoints
     */
    sliderBreakpoints: string | null;
    sliderPadding: string;
    sliderFocusCenter: string | boolean;
    constructor();
    /**
     * Disable shadow root
     */
    createRenderRoot(): this;
    firstUpdated(): void;
    /**
     * Initialize the slider with the correct options
     * Full list of options here: https://splidejs.com/guides/options/
     */
    private _initSlider;
    /**
     * Setup the count element when the element first mounts
     */
    private _handleSliderMount;
    /**
     * Get the DOM elements that are used to display the count information
     */
    private _getCountInfo;
    /**
     * Initialize the count element and update count elements in the DOM
     */
    private _initCount;
    /**
     * Trigger a count update whenever the pagination updates
     * @param event
     */
    private _handlePaginationUpdate;
    /**
     * Update the count elements with the correct content
     */
    private _updateSliderCount;
}
declare global {
    interface HTMLElementTagNameMap {
        'toujou-slider': ToujouSlider;
    }
}
