import{s as u}from"./lit-element-f92abbea.js";import{n as c}from"./custom-element-fb5c5745.js";import{e as r}from"./property-19bdaa8a.js";import"./query-assigned-elements-39dd8e72.js";var h=Object.defineProperty,p=Object.getOwnPropertyDescriptor,d=(e,o,s,i)=>{for(var t=i>1?void 0:i?p(o,s):o,l=e.length-1,a;l>=0;l--)(a=e[l])&&(t=(i?a(o,s,t):a(t))||t);return i&&t&&h(o,s,t),t};let n=class extends u{constructor(){super(),this.singleExpandMode=!1,this.toujouDetailsElements=[]}connectedCallback(){this.addEventListener("toujou-details-connected",this._handleDetailsConnected),this.addEventListener("toujou-details-toggle",this._handleDetailsToggle),this.dispatchEvent(new CustomEvent("toujou-details-accordion-connected",{bubbles:!0,composed:!0,detail:{accordionEl:this}}))}disconnectedCallback(){this.removeEventListener("toujou-details-connected",this._handleDetailsConnected),this.removeEventListener("toujou-details-toggle",this._handleDetailsToggle)}_handleDetailsConnected(e){this.toujouDetailsElements.push(e.detail.detailsEl)}_handleDetailsToggle(e){if(!this.singleExpandMode||!e.detail.state)return;const o=e.detail.detailsEl.id;this.toujouDetailsElements.forEach(s=>{s.id!==o&&(s.isOpen=!1)})}};d([r({type:Boolean,attribute:"single-expand-mode"})],n.prototype,"singleExpandMode",2);d([r({type:Array})],n.prototype,"toujouDetailsElements",2);n=d([c("toujou-details-accordion")],n);
//# sourceMappingURL=toujou-details-accordion.js.map