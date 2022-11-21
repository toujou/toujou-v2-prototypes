import{s as l,$ as d}from"./lit-element-f92abbea.js";import{n as c}from"./custom-element-fb5c5745.js";import{e as p}from"./property-19bdaa8a.js";import"./query-assigned-elements-39dd8e72.js";var u=Object.defineProperty,g=Object.getOwnPropertyDescriptor,o=(t,s,a,n)=>{for(var e=n>1?void 0:n?g(s,a):s,i=t.length-1,r;i>=0;i--)(r=t[i])&&(e=(n?r(s,a,e):r(e))||e);return n&&e&&u(s,a,e),e};let h=class extends l{constructor(){super(...arguments),this._state=!1,this.stateChangeEventName="toujou-burger-button-state-change",this.targetToggleAttribute="open-nav",this.topbarMqlChangeEventName="toujou-topbar-breakpoint-change",this._handleClickEvent=()=>{this._toggleState()},this._handleKeyUp=t=>{(t.key==="Enter"||t.code==="Enter"||t.code==="Space"||t.key===" ")&&this._toggleState()},this._toggleState=()=>{this.state=!this._state,this.dispatchEvent(new CustomEvent(this.stateChangeEventName,{bubbles:!0,composed:!0,detail:{state:this.state}}))}}set state(t){this._state=t,this.setAttribute("aria-pressed",String(t)),this.setAttribute("aria-expanded",String(t))}get state(){return this._state}render(){return d`<slot name="content"></slot>`}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleClickEvent),this.addEventListener("keyup",this._handleKeyUp),window.addEventListener(this.topbarMqlChangeEventName,this._handleMqlChange.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleClickEvent),this.removeEventListener("keyup",this._handleKeyUp),window.removeEventListener(this.topbarMqlChangeEventName,this._handleMqlChange.bind(this))}_handleMqlChange(t){t.detail.state||(this.state=!1)}};o([p({type:Boolean})],h.prototype,"_state",2);h=o([c("toujou-burger-button")],h);
//# sourceMappingURL=toujou-burger-button.js.map
