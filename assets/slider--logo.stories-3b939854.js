import{T as t}from"./badgeCustomConfig-e7a687d5.js";import{M as o}from"./slider.docs-f41f7a04.js";import"./jsx-runtime-ac05983f.js";import"./index-e0ddb630.js";import"./_commonjsHelpers-87174ba5.js";import"./index-a9a8c754.js";const _={title:"COMPONENTS/Media",parameters:{badges:[t.DONE],docs:{page:o}},argTypes:{designColor:{table:{category:"Slider settings",defaultValue:{summary:"default"}},name:"Slider design",description:"Set the slider's design color",options:["default","primary","secondary","light-grey"],control:{type:"radio"},defaultValue:["default"],required:!0},isFullwidth:{table:{category:"Slider settings",defaultValue:{summary:"false"}},name:"Fullwidth",description:"Show slider in fullwidth",control:{type:"boolean"},defaultValue:"false",required:!0},autoplay:{table:{category:"Slider settings",defaultValue:{summary:"false"}},name:"autoplay",description:"Slide automatically",control:{type:"boolean"},defaultValue:"false",required:!0},autoplayInterval:{table:{category:"Slider settings",defaultValue:{summary:6}},name:"autoplay interval",description:"Interval for the autoplay function (in seconds)",control:{type:"number"},defaultValue:6,required:!0}}},r=e=>`       
        <toujou-slider
            class="slider"
            content-type="logos"
            aria-label="Toujou slider example"
            element-design="${e.designColor}"
            ${e.isFullwidth?"slider-fullwidth":""}
            ${e.autoplay?"auto-play":""}
            auto-play-interval="${e.autoplayInterval}"
            slides-per-move="1"
            slider-type="loop"
            slider-gap="var(--slider-slides-gap)"
            slides-to-show="5"
            slider-breakpoints='{"640":{"perPage":2},"768":{"perPage":3},"840":{"perPage":4},"1024":{"perPage":4}}'
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
    `,l=r.bind({});l.args={designColor:"default",isFullwidth:!1,autoplay:!1,autoplayInterval:6};var s,i,a;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`(args: SliderStoryProps) => {
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
            slider-type="loop"
            slider-gap="var(--slider-slides-gap)"
            slides-to-show="5"
            slider-breakpoints='{"640":{"perPage":2},"768":{"perPage":3},"840":{"perPage":4},"1024":{"perPage":4}}'
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
}`,...(a=(i=l.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const g=["SliderLogo"];export{l as SliderLogo,g as __namedExportsOrder,_ as default};
//# sourceMappingURL=slider--logo.stories-3b939854.js.map
