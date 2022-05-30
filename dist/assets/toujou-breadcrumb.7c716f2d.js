import{css as b,LitElement as m,html as u}from"lit";import{property as l,customElement as d}from"lit/decorators.js";const h=b`
  :host {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .breadcrumb__fake-list {
    display: none;
    list-style: none;
    position: relative;
  }
  
  .breadcrumb__fake-list::before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: var(--spacing-s);
    border-left: var(--breadcrumb-fake-list-triangle-size) solid transparent;
    border-right: var(--breadcrumb-fake-list-triangle-size) solid transparent;
    border-bottom: var(--breadcrumb-fake-list-triangle-size) solid var(--breadcrumb-mobile-menu-bg-color);
    transform: translateY(-100%);
  }
  
  .breadcrumb__fake-list .breadcrumb__link {
    color: var(--breadcrumb-link-color);
    font-size: var(--breadcrumb-font-size);
    font-family: var(--breadcrumb-font-family);
    text-decoration: var(--breadcrumb-link-text-decoration);
  }
  
  :host([ismobile][mobilemenuisopen]) .breadcrumb__fake-list {
    display: flex;
    flex-direction: column-reverse;
    gap: var(--breadcrumb-mobile-menu-list-gap);
    padding: var(--breadcrumb-mobile-menu-padding);
    position: absolute;
    top: var(--breadcrumb-mobile-menu-top);
    left: 0;
    background-color: var(--breadcrumb-mobile-menu-bg-color);
    box-shadow: var(--breadcrumb-mobile-menu-shadow);
  }
`;var p=Object.defineProperty,f=Object.getOwnPropertyDescriptor,o=(e,t,a,s)=>{for(var i=s>1?void 0:s?f(t,a):t,n=e.length-1,c;n>=0;n--)(c=e[n])&&(i=(s?c(t,a,i):c(i))||i);return s&&i&&p(t,a,i),i};const g=16;let r=class extends m{constructor(){super(),this.breakpoint=0,this.isMobile=!1,this.list=null,this.listItems=[],this.toggleButtons=[],this.mobileMenuIsOpen=!1,this._handleToggleClick=this._handleToggleClick.bind(this)}render(){return u`
            <slot name="toggle-buttons"></slot>
            <slot name="list"></slot>
            <div class="breadcrumb__fake-list"></div>
        `}firstUpdated(){this.list=this.querySelector(".breadcrumb__list"),this.listItems=Array.from(this.querySelectorAll(".breadcrumb__item")),this._calculateBreakpoint(),this.breakpoint>0&&(this._mql=window.matchMedia(`(max-width: ${this.breakpoint}px)`),this._mql.addEventListener("change",e=>{this.isMobile=e.matches,e.matches||(this.mobileMenuIsOpen=!1)}),this.isMobile=this._mql.matches),this._populateFakeList()}connectedCallback(){super.connectedCallback(),this.toggleButtons=Array.from(this.querySelectorAll(".breadcrumb__toggle")),this.toggleButtons&&this.toggleButtons.forEach(e=>{e.addEventListener("click",this._handleToggleClick)})}disconnectedCallback(){super.disconnectedCallback(),this.toggleButtons&&this.toggleButtons.forEach(e=>{e.removeEventListener("click",this._handleToggleClick)})}_calculateBreakpoint(){let e=0;this.listItems.forEach(t=>{e+=t.getBoundingClientRect().width,e+=parseInt(window.getComputedStyle(t)["margin-right"]),e+=g}),this.breakpoint=Math.ceil(e)}_handleToggleClick(){this.mobileMenuIsOpen=!this.mobileMenuIsOpen}_populateFakeList(){var t;const e=this.shadowRoot.querySelector(".breadcrumb__fake-list");(t=this.listItems)==null||t.forEach((a,s)=>{if(s<this.listItems.length-1){const i=a.cloneNode(!0);e.appendChild(i)}})}};r.styles=[h];o([l({type:Number})],r.prototype,"breakpoint",2);o([l({type:Boolean,reflect:!0})],r.prototype,"isMobile",2);o([l({type:HTMLOListElement})],r.prototype,"list",2);o([l({type:Array})],r.prototype,"listItems",2);o([l({type:Array})],r.prototype,"toggleButtons",2);o([l({type:Boolean,reflect:!0})],r.prototype,"mobileMenuIsOpen",2);r=o([d("toujou-breadcrumb")],r);
