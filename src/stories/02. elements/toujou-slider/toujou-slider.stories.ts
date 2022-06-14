import { Meta } from '@storybook/web-components';
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
            artboardUrl: 'https://xd.adobe.com/view/3d1d0926-79e2-4ae4-aa1c-162dcd451a3a-684e/Desktop',
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
    }
} as Meta;


const Template = (args) => {
    return `       
        <toujou-slider class="splide toujou-slider" aria-label="Splide Basic HTML Example!!" slider-design="${args.designColor}" ${args.isFullwidth ? 'slider-fullwidth' : ''}>
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
                        <li class="splide__slide toujou-slider__slide">
                            <toujou-single-media class="toujou-single-media toujou-slider__item" slot="slider-item">
                                <img class="toujou-single-media__image" src="https://picsum.photos/1600/900" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide toujou-slider__slide">
                            <toujou-single-media class="toujou-single-media toujou-slider__item" slot="slider-item">
                                <img class="toujou-single-media__image" src="https://picsum.photos/1600/900" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide toujou-slider__slide">
                            <toujou-single-media class="toujou-single-media toujou-slider__item" slot="slider-item">
                                <img class="toujou-single-media__image" src="https://picsum.photos/1600/900" alt="Nice image">
                            </toujou-single-media>
                        </li>
                    </ul>
            </div>
        </toujou-slider>
    `;
};

export const Slider = Template.bind({});

Slider.args = {
    designColor: 'default',
    isFullwidth: false,
}

