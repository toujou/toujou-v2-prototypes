import{i as e,s as t,y as r}from"./lit-element-BhLV4vUl.js";import{e as i}from"./custom-element-DPYutfhb.js";import{e as o}from"./property-D5hxO1nL.js";import"./query-assigned-elements-CrfAJxAz.js";const a=e`
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
        border-radius: var(--breadcrumb-fake-list-border-radius);
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

    .breadcrumb__fake-list .breadcrumb__link:focus {
        color: var(--breadcrumb-link-color-active, var(--color-primary));
    }

    @media (hover: hover) {
        .breadcrumb__fake-list .breadcrumb__link:hover {
            color: var(--breadcrumb-link-color-active, var(--color-primary));
            text-decoration: underline;
        }
    }
`;var l=Object.defineProperty,s=Object.getOwnPropertyDescriptor,n=(e,t,r,i)=>{for(var o,a=i>1?void 0:i?s(t,r):t,n=e.length-1;n>=0;n--)(o=e[n])&&(a=(i?o(t,r,a):o(a))||a);return i&&a&&l(t,r,a),a};let b=class extends t{constructor(){super(),this.breakpoint=0,this.isMobile=!1,this.list=null,this.listItems=[],this.toggleButtons=[],this.mobileMenuIsOpen=!1,this._handleToggleClick=this._handleToggleClick.bind(this)}render(){return r`
            <slot name="toggle-buttons" @click="${this._handleToggleClick}"></slot>
            <slot name="list"></slot>
            <div class="breadcrumb__fake-list"></div>
        `}firstUpdated(){this.list=this.querySelector(".breadcrumb__list"),this.listItems=Array.from(this.querySelectorAll(".breadcrumb__item")),this._calculateBreakpoint(),this.breakpoint>0&&(this._mql=window.matchMedia(`(max-width: ${this.breakpoint}px)`),this._mql.addEventListener("change",(e=>{this.isMobile=e.matches,e.matches||(this.mobileMenuIsOpen=!1)})),this.isMobile=this._mql.matches),this._populateFakeList()}connectedCallback(){super.connectedCallback(),this.toggleButtons=Array.from(this.querySelectorAll(".breadcrumb__toggle")),this.dispatchEvent(new Event("toujou-breadcrumb-connected"))}_calculateBreakpoint(){let e=0;this.listItems.forEach((t=>{e+=t.getBoundingClientRect().width,e+=parseInt(window.getComputedStyle(t)["margin-right"]),e+=16})),this.breakpoint=Math.ceil(e)}_handleToggleClick(){this.mobileMenuIsOpen=!this.mobileMenuIsOpen}_populateFakeList(){var e;const t=this.shadowRoot.querySelector(".breadcrumb__fake-list");null==(e=this.listItems)||e.forEach(((e,r)=>{if(r<this.listItems.length-1){const r=e.cloneNode(!0);t.appendChild(r)}}))}};b.styles=[a],n([o({type:Number})],b.prototype,"breakpoint",2),n([o({type:Boolean,reflect:!0})],b.prototype,"isMobile",2),n([o({type:HTMLOListElement})],b.prototype,"list",2),n([o({type:Array})],b.prototype,"listItems",2),n([o({type:Array})],b.prototype,"toggleButtons",2),n([o({type:Boolean,reflect:!0})],b.prototype,"mobileMenuIsOpen",2),b=n([i("toujou-breadcrumb")],b);
//# sourceMappingURL=toujou-breadcrumb.js.map
