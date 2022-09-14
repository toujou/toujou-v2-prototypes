import{r as u,s as m,$ as c}from"./lit-element-4f5b1f7c.js";import{n as p}from"./custom-element-fb5c5745.js";import{e as d}from"./property-19bdaa8a.js";import"./query-assigned-elements-39dd8e72.js";const h=u`
  :host {
    --toujou-details-border: var(--border-width-normal) solid var(--color-font-light);
    
    --toujou-details-summary-padding: var(--spacing-normal);
    --toujou-details-summary-gap: 0;
    --toujou-details-summary-display: grid;
    --toujou-details-summary-grid-templte-columns: 1fr auto;
    --toujou-details-summary-grid-templte-areas: 
            "title chevron" 
            "subtitle chevron";

    --toujou-details-content-padding: 0 var(--spacing-normal) var(--spacing-m);
    
    display: block;
    border-bottom: var(--toujou-details-border);
  }

  :host(:first-child) {
    border-top: var(--toujou-details-border);
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
      cursor: pointer;
    }
  }
`;var g=Object.defineProperty,v=Object.getOwnPropertyDescriptor,i=(t,s,r,a)=>{for(var e=a>1?void 0:a?v(s,r):s,l=t.length-1,n;l>=0;l--)(n=t[l])&&(e=(a?n(s,r,e):n(e))||e);return a&&e&&g(s,r,e),e};let o=class extends m{constructor(){super(),this.accordionParentTag="toujou-details-accordion",this.isAccordionItem=!1,this.detailsEl=null,this.isOpen=!1}connectedCallback(){super.connectedCallback(),this.isAccordionItem=!!this.closest(this.accordionParentTag),this.isAccordionItem&&this.dispatchEvent(new CustomEvent("toujou-details-connected",{bubbles:!0,composed:!0,detail:{detailsEl:this}}))}firstUpdated(){var t;this.detailsEl=this.shadowRoot.querySelector(".details"),this.isOpen=((t=this.detailsEl)==null?void 0:t.hasAttribute("open"))||!1}render(){return c`
            <details class="details" ?open="${this.isOpen}" @toggle="${this._handleDetailsChange}">
                <summary class="details__summary">
                    <slot name="summary"></slot>
                    <slot name="chevron"></slot>
                </summary>
                <section class="details__content">
                    <slot name="content"></slot>
                </section>
            </details>
        `}_handleDetailsChange(t){const s=t.target;this.isOpen=s.hasAttribute("open")||!1,this.isAccordionItem&&this.dispatchEvent(new CustomEvent("toujou-details-toggle",{bubbles:!0,composed:!0,detail:{detailsEl:this,state:this.isOpen}}))}};o.styles=[h];i([d({type:Boolean})],o.prototype,"isAccordionItem",2);i([d({type:HTMLDetailsElement})],o.prototype,"detailsEl",2);i([d({type:Boolean,reflect:!0,attribute:"is-open"})],o.prototype,"isOpen",2);o=i([p("toujou-details")],o);
//# sourceMappingURL=toujou-details.js.map
