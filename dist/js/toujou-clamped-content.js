import{i as c,s as d,y as m}from"./lit-element-9d8fde0b.js";import{e as h}from"./custom-element-73470d87.js";import{e as v}from"./property-1027a1df.js";import"./query-assigned-elements-acf341e1.js";const b=c`
  :host {
    --toujou-clamped-content-number-of-lines: 3;
    --toujou-clamped-content-word-break: 'none';
    --toujou-clamped-content-button-visible-display: flex;
    --toujou-clamped-content-button-hidden-display: none;
    --toujou-clamped-content-button-slot-display: flex;
    --toujou-clamped-content-button-slot-justify-content: flex-end;
  }

  :host([is-open]) {
    --toujou-clamped-content-number-of-lines: 9999;
  }

  .clamped-content {
    display: -webkit-box;
    -webkit-line-clamp: var(--toujou-clamped-content-number-of-lines);
    -webkit-box-orient: vertical;
    word-break: var(--toujou-clamped-content-word-break);
    overflow: hidden;
    hyphens: auto;
  }

  :host slot[name="show-button"] {
    display: var(--toujou-clamped-content-button-visible-display);
  }

  :host([is-open]) slot[name="show-button"] {
    display: var(--toujou-clamped-content-button-hidden-display);
  }

  :host slot[name="hide-button"] {
    display: var(--toujou-clamped-content-button-hidden-display);
  }

  :host([is-open]) slot[name="hide-button"] {
    display: var(--toujou-clamped-content-button-visible-display);
  }

  .button-slot {
    margin-top: var(--spacing-normal);
    display: var(--toujou-clamped-content-button-slot-display);
    justify-content: var(--toujou-clamped-content-button-slot-justify-content);
  }
`;var f=Object.defineProperty,y=Object.getOwnPropertyDescriptor,r=(o,t,e,s)=>{for(var n=s>1?void 0:s?y(t,e):t,i=o.length-1,u;i>=0;i--)(u=o[i])&&(n=(s?u(t,e,n):u(n))||n);return s&&n&&f(t,e,n),n},j=(o,t,e)=>{if(!t.has(o))throw TypeError("Cannot "+e)},p=(o,t,e)=>(j(o,t,"read from private field"),e?e.call(o):t.get(o)),w=(o,t,e)=>{if(t.has(o))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(o):t.set(o,e)},a;let l=class extends d{constructor(){super(...arguments),this.isOpen=!1,w(this,a,()=>{this.isOpen=!this.isOpen})}render(){return m`
            <div class="clamped-content">
                <slot name="clamped-content"></slot>
            </div>
            <slot name="show-button" class="button-slot" @click="${p(this,a)}"></slot>
            <slot name="hide-button" class="button-slot" @click="${p(this,a)}"></slot>
        `}};a=new WeakMap;l.styles=[b];r([v({type:Boolean,attribute:"is-open",reflect:!0})],l.prototype,"isOpen",2);l=r([h("toujou-clamped-content")],l);
//# sourceMappingURL=toujou-clamped-content.js.map
