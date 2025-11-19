import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as o}from"./index-f5PwCmci.js";import"./iframe-D7yF4ca0.js";import"./preload-helper-C1FmrZbK.js";function a(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...i.components};return s.jsxs(s.Fragment,{children:[s.jsx(e.h1,{id:"teaser-slider",children:"teaser slider"}),`
`,s.jsx(e.p,{children:"The teaser slider renders multiple teaser elements inside a slider"}),`
`,s.jsx(e.h2,{id:"markup-example",children:"Markup example"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-html",children:`<toujou-slider
    class="slider"
    aria-label="Toujou slider example"
    element-design="primary"
    slides-to-show="1"
    slider-gap="var(--slider-slides-gap)"
    slider-aspect-ratio="0.5625"
    slider-type="loop"
    content-type="teaser">
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
                <li class="splide__slide slider-slide" data-splide-interval="1000">
                    <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="left">
                        <div class="teaser__figure">
                            <img class="teaser__image" src="https://picsum.photos/1025" alt="nice image" />
                        </div>
                        <div class="teaser__content">
                            <h3>Nice headline</h3>
                            <p>This is a simple element containing a headline and this text. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
                        </div>
                    </toujou-teaser>
                </li>
                <li class="splide__slide slider-slide" data-splide-interval="1000">
                    <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="left">
                        <div class="teaser__figure">
                            <img class="teaser__image" src="https://picsum.photos/1025" alt="nice image" />
                        </div>
                        <div class="teaser__content">
                            <h3>Nice headline</h3>
                            <p>This is a simple element containing a headline and this text. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
                        </div>
                    </toujou-teaser>
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
`,s.jsxs(e.p,{children:["| For more information about the slider element, please refer to the ",s.jsx(e.a,{href:"/docs/components-media--slider",children:"Slider docs"})]})]})}function d(i={}){const{wrapper:e}={...o(),...i.components};return e?s.jsx(e,{...i,children:s.jsx(a,{...i})}):a(i)}const h={title:"COMPONENTS/Teaser",parameters:{docs:{page:d}},argTypes:{teaserDirection:{table:{category:"Teaser slider settings",defaultValue:{summary:"right"}},name:"Teaser direction",description:"Choose the teaser direction",options:["right","left"],control:{type:"radio"},required:!0}},tags:["autodocs"]},c=i=>{const e=i.teaserDirection==="right"?"left":"right";return`
        <main>
            <toujou-slider
                class="slider"
                aria-label="Toujou slider example"
                element-design="primary"
                slides-to-show="1"
                slider-gap="var(--slider-slides-gap)"
                slider-aspect-ratio="0.5625"
                slider-type="loop"
                content-type="teaser"
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
                            <li class="splide__slide slider-slide" data-splide-interval="1000">
                                <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="${e}" element-design="default">
                                    <div class="teaser__figure">
                                        <img class="teaser__image" src="https://picsum.photos/1025" alt="nice image" />
                                    </div>
                                    <div class="teaser__content">
                                        <h3>Nice headline</h3>
                                        <p>This is a simple element containing a headline and this text. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
                                    </div>
                                </toujou-teaser>
                            </li>
                            <li class="splide__slide slider-slide" data-splide-interval="1000">
                                <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="${e}" element-design="default">
                                    <div class="teaser__figure">
                                        <img class="teaser__image" src="https://picsum.photos/1025" alt="nice image" />
                                    </div>
                                    <div class="teaser__content">
                                        <h3>Nice headline</h3>
                                        <p>This is a simple element containing a headline and this text. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
                                    </div>
                                </toujou-teaser>
                            </li>
                            <li class="splide__slide slider-slide" data-splide-interval="1000">
                                <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="${e}" element-design="default">
                                    <div class="teaser__figure">
                                        <img class="teaser__image" src="https://picsum.photos/1026" alt="nice image" />
                                    </div>
                                    <div class="teaser__content">
                                        <h3>Nice headline</h3>
                                        <p>This is a simple element containing a headline and this text. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
                                    </div>
                                </toujou-teaser>
                            </li>
                            <li class="splide__slide slider-slide" data-splide-interval="1000">
                                <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="${e}" element-design="default">
                                    <div class="teaser__figure">
                                        <img class="teaser__image" src="https://picsum.photos/1027" alt="nice image" />
                                    </div>
                                    <div class="teaser__content">
                                        <h3>Nice headline</h3>
                                        <p>This is a simple element containing a headline and this text. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
                                    </div>
                                </toujou-teaser>
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



            <toujou-slider
                class="slider"
                aria-label="Toujou slider example"
                element-design="primary"
                slides-to-show="1"
                slider-gap="var(--slider-slides-gap)"
                slider-aspect-ratio="0.5625"
                slider-type="loop"
                content-type="teaser"
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
                            <li class="splide__slide slider-slide" data-splide-interval="1000">
                                <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="${e}" element-design="default">
                                    <div class="teaser__figure">
                                        <img class="teaser__image" src="https://picsum.photos/1025" alt="nice image" />
                                    </div>
                                    <div class="teaser__content">
                                        <h3>Nice headline</h3>
                                        <p>This is a simple element containing a headline and this text. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
                                    </div>
                                </toujou-teaser>
                            </li>
                            <li class="splide__slide slider-slide" data-splide-interval="1000">
                                <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="${e}" element-design="default">
                                    <div class="teaser__figure">
                                        <img class="teaser__image" src="https://picsum.photos/1025" alt="nice image" />
                                    </div>
                                    <div class="teaser__content">
                                        <h3>Nice headline</h3>
                                        <p>This is a simple element containing a headline and this text. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
                                    </div>
                                </toujou-teaser>
                            </li>
                            <li class="splide__slide slider-slide" data-splide-interval="1000">
                                <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="${e}" element-design="default">
                                    <div class="teaser__figure">
                                        <img class="teaser__image" src="https://picsum.photos/1026" alt="nice image" />
                                    </div>
                                    <div class="teaser__content">
                                        <h3>Nice headline</h3>
                                        <p>This is a simple element containing a headline and this text. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
                                    </div>
                                </toujou-teaser>
                            </li>
                            <li class="splide__slide slider-slide" data-splide-interval="1000">
                                <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="${e}" element-design="default">
                                    <div class="teaser__figure">
                                        <img class="teaser__image" src="https://picsum.photos/1027" alt="nice image" />
                                    </div>
                                    <div class="teaser__content">
                                        <h3>Nice headline</h3>
                                        <p>This is a simple element containing a headline and this text. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
                                    </div>
                                </toujou-teaser>
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
    `},t=c.bind({});t.args={teaserDirection:"right"};var r,n,l;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`(args: ToujouTeaserSliderProps) => {
  const teaserImageSide = args.teaserDirection === 'right' ? 'left' : 'right';
  return \`
        <main>
            <toujou-slider
                class="slider"
                aria-label="Toujou slider example"
                element-design="primary"
                slides-to-show="1"
                slider-gap="var(--slider-slides-gap)"
                slider-aspect-ratio="0.5625"
                slider-type="loop"
                content-type="teaser"
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
                            <li class="splide__slide slider-slide" data-splide-interval="1000">
                                <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="\${teaserImageSide}" element-design="default">
                                    <div class="teaser__figure">
                                        <img class="teaser__image" src="https://picsum.photos/1025" alt="nice image" />
                                    </div>
                                    <div class="teaser__content">
                                        <h3>Nice headline</h3>
                                        <p>This is a simple element containing a headline and this text. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
                                    </div>
                                </toujou-teaser>
                            </li>
                            <li class="splide__slide slider-slide" data-splide-interval="1000">
                                <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="\${teaserImageSide}" element-design="default">
                                    <div class="teaser__figure">
                                        <img class="teaser__image" src="https://picsum.photos/1025" alt="nice image" />
                                    </div>
                                    <div class="teaser__content">
                                        <h3>Nice headline</h3>
                                        <p>This is a simple element containing a headline and this text. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
                                    </div>
                                </toujou-teaser>
                            </li>
                            <li class="splide__slide slider-slide" data-splide-interval="1000">
                                <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="\${teaserImageSide}" element-design="default">
                                    <div class="teaser__figure">
                                        <img class="teaser__image" src="https://picsum.photos/1026" alt="nice image" />
                                    </div>
                                    <div class="teaser__content">
                                        <h3>Nice headline</h3>
                                        <p>This is a simple element containing a headline and this text. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
                                    </div>
                                </toujou-teaser>
                            </li>
                            <li class="splide__slide slider-slide" data-splide-interval="1000">
                                <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="\${teaserImageSide}" element-design="default">
                                    <div class="teaser__figure">
                                        <img class="teaser__image" src="https://picsum.photos/1027" alt="nice image" />
                                    </div>
                                    <div class="teaser__content">
                                        <h3>Nice headline</h3>
                                        <p>This is a simple element containing a headline and this text. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
                                    </div>
                                </toujou-teaser>
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



            <toujou-slider
                class="slider"
                aria-label="Toujou slider example"
                element-design="primary"
                slides-to-show="1"
                slider-gap="var(--slider-slides-gap)"
                slider-aspect-ratio="0.5625"
                slider-type="loop"
                content-type="teaser"
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
                            <li class="splide__slide slider-slide" data-splide-interval="1000">
                                <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="\${teaserImageSide}" element-design="default">
                                    <div class="teaser__figure">
                                        <img class="teaser__image" src="https://picsum.photos/1025" alt="nice image" />
                                    </div>
                                    <div class="teaser__content">
                                        <h3>Nice headline</h3>
                                        <p>This is a simple element containing a headline and this text. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
                                    </div>
                                </toujou-teaser>
                            </li>
                            <li class="splide__slide slider-slide" data-splide-interval="1000">
                                <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="\${teaserImageSide}" element-design="default">
                                    <div class="teaser__figure">
                                        <img class="teaser__image" src="https://picsum.photos/1025" alt="nice image" />
                                    </div>
                                    <div class="teaser__content">
                                        <h3>Nice headline</h3>
                                        <p>This is a simple element containing a headline and this text. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
                                    </div>
                                </toujou-teaser>
                            </li>
                            <li class="splide__slide slider-slide" data-splide-interval="1000">
                                <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="\${teaserImageSide}" element-design="default">
                                    <div class="teaser__figure">
                                        <img class="teaser__image" src="https://picsum.photos/1026" alt="nice image" />
                                    </div>
                                    <div class="teaser__content">
                                        <h3>Nice headline</h3>
                                        <p>This is a simple element containing a headline and this text. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
                                    </div>
                                </toujou-teaser>
                            </li>
                            <li class="splide__slide slider-slide" data-splide-interval="1000">
                                <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="\${teaserImageSide}" element-design="default">
                                    <div class="teaser__figure">
                                        <img class="teaser__image" src="https://picsum.photos/1027" alt="nice image" />
                                    </div>
                                    <div class="teaser__content">
                                        <h3>Nice headline</h3>
                                        <p>This is a simple element containing a headline and this text. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
                                    </div>
                                </toujou-teaser>
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
}`,...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const g=["TeaserSlider"];export{t as TeaserSlider,g as __namedExportsOrder,h as default};
