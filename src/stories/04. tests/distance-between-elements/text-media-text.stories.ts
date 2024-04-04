import { Meta } from '@storybook/web-components';

export default {
    title: 'TESTS/Distance between',
} satisfies Meta;

const Template = () => {
    return `
        <main>
            <toujou-text-block class="text-block" text-block-column-count="1">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h1>Left aligned H1 headline</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <h2>Left aligned H2 headline</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>

            <toujou-media-grid class="media-grid" media-grid-column-number="2">
                <toujou-single-media class="single-media">
                    <img class="single-media__image" src="https://picsum.photos/1600/900" alt="Nice image">
                </toujou-single-media>
                <toujou-single-media class="single-media">
                    <img class="single-media__image" src="https://picsum.photos/1600/900" alt="Nice image">
                </toujou-single-media>
            </toujou-media-grid>

            <toujou-text-block class="text-block" text-block-column-count="1">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h1>Left aligned H1 headline</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <h2>Left aligned H2 headline</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>

            <toujou-slider
                class="slider"
                content-type="logos"
                aria-label="Toujou slider example"
                element-design="default"
                slides-per-move="1"
                slider-type="loop"
                slider-gap="var(--slider-slides-gap)"
                slides-to-show="5"
                slider-breakpoints='{"640":{"perPage":2},"768":{"perPage":3},"840":{"perPage":4},"1024":{"perPage":4}}'
                slider-aspect-ratio="auto"
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
                            <li class="splide__slide slider-slide" data-splide-interval="6000">
                                <toujou-single-media class="single-media slider__item" slot="slider-item">
                                    <img class="single-media__image" src="https://picsum.photos/200" alt="Nice image">
                                </toujou-single-media>
                            </li>
                            <li class="splide__slide slider-slide" data-splide-interval="6000">
                                <toujou-single-media class="single-media slider__item" slot="slider-item">
                                    <img class="single-media__image" src="https://picsum.photos/201" alt="Nice image">
                                </toujou-single-media>
                            </li>
                            <li class="splide__slide slider-slide" data-splide-interval="6000">
                                <toujou-single-media class="single-media slider__item" slot="slider-item">
                                    <img class="single-media__image" src="https://picsum.photos/202" alt="Nice image">
                                </toujou-single-media>
                            </li>
                            <li class="splide__slide slider-slide" data-splide-interval="6000">
                                <toujou-single-media class="single-media slider__item" slot="slider-item">
                                    <img class="single-media__image" src="https://picsum.photos/203" alt="Nice image">
                                </toujou-single-media>
                            </li>
                            <li class="splide__slide slider-slide" data-splide-interval="6000">
                                <toujou-single-media class="single-media slider__item" slot="slider-item">
                                    <img class="single-media__image" src="https://picsum.photos/204" alt="Nice image">
                                </toujou-single-media>
                            </li>
                            <li class="splide__slide slider-slide" data-splide-interval="6000">
                                <toujou-single-media class="single-media slider__item" slot="slider-item">
                                    <img class="single-media__image" src="https://picsum.photos/205" alt="Nice image">
                                </toujou-single-media>
                            </li>
                            <li class="splide__slide slider-slide" data-splide-interval="6000">
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

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </main>
    `;
};

export const TextMediaText = Template.bind({});


