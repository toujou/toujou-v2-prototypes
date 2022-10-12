import { LitElement, html } from 'lit';
import mapboxgl from 'mapbox-gl';
import MapboxLanguage from '@mapbox/mapbox-gl-language';
import { MapboxGlFakeStylesStyles } from "./mapbox-gl-fake-styles.styles.js";
import { ToujouMapStyles } from "./toujou-map.styles.js";

// eslint-disable-next-line import/prefer-default-export
export class ToujouMap extends LitElement {
  static get is() { return 'toujou-map'; }

  static styles = [ MapboxGlFakeStylesStyles, ToujouMapStyles ];

  static get styles() { return styles; }

  render() {
    return html`
      <div id="map"></div>
      <slot @toujou-map-element-attached="${this.updateMapElements}" @slotchange="${this.updateMapElements}"></slot>
    `;
  }

  static get properties() {
    return {
      mapboxStyles: {
        type: String,
      },

      interactive: {
        type: Boolean,
      },

      fullscreenControl: {
        type: Boolean,
        attribute: 'fullscreen-control',
      },

      reducedMotion: {
        type: Boolean,
        attribute: 'reduced-motion',
      },

      /** Does nothing */
      noNavigation: {
        type: Boolean,
        attribute: 'no-navigation',
      },

      accessToken: {
        type: String,
        attribute: 'access-token',
      },

      center: {
        type: Array,
      },

      zoom: {
        type: Number,
      },

      maxZoom: {
        type: Number,
      },

      fitBoundsMaxZoom: {
        type: Number,
        attribute: 'fit-bounds-max-zoom',
      },

      minZoom: {
        type: Number,
      },

      pitch: {
        type: Number,
      },

      bearing: {
        type: Number,
      },

      mapStyle: {
        type: String,
        attribute: 'map-style',
      },

      loaded: {
        type: Boolean,
      },

      zoomOnScroll: {
        type: Boolean,
        attribute: 'zoom-on-scroll',
      },

      initialBounds: {
        type: Array,
        attribute: 'initial-bounds',
      },

      mapPadding: {
        type: Object,
        attribute: 'map-padding',
      },
    };
  }

  constructor(props) {
    super(props);
    this.accessToken = null; // Mapbox access token
    this.initialMapOptions = {
      style: 'mapbox://styles/mapbox/light-v10',
      minZoom: 0,
      maxZoom: 20,
      pitch: 0,
      bearing: 0,
      attributionControl: false,
    };
    this.initialControls = {
      noNavigation: false,
      interactive: this.hasAttribute('interactive'),
    };
    this.loaded = window.mapboxgl && true;
    this.targets = [];
    this.markers = [];
    this.zoomOnScroll = false;
    this.mapPadding = {
      top: 16, bottom: 16, left: 16, right: 16,
    };
    this.fullscreenControl = false;
    this.reducedMotion = false;
  }

  set mapStyle(mapStyle) {
    // eslint-disable-next-line no-unused-expressions
    this.map && this.map.setStyle(mapStyle);
    this.initialMapOptions.style = mapStyle;
  }

  get mapStyle() {
    return this.map ? this.map.getStyle() : this.initialMapOptions.style;
  }

  set center(lngLatLike) {
    // eslint-disable-next-line no-unused-expressions
    this.map && this.map.setCenter(lngLatLike);
    this.initialMapOptions.center = lngLatLike;
  }

  get center() {
    return this.map ? this.map.getCenter() : this.initialMapOptions.center;
  }

  set zoom(zoom) {
    this.map && this.map.setZoom(zoom);
    this.initialMapOptions.zoom = zoom;
  }

  get zoom() {
    return this.map ? this.map.getZoom() : this.initialMapOptions.zoom;
  }

  set pitch(pitch) {
    // eslint-disable-next-line no-unused-expressions
    this.map && this.map.setPitch(pitch);
    this.initialMapOptions.pitch = pitch;
  }

  get pitch() {
    return this.map ? this.map.getPitch() : this.initialMapOptions.pitch;
  }

  set bearing(bearing) {
    // eslint-disable-next-line no-unused-expressions
    this.map && this.map.setBearing(bearing);
    this.initialMapOptions.bearing = bearing;
  }

  get bearing() {
    return this.map ? this.map.getBearing() : this.initialMapOptions.bearing;
  }

