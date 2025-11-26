import{M as t}from"./slider.docs-BsK3yUOQ.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-kYMsDC90.js";import"./iframe-DILOFI4D.js";import"./preload-helper-C1FmrZbK.js";const p={title:"COMPONENTS/Media",parameters:{docs:{page:t}},argTypes:{designColor:{table:{category:"Slider settings",defaultValue:{summary:"default"}},name:"Slider design",description:"Set the slider's design color",options:["default","primary","secondary","light-grey"],control:{type:"radio"},required:!0},isFullwidth:{table:{category:"Slider settings",defaultValue:{summary:"false"}},name:"Fullwidth",description:"Show slider in fullwidth",control:{type:"boolean"},required:!0},autoplay:{table:{category:"Slider settings",defaultValue:{summary:"false"}},name:"autoplay",description:"Slide automatically",control:{type:"boolean"},required:!0},autoplayInterval:{table:{category:"Slider settings"},name:"autoplay interval",description:"Interval for the autoplay function (in seconds)",control:{type:"number"},required:!0}}},o=e=>`
        <toujou-slider
            class="slider"
            content-type="logos"
            aria-label="Toujou slider example"
            element-design="${e.designColor}"
            ${e.isFullwidth?"slider-fullwidth":""}
            ${e.autoplay?"auto-play":""}
            auto-play-interval="${e.autoplayInterval}"
            slides-per-move="1"
            slides-to-show="5"
            slider-type="loop"
            slider-gap="var(--slider-slides-gap)"
            slider-breakpoints='{"640":{"perPage":2},"768":{"perPage":3},"840":{"perPage":4},"1024":{"perPage":4}}'
            slider-aspect-ratio="auto"
            arrow-first-aria-label="Go to first logo"
            arrow-last-aria-label="Go to last logo"
            arrow-prev-aria-label="Go to previous logo"
            arrow-next-aria-label="Go to next logo">
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
                        <li class="splide__slide slider-slide" data-splide-interval="${e.autoplayInterval*1e3}">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/200" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide" data-splide-interval="${e.autoplayInterval*1e3}">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/201" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide" data-splide-interval="${e.autoplayInterval*1e3}">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/202" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide" data-splide-interval="${e.autoplayInterval*1e3}">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/203" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide" data-splide-interval="${e.autoplayInterval*1e3}">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/204" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide" data-splide-interval="${e.autoplayInterval*1e3}">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/205" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide" data-splide-interval="${e.autoplayInterval*1e3}">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/206" alt="Nice image">
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
    `,i=o.bind({});i.args={designColor:"default",isFullwidth:!1,autoplay:!1,autoplayInterval:6};var s,l,a;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`(args: SliderStoryProps) => {
  return \`
        <toujou-slider
            class="slider"
            content-type="logos"
            aria-label="Toujou slider example"
            element-design="\${args.designColor}"
            \${args.isFullwidth ? 'slider-fullwidth' : ''}
            \${args.autoplay ? 'auto-play' : ''}
            auto-play-interval="\${args.autoplayInterval}"
            slides-per-move="1"
            slides-to-show="5"
            slider-type="loop"
            slider-gap="var(--slider-slides-gap)"
            slider-breakpoints='{"640":{"perPage":2},"768":{"perPage":3},"840":{"perPage":4},"1024":{"perPage":4}}'
            slider-aspect-ratio="auto"
            arrow-first-aria-label="Go to first logo"
            arrow-last-aria-label="Go to last logo"
            arrow-prev-aria-label="Go to previous logo"
            arrow-next-aria-label="Go to next logo">
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
                        <li class="splide__slide slider-slide" data-splide-interval="\${args.autoplayInterval * 1000}">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/200" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide" data-splide-interval="\${args.autoplayInterval * 1000}">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/201" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide" data-splide-interval="\${args.autoplayInterval * 1000}">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/202" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide" data-splide-interval="\${args.autoplayInterval * 1000}">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/203" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide" data-splide-interval="\${args.autoplayInterval * 1000}">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/204" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide" data-splide-interval="\${args.autoplayInterval * 1000}">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/205" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide" data-splide-interval="\${args.autoplayInterval * 1000}">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/206" alt="Nice image">
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
    \`;
}`,...(a=(l=i.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const m=["SliderLogo"];export{i as SliderLogo,m as __namedExportsOrder,p as default};
