/**
 * Add correct anchor-name and position-anchor to the list item and the child subnav list elements
 */
declare class TMainNavLiWithPopoverSubnav extends HTMLLIElement {
    private childSubnav;
    private readonly SELECTORS;
    constructor();
    _init: () => void;
}
