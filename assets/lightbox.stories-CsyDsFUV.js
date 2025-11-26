import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as d}from"./index-w7BWpAKz.js";import"./photoswipe-lightbox-creator-JZb7R8tM.js";import"./iframe-CW61GAsd.js";import"./preload-helper-C1FmrZbK.js";function l(i){const s={h1:"h1",...d(),...i.components};return t.jsx(s.h1,{id:"lightbox",children:"Lightbox"})}function r(i={}){const{wrapper:s}={...d(),...i.components};return s?t.jsx(s,{...i,children:t.jsx(l,{...i})}):l(i)}const _={title:"COMPONENTS/Lightbox",parameters:{docs:{page:r}}},p=()=>`
        <h1>Grid 1</h1>
        <toujou-media-grid class="media-grid" media-grid-column-number="2" lightbox-parent-id="1">
            <toujou-single-media class="single-media">
                <a href="https://picsum.photos/2500/1600"
                    data-pswp-width="2500"
                    data-pswp-height="1600"
                    target="_blank"
                    class="lightbox-item"
                    title="This the first image on the first grid"
                    lightbox-item-id="111"
                >
                    <img class="single-media__image" src="https://picsum.photos/2500/1600" alt="Nice image">
                </a>
            </toujou-single-media>
            <toujou-single-media class="single-media">
                <a href="https://picsum.photos/2501/1600"
                    data-pswp-width="2501"
                    data-pswp-height="1600"
                    target="_blank"
                    class="lightbox-item"
                    title="This is the second image"
                    lightbox-item-id="222"
                >
                    <img class="single-media__image" src="https://picsum.photos/2501/1600" alt="Nice image">
                </a>
            </toujou-single-media>
        </toujou-media-grid>

        <h1>Grid 2</h1>
        <toujou-media-grid class="media-grid" media-grid-column-number="3" lightbox-parent-id="2">
            <toujou-single-media class="single-media">
                <a href="https://picsum.photos/2501/1603"
                    data-pswp-width="2502"
                    data-pswp-height="1600"
                    target="_blank"
                    class="lightbox-item"
                    title="This is a beautiful caption"
                    lightbox-item-id="333"
                >
                    <img class="single-media__image" src="https://picsum.photos/2501/1603" alt="Nice image">
                </a>
            </toujou-single-media>
            <toujou-single-media class="single-media">
                <a href="https://picsum.photos/2501/1604"
                    data-pswp-width="2503"
                    data-pswp-height="1600"
                    target="_blank"
                    class="lightbox-item"
                    lightbox-item-id="444"
                >
                    <img class="single-media__image" src="https://picsum.photos/2501/1604" alt="Nice image">
                </a>
            </toujou-single-media>
            <toujou-single-media class="single-media">
                <a href="https://picsum.photos/2501/1605"
                    data-pswp-width="2499"
                    data-pswp-height="1600"
                    target="_blank"
                    class="lightbox-item"
                    title="Another gallery"
                    lightbox-item-id="555"
                >
                    <img class="single-media__image" src="https://picsum.photos/2501/1605" alt="Nice image">
                </a>
            </toujou-single-media>
        </toujou-media-grid>
        
        <h1>Slider</h1>
         <toujou-slider
            class="slider"
            aria-label="Toujou slider example"
            element-design="default"
            slides-to-show="1"
            slider-type="loop"
            slider-gap="var(--slider-slides-gap)"
            slider-aspect-ratio="0.5625"
            arrow-first-aria-label="Go to first slide"
            arrow-last-aria-label="Go to last slide"
            arrow-prev-aria-label="Go to previous slide"
            arrow-next-aria-label="Go to next slide"
            lightbox-parent-id="3928"
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
                        <li class="splide__slide slider-slide">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <a
                                    href="https://picsum.photos/1600/901"
                                    class="slider__lightbox-link lightbox-3928"
                                    lightbox-item-id="3928"
                                    data-pswp-width="1600"
                                    data-pswp-height="901"
                                > 
                                    <img class="single-media__image" src="https://picsum.photos/1600/900" alt="Nice image">
                                </a>
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <a
                                    href="https://picsum.photos/1600/901"
                                    class="slider__lightbox-link lightbox-3928"
                                    lightbox-item-id="3928"
                                    data-pswp-width="1600"
                                    data-pswp-height="902"
                                > 
                                    <img class="single-media__image" src="https://picsum.photos/1600/901" alt="Nice image">
                                </a>
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <a
                                    href="https://picsum.photos/1600/902"
                                    class="slider__lightbox-link lightbox-3928"
                                    lightbox-item-id="3928"
                                    data-pswp-width="1600"
                                    data-pswp-height="902"
                                >                        
                                    <img class="single-media__image" src="https://picsum.photos/1600/902" alt="Nice image">
                                </a>
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <a
                                    href="https://picsum.photos/300/200"
                                    class="slider__lightbox-link lightbox-3928"
                                    lightbox-item-id="3928"
                                    data-pswp-width="300"
                                    data-pswp-height="200"
                                >
                                    <img class="single-media__image" src="https://picsum.photos/300/200" alt="Nice image">
                                </a>    
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
    `,e=p.bind({});var a,o,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return \`
        <h1>Grid 1</h1>
        <toujou-media-grid class="media-grid" media-grid-column-number="2" lightbox-parent-id="1">
            <toujou-single-media class="single-media">
                <a href="https://picsum.photos/2500/1600"
                    data-pswp-width="2500"
                    data-pswp-height="1600"
                    target="_blank"
                    class="lightbox-item"
                    title="This the first image on the first grid"
                    lightbox-item-id="111"
                >
                    <img class="single-media__image" src="https://picsum.photos/2500/1600" alt="Nice image">
                </a>
            </toujou-single-media>
            <toujou-single-media class="single-media">
                <a href="https://picsum.photos/2501/1600"
                    data-pswp-width="2501"
                    data-pswp-height="1600"
                    target="_blank"
                    class="lightbox-item"
                    title="This is the second image"
                    lightbox-item-id="222"
                >
                    <img class="single-media__image" src="https://picsum.photos/2501/1600" alt="Nice image">
                </a>
            </toujou-single-media>
        </toujou-media-grid>

        <h1>Grid 2</h1>
        <toujou-media-grid class="media-grid" media-grid-column-number="3" lightbox-parent-id="2">
            <toujou-single-media class="single-media">
                <a href="https://picsum.photos/2501/1603"
                    data-pswp-width="2502"
                    data-pswp-height="1600"
                    target="_blank"
                    class="lightbox-item"
                    title="This is a beautiful caption"
                    lightbox-item-id="333"
                >
                    <img class="single-media__image" src="https://picsum.photos/2501/1603" alt="Nice image">
                </a>
            </toujou-single-media>
            <toujou-single-media class="single-media">
                <a href="https://picsum.photos/2501/1604"
                    data-pswp-width="2503"
                    data-pswp-height="1600"
                    target="_blank"
                    class="lightbox-item"
                    lightbox-item-id="444"
                >
                    <img class="single-media__image" src="https://picsum.photos/2501/1604" alt="Nice image">
                </a>
            </toujou-single-media>
            <toujou-single-media class="single-media">
                <a href="https://picsum.photos/2501/1605"
                    data-pswp-width="2499"
                    data-pswp-height="1600"
                    target="_blank"
                    class="lightbox-item"
                    title="Another gallery"
                    lightbox-item-id="555"
                >
                    <img class="single-media__image" src="https://picsum.photos/2501/1605" alt="Nice image">
                </a>
            </toujou-single-media>
        </toujou-media-grid>
        
        <h1>Slider</h1>
         <toujou-slider
            class="slider"
            aria-label="Toujou slider example"
            element-design="default"
            slides-to-show="1"
            slider-type="loop"
            slider-gap="var(--slider-slides-gap)"
            slider-aspect-ratio="0.5625"
            arrow-first-aria-label="Go to first slide"
            arrow-last-aria-label="Go to last slide"
            arrow-prev-aria-label="Go to previous slide"
            arrow-next-aria-label="Go to next slide"
            lightbox-parent-id="3928"
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
                        <li class="splide__slide slider-slide">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <a
                                    href="https://picsum.photos/1600/901"
                                    class="slider__lightbox-link lightbox-3928"
                                    lightbox-item-id="3928"
                                    data-pswp-width="1600"
                                    data-pswp-height="901"
                                > 
                                    <img class="single-media__image" src="https://picsum.photos/1600/900" alt="Nice image">
                                </a>
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <a
                                    href="https://picsum.photos/1600/901"
                                    class="slider__lightbox-link lightbox-3928"
                                    lightbox-item-id="3928"
                                    data-pswp-width="1600"
                                    data-pswp-height="902"
                                > 
                                    <img class="single-media__image" src="https://picsum.photos/1600/901" alt="Nice image">
                                </a>
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <a
                                    href="https://picsum.photos/1600/902"
                                    class="slider__lightbox-link lightbox-3928"
                                    lightbox-item-id="3928"
                                    data-pswp-width="1600"
                                    data-pswp-height="902"
                                >                        
                                    <img class="single-media__image" src="https://picsum.photos/1600/902" alt="Nice image">
                                </a>
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <a
                                    href="https://picsum.photos/300/200"
                                    class="slider__lightbox-link lightbox-3928"
                                    lightbox-item-id="3928"
                                    data-pswp-width="300"
                                    data-pswp-height="200"
                                >
                                    <img class="single-media__image" src="https://picsum.photos/300/200" alt="Nice image">
                                </a>    
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const b=["Lightbox"];export{e as Lightbox,b as __namedExportsOrder,_ as default};
