import{s as l,y as h}from"./lit-element-cb538606.js";import{e as d}from"./property-1027a1df.js";import"./query-assigned-elements-acf341e1.js";var u=Object.defineProperty,a=Object.getOwnPropertyDescriptor,m=(n,e,t,s)=>{for(var i=s>1?void 0:s?a(e,t):e,o=n.length-1,r;o>=0;o--)(r=n[o])&&(i=(s?r(e,t,i):r(i))||i);return s&&i&&u(e,t,i),i};class c extends l{constructor(){super(),this.visible=!1,this._checkVisibility=()=>{this.visible=document.body.scrollTop>this._viewportHeight||document.documentElement.scrollTop>this._viewportHeight},this._getFirstElementOnPage=()=>{const e=document.querySelector("main");let t=e?e.querySelector("main *:not(span)"):document.querySelector(".wrap--content *:first-child:not(.header)");if(t||(t=document.querySelector(".wrap--master")||document.querySelector("*")),t)return t;console.error("TOUJOU: Could not add focus to the first element on the page")},this._checkVisibility=this._checkVisibility.bind(this)}static get is(){return"toujou-topbutton"}render(){return h`
            <slot id="content"></slot>
        `}connectedCallback(){super.connectedCallback(),this.setAttribute("role","button"),this._checkVisibility(),window.addEventListener("scroll",this._checkVisibility),window.addEventListener("resize",this._checkVisibility),this.addEventListener("click",this._handleClick)}disconnectedCallback(){window.removeEventListener("scroll",this._checkVisibility),window.addEventListener("resize",this._checkVisibility),this.removeEventListener("click",this._handleClick),super.disconnectedCallback()}updated(e){super.updated(e),e.has("visible")&&this.setAttribute("aria-hidden",(!this.visible).toString())}get _viewportHeight(){return Math.max(document.documentElement.clientHeight,window.innerHeight||0)}_handleClick(){window.scrollTo({top:0,left:0,behavior:"smooth"});const e=this._getFirstElementOnPage();e&&e.focus()}}m([d({type:Boolean,attribute:"is-visible",reflect:!0})],c.prototype,"visible",2);customElements.define(c.is,c);
//# sourceMappingURL=toujou-topbutton.js.map
