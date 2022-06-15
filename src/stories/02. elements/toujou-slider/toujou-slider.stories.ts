import { Story, Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import ToujouSliderDocs from "./toujou-slider.docs.mdx";

export default {
    title: 'COMPONENTS/Media',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/3d1d0926-79e2-4ae4-aa1c-162dcd451a3a-684e/screen/61e6af1e-563f-4ce8-92ba-ac3b191c5f0c/Desktop',
        },
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: ToujouSliderDocs,
        }
    },
    argTypes: {
        designColor: {
            table: {
                category: "Slider settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Slider design',
            description: "Set the value for the slider design color",
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
            description: "Toggle the fullwidth attribute",
            control: { type: 'boolean' },
            defaultValue: 'false',
            required: true,
        },
        showCount: {
            table: {
                category: "Slider settings",
                defaultValue: { summary: true },
            },
            name: 'Show counter',
            description: "Show the counter element",
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
                defaultValue: { summary: 6 },
            },
            name: 'autoplay interval',
            description: "Interval for the auto slide function",
            control: { type: 'number' },
            defaultValue: 6,
            required: true,
        },
    }
} as Meta;

interface ToujouSliderStoryProps {
    designColor: string;
    showCount: boolean;
    isFullwidth: boolean;
    autoplay: boolean;
    autoplayInterval: number;
}

const Template: Story<ToujouSliderStoryProps> = (args: ToujouSliderStoryProps) => {
    return `       
        <toujou-slider
            class="toujou-slider"
            aria-label="Splide Basic HTML Example!!"
            slider-design="${args.designColor}" ${args.isFullwidth ? 'slider-fullwidth' : ''}
            ${args.showCount ? 'show-count' : ''}
            ${args.autoplay ? 'auto-play' : ''}>
            <div class="splide toujou-slider__slider">
                <div class="splide__arrows">
                    <button class="splide__arrow splide__arrow--prev toujou-slider-control toujou-slider-control--prev" aria-label="Previous slide">
                        <toujou-icon class="toujou-icon toujou-slider-control__icon toujou-slider-control__icon--prev" icon-name="arrow-left"></toujou-icon>
                    </button>
                    <button class="splide__arrow splide__arrow--next toujou-slider-control toujou-slider-control--next" aria-label="Next slide">
                        <toujou-icon class="toujou-icon toujou-slider-control__icon toujou-slider-control__icon--next" icon-name="arrow-right"></toujou-icon>
                    </button>
                </div>
                
                <div class="splide__track toujou-slider__track">
                    <ul class="splide__list toujou-slider__list">
                        <li class="splide__slide toujou-slider__slide" data-splide-interval="${args.autoplayInterval * 1000}">
                            <toujou-single-media class="toujou-single-media toujou-slider__item" slot="slider-item">
                                <img class="toujou-single-media__image" src="https://picsum.photos/1600/900" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide toujou-slider__slide" data-splide-interval="${args.autoplayInterval * 1000}">
                            <toujou-single-media class="toujou-single-media toujou-slider__item" slot="slider-item">
                                <img class="toujou-single-media__image" src="https://picsum.photos/1601/900" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide toujou-slider__slide" data-splide-interval="${args.autoplayInterval * 1000}">
                            <toujou-single-media class="toujou-single-media toujou-slider__item" slot="slider-item">
                                <img class="toujou-single-media__image" src="https://picsum.photos/1602/900" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide toujou-slider__slide" data-splide-interval="${args.autoplayInterval * 1000}">
                            <toujou-single-media class="toujou-single-media toujou-slider__item" slot="slider-item">
                                <img class="toujou-single-media__image" src="https://picsum.photos/1603/900" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide toujou-slider__slide" data-splide-interval="${args.autoplayInterval * 1000}">
                            <toujou-single-media class="toujou-single-media toujou-slider__item" slot="slider-item">
                                <img class="toujou-single-media__image" src="https://picsum.photos/1604/900" alt="Nice image">
                            </toujou-single-media>
                        </li>
                    </ul>
                </div>      
                <div class="splide__progress toujou-slider-progress">
                    <div class="splide__progress__bar toujou-slider-progress__bar"></div>
                </div>
            </div>
            
            
            <toujou-slider-count class="toujou-slider-count">
                <span class="toujou-slider-count__current"></span>
                <span class="toujou-slider-count__separator">of</span>
                <span class="toujou-slider-count__total"></span>
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
}

