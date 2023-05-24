import{T as u}from"./badgeCustomConfig-e7a687d5.js";import{j as e}from"./jsx-runtime-ac05983f.js";import{u as l}from"./index-a9a8c754.js";import"./index-e0ddb630.js";import"./_commonjsHelpers-87174ba5.js";function a(t){const i=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},l(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"review-list",children:"review-list"}),`
`,e.jsx(i.p,{children:'The review-list element renders a list of "review" cards'}),`
`,e.jsx(i.h2,{id:"markup-example",children:"Markup example"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<div class="reviews">
    <article class="review">
        <header class="review__header">
            <h3 class="review__title">Nice holiday</h3>
            <div class="review__infos">
                <p class="review__info review__info--name">
                    <span class="review__info-label">Name:</span>
                    Max Mustermann
                </p>
                <time datetime="03-02-2023" class="review__info review__info--date">
                    <span class="review__info-label">Datum:</span>
                    03.02.2023
                </time>
                <p class="review__info review__info--link">
                    <span class="review__info-label">Seite:</span>
                    <a href="#" class="review__info-link">Trip B</a>
                </p>
                <span class="review__rating">
                    <toujou-rating-stars class="rating-stars" rating-entity="★" rating-total="5" rating-value="4.4" rating-entity-size="m" style="--rating-stars-percentage:12%;">
                    </toujou-rating-stars>
                </span>
            </div>
        </header>
        <div class="review__content">
            <figure class="review__figure">
                <img src="https://picsum.photos/640" alt="nice photo" class="review__image">
            </figure>
            <toujou-clamped-content>
                <div class="review__review" slot="clamped-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <button class="button" slot="show-button" button-variant="primary" button-size="tiny" button-type="border">Show content</button>
                <button class="button" slot="hide-button" button-variant="primary" button-size="tiny" button-type="border">Hide content</button>
            </toujou-clamped-content>
        </div>
        <footer class="review__footer">
            <h4 class="review__footer-title">Comment</h4>
            <p class="review__comment">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </footer>
    </article>
</div>
`})}),`
`,e.jsx(i.p,{children:`The card's "content" section will be clamped to 3 lines if it has enough content. In this case, there will be a "content toggle" button visible, which will expand / clamp the content.`}),`
`,e.jsx(i.p,{children:"Each review card can also show a comment from the website owner."})]})}function c(t={}){const{wrapper:i}=Object.assign({},l(),t.components);return i?e.jsx(i,Object.assign({},t,{children:e.jsx(a,t)})):a(t)}const b={title:"COMPONENTS/ReviewList",parameters:{badges:[u.DONE],docs:{page:c}}},d=()=>`
        <div class="reviews">
            <article class="review">
                <header class="review__header">
                    <h3 class="review__title">Nice holiday</h3>
                    <div class="review__infos">
                        <p class="review__info review__info--name">
                            <span class="review__info-label">Name:</span>
                            Max Mustermann
                        </p>
                        <time datetime="03-02-2023" class="review__info review__info--date">
                            <span class="review__info-label">Datum:</span>
                            03.02.2023
                        </time>
                        <p class="review__info review__info--link">
                            <span class="review__info-label">Seite:</span>
                            <a href="#" class="review__info-link">Trip B</a>
                        </p>
                        <span class="review__rating">
                            <toujou-rating-stars
                                class="rating-stars"
                                rating-entity="★"
                                rating-total="5"
                                rating-value="4.4"
                                rating-entity-size="m"
                            >
                            </toujou-rating-stars>
                        </span>
                    </div>
                </header>
                <div class="review__content">
                    <figure class="review__figure">
                        <img src="https://picsum.photos/640" alt="nice photo" class="review__image">
                    </figure>
                    <toujou-clamped-content>
                        <div class="review__review" slot="clamped-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <button class="button" slot="show-button" button-variant="primary" button-size="tiny" button-type="border">Show content</button>
                        <button class="button" slot="hide-button" button-variant="primary" button-size="tiny" button-type="border">Hide content</button>
                    </toujou-clamped-content>
                </div>
                <footer class="review__footer">
                    <h4 class="review__footer-title">Comment</h4>
                    <p class="review__comment">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </footer>
            </article>
            
            <article class="review" no-media>
                <header class="review__header">
                    <h3 class="review__title">Amazing sightseeing trip</h3>
                    <div class="review__infos">
                        <p class="review__info review__info--name">
                            <span class="review__info-label">Name:</span>
                            Max Mustermann
                        </p>
                        <time datetime="03-02-2023" class="review__info review__info--date">
                            <span class="review__info-label">Datum:</span>
                            03.02.2023
                        </time>
                        <p class="review__info review__info--link">
                            <span class="review__info-label">Seite:</span>
                            <a href="#" class="review__info-link">Trip A</a>
                        </p>
                        <span class="review__rating">
                            <toujou-rating-stars
                                class="rating-stars"
                                rating-entity="★"
                                rating-total="5"
                                rating-value="4.8"
                                rating-entity-size="m"
                            >
                            </toujou-rating-stars>
                        </span>
                    </div>
                </header>
                <div class="review__content">
                    <toujou-clamped-content>
                        <div class="review__review" slot="clamped-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <button class="button" slot="show-button" button-variant="primary" button-size="tiny" button-type="border">Show content</button>
                        <button class="button" slot="hide-button" button-variant="primary" button-size="tiny" button-type="border">Hide content</button>
                    </toujou-clamped-content>
                </div>
                <footer class="review__footer">
                    <h4 class="review__footer-title">Comment</h4>
                    <p class="review__comment">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </footer>
            </article>
            
            <article class="review">
                <header class="review__header">
                    <h3 class="review__title">Our dream trip</h3>
                    <div class="review__infos">
                        <p class="review__info review__info--name">
                            <span class="review__info-label">Name:</span>
                            Max Mustermann
                        </p>
                        <time datetime="03-02-2023" class="review__info review__info--date">
                            <span class="review__info-label">Datum:</span>
                            03.02.2023
                        </time>
                        <p class="review__info review__info--link">
                            <span class="review__info-label">Seite:</span>
                            <a href="#" class="review__info-link">Trip A</a>
                        </p>
                        <span class="review__rating">
                            <toujou-rating-stars
                                class="rating-stars"
                                rating-entity="★"
                                rating-total="5"
                                rating-value="3.5"
                                rating-entity-size="m"
                            >
                            </toujou-rating-stars>
                        </span>
                    </div>
                </header>
                <div class="review__content">
                    <toujou-slider
                        class="slider"
                        content-type="review"
                        aria-label="Toujou slider example"
                        element-design="primary"
                        slides-to-show="1"
                        slider-gap="var(--slider-slides-gap)"
                        slider-aspect-ratio="0.5625"
                        arrow-first-aria-label="Go to first slide"
                        arrow-last-aria-label="Go to last slide"
                        arrow-prev-aria-label="Go to previous slide"
                        arrow-next-aria-label="Go to next slide"
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
                                            <img class="single-media__image" src="https://picsum.photos/1600/900" alt="Nice image">
                                        </toujou-single-media>
                                    </li>
                                    <li class="splide__slide slider-slide">
                                        <toujou-single-media class="single-media slider__item" slot="slider-item">
                                            <img class="single-media__image" src="https://picsum.photos/1600/901" alt="Nice image">
                                        </toujou-single-media>
                                    </li>
                                    <li class="splide__slide slider-slide">
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
                    <toujou-clamped-content>
                        <div class="review__review" slot="clamped-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <button class="button" slot="show-button" button-variant="primary" button-size="tiny" button-type="border">Show content</button>
                        <button class="button" slot="hide-button" button-variant="primary" button-size="tiny" button-type="border">Hide content</button>
                    </toujou-clamped-content>
                </div>
                <footer class="review__footer">
                    <h4 class="review__footer-title">Comment</h4>
                    <p class="review__comment">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </footer>
            </article>
            
            <article class="review" no-media>
                <header class="review__header">
                    <h3 class="review__title">Amazing sightseeing trip</h3>
                    <div class="review__infos">
                        <p class="review__info review__info--name">
                            <span class="review__info-label">Name:</span>
                            Max Mustermann
                        </p>
                        <time datetime="03-02-2023" class="review__info review__info--date">
                            <span class="review__info-label">Datum:</span>
                            03.02.2023
                        </time>
                        <p class="review__info review__info--link">
                            <span class="review__info-label">Seite:</span>
                            <a href="#" class="review__info-link">Trip A</a>
                        </p>
                        <span class="review__rating">
                            <toujou-rating-stars
                                class="rating-stars"
                                rating-entity="★"
                                rating-total="5"
                                rating-value="4.8"
                                rating-entity-size="m"
                            >
                            </toujou-rating-stars>
                        </span>
                    </div>
                </header>
                <div class="review__content">
                    <toujou-clamped-content>
                        <div class="review__review" slot="clamped-content">
                            <p>Short review text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <button class="button" slot="show-button" button-variant="primary" button-size="tiny" button-type="border">Show content</button>
                        <button class="button" slot="hide-button" button-variant="primary" button-size="tiny" button-type="border">Hide content</button>
                    </toujou-clamped-content>
                </div>
                <footer class="review__footer">
                    <h4 class="review__footer-title">Comment</h4>
                    <p class="review__comment">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </footer>
            </article>
        </div>
    `,n=d.bind({});var s,o,r;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return \`
        <div class="reviews">
            <article class="review">
                <header class="review__header">
                    <h3 class="review__title">Nice holiday</h3>
                    <div class="review__infos">
                        <p class="review__info review__info--name">
                            <span class="review__info-label">Name:</span>
                            Max Mustermann
                        </p>
                        <time datetime="03-02-2023" class="review__info review__info--date">
                            <span class="review__info-label">Datum:</span>
                            03.02.2023
                        </time>
                        <p class="review__info review__info--link">
                            <span class="review__info-label">Seite:</span>
                            <a href="#" class="review__info-link">Trip B</a>
                        </p>
                        <span class="review__rating">
                            <toujou-rating-stars
                                class="rating-stars"
                                rating-entity="★"
                                rating-total="5"
                                rating-value="4.4"
                                rating-entity-size="m"
                            >
                            </toujou-rating-stars>
                        </span>
                    </div>
                </header>
                <div class="review__content">
                    <figure class="review__figure">
                        <img src="https://picsum.photos/640" alt="nice photo" class="review__image">
                    </figure>
                    <toujou-clamped-content>
                        <div class="review__review" slot="clamped-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <button class="button" slot="show-button" button-variant="primary" button-size="tiny" button-type="border">Show content</button>
                        <button class="button" slot="hide-button" button-variant="primary" button-size="tiny" button-type="border">Hide content</button>
                    </toujou-clamped-content>
                </div>
                <footer class="review__footer">
                    <h4 class="review__footer-title">Comment</h4>
                    <p class="review__comment">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </footer>
            </article>
            
            <article class="review" no-media>
                <header class="review__header">
                    <h3 class="review__title">Amazing sightseeing trip</h3>
                    <div class="review__infos">
                        <p class="review__info review__info--name">
                            <span class="review__info-label">Name:</span>
                            Max Mustermann
                        </p>
                        <time datetime="03-02-2023" class="review__info review__info--date">
                            <span class="review__info-label">Datum:</span>
                            03.02.2023
                        </time>
                        <p class="review__info review__info--link">
                            <span class="review__info-label">Seite:</span>
                            <a href="#" class="review__info-link">Trip A</a>
                        </p>
                        <span class="review__rating">
                            <toujou-rating-stars
                                class="rating-stars"
                                rating-entity="★"
                                rating-total="5"
                                rating-value="4.8"
                                rating-entity-size="m"
                            >
                            </toujou-rating-stars>
                        </span>
                    </div>
                </header>
                <div class="review__content">
                    <toujou-clamped-content>
                        <div class="review__review" slot="clamped-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <button class="button" slot="show-button" button-variant="primary" button-size="tiny" button-type="border">Show content</button>
                        <button class="button" slot="hide-button" button-variant="primary" button-size="tiny" button-type="border">Hide content</button>
                    </toujou-clamped-content>
                </div>
                <footer class="review__footer">
                    <h4 class="review__footer-title">Comment</h4>
                    <p class="review__comment">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </footer>
            </article>
            
            <article class="review">
                <header class="review__header">
                    <h3 class="review__title">Our dream trip</h3>
                    <div class="review__infos">
                        <p class="review__info review__info--name">
                            <span class="review__info-label">Name:</span>
                            Max Mustermann
                        </p>
                        <time datetime="03-02-2023" class="review__info review__info--date">
                            <span class="review__info-label">Datum:</span>
                            03.02.2023
                        </time>
                        <p class="review__info review__info--link">
                            <span class="review__info-label">Seite:</span>
                            <a href="#" class="review__info-link">Trip A</a>
                        </p>
                        <span class="review__rating">
                            <toujou-rating-stars
                                class="rating-stars"
                                rating-entity="★"
                                rating-total="5"
                                rating-value="3.5"
                                rating-entity-size="m"
                            >
                            </toujou-rating-stars>
                        </span>
                    </div>
                </header>
                <div class="review__content">
                    <toujou-slider
                        class="slider"
                        content-type="review"
                        aria-label="Toujou slider example"
                        element-design="primary"
                        slides-to-show="1"
                        slider-gap="var(--slider-slides-gap)"
                        slider-aspect-ratio="0.5625"
                        arrow-first-aria-label="Go to first slide"
                        arrow-last-aria-label="Go to last slide"
                        arrow-prev-aria-label="Go to previous slide"
                        arrow-next-aria-label="Go to next slide"
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
                                            <img class="single-media__image" src="https://picsum.photos/1600/900" alt="Nice image">
                                        </toujou-single-media>
                                    </li>
                                    <li class="splide__slide slider-slide">
                                        <toujou-single-media class="single-media slider__item" slot="slider-item">
                                            <img class="single-media__image" src="https://picsum.photos/1600/901" alt="Nice image">
                                        </toujou-single-media>
                                    </li>
                                    <li class="splide__slide slider-slide">
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
                    <toujou-clamped-content>
                        <div class="review__review" slot="clamped-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <button class="button" slot="show-button" button-variant="primary" button-size="tiny" button-type="border">Show content</button>
                        <button class="button" slot="hide-button" button-variant="primary" button-size="tiny" button-type="border">Hide content</button>
                    </toujou-clamped-content>
                </div>
                <footer class="review__footer">
                    <h4 class="review__footer-title">Comment</h4>
                    <p class="review__comment">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </footer>
            </article>
            
            <article class="review" no-media>
                <header class="review__header">
                    <h3 class="review__title">Amazing sightseeing trip</h3>
                    <div class="review__infos">
                        <p class="review__info review__info--name">
                            <span class="review__info-label">Name:</span>
                            Max Mustermann
                        </p>
                        <time datetime="03-02-2023" class="review__info review__info--date">
                            <span class="review__info-label">Datum:</span>
                            03.02.2023
                        </time>
                        <p class="review__info review__info--link">
                            <span class="review__info-label">Seite:</span>
                            <a href="#" class="review__info-link">Trip A</a>
                        </p>
                        <span class="review__rating">
                            <toujou-rating-stars
                                class="rating-stars"
                                rating-entity="★"
                                rating-total="5"
                                rating-value="4.8"
                                rating-entity-size="m"
                            >
                            </toujou-rating-stars>
                        </span>
                    </div>
                </header>
                <div class="review__content">
                    <toujou-clamped-content>
                        <div class="review__review" slot="clamped-content">
                            <p>Short review text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <button class="button" slot="show-button" button-variant="primary" button-size="tiny" button-type="border">Show content</button>
                        <button class="button" slot="hide-button" button-variant="primary" button-size="tiny" button-type="border">Hide content</button>
                    </toujou-clamped-content>
                </div>
                <footer class="review__footer">
                    <h4 class="review__footer-title">Comment</h4>
                    <p class="review__comment">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </footer>
            </article>
        </div>
    \`;
}`,...(r=(o=n.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const f=["ReviewList"];export{n as ReviewList,f as __namedExportsOrder,b as default};
//# sourceMappingURL=review-list.stories-df74538e.js.map
