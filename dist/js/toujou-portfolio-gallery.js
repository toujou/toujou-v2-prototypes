import{i as b,s as x,y}from"./lit-element-9d8fde0b.js";import{e as v}from"./custom-element-73470d87.js";import{e as _}from"./property-1027a1df.js";import"./query-assigned-elements-acf341e1.js";import{P as w,a as S,b as C}from"./index-f6667471.js";const I=b`
  * {
    box-sizing: border-box;
  }

  :host {
    position: relative;
  }
`;var P=Object.defineProperty,k=Object.getOwnPropertyDescriptor,p=(t,e,i,o)=>{for(var r=o>1?void 0:o?k(e,i):e,a=t.length-1,h;a>=0;a--)(h=t[a])&&(r=(o?h(e,i,r):h(r))||r);return o&&r&&P(e,i,r),r},L=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},s=(t,e,i)=>(L(t,e,"read from private field"),i?i.call(t):e.get(t)),u=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},n,g,d,f,c,m;let l=class extends x{constructor(){super(...arguments),u(this,n),u(this,d),u(this,c),this._currentImageIndex=1,this._imageCount=0,this._handleLightboxUiRegister=()=>{this.lightbox.pswp.ui.registerElement({name:"caption",order:9,isButton:!1,appendTo:"root",onInit:t=>{this.lightbox.pswp.on("change",()=>this._handleLightboxChange(t))}})},this._handleLightboxChange=t=>{let e="";const i=this.lightbox.pswp.currSlide.data.element||null,o=(i==null?void 0:i.querySelector("a.slider__item"))||null;o&&(e=o.getAttribute("title")),t.textContent=e||""}}connectedCallback(){super.connectedCallback(),this._initializeLightbox()}render(){return y`
            <slot id="slider" name="slider"></slot>
            <slot id="button" name="button" @click="${this._handleButtonClick}"></slot>
        `}_initializeLightbox(){this.lightbox=new w({gallery:s(this,c,m),children:".slider-slide",pswpModule:S,allowPanToNext:!0,preloaderDelay:0}),this.lightbox.on("uiRegister",()=>this._handleLightboxUiRegister()),this.videoPlugin=new C(this.lightbox,{autoplay:!1}),this.lightbox.init()}_handleButtonClick(){var e;const t=(e=s(this,n,g))==null?void 0:e.querySelector(".slider-slide.is-active.is-visible .slider__item");t?t.click():s(this,d,f).click()}};n=new WeakSet;g=function(){var i;const t=(i=this.shadowRoot)==null?void 0:i.querySelector("#slider");return t&&t.assignedElements({flatten:!0})[0]||null};d=new WeakSet;f=function(){var e;return((e=s(this,n,g))==null?void 0:e.querySelector("a.slider__item"))||null};c=new WeakSet;m=function(){const t=this.getAttribute("id");return t?`#${t}`:void 0};l.styles=[I];p([_({type:Number})],l.prototype,"_currentImageIndex",2);p([_({type:Number})],l.prototype,"_imageCount",2);l=p([v("toujou-portfolio-gallery")],l);
//# sourceMappingURL=toujou-portfolio-gallery.js.map
