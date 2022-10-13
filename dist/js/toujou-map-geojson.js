import{a as s}from"./lit-element-f92abbea.js";class e extends s{static get is(){return"toujou-map-geojson"}static get properties(){return{sourceId:{type:String,attribute:"source-id"},sourceData:{type:Object,attribute:"source-data"},sourceUrl:{type:String,attribute:"source-url"},maxZoom:{type:Number,attribute:"max-zoom"},buffer:{type:Number},tolerance:{type:Number},cluster:{type:Boolean},clusterRadius:{type:Number,attribute:"cluster-radius"},clusterMaxZoom:{type:Number,attribute:"cluster-max-zoom"}}}set map(t){t!==this._map&&(this._map&&this.removeSource(),this._map=t,t&&(this.map.isStyleLoaded()?this.initSource():this.map.once("load",()=>this.initSource())))}get map(){return this._map}set sourceData(t){this.source&&this.source.setData(t),this.data=t}get sourceData(){return typeof this.data=="object"?this.data:null}set sourceUrl(t){this.source&&this.source.setData(t),this.data=t}get sourceUrl(){return typeof this.data=="string"?this.data:null}get clusterConf(){return this.cluster?{cluster:!0,clusterRadius:this.clusterRadius,clusterMaxZoom:this.clusterMaxZoom||this.maxZoom-1}:{}}constructor(t){super(t),this.maxZoom=18,this.buffer=128,this.tolerance=.375,this.clusterRadius=50,this.clusterMaxZoom=null,this._map=null,this.source=null}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent("toujou-map-element-attached",{detail:this,bubbles:!0,composed:!0}))}disconnectedCallback(){super.disconnectedCallback(),this.map&&this.removeSource()}initSource(){this.map.addSource(this.sourceId,{type:"geojson",data:this.data,maxzoom:this.maxZoom,buffer:this.buffer,tolerance:this.tolerance,...this.clusterConf}),this.source=this.map.getSource(this.sourceId)}removeSource(){this.map.getSource(this.sourceId)&&this.map.removeSource(this.sourceId)}}customElements.define(e.is,e);
//# sourceMappingURL=toujou-map-geojson.js.map