import { LitElement, html } from 'lit';
import { consentsStore } from './consentsStore';
import {
  clearConsentTypeData,
  saveAllConsents,
  dismissConsentBox,
  undismissConsentBox,
} from './actions/consent-actions';
import { ToujouConsentWidgetStyles } from "./toujou-consent-widget.styles.js";

class ToujouConsentWidget extends LitElement {
  static get is() {
    return 'toujou-consent-widget';
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`
      <slot name="consentWidgetHeader"></slot>
      <slot id="consentElements"></slot>
      <slot name="consentWarning" id="consentWarning"></slot>
    `;
  }

  static styles = [ ToujouConsentWidgetStyles ];

  static get styles() {
    return styles;
  }

  set _warningVisible(value) {
    this.setAttribute('warningvisible', value);
  }

  static get properties() {
    return {
      inPage: {
        type: Boolean,
        attribute: 'in-page',
      },
      listenTo: {
        type: String,
      },
      listenOn: {
        type: String,
      },
      _warningVisible: {
        type: Boolean,
      },
      deactivated: {
        type: Boolean,
      },
    };
  }

  /**
   * Add separate event listeners to each listener type on the 'listenTo' attribute
   */
  set listenTo(events) {
    events.split(/\s+/).forEach((eventName) => {
      this.addEventListener(eventName, this._handleEvent);
    });
  }

  /**
   * When the '_dismissedBox' is set we need to do two things:
   *    - Set / Remove the 'hidden' attribute from the 'consent-box' element
   *    - Set the correct value for the '_warningVisible' property
   */
  set _dismissedBox(value) {
    if (!this.inPage) {
      // eslint-disable-next-line no-unused-expressions
      value ? this.setAttribute('hidden', '') : this.removeAttribute('hidden');
    }

    this._warningVisible = this.inPage && !value;
  }

  constructor(props) {
    super(props);

    this.onStateChange = this.onStateChange.bind(this);
    this._handleEvent = this._handleEvent.bind(this);

    this.inPage = false;
    this.deactivated = false;
    this.store = consentsStore;
    this.store.subscribe(this.onStateChange);
    this.consentTypeNames = ['tracking', 'html', 'maps', 'video'];

    this._state = this.store.getState();
    this.listenOn = '*';
    this._warningVisible = this.inPage;

    if (window.location.hash === '#aaa') {
      this.deactivated = true;
    }

    this.addEventListener('toujou-consent-connected', this._handleConsentConnected);
    this.addEventListener('toujou-consent-checkbox-changed', this._handleConsentCheckboxChanged);
  }

  /**
   * This function fires when the component is appended to the document.
   */
  connectedCallback() {
    super.connectedCallback();

    this._inPage = this.inPage;
    this._dismissedBox = this._state.consents.consentBoxDismissed ? this._state.consents.consentBoxDismissed : false;

    if (this.deactivated) {
      setTimeout(() => {
        this._prepareToSaveConsents();
        this._dismissConsentBox();
        this._dispatchConsentDeactivated();
      });
    }
  }

  /**
   * When the element first updates we check to see if
   *    - the widget has been dismissed AND
   *    - one consent is missing AND
   *    - the consent element for the missing consent also exists
   *      (it doesn't exist for instance if tracking code not set im BE)
   * if so, this means the consent has expired and we need to show the widget again
   */
  firstUpdated() {
    this.consentTypeNames.forEach((consentTypeName) => {
      const consentChildElement = this.querySelector(`toujou-consent[consenttype="${consentTypeName}"]`);
      // eslint-disable-next-line max-len
      if (this._state.consents.consentBoxDismissed && !this._state.consents[consentTypeName] && consentChildElement) {
        this._undismissConsentBox();
      }
    });
  }

  /**
   * This function runs each time the store changes
   */
  onStateChange() {
    this._state = this.store.getState();
    this._dismissedBox = this._state.consents.consentBoxDismissed;

    this._updateAllConsentElementsStates();
  }

  /**
   * Handle events on the toujou-consent-widget element
   */
  _handleEvent(event) {
    event.stopPropagation();

    // Click on save button in 'consent-box'
    if (event.type === 'click' && !this._inPage && event.target.matches(this.listenOn)) {
      this._handleConsentBoxSaveButtonClick(event.target);
    }
  }

  /**
   * React to the 'toujou-consent-checkbox-changed' event sent by a child 'toujou-consent'
   * when a checkbox status has changed
   */
  _handleConsentCheckboxChanged(event) {
    // Check if the element is in page and make sure the consent box has been dismissed
    if (this.inPage && this._state.consents.consentBoxDismissed === true) {
      this._prepareToSaveConsents();
      this._dispatchAddSnackbar(event.target.getAttribute('snackbarmessage'));
    }
  }

  /**
   * Handle click on the "Save" button
   * The 'save' button shows only on the 'consent-box' version of the toujou-consent-widget
   * A click on this button triggers a consent save and dismisses the 'consent-box'
   */
  _handleConsentBoxSaveButtonClick(button) {
    this._prepareToSaveConsents(button.hasAttribute('accept-all') ? true : null);
    this._dismissConsentBox();
  }

  /**
   * Before we can save a consent change to the store there are some actions we need to take:
   *    - Get the current consent status
   *    - Call the function to save the consents
   */
  _prepareToSaveConsents(overrideStatus = null) {
    const newConsents = this._getAllConsents(overrideStatus);
    this._saveAllConsents(newConsents);
  }

  /**
   * Get all the consent states so we can save them to the store
   */
  _getAllConsents(overrideStatus = null) {
    const newConsents = {};
    const consentElements = this.querySelectorAll('toujou-consent');
    // eslint-disable-next-line no-unused-expressions
    consentElements && consentElements.forEach((consentElement) => {
      const consentType = consentElement.getAttribute('consenttype');
      newConsents[consentType] = this._createNewConsentData(consentElement, overrideStatus);
    });
    return newConsents;
  }

