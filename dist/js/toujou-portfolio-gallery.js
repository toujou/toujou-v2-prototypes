import{r as y,s as v,$ as b}from"./lit-element-ca41d87b.js";import{n as x}from"./custom-element-fb5c5745.js";import{e as f}from"./property-19bdaa8a.js";import"./query-assigned-elements-39dd8e72.js";import{P as w,a as C}from"./photoswipe-lightbox.esm-38c17ed8.js";const S=y`
  * {
    box-sizing: border-box;
  }

  :host {
    position: relative;
  }

  .pagination {
    margin: 0;
    display: var(--toujou-portfolio-gallery-pagination-display, block);
    position: var(--toujou-portfolio-gallery-pagination-position, relative);
    top: var(--toujou-portfolio-gallery-pagination-top, unset);
    right: var(--toujou-portfolio-gallery-pagination-right, unset);
    bottom: var(--toujou-portfolio-gallery-pagination-bottom, unset);
    left: var(--toujou-portfolio-gallery-pagination-left, unset);
    padding: var(--toujou-portfolio-gallery-pagination-padding, .5rem);
    font-size: var(--toujou-portfolio-gallery-pagination-font-size, .75rem);
    color: var(--toujou-portfolio-gallery-pagination-color, #000);
    background-color: var(--toujou-portfolio-gallery-pagination-background-color, #fff);
    border-radius: var(--toujou-portfolio-gallery-pagination-border-radius, .125rem);
  }
`;var k=Object.defineProperty,I=Object.getOwnPropertyDescriptor,h=(t,o,e,i)=>{for(var r=i>1?void 0:i?I(o,e):o,s=t.length-1,u;s>=0;s--)(u=t[s])&&(r=(i?u(o,e,r):u(r))||r);return i&&r&&k(o,e,r),r},j=(t,o,e)=>{if(!o.has(t))throw TypeError("Cannot "+e)},n=(t,o,e)=>(j(t,o,"read from private field"),e?e.call(t):o.get(t)),p=(t,o,e)=>{if(o.has(t))throw TypeError("Cannot add the same private member more than once");o instanceof WeakSet?o.add(t):o.set(t,e)},a,c,g,_,d,m;let l=class extends v{constructor(){super(...arguments),p(this,a),p(this,g),p(this,d),this._currentImageIndex=1,this._imageCount=0,this._handleLightboxUiRegister=()=>{this.lightbox.pswp.ui.registerElement({name:"caption",order:9,isButton:!1,appendTo:"root",onInit:t=>{this.lightbox.pswp.on("change",()=>this._handleLightboxChange(t))}})},this._handleLightboxChange=t=>{let o="";const e=this.lightbox.pswp.currSlide.data.element||null,i=(e==null?void 0:e.querySelector("a.slider__item"))||null;i&&(o=i.getAttribute("title")),t.textContent=o||""}}connectedCallback(){super.connectedCallback(),this._initializeLightbox()}render(){return b`
            <slot id="slider" name="slider"></slot>
            <slot id="button" name="button" @click="${this._handleButtonClick}"></slot>
        `}_initializeLightbox(){this.lightbox=new w({gallery:n(this,d,m),children:".slider-slide",pswpModule:C,allowPanToNext:!0,preloaderDelay:0}),this.lightbox.on("uiRegister",()=>this._handleLightboxUiRegister()),this.lightbox.init()}_handleButtonClick(){var o;const t=(o=n(this,a,c))==null?void 0:o.querySelector(".slider-slide.is-active.is-visible .slider__item");t?t.click():n(this,g,_).click()}};a=new WeakSet;c=function(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("#slider");return t&&t.assignedElements({flatten:!0})[0]||null};g=new WeakSet;_=function(){var o;return((o=n(this,a,c))==null?void 0:o.querySelector("a.slider__item"))||null};d=new WeakSet;m=function(){const t=this.getAttribute("id");return t?`#${t}`:void 0};l.styles=[S];h([f({type:Number})],l.prototype,"_currentImageIndex",2);h([f({type:Number})],l.prototype,"_imageCount",2);l=h([x("toujou-portfolio-gallery")],l);
//# sourceMappingURL=toujou-portfolio-gallery.js.map
