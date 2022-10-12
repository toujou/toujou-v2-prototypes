import { LitElement, html, css } from 'lit';
import mapboxgl from 'mapbox-gl';

/**
 * Add a marker to a map, to pinpoint a location.
 * We can define the color, coordinates and offset of the marker
 *
 * @element toujou-map-marker
 */
class ToujouMapMarker extends LitElement {
  static get is() { return 'toujou-map-marker'; }

  static get styles() {
    return css`
        :host {
          display: block;
          padding: 0;
        }
    `;
  }

  render() {
    return html`<slot></slot>`;
  }

  static get properties() {
    return {

      /**
       * Coordinates [longitude, latitude] where the marker should be placed.
       * It must be an array with valid geocoordinate values, ex: '[76.920490,10.630830]'
       *
       * @Array
       */
      coordinates: {
        type: Array,
      },

      /**
       * Define the marker's color.
       * It should be a valid css color value, ex: '#ff0000'.
       * Default is '#77b800'
       *
       * @String
       */
      color: {
        type: String,
      },

      /**
       * Define an offset that will move the marker in relation to its coordinates.
       * It must be an array with distance values, ex '[240, 100]'.
       * Default if '[0, 0]' (no offset).
       *
       * @Array
       */
      offset: {
        type: Array,
      },
    };
  }

  set map(map) {
    if (map !== this._map) {
      this._map = map;
      map ? this.initMarker(map) : (this.marker && this.marker.remove());
    }
  }

  get map() {
    return this._map;
  }

  set color(color) {
    this.initialMarkerOptions.color = color;
  }

  get color() {
    return this.initialMarkerOptions.color;
  }

  set coordinates(lngLatLike) {
    this.marker && this.marker.setLngLat(lngLatLike);
    this._lngLat = lngLatLike;
  }

  get coordinates() {
    return this.marker ? this.marker.getLngLat() : this._lngLat;
  }

  set element(element) {
    this.initialMarkerOptions.element = element;
  }

  get element() {
    return this.marker ? this.marker.getElement() : this.initialMarkerOptions.element;
  }

  constructor(props) {
    super(props);
    this.initialMarkerOptions = {
      element: null,
      offset: [0, 0],
      color: '#77b800',
    };
    this._lngLat = [0, 0];
    this._map = null;
    this.marker = null;
  }

  connectedCallback() {
    super.connectedCallback();
    this.dispatchEvent(new CustomEvent('toujou-map-element-attached', { detail: this, bubbles: true, composed: true }));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.marker && this.marker.remove();
  }

  initMarker(map) {
    this.marker = new mapboxgl.Marker(this.initialMarkerOptions).setLngLat(this._lngLat);
    !this._element && (this.marker.getElement().style.position = 'absolute');
    this.marker.addTo(map);
  }
}

customElements.define(ToujouMapMarker.is, ToujouMapMarker);
