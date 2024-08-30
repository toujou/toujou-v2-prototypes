import{s as e}from"./lit-element-7f3592a7.js";import{e as t}from"./custom-element-ff9a146d.js";import{e as o}from"./property-67fa6154.js";import"./query-assigned-elements-66edff90.js";var s=Object.defineProperty,i=Object.getOwnPropertyDescriptor,n=(e,t,o,n)=>{for(var l,a=n>1?void 0:n?i(t,o):t,d=e.length-1;d>=0;d--)(l=e[d])&&(a=(n?l(t,o,a):l(a))||a);return n&&a&&s(t,o,a),a};let l=class extends e{constructor(){super(),this.singleExpandMode=!1,this.toujouDetailsElements=[]}connectedCallback(){this.addEventListener("toujou-details-connected",this._handleDetailsConnected),this.addEventListener("toujou-details-toggle",this._handleDetailsToggle),this.dispatchEvent(new CustomEvent("toujou-details-accordion-connected",{bubbles:!0,composed:!0,detail:{accordionEl:this}}))}disconnectedCallback(){this.removeEventListener("toujou-details-connected",this._handleDetailsConnected),this.removeEventListener("toujou-details-toggle",this._handleDetailsToggle)}_handleDetailsConnected(e){this.toujouDetailsElements.push(e.detail.detailsEl)}_handleDetailsToggle(e){if(!this.singleExpandMode||window.matchMedia("print").matches||!e.detail.state)return;const t=e.detail.detailsEl.id;this.toujouDetailsElements.forEach((e=>{e.id!==t&&(e.isOpen=!1)}))}};n([o({type:Boolean,attribute:"single-expand-mode"})],l.prototype,"singleExpandMode",2),n([o({type:Array})],l.prototype,"toujouDetailsElements",2),l=n([t("toujou-details-accordion")],l);
//# sourceMappingURL=toujou-details-accordion.js.map
