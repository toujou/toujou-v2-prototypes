import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

export const TOUJOU_TABS_EVENTS = {
    READY: 'toujou-tabs-ready',
    CHANGE: 'toujou-tabs-change',
    OVERFLOW_CHANGE: 'toujou-tabs-overflow-change',
    SCROLL: 'toujou-tabs-scroll',
} as const;

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
@customElement('toujou-tabs')
export class ToujouTabs extends LitElement {
    private tabsButtons: NodeListOf<HTMLButtonElement> | undefined;
    private tabsPanels: NodeListOf<HTMLElement> | undefined;
    private currentActiveId: string | undefined;
    private scrollPrevButton: HTMLButtonElement | undefined;
    private scrollNextButton: HTMLButtonElement | undefined;
    private tabsButtonsContainer: HTMLElement | undefined;
    private resizeObserver: ResizeObserver | undefined;
    private isOverflowing: boolean = false;

    connectedCallback() {
        super.connectedCallback();

        this.tabsButtons = this.querySelectorAll('.tabs__button');
        this.tabsPanels = this.querySelectorAll('.tabs__panel');
        this.tabsButtonsContainer = this.querySelector('.tabs__buttons') as HTMLElement;
        this.scrollPrevButton = this.querySelector('.tabs__scroll-button--prev') as HTMLButtonElement;
        this.scrollNextButton = this.querySelector('.tabs__scroll-button--next') as HTMLButtonElement;

        this._setActiveTab(this._getInitialActiveTab(), false);

        this.tabsButtons.forEach((tabButton) => {
            tabButton.addEventListener('click', this._onButtonClick);
            tabButton.addEventListener('keydown', this._onKeyDown);
        });

        this.scrollPrevButton?.addEventListener('click', this._onScrollPrevClick);
        this.scrollNextButton?.addEventListener('click', this._onScrollNextClick);

        this.resizeObserver = new ResizeObserver(() => this._updateScrollButtonVisibility());

        if (this.tabsButtonsContainer) {
            this.resizeObserver.observe(this.tabsButtonsContainer);
            this.tabsButtonsContainer.addEventListener('scroll', this._updateScrollButtonVisibility);
        }

        this._updateScrollButtonVisibility();

        this._dispatch(TOUJOU_TABS_EVENTS.READY, {
            activeTabId: this.currentActiveId,
            tabCount: this.tabsButtons.length,
        });
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.tabsButtons?.forEach((tabButton) => {
            tabButton.removeEventListener('click', this._onButtonClick);
            tabButton.removeEventListener('keydown', this._onKeyDown);
        });

        this.scrollPrevButton?.removeEventListener('click', this._onScrollPrevClick);
        this.scrollNextButton?.removeEventListener('click', this._onScrollNextClick);

        this.resizeObserver?.disconnect();
        this.tabsButtonsContainer?.removeEventListener('scroll', this._updateScrollButtonVisibility);
    }

    createRenderRoot() {
        return this;
    }

    /**
     * Determines initial active tab based on markup or fallback.
     */
    private _getInitialActiveTab(): string | undefined {
        const initiallySelected = Array.from(this.tabsButtons ?? [])
            .find(button => button.getAttribute('aria-selected') === 'true');

        return initiallySelected?.id ?? this.tabsButtons?.[0]?.id;
    }

    /**
     * Activates a tab and optionally emits change event.
     */
    private _setActiveTab(id: string | undefined, dispatchEvent: boolean = true): void {
        if (!id) return;

        const previousId = this.currentActiveId;
        this.currentActiveId = id;
        this._updateUI();

        if (dispatchEvent) {
            this._dispatch(TOUJOU_TABS_EVENTS.CHANGE, {
                previousTabId: previousId,
                activeTabId: id,
            });
        }
    }

    /** Handles tab click interaction */
    private _onButtonClick = (event: Event) => {
        const clickedButton = event.currentTarget as HTMLButtonElement;

        if (this.currentActiveId === clickedButton.id) return;

        this._setActiveTab(clickedButton.id);
        this._scrollButtonIntoView(clickedButton);
    }

    /** Handles keyboard navigation between tabs */
    private _onKeyDown = (event: KeyboardEvent) => {
        const buttons = Array.from(this.tabsButtons ?? []);
        const currentIndex = buttons.findIndex((btn) => btn.id === this.currentActiveId);

        let nextIndex: number | undefined;

        if (event.key === 'ArrowRight') {
            nextIndex = (currentIndex + 1) % buttons.length;
        } else if (event.key === 'ArrowLeft') {
            nextIndex = (currentIndex - 1 + buttons.length) % buttons.length;
        } else if (event.key === 'Home') {
            nextIndex = 0;
        } else if (event.key === 'End') {
            nextIndex = buttons.length - 1;
        }

        if (nextIndex !== undefined) {
            event.preventDefault();
            this._setActiveTab(buttons[nextIndex].id);
            buttons[nextIndex].focus();
            this._scrollButtonIntoView(buttons[nextIndex]);
        }
    }

