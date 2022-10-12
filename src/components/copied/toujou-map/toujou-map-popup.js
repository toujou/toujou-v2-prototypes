import { LitElement, html } from 'lit';
import mapboxgl from 'mapbox-gl';
import { ToujouMapPopupStyles } from "./toujou-map-popup.styles.js";

function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

class ToujouMapPopup extends LitElement {
  static get is() { return 'toujou-map-popup'; }

  static styles = [ ToujouMapPopupStyles ];

  static get styles() { return styles; }

  render() {
    return html`<slot></slot>`;
  }

  static get properties() {
    return {

      coordinates: {
        type: Array,
      },

      closeButton: {
        type: Boolean,
        attribute: 'close-button',
      },

      closeOnOutsideClick: {
        type: Boolean,
        attribute: 'close-on-outside-click',
      },
    };
  }

  set map(map) {
    if (map !== this._map) {
      this._map = map;
      map ? this.initPopup() : (this.popup && this.popup.remove());
    }
  }

  get map() {
    return this._map;
  }

  set marker(marker) {
    if (marker !== this._marker) {
      this._marker = marker;
      marker ? this.initPopup() : (this.popup && this.popup.remove());
    }
  }

  get marker() {
    return this._marker;
  }

  set coordinates(lngLatLike) {
    this.popup && this.popup.setLngLat(lngLatLike);
    this._lngLat = lngLatLike;
  }

  get coordinates() {
    return this.popup ? this.popup.getLngLat() : this._lngLat;
  }

  set closeButton(closeButton) {
    this.initialPopupOptions.closeButton = !!closeButton;
  }

  get closeButton() {
    return this.initialPopupOptions.closeButton;
  }

  set closeOnOutsideClick(closeOnOutsideClick) {
    this.initialPopupOptions.closeOnClick = !!closeOnOutsideClick;
  }

  get closeOnOutsideClick() {
    return this.initialPopupOptions.closeOnClick;
  }

  constructor(props) {
    super(props);
    this.initialPopupOptions = {
      closeButton: false,
      closeOnClick: false,
    };
    this._lngLat = [0, 0];
    this._map = null;
    this._marker = null;
    this.popup = null;
    this.popupSlotName = `popup-${makeid(6)}`;
    this.forwardPopupEvent = this.forwardPopupEvent.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.dispatchEvent(new CustomEvent('toujou-map-element-attached', { detail: this, bubbles: true, composed: true }));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.popup && this.popup.remove();
  }

  initPopup() {
    this.popup = new mapboxgl.Popup(this.initialPopupOptions);
    this.popup.setLngLat(this._lngLat);
    this.popup.on('open', this.forwardPopupEvent);
    this.popup.on('close', this.forwardPopupEvent);
    this.transferToPopupSlot();
    if (this.map) {
      this.popup.addTo(this.map);
    } else if (this.marker) {
      this.marker.setPopup(this.popup);
    } else {
      console.error('toujou-map-popup could not be added to a map or marker');
    }
  }

  forwardPopupEvent(event) {
    // eslint-disable-next-line default-case
    switch (event.type) {
      case 'open':
        this.dispatchEvent(new CustomEvent('toujou-map-popup-opened', { detail: this.popup, bubbles: true, composed: true }));
        break;
      case 'close':
        this.dispatchEvent(new CustomEvent('toujou-map-popup-closed', { detail: this.popup, bubbles: true, composed: true }));
        break;
    }
  }

  transferToPopupSlot() {
    const slot = document.createElement('slot');
    slot.name = this.popupSlotName;
    this.popup.setDOMContent(slot);
    this.slot = this.popupSlotName;
    // eslint-disable-next-line no-undef
    window.ShadyCSS && ShadyCSS.styleElement(this);
  }
}

customElements.define(ToujouMapPopup.is, ToujouMapPopup);
