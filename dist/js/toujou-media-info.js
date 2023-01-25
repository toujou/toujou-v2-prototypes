import{i as a,s as u,y as c}from"./lit-element-9d8fde0b.js";import{e as h}from"./custom-element-73470d87.js";import{e as f}from"./property-1027a1df.js";import"./query-assigned-elements-acf341e1.js";const b=a`
  .open-button {
    display: flex;
  }
  
  :host([open]) .open-button {
    display: none;
  }

  .close-button {
    display: none;
  }

  :host([open]) .close-button {
    display: flex;
  }
`;var d=Object.defineProperty,m=Object.getOwnPropertyDescriptor,r=(t,e,s,n)=>{for(var o=n>1?void 0:n?m(e,s):e,l=t.length-1,p;l>=0;l--)(p=t[l])&&(o=(n?p(e,s,o):p(o))||o);return n&&o&&d(e,s,o),o};let i=class extends u{constructor(){super(),this.isOpen=!1,this.isOpenParentAttribute="media-info-child-is-open",this._handleClick=t=>{t.preventDefault(),t.stopPropagation(),t.target.closest('[slot="open-button"], [slot="close-button"]')&&this._toggleIsOpen()},this.addEventListener("click",this._handleClick)}render(){return c`
            <slot name="open-button" class="open-button"></slot>
            <slot name="close-button" class="close-button"></slot>
            <slot name="figcaption"></slot>
            <slot name="copyright"></slot>
        `}updated(t){var e,s;t.has("isOpen")&&(this.isOpen?(e=this.parentElement)==null||e.setAttribute(this.isOpenParentAttribute,""):(s=this.parentElement)==null||s.removeAttribute(this.isOpenParentAttribute))}_toggleIsOpen(){this.isOpen=!this.isOpen}};i.styles=[b];r([f({type:Boolean,reflect:!0,attribute:"open"})],i.prototype,"isOpen",2);i=r([h("toujou-media-info")],i);
//# sourceMappingURL=toujou-media-info.js.map
