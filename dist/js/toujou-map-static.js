import{s as o,r as i,$ as a}from"./lit-element-8ef55b20.js";class r extends o{static get is(){return"toujou-map-static"}static get styles(){return i`
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
    `}render(){return a`
      <img id="img" src="${this.mapSource}" alt="Map Image">
      <slot @toujou-map-element-attached="${this.updateMapElements}" @slotchange="${this.updateMapElements}"></slot>
    `}static get properties(){return{accessToken:{type:String,attribute:"access-token"},mapStyle:{type:String,attribute:"map-style"},username:{type:String},styleId:{type:String,attribute:"style-id"},overlay:{type:String},center:{type:Array},zoom:{type:Number},pitch:{type:Number},bearing:{type:Number},auto:{type:Boolean},width:{type:Number},height:{type:Number},markers:{type:Array},slotRendered:{type:Boolean}}}get mapStyleParts(){return this.mapStyle.replace(/^mapbox:\/\/styles\//,"")}get renderedOverlay(){const t=this.markers.map(r.renderMarker);return this.overlay&&t.push(this.overlay),t.join(",")}get mapSource(){if(!this.slotRendered)return"";const t=["https://api.mapbox.com","styles","v1",this.mapStyleParts,"static"],{renderedOverlay:e}=this;return e&&t.push(e),this.auto?t.push("auto"):t.push(this.center.concat([this.zoom,this.bearing,this.pitch]).join(",")),t.push(`${this.width}x${this.height}`),`${t.join("/")}?access_token=${this.accessToken}`}set width(t){this.style.width=isNaN(t)?t:`${t}px`}get width(){return this.style.width.replace(/px$/,"")}set height(t){this.style.height=isNaN(t)?t:`${t}px`}get height(){return this.style.height.replace(/px$/,"")}constructor(t){super(t),this.accessToken="pk.eyJ1IjoiZml0cmVpc2VuIiwiYSI6ImNqdHppeXlkMDBiazk0M3QxZDFpNGNqYmgifQ.f6VsL4UgB13NPCXv9-vJGQ",this.mapStyle="mapbox://styles/mapbox/light-v10",this.center=[0,0],this.overlay="",this.zoom=8,this.pitch=0,this.bearing=0,this.auto=!1,this.width=300,this.height=200,this.markers=[],this.slotRendered=!1}firstUpdated(){this.slotRendered=!!this.shadowRoot.querySelector("slot")}updateMapElements(){const e=this.shadowRoot.querySelector("slot").assignedNodes({flatten:!0}).filter(s=>s.nodeName.slice(0,10)==="TOUJOU-MAP");this.markers=e.filter(s=>s.nodeName==="TOUJOU-MAP-MARKER")}static renderMarker(t){const e={name:"pin-l",label:"",color:"77b800",coordinates:[0,0]};return customElements.get(t.nodeName)?(e.color=t.color||e.color,e.coordinates=t.coordinates||e.coordinates):(e.color=(t.hasAttribute("color")?t.getAttribute("color"):"")||e.color,e.coordinates=(t.hasAttribute("coordinates")?JSON.parse(t.getAttribute("coordinates")):null)||e.coordinates),`${e.name}${e.color?`+${e.color.replace(/^#/,"")}`:""}(${e.coordinates.join(",")})`}}customElements.define(r.is,r);
//# sourceMappingURL=toujou-map-static.js.map
