import{s as h}from"./lit-element-9d8fde0b.js";import{e as u}from"./custom-element-73470d87.js";import{e as l}from"./property-1027a1df.js";import"./query-assigned-elements-acf341e1.js";var _=Object.defineProperty,p=Object.getOwnPropertyDescriptor,i=(t,e,n,r)=>{for(var s=r>1?void 0:r?p(e,n):e,a=t.length-1,c;a>=0;a--)(c=t[a])&&(s=(r?c(e,n,s):c(s))||s);return r&&s&&_(e,n,s),s};let o=class extends h{constructor(){super(),this._overlayId=null,this._warningEl=null,this._closeButton=null,this._buttons=[],this._overlayCookie=!1,this.state="closed",this.warningVisible=!1,this._handleButtonClick=this._handleButtonClick.bind(this),this._handleCloseButtonClick=this._handleCloseButtonClick.bind(this)}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this._getElements(),location.hash==="#aaa"&&this._setCookie("accepted"),this._overlayCookie=this._checkCookie("toujou-overlay-"+this._overlayId),this._buttons.length&&this._buttons.forEach(t=>{t.addEventListener("click",this._handleButtonClick)}),this._closeButton&&this._closeButton.addEventListener("click",this._handleCloseButtonClick),this._overlayCookie?this._overlayCookie==="rejected"?this.state="open":this._overlayCookie==="accepted"&&(this.state="closed"):this.state="open"}updated(t){super.updated(t),t.has("state")&&document.body.toggleAttribute("overlay-open",this.state==="open")}disconnectedCallback(){super.disconnectedCallback(),this._buttons.length&&this._buttons.forEach(t=>{t.removeEventListener("click",this._handleButtonClick)}),this._closeButton&&this._closeButton.removeEventListener("click",this._handleCloseButtonClick)}_handleCloseButtonClick(){this.state="closed",this._setCookie("accepted")}_handleButtonClick(t){t.preventDefault();const e=t==null?void 0:t.target,n=e.getAttribute("data-overlay-value")||null;n==="no"?(this.state="open",this._setCookie("rejected"),this.warningVisible=!0):n==="yes"&&(this.state="closed",this._setCookie("accepted")),e.blur()}_getElements(){this._overlayId=this.getAttribute("id")||null,this._warningEl=this.querySelector(".overlay__warning"),this._closeButton=this.querySelector(".overlay__close-button"),this._buttons=Array.from(this.querySelectorAll(".overlay__buttons .button"))}_setCookie(t){document.cookie=`toujou-overlay-${this._overlayId}=${t};path=/;`}_checkCookie(t){const e=document.cookie.match(new RegExp("(^| )"+t+"=([^;]+)"));return e?e[2]:!1}};i([l({type:String})],o.prototype,"_overlayId",2);i([l({type:HTMLElement})],o.prototype,"_warningEl",2);i([l({type:HTMLElement})],o.prototype,"_closeButton",2);i([l({type:Array})],o.prototype,"_buttons",2);i([l({type:String})],o.prototype,"_overlayCookie",2);i([l({type:String,attribute:"state",reflect:!0})],o.prototype,"state",2);i([l({type:Boolean,attribute:"warning-visible",reflect:!0})],o.prototype,"warningVisible",2);o=i([u("toujou-overlay")],o);
//# sourceMappingURL=toujou-overlay.js.map
