import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as u}from"./index-kYMsDC90.js";import"./iframe-DILOFI4D.js";import"./preload-helper-C1FmrZbK.js";function n(i){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...u(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"pn-navigation",children:"PN Navigation"}),`
`,e.jsx(t.p,{children:'The "previous / next page navigation" element can be added as a content element to any page ("Widgets" tab on the new element wizard).'}),`
`,e.jsx(t.p,{children:"It provides a way to navigate to a previous or next page inside the same folder, which is very nice for instance on recipe or product pages."}),`
`,e.jsx(t.p,{children:"The element is fixed in the middle of the screen and shows an arrow. On :hover it also shows the title and resource image of the target page."}),`
`,e.jsx(t.h2,{id:"markup-example",children:"Markup example:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<toujou-pn-nav class="pn-nav" aria-label="Page navigation buttons">
    <link rel="prefetch" href="link1">
    <link rel="prefetch" href="link2">
    <a href="link1" class="pn-nav__link" button-direction="prev" title="Vorherige Seite">
        <span class="pn-nav__button">
            <toujou-icon class="icon pn-nav__icon" icon-name="arrow-left" icon-size="m" icon-color="background"></toujou-icon>
        </span>
        <span class="pn-nav__content">
            <span class="pn-nav__title">Another Page</span>
            <img src="https://picsum.photos/72" alt="beautiful image" class="pn-nav__image">
        </span>
    </a>
    <a href="link2" class="pn-nav__link" button-direction="next" title="Nächste Seite">
        <span class="pn-nav__button">
            <toujou-icon class="icon pn-nav__icon" icon-name="arrow-right" icon-size="m" icon-color="background"></toujou-icon>
        </span>
        <span class="pn-nav__content">
            <span class="pn-nav__title">Nice Page</span>
            <img src="https://picsum.photos/72" alt="beautiful image" class="pn-nav__image">
        </span>
    </a>
</toujou-pn-nav>
`})}),`
`,e.jsx(t.h2,{id:"toujou-library",children:"Toujou library"}),`
`,e.jsxs(t.p,{children:["The toujou library has a link with some information about this content element ",e.jsx(t.a,{href:"https://www.toujou.de/service/elementbibliothek/widgets/previous/next-page-navigation/",rel:"nofollow",children:"here"})]}),`
`,e.jsx(t.h2,{id:"attributes",children:"Attributes"}),`
`,e.jsx(t.h3,{id:"image-hidden",children:"image-hidden"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"image-hidden"})," attribute is added to the element when the users set the ",e.jsx(t.code,{children:"showImage"})," to ",e.jsx(t.code,{children:"0"})," on the settings."]}),`
`,e.jsx(t.p,{children:"Typoscript:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typo3_typoscript",children:`tt_content.prev_next_nav.20.settings {
    showImage = 0
}
`})}),`
`,e.jsx(t.h3,{id:"title-hidden",children:"title-hidden"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"image-hidden"})," attribute is added to the element when the users set the ",e.jsx(t.code,{children:"showTitle"})," to ",e.jsx(t.code,{children:"0"})," on the settings."]}),`
`,e.jsx(t.p,{children:"Typoscript:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typo3_typoscript",children:`tt_content.prev_next_nav.20.settings {
    showTitle = 0
}
`})})]})}function c(i={}){const{wrapper:t}={...u(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(n,{...i})}):n(i)}const _={title:"COMPONENTS/P N Nav",parameters:{docs:{page:c},layout:"fullscreen"},argTypes:{hideImage:{table:{category:"PN navigation settings"},name:"Hide image",description:"Hide the link image",control:{type:"boolean"},required:!0},hideTitle:{table:{category:"PN navigation settings"},name:"Hide title",description:"Hide the link title",control:{type:"boolean"},required:!0}}},r=i=>`
        <main>
            <toujou-breadcrumb role="navigation" aria-label="Breadcrumb" class="breadcrumb">
                <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--open">
                    <toujou-icon class="icon breadcrumb__toggle-icon" icon-name="arrow-left"></toujou-icon>
                </button>

                <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--close">
                    <toujou-icon class="icon breadcrumb__toggle-icon" icon-name="close"></toujou-icon>
                </button>

                <ol class="breadcrumb__list" slot="list">
                    <li class="breadcrumb__item">
                        <a href="#" class="breadcrumb__link">Home</a>
                    </li>
                    <li class="breadcrumb__item">
                        <a href="#" class="breadcrumb__link">Item One</a>
                    </li>
                    <li class="breadcrumb__item">
                        <a href="#" class="breadcrumb__link" aria-current="page">Item Two</a>
                    </li>
                </ol>
            </toujou-breadcrumb>

            <toujou-text-block class="text-block" text-blocks-column-count="1">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h1>This is a test page</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>

            <toujou-text-block class="text-block" text-blocks-column-count="3">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h3>Left aligned H3 headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h3>Left aligned H3 headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h3>Left aligned H3 headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>

            <toujou-slider
                class="slider"
                aria-label="Toujou slider example"
                element-design="default"
                auto-play-interval="6000"
                slides-to-show="1"
                slider-gap="var(--slider-slides-gap)"
                slider-aspect-ratio="0.5625"
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
                            <li class="splide__slide slider-slide" data-splide-interval="6000">
                                <toujou-single-media class="single-media slider__item" slot="slider-item">
                                    <img class="single-media__image" src="https://picsum.photos/1600/900" alt="Nice image">
                                </toujou-single-media>
                            </li>
                            <li class="splide__slide slider-slide" data-splide-interval="6000">
                                <toujou-single-media class="single-media slider__item" slot="slider-item">
                                    <img class="single-media__image" src="https://picsum.photos/1600/901" alt="Nice image">
                                </toujou-single-media>
                            </li>
                            <li class="splide__slide slider-slide" data-splide-interval="6000">
                                <toujou-single-media class="single-media slider__item" slot="slider-item">
                                    <img class="toujou-single-media__image" src="https://picsum.photos/1602/902" alt="Nice image">
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

            <toujou-text-block class="text-block" text-blocks-column-count="1">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>

            <toujou-blockquote-grid class="blockquote-grid" blockquote-grid-count="2">
                <toujou-blockquote role="figure" class="blockquote" blockquote-direction="vertical">
                    <img slot="image" class="blockquote__image" src="https://picsum.photos/200/200" alt="quote image" />
                    <blockquote slot="quote" class="blockquote__blockquote">
                        <p class="blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
                    </blockquote>
                    <figcaption slot="author" class="blockquote__author">Jack Handey</figcaption>
                </toujou-blockquote>

                <toujou-blockquote role="figure" class="blockquote" blockquote-direction="vertical">
                    <img slot="image" class="blockquote__image" src="https://picsum.photos/200/200" alt="quote image" />
                    <blockquote slot="quote" class="blockquote__blockquote">
                        <p class="blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
                    </blockquote>
                    <figcaption slot="author" class="blockquote__author">Jack Handey</figcaption>
                </toujou-blockquote>

            </toujou-blockquote-grid>

            <toujou-text-block class="text-block" text-blocks-column-count="1">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>

            <toujou-pn-nav
                class="pn-nav"
                aria-label="Page navigation buttons"
                ${i.hideImage===!0?"image-hidden":""}
                ${i.hideTitle===!0?"title-hidden":""}
            >
                <!-- We need to prefetch both the next and prev links -->
                <link rel="prefetch" href="#">
                <link rel="prefetch" href="#">
                <a href="#" class="pn-nav__link" button-direction="prev" title="Vorherige Seite">
                    <span class="pn-nav__button">
                        <toujou-icon class="icon pn-nav__icon" icon-name="arrow-left" icon-size="m" icon-color="background"></toujou-icon>
                    </span>

                    ${i.hideImage===!1||i.hideTitle===!1?`
                        <span class="pn-nav__content">
                            ${i.hideTitle===!1?`
                                <span class="pn-nav__title">Another Page</span>
                            `:""}
                            ${i.hideImage===!1?`
                                <img src="https://picsum.photos/72" alt="beautiful image" class="pn-nav__image">
                            `:""}
                        </span>
                    `:""}
                </a>
                <a href="#" class="pn-nav__link" button-direction="next" title="Nächste Seite">
                    <span class="pn-nav__button">
                        <toujou-icon class="icon pn-nav__icon" icon-name="arrow-right" icon-size="m" icon-color="background"></toujou-icon>
                    </span>
                    ${i.hideImage===!1||i.hideTitle===!1?`
                        <span class="pn-nav__content">
                            ${i.hideTitle===!1?`
                                <span class="pn-nav__title">Nice Page</span>
                            `:""}
                            ${i.hideImage===!1?`
                                <img src="https://picsum.photos/72" alt="beautiful image" class="pn-nav__image">
                            `:""}
                        </span>
                    `:""}
                </a>
            </toujou-pn-nav>
        </main>
    `,o=r.bind({});o.args={hideImage:!1,hideTitle:!1};var a,l,s;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`(args: PNNavStoryProps) => {
  return \`
        <main>
            <toujou-breadcrumb role="navigation" aria-label="Breadcrumb" class="breadcrumb">
                <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--open">
                    <toujou-icon class="icon breadcrumb__toggle-icon" icon-name="arrow-left"></toujou-icon>
                </button>

                <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--close">
                    <toujou-icon class="icon breadcrumb__toggle-icon" icon-name="close"></toujou-icon>
                </button>

                <ol class="breadcrumb__list" slot="list">
                    <li class="breadcrumb__item">
                        <a href="#" class="breadcrumb__link">Home</a>
                    </li>
                    <li class="breadcrumb__item">
                        <a href="#" class="breadcrumb__link">Item One</a>
                    </li>
                    <li class="breadcrumb__item">
                        <a href="#" class="breadcrumb__link" aria-current="page">Item Two</a>
                    </li>
                </ol>
            </toujou-breadcrumb>

            <toujou-text-block class="text-block" text-blocks-column-count="1">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h1>This is a test page</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>

            <toujou-text-block class="text-block" text-blocks-column-count="3">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h3>Left aligned H3 headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h3>Left aligned H3 headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h3>Left aligned H3 headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>

            <toujou-slider
                class="slider"
                aria-label="Toujou slider example"
                element-design="default"
                auto-play-interval="6000"
                slides-to-show="1"
                slider-gap="var(--slider-slides-gap)"
                slider-aspect-ratio="0.5625"
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
                            <li class="splide__slide slider-slide" data-splide-interval="6000">
                                <toujou-single-media class="single-media slider__item" slot="slider-item">
                                    <img class="single-media__image" src="https://picsum.photos/1600/900" alt="Nice image">
                                </toujou-single-media>
                            </li>
                            <li class="splide__slide slider-slide" data-splide-interval="6000">
                                <toujou-single-media class="single-media slider__item" slot="slider-item">
                                    <img class="single-media__image" src="https://picsum.photos/1600/901" alt="Nice image">
                                </toujou-single-media>
                            </li>
                            <li class="splide__slide slider-slide" data-splide-interval="6000">
                                <toujou-single-media class="single-media slider__item" slot="slider-item">
                                    <img class="toujou-single-media__image" src="https://picsum.photos/1602/902" alt="Nice image">
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

            <toujou-text-block class="text-block" text-blocks-column-count="1">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>

            <toujou-blockquote-grid class="blockquote-grid" blockquote-grid-count="2">
                <toujou-blockquote role="figure" class="blockquote" blockquote-direction="vertical">
                    <img slot="image" class="blockquote__image" src="https://picsum.photos/200/200" alt="quote image" />
                    <blockquote slot="quote" class="blockquote__blockquote">
                        <p class="blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
                    </blockquote>
                    <figcaption slot="author" class="blockquote__author">Jack Handey</figcaption>
                </toujou-blockquote>

                <toujou-blockquote role="figure" class="blockquote" blockquote-direction="vertical">
                    <img slot="image" class="blockquote__image" src="https://picsum.photos/200/200" alt="quote image" />
                    <blockquote slot="quote" class="blockquote__blockquote">
                        <p class="blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
                    </blockquote>
                    <figcaption slot="author" class="blockquote__author">Jack Handey</figcaption>
                </toujou-blockquote>

            </toujou-blockquote-grid>

            <toujou-text-block class="text-block" text-blocks-column-count="1">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>

            <toujou-pn-nav
                class="pn-nav"
                aria-label="Page navigation buttons"
                \${args.hideImage === true ? 'image-hidden' : ''}
                \${args.hideTitle === true ? 'title-hidden' : ''}
            >
                <!-- We need to prefetch both the next and prev links -->
                <link rel="prefetch" href="#">
                <link rel="prefetch" href="#">
                <a href="#" class="pn-nav__link" button-direction="prev" title="Vorherige Seite">
                    <span class="pn-nav__button">
                        <toujou-icon class="icon pn-nav__icon" icon-name="arrow-left" icon-size="m" icon-color="background"></toujou-icon>
                    </span>

                    \${args.hideImage === false || args.hideTitle === false ? \`
                        <span class="pn-nav__content">
                            \${args.hideTitle === false ? \`
                                <span class="pn-nav__title">Another Page</span>
                            \` : ''}
                            \${args.hideImage === false ? \`
                                <img src="https://picsum.photos/72" alt="beautiful image" class="pn-nav__image">
                            \` : ''}
                        </span>
                    \` : ''}
                </a>
                <a href="#" class="pn-nav__link" button-direction="next" title="Nächste Seite">
                    <span class="pn-nav__button">
                        <toujou-icon class="icon pn-nav__icon" icon-name="arrow-right" icon-size="m" icon-color="background"></toujou-icon>
                    </span>
                    \${args.hideImage === false || args.hideTitle === false ? \`
                        <span class="pn-nav__content">
                            \${args.hideTitle === false ? \`
                                <span class="pn-nav__title">Nice Page</span>
                            \` : ''}
                            \${args.hideImage === false ? \`
                                <img src="https://picsum.photos/72" alt="beautiful image" class="pn-nav__image">
                            \` : ''}
                        </span>
                    \` : ''}
                </a>
            </toujou-pn-nav>
        </main>
    \`;
}`,...(s=(l=o.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const g=["PNNav"];export{o as PNNav,g as __namedExportsOrder,_ as default};
