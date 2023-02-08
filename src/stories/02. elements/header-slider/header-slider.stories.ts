import { Story, Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import headerSliderDocs from './header-slider.docs.mdx';


export default {
    title: 'COMPONENTS/Header',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/57945f95-9455-4031-a7b6-76e6a7ec74a6-02c7/screen/3edbd260-09a0-4b35-ad8a-73b46782965e/Desktop',
        },
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: headerSliderDocs,
        },
        layout: "fullscreen",
    },
    argTypes: {
        imageHeight: {
            table: {
                category: "Header Settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Header image height',
            description: "Set the header image height",
            options: ['default', 'full', 'half', 'quarter', '3-1'],
            control: { type: 'select' },
            defaultValue: ['default'],
            required: true,
        },
        headerVerticalPos: {
            table: {
                category: "Header Settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Header vertical position',
            description: "Set the header's vertical position",
            options: ['top', 'mid', 'bottom'],
            control: { type: 'select' },
            defaultValue: ['mid'],
            required: true,
        },
        headerHorizontalPos: {
            table: {
                category: "Header Settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Header horizontal position',
            description: "Set the header's horizontal position",
            options: ['left', 'center', 'right'],
            control: { type: 'select' },
            defaultValue: ['center'],
            required: true,
        },
        headerContentSize: {
            table: {
                category: "Header Settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Header content size',
            description: "Set the header's content width",
            options: ['full', 'half', 'third', 'quarter'],
            control: { type: 'select' },
            defaultValue: ['half'],
            required: true,
        },
        accentColor: {
            table: {
                category: "Header Settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Accent color',
            description: "Set the header's accent color",
            options: ['default', 'primary', 'secondary', 'font'],
            control: { type: 'select' },
            defaultValue: ['default'],
            required: true,
        },
        contentAlignment: {
            table: {
                category: "Header Settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Content alignment',
            description: "Set the header's content alignment",
            options: ['default', 'left', 'center', 'right'],
            control: { type: 'select' },
            defaultValue: ['default'],
            required: true,
        },
    },
} as Meta;

interface HeaderSliderStoryProps {
    imageHeight: string,
    headerVerticalPos: string,
    headerHorizontalPos: string,
    headerContentSize: string,
    accentColor: string,
    contentAlignment: string,
}

const Template: Story<HeaderSliderStoryProps> = (args: HeaderSliderStoryProps) => {
    return `
        <header class="header" image-height="${args.imageHeight}" header-type="slider">
        
            <toujou-slider
                class="slider"
                aria-label="Toujou slider example"
                element-design="primary"
                slides-to-show="1"
                slider-type="loop">
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
                            <li class="splide__slide slider__slide" data-splide-interval="1000">
                                <div class="slider__item" slot="slider-item">
                                    <toujou-single-media class="single-media">
                                        <img class="single-media__image" src="https://picsum.photos/2000" alt="Nice image">
                                    </toujou-single-media>
                                    <div class="header-content"
                                        accent-color="${args.accentColor}"
                                        vertical-position="${args.headerVerticalPos}"
                                        horizontal-position="${args.headerHorizontalPos}"
                                        content-size="${args.headerContentSize}"
                                        text-alignment="${args.contentAlignment}">
                                        <h3>Slide 1.</h3>
                                        <p class="header-content__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <button is="toujou-button" class="button" button-variant="${args.accentColor}" button-type="default" button-size="normal">Hello world</button>
                                    </div>
                                </div>
                            </li>  
                            <li class="splide__slide slider__slide" data-splide-interval="1000">
                                <div class="slider__item" slot="slider-item">
                                    <toujou-single-media class="single-media">
                                        <img class="single-media__image" src="https://picsum.photos/2001" alt="Nice image">
                                    </toujou-single-media>
                                    <div class="header-content"
                                       accent-color="${args.accentColor}"
                                        vertical-position="${args.headerVerticalPos}"
                                        horizontal-position="${args.headerHorizontalPos}"
                                        content-size="${args.headerContentSize}"
                                        text-alignment="${args.contentAlignment}">
                                        <p class="header-content__text">Slide 2.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                </div>
                            </li>  
                            <li class="splide__slide slider__slide" data-splide-interval="1000">
                                <div class="slider__item" slot="slider-item">
                                    <toujou-single-media class="single-media">
                                        <img class="single-media__image" src="https://picsum.photos/2002" alt="Nice image">
                                    </toujou-single-media>
                                    <div class="header-content"
                                        accent-color="${args.accentColor}"
                                        vertical-position="${args.headerVerticalPos}"
                                        horizontal-position="${args.headerHorizontalPos}"
                                        content-size="${args.headerContentSize}"
                                        text-alignment="${args.contentAlignment}">
                                        <p class="header-content__text">Slide 3.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                </div>
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
        
        </header>
    `
};

export const HeaderSlider = Template.bind({});

// @ts-ignore
HeaderSlider.args = {
    imageHeight: 'default',
    headerVerticalPos: 'mid',
    headerHorizontalPos: 'center',
    headerContentSize: 'half',
    accentColor: 'default',
    contentAlignment: 'default'
}
