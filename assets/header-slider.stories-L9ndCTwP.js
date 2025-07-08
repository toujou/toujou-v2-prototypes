import{T as d}from"./badgeCustomConfig-DUXiHpL4.js";import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as a}from"./index-DpH9cx3q.js";import"./index-DO8khQO4.js";import"./_commonjsHelpers-Cpj98o6Y.js";function n(t){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"header-slider-element",children:"Header slider element"}),`
`,e.jsx(i.p,{children:"The header slider render a slider with image and text content on the header section of the page."}),`
`,e.jsx(i.p,{children:'It can be placed only on the "header" column on the pages.'}),`
`,e.jsx(i.p,{children:'Unlike the "header" element, the header slider element does not allow for a link and has fewer options.'}),`
`,e.jsx(i.h2,{id:"markup-example",children:"Markup example"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<header class="header" image-height="default" header-type="slider">

    <toujou-slider
        class="slider"
        aria-label="Toujou slider example"
        element-design="primary"
        slides-to-show="1"
        slider-type="loop">
        <div class="splide slider__slider">
            <div class="splide__arrows">
                <button class="splide__arrow splide__arrow--prev slider-control slider-control--prev" aria-label="Previous slide">
                    <toujou-icon class="icon slider-control__icon slider-control__icon--prev" icon-name="arrow-left"></toujou-icon>
                </button>
                <button class="splide__arrow splide__arrow--next slider-control slider-control--next" aria-label="Next slide">
                    <toujou-icon class="icon slider-control__icon slider-control__icon--next" icon-name="arrow-right"></toujou-icon>
                </button>
            </div>

            <div class="splide__track slider__track">
                <ul class="splide__list slider__list">
                    <li class="splide__slide slider__slide" data-splide-interval="1000">
                        <div class="slider__item" slot="slider-item">
                            <toujou-single-media class="single-media">
                                <img class="single-media__image" src="https://picsum.photos/2000" alt="Nice image">
                            </toujou-single-media>
                            <div class="header-content"
                                accent-color="default"
                                vertical-position="mid"
                                horizontal-position="center"
                                content-size="half"
                                text-alignment="default">
                                <p class="header-content__text">Slide 1.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>
                    </li>
                    <li class="splide__slide slider__slide" data-splide-interval="1000">
                        <div class="slider__item" slot="slider-item">
                            <toujou-single-media class="single-media">
                                <img class="single-media__image" src="https://picsum.photos/2001" alt="Nice image">
                            </toujou-single-media>
                            <div class="header-content"
                                accent-color="default"
                                vertical-position="mid"
                                horizontal-position="center"
                                content-size="half"
                                text-alignment="default">
                                <p class="header-content__text">Slide 2.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>
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

</header>
`})}),`
`,e.jsx(i.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsxs(i.p,{children:["There are a couple of attributes that allow us to customize the header element. Some attributes must be added to the ",e.jsx(i.code,{children:"header"})," element, others to the ",e.jsx(i.code,{children:".header-content"})," element"]}),`
`,e.jsxs(i.h3,{id:"1-image-height-required",children:["1. image-height ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsx(i.p,{children:"Allows us to set the header's slider height in relation to the viewport."}),`
`,e.jsx(i.p,{children:'Corresponds to the "Header Imageheight" option.'}),`
`,e.jsxs(i.p,{children:["Possible values are ",e.jsx(i.code,{children:"default"}),", ",e.jsx(i.code,{children:"fullscreen"}),", ",e.jsx(i.code,{children:"halfscreen"})," and ",e.jsx(i.code,{children:"quarterscreen"}),". Default is ",e.jsx(i.code,{children:"default"})," (80%)."]}),`
`,e.jsxs(i.h3,{id:"2-vertical-position-required",children:["2. vertical-position ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsx(i.p,{children:"Allows us to set the header's content vertical position in relation to the header element."}),`
`,e.jsx(i.p,{children:'Corresponds to the "Vertical Position" option.'}),`
`,e.jsxs(i.p,{children:["Possible values are ",e.jsx(i.code,{children:"top"}),", ",e.jsx(i.code,{children:"mid"})," and ",e.jsx(i.code,{children:"bottom"}),". Default is ",e.jsx(i.code,{children:"mid"}),";"]}),`
`,e.jsxs(i.h3,{id:"3-horizontal-position-required",children:["3. horizontal-position ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsx(i.p,{children:"Allows us to set the header's content horizontal position in relation to the header element."}),`
`,e.jsx(i.p,{children:'Corresponds to the "Horizontal Position" option.'}),`
`,e.jsxs(i.p,{children:["Possible values are ",e.jsx(i.code,{children:"left"}),", ",e.jsx(i.code,{children:"center"})," and ",e.jsx(i.code,{children:"right"}),". Default is ",e.jsx(i.code,{children:"center"}),"."]}),`
`,e.jsxs(i.h3,{id:"4-content-size-required",children:["4. content-size ",e.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,e.jsx(i.p,{children:"Allows us to set the header's content width in relation to the header element."}),`
`,e.jsx(i.p,{children:'Corresponds to the "Headercontent Size" option.'}),`
`,e.jsxs(i.p,{children:["Possible values are ",e.jsx(i.code,{children:"full"}),", ",e.jsx(i.code,{children:"half"}),", ",e.jsx(i.code,{children:"third"}),",  and ",e.jsx(i.code,{children:"quarter"}),". Default is ",e.jsx(i.code,{children:"half"}),"."]}),`
`,e.jsx(i.h3,{id:"5-header-type",children:"5. header-type"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"header-type"})," must be set to ",e.jsx(i.code,{children:'header-type="slider"'})," so the different element inside the slider have the correct styles"]})]})}function c(t={}){const{wrapper:i}={...a(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(n,{...t})}):n(t)}const j={title:"COMPONENTS/Header",parameters:{badges:[d.DONE],docs:{page:c},layout:"fullscreen"},argTypes:{imageHeight:{table:{category:"Header Settings",defaultValue:{summary:"default"}},name:"Header image height",description:"Set the header image height",options:["default","full","half","quarter","3-1"],control:{type:"select"},required:!0},headerVerticalPos:{table:{category:"Header Settings",defaultValue:{summary:"default"}},name:"Header vertical position",description:"Set the header's vertical position",options:["top","mid","bottom"],control:{type:"select"},required:!0},headerHorizontalPos:{table:{category:"Header Settings",defaultValue:{summary:"default"}},name:"Header horizontal position",description:"Set the header's horizontal position",options:["left","center","right"],control:{type:"select"},required:!0},headerContentSize:{table:{category:"Header Settings",defaultValue:{summary:"default"}},name:"Header content size",description:"Set the header's content width",options:["full","half","third","quarter"],control:{type:"select"},required:!0},accentColor:{table:{category:"Header Settings",defaultValue:{summary:"default"}},name:"Accent color",description:"Set the header's accent color",options:["default","primary","secondary","font"],control:{type:"select"},required:!0},contentAlignment:{table:{category:"Header Settings",defaultValue:{summary:"default"}},name:"Content alignment",description:"Set the header's content alignment",options:["default","left","center","right"],control:{type:"select"},required:!0}},tags:["autodocs"]},u=t=>`
        <header class="header" image-height="${t.imageHeight}" header-type="slider">

            <toujou-slider
                class="slider"
                aria-label="Toujou slider example"
                element-design="primary"
                slides-to-show="1"
                slider-type="loop"
                slider-aspect-ratio="auto">
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
                            <li class="splide__slide slider__slide" data-splide-interval="1000">
                                <div class="slider__item" slot="slider-item">
                                    <toujou-single-media class="single-media">
                                        <img class="single-media__image" src="https://picsum.photos/2000" alt="Nice image">
                                    </toujou-single-media>
                                    <div class="header__content">
                                        <div class="header-content"
                                            accent-color="${t.accentColor}"
                                            vertical-position="${t.headerVerticalPos}"
                                            horizontal-position="${t.headerHorizontalPos}"
                                            content-size="${t.headerContentSize}"
                                            text-alignment="${t.contentAlignment}">
                                            <h3>Slide 1.</h3>
                                            <p class="header-content__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            <button is="toujou-button" class="button" button-variant="${t.accentColor}" button-type="default" button-size="normal">Hello world</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="splide__slide slider__slide" data-splide-interval="1000">
                                <div class="slider__item" slot="slider-item">
                                    <toujou-single-media class="single-media">
                                        <img class="single-media__image" src="https://picsum.photos/400/400" alt="Nice image">
                                    </toujou-single-media>
                                    <div class="header-content"
                                       accent-color="${t.accentColor}"
                                        vertical-position="${t.headerVerticalPos}"
                                        horizontal-position="${t.headerHorizontalPos}"
                                        content-size="${t.headerContentSize}"
                                        text-alignment="${t.contentAlignment}">
                                        <p class="header-content__text">Slide 2.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                </div>
                            </li>
                            <li class="splide__slide slider__slide" data-splide-interval="1000">
                                <div class="slider__item" slot="slider-item">
                                    <toujou-single-media class="single-media">
                                        <img class="single-media__image" src="https://picsum.photos/2002" alt="Nice image">
                                    </toujou-single-media>
                                    <div class="header-content"
                                        accent-color="${t.accentColor}"
                                        vertical-position="${t.headerVerticalPos}"
                                        horizontal-position="${t.headerHorizontalPos}"
                                        content-size="${t.headerContentSize}"
                                        text-alignment="${t.contentAlignment}">
                                        <p class="header-content__text">Slide 3.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                </div>
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

        </header>
    `,s=u.bind({});s.args={imageHeight:"default",headerVerticalPos:"mid",headerHorizontalPos:"center",headerContentSize:"half",accentColor:"default",contentAlignment:"default"};var o,l,r;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`(args: HeaderSliderStoryProps) => {
  return \`
        <header class="header" image-height="\${args.imageHeight}" header-type="slider">

            <toujou-slider
                class="slider"
                aria-label="Toujou slider example"
                element-design="primary"
                slides-to-show="1"
                slider-type="loop"
                slider-aspect-ratio="auto">
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
                            <li class="splide__slide slider__slide" data-splide-interval="1000">
                                <div class="slider__item" slot="slider-item">
                                    <toujou-single-media class="single-media">
                                        <img class="single-media__image" src="https://picsum.photos/2000" alt="Nice image">
                                    </toujou-single-media>
                                    <div class="header__content">
                                        <div class="header-content"
                                            accent-color="\${args.accentColor}"
                                            vertical-position="\${args.headerVerticalPos}"
                                            horizontal-position="\${args.headerHorizontalPos}"
                                            content-size="\${args.headerContentSize}"
                                            text-alignment="\${args.contentAlignment}">
                                            <h3>Slide 1.</h3>
                                            <p class="header-content__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            <button is="toujou-button" class="button" button-variant="\${args.accentColor}" button-type="default" button-size="normal">Hello world</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="splide__slide slider__slide" data-splide-interval="1000">
                                <div class="slider__item" slot="slider-item">
                                    <toujou-single-media class="single-media">
                                        <img class="single-media__image" src="https://picsum.photos/400/400" alt="Nice image">
                                    </toujou-single-media>
                                    <div class="header-content"
                                       accent-color="\${args.accentColor}"
                                        vertical-position="\${args.headerVerticalPos}"
                                        horizontal-position="\${args.headerHorizontalPos}"
                                        content-size="\${args.headerContentSize}"
                                        text-alignment="\${args.contentAlignment}">
                                        <p class="header-content__text">Slide 2.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                </div>
                            </li>
                            <li class="splide__slide slider__slide" data-splide-interval="1000">
                                <div class="slider__item" slot="slider-item">
                                    <toujou-single-media class="single-media">
                                        <img class="single-media__image" src="https://picsum.photos/2002" alt="Nice image">
                                    </toujou-single-media>
                                    <div class="header-content"
                                        accent-color="\${args.accentColor}"
                                        vertical-position="\${args.headerVerticalPos}"
                                        horizontal-position="\${args.headerHorizontalPos}"
                                        content-size="\${args.headerContentSize}"
                                        text-alignment="\${args.contentAlignment}">
                                        <p class="header-content__text">Slide 3.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                </div>
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

        </header>
    \`;
}`,...(r=(l=s.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};const v=["HeaderSlider"];export{s as HeaderSlider,v as __namedExportsOrder,j as default};
