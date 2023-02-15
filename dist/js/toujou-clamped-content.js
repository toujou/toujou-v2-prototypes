import{i as v,s as f,y}from"./lit-element-9d8fde0b.js";import{e as j}from"./custom-element-73470d87.js";import{e as m}from"./property-1027a1df.js";import"./query-assigned-elements-acf341e1.js";const _=v`
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

  :host([clamp-disabled]) {
    --toujou-clamped-content-number-of-lines: 9999;
    --toujou-clamped-content-button-visible-display: none;
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
`;var w=Object.defineProperty,C=Object.getOwnPropertyDescriptor,r=(t,e,o,l)=>{for(var n=l>1?void 0:l?C(e,o):e,i=t.length-1,c;i>=0;i--)(c=t[i])&&(n=(l?c(e,o,n):c(n))||n);return l&&n&&w(e,o,n),n},h=(t,e,o)=>{if(!e.has(t))throw TypeError("Cannot "+o)},u=(t,e,o)=>(h(t,e,"read from private field"),o?o.call(t):e.get(t)),d=(t,e,o)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,o)},k=(t,e,o)=>(h(t,e,"access private method"),o),s,p,b;let a=class extends f{constructor(){super(...arguments),d(this,p),this.isOpen=!1,this.clampDisabled=!1,d(this,s,()=>{this.isOpen=!this.isOpen})}render(){return y`
            <div class="clamped-content">
                <slot name="clamped-content"></slot>
            </div>
            <slot name="show-button" class="button-slot" @click="${u(this,s)}"></slot>
            <slot name="hide-button" class="button-slot" @click="${u(this,s)}"></slot>
        `}connectedCallback(){super.connectedCallback(),k(this,p,b).call(this)}};s=new WeakMap;p=new WeakSet;b=function(){requestAnimationFrame(()=>{const t=this.querySelector(".review__review");t?this.clampDisabled=t.scrollHeight<=t.clientHeight:this.clampDisabled=!0})};a.styles=[_];r([m({type:Boolean,attribute:"is-open",reflect:!0})],a.prototype,"isOpen",2);r([m({type:Boolean,attribute:"clamp-disabled",reflect:!0})],a.prototype,"clampDisabled",2);a=r([j("toujou-clamped-content")],a);
//# sourceMappingURL=toujou-clamped-content.js.map
