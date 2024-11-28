import{s as t}from"./lit-element-D9Ui1_BQ.js";import{e}from"./custom-element-DPYutfhb.js";import{e as o}from"./property-D5hxO1nL.js";import"./query-assigned-elements-CrfAJxAz.js";var s=Object.defineProperty,i=Object.getOwnPropertyDescriptor,n=(t,e,o,n)=>{for(var l,r=n>1?void 0:n?i(e,o):e,a=t.length-1;a>=0;a--)(l=t[a])&&(r=(n?l(e,o,r):l(r))||r);return n&&r&&s(e,o,r),r};let l=class extends t{constructor(){super(),this._overlayId=null,this._warningEl=null,this._closeButton=null,this._buttons=[],this._overlayCookie=!1,this.state="closed",this.warningVisible=!1,this._handleButtonClick=this._handleButtonClick.bind(this),this._handleCloseButtonClick=this._handleCloseButtonClick.bind(this)}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this._getElements(),"#aaa"===location.hash&&this._setCookie("accepted"),this._overlayCookie=this._checkCookie("toujou-overlay-"+this._overlayId),this._buttons.length&&this._buttons.forEach((t=>{t.addEventListener("click",this._handleButtonClick)})),this._closeButton&&this._closeButton.addEventListener("click",this._handleCloseButtonClick),this._overlayCookie?"rejected"===this._overlayCookie?this.state="open":"accepted"===this._overlayCookie&&(this.state="closed"):this.state="open"}updated(t){super.updated(t),t.has("state")&&document.body.toggleAttribute("overlay-open","open"===this.state)}disconnectedCallback(){super.disconnectedCallback(),this._buttons.length&&this._buttons.forEach((t=>{t.removeEventListener("click",this._handleButtonClick)})),this._closeButton&&this._closeButton.removeEventListener("click",this._handleCloseButtonClick)}_handleCloseButtonClick(){this.state="closed",this._setCookie("accepted")}_handleButtonClick(t){t.preventDefault();const e=null==t?void 0:t.target,o=e.getAttribute("data-overlay-value")||null;"no"===o?(this.state="open",this._setCookie("rejected"),this.warningVisible=!0):"yes"===o&&(this.state="closed",this._setCookie("accepted")),e.blur()}_getElements(){this._overlayId=this.getAttribute("id")||null,this._warningEl=this.querySelector(".overlay__warning"),this._closeButton=this.querySelector(".overlay__close-button"),this._buttons=Array.from(this.querySelectorAll(".overlay__buttons .button"))}_setCookie(t){document.cookie=`toujou-overlay-${this._overlayId}=${t};path=/;`}_checkCookie(t){const e=document.cookie.match(new RegExp("(^| )"+t+"=([^;]+)"));return!!e&&e[2]}};n([o({type:String})],l.prototype,"_overlayId",2),n([o({type:HTMLElement})],l.prototype,"_warningEl",2),n([o({type:HTMLElement})],l.prototype,"_closeButton",2),n([o({type:Array})],l.prototype,"_buttons",2),n([o({type:String})],l.prototype,"_overlayCookie",2),n([o({type:String,attribute:"state",reflect:!0})],l.prototype,"state",2),n([o({type:Boolean,attribute:"warning-visible",reflect:!0})],l.prototype,"warningVisible",2),l=n([e("toujou-overlay")],l);
//# sourceMappingURL=toujou-overlay.js.map
