import { LitElement } from 'lit'
import { property } from 'lit/decorators.js'

export class ToujouMainNav extends LitElement {
    @property({ type: Array })
    navListItems: MainNavListItem[] = [];

    protected readonly listItemSelector = '.main-nav__list-item';
    protected readonly hasSubNavAttribute = 'has-subnav';
    protected readonly isOpenAttribute = 'is-open';

    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();

        this._getNavListItems();
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
            listItem.toggle = listItem.querySelector('.main-nav__chevron') as HTMLElement;
            listItem.toggle.addEventListener('click', () => {
                this._toggleListItemState(listItem);
            })
        })
    }

    /**
     * Toggle the list item isOpen state and add / remove the isOpenAttribute accordingly
     * @param listItem
     */
    _toggleListItemState(listItem: MainNavListItem) {
        listItem.isOpen = !listItem.isOpen;

        listItem.isOpen
            ? listItem.setAttribute(this.isOpenAttribute, '')
            : listItem.removeAttribute(this.isOpenAttribute);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-main-nav': ToujouMainNav
    }

    interface MainNavListItem extends HTMLElement {
        hasSubNav: boolean,
        isOpen: boolean,
        toggle: HTMLElement
    }
}

customElements.define('toujou-main-nav', ToujouMainNav, { extends: 'nav' });
