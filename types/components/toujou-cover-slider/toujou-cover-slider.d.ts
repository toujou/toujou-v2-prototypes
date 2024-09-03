import { LitElement } from "lit";
export declare class ToujouCoverSlider extends LitElement {
    splideContainer: HTMLElement | null;
    private splideSlider;
    private _maxCardWidth;
    private _cardGap;
    private _cardWidthWithGap;
    private _sliderWidth;
    private _slidesThatFitIntoScreen;
    private _numberOfSlidesInSlider;
    private _isSlide;
    private _resizeObserver;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * Disable shadow root
     */
    createRenderRoot(): this;
    firstUpdated(): void;
    /**
     * Initialize the cover slider element with the correct options
     * @private
     */
    private _initSlider;
    /**
     * Setup the count element when the element first mounts
     */
    private _handleSliderMount;
    /**
     * Update the slider options by destroying it and creating it again
     */
    private _updateSliderOptions;
    /**
     * Get new values and update the cover slider UI accordingly
     */
    private _updateUI;
    /**
     * Get current values of the css properties and update private variables
     */
    private _updateCustomProperties;
    /**
     * Calculate how many cards can fit on the screen
     */
    private _calculateSlidesThatFitIntoScreen;
    /**
     * Calculate padding percentage, so we can show half a card on the right side of the screen
     */
    private _calculatePadding;
    /**
     * Remove the "tabpanel" role from slides to fix accessibility error
     * @private
     */
    private _removeSlidesTabpanelRole;
}
