import{s as u}from"./lit-element-8ef55b20.js";import{n as h}from"./custom-element-25a61773.js";import{e as i}from"./property-1027a1df.js";import"./query-assigned-elements-acf341e1.js";import{S as c}from"./splide.esm-b0b87a49.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function p(r){return i({...r,state:!0})}var _=Object.defineProperty,b=Object.getOwnPropertyDescriptor,t=(r,l,a,o)=>{for(var s=o>1?void 0:o?b(l,a):l,n=r.length-1,d;n>=0;n--)(d=r[n])&&(s=(o?d(l,a,s):d(s))||s);return o&&s&&_(l,a,s),s};let e=class extends u{constructor(){super(),this.splideContainer=null,this.showCount=!1,this.autoplay=!1,this._currentIndexCountElement=null,this._totalSlidesCountElement=null,this._numberOfSlides=0,this._activeSlideIndex=1,this.slidesToShow=1,this.slidesPerMove=1,this.sliderType="loop",this.sliderGap="0",this.autoplayInterval="6000",this.sliderBreakpoints=null,this.sliderPadding="0",this.sliderFocusCenter=!1,this.sliderAspectRatio="0.5625",this.arrowPrevAriaLabel="",this.arrowNextAriaLabel="",this.arrowFirstAriaLabel="",this.arrowLastAriaLabel="",this._handlePaginationUpdate=this._handlePaginationUpdate.bind(this),this._handleSliderMount=this._handleSliderMount.bind(this)}createRenderRoot(){return this}firstUpdated(){if(this.splideContainer=this.querySelector(".splide")||null,this.splideContainer)this._initSlider();else{console.error("TOUJOU: Could not get necessary elements to initialize the slider");return}}_initSlider(){let r={classes:{pagination:"splide__pagination slider-bullets",page:"splide__pagination__page slider-bullets__bullet"},type:this.sliderType,autoplay:this.autoplay,interval:this.autoplayInterval,pauseOnHover:this.autoplay,pauseOnFocus:this.autoplay,perPage:parseInt(String(this.slidesToShow)),perMove:this.slidesPerMove,gap:this.sliderGap,heightRatio:this.sliderAspectRatio,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"},padding:this.sliderPadding,i18n:{prev:this.arrowPrevAriaLabel,next:this.arrowNextAriaLabel,first:this.arrowFirstAriaLabel,last:this.arrowLastAriaLabel}};this.sliderFocusCenter==="true"&&(r.focus="center",r.trimSpace=!1),this.sliderBreakpoints&&(r.breakpoints=JSON.parse(this.sliderBreakpoints)),this.splideSlider=new c(this.splideContainer,r),this.splideSlider.on("mounted",this._handleSliderMount),this.splideSlider.on("moved",this._handlePaginationUpdate),this.splideSlider.mount()}_handleSliderMount(){this._getCountInfo(),this._initCount(),this.dispatchEvent(new CustomEvent("toujou-slider-mounted",{bubbles:!0,composed:!0,detail:{el:this.splideSlider}}))}_getCountInfo(){this._currentIndexCountElement=this.querySelector(".slider-count__current"),this._totalSlidesCountElement=this.querySelector(".slider-count__total")}_initCount(){this._numberOfSlides=this.splideSlider.Components.Elements.slides.length,this._updateSliderCount()}_handlePaginationUpdate(r){this._activeSlideIndex=r+1,this._updateSliderCount(),this.dispatchEvent(new CustomEvent("toujou-slider-moved",{bubbles:!0,composed:!0,detail:{el:this.splideSlider,activeIndex:this._activeSlideIndex}}))}_updateSliderCount(){this._currentIndexCountElement.textContent=String(this._activeSlideIndex),this._totalSlidesCountElement.textContent=String(this._numberOfSlides)}};t([i({type:Object})],e.prototype,"splideContainer",2);t([i({type:Boolean,attribute:"show-count"})],e.prototype,"showCount",2);t([i({type:Boolean,attribute:"auto-play"})],e.prototype,"autoplay",2);t([i()],e.prototype,"_currentIndexCountElement",2);t([i()],e.prototype,"_totalSlidesCountElement",2);t([p()],e.prototype,"_numberOfSlides",2);t([p()],e.prototype,"_activeSlideIndex",2);t([i()],e.prototype,"splideSlider",2);t([i({reflect:!0,attribute:"slides-to-show"})],e.prototype,"slidesToShow",2);t([i({reflect:!0,attribute:"slides-per-move"})],e.prototype,"slidesPerMove",2);t([i({reflect:!0,attribute:"slider-type"})],e.prototype,"sliderType",2);t([i({reflect:!0,attribute:"slider-gap"})],e.prototype,"sliderGap",2);t([i({reflect:!0,attribute:"autoplay-interval"})],e.prototype,"autoplayInterval",2);t([i({reflect:!0,attribute:"slider-breakpoints"})],e.prototype,"sliderBreakpoints",2);t([i({reflect:!0,attribute:"slider-padding"})],e.prototype,"sliderPadding",2);t([i({reflect:!0,attribute:"slider-focus-center"})],e.prototype,"sliderFocusCenter",2);t([i({reflect:!0,attribute:"slider-aspect-ratio"})],e.prototype,"sliderAspectRatio",2);t([i({attribute:"arrow-prev-aria-label"})],e.prototype,"arrowPrevAriaLabel",2);t([i({attribute:"arrow-next-aria-label"})],e.prototype,"arrowNextAriaLabel",2);t([i({attribute:"arrow-first-aria-label"})],e.prototype,"arrowFirstAriaLabel",2);t([i({attribute:"arrow-last-aria-label"})],e.prototype,"arrowLastAriaLabel",2);e=t([h("toujou-slider")],e);
//# sourceMappingURL=toujou-slider.js.map
