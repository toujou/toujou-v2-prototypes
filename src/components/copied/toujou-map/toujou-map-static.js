import { LitElement, html, css } from 'lit';

/**
 * Show a static map (as an image).
 * The map is configurable with zoom, height, width, pitch and bearing.
 *
 * @element toujou-map-static
 */
// eslint-disable-next-line import/prefer-default-export
export class ToujouMapStatic extends LitElement {
  static get is() { return 'toujou-map-static'; }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        overflow: hidden;
        position: relative;
      }
      #img {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
      }
    `;
  }

  render() {
    return html`
      <img id="img" src="${this.mapSource}" alt="Map Image">
      <slot @toujou-map-element-attached="${this.updateMapElements}" @slotchange="${this.updateMapElements}"></slot>
    `;
  }

  static get properties() {
    return {

      accessToken: {
        type: String,
        attribute: 'access-token',
      },

      /**
       * Define which style should be used for the map.
       * It must be a link to a valid map style.
       * Default is 'mapbox://styles/mapbox/light-v10'
       *
       * @String
       */
      mapStyle: {
        type: String,
        attribute: 'map-style',
      },

      /* The username of the account to which the style belongs. */
      username: {
        type: String,
      },

      /* The ID of the style from which to create a static map. */
      styleId: {
        type: String,
        attribute: 'style-id',
      },

      // eslint-disable-next-line max-len
      /* One or more comma-separated features that can be applied on top of the map at request time. */
      overlay: {
        type: String,
      },

      /**
       * Geocoordinates [longitude, latitude] for the center point of the static map.
       * Default is '[0, 0].
       *
       * @Array
       */
      center: {
        type: Array,
      },

      /**
       * Zoom level for the static map.
       * It should be a number between 0 and 20.
       * Fractional zoom level will be rounded to two decimal places.
       * Default value is '8'.
       *
       * @Number
       */
      zoom: {
        type: Number,
      },

      /**
       * Pitch tilts the map, producing a perspectiv effect.
       * It must be a number between 0 and 60, measured in degrees.
       * Default is 0 (looking straight down at the map).
       * Default value is '0'.
       *
       * @Number
       */
      pitch: {
        type: Number,
      },

      /**
       * Bearing rotates the map around its center.
       * Must be a number between 0 and 360, interpreted as decimal degrees.
       * '90' rotates the map 90° clockwise, while '180' flips the map.
       * Default is '0'.
       *
       * @Number
       */
      bearing: {
        type: Number,
      },

      /**
       * If 'auto' is added, the viewport will fir the bounds of the overlay.
       * If used, 'auto' replaces center, zoom, bearing and pitch.
       * Default value is 'false'
       *
       * @Boolean
       */
      auto: {
        type: Boolean,
      },

      /**
       * Width of the image.
       * Must be a number between 1 and 1280 (pixels).
       * Default value is '300' (px)
       *
       * @Number
       */
      width: {
        type: Number,
      },

      /**
       * Height of the image.
       * It must be a number between 1 and 1280 (pixels).
       * Default value is '200' (px)
       *
       * @Number
       */
      height: {
        type: Number,
      },

      /* Internal reference to connected markers */
      markers: {
        type: Array,
      },

      // eslint-disable-next-line max-len
      /* The image url shouldn't be set before the slot isn't rendered yet and no potential overlays are captured. */
      slotRendered: {
        type: Boolean,
      },
    };
  }

  get mapStyleParts() {
    return this.mapStyle.replace(/^mapbox:\/\/styles\//, '');
  }

  get renderedOverlay() {
    const markers = this.markers.map(ToujouMapStatic.renderMarker);
    this.overlay && markers.push(this.overlay);
    return markers.join(',');
  }

  get mapSource() {
    if (!this.slotRendered) {
      return '';
    }

    const pathParts = [
      'https://api.mapbox.com',
      'styles',
      'v1',
      this.mapStyleParts,
      'static',
    ];

    const { renderedOverlay } = this;
    renderedOverlay && pathParts.push(renderedOverlay);

    this.auto ? pathParts.push('auto') : pathParts.push(this.center.concat([this.zoom, this.bearing, this.pitch]).join(','));

    pathParts.push(`${this.width}x${this.height}`);

    return `${pathParts.join('/')}?access_token=${this.accessToken}`;
  }

  set width(width) {
    // eslint-disable-next-line no-restricted-globals
    this.style.width = isNaN(width) ? width : `${width}px`;
  }

  get width() {
    return this.style.width.replace(/px$/, '');
  }

  set height(height) {
    // eslint-disable-next-line no-restricted-globals
    this.style.height = isNaN(height) ? height : `${height}px`;
  }

  get height() {
    return this.style.height.replace(/px$/, '');
  }

  constructor(props) {
    super(props);
    this.accessToken = 'pk.eyJ1IjoiZml0cmVpc2VuIiwiYSI6ImNqdHppeXlkMDBiazk0M3QxZDFpNGNqYmgifQ.f6VsL4UgB13NPCXv9-vJGQ';
    this.mapStyle = 'mapbox://styles/mapbox/light-v10';
    this.center = [0, 0];
    this.overlay = '';
    this.zoom = 8;
    this.pitch = 0;
    this.bearing = 0;
    this.auto = false;
    this.width = 300;
    this.height = 200;
    this.markers = [];
    this.slotRendered = false;
  }

  firstUpdated() {
    this.slotRendered = !!this.shadowRoot.querySelector('slot');
  }

  updateMapElements() {
    const nodes = this.shadowRoot.querySelector('slot').assignedNodes({ flatten: true });
    const mapElements = nodes.filter((n) => n.nodeName.slice(0, 10) === 'TOUJOU-MAP');
    this.markers = mapElements.filter((n) => n.nodeName === 'TOUJOU-MAP-MARKER');
  }

  static renderMarker(marker) {
    const markerProperties = {
      name: 'pin-l',
      label: '',
      color: '77b800',
      coordinates: [0, 0],
    };

    const markerConstructor = customElements.get(marker.nodeName);
    if (markerConstructor) {
      markerProperties.color = marker.color || markerProperties.color;
      markerProperties.coordinates = marker.coordinates || markerProperties.coordinates;
    } else {
      markerProperties.color = (marker.hasAttribute('color') ? marker.getAttribute('color') : '') || markerProperties.color;
      markerProperties.coordinates = (marker.hasAttribute('coordinates') ? JSON.parse(marker.getAttribute('coordinates')) : null) || markerProperties.coordinates;
    }

    return `${markerProperties.name}${markerProperties.label ? `-${markerProperties.label}` : ''}${markerProperties.color ? `+${markerProperties.color.replace(/^#/, '')}` : ''}(${markerProperties.coordinates.join(',')})`;
  }
}

customElements.define(ToujouMapStatic.is, ToujouMapStatic);
