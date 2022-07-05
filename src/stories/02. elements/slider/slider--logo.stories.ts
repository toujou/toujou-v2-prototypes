import { Story, Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import sliderDocs from "./slider.docs.mdx";

export default {
    title: 'COMPONENTS/Media',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/3d1d0926-79e2-4ae4-aa1c-162dcd451a3a-684e/screen/61e6af1e-563f-4ce8-92ba-ac3b191c5f0c/Desktop',
        },
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: sliderDocs,
        },
    },
    argTypes: {
        designColor: {
            table: {
                category: "Slider settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Slider design',
            description: "Set the slider's design color",
            options: ['default', 'primary', 'secondary', 'light-grey'],
            control: { type: 'radio' },
            defaultValue: ['default'],
            required: true,
        },
        isFullwidth: {
            table: {
                category: "Slider settings",
                defaultValue: { summary: 'false' },
            },
            name: 'Fullwidth',
            description: "Show slider in fullwidth",
            control: { type: 'boolean' },
            defaultValue: 'false',
            required: true,
        },
        autoplay: {
            table: {
                category: "Slider settings",
                defaultValue: { summary: 'false' },
            },
            name: 'autoplay',
            description: "Slide automatically",
            control: { type: 'boolean' },
            defaultValue: 'false',
            required: true,
        },
        autoplayInterval: {
            table: {
                category: "Slider settings",
                defaultValue: { summary: 6 },
            },
            name: 'autoplay interval',
            description: "Interval for the autoplay function (in seconds)",
            control: { type: 'number' },
            defaultValue: 6,
            required: true,
        },
    }
} as Meta;

interface SliderStoryProps {
    designColor: string;
    showCount: boolean;
    isFullwidth: boolean;
    autoplay: boolean;
    autoplayInterval: number;
}

const Template: Story<SliderStoryProps> = (args: SliderStoryProps) => {
    return `       
        <toujou-slider
            class="slider"
            is-logo-slider
            aria-label="Toujou slider example"
            slider-design="${args.designColor}"
            ${args.isFullwidth ? 'slider-fullwidth' : ''}
            ${args.autoplay ? 'auto-play' : ''}
            auto-play-interval="${args.autoplayInterval}"
            slides-per-move="1"
            slider-type="loop"
            slider-gap="var(--spacing-normal)"
            slides-to-show="5"
            slider-breakpoints='{"640":{"perPage":2},"768":{"perPage":3},"840":{"perPage":4},"1024":{"perPage":4}}'>
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
                        <li class="splide__slide slider-slide" data-splide-interval="${args.autoplayInterval * 1000}">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/200" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide" data-splide-interval="${args.autoplayInterval * 1000}">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/201" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide" data-splide-interval="${args.autoplayInterval * 1000}">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/202" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide" data-splide-interval="${args.autoplayInterval * 1000}">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/203" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide" data-splide-interval="${args.autoplayInterval * 1000}">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/204" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide" data-splide-interval="${args.autoplayInterval * 1000}">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/205" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide" data-splide-interval="${args.autoplayInterval * 1000}">
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
    `;
};

export const SliderLogo = Template.bind({});

SliderLogo.args = {
    designColor: 'default',
    isFullwidth: false,
    autoplay: false,
    autoplayInterval: 6,
}

