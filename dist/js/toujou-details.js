import{i as t,s as e,y as o}from"./lit-element-7f3592a7.js";import{e as s}from"./custom-element-ff9a146d.js";import{e as a}from"./property-67fa6154.js";import"./query-assigned-elements-66edff90.js";const i=t`
  :host {
    --toujou-details-border: var(--border-width-normal) solid var(--color-font-light);
    --toujou-details-border-top: var(--toujou-details-border);
    --toujou-details-border-bottom: var(--toujou-details-border);
    
    --toujou-details-summary-padding: var(--spacing-normal) var(--spacing-s);
    --toujou-details-summary-gap: 0;
    --toujou-details-summary-display: grid;
    --toujou-details-summary-grid-templte-columns: 1fr auto;
    --toujou-details-summary-grid-templte-areas: 
            "title chevron" 
            "subtitle chevron";

    --toujou-details-content-padding: var(--spacing-normal) var(--spacing-s);
    
    display: block;
    border-bottom: var(--toujou-details-border-bottom);
    border-top: var(--toujou-details-border-top);
  }
  
  .details__summary {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas: var(--toujou-details-summary-grid-templte-areas);
    grid-gap: var(--toujou-details-summary-gap);
    align-items: center;
    padding: var(--toujou-details-summary-padding);
  }
  
  :host(:focus) .details__summary {
    outline: var(--focus-outline-width) solid var(--focus-outline-color);
    outline-offset: var(--focus-outline-offset);
  }
  
  .details__summary::-webkit-details-marker {
    display: none;
  }
  
  .details__content {
    padding: var(--toujou-details-content-padding);
  }
  
  @media (hover: hover) {
    .details__summary:hover {
      --details-title-color: var(--details-title-active-color);
      --details-chevron-color: var(--details-chevron-active-color);
      
      cursor: pointer;
    }
  }
`;var r=Object.defineProperty,l=Object.getOwnPropertyDescriptor,d=(t,e,o,s)=>{for(var a,i=s>1?void 0:s?l(e,o):e,d=t.length-1;d>=0;d--)(a=t[d])&&(i=(s?a(e,o,i):a(i))||i);return s&&i&&r(e,o,i),i};let n=class extends e{constructor(){super(),this.accordionParentTag="toujou-details-accordion",this.isAccordionItem=!1,this.detailsEl=null,this.isOpen=!1}connectedCallback(){super.connectedCallback(),this.isAccordionItem=!!this.closest(this.accordionParentTag),this.isAccordionItem&&this.dispatchEvent(new CustomEvent("toujou-details-connected",{bubbles:!0,composed:!0,detail:{detailsEl:this}})),window.matchMedia("print").matches&&(this.isOpen=!0)}firstUpdated(){var t;this.detailsEl=this.shadowRoot.querySelector(".details"),this.isOpen=(null==(t=this.detailsEl)?void 0:t.hasAttribute("open"))||!1}render(){return o`
            <details class="details" ?open="${this.isOpen}" @toggle="${this._handleDetailsChange}">
                <summary class="details__summary">
                    <slot name="summary"></slot>
                    <slot name="chevron"></slot>
                </summary>
                <section class="details__content">
                    <slot name="content"></slot>
                </section>
            </details>
        `}_handleDetailsChange(t){const e=t.target;this.isOpen=e.hasAttribute("open")||!1,this.isAccordionItem&&this.dispatchEvent(new CustomEvent("toujou-details-toggle",{bubbles:!0,composed:!0,detail:{detailsEl:this,state:this.isOpen}}))}};n.styles=[i],d([a({type:Boolean})],n.prototype,"isAccordionItem",2),d([a({type:HTMLDetailsElement})],n.prototype,"detailsEl",2),d([a({type:Boolean,reflect:!0,attribute:"is-open"})],n.prototype,"isOpen",2),n=d([s("toujou-details")],n);
//# sourceMappingURL=toujou-details.js.map