    /** Scrolls the tab list to a previous segment */
    private _onScrollPrevClick = () => {
        this._scrollTabs('prev');
    }

    /** Scrolls the tab list to the next segment */
    private _onScrollNextClick = () => {
        this._scrollTabs('next');
    }

    /**
     * Scrolls tab header container horizontally.
     */
    private _scrollTabs = (direction: 'prev' | 'next') => {
        if (!this.tabsButtonsContainer) return;

        const scrollAmount = this.tabsButtonsContainer.clientWidth * 0.75;
        this.tabsButtonsContainer.scrollBy({
            left: direction === 'next' ? scrollAmount : -scrollAmount,
            behavior: 'smooth',
        });

        this._dispatch(TOUJOU_TABS_EVENTS.SCROLL, { direction });
    }

    /**
     * Ensures the active tab button is visible inside the scroll container.
     */
    private _scrollButtonIntoView = (button: HTMLButtonElement) => {
        if (!this.tabsButtonsContainer) return;

        const containerRect = this.tabsButtonsContainer.getBoundingClientRect();
        const buttonRect = button.getBoundingClientRect();

        if (buttonRect.left < containerRect.left) {
            this.tabsButtonsContainer.scrollBy({
                left: buttonRect.left - containerRect.left,
                behavior: 'smooth',
            });
        } else if (buttonRect.right > containerRect.right) {
            this.tabsButtonsContainer.scrollBy({
                left: buttonRect.right - containerRect.right,
                behavior: 'smooth',
            });
        }
    }

    /**
     * Updates visibility and state of scroll buttons based on overflow.
     */
    private _updateScrollButtonVisibility = () => {
        if (!this.tabsButtonsContainer || !this.scrollPrevButton || !this.scrollNextButton) return;

        const { scrollLeft, scrollWidth, clientWidth } = this.tabsButtonsContainer;
        const hasOverflow = scrollWidth > clientWidth;
        const isAtStart = scrollLeft <= 0;
        const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 1;

        if (hasOverflow !== this.isOverflowing) {
            this.isOverflowing = hasOverflow;
            this._dispatch(TOUJOU_TABS_EVENTS.OVERFLOW_CHANGE, { hasOverflow });
        }

        if (hasOverflow) {
            this.setAttribute('data-overflowing', '');
        } else {
            this.removeAttribute('data-overflowing');
        }

        this.scrollPrevButton.hidden = !hasOverflow;
        this.scrollNextButton.hidden = !hasOverflow;

        if (isAtStart) {
            this.scrollPrevButton.setAttribute('disabled', '');
            this.scrollPrevButton.setAttribute('tabindex', '-1');
        } else {
            this.scrollPrevButton.removeAttribute('disabled');
            this.scrollPrevButton.setAttribute('tabindex', '0');
        }

        if (isAtEnd) {
            this.scrollNextButton.setAttribute('disabled', '');
            this.scrollNextButton.setAttribute('tabindex', '-1');
        } else {
            this.scrollNextButton.removeAttribute('disabled');
            this.scrollNextButton.setAttribute('tabindex', '0');
        }
    }

    /**
     * Updates tab buttons and panels to reflect the active state.
     */
    private _updateUI = () => {
        if (!this.currentActiveId) return;

        const activeButton = this.querySelector<HTMLButtonElement>(`#${this.currentActiveId}`);
        const activeControls = activeButton?.getAttribute('aria-controls');

        this.tabsButtons?.forEach((tabButton) => {
            const isActive = tabButton.id === this.currentActiveId;
            tabButton.setAttribute('aria-selected', isActive.toString());
            tabButton.setAttribute('tabindex', isActive ? '0' : '-1');
        });

        this.tabsPanels?.forEach((tabPanel) => {
            tabPanel.id === activeControls
                ? tabPanel.removeAttribute('hidden')
                : tabPanel.setAttribute('hidden', '');
        });
    }

    /**
     * Dispatches a custom event with an optional payload.
     */
    private _dispatch = (eventName: string, detail: Record<string, unknown> = {}) => {
        this.dispatchEvent(new CustomEvent(eventName, {
            detail,
            bubbles: true,
            composed: true,
        }));
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-tabs': ToujouTabs
    }
}
