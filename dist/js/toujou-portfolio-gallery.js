import{i as e,s as t,y as r}from"./lit-element-7f3592a7.js";import{e as o}from"./custom-element-ff9a146d.js";import{e as i}from"./property-67fa6154.js";import"./query-assigned-elements-66edff90.js";const n=e`
  * {
    box-sizing: border-box;
  }

  :host {
    position: relative;
  }
`;var s,l,a,u,d=Object.defineProperty,c=Object.getOwnPropertyDescriptor,m=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?c(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&d(t,r,n),n},p=(e,t,r)=>(((e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)})(e,t,"read from private field"),r?r.call(e):t.get(e)),h=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)};let f=class extends t{constructor(){super(...arguments),h(this,s),h(this,a),this._currentImageIndex=1,this._imageCount=0}render(){return r`
            <slot id="slider" name="slider"></slot>
            <slot id="button" name="button" @click="${this._handleButtonClick}"></slot>
        `}_handleButtonClick(){var e;const t=null==(e=p(this,s,l))?void 0:e.querySelector(".slider-slide.is-active.is-visible .slider__item");t?t.click():p(this,a,u).click()}};s=new WeakSet,l=function(){var e;const t=null==(e=this.shadowRoot)?void 0:e.querySelector("#slider");if(!t)return null;return t.assignedElements({flatten:!0})[0]||null},a=new WeakSet,u=function(){var e;return(null==(e=p(this,s,l))?void 0:e.querySelector("a.slider__item"))||null},f.styles=[n],m([i({type:Number})],f.prototype,"_currentImageIndex",2),m([i({type:Number})],f.prototype,"_imageCount",2),f=m([o("toujou-portfolio-gallery")],f);
//# sourceMappingURL=toujou-portfolio-gallery.js.map
