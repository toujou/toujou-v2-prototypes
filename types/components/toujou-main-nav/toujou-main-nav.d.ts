import { LitElement } from 'lit';
export declare class ToujouMainNav extends LitElement {
    navListItems: MainNavListItem[];
    protected readonly listItemSelector = ".main-nav__list-item";
    protected readonly hasSubNavAttribute = "has-subnav";
    protected readonly isOpenAttribute = "is-open";
    protected readonly listItemLevelAttribute = "nav-item-level";
    constructor();
    connectedCallback(): void;
    protected createRenderRoot(): Element | ShadowRoot;
    /**
     * Get list of all the main navigation list items and start listening for click events
     */
    _getNavListItems: () => void;
    _handleKeyUp: (event: KeyboardEvent, listItem: MainNavListItem) => void;
    /**
     * Toggle the list item isOpen state and add / remove the isOpenAttribute accordingly
     * @param listItem
     */
    _toggleListItemState(listItem: MainNavListItem): void;
    /**
     * Close other open list items so there aren't multiple lists open at the same time
     * (only sibling or child lists will be closed)
     * @param listItem
     */
    _closeOtherOpenListItems(listItem: MainNavListItem): void;
    /**
     * Close all open navigation items
     */
    _closeAllNavListItems(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'toujou-main-nav': ToujouMainNav;
    }
    interface MainNavListItem extends HTMLElement {
        hasSubNav: boolean;
        isOpen: boolean;
        level: string | null;
        toggleEl: HTMLElement;
    }
}