  // eslint-disable-next-line consistent-return
  set noNavigation(noNavigation) {
    if (!this.map) {
      // eslint-disable-next-line no-return-assign
      return this.initialControls = { ...this.initialControls, noNavigation: !!noNavigation };
    }
    if (!noNavigation) {
      // eslint-disable-next-line no-unused-expressions
      !this._navigationControl && (this._navigationControl = new mapboxgl.NavigationControl());
      this.map.addControl(this._navigationControl);
    } else if (noNavigation && this._navigationControl) {
      this.map.removeControl(this._navigationControl);
    }
  }

  get noNavigation() {
    if (!this.map) {
      return this.initialControls.noNavigation;
    }
    return !!this._navigationControl;
  }

  set interactive(interactive) {
    this.initialMapOptions.interactive = !!interactive;
  }

  get interactive() {
    return this.initialMapOptions.interactive;
  }

  set maxZoom(maxZoom) {
    // eslint-disable-next-line no-unused-expressions
    this.map && this.map.setMaxZoom(maxZoom);
    this.initialMapOptions.maxZoom = maxZoom;
  }

  get maxZoom() {
    return this.map ? this.map.getMaxZoom() : this.initialMapOptions.maxZoom;
  }

  set minZoom(minZoom) {
    // eslint-disable-next-line no-unused-expressions
    this.map && this.map.setMinZoom(minZoom);
    this.initialMapOptions.minZoom = minZoom;
  }

  get minZoom() {
    return this.map ? this.map.getMinZoom() : this.initialMapOptions.minZoom;
  }

  get stylesCompatibleWithMapboxLanguage() {
    return this.initialMapOptions
      && this.initialMapOptions.style
      && this.initialMapOptions.style.startsWith('mapbox://');
  }

  connectedCallback() {
    super.connectedCallback();
    window.mapboxgl = mapboxgl;
    this.loaded = true;
  }

  updated(changedProperties) {
    if (changedProperties.has('loaded') && this.loaded && !this.map) {
      this.createMap();
    }
  }

  createMap() {
    mapboxgl.accessToken = this.accessToken;
    this.map = new mapboxgl.Map({
      container: this.shadowRoot.querySelector('#map'),
      ...this.initialMapOptions,
    });
    if (this.fullscreenControl) {
      this.map.addControl(new mapboxgl.FullscreenControl());
    }

    this.map.addControl(new mapboxgl.AttributionControl({
      compact: true,
    }));

    Object.keys(this.initialControls).forEach((controlName) => {
      this[controlName] = this.initialControls[controlName];
    });

    this.zoomOnScroll ? this.map.scrollZoom.enable() : this.map.scrollZoom.disable();
    this.map.setPadding(this.mapPadding);
    this.initialBounds && this.map.fitBounds(this.initialBounds, {
      maxZoom: this.fitBoundsMaxZoom || 22,
      animate: !this.reducedMotion,
    });

    if (this.stylesCompatibleWithMapboxLanguage) {
      this.map.addControl(new MapboxLanguage({
        defaultLanguage: document.documentElement.lang.slice(0, 2) || 'de',
      }));
    }

    this.map.on('load', (e) => { this.dispatchEvent(new CustomEvent('toujou-map-loaded', { detail: e })); });
    this.map.on('error', (e) => {
      this.dispatchEvent(new CustomEvent('toujou-map-error', { detail: e }));
      console.error(e);
    });
    // todo: find better way to resize the map when page loads
    this.map.once('load', () => this.map.resize());

    this.map.on('sourcedata', () => {
      this.dispatchEvent(new CustomEvent('toujou-map-source-data-loaded', { bubbles: true, composed: true }));
    });

    this.updateMapElements();
    this.dispatchEvent(new CustomEvent('toujou-map-ready', { bubbles: true, composed: true, detail: this.map }));
  }

  updateMapElements() {
    const nodes = this.shadowRoot.querySelector('slot').assignedNodes({ flatten: true });
    const mapElements = nodes.filter((n) => n.nodeName.slice(0, 10) === 'TOUJOU-MAP');
    this.markers = mapElements.filter((n) => n.nodeName === 'TOUJOU-MAP-MARKER');

    if (this.map) {
      // eslint-disable-next-line no-param-reassign
      mapElements.forEach((n) => { n.map = this.map; });
    }
  }
}

customElements.define(ToujouMap.is, ToujouMap);
