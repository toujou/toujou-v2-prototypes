import{s as e}from"./lit-element-D9Ui1_BQ.js";import{e as t}from"./custom-element-DPYutfhb.js";import{e as i}from"./property-D5hxO1nL.js";import"./query-assigned-elements-CrfAJxAz.js";import{S as r}from"./splide.esm-wa_TeE-T.js";function s(e){return i({...e,state:!0})}var o=Object.defineProperty,l=Object.getOwnPropertyDescriptor,a=(e,t,i,r)=>{for(var s,a=r>1?void 0:r?l(t,i):t,n=e.length-1;n>=0;n--)(s=e[n])&&(a=(r?s(t,i,a):s(a))||a);return r&&a&&o(t,i,a),a};let n=class extends e{constructor(){super(),this.splideContainer=null,this.showCount=!1,this.autoplay=!1,this._currentIndexCountElement=null,this._totalSlidesCountElement=null,this._numberOfSlides=0,this._activeSlideIndex=1,this.slidesToShow=1,this.slidesPerMove=1,this.sliderType="loop",this.sliderGap="0",this.autoplayInterval="6000",this.sliderBreakpoints=null,this.sliderPadding="0",this.sliderFocusCenter=!1,this.sliderAspectRatio="0.5625",this.sliderClonesAmount=null,this.arrowPrevAriaLabel="",this.arrowNextAriaLabel="",this.arrowFirstAriaLabel="",this.arrowLastAriaLabel="",this._handlePaginationUpdate=this._handlePaginationUpdate.bind(this),this._handleSliderMount=this._handleSliderMount.bind(this)}createRenderRoot(){return this}firstUpdated(){this.splideContainer=this.querySelector(".splide")||null,this.splideContainer?this._initSlider():console.error("TOUJOU: Could not get necessary elements to initialize the slider")}_initSlider(){let e={classes:{pagination:"splide__pagination slider-bullets",page:"splide__pagination__page slider-bullets__bullet"},type:this.sliderType,autoplay:this.autoplay,interval:this.autoplayInterval,pauseOnHover:this.autoplay,pauseOnFocus:this.autoplay,perPage:parseInt(String(this.slidesToShow)),perMove:this.slidesPerMove,gap:this.sliderGap,heightRatio:this.sliderAspectRatio,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"},padding:this.sliderPadding,i18n:{prev:this.arrowPrevAriaLabel,next:this.arrowNextAriaLabel,first:this.arrowFirstAriaLabel,last:this.arrowLastAriaLabel},focusableNodes:"*"};"true"===this.sliderFocusCenter&&(e.focus="center",e.trimSpace=!1),this.sliderBreakpoints&&(e.breakpoints=JSON.parse(this.sliderBreakpoints)),this.sliderClonesAmount&&(e.clones=this.sliderClonesAmount),this.splideSlider=new r(this.splideContainer,e),this.splideSlider.on("mounted",this._handleSliderMount),this.splideSlider.on("moved",this._handlePaginationUpdate),this.splideSlider.mount()}_handleSliderMount(){this._getCountInfo(),this._initCount(),this._removeSlidesTabpanelRole(),this.dispatchEvent(new CustomEvent("toujou-slider-mounted",{bubbles:!0,composed:!0,detail:{el:this.splideSlider}}))}_removeSlidesTabpanelRole(){const e=this.splideSlider.root.querySelectorAll('*[role="tabpanel"]');e&&e.forEach((e=>{e.removeAttribute("role"),e.removeAttribute("aria-label")}))}_getCountInfo(){this._currentIndexCountElement=this.querySelector(".slider-count__current"),this._totalSlidesCountElement=this.querySelector(".slider-count__total")}_initCount(){this._numberOfSlides=this.splideSlider.Components.Elements.slides.length,this._updateSliderCount()}_handlePaginationUpdate(e){this._activeSlideIndex=e+1,this._updateSliderCount(),this.dispatchEvent(new CustomEvent("toujou-slider-moved",{bubbles:!0,composed:!0,detail:{el:this.splideSlider,activeIndex:this._activeSlideIndex}}))}_updateSliderCount(){this._currentIndexCountElement.textContent=String(this._activeSlideIndex),this._totalSlidesCountElement.textContent=String(this._numberOfSlides)}};a([i({type:Object})],n.prototype,"splideContainer",2),a([i({type:Boolean,attribute:"show-count"})],n.prototype,"showCount",2),a([i({type:Boolean,attribute:"auto-play"})],n.prototype,"autoplay",2),a([i()],n.prototype,"_currentIndexCountElement",2),a([i()],n.prototype,"_totalSlidesCountElement",2),a([s()],n.prototype,"_numberOfSlides",2),a([s()],n.prototype,"_activeSlideIndex",2),a([i()],n.prototype,"splideSlider",2),a([i({reflect:!0,attribute:"slides-to-show"})],n.prototype,"slidesToShow",2),a([i({reflect:!0,attribute:"slides-per-move"})],n.prototype,"slidesPerMove",2),a([i({reflect:!0,attribute:"slider-type"})],n.prototype,"sliderType",2),a([i({reflect:!0,attribute:"slider-gap"})],n.prototype,"sliderGap",2),a([i({reflect:!0,attribute:"auto-play-interval"})],n.prototype,"autoplayInterval",2),a([i({reflect:!0,attribute:"slider-breakpoints"})],n.prototype,"sliderBreakpoints",2),a([i({reflect:!0,attribute:"slider-padding"})],n.prototype,"sliderPadding",2),a([i({reflect:!0,attribute:"slider-focus-center"})],n.prototype,"sliderFocusCenter",2),a([i({reflect:!0,attribute:"slider-aspect-ratio"})],n.prototype,"sliderAspectRatio",2),a([i({reflect:!0,attribute:"slider-clones-amount"})],n.prototype,"sliderClonesAmount",2),a([i({attribute:"arrow-prev-aria-label"})],n.prototype,"arrowPrevAriaLabel",2),a([i({attribute:"arrow-next-aria-label"})],n.prototype,"arrowNextAriaLabel",2),a([i({attribute:"arrow-first-aria-label"})],n.prototype,"arrowFirstAriaLabel",2),a([i({attribute:"arrow-last-aria-label"})],n.prototype,"arrowLastAriaLabel",2),n=a([t("toujou-slider")],n);
//# sourceMappingURL=toujou-slider.js.map
