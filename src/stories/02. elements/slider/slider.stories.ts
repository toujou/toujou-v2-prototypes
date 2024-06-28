import { StoryFn, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import sliderDocs from "./slider.docs.mdx";

export default {
    title: 'COMPONENTS/Media',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: sliderDocs,
        }
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
        showCount: {
            table: {
                category: "Slider settings",
            },
            name: 'Show count',
            description: "Show the count element",
            control: { type: 'boolean' },
            defaultValue: true,
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
            },
            name: 'autoplay interval',
            description: "Interval for the autoplay function (in seconds)",
            control: { type: 'number' },
            defaultValue: 6,
            required: true,
        },
        sliderType: {
            table: {
                category: "Slider settings",
                defaultValue: { summary: 'loop' },
            },
            name: 'Slider type',
            description: "Set the slider's animation type",
            options: ['loop', 'slide'],
            control: { type: 'radio' },
            defaultValue: ['default'],
            required: true,
        },
    },
    tags: ['autodocs']
} satisfies Meta;

interface SliderStoryProps {
    designColor: string;
    showCount: boolean;
    isFullwidth: boolean;
    autoplay: boolean;
    autoplayInterval: number;
    sliderType: string;
}

const Template: StoryFn<SliderStoryProps> = (args: SliderStoryProps) => {
    return `
        <toujou-slider
            class="slider"
            aria-label="Toujou slider example"
            element-design="${args.designColor}"
            ${args.isFullwidth ? 'slider-fullwidth' : ''}
            ${args.showCount ? 'show-count' : ''}
            ${args.autoplay ? 'auto-play' : ''}
            auto-play-interval="${args.autoplayInterval}"
            slides-to-show="1"
            slider-type="${args.sliderType}"
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
                        <li class="splide__slide slider-slide" data-splide-interval="${args.autoplayInterval * 1000}">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/1600/900" alt="Nice image">
<!--                                <toujou-media-info class="media-info">-->
<!--                                    <button slot="open-button" class="media-info__toggle" aria-label="Toggle the image caption and / or copyright">-->
<!--                                        <toujou-icon class="icon" icon-color="background" icon-name="info" icon-size="ms"></toujou-icon>-->
<!--                                    </button>-->
<!--                                    <button slot="close-button" class="media-info__toggle" aria-label="Toggle the image caption and / or copyright">-->
<!--                                        <toujou-icon class="icon" icon-color="background" icon-name="close" icon-size="ms"></toujou-icon>-->
<!--                                    </button>-->
<!--                                    <figpaction slot="figcaption" class="media-info__figcaption">This is a beautiful description</figpaction>-->
<!--                                    <small slot="copyright" class="media-info__copyright">@Nice photographer</small>-->
<!--                                </toujou-media-info>-->
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide" data-splide-interval="${args.autoplayInterval * 1000}">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/1600/901" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide" data-splide-interval="${args.autoplayInterval * 1000}">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/400/200" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide" data-splide-interval="${args.autoplayInterval * 1000}">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/1603/904" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide" data-splide-interval="${args.autoplayInterval * 1000}">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/1600/910" alt="Nice image">
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

export const Slider = Template.bind({});

Slider.args = {
    designColor: 'default',
    showCount: true,
    isFullwidth: false,
    autoplay: false,
    autoplayInterval: 6,
    sliderType: 'loop',
}

