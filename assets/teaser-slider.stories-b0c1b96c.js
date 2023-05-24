import{T as d}from"./badgeCustomConfig-e7a687d5.js";import{j as e}from"./jsx-runtime-ac05983f.js";import{u as o}from"./index-a9a8c754.js";import"./index-e0ddb630.js";import"./_commonjsHelpers-87174ba5.js";function r(i){const s=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",a:"a"},o(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{id:"teaser-slider",children:"teaser slider"}),`
`,e.jsx(s.p,{children:"The teaser slider renders multiple teaser elements inside a slider"}),`
`,e.jsx(s.h2,{id:"markup-example",children:"Markup example"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<toujou-slider
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
`,e.jsxs(s.p,{children:["| For more information about the slider element, please refer to the ",e.jsx(s.a,{href:"/docs/components-media--slider",children:"Slider docs"})]})]})}function c(i={}){const{wrapper:s}=Object.assign({},o(),i.components);return s?e.jsx(s,Object.assign({},i,{children:e.jsx(r,i)})):r(i)}const v={title:"COMPONENTS/Teaser",parameters:{badges:[d.DONE],docs:{page:c}},argTypes:{}},u=()=>`

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
                            <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="left" element-design="default">
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
                            <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="left" element-design="default">
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
                            <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="left" element-design="default">
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
                            <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="left" element-design="default">
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
    `,t=u.bind({});var a,n,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return \`

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
                            <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="left" element-design="default">
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
                            <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="left" element-design="default">
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
                            <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="left" element-design="default">
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
                            <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="left" element-design="default">
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
    \`;
}`,...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const f=["TeaserSlider"];export{t as TeaserSlider,f as __namedExportsOrder,v as default};
//# sourceMappingURL=teaser-slider.stories-b0c1b96c.js.map
