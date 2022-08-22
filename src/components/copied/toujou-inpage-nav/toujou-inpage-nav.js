import { html, LitElement } from 'lit';
import getNavBreakpoint from './toujou-inpage-nav-getBreakpoint.js';

class ToujouInpageNav extends LitElement {
  static get is() {
    return 'toujou-inpage-nav';
  }

  render() {
    return html`
      <slot></slot>
      <slot name="cta" id="cta"></slot>
    `;
  }

  static get properties() {
    return {
      isMobile: {
        type: Boolean,
        reflect: true,
      },
      mobileOpen: {
        type: Boolean,
        reflect: true,
      },
      _currentSectionID: {
        type: String,
      },
      _targetSections: {
        type: Map,
      },
    };
  }

  /**
   * When the _currentSectionId changes we should change nav element to reflect new state
   *
   * @param value
   * @private
   */
  set _currentSectionID(value) {
    if (!this._navItems) return;

    if (!value) {
      this._updateLabelVisibility(false);
      this._updateNavItemsState(null);
    } else if (this._previousCurrentSectionID !== value) {
      this._updateLabelVisibility(value);
      this._updateNavItemsState(value);
    }
  }

  constructor() {
    super();

    this.mobileBreakpointOffset = this._getMobileBreakpointOffset(); // in pixels
    this._currentSectionID = null;
    this._previousCurrentSectionID = null;
    this._isCentered = this.hasAttribute('centered');
    this._isAuto = this.hasAttribute('is-auto');
    this._targetSections = new Map();
    this._rootMarginsSize = -200;

    setTimeout(() => {
      this._init();
    });
  }

  /**
   * Remove event listeners when the element disconnect from page
   */
  disconnectedCallback() {
    super.disconnectedCallback();

    window.removeEventListener('resize', this._checkIsMobileState.bind(this));
    this._toggle.removeEventListener('click', this._mobileOpenToggle.bind(this));
    this.addEventListener('click', this._handleNavClick.bind(this));
  }

  /**
   * Watch for attribute changes so we can update the aria attribute values
   *
   * @param name
   * @param old
   * @param value
   */
  attributeChangedCallback(name, old, value) {
    super.attributeChangedCallback(name, old, value);
    if (name === 'ismobile' || name === 'mobileopen') {
      this._updateAriaAttributes(name, value);
    }
  }

  /**
   * Initialize the inpage navigation item
   *    - Get child elements
   *    - add intersection observers
   *    - set event listeners
   *
   * @private
   */
  _init() {
    this._getChildrenElements();
    if (!this._navItems) {
      console.error('Could not initialize the inpage-nav. Error: No nav items!!!');
      return;
    }

    this._toggle = this.querySelector('.inpage-nav__toggle');
    this._checkIsMobileState();
    this._addTargetObservers();

    window.addEventListener('resize', this._checkIsMobileState.bind(this));
    this._toggle.addEventListener('click', this._mobileOpenToggle.bind(this));
    this.addEventListener('click', this._handleNavClick.bind(this));
  }

  /**
   * Get nav items information: item, item link and item link target
   *
   * @private
   */
  _getChildrenElements() {
    this._navItems = {};
    this._navLabel = this.querySelector('.inpage-nav__label') || null;
    this._cta = this.querySelector('[slot="cta"]');
    const allNavItems = this.querySelectorAll('.inpage-nav__item') || null;
    allNavItems.forEach((navItem, i) => {
      const navItemLink = navItem.querySelector('a');
      const navItemLinkHref = navItemLink.getAttribute('href');
      this._navItems[i] = {
        item: navItem,
        link: navItemLinkHref,
        target: document.querySelector(navItemLinkHref),
      };
    });
  }

  /**
   * Check if there is enough place to show the navigation items side by side
   * so we can toggle the isMobile attribute accordingly
   *
   * @private
   */
  _checkIsMobileState() {
    this.isMobile = false;
    window.requestAnimationFrame(() => {
      this._navBreakpoint = getNavBreakpoint(this._navItems, this._navLabel, this._cta, this._isCentered);
      this.isMobile = this._navBreakpoint > (this.offsetWidth - this.mobileBreakpointOffset);
    });
  }

