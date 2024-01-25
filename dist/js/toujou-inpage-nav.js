import{_ as r}from"./tslib.es6-d64b32d8.js";import{i as _,s as m,y as g}from"./lit-element-6fe74b4f.js";import{e as f}from"./custom-element-73470d87.js";import{e as a}from"./property-1027a1df.js";import"./query-assigned-elements-acf341e1.js";var d,h,l,y=_(d||(h=[`:host {
    display: var(--toujou-third-party-content-display, flex);
    -webkit-box-align: var(--toujou-third-party-content-align-items, stretch);
        -ms-flex-align: var(--toujou-third-party-content-align-items, stretch);
            align-items: var(--toujou-third-party-content-align-items, stretch);
    -webkit-box-pack: var(--toujou-third-party-content-justify-content, center);
        -ms-flex-pack: var(--toujou-third-party-content-justify-content, center);
            justify-content: var(--toujou-third-party-content-justify-content, center);
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: var(--toujou-third-party-content-flex-direction, column);
            flex-direction: var(--toujou-third-party-content-flex-direction, column);
    position: var(--toujou-third-party-content-position, relative);
    top: var(--toujou-third-party-content-top, 0);
    left: var(--toujou-third-party-content-left, 0);
    height: var(--toujou-third-party-content-height, 100%);
    width: var(--toujou-third-party-content-width, 100%);
}

:host([contenttype='maps']) {
    position: var(--toujou-third-party-content-maps-position, absolute);
}

iframe {
    border: var(--toujou-third-party-content-iframe-border, none);
    position: var(--toujou-third-party-content-iframe-position, absolute);
    height: var(--toujou-third-party-content-iframe-height, 100%);
    width: var(--toujou-third-party-content-iframe-width, 100%);
}

:host([contenttype='html']) iframe {
    position: var(--toujou-third-party-content-html-iframe-position, relative);
}
`],l||(l=h.slice(0)),d=Object.freeze(Object.defineProperties(h,{raw:{value:Object.freeze(l)}}))));function b(t){if(!t)return 0;if(t.classList.contains("inpage-nav__label")){const e=getComputedStyle(t),i=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight);return t.offsetWidth+i}return t.offsetWidth}function S(t,e,i,s){return function(o){let c=0;return Object.keys(o).forEach(u=>{const p=getComputedStyle(o[u].item),v=parseFloat(p.paddingLeft)+parseFloat(p.paddingRight);c+=o[u].item.offsetWidth+v}),c}(t)+b(e)+b(i)*(s?3:1)}let n=class extends m{set _currentSectionID(t){this._navItems&&(t?this._previousCurrentSectionID!==t&&(this._updateLabelVisibility(t),this._updateNavItemsState(t)):(this._updateLabelVisibility(!1),this._updateNavItemsState(null)))}render(){return g`
      <slot></slot>
      <slot name="cta" id="cta"></slot>
    `}constructor(){super(),this.isMobile=!1,this.mobileOpen=!1,this._targetSections=new Map,this.intersectionObserverNumberOfSteps=50,this.mobileBreakpointOffset=this._getMobileBreakpointOffset(),this._currentSectionID=null,this._isCentered=this.hasAttribute("centered"),this._isAuto=this.hasAttribute("is-auto"),this._targetSections=new Map,this._rootMarginsSize=-200,setTimeout(()=>{this._init()})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._checkIsMobileState.bind(this)),this._toggle.removeEventListener("click",this._mobileOpenToggle.bind(this)),this.addEventListener("click",this._handleNavClick.bind(this))}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),t!=="ismobile"&&t!=="mobileopen"||this._updateAriaAttributes(t)}_init(){this._getChildrenElements(),this._navItems?(this._toggle=this.querySelector(".inpage-nav__toggle"),this._checkIsMobileState(),this._addTargetObservers(),window.addEventListener("resize",this._checkIsMobileState.bind(this)),this._toggle.addEventListener("click",this._mobileOpenToggle.bind(this)),this.addEventListener("click",this._handleNavClick.bind(this))):console.error("Could not initialize the inpage-nav. Error: No nav items!!!")}_getChildrenElements(){this._navItems={},this._navLabel=this.querySelector(".inpage-nav__label")||null,this._cta=this.querySelector('[slot="cta"]'),(this.querySelectorAll(".inpage-nav__item")||null).forEach((t,e)=>{const i=t.querySelector("a").getAttribute("href");this._navItems[e]={item:t,link:i,target:document.querySelector(i)}})}_checkIsMobileState(){this.isMobile=!1,window.requestAnimationFrame(()=>{this._navBreakpoint=S(this._navItems,this._navLabel,this._cta,this._isCentered),this.isMobile=this._navBreakpoint>this.offsetWidth-this.mobileBreakpointOffset})}_addTargetObservers(){const t={rootMargin:`${this._rootMarginsSize}px 0px ${this._rootMarginsSize}px 0px`,threshold:this._createThresholdList(this.intersectionObserverNumberOfSteps)};this.observer=new IntersectionObserver(this._handleObserver.bind(this),t),Object.keys(this._navItems).forEach(e=>{const i=this._navItems[e].target;if(!(i instanceof HTMLElement))return;this._targetSections.set(i,!1);const s=i.hasAttribute("id")?i:i.nextElementSibling;this.observer.observe(s)})}_createThresholdList(t){return[...Array(t).keys()].map(e=>e/t)}_handleObserver(t){t.forEach(e=>{this._targetSections.set(e.target,e.isIntersecting)}),this._updateSectionsAttributes(),this._updateActiveItemUI()}_updateSectionsAttributes(){let t=!1;this._targetSections.forEach((e,i)=>{i.toggleAttribute("inpageNavTargetVisible",!t&&e),e&&!t&&(t=e)})}_updateActiveItemUI(){const t=document.querySelector("*[inpageNavTargetVisible]")||null;t?this._currentSectionID=`#${t.id.toString()}`:!t&&this._navLabel?this._currentSectionID=null:t||this._navLabel||(this._currentSectionID=this._navItems[0].link)}_mobileOpenToggle(){this.mobileOpen=!this.mobileOpen}_handleNavClick(t){t.target.classList.contains("inpage-nav__link")&&(this.mobileOpen=!1)}_updateAriaAttributes(t){t==="mobileopen"?this._toggle.setAttribute("aria-expanded",String(this.mobileOpen)):t==="ismobile"&&this._toggle.setAttribute("aria-hidden",String(!this.isMobile))}_updateLabelVisibility(t){this._navLabel&&(t?this._navLabel.removeAttribute("visible"):this._navLabel.setAttribute("visible",""))}_updateNavItemsState(t){const e=this.querySelector(".inpage-nav__item[active]");e&&(e.removeAttribute("active"),e.removeAttribute("aria-current")),Object.keys(this._navItems).forEach(i=>{this._navItems[i].link===t&&(this._navItems[i].item.setAttribute("active",""),this._navItems[i].item.setAttribute("aria-current","true"))}),this._previousCurrentSectionID=t}_getMobileBreakpointOffset(){const t=getComputedStyle(document.documentElement);return parseInt(t.getPropertyValue("--toujou-inpage-nav-breakpoint-offset")||"180",10)}};n.styles=[y],r([a({type:Boolean,reflect:!0})],n.prototype,"isMobile",void 0),r([a({type:Boolean,reflect:!0})],n.prototype,"mobileOpen",void 0),r([a({type:Map})],n.prototype,"_targetSections",void 0),n=r([f("toujou-inpage-nav")],n);
//# sourceMappingURL=toujou-inpage-nav.js.map
