import{s as n}from"./lit-element-4f5b1f7c.js";import{n as h}from"./custom-element-fb5c5745.js";import{e as r}from"./property-19bdaa8a.js";import"./query-assigned-elements-39dd8e72.js";import{S as _}from"./splide.esm-c5925f0b.js";var u=Object.defineProperty,c=Object.getOwnPropertyDescriptor,i=(t,l,a,d)=>{for(var s=d>1?void 0:d?c(l,a):l,o=t.length-1,p;o>=0;o--)(p=t[o])&&(s=(d?p(l,a,s):p(s))||s);return d&&s&&u(l,a,s),s};let e=class extends n{constructor(){super(),this.splideContainer=null,this._maxCardWidth=null,this._cardGap=null,this._cardWidthWithGap=null,this._sliderWidth=null,this._slidesThatFitIntoScreen=null,this._numberOfSlidesInSlider=0,this._isSlide=!1,this._resizeObserver=null,this._resizeObserver=new ResizeObserver(t=>{t.forEach(()=>this._updateUI())})}connectedCallback(){super.connectedCallback(),this._resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver.unobserve(this)}createRenderRoot(){return this}firstUpdated(){if(this._updateCustomProperties(),this._numberOfSlidesInSlider=this.querySelectorAll(".cover-slider__item").length,this.splideContainer=this.querySelector(".splide")||null,this.splideContainer)this._initSlider(),this._updateUI();else{console.error("TOUJOU: Could not get necessary elements to initialize the slider");return}}_initSlider(){this._slidesThatFitIntoScreen=this._calculateSlidesThatFitIntoScreen();const t={classes:{pagination:"splide__pagination slider-bullets",page:"splide__pagination__page slider-bullets__bullet"},type:this._isSlide?"loop":"slide",autoplay:!1,perPage:Math.floor(this._slidesThatFitIntoScreen),perMove:1,gap:this._cardGap,padding:{right:this._calculatePadding()},width:this._cardWidthWithGap,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};this.splideSlider=new _(this.splideContainer,t),this.splideSlider.mount()}_updateSliderOptions(){this.splideSlider&&(this.splideSlider.destroy(),this._initSlider())}_updateUI(){this._updateCustomProperties(),this._isSlide=this._slidesThatFitIntoScreen<=this._numberOfSlidesInSlider,this._updateSliderOptions()}_updateCustomProperties(){const t=getComputedStyle(this);this._maxCardWidth=+t.getPropertyValue("--cover-slider-card-max-width"),this._cardGap=+t.getPropertyValue("--cover-slider-card-gap"),this._cardWidthWithGap=this._maxCardWidth+this._cardGap}_calculateSlidesThatFitIntoScreen(){return this._sliderWidth=this.getBoundingClientRect().width,Math.ceil(this._sliderWidth/this._cardWidthWithGap)+.5}_calculatePadding(){const t=this._slidesThatFitIntoScreen*2;return`${100/t}%`}};i([r({type:Object})],e.prototype,"splideContainer",2);i([r()],e.prototype,"splideSlider",2);i([r({type:Number})],e.prototype,"_maxCardWidth",2);i([r({type:Number})],e.prototype,"_cardGap",2);i([r({type:Number})],e.prototype,"_cardWidthWithGap",2);i([r({type:Number})],e.prototype,"_sliderWidth",2);i([r({type:Number})],e.prototype,"_slidesThatFitIntoScreen",2);i([r({type:Number})],e.prototype,"_numberOfSlidesInSlider",2);i([r({type:Boolean,reflect:!0,attribute:"is-slider"})],e.prototype,"_isSlide",2);i([r({type:ResizeObserver})],e.prototype,"_resizeObserver",2);e=i([h("toujou-cover-slider")],e);
//# sourceMappingURL=toujou-cover-slider.js.map