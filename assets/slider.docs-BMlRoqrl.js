import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as n}from"./index-DZP5esQ7.js";function l(i){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...n(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{id:"toujou-slider",children:"<toujou-slider>"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"<toujou-slider>"})," renders a slider on the page, using the ",e.jsx(s.a,{href:"https://splidejs.com/guides/getting-started",rel:"nofollow",children:"Splide"})," library."]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"#toujou-slider-useful-links",children:" Useful links "})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"#toujou-slider-child-components",children:" Child components "})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"#toujou-slider-example",children:" Markup exmaple "})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"#toujou-slider-attributes",children:" Attributes "})}),`
`,e.jsxs(s.p,{children:["4.1. ",e.jsx(s.a,{href:"#toujou-slider-attributes-design",children:" Slider design "})]}),`
`,e.jsxs(s.p,{children:["4.2. ",e.jsx(s.a,{href:"#toujou-slider-attributes-fullwidth",children:" Fullwidth "})]}),`
`,e.jsxs(s.p,{children:["4.3. ",e.jsx(s.a,{href:"#toujou-slider-attributes-autoplay",children:" Autoplay "})]}),`
`,e.jsxs(s.p,{children:["4.4. ",e.jsx(s.a,{href:"#toujou-slider-attributes-autoplay-duration",children:" Autoplay duration "})]}),`
`,e.jsxs(s.p,{children:["4.4.1. ",e.jsx(s.a,{href:"#toujou-slider-attributes-show-count",children:" Show count "})]}),`
`,e.jsxs(s.p,{children:["4.5. ",e.jsx(s.a,{href:"#toujou-slider-attributes-slides-to-show",children:" Slides to show "})]}),`
`,e.jsxs(s.p,{children:["4.6. ",e.jsx(s.a,{href:"#toujou-slider-attributes-slides-to-move",children:" Slides to move "})]}),`
`,e.jsxs(s.p,{children:["4.7. ",e.jsx(s.a,{href:"#toujou-slider-attributes-slider-type",children:" Slider type "})]}),`
`,e.jsxs(s.p,{children:["4.8. ",e.jsx(s.a,{href:"#toujou-slider-attributes-slider-gap",children:" Slider gap "})]}),`
`,e.jsxs(s.p,{children:["4.9. ",e.jsx(s.a,{href:"#toujou-slider-attributes-slider-breakpoints",children:" Slider breakpoints "})]}),`
`,e.jsxs(s.p,{children:["4.10. ",e.jsx(s.a,{href:"#toujou-slider-attributes-slider-padding",children:" Slider padding "})]}),`
`,e.jsxs(s.p,{children:["4.11. ",e.jsx(s.a,{href:"#toujou-slider-attributes-slider-focus-center",children:" Slider focus center "})]}),`
`,e.jsxs(s.p,{children:["4.12. ",e.jsx(s.a,{href:"#toujou-slider-attributes-slider-slides-count",children:" Slider slides count "})]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"#toujou-slider-default-options",children:" Default options "})}),`
`]}),`
`]}),`
`,e.jsx("a",{name:"toujou-slider-useful-link"}),`
`,e.jsx(s.h2,{id:"1-useful-links",children:"1. Useful links"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://splidejs.com/guides/structure/",rel:"nofollow",children:"Splide structure"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://splidejs.com/guides/options/",rel:"nofollow",children:"Splide options"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://splidejs.com/guides/apis/",rel:"nofollow",children:"Splide APIs"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://splidejs.com/guides/events/",rel:"nofollow",children:"Splide events"})}),`
`]}),`
`,e.jsx("a",{name:"toujou-slider-child-components"}),`
`,e.jsx(s.h2,{id:"2-child-components",children:"2. Child components"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"toujou-slider-control"}),' (the "prev" and "next" buttons)']}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"toujou-bullets"})," (the bullet buttons at the bottom of the slider element)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"toujou-slider-count"})," (the element that shows the index of the active slide and the total number of slides)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"toujou-slider-progress"})," (the progress bar showing the time left for the autoplay to change to the next slide)"]}),`
`]}),`
`,e.jsx("a",{name:"toujou-slider-example"}),`
`,e.jsx(s.h2,{id:"3-markup-example",children:"3. Markup example"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<toujou-slider
    class="slider"
    aria-label="Toujou slider example"
    element-design="default"
    showCount
    auto-play
    auto-play-interval="6000"
    slides-to-show="1"
    slider-gap="var(--slider-slides-gap)"
    slider-aspect-ratio="0.5625"
    slider-type="loop"
    arrow-first-aria-label="Go to first slide"
    arrow-last-aria-label="Go to last slide"
    arrow-prev-aria-label="Go to previous slide"
    arrow-next-aria-label="Go to next slide"
>
    <div class="splide slider__slider">
        <div class="splide__arrows slider-controls">
            <button class="splide__arrow splide__arrow--prev slider-control slider-control--prev" aria-label="Previous slide">
                <toujou-icon class="icon slider-control__icon slider-control__icon--prev" icon-name="arrow-left"></toujou-icon>
            </button>
            <button class="splide__arrow splide__arrow--next slider-control slider-control--next" aria-label="Next slide">
                <toujou-icon class="icon slider-control__icon slider-control__icon--next" icon-name="arrow-right"></toujou-icon>
            </button>
        </div>

        <div class="splide__track slider__track">
            <ul class="splide__list slider__list">
                <li class="splide__slide slider__slide" data-splide-interval="\${args.autoplayInterval * 1000}">
                    <toujou-single-media class="single-media slider__item" slot="slider-item">
                        <img class="single-media__image" src="https://picsum.photos/1600/900" alt="Nice image">
                    </toujou-single-media>
                        <div class="slider__slide-info">
                            <small class="slider__slide-copyright">@Nice photographer</small>
                            <figpaction class="slider__slide-figcaption">This is a beautiful description</figpaction>
                        </div>
                </li>
                <li class="splide__slide slider__slide" data-splide-interval="\${args.autoplayInterval * 1000}">
                    <toujou-single-media class="single-media slider__item" slot="slider-item">
                        <img class="single-media__image" src="https://picsum.photos/1601/900" alt="Nice image">
                    </toujou-single-media>
                </li>
            </ul>
        </div>
        <div class="splide__progress slider-progress">
            <div class="splide__progress__bar slider-progress__bar"></div>
        </div>
    </div>

    <toujou-slider-count class="slider-count">
        <span class="slider-count__current"></span>
        <span class="slider-count__separator">of</span>
        <span class="slider-count__total"></span>
    </toujou-slider-count>

</toujou-slider>
`})}),`
`,e.jsx("a",{name:"toujou-slider-attributes"}),`
`,e.jsx(s.h2,{id:"4-attributes",children:"4. Attributes"}),`
`,e.jsx(s.p,{children:"There are some attributes that allow us to customize the slider"}),`
`,e.jsx("a",{name:"toujou-slider-attributes-design"}),`
`,e.jsxs(s.h3,{id:"41-element-design-required",children:["4.1. Element design ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning","is-uppercase":!0,children:"required"})]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"element-design"}),` attribute allows us to change the slider element's styles. It is set by the user on the BE with the "Color" option.`]}),`
`,e.jsxs(s.p,{children:["Possible values are: ",e.jsx(s.code,{children:"default"}),", ",e.jsx(s.code,{children:"primary"}),", ",e.jsx(s.code,{children:"secondary"})," and ",e.jsx(s.code,{children:"light-grey"})]}),`
`,e.jsx(s.p,{children:"Example:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<toujou-slider class="slider" aria-label="Toujou slider example" element-design="primary">
...
</toujou-slider>
`})}),`
`,e.jsx("a",{name:"toujou-slider-attribute-fullwidth"}),`
`,e.jsxs(s.h3,{id:"42-slider-fullwidth-defined-via-typoscript",children:["4.2. Slider fullwidth ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"primary","is-uppercase":!0,children:"Defined via Typoscript"})]}),`
`,e.jsxs(s.p,{children:["Per default the slider element has the same max-width as the content. We can set the ",e.jsx(s.code,{children:"slider-fullwidth"})," attribute to make it 100% width of its container."]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"slider-fullwidth"})," attribute also has an impact in some visual elements of the slider, like the control buttons."]}),`
`,e.jsx(s.p,{children:"Example:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<toujou-slider class="slider" aria-label="Toujou slider example" element-design="primary" slider-fullwidth>
...
</toujou-slider>
`})}),`
`,e.jsx("a",{name:"toujou-slider-attributes-autoplay"}),`
`,e.jsx(s.h3,{id:"43-autoplay",children:"4.3. Autoplay"}),`
`,e.jsxs(s.p,{children:["Per default the users must click the slider controls or drag the slider to move to the next / prev slide. If we set the ",e.jsx(s.code,{children:"auto-play"})," attribute the slider will automatically move to the next slide after a certain amount of time (default 5s)."]}),`
`,e.jsxs(s.p,{children:["When the ",e.jsx(s.code,{children:"auto-play"}),' is set the "auto-play progress bar" will also be shown.']}),`
`,e.jsx(s.p,{children:"Example:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<toujou-slider class="slider" aria-label="Toujou slider example" element-design="primary" auto-play>
...
</toujou-slider>
`})}),`
`,e.jsx("a",{name:"toujou-slider-attributes-autoplay-duration"}),`
`,e.jsx(s.h4,{id:"431-autoplay-duration",children:"4.3.1. Autoplay duration"}),`
`,e.jsxs(s.p,{children:["We can set custom intervals for each slide by adding the ",e.jsx(s.code,{children:'data-splide-interval="6000">'})," attribute to the ",e.jsx(s.code,{children:".toujou-slider__slide"})," elements"]}),`
`,e.jsx(s.p,{children:"Example:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<li class="splide__slide slider__slide" data-splide-interval="6000">
...
</li>
`})}),`
`,e.jsx("a",{name:"toujou-slider-attributes-show-count"}),`
`,e.jsxs(s.h3,{id:"44-show-count-defined-via-typoscript",children:["4.4. show-count ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"primary","is-uppercase":!0,children:"Defined via Typoscript"})]}),`
`,e.jsxs(s.p,{children:['We can show a "count" element after the slider by adding the ',e.jsx(s.code,{children:"show-count"})," attribute. The count element shows the index of the current active slide and the total number of slides, which may help the users when there are many slides."]}),`
`,e.jsx(s.p,{children:"Example:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<toujou-slider class="slider" aria-label="Toujou slider example" element-design="primary" show-count>
...
</toujou-slider>
`})}),`
`,e.jsx("a",{name:"toujou-slider-attributes-slides-to-show"}),`
`,e.jsxs(s.h3,{id:"45-slides-to-show-defined-via-typoscript",children:["4.5 slides to show ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"primary","is-uppercase":!0,children:"Defined via Typoscript"})]}),`
`,e.jsxs(s.p,{children:["We can define how many slides to show per page with the ",e.jsx(s.code,{children:"slides-to-show"})," attribute. Default is ",e.jsx(s.code,{children:"1"}),"."]}),`
`,e.jsx(s.p,{children:"Example:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<toujou-slider class="toujou-slider" element-design="primary" slides-to-show="3">
...
</toujou-slider>
`})}),`
`,e.jsx("a",{name:"toujou-slider-attributes-slides-to-move"}),`
`,e.jsxs(s.h3,{id:"46-slides-to-move-defined-via-typoscript",children:["4.6 slides to move ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"primary","is-uppercase":!0,children:"Defined via Typoscript"})]}),`
`,e.jsxs(s.p,{children:["We can define how many slides to advance on each move with the ",e.jsx(s.code,{children:"slides-per-move"})," attribute. Default is ",e.jsx(s.code,{children:"1"}),"."]}),`
`,e.jsx(s.p,{children:"Example:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<toujou-slider class="toujou-slider" element-design="primary" slides-to-show="2" slides-per-move="2">
...
</toujou-slider>
`})}),`
`,e.jsx("a",{name:"toujou-slider-attributes-slider-type"}),`
`,e.jsxs(s.h3,{id:"47-slider-type-defined-via-typoscript",children:["4.7 slider type ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"primary","is-uppercase":!0,children:"Defined via Typoscript"})]}),`
`,e.jsxs(s.p,{children:['We can choose between 3 different slider types: "loop", "slide" and "fade". Default is ',e.jsx(s.code,{children:"loop"})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:'"loop": A carousel that loops around when it gets to the end'}),`
`,e.jsx(s.li,{children:'"slide": Does not loop once it gets to the last slide'}),`
`,e.jsx(s.li,{children:`"fade": It has a fade transition between slides, but doesn't support the "perPage" option`}),`
`]}),`
`,e.jsx(s.p,{children:"Example:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<toujou-slider class="toujou-slider" element-design="primary" slider-type="slide">
...
</toujou-slider>
`})}),`
`,e.jsx("a",{name:"toujou-slider-attributes-slider-gap"}),`
`,e.jsxs(s.h3,{id:"48-slider-gap-defined-via-typoscript",children:["4.8 slider gap ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"primary","is-uppercase":!0,children:"Defined via Typoscript"})]}),`
`,e.jsxs(s.p,{children:["Define a gap between the slides. Any valid css gap value is also valid here. Default is ",e.jsx(s.code,{children:"0"})]}),`
`,e.jsx(s.p,{children:"Example:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<toujou-slider class="toujou-slider" element-design="primary" slider-gap="1rem">
...
</toujou-slider>
`})}),`
`,e.jsx("a",{name:"toujou-slider-attributes-slider-breakpoints"}),`
`,e.jsxs(s.h3,{id:"49-slider-breakpoints-defined-via-typoscript",children:["4.9 slider breakpoints ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"primary","is-uppercase":!0,children:"Defined via Typoscript"})]}),`
`,e.jsx(s.p,{children:"We can also define different settings for each breakpoint, for instance to show a different number of slider on mobile, tablet and desktop."}),`
`,e.jsxs(s.p,{children:["The value must be a valid stringified JSON object. Default is ",e.jsx(s.code,{children:"{}"}),"."]}),`
`,e.jsx(s.p,{children:"Example:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<toujou-slider
    class="toujou-slider"
    element-design="primary"
    slider-breakpoints='{"640":{"perPage":1},"768":{"perPage":2},"1024":{"perPage":3},"1440":{"perPage":4}}'>
...
</toujou-slider>
`})}),`
`,e.jsx("a",{name:"toujou-slider-attributes-padding"}),`
`,e.jsxs(s.h3,{id:"410-slider-padding-defined-via-typoscript",children:["4.10 slider padding ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"primary","is-uppercase":!0,children:"Defined via Typoscript"})]}),`
`,e.jsxs(s.p,{children:["With the ",e.jsx(s.code,{children:"slider-padding"})," attribute we can define how much of the previous and next slides we want to see at the sides of the slider."]}),`
`,e.jsx(s.p,{children:"Any valid css size value is also a valid padding value here"}),`
`,e.jsx(s.p,{children:"Example:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<toujou-slider
    class="toujou-slider"
    element-design="primary"
    slider-padding="1rem">
...
</toujou-slider>
`})}),`
`,e.jsx("a",{name:"toujou-slider-attributes-focus-center"}),`
`,e.jsxs(s.h3,{id:"410-slider-focus-center-defined-via-typoscript",children:["4.10 slider focus center ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"primary","is-uppercase":!0,children:"Defined via Typoscript"})]}),`
`,e.jsxs(s.p,{children:["With the ",e.jsx(s.code,{children:"slider-focus-center"})," attribute we can define if the active slide is always shown in the center, event when we are at the first of last slides."]}),`
`,e.jsxs(s.p,{children:['The "focus center" option works only with the ',e.jsx(s.code,{children:'slider-type="slide"'}),"."]}),`
`,e.jsxs(s.p,{children:["It accepts either ",e.jsx(s.code,{children:"true"})," or ",e.jsx(s.code,{children:"false"}),"."]}),`
`,e.jsx(s.p,{children:"Example:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<toujou-slider
    class="toujou-slider"
    element-design="primary"
    slider-focus-center="false">
...
</toujou-slider>
`})}),`
`,e.jsx("a",{name:"toujou-slider-attributes-slider-slides-count"}),`
`,e.jsx(s.h3,{id:"411-slider-slides-count",children:"4.11 slider slides-count"}),`
`,e.jsxs(s.p,{children:[`This attribute is optional.
The `,e.jsx(s.code,{children:"slides-count"})," should reflect the number of slides inside the slider, for instance ",e.jsx(s.code,{children:'slides-count="12"'}),`.
There are custom slides styles that hide the slider controls if there aren't enough slides on the different viewports (1 on mobile, 2 on tablet, 3 on small desktop, 4 on desktop)`]}),`
`,e.jsx("a",{name:"toujou-slider-default-options"}),`
`,e.jsx(s.h3,{id:"5-default-options",children:"5. Default options"}),`
`,e.jsx(s.p,{children:"These are the default options for the toujou slider"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-js",children:`const sliderOptions = {
    classes: {
        pagination: 'splide__pagination slider-bullets',
        page: 'splide__pagination__page slider-bullets__bullet',
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
    reducedMotion: {
        speed: 0,
        rewindSpeed: 0,
        autoplay: 'pause'
    },
    padding: this.sliderPadding,
}

if (this.sliderFocusCenter === 'true') {
    sliderOptions.focus = 'center';
    sliderOptions.trimSpace = false;
}

if (this.sliderBreakpoints) {
    sliderOptions.breakpoints = JSON.parse(this.sliderBreakpoints);
}
`})})]})}function d(i={}){const{wrapper:s}={...n(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(l,{...i})}):l(i)}export{d as M};
