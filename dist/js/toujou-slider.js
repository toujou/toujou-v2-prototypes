import { s as _ } from "./lit-element-ca41d87b.js";
import { n as u } from "./custom-element-fb5c5745.js";
import { e as t } from "./property-19bdaa8a.js";
import "./query-assigned-elements-39dd8e72.js";
import { S as c } from "./splide.esm-c5925f0b.js";

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function a(s) {
    return t({ ...s, state: !0 })
}

const f = `.splide__container{box-sizing:border-box;position:relative}.splide__list{-webkit-backface-visibility:hidden;backface-visibility:hidden;display:-ms-flexbox;display:flex;height:100%;margin:0!important;padding:0!important}.splide.is-initialized:not(.is-active) .splide__list{display:block}.splide__pagination{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;justify-content:center;margin:0;pointer-events:none}.splide__pagination li{display:inline-block;line-height:1;list-style-type:none;margin:0;pointer-events:auto}.splide__progress__bar{width:0}.splide{position:relative;visibility:hidden}.splide.is-initialized,.splide.is-rendered{visibility:visible}.splide__slide{-ms-flex-negative:0;-webkit-backface-visibility:hidden;backface-visibility:hidden;box-sizing:border-box;flex-shrink:0;list-style-type:none!important;margin:0;position:relative}.splide__slide img{vertical-align:bottom}.splide__spinner{animation:splide-loading 1s linear infinite;border:2px solid #999;border-left-color:transparent;border-radius:50%;bottom:0;contain:strict;display:inline-block;height:20px;left:0;margin:auto;position:absolute;right:0;top:0;width:20px}.splide__sr{clip:rect(0 0 0 0);border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.splide__toggle.is-active .splide__toggle__play,.splide__toggle__pause{display:none}.splide__toggle.is-active .splide__toggle__pause{display:inline}.splide__track{overflow:hidden;position:relative;z-index:0}@keyframes splide-loading{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.splide__track--draggable{-webkit-touch-callout:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.splide__track--fade>.splide__list{display:block}.splide__track--fade>.splide__list>.splide__slide{left:0;opacity:0;position:absolute;top:0;z-index:0}.splide__track--fade>.splide__list>.splide__slide.is-active{opacity:1;position:relative;z-index:1}.splide--rtl{direction:rtl}.splide__track--ttb>.splide__list{display:block}.splide__arrow{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;background:#ccc;border:0;border-radius:50%;cursor:pointer;display:-ms-flexbox;display:flex;height:2em;justify-content:center;opacity:.7;padding:0;position:absolute;top:50%;transform:translateY(-50%);width:2em;z-index:1}.splide__arrow svg{fill:#000;height:1.2em;width:1.2em}.splide__arrow:hover:not(:disabled){opacity:.9}.splide__arrow:disabled{opacity:.3}.splide__arrow:focus-visible{outline:3px solid #0bf;outline-offset:3px}.splide__arrow--prev{left:1em}.splide__arrow--prev svg{transform:scaleX(-1)}.splide__arrow--next{right:1em}.splide.is-focus-in .splide__arrow:focus{outline:3px solid #0bf;outline-offset:3px}.splide__pagination{bottom:.5em;left:0;padding:0 1em;position:absolute;right:0;z-index:1}.splide__pagination__page{background:#ccc;border:0;border-radius:50%;display:inline-block;height:8px;margin:3px;opacity:.7;padding:0;position:relative;transition:transform .2s linear;width:8px}.splide__pagination__page.is-active{background:#fff;transform:scale(1.4);z-index:1}.splide__pagination__page:hover{cursor:pointer;opacity:.9}.splide__pagination__page:focus-visible{outline:3px solid #0bf;outline-offset:3px}.splide.is-focus-in .splide__pagination__page:focus{outline:3px solid #0bf;outline-offset:3px}.splide__progress__bar{background:#ccc;height:3px}.splide__slide{-webkit-tap-highlight-color:transparent}.splide__slide:focus{outline:0}@supports (outline-offset:-3px){.splide__slide:focus-visible{outline:3px solid #0bf;outline-offset:-3px}}@media screen and (-ms-high-contrast:none){.splide__slide:focus-visible{border:3px solid #0bf}}@supports (outline-offset:-3px){.splide.is-focus-in .splide__slide:focus{outline:3px solid #0bf;outline-offset:-3px}}@media screen and (-ms-high-contrast:none){.splide.is-focus-in .splide__slide:focus{border:3px solid #0bf}.splide.is-focus-in .splide__track>.splide__list>.splide__slide:focus{border-color:#0bf}}.splide__toggle{cursor:pointer}.splide__toggle:focus-visible{outline:3px solid #0bf;outline-offset:3px}.splide.is-focus-in .splide__toggle:focus{outline:3px solid #0bf;outline-offset:3px}.splide__track--nav>.splide__list>.splide__slide{border:3px solid transparent;cursor:pointer}.splide__track--nav>.splide__list>.splide__slide.is-active{border:3px solid #000}.splide__arrows--rtl .splide__arrow--prev{left:auto;right:1em}.splide__arrows--rtl .splide__arrow--prev svg{transform:scaleX(1)}.splide__arrows--rtl .splide__arrow--next{left:1em;right:auto}.splide__arrows--rtl .splide__arrow--next svg{transform:scaleX(-1)}.splide__arrows--ttb .splide__arrow{left:50%;transform:translate(-50%)}.splide__arrows--ttb .splide__arrow--prev{top:1em}.splide__arrows--ttb .splide__arrow--prev svg{transform:rotate(-90deg)}.splide__arrows--ttb .splide__arrow--next{bottom:1em;top:auto}.splide__arrows--ttb .splide__arrow--next svg{transform:rotate(90deg)}.splide__pagination--ttb{bottom:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;left:auto;padding:1em 0;right:.5em;top:0}
`;
var h = Object.defineProperty, b = Object.getOwnPropertyDescriptor, i = (s, o, n, r) => {
    for (var l = r > 1 ? void 0 : r ? b(o, n) : o, d = s.length - 1, p; d >= 0; d--) (p = s[d]) && (l = (r ? p(o, n, l) : p(l)) || l);
    return r && l && h(o, n, l), l
};
let e = class extends _ {
    constructor() {
        super(), this.splideContainer = null, this.showCount = !1, this.autoplay = !1, this._currentIndexCountElement = null, this._totalSlidesCountElement = null, this._numberOfSlides = 0, this._activeSlideIndex = 1, this.slidesToShow = 1, this.slidesPerMove = 1, this.sliderType = "loop", this.sliderGap = "0", this.autoplayInterval = "6000", this.sliderBreakpoints = null, this.sliderPadding = "0", this.sliderFocusCenter = !1, this.sliderAspectRatio = "0.5625", this._handlePaginationUpdate = this._handlePaginationUpdate.bind(this), this._handleSliderMount = this._handleSliderMount.bind(this)
    }

    createRenderRoot() {
        return this
    }

    firstUpdated() {
        if (this.splideContainer = this.querySelector(".splide") || null, this.splideContainer) this._initSlider(); else {
            console.error("TOUJOU: Could not get necessary elements to initialize the slider");
            return
        }
    }

    _initSlider() {
        const s = {
            classes: {
                pagination: "splide__pagination slider-bullets",
                page: "splide__pagination__page slider-bullets__bullet"
            },
            type: this.sliderType,
            autoplay: this.autoplay,
            interval: this.autoplayInterval,
            pauseOnHover: this.autoplay,
            pauseOnFocus: this.autoplay,
            perPage: this.slidesToShow,
            perMove: this.slidesPerMove,
            gap: this.sliderGap,
            breakpoints: this.sliderBreakpoints,
            heightRatio: this.sliderAspectRatio,
            reducedMotion: { speed: 0, rewindSpeed: 0, autoplay: "pause" },
            padding: this.sliderPadding
        };
        this.sliderFocusCenter === "true" && (s.focus = "center", s.trimSpace = !1), this.sliderBreakpoints && (s.breakpoints = JSON.parse(this.sliderBreakpoints)), this.splideSlider = new c(this.splideContainer, s), this.splideSlider.on("mounted", this._handleSliderMount), this.splideSlider.on("moved", this._handlePaginationUpdate), this.splideSlider.mount()
    }

    _handleSliderMount() {
        this._getCountInfo(), this._initCount()
    }

    _getCountInfo() {
        this._currentIndexCountElement = this.querySelector(".slider-count__current"), this._totalSlidesCountElement = this.querySelector(".slider-count__total")
    }

    _initCount() {
        this._numberOfSlides = this.splideSlider.Components.Elements.slides.length, this._updateSliderCount()
    }

    _handlePaginationUpdate(s) {
        this._activeSlideIndex = s + 1, this._updateSliderCount()
    }

    _updateSliderCount() {
        this._currentIndexCountElement.textContent = String(this._activeSlideIndex), this._totalSlidesCountElement.textContent = String(this._numberOfSlides)
    }
};
e.styles = [f];
i([t({ type: Object })], e.prototype, "splideContainer", 2);
i([t({ type: Boolean, attribute: "show-count" })], e.prototype, "showCount", 2);
i([t({ type: Boolean, attribute: "auto-play" })], e.prototype, "autoplay", 2);
i([t()], e.prototype, "_currentIndexCountElement", 2);
i([t()], e.prototype, "_totalSlidesCountElement", 2);
i([a()], e.prototype, "_numberOfSlides", 2);
i([a()], e.prototype, "_activeSlideIndex", 2);
i([t()], e.prototype, "splideSlider", 2);
i([t({ reflect: !0, attribute: "slides-to-show" })], e.prototype, "slidesToShow", 2);
i([t({ reflect: !0, attribute: "slides-per-move" })], e.prototype, "slidesPerMove", 2);
i([t({ reflect: !0, attribute: "slider-type" })], e.prototype, "sliderType", 2);
i([t({ reflect: !0, attribute: "slider-gap" })], e.prototype, "sliderGap", 2);
i([t({ reflect: !0, attribute: "autoplay-interval" })], e.prototype, "autoplayInterval", 2);
i([t({ reflect: !0, attribute: "slider-breakpoints" })], e.prototype, "sliderBreakpoints", 2);
i([t({ reflect: !0, attribute: "slider-padding" })], e.prototype, "sliderPadding", 2);
i([t({ reflect: !0, attribute: "slider-focus-center" })], e.prototype, "sliderFocusCenter", 2);
i([t({ reflect: !0, attribute: "slider-aspect-ratio" })], e.prototype, "sliderAspectRatio", 2);
e = i([u("toujou-slider")], e);
//# sourceMappingURL=toujou-slider.js.map
