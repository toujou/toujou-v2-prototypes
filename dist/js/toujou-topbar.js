import{s as u}from"./lit-element-4f5b1f7c.js";import{n as c}from"./custom-element-fb5c5745.js";import{e as h}from"./property-19bdaa8a.js";import"./query-assigned-elements-39dd8e72.js";var p=Object.defineProperty,d=Object.getOwnPropertyDescriptor,o=(n,e,r,s)=>{for(var t=s>1?void 0:s?d(e,r):e,a=n.length-1,l;a>=0;a--)(l=n[a])&&(t=(s?l(e,r,t):l(t))||t);return s&&t&&p(e,r,t),t};let i=class extends u{constructor(){super(...arguments),this.burgerButtonClickEvent="toujou-burger-button-click",this.mqlChangeEventName="toujou-topbar-breakpoint-change",this._isOpen=!1,this._mql=window.matchMedia("(max-width: 839px)"),this._isMobile=this._mql.matches}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),window.addEventListener(this.burgerButtonClickEvent,this._handleBurgerButtonClick.bind(this)),this._mql.addEventListener("change",this._handleMqlChange.bind(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(this.burgerButtonClickEvent,this._handleBurgerButtonClick.bind(this)),this._mql.removeEventListener("change",this._handleMqlChange.bind(this))}_handleBurgerButtonClick(n){this._isOpen=n.detail.state}_handleMqlChange(n){const e=n.matches;this.dispatchEvent(new CustomEvent(this.mqlChangeEventName,{bubbles:!0,composed:!0,detail:{state:e}})),e||(this._isOpen=!1)}};o([h({type:Boolean,reflect:!0,attribute:"open-nav"})],i.prototype,"_isOpen",2);o([h({type:MediaQueryList})],i.prototype,"_mql",2);o([h({type:Boolean})],i.prototype,"_isMobile",2);i=o([c("toujou-topbar")],i);
//# sourceMappingURL=toujou-topbar.js.map