  /**
   * Create an intersection observer for the target section of each navigation item
   * If the target itself doesn't have an id,
   * we observe the next Sibling
   *
   * @private
   */
  _addTargetObservers() {
    const options = {
      rootMargin: `${this._rootMarginsSize}px 0px ${this._rootMarginsSize}px 0px`,
      threshold: this._createThresholdList(50),
    };
    this.observer = new IntersectionObserver(this._handleObserver.bind(this), options);

    Object.keys(this._navItems).forEach((navItem) => {
      const targetElement = this._navItems[navItem].target;

      if (!(targetElement instanceof HTMLElement)) {
        return;
      }

      this._targetSections.set(targetElement, false);

      const elementToObserve = targetElement.hasAttribute('id')
        ? targetElement
        : targetElement.nextElementSibling;

      this.observer.observe(elementToObserve);
    });
  }

  /**
   * Generate a threshold list for the observer base on a number of steps
   *
   * @param numberOfSteps
   * @returns {[number]}
   * @private
   */
  _createThresholdList(numberOfSteps) {
    return [...Array(numberOfSteps).keys()].map((x) => x / numberOfSteps);
  }

  /**
   * Handle intersection observers change
   * Add / remove attribute when target sections came or leave view
   *
   * @param entries
   * @private
   */
  _handleObserver(entries) {
    entries.forEach((entry) => {
      this._targetSections.set(entry.target, entry.isIntersecting);
    });

    this._updateSectionsAttributes();
    this._updateActiveItemUI();
  }

  /**
   * Update the attribute on the section according to their visibility
   *
   * @private
   */
  _updateSectionsAttributes() {
    let firstOneIsVisible = false;
    this._targetSections.forEach((isVisible, element) => {
      element.toggleAttribute('inpageNavTargetVisible', firstOneIsVisible ? false : (isVisible));
      if (isVisible && !firstOneIsVisible) {
        firstOneIsVisible = isVisible;
      }
    });
  }

  /**
   * Update the navbar items to highlight the currently active item
   * (corresponding to the visible section)
   *
   * @private
   */
  _updateActiveItemUI() {
    const firstVisibleSection = document.querySelector('*[inpageNavTargetVisible]') || null;
    if (firstVisibleSection) {
      this._currentSectionID = `#${firstVisibleSection.id.toString()}`;
    } else if (!firstVisibleSection && this._navLabel) {
      this._currentSectionID = null;
    } else if (!firstVisibleSection && !this._navLabel) {
      this._currentSectionID = this._navItems[0].link;
    }
  }

  /**
   * Toggle the mobileOpen attribute
   *
   * @private
   */
  _mobileOpenToggle() {
    this.mobileOpen = !this.mobileOpen;
  }

  /**
   * handle click on a navigation item
   *    - close nav
   *    - smooth scroll to target
   *
   * @param event
   * @private
   */
  _handleNavClick(event) {
    const clickedElement = event.target;
    if (clickedElement.classList.contains('inpage-nav__link')) {
      this.mobileOpen = false;
    }
  }

  /**
   * Update aria attributes when the relevant property changes
   *
   * @param propertyName
   * @private
   */
  _updateAriaAttributes(propertyName) {
    if (propertyName === 'mobileopen') {
      this._toggle.setAttribute('aria-expanded', this.mobileOpen);
    } else if (propertyName === 'ismobile') {
      this._toggle.setAttribute('aria-hidden', !this.isMobile);
    }
  }

  /**
   * Update the label visibility status
   *
   * @param value
   * @private
   */
  _updateLabelVisibility(value) {
    if (this._navLabel) {
      if (!value) {
        this._navLabel.setAttribute('visible', '');
      } else {
        this._navLabel.removeAttribute('visible');
      }
    }
  }

  /**
   * Update currently active nav item
   *
   * @param value
   * @private
   */
  _updateNavItemsState(value) {
    const currentActiveItem = this.querySelector('.inpage-nav__item[active]');
    if (currentActiveItem) {
      currentActiveItem.removeAttribute('active');
      currentActiveItem.removeAttribute('aria-current');
    }
    Object.keys(this._navItems).forEach((navItem) => {
      if (this._navItems[navItem].link === value) {
        this._navItems[navItem].item.setAttribute('active', '');
        this._navItems[navItem].item.setAttribute('aria-current', 'true');
      }
    });
    this._previousCurrentSectionID = value;
  }

  /**
   * Get inpagevav breakpoint offset value from the corresponding CSS Variable
   *
   * @returns {number}
   * @private
   */
  _getMobileBreakpointOffset() {
    const cStyles = getComputedStyle(document.documentElement);
    return parseInt(cStyles.getPropertyValue('--toujou-inpage-nav-breakpoint-offset') || 180, 10);
  }
}

customElements.define(ToujouInpageNav.is, ToujouInpageNav);
