const l={title:"COMPONENTS/CollectionImageCards"},r=()=>`
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
                slides-count="8"
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
                            <li class="splide__slide slider-slide image-card-slider" data-splide-interval="6000">
                                <a class="image-card" href="#" image-format="16-9" card-variant="primary">
                                    <figure class="image-card__figure">
                                        <img src="https://picsum.photos/400/400" alt="beautiful image" class="image-card__image">
                                    </figure>
                                    <h3 class="image-card__title">
                                        <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
                                        Beautiful title
                                    </h3>
                                </a>
                            </li>
                            <li class="splide__slide slider-slide image-card-slider" data-splide-interval="6000">
                                <a class="image-card" href="#" image-format="16-9" card-variant="primary">
                                    <figure class="image-card__figure">
                                        <img src="https://picsum.photos/400/400" alt="beautiful image" class="image-card__image">
                                    </figure>
                                    <h3 class="image-card__title">
                                        <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
                                        Beautiful title
                                    </h3>
                                </a>
                            </li>
                            <li class="splide__slide slider-slide image-card-slider" data-splide-interval="6000">
                                <a class="image-card" href="#" image-format="16-9" card-variant="primary">
                                    <figure class="image-card__figure">
                                        <img src="https://picsum.photos/400/400" alt="beautiful image" class="image-card__image">
                                    </figure>
                                    <h3 class="image-card__title">
                                        <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
                                        Beautiful title
                                    </h3>
                                </a>
                            </li>
                            <li class="splide__slide slider-slide image-card-slider" data-splide-interval="6000">
                                <a class="image-card" href="#" image-format="16-9" card-variant="primary">
                                    <figure class="image-card__figure">
                                        <img src="https://picsum.photos/400/400" alt="beautiful image" class="image-card__image">
                                    </figure>
                                    <h3 class="image-card__title">
                                        <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
                                        Beautiful title
                                    </h3>
                                </a>
                            </li>
                            <li class="splide__slide slider-slide image-card-slider" data-splide-interval="6000">
                                <a class="image-card" href="#" image-format="16-9" card-variant="primary">
                                    <figure class="image-card__figure">
                                        <img src="https://picsum.photos/400/400" alt="beautiful image" class="image-card__image">
                                    </figure>
                                    <h3 class="image-card__title">
                                        <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
                                        Beautiful title
                                    </h3>
                                </a>
                            </li>
                            <li class="splide__slide slider-slide image-card-slider" data-splide-interval="6000">
                                <a class="image-card" href="#" image-format="16-9" card-variant="primary">
                                    <figure class="image-card__figure">
                                        <img src="https://picsum.photos/400/400" alt="beautiful image" class="image-card__image">
                                    </figure>
                                    <h3 class="image-card__title">
                                        <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
                                        Beautiful title
                                    </h3>
                                </a>
                            </li>
                            <li class="splide__slide slider-slide image-card-slider" data-splide-interval="6000">
                                <a class="image-card" href="#" image-format="16-9" card-variant="primary">
                                    <figure class="image-card__figure">
                                        <img src="https://picsum.photos/400/400" alt="beautiful image" class="image-card__image">
                                    </figure>
                                    <h3 class="image-card__title">
                                        <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
                                        Beautiful title
                                    </h3>
                                </a>
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
        </main>
    `,a=r.bind({});var i,e,s;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
                slides-count="8"
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
                            <li class="splide__slide slider-slide image-card-slider" data-splide-interval="6000">
                                <a class="image-card" href="#" image-format="16-9" card-variant="primary">
                                    <figure class="image-card__figure">
                                        <img src="https://picsum.photos/400/400" alt="beautiful image" class="image-card__image">
                                    </figure>
                                    <h3 class="image-card__title">
                                        <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
                                        Beautiful title
                                    </h3>
                                </a>
                            </li>
                            <li class="splide__slide slider-slide image-card-slider" data-splide-interval="6000">
                                <a class="image-card" href="#" image-format="16-9" card-variant="primary">
                                    <figure class="image-card__figure">
                                        <img src="https://picsum.photos/400/400" alt="beautiful image" class="image-card__image">
                                    </figure>
                                    <h3 class="image-card__title">
                                        <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
                                        Beautiful title
                                    </h3>
                                </a>
                            </li>
                            <li class="splide__slide slider-slide image-card-slider" data-splide-interval="6000">
                                <a class="image-card" href="#" image-format="16-9" card-variant="primary">
                                    <figure class="image-card__figure">
                                        <img src="https://picsum.photos/400/400" alt="beautiful image" class="image-card__image">
                                    </figure>
                                    <h3 class="image-card__title">
                                        <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
                                        Beautiful title
                                    </h3>
                                </a>
                            </li>
                            <li class="splide__slide slider-slide image-card-slider" data-splide-interval="6000">
                                <a class="image-card" href="#" image-format="16-9" card-variant="primary">
                                    <figure class="image-card__figure">
                                        <img src="https://picsum.photos/400/400" alt="beautiful image" class="image-card__image">
                                    </figure>
                                    <h3 class="image-card__title">
                                        <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
                                        Beautiful title
                                    </h3>
                                </a>
                            </li>
                            <li class="splide__slide slider-slide image-card-slider" data-splide-interval="6000">
                                <a class="image-card" href="#" image-format="16-9" card-variant="primary">
                                    <figure class="image-card__figure">
                                        <img src="https://picsum.photos/400/400" alt="beautiful image" class="image-card__image">
                                    </figure>
                                    <h3 class="image-card__title">
                                        <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
                                        Beautiful title
                                    </h3>
                                </a>
                            </li>
                            <li class="splide__slide slider-slide image-card-slider" data-splide-interval="6000">
                                <a class="image-card" href="#" image-format="16-9" card-variant="primary">
                                    <figure class="image-card__figure">
                                        <img src="https://picsum.photos/400/400" alt="beautiful image" class="image-card__image">
                                    </figure>
                                    <h3 class="image-card__title">
                                        <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
                                        Beautiful title
                                    </h3>
                                </a>
                            </li>
                            <li class="splide__slide slider-slide image-card-slider" data-splide-interval="6000">
                                <a class="image-card" href="#" image-format="16-9" card-variant="primary">
                                    <figure class="image-card__figure">
                                        <img src="https://picsum.photos/400/400" alt="beautiful image" class="image-card__image">
                                    </figure>
                                    <h3 class="image-card__title">
                                        <toujou-icon class="icon" icon-name="arrow-right"></toujou-icon>
                                        Beautiful title
                                    </h3>
                                </a>
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
        </main>
    \`;
}`,...(s=(e=a.parameters)==null?void 0:e.docs)==null?void 0:s.source}}};const t=["ImageCardSlider"];export{a as ImageCardSlider,t as __namedExportsOrder,l as default};
