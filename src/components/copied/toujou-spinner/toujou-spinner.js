import { html, LitElement } from 'lit';
import { ToujouSpinnerStyles } from "../toujou-spinner/toujou-spinner.styles.js";

class ToujouSpinner extends LitElement {
  static get is() {
    return 'toujou-spinner';
  }

  static styles = [ ToujouSpinnerStyles ];

  static get styles() {
    return styles;
  }

  render() {
    return html`
      <svg class="spinner__svg" viewBox="25 25 50 50">
        <circle class="spinner__circle" cx="50" cy="50" r="20" stroke-miterlimit="10"/>
      </svg>
    `;
  }
}

customElements.define(ToujouSpinner.is, ToujouSpinner);
