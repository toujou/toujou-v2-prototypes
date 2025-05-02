import { StoryFn, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import reviewListDocs from './review-list.docs.mdx';

export default {
    title: 'COMPONENTS/Review List',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: reviewListDocs,
        },
        args: {
            showPagination: {
                table: {
                    category: "review List Settings",
                },
                name: 'Show pagination',
                description: "Show the review list pagination element",
                control: { type: 'boolean' },
                required: true,
            },
        }
    },
} satisfies Meta;

interface ReviewListProps {
    showPagination: boolean
}

const reviewsComponent = (showPagination: boolean) => {
    return `
        <div class="reviews">
            <article class="review" title="review-title-1" aria-roledescription="Review" id="review-1">
                <header class="review__header">
                    <h3 class="review__title" id="review-title-1">Nice holiday</h3>
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

            <article class="review" title="review-title-2" no-media aria-roledescription="Review" id="review-2">
                <header class="review__header">
                    <h3 class="review__title" id="review-title-2">Amazing sightseeing trip</h3>
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

            <article class="review" title="review-title-3" aria-roledescription="Review" id="review-3">
                <header class="review__header">
                    <h3 class="review__title" id="review-title-3">Our dream trip</h3>
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

            <article class="review" title="review-title-4" no-media aria-roledescription="Review" id="review-4">
                <header class="review__header">
                    <h3 class="review__title" id="review-title-4">Amazing sightseeing trip</h3>
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
            
            ${showPagination ? renderReviewListPagination() : ''}
        </div>
    `;
}

const renderReviewListPagination = () => {
    return `
        <ul class="pagination" role="navigation" aria-label="Pagination">
            <li class="pagination__item pagination__item--next ">
                <a
                    href="#"
                    class="button pagination__button pagination__link pagination__link--arrow pagination__link--prev"
                    aria-label="Previous page"
                >
                    <toujou-icon class="icon" icon-color="primary" icon-size="normal" icon-name="chevron-left"></toujou-icon>
                </a>
            </li
            <li class="pagination__pages-container">
                
                <ul class="pagination__pages">
                    <li class="pagination__item">
                        <a href="#" class="pagination__link" aria-current="page">1</a>
                    </li>
                    <li class="pagination__item">
                        <a href="#" class="pagination__link">2</a>
                    </li>
                    <li class="pagination__item">
                        <a href="#" class="pagination__link">3</a>
                    </li>
                    <li class="pagination__item">
                        <a href="#" class="pagination__link">4</a>
                    </li>
                </ul>
            </li>
            <li class="pagination__item pagination__item--next ">
                <a
                    href="#"
                    class="button pagination__button pagination__link pagination__link--arrow pagination__link--prev"
                    aria-label="Next page"
                >
                    <toujou-icon class="icon" icon-color="primary" icon-size="normal" icon-name="chevron-right"></toujou-icon>
                </a>
            </li>
        </ul>              
    `
}

const Template: StoryFn<ReviewListProps> = (args: ReviewListProps) => {
    return `
        <main>
            ${reviewsComponent(args.showPagination)}

            <section class="chapter" background-color="primary" font-color="primary-light">
                ${reviewsComponent(args.showPagination)}
            </section>
        </main>
    `;
};

export const ReviewList = Template.bind({});

ReviewList.args = {
    showPagination: false
}
