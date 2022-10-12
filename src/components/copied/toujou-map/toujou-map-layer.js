import { UpdatingElement } from 'lit';

class ToujouMapLayer extends UpdatingElement {
  static get is() { return 'toujou-map-layer'; }

  static get properties() {
    return {
      layerId: {
        type: String,
        attribute: 'layer-id',
      },
      source: {
        type: String,
      },
      sourceLayer: {
        type: String,
        attribute: 'source-layer',
      },
      type: {
        type: String,
      },
      minZoom: {
        type: Number,
        attribute: 'min-zoom',
      },
      maxZoom: {
        type: Number,
        attribute: 'max-zoom',
      },
      filter: {
        type: Array,
      },
      layout: {
        type: Object,
      },
      paint: {
        type: Object,
      },
    };
  }

  set map(map) {
    if (map !== this._map) {
      this._map && this.removeLayer();
      this._map = map;
      map && this.initLayer();
    }
  }

  get map() {
    return this._map;
  }

  get layerConf() {
    const conf = {
      id: this.layerId,
      source: this.source,
      // "source-layer": this.sourceLayer,
      type: this.type,
      minZoom: this.minZoom,
      maxZoom: this.maxZoom,
    };

    this.filter && this.filter.length > 0 && (conf.filter = this.filter);
    this.layout && (conf.layout = this.layout);
    this.paint && (conf.paint = this.paint);

    return conf;
  }

  constructor(props) {
    super(props);
    this.minZoom = 0;
    this.maxZoom = 24;
    this.filter = [];
    this.layout = {};
    this.paint = {};
    this._map = null;
    this.layer = null;
    this.initLayer = this.initLayer.bind(this);
    this.initWhenSourceIsAvailable = this.initWhenSourceIsAvailable.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.dispatchEvent(new CustomEvent('toujou-map-element-attached', { detail: this, bubbles: true, composed: true }));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.map && this.removeLayer();
  }

  // eslint-disable-next-line consistent-return
  initLayer() {
    if (!this.map.style) {
      return this.map.once('load', this.initLayer);
    }

    if (!this.map.getSource(this.source)) {
      this.map.on('sourcedata', this.initWhenSourceIsAvailable);
      // eslint-disable-next-line consistent-return
      return;
    }

    this.map.addLayer(this.layerConf);
    this.dispatchEvent(new CustomEvent('toujou-map-layer-added', { detail: this.layerId, bubbles: true, composed: true }));
    this.layer = this.map.getLayer(this.layerId);
  }

  initWhenSourceIsAvailable(event) {
    if (event.sourceId === this.source) {
      this.map.off('sourcedata', this.initWhenSourceIsAvailable);
      this.initLayer();
    }
  }

  removeLayer() {
    if (this.map.getLayer(this.layerId)) {
      this.map.removeLayer(this.layerId);
    }
  }
}

customElements.define(ToujouMapLayer.is, ToujouMapLayer);
