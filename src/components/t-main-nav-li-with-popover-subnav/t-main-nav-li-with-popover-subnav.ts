/**
 * Add correct anchor-name and position-anchor to the list item and the child subnav list elements
 */
class TMainNavLiWithPopoverSubnav extends HTMLLIElement {
    private childSubnav: HTMLUListElement | null = null;

    private readonly SELECTORS = {
        CHILD_POPOVER_SUBNAV: '.test-main-nav__list[popover]',
    };

    constructor() {
        super();

        this.childSubnav = this.querySelector(this.SELECTORS.CHILD_POPOVER_SUBNAV);
        if (!this.childSubnav) return;

        this._init();
    }

    _init = () => {
        const anchorName = `--anchorName-${this.id}`;
        this.style.setProperty('anchor-name', anchorName);
        this.childSubnav?.style.setProperty('position-anchor', anchorName);
    }
}

customElements.define('t-main-nav-li-with-popover-subnav', TMainNavLiWithPopoverSubnav, { extends: 'li' });
