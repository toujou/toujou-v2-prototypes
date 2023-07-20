import{s as c}from"./lit-element-80867ff0.js";import{e as h}from"./query-assigned-elements-bd4ea1f7.js";var l=Object.defineProperty,v=Object.getOwnPropertyDescriptor,p=(n,t,e,i)=>{for(var s=i>1?void 0:i?v(t,e):t,r=n.length-1,a;r>=0;r--)(a=n[r])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&l(t,e,s),s};class o extends c{constructor(){super(),this.navListItems=[],this.listItemSelector=".main-nav__list-item",this.hasSubNavAttribute="has-subnav",this.isOpenAttribute="is-open",this.listItemLevelAttribute="nav-item-level",this.listItemChevronSelector="main-nav__chevron",this._getNavListItems=()=>{if(this.navListItems=[...this.querySelectorAll(this.listItemSelector)],!this.navListItems){console.warn("TOUJOU: Main navigation has no list items!");return}this.navListItems.forEach(t=>{t.hasSubNav=t.hasAttribute(this.hasSubNavAttribute),t.hasSubNav&&(t.isOpen=!1,t.level=t.getAttribute(this.listItemLevelAttribute),t.toggleEl=t.querySelector(".main-nav__chevron"),t.toggleEl.addEventListener("click",()=>{this._toggleListItemState(t)}),t.addEventListener("keyup",e=>{this._handleKeyUp(e,e.target)}))})},this._handleKeyUp=(t,e)=>{if((t.key==="Enter"||t.code==="Enter"||t.code==="Space"||t.key===" ")&&e&&e.classList.contains(this.listItemChevronSelector)){const i=e.closest(this.listItemSelector);this._toggleListItemState(i)}(t.key==="Escape"||t.code==="Escape")&&this._closeAllNavListItems()},this._toggleListItemState=t=>{t.isOpen=!t.isOpen,t.isOpen?(t.setAttribute(this.isOpenAttribute,""),this._closeOtherOpenListItems(t),window.addEventListener("click",this._onWindowClick)):t.removeAttribute(this.isOpenAttribute)},this._closeOtherOpenListItems=t=>{var i;const e=(i=t.parentNode)==null?void 0:i.querySelectorAll(`${this.listItemSelector}[is-open]`);e&&e.forEach(s=>{s.isOpen&&s!==t&&this._toggleListItemState(s)})},this._closeAllNavListItems=()=>{this.navListItems.forEach(t=>{t.isOpen&&(this._toggleListItemState(t),window.removeEventListener("click",this._onWindowClick))})},this._onWindowClick=t=>{t.target.closest(".main-nav")||this._closeAllNavListItems()}}connectedCallback(){super.connectedCallback(),this._getNavListItems(),window.addEventListener("keyup",this._handleKeyUp)}createRenderRoot(){return this}}p([h({type:Array})],o.prototype,"navListItems",2);customElements.define("toujou-main-nav",o,{extends:"nav"});
//# sourceMappingURL=toujou-main-nav.js.map