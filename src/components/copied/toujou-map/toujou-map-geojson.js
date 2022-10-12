import { UpdatingElement } from 'lit';

// eslint-disable-next-line no-unused-vars
const mapStyleLoadedMap = new WeakMap();

/**
 * Element to load geojson data into the map.
 *
 * @element toujou-map-geojson
 */
class ToujouMapGeojson extends UpdatingElement {
  static get is() { return 'toujou-map-geojson'; }

  static get properties() {
    return {
      sourceId: {
        type: String,
        attribute: 'source-id',
      },

      sourceData: {
        type: Object,
        attribute: 'source-data',
      },

      /**
       * Address of the .geojson file with the data.
       *
       * @String
       */
      sourceUrl: {
        type: String,
        attribute: 'source-url',
      },

      /**
       * Define the maximal zoom at which the data in the geojson will be visible.
       * It must be a number between 0 and 20.
       * Default is '18'
       *
       * @Number
       */
      maxZoom: {
        type: Number,
        attribute: 'max-zoom',
      },

      buffer: {
        type: Number,
      },

      tolerance: {
        type: Number,
      },

      /**
       * Define if the map can group features into clusters or not.
       * Default value is 'true'
       *
       * @Boolean
       */
      cluster: {
        type: Boolean,
      },

      /**
       * Define the size of the clusters.
       * Default is '50'
       *
       * @Number
       */
      clusterRadius: {
        type: Number,
        attribute: 'cluster-radius',
      },

      /**
       * Maximal zoom at which the clusters will be visible.
       * Must be a number between 0 and 20.
       * Default is the map's own 'maxzoom - 1'
       * @Number
       */
      clusterMaxZoom: {
        type: Number,
        attribute: 'cluster-max-zoom',
      },
    };
  }

  set map(map) {
    if (map !== this._map) {
      this._map && this.removeSource();
      this._map = map;
      if (map) {
        if (!this.map.isStyleLoaded()) {
          this.map.once('load', () => this.initSource());
        } else {
          this.initSource();
        }
      }
    }
  }

  get map() {
    return this._map;
  }

  set sourceData(sourceData) {
    this.source && this.source.setData(sourceData);
    this.data = sourceData;
  }

  get sourceData() {
    return typeof this.data === 'object' ? this.data : null;
  }

  set sourceUrl(sourceUrl) {
    // eslint-disable-next-line no-unused-expressions
    this.source && this.source.setData(sourceUrl);
    this.data = sourceUrl;
  }

  get sourceUrl() {
    return typeof this.data === 'string' ? this.data : null;
  }

  get clusterConf() {
    if (this.cluster) {
      return {
        cluster: true,
        clusterRadius: this.clusterRadius,
        clusterMaxZoom: this.clusterMaxZoom || this.maxZoom - 1,
      };
    }
    return {};
  }

  constructor(props) {
    super(props);
    this.maxZoom = 18;
    this.buffer = 128;
    this.tolerance = 0.375;
    this.clusterRadius = 50;
    this.clusterMaxZoom = null;
    this._map = null;
    this.source = null;
  }

  connectedCallback() {
    super.connectedCallback();
    this.dispatchEvent(new CustomEvent('toujou-map-element-attached', { detail: this, bubbles: true, composed: true }));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.map && this.removeSource();
  }

  /**
   * Initialize the geojson's source
   * the "this.data" property needs to be geojson data
   */
  // eslint-disable-next-line consistent-return
  initSource() {
    this.map.addSource(
      this.sourceId,
      {
        type: 'geojson',
        data: this.data,
        maxzoom: this.maxZoom,
        buffer: this.buffer,
        tolerance: this.tolerance,
        ...this.clusterConf,
      },
    );
    this.source = this.map.getSource(this.sourceId);
  }

  removeSource() {
    if (this.map.getSource(this.sourceId)) {
      this.map.removeSource(this.sourceId);
    }
  }
}

customElements.define(ToujouMapGeojson.is, ToujouMapGeojson);
