export class ToujouSlidingNav extends HTMLElement {

    startingActiveLevel: number = 1;
    maximalLevel: number = 3;

    _backButtonEl: HTMLButtonElement | null = null;
    _mainNavEl: HTMLUListElement | null = null;
    _subtitleEl: HTMLParagraphElement | null = null;
    _subtitleText: string = '';
    _activeLevel: number | null = null;
    _chevrons: HTMLSpanElement[] = [];
    _currentOpenItems: HTMLLIElement[] = [];

    ATTRIBUTES = {
        NAV_OPEN_LEVEL: 'open-level',
        LI_OPEN_ITEM: 'is-open'
    }

    constructor() {
        super();
    }

    // @ts-ignore
    set activeLevel(value) {
        console.log('setting active level', value);
        this._activeLevel = value;
        this._updateUI();
    }

    // @ts-ignore
    get activeLevel() {
        return this._activeLevel;
    }

    connectedCallback() {
        this._getElements();
        this.activeLevel = this.startingActiveLevel;

        this._backButtonEl?.addEventListener('click', this._handleBackButtonClick.bind(this));
        this._chevrons.forEach((chevron) => {
            chevron.addEventListener('click', this._handleChevronClick.bind(this))
        })
    }

    _getElements() {
        this._backButtonEl = this.querySelector('.main-nav__back-button');
        this._mainNavEl = this.querySelector('.main-nav__list');
        this._subtitleEl = this.querySelector('.main-nav__subtitle');
        this._chevrons = Array.from(this.querySelectorAll('.main-nav__chevron'));
    }

    _updateUI() {
        if (!this.activeLevel) return;

        this._subtitleEl!.textContent = this._subtitleText;
        this.setAttribute(this.ATTRIBUTES.NAV_OPEN_LEVEL, String(this.activeLevel));
    }

    _handleBackButtonClick() {
        if (this.activeLevel! > 1) {
            this.activeLevel = this.activeLevel! - 1;

            // Remove 'is-open' attributes from relevant list items
            const allOpenListItems = this.querySelectorAll('.main-nav__list-item[is-open]');
            if (!allOpenListItems.length) return;
            allOpenListItems.forEach((item) => {
                const itemLevel = parseInt(item.getAttribute('nav-item-level')!);
                if (itemLevel >= this.activeLevel!) {
                    item.removeAttribute(this.ATTRIBUTES.LI_OPEN_ITEM);
                }
            })
        }
    }

    _handleChevronClick(event: Event) {
        const eventTarget = event.target as HTMLSpanElement;
        const parentItem = eventTarget.closest('.main-nav__list-item') as HTMLLIElement;
        parentItem.setAttribute(this.ATTRIBUTES.LI_OPEN_ITEM, '');

        const parentText = parentItem.querySelector('.main-nav__link > .main-nav__text')?.textContent || null;
        this._subtitleText = parentText || '';
        if (this.activeLevel! < this.maximalLevel) {
            this.activeLevel = this.activeLevel! + 1;
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-sliding-nav': ToujouSlidingNav
    }
}

customElements.define('toujou-sliding-nav', ToujouSlidingNav, { extends: 'nav' });
