import{T as r}from"./badgeCustomConfig-DUXiHpL4.js";import{M as o}from"./slider.docs-DuhXwgIF.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-DpH9cx3q.js";import"./index-DO8khQO4.js";import"./_commonjsHelpers-Cpj98o6Y.js";const _={title:"COMPONENTS/Media",parameters:{badges:[r.DONE],docs:{page:o}},argTypes:{designColor:{table:{category:"Slider settings",defaultValue:{summary:"default"}},name:"Slider design",description:"Set the slider's design color",options:["default","primary","secondary","light-grey"],control:{type:"radio"},required:!0},isFullwidth:{table:{category:"Slider settings",defaultValue:{summary:"false"}},name:"Fullwidth",description:"Show slider in fullwidth",control:{type:"boolean"},required:!0},showCount:{table:{category:"Slider settings"},name:"Show count",description:"Show the count element",control:{type:"boolean"},required:!0},autoplay:{table:{category:"Slider settings",defaultValue:{summary:"false"}},name:"autoplay",description:"Slide automatically",control:{type:"boolean"},defaultValue:"false",required:!0},autoplayInterval:{table:{category:"Slider settings"},name:"autoplay interval",description:"Interval for the autoplay function (in seconds)",control:{type:"number"},required:!0},sliderType:{table:{category:"Slider settings",defaultValue:{summary:"loop"}},name:"Slider type",description:"Set the slider's animation type",options:["loop","slide"],control:{type:"radio"},required:!0}}},i=e=>`
        <div class="splide slider__slider">
                <div class="splide__arrows slider-controls">
                    <button class="splide__arrow splide__arrow--prev slider-control slider-control--prev">
                        <toujou-icon class="icon slider-control__icon slider-control__icon--prev" icon-name="arrow-left"></toujou-icon>
                    </button>
                    <button class="splide__arrow splide__arrow--next slider-control slider-control--next">
                        <toujou-icon class="icon slider-control__icon slider-control__icon--next" icon-name="arrow-right"></toujou-icon>
                    </button>
                </div>

                <div class="splide__track slider__track">
                    <ul class="splide__list slider__list">
                        <li class="splide__slide slider-slide" data-splide-interval="${e.autoplayInterval*1e3}">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/1600/900" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide" data-splide-interval="${e.autoplayInterval*1e3}">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/1600/901" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide" data-splide-interval="${e.autoplayInterval*1e3}">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/400/200" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide" data-splide-interval="${e.autoplayInterval*1e3}">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/1603/904" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide" data-splide-interval="${e.autoplayInterval*1e3}">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/1600/910" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide" data-splide-interval="${e.autoplayInterval*1e3}">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/1600/916" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide" data-splide-interval="${e.autoplayInterval*1e3}">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/1600/917" alt="Nice image">
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
    `,d=e=>`
        <h1 type-alignment="center">Single image slider</h1>
        
        <toujou-slider
            class="slider"
            aria-label="Toujou slider example"
            element-design="${e.designColor}"
            ${e.isFullwidth?"slider-fullwidth":""}
            ${e.showCount?"show-count":""}
            ${e.autoplay?"auto-play":""}
            auto-play-interval="${e.autoplayInterval}"
            slides-to-show="1"
            slider-type="${e.sliderType}"
            slider-gap="var(--slider-slides-gap)"
            slider-aspect-ratio="0.5625"
            arrow-first-aria-label="Go to first slide"
            arrow-last-aria-label="Go to last slide"
            arrow-prev-aria-label="Go to previous slide"
            arrow-next-aria-label="Go to next slide"
        >
            ${i(e)}
        </toujou-slider>
        
        <br>
        
        <br>
        
        <br>
        
        <h1 type-alignment="center">Single with breakpoints / multiple images</h1>
        
        <toujou-slider
            class="slider"
            content-type="media"
            aria-label="Toujou slider example"
            element-design="primary"
            ${e.isFullwidth?"slider-fullwidth":""}
            ${e.autoplay?"auto-play":""}
            auto-play-interval="${e.autoplayInterval}"
            slides-per-move="1"
            slides-to-show="1"
            slider-type="${e.sliderType}"
            slider-gap="var(--slider-slides-gap)"
            slider-media-query="min"
            slider-breakpoints='{"640":{"perPage":2},"840":{"perPage":3},"1024":{"perPage":4}}'
            slider-aspect-ratio="0.5625"
            arrow-first-aria-label="Go to first logo"
            arrow-last-aria-label="Go to last logo"
            arrow-prev-aria-label="Go to previous logo"
            arrow-next-aria-label="Go to next logo"
        >
            ${i(e)}
        </toujou-slider>
    `,l=d.bind({});l.args={designColor:"default",showCount:!0,isFullwidth:!1,autoplay:!1,autoplayInterval:6,sliderType:"loop"};var s,a,t;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`(args: SliderStoryProps) => {
  return \`
        <h1 type-alignment="center">Single image slider</h1>
        
        <toujou-slider
            class="slider"
            aria-label="Toujou slider example"
            element-design="\${args.designColor}"
            \${args.isFullwidth ? 'slider-fullwidth' : ''}
            \${args.showCount ? 'show-count' : ''}
            \${args.autoplay ? 'auto-play' : ''}
            auto-play-interval="\${args.autoplayInterval}"
            slides-to-show="1"
            slider-type="\${args.sliderType}"
            slider-gap="var(--slider-slides-gap)"
            slider-aspect-ratio="0.5625"
            arrow-first-aria-label="Go to first slide"
            arrow-last-aria-label="Go to last slide"
            arrow-prev-aria-label="Go to previous slide"
            arrow-next-aria-label="Go to next slide"
        >
            \${renderSliderContent(args)}
        </toujou-slider>
        
        <br>
        
        <br>
        
        <br>
        
        <h1 type-alignment="center">Single with breakpoints / multiple images</h1>
        
        <toujou-slider
            class="slider"
            content-type="media"
            aria-label="Toujou slider example"
            element-design="primary"
            \${args.isFullwidth ? 'slider-fullwidth' : ''}
            \${args.autoplay ? 'auto-play' : ''}
            auto-play-interval="\${args.autoplayInterval}"
            slides-per-move="1"
            slides-to-show="1"
            slider-type="\${args.sliderType}"
            slider-gap="var(--slider-slides-gap)"
            slider-media-query="min"
            slider-breakpoints='{"640":{"perPage":2},"840":{"perPage":3},"1024":{"perPage":4}}'
            slider-aspect-ratio="0.5625"
            arrow-first-aria-label="Go to first logo"
            arrow-last-aria-label="Go to last logo"
            arrow-prev-aria-label="Go to previous logo"
            arrow-next-aria-label="Go to next logo"
        >
            \${renderSliderContent(args)}
        </toujou-slider>
    \`;
}`,...(t=(a=l.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const y=["Slider"];export{l as Slider,y as __namedExportsOrder,_ as default};
