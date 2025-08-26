import{i as e,s as t,y as r}from"./lit-element-DtTU7p4v.js";import{e as o}from"./custom-element-DPYutfhb.js";import{e as i}from"./property-D5hxO1nL.js";import"./query-assigned-elements-DqqHV3QO.js";const s=e`
  * {
    box-sizing: border-box;
  }

  :host {
    position: relative;
  }
`;var n,l,a,u=Object.defineProperty,d=Object.getOwnPropertyDescriptor,c=e=>{throw TypeError(e)},m=(e,t,r,o)=>{for(var i,s=o>1?void 0:o?d(t,r):t,n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o?i(t,r,s):i(s))||s);return o&&s&&u(t,r,s),s},p=(e,t,r)=>(((e,t,r)=>{t.has(e)||c("Cannot "+r)})(e,t,"read from private field"),r?r.call(e):t.get(e));let h=class extends t{constructor(){var e,t,r;super(...arguments),e=this,(t=n).has(e)?c("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),this._currentImageIndex=1,this._imageCount=0}render(){return r`
            <slot id="slider" name="slider"></slot>
            <slot id="button" name="button" @click="${this._handleButtonClick}"></slot>
        `}_handleButtonClick(){var e;const t=null==(e=p(this,n,l))?void 0:e.querySelector(".slider-slide.is-active.is-visible .slider__item");t?t.click():p(this,n,a).click()}};n=new WeakSet,l=function(){var e;const t=null==(e=this.shadowRoot)?void 0:e.querySelector("#slider");if(!t)return null;return t.assignedElements({flatten:!0})[0]||null},a=function(){var e;return(null==(e=p(this,n,l))?void 0:e.querySelector("a.slider__item"))||null},h.styles=[s],m([i({type:Number})],h.prototype,"_currentImageIndex",2),m([i({type:Number})],h.prototype,"_imageCount",2),h=m([o("toujou-portfolio-gallery")],h);
//# sourceMappingURL=toujou-portfolio-gallery.js.map
