import{s as u}from"./lit-element-ca41d87b.js";import{n as h}from"./custom-element-fb5c5745.js";import{e as i}from"./property-19bdaa8a.js";import"./query-assigned-elements-39dd8e72.js";import{S as _}from"./splide.esm-c5925f0b.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function d(r){return i({...r,state:!0})}var c=Object.defineProperty,b=Object.getOwnPropertyDescriptor,e=(r,o,a,l)=>{for(var s=l>1?void 0:l?b(o,a):o,n=r.length-1,p;n>=0;n--)(p=r[n])&&(s=(l?p(o,a,s):p(s))||s);return l&&s&&c(o,a,s),s};let t=class extends u{constructor(){super(),this.splideContainer=null,this.showCount=!1,this.autoplay=!1,this._currentIndexCountElement=null,this._totalSlidesCountElement=null,this._numberOfSlides=0,this._activeSlideIndex=1,this.slidesToShow=1,this.slidesPerMove=1,this.sliderType="loop",this.sliderGap="0",this.autoplayInterval="6000",this.sliderBreakpoints=null,this.sliderPadding="0",this.sliderFocusCenter=!1,this.sliderAspectRatio="0.5625",this.arrowPrevAriaLabel="",this.arrowNextAriaLabel="",this.arrowFirstAriaLabel="",this.arrowLastAriaLabel="",this._handlePaginationUpdate=this._handlePaginationUpdate.bind(this),this._handleSliderMount=this._handleSliderMount.bind(this)}createRenderRoot(){return this}firstUpdated(){if(this.splideContainer=this.querySelector(".splide")||null,this.splideContainer)this._initSlider();else{console.error("TOUJOU: Could not get necessary elements to initialize the slider");return}}_initSlider(){let r={classes:{pagination:"splide__pagination slider-bullets",page:"splide__pagination__page slider-bullets__bullet"},type:this.sliderType,autoplay:this.autoplay,interval:this.autoplayInterval,pauseOnHover:this.autoplay,pauseOnFocus:this.autoplay,perPage:this.slidesToShow,perMove:this.slidesPerMove,gap:this.sliderGap,breakpoints:this.sliderBreakpoints,heightRatio:this.sliderAspectRatio,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"},padding:this.sliderPadding,i18n:{prev:this.arrowPrevAriaLabel,next:this.arrowNextAriaLabel,first:this.arrowFirstAriaLabel,last:this.arrowLastAriaLabel}};this.sliderFocusCenter==="true"&&(r.focus="center",r.trimSpace=!1),this.sliderBreakpoints&&(r.breakpoints=JSON.parse(this.sliderBreakpoints)),this.splideSlider=new _(this.splideContainer,r),this.splideSlider.on("mounted",this._handleSliderMount),this.splideSlider.on("moved",this._handlePaginationUpdate),this.splideSlider.mount()}_handleSliderMount(){this._getCountInfo(),this._initCount()}_getCountInfo(){this._currentIndexCountElement=this.querySelector(".slider-count__current"),this._totalSlidesCountElement=this.querySelector(".slider-count__total")}_initCount(){this._numberOfSlides=this.splideSlider.Components.Elements.slides.length,this._updateSliderCount()}_handlePaginationUpdate(r){this._activeSlideIndex=r+1,this._updateSliderCount()}_updateSliderCount(){this._currentIndexCountElement.textContent=String(this._activeSlideIndex),this._totalSlidesCountElement.textContent=String(this._numberOfSlides)}};e([i({type:Object})],t.prototype,"splideContainer",2);e([i({type:Boolean,attribute:"show-count"})],t.prototype,"showCount",2);e([i({type:Boolean,attribute:"auto-play"})],t.prototype,"autoplay",2);e([i()],t.prototype,"_currentIndexCountElement",2);e([i()],t.prototype,"_totalSlidesCountElement",2);e([d()],t.prototype,"_numberOfSlides",2);e([d()],t.prototype,"_activeSlideIndex",2);e([i()],t.prototype,"splideSlider",2);e([i({reflect:!0,attribute:"slides-to-show"})],t.prototype,"slidesToShow",2);e([i({reflect:!0,attribute:"slides-per-move"})],t.prototype,"slidesPerMove",2);e([i({reflect:!0,attribute:"slider-type"})],t.prototype,"sliderType",2);e([i({reflect:!0,attribute:"slider-gap"})],t.prototype,"sliderGap",2);e([i({reflect:!0,attribute:"autoplay-interval"})],t.prototype,"autoplayInterval",2);e([i({reflect:!0,attribute:"slider-breakpoints"})],t.prototype,"sliderBreakpoints",2);e([i({reflect:!0,attribute:"slider-padding"})],t.prototype,"sliderPadding",2);e([i({reflect:!0,attribute:"slider-focus-center"})],t.prototype,"sliderFocusCenter",2);e([i({reflect:!0,attribute:"slider-aspect-ratio"})],t.prototype,"sliderAspectRatio",2);e([i({attribute:"arrow-prev-aria-label"})],t.prototype,"arrowPrevAriaLabel",2);e([i({attribute:"arrow-next-aria-label"})],t.prototype,"arrowNextAriaLabel",2);e([i({attribute:"arrow-first-aria-label"})],t.prototype,"arrowFirstAriaLabel",2);e([i({attribute:"arrow-last-aria-label"})],t.prototype,"arrowLastAriaLabel",2);t=e([h("toujou-slider")],t);
//# sourceMappingURL=toujou-slider.js.map
