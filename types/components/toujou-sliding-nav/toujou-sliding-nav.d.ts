/**
 * Wrapper class for the toujou sliding navigation.
 * On mobile there is only one navigation level visible at a time.
 * When we are on a sub-navigation there is also a "back button" and a "subtitle"
 */
export declare class ToujouSlidingNav extends HTMLElement {
    navAttributes: {
        navOpenLevel: string;
        liOpenItem: string;
    };
    startingActiveLevel: number;
    maximalLevel: number;
    topbarMqlChangeEventName: string;
    burgerButtonClickEvent: string;
    _backButtonEl: HTMLButtonElement | null;
    _mainNavEl: HTMLUListElement | null;
    _subtitleEl: HTMLParagraphElement | null;
    _subtitleText: string;
    _activeLevel: number | null;
    _chevrons: HTMLSpanElement[];
    set activeLevel(value: number | null);
    get activeLevel(): number | null;
    /**
     * Initialize and add event listeners
     */
    connectedCallback(): void;
    /**
     * remove event listeners when the element disconnects
     */
    disconnectedCallback(): void;
    /**
     * Get all necessary elements
     */
    _getElements(): void;
    /**
     * update the subtitle text and set correct open level attribute to the navigation element
     */
    _updateUI(): void;
    /**
     * When the back button is clicked:
     *  - set correct activeLevel
     *  - remove the open item attribute from relevant list items
     */
    _handleBackButtonClick(): void;
    /**
     * When a chevron is clicked:
     *  - Add correct open attribute to the parent list item
     *  - Add correct title to the subtitle element
     * @param event
     */
    _handleChevronClick(event: Event): void;
    /**
     * Reset the state if window has grown to desktop width
     * @param event
     */
    _handleMqlChange(event: Event): void;
    /**
     * Reset state if the burger button has been closed
     * @param event
     */
    _handleBurgerButtonClick(event: Event): void;
    /**
     * Reset the state
     *  - reset the activeLevel
     *  - remove open navAttributes from all relevant items
     */
    _stateReset(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'toujou-sliding-nav': ToujouSlidingNav;
    }
}
