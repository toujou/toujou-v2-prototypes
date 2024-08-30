import{s as e}from"./lit-element-7f3592a7.js";import{e as t}from"./custom-element-ff9a146d.js";import{e as i}from"./property-67fa6154.js";import"./query-assigned-elements-66edff90.js";import{S as s}from"./splide.esm-83596605.js";var r=Object.defineProperty,d=Object.getOwnPropertyDescriptor,l=(e,t,i,s)=>{for(var l,a=s>1?void 0:s?d(t,i):t,o=e.length-1;o>=0;o--)(l=e[o])&&(a=(s?l(t,i,a):l(a))||a);return s&&a&&r(t,i,a),a};let a=class extends e{constructor(){super(),this.splideContainer=null,this._maxCardWidth=null,this._cardGap=null,this._cardWidthWithGap=null,this._sliderWidth=null,this._slidesThatFitIntoScreen=null,this._numberOfSlidesInSlider=0,this._isSlide=!1,this._resizeObserver=null,this._resizeObserver=new ResizeObserver((e=>{e.forEach((()=>this._updateUI()))}))}connectedCallback(){super.connectedCallback(),this._resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver.unobserve(this)}createRenderRoot(){return this}firstUpdated(){this._updateCustomProperties(),this._numberOfSlidesInSlider=this.querySelectorAll(".cover-slider__item").length,this.splideContainer=this.querySelector(".splide")||null,this.splideContainer?(this._initSlider(),this._updateUI()):console.error("TOUJOU: Could not get necessary elements to initialize the slider")}_initSlider(){this._slidesThatFitIntoScreen=this._calculateSlidesThatFitIntoScreen();const e={classes:{pagination:"splide__pagination slider-bullets",page:"splide__pagination__page slider-bullets__bullet"},type:this._isSlide?"loop":"slide",autoplay:!1,perPage:Math.floor(this._slidesThatFitIntoScreen),perMove:1,gap:this._cardGap,padding:{right:this._calculatePadding()},width:this._cardWidthWithGap,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};this.splideSlider=new s(this.splideContainer,e),this.splideSlider.mount()}_updateSliderOptions(){this.splideSlider&&(this.splideSlider.destroy(),this._initSlider())}_updateUI(){this._updateCustomProperties(),this._isSlide=this._slidesThatFitIntoScreen<=this._numberOfSlidesInSlider,this._updateSliderOptions()}_updateCustomProperties(){const e=getComputedStyle(this);this._maxCardWidth=+e.getPropertyValue("--cover-slider-card-max-width"),this._cardGap=+e.getPropertyValue("--cover-slider-card-gap"),this._cardWidthWithGap=this._maxCardWidth+this._cardGap}_calculateSlidesThatFitIntoScreen(){return this._sliderWidth=this.getBoundingClientRect().width,Math.ceil(this._sliderWidth/this._cardWidthWithGap)+.5}_calculatePadding(){return 100/(2*this._slidesThatFitIntoScreen)+"%"}};l([i({type:Object})],a.prototype,"splideContainer",2),l([i()],a.prototype,"splideSlider",2),l([i({type:Number})],a.prototype,"_maxCardWidth",2),l([i({type:Number})],a.prototype,"_cardGap",2),l([i({type:Number})],a.prototype,"_cardWidthWithGap",2),l([i({type:Number})],a.prototype,"_sliderWidth",2),l([i({type:Number})],a.prototype,"_slidesThatFitIntoScreen",2),l([i({type:Number})],a.prototype,"_numberOfSlidesInSlider",2),l([i({type:Boolean,reflect:!0,attribute:"is-slider"})],a.prototype,"_isSlide",2),l([i({type:ResizeObserver})],a.prototype,"_resizeObserver",2),a=l([t("toujou-cover-slider")],a);
//# sourceMappingURL=toujou-cover-slider.js.map
