var r=Object.defineProperty;var h=(i,t,e)=>t in i?r(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var c=(i,t,e)=>(h(i,typeof t!="symbol"?t+"":t,e),e);import{i as d,s as l,y as u}from"./lit-element-9d8fde0b.js";import{c as p,d as C,u as _,a as g,b as m}from"./consentsStore-ae259671.js";import"./redux-2eeb5354.js";const b=d`
  :host {
    display: var(--toujou-consent-widget-display, block);
  }
`;class o extends l{static get is(){return"toujou-consent-widget"}render(){return u`
      <slot name="consentWidgetHeader"></slot>
      <slot id="consentElements"></slot>
      <slot name="consentWarning" id="consentWarning"></slot>
    `}static get styles(){return styles}set _warningVisible(t){this.setAttribute("warningvisible",t)}static get properties(){return{inPage:{type:Boolean,attribute:"in-page"},listenTo:{type:String},listenOn:{type:String},_warningVisible:{type:Boolean},deactivated:{type:Boolean}}}set listenTo(t){t.split(/\s+/).forEach(e=>{this.addEventListener(e,this._handleEvent)})}set _dismissedBox(t){this.inPage||(t?this.setAttribute("hidden",""):this.removeAttribute("hidden")),this._warningVisible=this.inPage&&!t}constructor(t){super(t),this.onStateChange=this.onStateChange.bind(this),this._handleEvent=this._handleEvent.bind(this),this.inPage=!1,this.deactivated=!1,this.store=p,this.store.subscribe(this.onStateChange),this.consentTypeNames=["tracking","html","maps","video"],this._state=this.store.getState(),this.listenOn="*",this._warningVisible=this.inPage,window.location.hash==="#aaa"&&(this.deactivated=!0),this.addEventListener("toujou-consent-connected",this._handleConsentConnected),this.addEventListener("toujou-consent-checkbox-changed",this._handleConsentCheckboxChanged)}connectedCallback(){super.connectedCallback(),this._inPage=this.inPage,this._dismissedBox=this._state.consents.consentBoxDismissed?this._state.consents.consentBoxDismissed:!1,this.deactivated&&setTimeout(()=>{this._prepareToSaveConsents(),this._dismissConsentBox(),this._dispatchConsentDeactivated()})}firstUpdated(){this.consentTypeNames.forEach(t=>{const e=this.querySelector(`toujou-consent[consenttype="${t}"]`);this._state.consents.consentBoxDismissed&&!this._state.consents[t]&&e&&this._undismissConsentBox()})}onStateChange(){this._state=this.store.getState(),this._dismissedBox=this._state.consents.consentBoxDismissed,this._updateAllConsentElementsStates()}_handleEvent(t){t.stopPropagation(),t.type==="click"&&!this._inPage&&t.target.matches(this.listenOn)&&this._handleConsentBoxSaveButtonClick(t.target)}_handleConsentCheckboxChanged(t){this.inPage&&this._state.consents.consentBoxDismissed===!0&&(this._prepareToSaveConsents(),this._dispatchAddSnackbar(t.target.getAttribute("snackbarmessage")))}_handleConsentBoxSaveButtonClick(t){this._prepareToSaveConsents(t.hasAttribute("accept-all")?!0:null),this._dismissConsentBox()}_prepareToSaveConsents(t=null){const e=this._getAllConsents(t);this._saveAllConsents(e)}_getAllConsents(t=null){const e={},n=this.querySelectorAll("toujou-consent");return n&&n.forEach(s=>{const a=s.getAttribute("consenttype");e[a]=this._createNewConsentData(s,t)}),e}_createNewConsentData(t,e=null){const n=t.querySelector(".consent__checkbox");e!==null&&(n.checked=e);const s=this._createConsentLifeInMillis(t.getAttribute("consenttype"),t.getAttribute("consentlifetime"));return{consentGiven:n.checked,consentCreationDate:Date.now(),consentExpirationDate:Date.now()+s,consentLifetime:s}}_createConsentLifeInMillis(t,e){return t==="tracking"?e==="0"?24*60*60*1e3*730:0:e*24*60*60}_dismissConsentBox(){this.store.dispatch(C()),this._dispatchConsentWidgetDismissedEvent()}_undismissConsentBox(){this.store.dispatch(_())}_saveAllConsents(t){this.store.dispatch(g(t))}_handleConsentConnected(t){this._setConsentElementState(t.target)}_setConsentElementState(t){if(t.tagName==="TOUJOU-CONSENT"){const e=t.getAttribute("consenttype"),n=t.getAttribute("prechecked")==="1";t.consentState=this._getConsentTypeState(this._state,e,n)}}_updateAllConsentElementsStates(){this.querySelectorAll("toujou-consent").forEach(e=>{this._setConsentElementState(e)})}_getConsentTypeState(t,e,n){let s=null;return!t||!t.consents||!t.consents[e]?s=null:s=t.consents[e],s?s&&this._isConsentExpired(s)?(this.store.dispatch(m(e)),this._dispatchConsentExpiredEvent(e),this._undismissConsentBox(),n):s&&!this._isConsentExpired(s)?s.consentGiven:s:n}_isConsentExpired(t){return t.consentCreationDate+t.consentLifetime>t.consentExpirationDate}_dispatchConsentExpiredEvent(t){const e=new CustomEvent("toujou-consent-expired",{bubbles:!0,composed:!0,detail:{consentType:t}});this.dispatchEvent(e)}_dispatchAddSnackbar(t){const e=new CustomEvent("toujou-add-snackbar",{bubbles:!0,composed:!0,detail:{message:t,type:"auto",duration:2500,variant:"success"}});this.dispatchEvent(e)}_dispatchConsentWidgetDismissedEvent(){const t=new CustomEvent("toujou-consent-widget-dismissed",{bubbles:!0,composed:!0});this.dispatchEvent(t)}_dispatchConsentDeactivated(){const t=new CustomEvent("toujou-consent-widget-deactivated",{bubbles:!0,composed:!0});this.dispatchEvent(t)}}c(o,"styles",[b]);customElements.define(o.is,o);
//# sourceMappingURL=toujou-consent-widget.js.map
