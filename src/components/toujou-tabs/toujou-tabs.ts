import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('toujou-tabs')
export class ToujouTabs extends LitElement {
    private tabsButtons: NodeListOf<HTMLButtonElement> | undefined;
    private tabsPanels: NodeListOf<HTMLDivElement> | undefined;
    private currentActiveId: string | undefined;
    private scrollPrevButton: HTMLButtonElement | undefined;
    private scrollNextButton: HTMLButtonElement | undefined;
    private tabsButtonsContainer: HTMLElement | undefined;
    private resizeObserver: ResizeObserver | undefined;

    connectedCallback() {
        super.connectedCallback();

        this.tabsButtons = this.querySelectorAll('.tabs__button');
        this.tabsPanels = this.querySelectorAll('.tabs__panel');
        this.tabsButtonsContainer = this.querySelector('.tabs__buttons') as HTMLElement;
        this.scrollPrevButton = this.querySelector('.tabs__scroll-button--prev') as HTMLButtonElement;
        this.scrollNextButton = this.querySelector('.tabs__scroll-button--next') as HTMLButtonElement;

        const initialActive = this.querySelector<HTMLButtonElement>('[aria-selected="true"]');
        if (initialActive) {
            this.currentActiveId = initialActive.id;
        }

        this.tabsButtons.forEach((tabButton) => {
            tabButton.addEventListener('click', this._onButtonClick);
            tabButton.addEventListener('keydown', this._onKeyDown);
        });

        this.scrollPrevButton?.addEventListener('click', this._onScrollPrevClick);
        this.scrollNextButton?.addEventListener('click', this._onScrollNextClick);

        this.resizeObserver = new ResizeObserver(() => this._updateScrollButtonVisibility());
        this.resizeObserver.observe(this.tabsButtonsContainer);
        this.tabsButtonsContainer.addEventListener('scroll', this._updateScrollButtonVisibility);

        this._updateScrollButtonVisibility();
        this._updateUI();
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

    set _currentActiveId(id: string) {
        this.currentActiveId = id;
        this._updateUI();
    }

    get _currentActiveId(): string | undefined {
        return this.currentActiveId;
    }

    _onButtonClick = (event: Event) => {
        const clickedButton = event.currentTarget as HTMLButtonElement;

        if (this.currentActiveId === clickedButton.id) return;

        this._currentActiveId = clickedButton.id;
    }

    _onKeyDown = (event: KeyboardEvent) => {
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
            this._currentActiveId = buttons[nextIndex].id;
            buttons[nextIndex].focus();
            this._scrollButtonIntoView(buttons[nextIndex]);
        }
    }

    _onScrollPrevClick = () => {
        this._scrollTabs('prev');
    }

    _onScrollNextClick = () => {
        this._scrollTabs('next');
    }

    _scrollTabs = (direction: 'prev' | 'next') => {
        if (!this.tabsButtonsContainer) return;

        const scrollAmount = this.tabsButtonsContainer.clientWidth * 0.75;
        this.tabsButtonsContainer.scrollBy({
            left: direction === 'next' ? scrollAmount : -scrollAmount,
            behavior: 'smooth',
        });
    }

    _scrollButtonIntoView = (button: HTMLButtonElement) => {
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

    _updateScrollButtonVisibility = () => {
        if (!this.tabsButtonsContainer || !this.scrollPrevButton || !this.scrollNextButton) return;

        const { scrollLeft, scrollWidth, clientWidth } = this.tabsButtonsContainer;
        const hasOverflow = scrollWidth > clientWidth;
        const isAtStart = scrollLeft <= 0;
        const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 1;

        // Add/remove attribute on the host element for CSS targeting
        if (hasOverflow) {
            this.setAttribute('data-overflowing', '');
        } else {
            this.removeAttribute('data-overflowing');
        }

        // Always show both buttons when overflowing, disable when not needed
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

    _updateUI = () => {
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
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-tabs': ToujouTabs
    }
}
