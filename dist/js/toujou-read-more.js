import{i as t,s as e,x as o}from"./lit-element-CHDbfp5U.js";class s extends e{static get is(){return"toujou-read-more"}constructor(){super(),this.maxLines=3,this.hasClampedText=!0,this.showButton=!1}firstUpdated(){var t;this.style.setProperty("--toujou-read-more-max-lines",this.maxLines.toString()),requestAnimationFrame((()=>this._checkOverflow()));const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("slot:not([name])");e&&e.addEventListener("slotchange",(()=>{const t=e.assignedElements({flatten:!0});if(t.length>0){t.forEach((t=>t instanceof HTMLElement?t.style.marginBottom="":null));const e=t[t.length-1];e&&(e.style.marginBottom="0")}})),this._setupSlotListeners(),this._setupButtonAccessibility(),this.dispatchEvent(new CustomEvent("toujou-read-more-ready",{bubbles:!0,composed:!0}))}disconnectedCallback(){super.disconnectedCallback()}updated(t){t.has("maxLines")&&(this.style.setProperty("--toujou-read-more-max-lines",this.maxLines.toString()),requestAnimationFrame((()=>this._checkOverflow()))),(t.has("hasClampedText")||t.has("showButton"))&&this.updateComplete.then((()=>{this._setupButtonAccessibility()}))}_setupSlotListeners(){var t,e;const o=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector('slot[name="open-button"]'),s=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('slot[name="close-button"]');o&&o.addEventListener("slotchange",(()=>{requestAnimationFrame((()=>this._setupButtonAccessibility()))})),s&&s.addEventListener("slotchange",(()=>{requestAnimationFrame((()=>this._setupButtonAccessibility()))}))}_setupButtonAccessibility(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".content"),o=Array.from(this.querySelectorAll('[slot="open-button"]')),s=Array.from(this.querySelectorAll('[slot="close-button"]'));o.forEach((t=>{t.setAttribute("aria-controls",(null==e?void 0:e.id)||"read-more-content"),this.hasClampedText&&this.showButton?(t.setAttribute("aria-expanded","false"),t.removeAttribute("aria-hidden"),t.removeAttribute("tabindex")):(t.setAttribute("aria-hidden","true"),t.setAttribute("tabindex","-1"))})),s.forEach((t=>{t.setAttribute("aria-controls",(null==e?void 0:e.id)||"read-more-content"),!this.hasClampedText&&this.showButton?(t.setAttribute("aria-expanded","true"),t.removeAttribute("aria-hidden"),t.removeAttribute("tabindex")):(t.setAttribute("aria-hidden","true"),t.setAttribute("tabindex","-1"))}))}async _checkOverflow(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".content");if(!e)return void console.warn("toujou-read-more: .content not found");this.hasClampedText=!1,await this.updateComplete;const o=e.scrollHeight;this.hasClampedText=!0,await this.updateComplete;const s=e.clientHeight;this.showButton=o>s,this.hasClampedText=this.showButton}_toggleClamp(){this.hasClampedText=!this.hasClampedText,this.dispatchEvent(new CustomEvent("toujou-read-more-toggle",{detail:{isClamped:this.hasClampedText},bubbles:!0,composed:!0}))}render(){return o`
      <div id="read-more-content" class="content" role="region" aria-label="Expandable content" part="content">
        <slot></slot>
      </div>

      ${this.showButton?o`
          <div class="buttons" @click=${this._toggleClamp} part="buttons">
            ${this.hasClampedText?o`<slot name="open-button"></slot>`:o`<slot name="close-button"></slot>`}
          </div>
        `:""}
    `}}s.properties={maxLines:{type:Number,attribute:"max-lines"},hasClampedText:{type:Boolean,reflect:!0,attribute:"has-clamped-text"},showButton:{type:Boolean,state:!0}},s.styles=t`
    :host {
      display: block;
    }

    :host([has-clamped-text]) .content {
      -webkit-line-clamp: var(--toujou-read-more-max-lines, 3);
    }

    :host(:not([has-clamped-text])) .content {
      -webkit-line-clamp: unset;
    }

    .content {
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }

    .buttons {
      margin-top: var(--spacing-normal);
      display: inline-block;
    }
  `,customElements.define(s.is,s);
//# sourceMappingURL=toujou-read-more.js.map
