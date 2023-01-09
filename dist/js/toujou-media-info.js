import{r as u,s as a,$ as c}from"./lit-element-8ef55b20.js";import{n as f}from"./custom-element-25a61773.js";import{e as m}from"./property-1027a1df.js";import"./query-assigned-elements-acf341e1.js";const b=u`
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
`;var O=Object.defineProperty,g=Object.getOwnPropertyDescriptor,i=(r,t,n,e)=>{for(var o=e>1?void 0:e?g(t,n):t,l=r.length-1,p;l>=0;l--)(p=r[l])&&(o=(e?p(t,n,o):p(o))||o);return e&&o&&O(t,n,o),o};let s=class extends a{constructor(){super(...arguments),this.isOpen=!1}render(){return c`
            <slot name="open-button" class="open-button" @click="${this._toggleIsOpen}"></slot>
            <slot name="close-button" class="close-button" @click="${this._toggleIsOpen}"></slot>
            <slot name="figcaption"></slot>
            <slot name="copyright"></slot>
        `}_toggleIsOpen(){this.isOpen=!this.isOpen}};s.styles=[b];i([m({type:Boolean,reflect:!0,attribute:"open"})],s.prototype,"isOpen",2);s=i([f("toujou-media-info")],s);
//# sourceMappingURL=toujou-media-info.js.map
