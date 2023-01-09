import{s as r}from"./lit-element-cb538606.js";import{e as u}from"./custom-element-73470d87.js";import{e as l}from"./property-1027a1df.js";import"./query-assigned-elements-acf341e1.js";var _=Object.defineProperty,p=Object.getOwnPropertyDescriptor,o=(t,e,i,a)=>{for(var n=a>1?void 0:a?p(e,i):e,c=t.length-1,h;c>=0;c--)(h=t[c])&&(n=(a?h(e,i,n):h(n))||n);return a&&n&&_(e,i,n),n};let s=class extends r{constructor(){super(...arguments),this.openContactBoxBodyAttribute="contact-box-is-open",this.keyCodes={tab:9,escape:27},this.selectors={focusableEls:".contact-box__close, a.contact-box__link",contactStateInput:"#contact-state",closeButton:".contact-box__close"},this._closeButton=null,this._contactStateInput=null,this.state=!1,this._focusableEls=[],this._firstFocusableEl=null,this._lastFocusableEl=null,this._prevContentFocusEl=null}createRenderRoot(){return this}set _state(t){var e;this.state=t,this.state?(this.setAttribute("tabindex","0"),document.body.setAttribute(this.openContactBoxBodyAttribute,""),window.addEventListener("keydown",this._handleKeyDown.bind(this)),this._prevContentFocusEl=document.activeElement,this.focus()):(this.removeAttribute("tabindex"),this._contactStateInput.checked=!1,document.body.removeAttribute(this.openContactBoxBodyAttribute),window.removeEventListener("keydown",this._handleKeyDown),(e=this._prevContentFocusEl)==null||e.focus())}get _value(){return this.state}connectedCallback(){if(this._contactStateInput=document.querySelector(this.selectors.contactStateInput),this._closeButton=this.querySelector(this.selectors.closeButton),!this._closeButton||!this._contactStateInput){console.error("TOUJOU: Could not find the necessary elements for the contact box");return}else this._init()}disconnectedCallback(){var t,e;(t=this._contactStateInput)==null||t.removeEventListener("change",this._handleStateInputStateChange),this.removeEventListener("click",this._handleClick),(e=this._closeButton)==null||e.removeEventListener("click",this._handleCloseButtonClick)}_init(){var t,e;this._focusableEls=Array.from(this.querySelectorAll(this.selectors.focusableEls)),this._firstFocusableEl=this._focusableEls[0],this._lastFocusableEl=this._focusableEls[this._focusableEls.length-1],(t=this._contactStateInput)==null||t.addEventListener("change",this._handleStateInputStateChange.bind(this)),this.addEventListener("click",this._handleClick.bind(this)),(e=this._closeButton)==null||e.addEventListener("click",this._handleCloseButtonClick.bind(this))}_handleStateInputStateChange(){var t;this._state=((t=this._contactStateInput)==null?void 0:t.checked)||!1}_handleClick(t){t.target===this&&this._closeButton&&(this._state=!1)}_handleKeyDown(t){this.state&&(t.key==="Escape"||t.keyCode===this.keyCodes.escape?this._handleEscapePress():(t.key==="Tab"||t.keyCode===this.keyCodes.tab)&&this._handleTabPress(t))}_handleEscapePress(){this._state=!1}_handleTabPress(t){var e,i;t.shiftKey?document.activeElement===this._firstFocusableEl&&(t.preventDefault(),(e=this._lastFocusableEl)==null||e.focus()):document.activeElement===this._lastFocusableEl&&(t.preventDefault(),(i=this._firstFocusableEl)==null||i.focus())}_handleCloseButtonClick(){this._state=!1}};o([l({type:HTMLElement})],s.prototype,"_closeButton",2);o([l({type:HTMLInputElement})],s.prototype,"_contactStateInput",2);o([l({type:Boolean})],s.prototype,"state",2);o([l({type:HTMLElement})],s.prototype,"_focusableEls",2);o([l({type:HTMLElement})],s.prototype,"_firstFocusableEl",2);o([l({type:HTMLElement})],s.prototype,"_lastFocusableEl",2);o([l({type:HTMLElement})],s.prototype,"_prevContentFocusEl",2);s=o([u("toujou-contact-box")],s);
//# sourceMappingURL=toujou-contact-box.js.map
