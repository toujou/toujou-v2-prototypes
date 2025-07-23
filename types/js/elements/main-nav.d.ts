export declare class MainNav {
    private mainNavEl;
    private navListItems;
    private activeSubNavs;
    protected readonly listItemSelector = ".main-nav__list-item";
    protected readonly hasSubNavAttribute = "data-has-subnav";
    protected readonly isOpenAttribute = "data-is-open";
    protected readonly listItemLevelAttribute = "data-nav-item-level";
    protected readonly listItemChevronSelector = ".main-nav__chevron";
    protected readonly listSelector = ".main-nav__list";
    protected readonly isOpenOnHoverAttribute = "data-is-open-on-hover";
    protected readonly minWidthDesktop: number;
    constructor(mainNavEl: MainNavElement);
    /**
     * Get list of all the main navigation list items and start listening for click events
     */
    _getNavListItems: () => void;
    /**
     * Handle mouse events
     * - Mouseenter/Mouseleave: Toggle subnav of current MainNavListItem
     * @param event
     */
    _handleMouseEvent: (event: MouseEvent) => void;
    /**
     * Handle keyup events
     * - Escape: Close parent or whole navigation
     * @param   event
     */
    _handleKeyUp: (event: KeyboardEvent) => void;
    /**
     * Toggle the list item isOpen state and add / remove the isOpenAttribute accordingly
     * Set the chevron element's aria-expanded attribute according to list item isOpen state
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
