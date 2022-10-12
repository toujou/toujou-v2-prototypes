import{s as l,$ as c}from"./lit-element-f92abbea.js";import{n as d}from"./custom-element-fb5c5745.js";import{e as u}from"./property-19bdaa8a.js";import"./query-assigned-elements-39dd8e72.js";var b=Object.defineProperty,p=Object.getOwnPropertyDescriptor,h=(t,s,i,n)=>{for(var e=n>1?void 0:n?p(s,i):s,a=t.length-1,r;a>=0;a--)(r=t[a])&&(e=(n?r(s,i,e):r(e))||e);return n&&e&&b(s,i,e),e};let o=class extends l{constructor(){super(...arguments),this._state=!1,this.clickEventName="toujou-burger-button-click",this.targetToggleAttribute="open-nav",this.topbarMqlChangeEventName="toujou-topbar-breakpoint-change"}set state(t){this._state=t,this.setAttribute("aria-pressed",String(t)),this.setAttribute("aria-expanded",String(t))}get state(){return this._state}render(){return c`<slot name="content"></slot>`}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleClickEvent.bind(this)),window.addEventListener(this.topbarMqlChangeEventName,this._handleMqlChange.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleClickEvent.bind(this)),window.removeEventListener(this.topbarMqlChangeEventName,this._handleMqlChange.bind(this))}_handleClickEvent(){this.state=!this._state,this.dispatchEvent(new CustomEvent(this.clickEventName,{bubbles:!0,composed:!0,detail:{state:this.state}}))}_handleMqlChange(t){t.detail.state||(this.state=!1)}};h([u({type:Boolean})],o.prototype,"_state",2);o=h([d("toujou-burger-button")],o);
//# sourceMappingURL=toujou-burger-button.js.map
