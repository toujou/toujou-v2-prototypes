class e extends HTMLElement{connectedCallback(){this.addEventListener("mouseenter",this._onMouseEnter),this.addEventListener("mouseleave",this._onMouseLeave)}disconnectedCallback(){this.removeEventListener("mouseenter",this._onMouseEnter),this.removeEventListener("mouseleave",this._onMouseLeave)}_onMouseEnter(){this.dispatchEvent(new CustomEvent("toujou-location-finder-teaser-mouse-enter",{composed:!0,detail:{featureUid:this.getAttribute("feature-uid")}}))}_onMouseLeave(){this.dispatchEvent(new CustomEvent("toujou-location-finder-teaser-mouse-leave",{composed:!0}))}}customElements.define("toujou-location-finder-teaser",e);
//# sourceMappingURL=toujou-location-finder-teaser.js.map