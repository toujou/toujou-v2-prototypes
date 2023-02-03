import { Meta, Story } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import PNNavDocs from './pn-nav.docs.mdx';


export default {
    title: 'COMPONENTS/P N Nav',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/57945f95-9455-4031-a7b6-76e6a7ec74a6-02c7/screen/3edbd260-09a0-4b35-ad8a-73b46782965e/Desktop',
        },
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: PNNavDocs,
        },
        layout: "fullscreen",
    },
    argTypes: {
        hideImage: {
            table: {
                category: "PN navigation settings",
                    defaultValue: { summary: false },
            },
            name: 'Hide image',
                description: "Hide the link image",
                control: { type: 'boolean' },
                defaultValue: [ false ],
                required: true,
        },
        hideTitle: {
            table: {
                category: "PN navigation settings",
                defaultValue: { summary: false },
            },
            name: 'Hide title',
            description: "Hide the link title",
            control: { type: 'boolean' },
            defaultValue: [ false ],
            required: true,
        },
    }
} as Meta;

interface PNNavStoryProps {
    hideImage: boolean,
    hideTitle: boolean,
}

const Template: Story<PNNavStoryProps> = (args: PNNavStoryProps) => {
    return `
        <toujou-breadcrumb role="nav" aria-label="Breadcrumb" class="breadcrumb">
            <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--open">
                <toujou-icon class="icon breadcrumb__toggle-icon" icon-name="arrow-left"></toujou-icon>
            </button>
            
            <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--close">
                <toujou-icon class="icon breadcrumb__toggle-icon" icon-name="close"></toujou-icon>
            </button>

            <ol class="breadcrumb__list" slot="list">
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link">Home</a>
                </li>
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link">Item One</a>
                </li>
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link" aria-current="page">Item Two</a>
                </li>
            </ol>
        </toujou-breadcrumb>
        
        <toujou-text-block class="text-block" text-blocks-column-count="1">
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <h1>This is a test page</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>
        
        <toujou-text-block class="text-block" text-blocks-column-count="3">
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <h3>Left aligned H3 headline</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <h3>Left aligned H3 headline</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <h3>Left aligned H3 headline</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>
        
        <toujou-slider
            class="slider"
            aria-label="Toujou slider example"
            element-design="default"
            auto-play-interval="6000"
            slides-to-show="1"
            slider-gap="0"
            slider-aspect-ratio="0.5625"
            slider-type="loop">
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
                        <li class="splide__slide slider-slide" data-splide-interval="6000">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/1600/900" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide" data-splide-interval="6000">
                            <toujou-single-media class="single-media slider__item" slot="slider-item">
                                <img class="single-media__image" src="https://picsum.photos/1600/901" alt="Nice image">
                            </toujou-single-media>
                        </li>
                        <li class="splide__slide slider-slide" data-splide-interval="6000">
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
        
        <toujou-text-block class="text-block" text-blocks-column-count="1">
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>
        
        <toujou-blockquote-grid class="blockquote-grid" blockquote-grid-count="2">
            <toujou-blockquote role="figure" class="blockquote" blockquote-direction="vertical">
                <img slot="image" class="blockquote__image" src="https://picsum.photos/200/200" alt="quote image" />
                <blockquote slot="quote" class="blockquote__blockquote">
                    <p class="blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
                </blockquote>
                <figcaption slot="author" class="blockquote__author">Jack Handey</figcaption>
            </toujou-blockquote>
            
            <toujou-blockquote role="figure" class="blockquote" blockquote-direction="vertical">
                <img slot="image" class="blockquote__image" src="https://picsum.photos/200/200" alt="quote image" />
                <blockquote slot="quote" class="blockquote__blockquote">
                    <p class="blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
                </blockquote>
                <figcaption slot="author" class="blockquote__author">Jack Handey</figcaption>
            </toujou-blockquote>

        </toujou-blockquote-grid>
        
        <toujou-text-block class="text-block" text-blocks-column-count="1">
            <toujou-text-block-column class="text-block-column">
                <div class="text-block__content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>  
        
        <toujou-pn-nav
            class="pn-nav"
            aria-label="Page navigation buttons"
            ${args.hideImage === true ? 'image-hidden' : ''}
            ${args.hideTitle === true ? 'title-hidden' : ''}
        >
            <!-- We need to prefetch both the next and prev links -->
            <link rel="prefetch" href="#">
            <link rel="prefetch" href="#">
            <a href="#" class="pn-nav__link" button-direction="prev" title="Vorherige Seite">
                <span class="pn-nav__button">
                    <toujou-icon class="icon pn-nav__icon" icon-name="arrow-left" icon-size="m" icon-color="background"></toujou-icon>
                </span>
                
                ${args.hideImage === false || args.hideTitle === false ? `
                    <span class="pn-nav__content">
                        ${args.hideTitle === false ? `
                            <h5 class="pn-nav__title">Another Page</h5>
                        ` : ''}
                        ${args.hideImage === false ? `
                            <img src="https://picsum.photos/72" alt="beautiful image" class="pn-nav__image">
                        ` : ''}
                    </span>
                ` : ''}
            </a>
            <a href="#" class="pn-nav__link" button-direction="next" title="Nächste Seite">
                <span class="pn-nav__button">
                    <toujou-icon class="icon pn-nav__icon" icon-name="arrow-right" icon-size="m" icon-color="background"></toujou-icon>
                </span>
                ${args.hideImage === false || args.hideTitle === false ? `
                    <span class="pn-nav__content">
                        ${args.hideTitle === false ? `
                            <h5 class="pn-nav__title">Nice Page</h5>
                        ` : ''}
                        ${args.hideImage === false ? `
                            <img src="https://picsum.photos/72" alt="beautiful image" class="pn-nav__image">
                        ` : ''}
                    </span>
                ` : ''}
            </a>
        </toujou-pn-nav>   
    `
};

export const PNNav = Template.bind({});

PNNav.args = {
    hideImage: false,
    hideTitle: false,
}
