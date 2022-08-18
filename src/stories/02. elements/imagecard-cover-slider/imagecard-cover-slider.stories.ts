import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import imagecardCoverSliderDocs from "./imagecard-cover-slider.docs.mdx";

export default {
    title: 'COMPONENTS/Imagecard Cover Slider',
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: imagecardCoverSliderDocs,
        },
        layout: "fullscreen",
    },
} as Meta;

const Template = () => {
    return `
        <toujou-cover-slider class="cover-slider" aria-label="Toujou cover slider example">
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
                        <li class="splide__slide slider-slide cover-slider__item">
                            <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                <img class="single-media__image cover-slider__image" src="https://picsum.photos/1600/900" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide cover-slider__item">
                            <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                <img class="single-media__image cover-slider__image" src="https://picsum.photos/1600/901" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide cover-slider__item">
                            <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                <img class="toujou-single cover-slider__image-media__image" src="https://picsum.photos/1602/902" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide cover-slider__item">
                            <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                <img class="single-media__image cover-slider__image" src="https://picsum.photos/1603/904" alt="Nice image">
                            </toujou-single-media>
                        </li>
                    </ul>
                </div>      
            </div>
        </toujou-cover-slider>
    `;
};

export const ImagecardCoverSlider = Template.bind({});


