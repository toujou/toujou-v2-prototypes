import { LitElement, html } from 'lit';
import { ToujouConsentStyles } from "./toujou-consent.styles.js";

class ToujouConsent extends LitElement {
  static get is() {
    return 'toujou-consent';
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`
      <slot id="content"></slot>
    `;
  }

  static styles = [ ToujouConsentStyles ];

  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      consentState: {
        type: Boolean,
      },
      listenTo: {
        type: String,
      },
      listenOn: {
        type: String,
      },
    };
  }

  set consentState(state) {
    if (this.consentInputType === 'checkbox') {
      this.querySelector('.consent__checkbox').checked = state;
    }
  }

  set listenTo(events) {
    events.split(/\s+/).forEach((eventName) => {
      this.addEventListener(eventName, this._handleEvent);
    });
  }

  constructor(props) {
    super(props);

    this._handleEvent = this._handleEvent.bind(this);
    this.listenOn = '*';
    this._consentType = this.getAttribute('consenttype');
    this._consentInputType = this._getConsentInputType();
    this.consentState = null;
  }

  /**
   * This function fires when the component is appended to the document.
   */
  connectedCallback() {
    super.connectedCallback();
  }

  /**
   * Handle the different kinds of event
   */
  _handleEvent(event) {
    if (event.type === 'click') {
      this._dispatchClickEvent();
    } else if (event.type === 'change') {
      this._dispatchChangeEvent();
    }
  }

  /**
   * We need to dispatch the ready event inside the firstUpdated,
   * instead of the connectedCallback, because otherwise there is
   * a timing conflict in IE and Edge (can't listen to the event)
   */
  firstUpdated() {
    this._dispatchReadyEvent();
  }

  /**
   * Dispatch a 'toujou-consent-checkbox-changed' event when a checkbox is clicked
   * so other elements can react to it
   */
  _dispatchChangeEvent() {
    const newChangeEvent = new CustomEvent('toujou-consent-checkbox-changed', {
      bubbles: true,
      composed: true,
      detail: {
        consentElement: this,
      },
    });
    this.dispatchEvent(newChangeEvent);
  }

  /**
   * Dispatch a 'toujou-consent-button-clicked' when a button is clicked
   * so other elements can react to it
   */
  _dispatchClickEvent() {
    const newClickEvent = new CustomEvent('toujou-consent-button-clicked', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(newClickEvent);
  }

  /**
   * Dispatch a 'toujou-consent-connect' event so other elements know that
   * the toujou-consent element is ready
   */
  _dispatchReadyEvent() {
    const consentReadyEvent = new CustomEvent('toujou-consent-connected', {
      bubbles: true,
      composed: true,
      detail: {
        consentType: this._consentType,
      },
    });
    this.dispatchEvent(consentReadyEvent);
  }

  /**
   * The toujou-consent can have two types of inputs: checkbox or button
   * Here we set the correct content type to the element
   */
  _getConsentInputType() {
    const consentCheckboxes = this.querySelectorAll('.consent__checkbox');
    const consentButtons = this.querySelectorAll('.consent__button');
    if (consentCheckboxes.length > 0) {
      this.consentInputType = 'checkbox';
    } else if (consentButtons.length > 0) {
      this.consentInputType = 'button';
    }
  }
}

customElements.define(ToujouConsent.is, ToujouConsent);
