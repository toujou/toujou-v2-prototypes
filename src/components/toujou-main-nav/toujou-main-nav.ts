import { LitElement } from 'lit'
import { property } from 'lit/decorators.js'

export class ToujouMainNav extends LitElement {
    @property({ type: Array })
    navListItems: MainNavListItem[] = [];

    protected readonly listItemSelector = '.main-nav__list-item';
    protected readonly hasSubNavAttribute = 'has-subnav';
    protected readonly isOpenAttribute = 'is-open';
    protected readonly listItemLevelAttribute = 'nav-item-level';

    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();

        this._getNavListItems();

        // @ts-ignore
        window.addEventListener('keyup', this._handleKeyUp);
    }

    protected createRenderRoot(): Element | ShadowRoot {
        return this;
    }

    /**
     * Get list of all the main navigation list items and start listening for click events
     */
    _getNavListItems = () => {
        this.navListItems = [...this.querySelectorAll(this.listItemSelector)] as MainNavListItem[];

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
            listItem.addEventListener('keyup', () => {
                // @ts-ignore
                this._handleKeyUp(event, listItem);
            });
        })
    }

    _handleKeyUp = (event: KeyboardEvent, listItem: MainNavListItem) => {
        // Open list item when there is a "enter" or "space" press on the item chevron
        if (event.key === 'Enter' || event.code === 'Enter' || event.code === 'Space' || event.key === ' ') {
            this._toggleListItemState(listItem);
        }

        // Close all nav items when "Escape" is pressed
        if (event.key === 'Escape' || event.code === 'Escape') {
            this._closeAllNavListItems();
        }
    }

    /**
     * Toggle the list item isOpen state and add / remove the isOpenAttribute accordingly
     * @param listItem
     */
    _toggleListItemState(listItem: MainNavListItem) {
        listItem.isOpen = !listItem.isOpen;

        if (listItem.isOpen) {
            listItem.setAttribute(this.isOpenAttribute, '')
            this._closeOtherOpenListItems(listItem);
        } else {
            listItem.removeAttribute(this.isOpenAttribute);
        }
    }

    /**
     * Close other open list items so there aren't multiple lists open at the same time
     * (only sibling or child lists will be closed)
     * @param listItem
     */
    _closeOtherOpenListItems(listItem: MainNavListItem) {
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
    _closeAllNavListItems() {
        this.navListItems.forEach((listItem) => {
            if (listItem.isOpen ) {
                this._toggleListItemState(listItem);
            }
        })
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-main-nav': ToujouMainNav
    }

    interface MainNavListItem extends HTMLElement {
        hasSubNav: boolean,
        isOpen: boolean,
        level: string | null,
        toggleEl: HTMLElement
    }
}

customElements.define('toujou-main-nav', ToujouMainNav, { extends: 'nav' });
