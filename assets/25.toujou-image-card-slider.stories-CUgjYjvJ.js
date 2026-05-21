const u={title:"COMPONENTS/CollectionImageCards",argTypes:{imageFormat:{table:{category:"Image card settings",defaultValue:{summary:"16-9"}},name:"Image format",description:"Set the image card's image format",options:["16-9","square"],control:{type:"radio"},required:!0},cardVariant:{table:{category:"Image card settings",defaultValue:{summary:"default"}},name:"Card variant",description:"Set the image card element design",options:["default","primary","secondary","inverted"],control:{type:"radio"},required:!0}}},l=[{title:"Beautiful title",imageURL:"https://picsum.photos/400/400"},{title:"Sunny day",imageURL:"https://picsum.photos/400/401"},{title:"Another nice title",imageURL:"https://picsum.photos/400/402"},{title:"Interesting very long title with multiple lines",imageURL:"https://picsum.photos/400/403"},{title:"Short",imageURL:"https://picsum.photos/401/401"},{title:"Cool title",imageURL:"https://picsum.photos/401/402"}];function n(e,s,a){return`
        <li class="splide__slide slider-slide image-card-slider" data-splide-interval="6000">
            <a class="image-card" href="#" image-format="${s}" card-variant="${a}">
                <figure class="image-card__figure">
                    <img src="${e.imageURL}" alt="beautiful image" class="image-card__image">
                </figure>
                <h3 class="image-card__title">
                    <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
                    ${e.title}
                </h3>
            </a>
        </li>
    `}function d(e,s){return l.map(a=>n(a,e,s)).join("")}const c=e=>`
        <main>
            <toujou-slider
                class="slider"
                aria-label="Toujou slider example"
                element-design="primary"
                auto-play-interval="6000"
                slides-to-show="4"
                slider-breakpoints='{"540":{"perPage":1},"768":{"perPage":2},"840":{"perPage":3}}'
                slider-gap="var(--content-spacing-between-columns)"
                slider-aspect-ratio="auto"
                content-type="image-card-collection"
                arrow-first-aria-label="Go to first slide"
                arrow-last-aria-label="Go to last slide"
                arrow-prev-aria-label="Go to previous slide"
                arrow-next-aria-label="Go to next slide"
                slides-count="${l.length}"
            >
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
                            ${d(e.imageFormat,e.cardVariant)}
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
        </main>
    `,r=c.bind({});r.args={imageFormat:"16-9",cardVariant:"default"};var i,t,o;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`(args: ToujouImageCardSliderStoryProps) => {
  return \`
        <main>
            <toujou-slider
                class="slider"
                aria-label="Toujou slider example"
                element-design="primary"
                auto-play-interval="6000"
                slides-to-show="4"
                slider-breakpoints='{"540":{"perPage":1},"768":{"perPage":2},"840":{"perPage":3}}'
                slider-gap="var(--content-spacing-between-columns)"
                slider-aspect-ratio="auto"
                content-type="image-card-collection"
                arrow-first-aria-label="Go to first slide"
                arrow-last-aria-label="Go to last slide"
                arrow-prev-aria-label="Go to previous slide"
                arrow-next-aria-label="Go to next slide"
                slides-count="\${sliderItems.length}"
            >
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
                            \${renderSliderItems(args.imageFormat, args.cardVariant)}
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
        </main>
    \`;
}`,...(o=(t=r.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const p=["ImageCardSlider"];export{r as ImageCardSlider,p as __namedExportsOrder,u as default};
