var o=Object.defineProperty;var i=(n,t,e)=>t in n?o(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var c=(n,t,e)=>(i(n,typeof t!="symbol"?t+"":t,e),e);import{i as h,s as l,y as u}from"./lit-element-cb72fc65.js";const a=h`
  :host {
    display: var(--toujou-consent-display, block);
  }
`;class s extends l{static get is(){return"toujou-consent"}render(){return u`
      <slot id="content"></slot>
    `}static get styles(){return styles}static get properties(){return{consentState:{type:Boolean},listenTo:{type:String},listenOn:{type:String}}}set consentState(t){this.consentInputType==="checkbox"&&(this.querySelector(".consent__checkbox").checked=t)}set listenTo(t){t.split(/\s+/).forEach(e=>{this.addEventListener(e,this._handleEvent)})}constructor(t){super(t),this._handleEvent=this._handleEvent.bind(this),this.listenOn="*",this._consentType=this.getAttribute("consenttype"),this._consentInputType=this._getConsentInputType(),this.consentState=null}connectedCallback(){super.connectedCallback()}_handleEvent(t){t.type==="click"?this._dispatchClickEvent():t.type==="change"&&this._dispatchChangeEvent()}firstUpdated(){this._dispatchReadyEvent()}_dispatchChangeEvent(){const t=new CustomEvent("toujou-consent-checkbox-changed",{bubbles:!0,composed:!0,detail:{consentElement:this}});this.dispatchEvent(t)}_dispatchClickEvent(){const t=new CustomEvent("toujou-consent-button-clicked",{bubbles:!0,composed:!0});this.dispatchEvent(t)}_dispatchReadyEvent(){const t=new CustomEvent("toujou-consent-connected",{bubbles:!0,composed:!0,detail:{consentType:this._consentType}});this.dispatchEvent(t)}_getConsentInputType(){const t=this.querySelectorAll(".consent__checkbox"),e=this.querySelectorAll(".consent__button");t.length>0?this.consentInputType="checkbox":e.length>0&&(this.consentInputType="button")}}c(s,"styles",[a]);customElements.define(s.is,s);
//# sourceMappingURL=toujou-consent.js.map
