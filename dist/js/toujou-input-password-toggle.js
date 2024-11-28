import{s as t,y as e}from"./lit-element-D9Ui1_BQ.js";class s extends t{static get is(){return"toujou-input-password-toggle"}static get properties(){return{passwordVisible:{type:Boolean,attribute:!1}}}constructor(){super(),this.passwordVisible=!1}render(){return e`
      <slot name="input"></slot>
      ${this.passwordVisible?e`<slot name="hide-password-button" @click="${this.handleToggleClick}"></slot>`:e`<slot name="show-password-button" @click="${this.handleToggleClick}"></slot>`}
    `}handleToggleClick(t){t.preventDefault(),t.stopPropagation();const e=this.inputElement,s="password"===(null==e?void 0:e.getAttribute("type"))?"text":"password";null==e||e.setAttribute("type",s),this.passwordVisible="text"===s}get inputElement(){var t,e;const s=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("slot");return null===s?null:null!==(e=null==s?void 0:s.assignedNodes({flatten:!0}).find((t=>"INPUT"===t.tagName)))&&void 0!==e?e:null}}customElements.define(s.is,s);
//# sourceMappingURL=toujou-input-password-toggle.js.map