  /**
   * Create the new consent data for a consentType
   * It returns an object ready to be dispatched to the store
   */
  _createNewConsentData(consentElement, overrideStatus = null) {
    const consentCheckbox = consentElement.querySelector('.consent__checkbox');
    if (overrideStatus !== null) {
      consentCheckbox.checked = overrideStatus;
    }
    const consentLifetime = this._createConsentLifeInMillis(consentElement.getAttribute('consenttype'), consentElement.getAttribute('consentlifetime'));
    const consentStatus = consentCheckbox.checked;

    return {
      consentGiven: consentStatus,
      consentCreationDate: Date.now(),
      consentExpirationDate: Date.now() + consentLifetime,
      consentLifetime,
    };
  }

  /**
   * Return the consent Lifetime in milliseconds
   * External content consents have daytime in 'days'
   * Tracking consent has lifetime '0' for default (2 Years) and '1' for session
   * @returns {number}
   */
  // eslint-disable-next-line class-methods-use-this
  _createConsentLifeInMillis(consentType, consentLifetime) {
    if (consentType === 'tracking') {
      return consentLifetime === '0' ? 24 * 60 * 60 * 1000 * 730 : 0;
    }

    return consentLifetime * 24 * 60 * 60;
  }

  /**
   * Call store action to dismiss the consent box
   */
  _dismissConsentBox() {
    this.store.dispatch(dismissConsentBox());
    this._dispatchConsentWidgetDismissedEvent();
  }

  /**
   * Call store action to "undismiss" the consent box
   */
  _undismissConsentBox() {
    this.store.dispatch(undismissConsentBox());
  }

  /**
   * Call store action to update the values of all consent types at the same time
   */
  _saveAllConsents(newConsents) {
    this.store.dispatch(saveAllConsents(newConsents));
  }

  /**
   * React to the 'toujou-consent-connect' event,
   * sent by a 'toujou-consent' element when it is ready
   */
  _handleConsentConnected(event) {
    this._setConsentElementState(event.target);
  }

  /**
   * Set the correct (checkbox) state on a child 'toujou-consent' element
   */
  _setConsentElementState(consentElement) {
    if (consentElement.tagName === 'TOUJOU-CONSENT') {
      const consentType = consentElement.getAttribute('consenttype');
      const preChecked = consentElement.getAttribute('prechecked') === '1';
      // eslint-disable-next-line no-param-reassign
      consentElement.consentState = this._getConsentTypeState(this._state, consentType, preChecked);
    }
  }

  /**
   * Update all the consent states at once.
   * This is used on the 'consent-box' when the 'save' button is clicked
   */
  _updateAllConsentElementsStates() {
    const consentElements = this.querySelectorAll('toujou-consent');
    consentElements.forEach((consentElement) => {
      this._setConsentElementState(consentElement);
    });
  }

  /**
   * Get consent type state
   * taking into account the current consent state, if it is valid or not and the pre-checked state
   */
  _getConsentTypeState(state, consentType, preChecked) {
    let consentTypeData = null;

    if (!state || !state.consents || !state.consents[consentType]) {
      consentTypeData = null;
    } else {
      consentTypeData = state.consents[consentType];
    }

    if (!consentTypeData) {
      return preChecked;
    }

    if (consentTypeData && this._isConsentExpired(consentTypeData)) {
      this.store.dispatch(clearConsentTypeData(consentType));
      this._dispatchConsentExpiredEvent(consentType);
      this._undismissConsentBox();
      return preChecked;
    }

    if (consentTypeData && !this._isConsentExpired(consentTypeData)) {
      return consentTypeData.consentGiven;
    }

    return consentTypeData;
  }

  /**
   * Check if a consent's lifetime has expired
   * @returns {boolean}
   */
  // eslint-disable-next-line class-methods-use-this
  _isConsentExpired(consentData) {
    // eslint-disable-next-line max-len
    return (consentData.consentCreationDate + consentData.consentLifetime > consentData.consentExpirationDate);
  }

  /**
   * Dispatch a custom event when a consent expires, so other elements can react to it.
   */
  _dispatchConsentExpiredEvent(consentType) {
    const consentExpiredEvent = new CustomEvent('toujou-consent-expired', {
      bubbles: true,
      composed: true,
      detail: {
        consentType,
      },
    });
    this.dispatchEvent(consentExpiredEvent);
  }

  /**
   * Dispatch event to add a snackbar
   */
  _dispatchAddSnackbar(snackbarMessage) {
    const addSnackbarEvent = new CustomEvent('toujou-add-snackbar', {
      bubbles: true,
      composed: true,
      detail: {
        message: snackbarMessage,
        type: 'auto',
        duration: 2500,
        variant: 'success',
      },
    });
    this.dispatchEvent(addSnackbarEvent);
  }

  /**
   * Dispatch a custom event when a consent expires,
   * so other elements can react to it.
   */
  _dispatchConsentWidgetDismissedEvent() {
    const consentWidgetDismissedEvent = new CustomEvent('toujou-consent-widget-dismissed', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(consentWidgetDismissedEvent);
  }

  /**
   * Dispatch a custom event when the consent box is deactivated,
   * so other elements can react to it.
   * It is deactivated when the users choose it on the BE.
   */
  _dispatchConsentDeactivated() {
    const consentWidgetDeactivatedEvent = new CustomEvent('toujou-consent-widget-deactivated', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(consentWidgetDeactivatedEvent);
  }
}

customElements.define(ToujouConsentWidget.is, ToujouConsentWidget);
