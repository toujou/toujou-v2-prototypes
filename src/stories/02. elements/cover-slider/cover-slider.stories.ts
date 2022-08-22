import { Story, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import coverSliderDocs from "./cover-slider.docs.mdx";

export default {
    title: 'COMPONENTS/Cover Slider',
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: coverSliderDocs,
        },
        layout: "fullscreen",
    },
    argTypes: {
        elementDesign: {
            table: {
                category: "Cover slider settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Slider design',
            description: "Set the slider's design color",
            options: ['default', 'primary', 'secondary', 'inverted'],
            control: { type: 'radio' },
            defaultValue: ['default'],
            required: true,
        },
        isSlider: {
            table: {
                category: "Cover slider settings",
                defaultValue: { summary: true },
            },
            name: 'Is Slider',
            description: "It should only be a slider if it contains more items than it can fit on the page. Otherwise it should show the items centered on the page",
            control: { type: 'boolean' },
            defaultValue: [true],
            required: true,
        },
        gap: {
            table: {
                category: "Cover slider settings",
                defaultValue: { summary: false },
            },
            name: 'Gap',
            description: "Add a gap between the elements, can normally be done via CSS variables",
            control: { type: 'boolean' },
            defaultValue: [false],
            required: true,
        },
    }
} as Meta;

interface CoverSliderStoryProps {
    elementDesign: string,
    isSlider: boolean,
    gap: boolean,
}

const Template: Story<CoverSliderStoryProps> = (args: CoverSliderStoryProps) => {
    function addVariable() {
        requestAnimationFrame(() => {
            const coverSliderEl = document.querySelector('.cover-slider') as HTMLElement;
            coverSliderEl!.style.setProperty('--cover-slider-card-gap', '16');
        });
        return ''
    }

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
                        <li class="splide__slide slider-slide cover-slider__item" element-design="${args.elementDesign}">
                            <a href="#" class="cover-slider__link">
                                <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                    <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                </toujou-single-media>
                                <h3 class="cover-slider__title">Bazinga</h3>
                            </a>
                        </li>
                        ${args.isSlider ? `
                            <li class="splide__slide slider-slide cover-slider__item" element-design="${args.elementDesign}">
                                <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                    <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                </toujou-single-media>
                                </a>
                            </li>
                        ` : ''}
                        <li class="splide__slide slider-slide cover-slider__item" element-design="${args.elementDesign}">
                            <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                <h3 class="cover-slider__title">Bonanza</h3>
                            </toujou-single-media>
                        </li>
                        ${args.isSlider ? `
                            <li class="splide__slide slider-slide cover-slider__item" element-design="${args.elementDesign}">
                                <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                    <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                </toujou-single-media>
                            </li>
                            <li class="splide__slide slider-slide cover-slider__item" element-design="${args.elementDesign}">
                                <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                    <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                </toujou-single-media>
                            </li>
                            <li class="splide__slide slider-slide cover-slider__item" element-design="${args.elementDesign}">
                                <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                    <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                </toujou-single-media>
                            </li>
                            <li class="splide__slide slider-slide cover-slider__item" element-design="${args.elementDesign}">
                                <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                    <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                </toujou-single-media>
                            </li>
                            <li class="splide__slide slider-slide cover-slider__item" element-design="${args.elementDesign}">
                                <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                    <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                </toujou-single-media>
                            </li>
                            <li class="splide__slide slider-slide cover-slider__item" element-design="${args.elementDesign}">
                                <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                    <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                </toujou-single-media>
                            </li>
                            <li class="splide__slide slider-slide cover-slider__item" element-design="${args.elementDesign}">
                                <toujou-single-media class="single-media cover-slider__media" slot="slider-item">
                                    <img class="single-media__image cover-slider__image" src="https://picsum.photos/400" alt="Nice image">
                                </toujou-single-media>
                            </li>
                        ` : ''}

                    </ul>
                </div>      
            </div>
        </toujou-cover-slider>
        
        ${args.gap ? addVariable() : ''}
    `;
};

export const CoverSlider = Template.bind({});

CoverSlider.args = {
    elementDesign: 'default',
    isSlider: true,
    gap: false,
}


