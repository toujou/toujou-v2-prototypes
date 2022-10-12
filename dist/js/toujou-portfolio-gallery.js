import{r as b,s as x,$ as y}from"./lit-element-f92abbea.js";import{n as v}from"./custom-element-fb5c5745.js";import{e as _}from"./property-19bdaa8a.js";import"./query-assigned-elements-39dd8e72.js";import{P as w,a as C}from"./photoswipe-lightbox.esm-38c17ed8.js";const S=b`
  * {
    box-sizing: border-box;
  }

  :host {
    position: relative;
  }
`;var I=Object.defineProperty,k=Object.getOwnPropertyDescriptor,p=(t,e,i,r)=>{for(var o=r>1?void 0:r?k(e,i):e,a=t.length-1,h;a>=0;a--)(h=t[a])&&(o=(r?h(e,i,o):h(o))||o);return r&&o&&I(e,i,o),o},L=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},n=(t,e,i)=>(L(t,e,"read from private field"),i?i.call(t):e.get(t)),u=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},s,g,c,f,d,m;let l=class extends x{constructor(){super(...arguments),u(this,s),u(this,c),u(this,d),this._currentImageIndex=1,this._imageCount=0,this._handleLightboxUiRegister=()=>{this.lightbox.pswp.ui.registerElement({name:"caption",order:9,isButton:!1,appendTo:"root",onInit:t=>{this.lightbox.pswp.on("change",()=>this._handleLightboxChange(t))}})},this._handleLightboxChange=t=>{let e="";const i=this.lightbox.pswp.currSlide.data.element||null,r=(i==null?void 0:i.querySelector("a.slider__item"))||null;r&&(e=r.getAttribute("title")),t.textContent=e||""}}connectedCallback(){super.connectedCallback(),this._initializeLightbox()}render(){return y`
            <slot id="slider" name="slider"></slot>
            <slot id="button" name="button" @click="${this._handleButtonClick}"></slot>
        `}_initializeLightbox(){this.lightbox=new w({gallery:n(this,d,m),children:".slider-slide",pswpModule:C,allowPanToNext:!0,preloaderDelay:0}),this.lightbox.on("uiRegister",()=>this._handleLightboxUiRegister()),this.lightbox.init()}_handleButtonClick(){var e;const t=(e=n(this,s,g))==null?void 0:e.querySelector(".slider-slide.is-active.is-visible .slider__item");t?t.click():n(this,c,f).click()}};s=new WeakSet;g=function(){var i;const t=(i=this.shadowRoot)==null?void 0:i.querySelector("#slider");return t&&t.assignedElements({flatten:!0})[0]||null};c=new WeakSet;f=function(){var e;return((e=n(this,s,g))==null?void 0:e.querySelector("a.slider__item"))||null};d=new WeakSet;m=function(){const t=this.getAttribute("id");return t?`#${t}`:void 0};l.styles=[S];p([_({type:Number})],l.prototype,"_currentImageIndex",2);p([_({type:Number})],l.prototype,"_imageCount",2);l=p([v("toujou-portfolio-gallery")],l);
//# sourceMappingURL=toujou-portfolio-gallery.js.map
