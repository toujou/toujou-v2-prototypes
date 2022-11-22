/**
 * Wrapper class for the toujou sliding navigation.
 * On mobile there is only one navigation level visible at a time.
 * When we are on a sub-navigation there is also a "back button" and a "subtitle"
 */
export class ToujouSlidingNav extends HTMLElement {

    // Constants
    navAttributes = {
        navOpenLevel: 'open-level',
        liOpenItem: 'is-open'
    }
    startingActiveLevel: number = 1;
    maximalLevel: number = 3;
    topbarMqlChangeEventName = 'toujou-topbar-breakpoint-change';
    burgerButtonStateChangeEvent = 'toujou-burger-button-state-change';

    // Variables
    _backButtonEl: HTMLButtonElement | null = null;
    _mainNavEl: HTMLUListElement | null = null;
    _subtitleEl: HTMLParagraphElement | null = null;
    _subtitleText: string = '';
    _activeLevel: number | null = null;
    _chevrons: HTMLSpanElement[] = [];


    // @ts-ignore
    set activeLevel(value) {
        this._activeLevel = value;
        this._updateUI();
    }

    // @ts-ignore
    get activeLevel() {
        return this._activeLevel;
    }

    /**
     * Initialize and add event listeners
     */
    connectedCallback() {
        this._getElements();
        this.activeLevel = this.startingActiveLevel;

        this._backButtonEl?.addEventListener('click', this._handleBackButtonClick.bind(this));
        this._chevrons.forEach((chevron) => {
            chevron.addEventListener('click', this._handleChevronClick.bind(this))
        });
        window.addEventListener(this.topbarMqlChangeEventName, this._handleMqlChange.bind(this));
        window.addEventListener(this.burgerButtonStateChangeEvent, this._handleBurgerButtonClick.bind(this));
    }

    /**
     * remove event listeners when the element disconnects
     */
    disconnectedCallback() {
        this._backButtonEl?.removeEventListener('click', this._handleBackButtonClick.bind(this));
        this._chevrons.forEach((chevron) => {
            chevron.removeEventListener('click', this._handleChevronClick.bind(this))
        });
        window.removeEventListener(this.topbarMqlChangeEventName, this._handleMqlChange.bind(this));
        window.removeEventListener(this.burgerButtonStateChangeEvent, this._handleBurgerButtonClick.bind(this));
    }

    /**
     * Get all necessary elements
     */
    _getElements() {
        this._backButtonEl = this.querySelector('.main-nav__back-button');
        this._mainNavEl = this.querySelector('.main-nav__list');
        this._subtitleEl = this.querySelector('.main-nav__subtitle');
        this._chevrons = Array.from(this.querySelectorAll('.main-nav__chevron'));
    }

    /**
     * update the subtitle text and set correct open level attribute to the navigation element
     */
    _updateUI() {
        if (!this.activeLevel) return;

        this._subtitleEl!.textContent = this._subtitleText;
        this.setAttribute(this.navAttributes.navOpenLevel, String(this.activeLevel));
    }

    /**
     * When the back button is clicked:
     *  - set correct activeLevel
     *  - remove the open item attribute from relevant list items
     */
    _handleBackButtonClick() {
        if (this.activeLevel! > 1) {
            this.activeLevel = this.activeLevel! - 1;

            // Remove 'is-open' navAttributes from relevant list items
            const allOpenListItems = this.querySelectorAll('.main-nav__list-item[is-open]');
            if (!allOpenListItems.length) return;
            allOpenListItems.forEach((item) => {
                const itemLevel = parseInt(item.getAttribute('nav-item-level')!);
                if (itemLevel >= this.activeLevel!) {
                    item.removeAttribute(this.navAttributes.liOpenItem);
                }
            });
        }
    }

    /**
     * When a chevron is clicked:
     *  - Add correct open attribute to the parent list item
     *  - Add correct title to the subtitle element
     * @param event
     */
    _handleChevronClick(event: Event) {
        const eventTarget = event.target as HTMLSpanElement;
        const parentItem = eventTarget.closest('.main-nav__list-item') as HTMLLIElement;
        parentItem.setAttribute(this.navAttributes.liOpenItem, '');

        const parentText = parentItem.querySelector('.main-nav__link > .main-nav__text')?.textContent || null;
        this._subtitleText = parentText || '';
        if (this.activeLevel! < this.maximalLevel) {
            this.activeLevel = this.activeLevel! + 1;
        }
    }

    /**
     * Reset the state if window has grown to desktop width
     * @param event
     */
    _handleMqlChange(event: Event) {
        if (!(<CustomEvent>event).detail.state) {
            this._stateReset()
        }
    }

    /**
     * Reset state if the burger button has been closed
     * @param event
     */
    _handleBurgerButtonClick(event: Event) {
        if (!(<CustomEvent>event).detail.state) {
            this._stateReset();
        }
    }

    /**
     * Reset the state
     *  - reset the activeLevel
     *  - remove open navAttributes from all relevant items
     */
    _stateReset() {
        this.activeLevel = this.startingActiveLevel;
        const allOpenListItems = this.querySelectorAll('.main-nav__list-item[is-open]');
        if (!allOpenListItems.length) return;
        allOpenListItems.forEach((item) => {
            item.removeAttribute(this.navAttributes.liOpenItem);
        });
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-sliding-nav': ToujouSlidingNav
    }
}

customElements.define('toujou-sliding-nav', ToujouSlidingNav, { extends: 'nav' });
