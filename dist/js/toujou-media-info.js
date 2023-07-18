import{i as d,s as h,y as f}from"./lit-element-6fe74b4f.js";import{e as m}from"./custom-element-73470d87.js";import{e as O}from"./property-1027a1df.js";import"./query-assigned-elements-acf341e1.js";function u(n,e,t,i){var l=arguments.length,o=l<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var r=n.length-1;r>=0;r--)(s=n[r])&&(o=(l<3?s(o):l>3?s(e,t,o):s(e,t))||o);return l>3&&o&&Object.defineProperty(e,t,o),o}var b,a,c,y=d(b||(a=[` .open-button {
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
`],c||(c=a.slice(0)),b=Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(c)}}))));let p=class extends h{constructor(){super(...arguments),this.isOpen=!1,this.isOpenParentAttribute="media-info-child-is-open",this._handleClick=n=>{n.preventDefault(),n.stopPropagation()},this.handleToggleClick=()=>{this.isOpen=!this.isOpen}}render(){return f`
            <slot name="open-button" class="open-button"  @click="${this.handleToggleClick}"></slot>
            <slot name="close-button" class="close-button" @click="${this.handleToggleClick}"></slot>
            <slot name="figcaption"></slot>
            <slot name="copyright"></slot>
        `}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleClick)}updated(n){var e,t;n.has("isOpen")&&(this.isOpen?(e=this.parentElement)===null||e===void 0||e.setAttribute(this.isOpenParentAttribute,""):(t=this.parentElement)===null||t===void 0||t.removeAttribute(this.isOpenParentAttribute))}};p.styles=[y],u([O({type:Boolean,reflect:!0,attribute:"open"})],p.prototype,"isOpen",void 0),p=u([m("toujou-media-info")],p);
//# sourceMappingURL=toujou-media-info.js.map
