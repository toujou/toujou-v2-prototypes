import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import portfolioGalleryDocs from './portfolio-gallery.docs.mdx';

import "../../../js/elements/photoswipe-lightbox-creator";

export default {
    title: 'COMPONENTS/Portfolio Gallery',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: portfolioGalleryDocs,
        },
        layout: 'fullscreen',
    },
    tags: ['autodocs']
} satisfies Meta;


const Template = () => {
    return `
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
    `;
};

export const PortfolioGallery = Template.bind({});

