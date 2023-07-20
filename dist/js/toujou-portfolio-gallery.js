import{i as h,s as v,y as g}from"./lit-element-6fe74b4f.js";import{e as y}from"./custom-element-73470d87.js";import{e as p}from"./property-1027a1df.js";import"./query-assigned-elements-acf341e1.js";const C=h`
  * {
    box-sizing: border-box;
  }

  :host {
    position: relative;
  }
`;var S=Object.defineProperty,I=Object.getOwnPropertyDescriptor,d=(t,e,r,o)=>{for(var i=o>1?void 0:o?I(e,r):e,l=t.length-1,a;l>=0;l--)(a=t[l])&&(i=(o?a(e,r,i):a(i))||i);return o&&i&&S(e,r,i),i},k=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)},u=(t,e,r)=>(k(t,e,"read from private field"),r?r.call(t):e.get(t)),f=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)},n,_,c,m;let s=class extends v{constructor(){super(...arguments),f(this,n),f(this,c),this._currentImageIndex=1,this._imageCount=0}render(){return g`
            <slot id="slider" name="slider"></slot>
            <slot id="button" name="button" @click="${this._handleButtonClick}"></slot>
        `}_handleButtonClick(){var e;const t=(e=u(this,n,_))==null?void 0:e.querySelector(".slider-slide.is-active.is-visible .slider__item");t?t.click():u(this,c,m).click()}};n=new WeakSet;_=function(){var r;const t=(r=this.shadowRoot)==null?void 0:r.querySelector("#slider");return t&&t.assignedElements({flatten:!0})[0]||null};c=new WeakSet;m=function(){var e;return((e=u(this,n,_))==null?void 0:e.querySelector("a.slider__item"))||null};s.styles=[C];d([p({type:Number})],s.prototype,"_currentImageIndex",2);d([p({type:Number})],s.prototype,"_imageCount",2);s=d([y("toujou-portfolio-gallery")],s);
//# sourceMappingURL=toujou-portfolio-gallery.js.map
