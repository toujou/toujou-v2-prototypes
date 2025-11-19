import{j as i}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as r}from"./index-CRzp4L3x.js";import"./photoswipe-lightbox-creator-JZb7R8tM.js";import"./iframe-D5j8fre0.js";import"./preload-helper-C1FmrZbK.js";function t(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...s.components};return i.jsxs(i.Fragment,{children:[i.jsx(e.h1,{id:"portfolio-gallery",children:"Portfolio gallery"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsx(e.li,{children:'The portfolio gallery render a slider on mobile and an "image grid" on desktop devices.'}),`
`,i.jsx(e.li,{children:'On mobile it shows a "counter" element'}),`
`,i.jsx(e.li,{children:"On desktop the button is shown only if the maximum number of images is achieved"}),`
`]}),`
`,i.jsx(e.h2,{id:"markup-example",children:"Markup example"}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-html",children:`<toujou-portfolio-gallery class="portfolio-gallery" id="test-portfolio" number-of-items="2" lightbox-parent-id="123">
    <toujou-slider
        slot="slider"
        class="slider"
        show-count
        aria-label="Toujou slider example"
        element-design="default"
        slider-fullwidth
        slides-to-show="1"
        slider-gap="var(--slider-slides-gap)"
        slider-aspect-ratio="0.5625"
        slider-type="slider"
        arrow-first-aria-label="Go to first slide"
        arrow-last-aria-label="Go to last slide"
        arrow-prev-aria-label="Go to previous slide"
        arrow-next-aria-label="Go to next slide"
    >
        <div class="splide slider__slider">
            <div class="splide__track slider__track">
                <ul class="splide__list slider__list">
                    <li class="splide__slide slider-slide">
                        <a href="https://picsum.photos/1600/900"
                            data-pswp-width="1600"
                            data-pswp-height="900"
                            target="_blank"
                            class="slider__item portfolio-gallery__link"
                            title="This is a beautiful caption"
                            lightbox-item-id="1"
                        >
                            <toujou-single-media class="single-media" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/1600/900" alt="Nice image">
                            </toujou-single-media>
                        </a>
                    </li>
                    <li class="splide__slide slider-slide">
                        <a href="https://picsum.photos/1600/901"
                            data-pswp-width="1600"
                            data-pswp-height="901"
                            target="_blank"
                            class="slider__item portfolio-gallery__link"
                            title="This is another interesting caption"
                            lightbox-item-id="2"
                        >
                            <toujou-single-media class="single-media" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/1600/901" alt="Nice image">
                            </toujou-single-media>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <toujou-slider-count class="slider-count">
            <span class="slider-count__current"></span>
            <span class="slider-count__separator">of</span>
            <span class="slider-count__total"></span>
        </toujou-slider-count>
    </toujou-slider>
    <button class="button portfolio-gallery__button" button-variant="primary" button-size="normal" button-type="default" slot="button">
        <toujou-icon class="icon" icon-color="background" icon-size="normal" icon-name="image-collection"></toujou-icon>
        <span class="portfolio-gallery__button-text">See all</span>
    </button>
</toujou-portfolio-gallery>
`})}),`
`,i.jsx(e.h2,{id:"the-slots",children:"The slots"}),`
`,i.jsxs(e.h3,{id:"slider-slot-required",children:["slider slot ",i.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,i.jsxs(e.p,{children:["The slider element must have the ",i.jsx(e.code,{children:'slot="slider"'})," attribute"]}),`
`,i.jsxs(e.h3,{id:"button-slot-required",children:["button slot ",i.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,i.jsxs(e.p,{children:["The button element must have the ",i.jsx(e.code,{children:'slot="button"'})," attribute"]}),`
`,i.jsx(e.h2,{id:"attributes",children:"Attributes"}),`
`,i.jsx(e.h3,{id:"lightbox-parent-id",children:"lightbox-parent-id"}),`
`,i.jsx(e.p,{children:"For the portflio-gallery lightbox to work:"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"<portfolio-gallery>"})," element  needs to have the ",i.jsx(e.code,{children:"lightbox-parent-id"})]}),`
`,i.jsxs(e.li,{children:["All ",i.jsx(e.code,{children:"portfolio-gallery__link"})," elements must have the ",i.jsx(e.code,{children:"lightbox-item-id"})," attribute"]}),`
`]}),`
`,i.jsxs(e.h3,{id:"number-of-items-required",children:["number-of-items ",i.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,i.jsxs(e.p,{children:["The ",i.jsx(e.code,{children:"number-of-items"})," attribute on the portfolio element defines how many images we will show on desktop devices and should reflect the number of images on the slider."]}),`
`,i.jsxs(e.p,{children:["Valid values are ",i.jsx(e.code,{children:"1"}),", ",i.jsx(e.code,{children:"2"}),", ",i.jsx(e.code,{children:"3"}),", ",i.jsx(e.code,{children:"4"}),", ",i.jsx(e.code,{children:"5"})," and ",i.jsx(e.code,{children:"max"}),". ",i.jsx(e.code,{children:"max"})," should be added when the number of images is greater than 5"]}),`
`,i.jsxs(e.h3,{id:"slider-type-required",children:["slider-type ",i.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,i.jsxs(e.p,{children:["The slider element inside the portfolio element must have the ",i.jsx(e.code,{children:'slider-type="slider"'})," attribute"]}),`
`,i.jsxs(e.h3,{id:"is-header-required",children:["is-header ",i.jsx("toujou-chip",{class:"chip","chip-bg-color":"warning",children:"required"})]}),`
`,i.jsxs(e.p,{children:["The ",i.jsx(e.code,{children:"is-header"})," attribute must be added to the portfolio gallery element when it is displayed inside the header section of the page."]})]})}function d(s={}){const{wrapper:e}={...r(),...s.components};return e?i.jsx(e,{...s,children:i.jsx(t,{...s})}):t(s)}const _={title:"COMPONENTS/Portfolio Gallery",parameters:{docs:{page:d},layout:"fullscreen"},tags:["autodocs"]},c=()=>`
        <main>
            <toujou-portfolio-gallery class="portfolio-gallery" id="test-portfolio" number-of-items="max" is-header lightbox-parent-id="1">
                <toujou-slider
                    slot="slider"
                    class="slider"
                    show-count
                    aria-label="Toujou slider example"
                    element-design="default"
                    slider-fullwidth
                    slides-to-show="1"
                    slider-gap="var(--slider-slides-gap)"
                    slider-aspect-ratio="0.5625"
                    slider-type="slider"
                    arrow-first-aria-label="Go to first slide"
                    arrow-last-aria-label="Go to last slide"
                    arrow-prev-aria-label="Go to previous slide"
                    arrow-next-aria-label="Go to next slide"
                >
                    <div class="splide slider__slider">
                        <div class="splide__track slider__track">
                            <ul class="splide__list slider__list">
                                <li class="splide__slide slider-slide">
                                    <a href="https://picsum.photos/1600/900"
                                        data-pswp-width="1600"
                                        data-pswp-height="900"
                                        target="_blank"
                                        class="slider__item portfolio-gallery__link"
                                        title="This is a beautiful caption"
                                        lightbox-item-id="1"
                                    >
                                        <toujou-single-media class="single-media" slot="slider-item">
                                            <img class="single-media__image" src="https://picsum.photos/1600/900" alt="Nice image">
                                        </toujou-single-media>
                                    </a>
                                </li>
                                <li class="splide__slide slider-slide">
                                    <a href="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                                        data-pswp-width="1600"
                                        data-pswp-height="901"
                                        data-pswp-video-src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                                        data-pswp-type="video"
                                        target="_blank"
                                        class="slider__item portfolio-gallery__link portfolio-gallery__link--video"
                                        title="Nice image"
                                        lightbox-item-id="2"
                                    >
                                        <toujou-single-media class="single-media" slot="slider-item">
                                            <img class="single-media__image" src="https://picsum.photos/1600/901" alt="Nice video">
                                        </toujou-single-media>
                                    </a>
                                </li>
                                <li class="splide__slide slider-slide">
                                    <a href="https://picsum.photos/1600/902"
                                        data-pswp-width="1600"
                                        data-pswp-height="902"
                                        target="_blank"
                                        class="slider__item portfolio-gallery__link"
                                        lightbox-item-id="3"
                                    >
                                        <toujou-single-media class="single-media" slot="slider-item">
                                            <img class="single-media__image" src="https://picsum.photos/1600/902" alt="Nice image">
                                        </toujou-single-media>
                                    </a>
                                </li>
                                <li class="splide__slide slider-slide">
                                    <a href="https://picsum.photos/1600/903"
                                        data-pswp-width="1600"
                                        data-pswp-height="903"
                                        target="_blank"
                                        class="slider__item portfolio-gallery__link"
                                        title="Bazinga!"
                                        lightbox-item-id="4"
                                    >
                                        <toujou-single-media class="single-media" slot="slider-item">
                                            <img class="single-media__image" src="https://picsum.photos/1600/903" alt="Nice image">
                                        </toujou-single-media>
                                    </a>
                                </li>
                                <li class="splide__slide slider-slide">
                                    <a href="https://picsum.photos/1600/904"
                                        data-pswp-width="1600"
                                        data-pswp-height="904"
                                        target="_blank"
                                        class="slider__item portfolio-gallery__link"
                                        lightbox-item-id="5"
                                    >
                                        <toujou-single-media class="single-media" slot="slider-item">
                                            <img class="single-media__image" src="https://picsum.photos/1600/904" alt="Nice image">
                                        </toujou-single-media>
                                    </a>
                                </li>
                                <li class="splide__slide slider-slide">
                                    <a href="https://picsum.photos/1600/905"
                                        data-pswp-width="1600"
                                        data-pswp-height="905"
                                        target="_blank"
                                        class="slider__item portfolio-gallery__link"
                                        lightbox-item-id="6"
                                    >
                                        <toujou-single-media class="single-media" slot="slider-item">
                                            <img class="single-media__image" src="https://picsum.photos/1600/905" alt="Nice image">
                                        </toujou-single-media>
                                    </a>
                                </li>
                                <li class="splide__slide slider-slide">
                                    <a href="https://picsum.photos/1600/906"
                                        data-pswp-width="1600"
                                        data-pswp-height="906"
                                        target="_blank"
                                        class="slider__item portfolio-gallery__link"
                                        title="This is a realy well thought caption"
                                        lightbox-item-id="7"
                                    >
                                        <toujou-single-media class="single-media" slot="slider-item">
                                            <img class="single-media__image" src="https://picsum.photos/1600/906" alt="Nice image">
                                        </toujou-single-media>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <toujou-slider-count class="slider-count">
                        <span class="slider-count__current"></span>
                        <span class="slider-count__separator">of</span>
                        <span class="slider-count__total"></span>
                    </toujou-slider-count>
                </toujou-slider>
                <button class="button portfolio-gallery__button" button-variant="primary" button-size="normal" button-type="default" slot="button">
                    <toujou-icon class="icon" icon-color="background" icon-size="normal" icon-name="image-collection"></toujou-icon>
                    <span class="portfolio-gallery__button-text">See all</span>
                </button>
            </toujou-portfolio-gallery>
        </main>
    `,l=c.bind({});var o,a,n;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return \`
        <main>
            <toujou-portfolio-gallery class="portfolio-gallery" id="test-portfolio" number-of-items="max" is-header lightbox-parent-id="1">
                <toujou-slider
                    slot="slider"
                    class="slider"
                    show-count
                    aria-label="Toujou slider example"
                    element-design="default"
                    slider-fullwidth
                    slides-to-show="1"
                    slider-gap="var(--slider-slides-gap)"
                    slider-aspect-ratio="0.5625"
                    slider-type="slider"
                    arrow-first-aria-label="Go to first slide"
                    arrow-last-aria-label="Go to last slide"
                    arrow-prev-aria-label="Go to previous slide"
                    arrow-next-aria-label="Go to next slide"
                >
                    <div class="splide slider__slider">
                        <div class="splide__track slider__track">
                            <ul class="splide__list slider__list">
                                <li class="splide__slide slider-slide">
                                    <a href="https://picsum.photos/1600/900"
                                        data-pswp-width="1600"
                                        data-pswp-height="900"
                                        target="_blank"
                                        class="slider__item portfolio-gallery__link"
                                        title="This is a beautiful caption"
                                        lightbox-item-id="1"
                                    >
                                        <toujou-single-media class="single-media" slot="slider-item">
                                            <img class="single-media__image" src="https://picsum.photos/1600/900" alt="Nice image">
                                        </toujou-single-media>
                                    </a>
                                </li>
                                <li class="splide__slide slider-slide">
                                    <a href="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                                        data-pswp-width="1600"
                                        data-pswp-height="901"
                                        data-pswp-video-src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                                        data-pswp-type="video"
                                        target="_blank"
                                        class="slider__item portfolio-gallery__link portfolio-gallery__link--video"
                                        title="Nice image"
                                        lightbox-item-id="2"
                                    >
                                        <toujou-single-media class="single-media" slot="slider-item">
                                            <img class="single-media__image" src="https://picsum.photos/1600/901" alt="Nice video">
                                        </toujou-single-media>
                                    </a>
                                </li>
                                <li class="splide__slide slider-slide">
                                    <a href="https://picsum.photos/1600/902"
                                        data-pswp-width="1600"
                                        data-pswp-height="902"
                                        target="_blank"
                                        class="slider__item portfolio-gallery__link"
                                        lightbox-item-id="3"
                                    >
                                        <toujou-single-media class="single-media" slot="slider-item">
                                            <img class="single-media__image" src="https://picsum.photos/1600/902" alt="Nice image">
                                        </toujou-single-media>
                                    </a>
                                </li>
                                <li class="splide__slide slider-slide">
                                    <a href="https://picsum.photos/1600/903"
                                        data-pswp-width="1600"
                                        data-pswp-height="903"
                                        target="_blank"
                                        class="slider__item portfolio-gallery__link"
                                        title="Bazinga!"
                                        lightbox-item-id="4"
                                    >
                                        <toujou-single-media class="single-media" slot="slider-item">
                                            <img class="single-media__image" src="https://picsum.photos/1600/903" alt="Nice image">
                                        </toujou-single-media>
                                    </a>
                                </li>
                                <li class="splide__slide slider-slide">
                                    <a href="https://picsum.photos/1600/904"
                                        data-pswp-width="1600"
                                        data-pswp-height="904"
                                        target="_blank"
                                        class="slider__item portfolio-gallery__link"
                                        lightbox-item-id="5"
                                    >
                                        <toujou-single-media class="single-media" slot="slider-item">
                                            <img class="single-media__image" src="https://picsum.photos/1600/904" alt="Nice image">
                                        </toujou-single-media>
                                    </a>
                                </li>
                                <li class="splide__slide slider-slide">
                                    <a href="https://picsum.photos/1600/905"
                                        data-pswp-width="1600"
                                        data-pswp-height="905"
                                        target="_blank"
                                        class="slider__item portfolio-gallery__link"
                                        lightbox-item-id="6"
                                    >
                                        <toujou-single-media class="single-media" slot="slider-item">
                                            <img class="single-media__image" src="https://picsum.photos/1600/905" alt="Nice image">
                                        </toujou-single-media>
                                    </a>
                                </li>
                                <li class="splide__slide slider-slide">
                                    <a href="https://picsum.photos/1600/906"
                                        data-pswp-width="1600"
                                        data-pswp-height="906"
                                        target="_blank"
                                        class="slider__item portfolio-gallery__link"
                                        title="This is a realy well thought caption"
                                        lightbox-item-id="7"
                                    >
                                        <toujou-single-media class="single-media" slot="slider-item">
                                            <img class="single-media__image" src="https://picsum.photos/1600/906" alt="Nice image">
                                        </toujou-single-media>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <toujou-slider-count class="slider-count">
                        <span class="slider-count__current"></span>
                        <span class="slider-count__separator">of</span>
                        <span class="slider-count__total"></span>
                    </toujou-slider-count>
                </toujou-slider>
                <button class="button portfolio-gallery__button" button-variant="primary" button-size="normal" button-type="default" slot="button">
                    <toujou-icon class="icon" icon-color="background" icon-size="normal" icon-name="image-collection"></toujou-icon>
                    <span class="portfolio-gallery__button-text">See all</span>
                </button>
            </toujou-portfolio-gallery>
        </main>
    \`;
}`,...(n=(a=l.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const b=["PortfolioGallery"];export{l as PortfolioGallery,b as __namedExportsOrder,_ as default};
