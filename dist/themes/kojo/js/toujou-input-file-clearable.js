import{s as t,A as e,x as l}from"./lit-element-STRtOusB.js";class n extends t{static get is(){return"toujou-input-file-clearable"}static get properties(){return{hasFile:{type:Boolean,attribute:"has-file",reflect:!0}}}constructor(){super(),this.hasFile=!1}render(){return l`
      <slot name="input" @change="${this.handleInputChange}"></slot>
      ${this.hasFile?l`
        <slot name="clear-button" @click="${this.handleButtonClick}"></slot>`:e}
    `}handleInputChange(t){const e=t.target;this.hasFile=(null==e?void 0:e.files.length)>0}handleButtonClick(t){t.preventDefault(),t.stopPropagation();const e=this.fileInputElement;e&&(e.value="",this.hasFile=!1,e.focus())}get fileInputElement(){var t,e;const l=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector('slot[name="input"]');if(null===l)return null;return null!==(e=null==l?void 0:l.assignedNodes({flatten:!0}).find(t=>"INPUT"===t.tagName&&null!==t.files))&&void 0!==e?e:null}}customElements.define(n.is,n);
//# sourceMappingURL=toujou-input-file-clearable.js.map
