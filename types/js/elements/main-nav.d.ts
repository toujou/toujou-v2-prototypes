export declare class MainNav {
    private mainNavEl;
    private navListItems;
    protected readonly listItemSelector = ".main-nav__list-item";
    protected readonly hasSubNavAttribute = "has-subnav";
    protected readonly isOpenAttribute = "is-open";
    protected readonly listItemLevelAttribute = "nav-item-level";
    protected readonly listItemChevronSelector = "main-nav__chevron";
    constructor(mainNavEl: MainNavElement);
    /**
     * Get list of all the main navigation list items and start listening for click events
     */
    _getNavListItems: () => void;
    /**
     * - On Enter or Space click on a main nav chevron we toggle the nav item open / closed
     * - On Esc press close the open main navigation
     * @param   event
     * @param   listItem
     */
    _handleKeyUp: (event: KeyboardEvent, listItem: MainNavListItem) => void;
    /**
     * Toggle the list item isOpen state and add / remove the isOpenAttribute accordingly
     * @param   listItem
     */
    _toggleListItemState: (listItem: MainNavListItem) => void;
    /**
     * Close other open list items so there aren't multiple lists open at the same time
     * (only sibling or child lists will be closed)
     * @param   listItem
     */
    _closeOtherOpenListItems: (listItem: MainNavListItem) => void;
    /**
     * Close all open navigation items
     */
    _closeAllNavListItems: () => void;
    /**
     * Close the main nav on click outside
     * @param   event
     */
    _onWindowClick: (event: MouseEvent) => void;
}
export declare function initMainNav(): void;
declare global {
    interface MainNavListItem extends HTMLElement {
        hasSubNav: boolean;
        isOpen: boolean;
        level: string | null;
        toggleEl: HTMLElement;
    }
    interface MainNavElement extends HTMLElement {
        mainNav: MainNav;
    }
}
