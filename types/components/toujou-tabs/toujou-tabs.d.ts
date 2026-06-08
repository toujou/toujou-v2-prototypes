import { LitElement } from 'lit';
export declare const TOUJOU_TABS_EVENTS: {
    readonly READY: "toujou-tabs-ready";
    readonly CHANGE: "toujou-tabs-change";
    readonly OVERFLOW_CHANGE: "toujou-tabs-overflow-change";
    readonly SCROLL: "toujou-tabs-scroll";
};
/**
 * Accessible tab component with keyboard navigation,
 * scrollable tab headers, and overflow controls.
 *
 * Handles:
 * - Tab activation (click + keyboard)
 * - Panel visibility syncing
 * - Horizontal scrolling for overflowing tab lists
 * - Public events for integration
 */
export declare class ToujouTabs extends LitElement {
    private tabsButtons;
    private tabsPanels;
    private currentActiveId;
    private scrollPrevButton;
    private scrollNextButton;
    private tabsButtonsContainer;
    private resizeObserver;
    private isOverflowing;
    connectedCallback(): void;
    disconnectedCallback(): void;
    createRenderRoot(): this;
    /**
     * Determines initial active tab based on markup or fallback.
     */
    private _getInitialActiveTab;
    /**
     * Activates a tab and optionally emits change event.
     */
    private _setActiveTab;
    /** Handles tab click interaction */
    private _onButtonClick;
    /** Handles keyboard navigation between tabs */
    private _onKeyDown;
    /** Scrolls the tab list to a previous segment */
    private _onScrollPrevClick;
    /** Scrolls the tab list to the next segment */
    private _onScrollNextClick;
    /**
     * Scrolls tab header container horizontally.
     */
    private _scrollTabs;
    /**
     * Ensures the active tab button is visible inside the scroll container.
     */
    private _scrollButtonIntoView;
    /**
     * Updates visibility and state of scroll buttons based on overflow.
     */
    private _updateScrollButtonVisibility;
    /**
     * Updates tab buttons and panels to reflect the active state.
     */
    private _updateUI;
    /**
     * Dispatches a custom event with an optional payload.
     */
    private _dispatch;
}
declare global {
    interface HTMLElementTagNameMap {
        'toujou-tabs': ToujouTabs;
    }
}
