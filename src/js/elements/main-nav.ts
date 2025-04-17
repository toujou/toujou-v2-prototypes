export class MainNav {
    private mainNavEl: MainNavElement;
    private navListItems: MainNavListItem[] = [];
    private activeSubNavs: MainNavListItem[] = [];

    protected readonly listItemSelector = '.main-nav__list-item';
    protected readonly hasSubNavAttribute = 'has-subnav';
    protected readonly isOpenAttribute = 'is-open';
    protected readonly listItemLevelAttribute = 'nav-item-level';
    protected readonly listItemChevronSelector = '.main-nav__chevron';
    protected readonly listSelector = '.main-nav__list';

    constructor(mainNavEl: MainNavElement) {
        this.mainNavEl = mainNavEl;
        this._getNavListItems();

        // @ts-ignore
        window.addEventListener('keyup', this._handleKeyUp);
    }

    /**
     * Get list of all the main navigation list items and start listening for click events
     */
    _getNavListItems = () => {
        this.navListItems = [...this.mainNavEl.querySelectorAll(this.listItemSelector)] as MainNavListItem[];

        if (!this.navListItems) {
            console.warn("TOUJOU: Main navigation has no list items!");
            return;
        }

        this.navListItems.forEach((listItem: MainNavListItem) => {
            listItem.hasSubNav = listItem.hasAttribute(this.hasSubNavAttribute);
            if (!listItem.hasSubNav) return;

            listItem.isOpen = false;
            listItem.level = listItem.getAttribute(this.listItemLevelAttribute);
            listItem.toggleEl = listItem.querySelector('.main-nav__chevron') as HTMLElement;
            listItem.toggleEl.addEventListener('click', () => {
                this._toggleListItemState(listItem);
            })
            listItem.addEventListener('keyup', this._handleKeyUp);
        })
    }

    /**
     * Close parent or whole navigation
     * @param   event
     */
    _handleKeyUp = (event: KeyboardEvent) => {
        if (event.key === 'Escape' || event.code === 'Escape') {
            const listItem = this.activeSubNavs.shift();

            event.stopPropagation();

            if(!listItem) {
                const burgerButton = document.querySelector(
                    `.burger-button[aria-controls="${this.mainNavEl.id}"][aria-expanded="true"]`);
                if(!burgerButton) return;

                /* @ts-ignore */
                burgerButton.click();
                /* @ts-ignore */
                burgerButton.focus({ focusVisible: true });
            } else {
                this._toggleListItemState(listItem!);

                listItem.parentElement?.querySelector(
                    `${this.listItemChevronSelector}[aria-controls="${listItem.querySelector(this.listSelector)?.id}"]`
                /* @ts-ignore */
                )?.focus({ focusVisible: true });
            }
        }
    }

    /**
     * Toggle the list item isOpen state and add / remove the isOpenAttribute accordingly
     * Set the chevron element's aria-expanded attribute according to list item isOpen state
     * @param   listItem
     */
    _toggleListItemState = (listItem: MainNavListItem) => {
        const listItemChevron = listItem.querySelector(this.listItemChevronSelector);

        listItem.isOpen = !listItem.isOpen;

        listItemChevron?.setAttribute('aria-expanded', listItem.isOpen ? 'true' : 'false');
        listItemChevron?.setAttribute('aria-pressed', listItem.isOpen ? 'true' : 'false');

        if (listItem.isOpen) {
            listItem.setAttribute(this.isOpenAttribute, '')
            this._closeOtherOpenListItems(listItem);
            this.activeSubNavs.unshift(listItem);
            window.addEventListener('click', this._onWindowClick);
        } else {
            listItem.removeAttribute(this.isOpenAttribute);
        }
    }

    /**
     * Close other open list items so there aren't multiple lists open at the same time
     * (only sibling or child lists will be closed)
     * @param   listItem
     */
    _closeOtherOpenListItems = (listItem: MainNavListItem) => {
        const openSiblings: NodeListOf<MainNavListItem> | undefined = listItem.parentNode?.querySelectorAll(`${this.listItemSelector}[is-open]`);
        if (!openSiblings) return;

        openSiblings.forEach((sibling) => {
            if (sibling.isOpen && sibling !== listItem) {
                this._toggleListItemState(sibling);
            }
        })
    }

    /**
     * Close all open navigation items
     */
    _closeAllNavListItems = () => {
        this.navListItems.forEach((listItem) => {
            if (listItem.isOpen) {
                this._toggleListItemState(listItem);
                window.removeEventListener('click', this._onWindowClick);
            }
        })
    }

    /**
     * Close the main nav on click outside
     * @param   event
     */
    _onWindowClick = (event: MouseEvent)=> {
        const clickedEl = event.target as HTMLElement;
        if (!clickedEl.closest('.main-nav')) {
            this._closeAllNavListItems();
        }
    }
}

export function initMainNav() {
    const mainNavEl = document.querySelector('.main-nav') as MainNavElement;
    if (!mainNavEl || mainNavEl.mainNav) return;

    mainNavEl.mainNav = new MainNav(mainNavEl);
}

declare global {
    interface MainNavListItem extends HTMLElement {
        hasSubNav: boolean,
        isOpen: boolean,
        level: string | null,
        toggleEl: HTMLElement
    }

    interface MainNavElement extends HTMLElement {
        mainNav: MainNav,
    }
}
