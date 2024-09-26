import{i as t,s as e,y as o}from"./lit-element-BhLV4vUl.js";import{e as n}from"./custom-element-DPYutfhb.js";import{e as s}from"./property-D5hxO1nL.js";import"./query-assigned-elements-CrfAJxAz.js";const a=t`
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
`;var l,i,c,r=Object.defineProperty,u=Object.getOwnPropertyDescriptor,p=t=>{throw TypeError(t)},d=(t,e,o,n)=>{for(var s,a=n>1?void 0:n?u(e,o):e,l=t.length-1;l>=0;l--)(s=t[l])&&(a=(n?s(e,o,a):s(a))||a);return n&&a&&r(e,o,a),a},m=(t,e,o)=>e.has(t)||p("Cannot "+o),b=(t,e,o)=>(m(t,e,"read from private field"),o?o.call(t):e.get(t)),h=(t,e,o)=>e.has(t)?p("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o);let y=class extends e{constructor(){super(...arguments),h(this,i),this.isOpen=!1,this.clampDisabled=!1,h(this,l,(()=>{this.isOpen=!this.isOpen}))}render(){return o`
            <div class="clamped-content">
                <slot name="clamped-content"></slot>
            </div>
            <slot name="show-button" class="button-slot" @click="${b(this,l)}"></slot>
            <slot name="hide-button" class="button-slot" @click="${b(this,l)}"></slot>
        `}connectedCallback(){var t,e,o;super.connectedCallback(),(t=this,e=i,o=c,m(t,e,"access private method"),o).call(this)}};l=new WeakMap,i=new WeakSet,c=function(){requestAnimationFrame((()=>{const t=this.querySelector(".review__review");this.clampDisabled=!t||t.scrollHeight<=t.clientHeight}))},y.styles=[a],d([s({type:Boolean,attribute:"is-open",reflect:!0})],y.prototype,"isOpen",2),d([s({type:Boolean,attribute:"clamp-disabled",reflect:!0})],y.prototype,"clampDisabled",2),y=d([n("toujou-clamped-content")],y);
//# sourceMappingURL=toujou-clamped-content.js.map
