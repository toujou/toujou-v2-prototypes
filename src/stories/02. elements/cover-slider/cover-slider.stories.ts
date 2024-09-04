import { StoryFn, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import coverSliderDocs from "./cover-slider.docs.mdx";

export default {
    title: 'COMPONENTS/Cover Slider',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: coverSliderDocs,
        },
        layout: "fullscreen",
    },
    argTypes: {
        isSlider: {
            table: {
                category: "Cover slider settings",
            },
            name: 'Is Slider',
            description: "It should only be a slider if it contains more items than it can fit on the page. Otherwise it should show the items centered on the page",
            control: { type: 'boolean' },
            defaultValue: [true],
            required: true,
        },
    },
    tags: ['autodocs']
} satisfies Meta;

interface CoverSliderStoryProps {
    isSlider: boolean,
}

const Template: StoryFn<CoverSliderStoryProps> = (args: CoverSliderStoryProps) => {
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
                        <li class="splide__slide slider-slide cover-slider__item" element-design="default">
                            <a href="#" class="cover-slider__link">
                                <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                    <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                </toujou-single-media>
                                <h3 class="cover-slider__title">Default</h3>
                            </a>
                        </li>
                        ${args.isSlider ? `
                            <li class="splide__slide slider-slide cover-slider__item" element-design="primary">
                                <a href="#" class="cover-slider__link">
                                    <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                        <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                    </toujou-single-media>
                                <h3 class="cover-slider__title">Primary design</h3>
                                </a>
                            </li>
                        ` : ''}
                        <li class="splide__slide slider-slide cover-slider__item" element-design="secondary">
                            <a href="#" class="cover-slider__link">
                                <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                    <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                </toujou-single-media>
                                <h3 class="cover-slider__title">Secondary design</h3>
                            </a>
                        </li>
                        ${args.isSlider ? `
                            <li class="splide__slide slider-slide cover-slider__item" element-design="inverted">
                                <a href="#" class="cover-slider__link">
                                    <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                        <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                    </toujou-single-media>
                                    <h3 class="cover-slider__title">Inverted design</h3>
                                </a>
                            </li>
                            <li class="splide__slide slider-slide cover-slider__item" element-design="default">
                                <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                    <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                </toujou-single-media>
                                <h3 class="cover-slider__title">Default</h3>
                            </li>
                            <li class="splide__slide slider-slide cover-slider__item" element-design="default">
                                <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                    <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                </toujou-single-media>
                                <h3 class="cover-slider__title">Some very long title to test line breaks</h3>
                            </li>
                            <li class="splide__slide slider-slide cover-slider__item" element-design="default">
                                <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                    <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                </toujou-single-media>
                            </li>
                            <li class="splide__slide slider-slide cover-slider__item" element-design="default">
                                <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                    <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                </toujou-single-media>
                            </li>
                            <li class="splide__slide slider-slide cover-slider__item" element-design="primary">
                                <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                    <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                </toujou-single-media>
                            </li>
                            <li class="splide__slide slider-slide cover-slider__item" element-design="inverted">
                                <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                    <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                </toujou-single-media>
                            </li>
                        ` : ''}

                    </ul>
                </div>
            </div>
        </toujou-cover-slider>
    `;
};

export const CoverSlider = Template.bind({});

CoverSlider.args = {
    isSlider: true,
}


