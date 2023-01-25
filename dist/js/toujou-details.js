import{i as u,s as c,y as m}from"./lit-element-cb72fc65.js";import{e as p}from"./custom-element-73470d87.js";import{e as n}from"./property-1027a1df.js";import"./query-assigned-elements-acf341e1.js";const h=u`
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
`;var v=Object.defineProperty,g=Object.getOwnPropertyDescriptor,i=(t,o,r,a)=>{for(var e=a>1?void 0:a?g(o,r):o,l=t.length-1,d;l>=0;l--)(d=t[l])&&(e=(a?d(o,r,e):d(e))||e);return a&&e&&v(o,r,e),e};let s=class extends c{constructor(){super(),this.accordionParentTag="toujou-details-accordion",this.isAccordionItem=!1,this.detailsEl=null,this.isOpen=!1}connectedCallback(){super.connectedCallback(),this.isAccordionItem=!!this.closest(this.accordionParentTag),this.isAccordionItem&&this.dispatchEvent(new CustomEvent("toujou-details-connected",{bubbles:!0,composed:!0,detail:{detailsEl:this}}))}firstUpdated(){var t;this.detailsEl=this.shadowRoot.querySelector(".details"),this.isOpen=((t=this.detailsEl)==null?void 0:t.hasAttribute("open"))||!1}render(){return m`
            <details class="details" ?open="${this.isOpen}" @toggle="${this._handleDetailsChange}">
                <summary class="details__summary">
                    <slot name="summary"></slot>
                    <slot name="chevron"></slot>
                </summary>
                <section class="details__content">
                    <slot name="content"></slot>
                </section>
            </details>
        `}_handleDetailsChange(t){const o=t.target;this.isOpen=o.hasAttribute("open")||!1,this.isAccordionItem&&this.dispatchEvent(new CustomEvent("toujou-details-toggle",{bubbles:!0,composed:!0,detail:{detailsEl:this,state:this.isOpen}}))}};s.styles=[h];i([n({type:Boolean})],s.prototype,"isAccordionItem",2);i([n({type:HTMLDetailsElement})],s.prototype,"detailsEl",2);i([n({type:Boolean,reflect:!0,attribute:"is-open"})],s.prototype,"isOpen",2);s=i([p("toujou-details")],s);
//# sourceMappingURL=toujou-details.js.map
