import{i as t,s as e,y as o}from"./lit-element-7f3592a7.js";import{e as n}from"./custom-element-ff9a146d.js";import{e as s}from"./property-67fa6154.js";import"./query-assigned-elements-66edff90.js";const a=t`
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
`;var l,i,c,r=Object.defineProperty,p=Object.getOwnPropertyDescriptor,u=(t,e,o,n)=>{for(var s,a=n>1?void 0:n?p(e,o):e,l=t.length-1;l>=0;l--)(s=t[l])&&(a=(n?s(e,o,a):s(a))||a);return n&&a&&r(e,o,a),a},d=(t,e,o)=>{if(!e.has(t))throw TypeError("Cannot "+o)},m=(t,e,o)=>(d(t,e,"read from private field"),o?o.call(t):e.get(t)),b=(t,e,o)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,o)};let h=class extends e{constructor(){super(...arguments),b(this,i),this.isOpen=!1,this.clampDisabled=!1,b(this,l,(()=>{this.isOpen=!this.isOpen}))}render(){return o`
            <div class="clamped-content">
                <slot name="clamped-content"></slot>
            </div>
            <slot name="show-button" class="button-slot" @click="${m(this,l)}"></slot>
            <slot name="hide-button" class="button-slot" @click="${m(this,l)}"></slot>
        `}connectedCallback(){var t,e,o;super.connectedCallback(),(t=this,e=i,o=c,d(t,e,"access private method"),o).call(this)}};l=new WeakMap,i=new WeakSet,c=function(){requestAnimationFrame((()=>{const t=this.querySelector(".review__review");this.clampDisabled=!t||t.scrollHeight<=t.clientHeight}))},h.styles=[a],u([s({type:Boolean,attribute:"is-open",reflect:!0})],h.prototype,"isOpen",2),u([s({type:Boolean,attribute:"clamp-disabled",reflect:!0})],h.prototype,"clampDisabled",2),h=u([n("toujou-clamped-content")],h);
//# sourceMappingURL=toujou-clamped-content.js.map
