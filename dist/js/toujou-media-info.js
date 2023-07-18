import{_ as l}from"./tslib.es6-4b7d5947.js";import{i as p,s as r,y as c}from"./lit-element-6fe74b4f.js";import{e as d}from"./custom-element-73470d87.js";import{e as u}from"./property-1027a1df.js";import"./query-assigned-elements-acf341e1.js";var a,i,o,b=p(a||(i=[` .open-button {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  :host([open]) .open-button {
    display: none;
  }

  .close-button {
    display: none;
  }

  :host([open]) .close-button {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
`],o||(o=i.slice(0)),a=Object.freeze(Object.defineProperties(i,{raw:{value:Object.freeze(o)}}))));let t=class extends r{constructor(){super(...arguments),this.isOpen=!1,this.isOpenParentAttribute="media-info-child-is-open",this._handleClick=e=>{e.preventDefault(),e.stopPropagation()},this.handleToggleClick=()=>{this.isOpen=!this.isOpen}}render(){return c`
            <slot name="open-button" class="open-button"  @click="${this.handleToggleClick}"></slot>
            <slot name="close-button" class="close-button" @click="${this.handleToggleClick}"></slot>
            <slot name="figcaption"></slot>
            <slot name="copyright"></slot>
        `}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleClick)}updated(e){var n,s;e.has("isOpen")&&(this.isOpen?(n=this.parentElement)===null||n===void 0||n.setAttribute(this.isOpenParentAttribute,""):(s=this.parentElement)===null||s===void 0||s.removeAttribute(this.isOpenParentAttribute))}};t.styles=[b],l([u({type:Boolean,reflect:!0,attribute:"open"})],t.prototype,"isOpen",void 0),t=l([d("toujou-media-info")],t);
//# sourceMappingURL=toujou-media-info.js.map
