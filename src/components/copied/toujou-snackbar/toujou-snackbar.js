import { LitElement, html } from 'lit';

import { ToujouSnackbarStyles } from "./toujou-snackbar.styles.js";


class ToujouSnackbar extends LitElement {
  static get is() {
    return 'toujou-snackbar';
  }

  static styles = [ ToujouSnackbarStyles ];

  render() {
    return html`
      <p class="snackbar__message">${this.message}</p>
      <button class="snackbar__button" @click="${this._handleButtonClick}">${this.buttonText}</button>
    `;
  }

  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      showing: {
        type: Boolean,
      },
      cue: {
        type: Array,
      },
      message: {
        type: String,
      },
      buttonText: {
        type: String,
      },
      snackbarType: {
        type: String,
      },
    };
  }

  set showing(value) {
    // eslint-disable-next-line no-unused-expressions
    value ? this.setAttribute('visible', '') : this.removeAttribute('visible');
  }

  set snackbarType(value) {
    this.setAttribute('snackbarType', value);
  }

  set variant(value) {
    this.setAttribute(value, '');
  }

  constructor(props) {
    super(props);

    this.cue = [];
    this._animationStart = null;
    this._possibleVariants = ['success', 'warning', 'error', 'info'];

    window.addEventListener('toujou-add-snackbar', () => { this._removeHiddenState(); }, { once: true });
    window.addEventListener('toujou-add-snackbar', (event) => { this._handleAddSnackbar(event); });
  }

  /**
   * This function fires when the component is appended to the document.
   */
  connectedCallback() {
    super.connectedCallback();

    this.showing = false;
    this._timer = this._timer.bind(this);
  }

  /**
   * This function runs every time one of the element's properties is updated
   */
  updated(_changedProperties) {
    if (_changedProperties.has('cue') && this.cue.length > 0) {
      this._showSnackbar(this.cue[0]);
    } else if (_changedProperties.has('cue') && this.cue.length > 1 && this.cue[0].type === 'auto') {
      this._checkAutoReplacement();
    } else if (_changedProperties.has('cue') && this.cue.length === 0) {
      this._resetVisibleValues();
    }
  }

  /**
   * Add a new snackbar to the cue
   */
  _handleAddSnackbar(event) {
    this.cue = [...this.cue, event.detail];
  }

  /**
   * Check if we need to set the '_wasReplaced' flag,
   * so when the current snackbar is 'auto' and a new one comes,
   * it is immediately replaced without waiting.
   */
  _checkAutoReplacement() {
    if (this.cue.length > 1 && this.cue[0].type === 'auto') {
      this._wasReplaced = true;
    }
  }

  /**
   * handle the snackbar's button click
   */
  _handleButtonClick() {
    this._hideSnackbar();
  }

  /**
   * Hide the snackbar and listen to end of 'hide transition'
   */
  _hideSnackbar() {
    this.showing = false;
    this.addEventListener('transitionend', this._afterHide);
  }

  /**
   * Run after the 'hide transition' is ready.
   * Remove snackbar from cue and clean up eventListeners
   */
  _afterHide() {
    this._removeSnackbarFromCue();
    this._removeSnackbarVariantAttribute();
    this.removeEventListener('transitionend', this._afterHide);
  }

  /**
   * Remove a snackbar from the cue
   */
  _removeSnackbarFromCue() {
    this.cue = this.cue.slice(1);
  }

  /**
   * Remove variant attribute used for previous snackbar
   */
  _removeSnackbarVariantAttribute() {
    this._possibleVariants.forEach((variantName) => {
      if (this.hasAttribute(variantName)) this.removeAttribute(variantName);
    });
  }

  /**
   * Reset some of the visible snackbar values to clean up the markup
   */
  _resetVisibleValues() {
    this.message = null;
    this.buttonText = null;
  }

  /**
   * Show snackbar
   */
  _showSnackbar() {
    setTimeout(() => {
      this._setSnackbarValues(this.cue[0]);
      if (this.cue[0].type === 'auto') {
        this._animationStart = Date.now();
        this._timer(this._animationStart, this._duration);
      }
      this.showing = true;
      this.snackbarType = this.cue[0].type;
    });
  }

  /**
   * Remove hidden state on first time a snackbar is added
   * (the snackbar has a default hidden state to prevent animation on load in IE and Edge)
   */
  _removeHiddenState() {
    this.removeAttribute('hidden');
  }

  /**
   * Timer to auto hide the snackbar
   */
  _timer() {
    const rightNow = Date.now();
    if (this._wasReplaced) {
      this._removeSnackbarFromCue();
      this._wasReplaced = false;
      cancelAnimationFrame(this._timer);
      return;
    }
    if (rightNow - this._animationStart >= this._duration) {
      this._hideSnackbar();
      cancelAnimationFrame(this._timer);
    } else {
      requestAnimationFrame(this._timer);
    }
  }

  /**
   * Set the snackbar's values received via 'add'snackbar' custom event
   */
  _setSnackbarValues(element) {
    if (element.message) {
      this.message = element.message;
    }
    if (element.variant && this._possibleVariants.includes(element.variant)) {
      this.variant = element.variant;
    }

    this.buttonText = element.buttonText || 'OK';
    this._duration = element.duration || 2500;
  }
}

customElements.define(ToujouSnackbar.is, ToujouSnackbar);
