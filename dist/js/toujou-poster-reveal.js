import{_ as t}from"./tslib.es6-Br7-PHSQ.js";import{i as e,s,x as o}from"./lit-element-52TjfAhW.js";import{n as r}from"./property-BjK_DIN0.js";import"./query-assigned-elements-F9pHSIbK.js";var a=e`:host {
    display: var(--toujou-poster-reveal-display, block);
    position: var(--toujou-poster-reveal-position, relative);
}
`;class i extends s{constructor(){super(...arguments),this.activated=!1}static get is(){return"toujou-poster-reveal"}static get styles(){return a}activate(){this.activated||(this.activated=!0,this.dispatchEvent(new CustomEvent("toujou-poster-reveal-activate",{bubbles:!0,composed:!0})))}render(){return o`
      ${this.activated?o`
          <slot name="content"></slot>
    `:o`
          <slot name="poster"></slot>
          <slot name="trigger" @click=${this.activate}></slot>
        `}
    `}}t([r({type:Boolean,reflect:!0})],i.prototype,"activated",void 0),customElements.define(i.is,i);
//# sourceMappingURL=toujou-poster-reveal.js.map
