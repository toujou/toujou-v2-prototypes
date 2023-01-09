import{i as u,s as a,y as c}from"./lit-element-cb538606.js";import{e as f}from"./custom-element-73470d87.js";import{e as m}from"./property-1027a1df.js";import"./query-assigned-elements-acf341e1.js";const b=u`
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
`;var O=Object.defineProperty,y=Object.getOwnPropertyDescriptor,i=(r,o,n,t)=>{for(var e=t>1?void 0:t?y(o,n):o,l=r.length-1,p;l>=0;l--)(p=r[l])&&(e=(t?p(o,n,e):p(e))||e);return t&&e&&O(o,n,e),e};let s=class extends a{constructor(){super(...arguments),this.isOpen=!1}render(){return c`
            <slot name="open-button" class="open-button" @click="${this._toggleIsOpen}"></slot>
            <slot name="close-button" class="close-button" @click="${this._toggleIsOpen}"></slot>
            <slot name="figcaption"></slot>
            <slot name="copyright"></slot>
        `}_toggleIsOpen(){this.isOpen=!this.isOpen}};s.styles=[b];i([m({type:Boolean,reflect:!0,attribute:"open"})],s.prototype,"isOpen",2);s=i([f("toujou-media-info")],s);
//# sourceMappingURL=toujou-media-info.js.map
