var a=Object.defineProperty;var h=(s,t,e)=>t in s?a(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var r=(s,t,e)=>(h(s,typeof t!="symbol"?t+"":t,e),e);import{i as c,s as d,y as l}from"./lit-element-80867ff0.js";import{c as u,s as p}from"./consentsStore-ae259671.js";import"./redux-2eeb5354.js";const m=c`
  :host {
    display: var(--toujou-third-party-content-display, flex);
    align-items: var(--toujou-third-party-content-align-items, stretch);
    justify-content: var(--toujou-third-party-content-justify-content, center);
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
`;class i extends d{static get is(){return"toujou-third-party-content"}static get styles(){return styles}render(){return l`
      <slot id="templatedContent" @slotchange="${this._handleSlotChange}"></slot>
      <div @click="${this._handlePlaceholderClick}">
        <slot name="placeholder" id="placeholderContainer" class="placeholder-slot"></slot>
      </div>
    `}static get properties(){return{contentType:{type:String},contentTypeAllowed:{type:Boolean},contentID:{type:String},isIntersecting:{type:Boolean},show:{type:Boolean}}}constructor(t){super(t),this.onStateChange=this.onStateChange.bind(this),this._handleConsentButtonClick=this._handleConsentButtonClick.bind(this),this.store=u,this.store.subscribe(this.onStateChange),this._state=this.store.getState(),this.contentTypeAllowed=!1,this.isIntersecting=!1,this.show=!1}connectedCallback(){super.connectedCallback(),this._isContentTypeAllowed(),this._checkIfShouldShow(),this._addEventListeners(),this._addIntersectionObserver()}updated(t){t.forEach((e,n)=>{n==="isIntersecting"&&this.isIntersecting&&!this.show&&(this.show=!0,this._checkIfShouldShow())})}onStateChange(){this._state=this.store.getState(),this._isContentTypeAllowed(),this._checkIfShouldShow()}_addEventListeners(){window.addEventListener("toujou-consent-widget-dismissed",()=>{this._isContentTypeAllowed(),this._checkIfShouldShow()}),window.addEventListener("toujou-consent-button-clicked",this._handleConsentButtonClick)}_handleConsentButtonClick(t){const e=t.target;this.querySelectorAll(".consent").forEach(o=>{o===e&&(this._saveSingleConsent(t.target.getAttribute("consenttype"),this._createNewConsentData(t.target)),this._dispatchAddSnackbar(t.target.getAttribute("snackbarmessage")))})}_createNewConsentData(t){const n=t.getAttribute("consentLifetime")*24*60*60;return{consentGiven:!0,consentCreationDate:Date.now(),consentExpirationDate:Date.now()+n,consentLifetime:n}}_saveSingleConsent(t,e){this.store.dispatch(p(t,e))}_dispatchAddSnackbar(t){const e=new CustomEvent("toujou-add-snackbar",{bubbles:!0,composed:!0,detail:{message:t,type:"auto",duration:2500,variant:"success"}});this.dispatchEvent(e)}_handlePlaceholderClick(t){t.target.hasAttribute("ttpc-showcontentonce")&&this._handleShowContentOnceClick()}_handleShowContentOnceClick(){this._showContent()}_addIntersectionObserver(){new IntersectionObserver((e,n)=>{this.isIntersecting=e[0].isIntersecting,this.isIntersecting&&n.unobserve(this)}).observe(this)}_appendNonScriptTag(t){this.querySelector(".toujou-third-party-content__templated-content").appendChild(t)}_appendScriptTag(t){const e=document.createElement("script"),n=this._copyScriptAttributesAndContent(t,e);return this.querySelector(".toujou-third-party-content__templated-content").appendChild(n),!n.hasAttribute("src")||n.hasAttribute("async")||n.hasAttribute("defer")?new Promise(o=>{o()}):new Promise(o=>{n.addEventListener("load",o)})}async _appendTags(t){for(let e=0;e<t.length;e++)await new Promise(n=>{t[e].tagName!=="SCRIPT"?n(this._appendNonScriptTag(t[e])):n(this._appendScriptTag(t[e]))})}_checkIfShouldShow(){this.contentTypeAllowed&&this.show&&this._showContent()}_clearRenderedContent(){this.querySelector(".toujou-third-party-content__templated-content").innerHTML=""}_copyScriptAttributesAndContent(t,e){for(let n=0;n<t.attributes.length;n++){const o=t.attributes[n];e.setAttribute(o.name,o.value)}return e.innerHTML=t.innerHTML,e}_getTemplateTags(t){const e=[],n=document.createElement("div");n.innerHTML=t;for(const o in n.childNodes)n.childNodes[o].nodeType!==3&&n.childNodes[o].parentElement===n&&e.push(n.childNodes[o]);return e}_handleSlotChange(){this._checkIfShouldShow()}_isCommentedTemplate(t){return t.startsWith("<!--")&&t.endsWith("-->")}_isContentTypeAllowed(){this._state.consents[this.contentType]?this.contentTypeAllowed=this._state.consents[this.contentType].consentGiven||!1:this.contentTypeAllowed=!1,window.location.hash==="#aaa"&&(this.contentTypeAllowed=!0)}_showContent(){this._clearRenderedContent(),this.shadowRoot.querySelector("#templatedContent").assignedNodes({flatten:!0}).filter(e=>e.tagName==="TEMPLATE").forEach(e=>{if(this.contentType==="html"){const n=this._uncommentTemplate(e),o=this._getTemplateTags(n);this._appendTags(o)}else{const n=document.importNode(e.content,!0);this.querySelector(".toujou-third-party-content__templated-content").appendChild(n)}}),this.setAttribute("showingcontent","")}_uncommentTemplate(t){return this._isCommentedTemplate(t.innerHTML)?t.innerHTML.substr(4,t.innerHTML.length-7):null}}r(i,"styles",[m]);customElements.define(i.is,i);
//# sourceMappingURL=toujou-third-party-content.js.map
