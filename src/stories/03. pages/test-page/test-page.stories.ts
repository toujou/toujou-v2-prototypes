import {Meta} from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/badgeCustomConfig.js'

export default {
    title: 'PAGES/Test Page',
    decorators: [withXD],
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
    },
} as Meta;

const Template = () => {
    return `
        <toujou-breadcrumb role="nav" aria-label="Breadcrumb" class="breadcrumb">
            <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--open">
                <toujou-icon class="toujou-icon breadcrumb__toggle-icon" icon-name="arrow-left"></toujou-icon>
            </button>
            
            <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--close">
                <toujou-icon class="toujou-icon breadcrumb__toggle-icon" icon-name="close"></toujou-icon>
            </button>

            <ol class="breadcrumb__list" slot="list">
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link">Home</a>
                </li>
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link">Item One</a>
                </li>
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link">Item Two</a>
                </li>
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link" >Item Three</a>
                </li>
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link">Item Four</a>
                </li>
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link">Item Five</a>
                </li>
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link" aria-current="page">Item Six</a>
                </li>
            </ol>
        </toujou-breadcrumb>
        
        <toujou-text-block class="toujou-text-block" text-blocks-column-count="1">
            <toujou-text-block-column class="toujou-text-block-column">
                <div class="toujou-text-block__content">
                    <h1>This is a test page</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>
        
        <toujou-text-block class="toujou-text-block" text-blocks-column-count="3">
            <toujou-text-block-column class="toujou-text-block-column">
                <div class="toujou-text-block__content">
                    <h3>Left aligned H3 headline</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
            <toujou-text-block-column class="toujou-text-block-column">
                <div class="toujou-text-block__content">
                    <h3>Left aligned H3 headline</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
            <toujou-text-block-column class="toujou-text-block-column">
                <div class="toujou-text-block__content">
                    <h3>Left aligned H3 headline</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>
        
        <toujou-slider class="toujou-slider slider" slider-design="primary">
            <div class="toujou-slider__top">
                <div class="toujou-slider__frame glider draggable" data-autoslide="0" data-slideinterval="6">
                    <div class="glider-track toujou-slider__track">
                        <toujou-slider-slide class="toujou-slider-slide glider-slide active center visible" aria-label="slide 1 of 2">
                            <img src="https://picsum.photos/1200" alt="nice image" class="toujou-slider-slide__media toujou-slider-slide__media--image">
                        </toujou-slider-slide>
                    </div>
                </div>
                <button class="toujou-slider-control toujou-slider-control--prev" aria-label="Previous slide">
                    <toujou-icon class="toujou-icon toujou-slider-control__icon toujou-slider-control__icon--prev" icon-name="arrow-left"></toujou-icon>
                </button>
                <button class="toujou-slider-control toujou-slider-control--next" aria-label="Next slide">
                    <toujou-icon class="toujou-icon toujou-slider-control__icon toujou-slider-control__icon--next" icon-name="arrow-right"></toujou-icon>
                </button>
            </div>
	        <toujou-bullets class="toujou-bullets toujou-slider__bullets glider-dots" bullets-design="primary">
	            <button data-index="0" aria-label="Page 1" role="tab" class="toujou-bullets__bullet toujou-slider__bullet glider-dot active" aria-current="true">
	                <span class="toujou-bullets__circle"></span>
                </button>
	            <button data-index="1" aria-label="Page 2" role="tab" class="toujou-bullets__bullet toujou-slider__bullet glider-dot ">
	                <span class="toujou-bullets__circle"></span>
                </button>
	            <button data-index="2" aria-label="Page 3" role="tab" class="toujou-bullets__bullet toujou-slider__bullet glider-dot ">
	                <span class="toujou-bullets__circle"></span>
                </button>
	            <button data-index="3" aria-label="Page 4" role="tab" class="toujou-bullets__bullet toujou-slider__bullet glider-dot ">
	                <span class="toujou-bullets__circle"></span>
                </button>
            </toujou-bullets>
        </toujou-slider>
        
        <toujou-text-block class="toujou-text-block" text-blocks-column-count="1">
            <toujou-text-block-column class="toujou-text-block-column">
                <div class="toujou-text-block__content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>
        
        <toujou-blockquote-grid class="toujou-blockquote-grid" blockquote-grid-count="2">
            <toujou-blockquote role="figure" class="toujou-blockquote" blockquote-direction="vertical">
                <img slot="image" class="toujou-blockquote__image" src="https://picsum.photos/200/200" alt="quote image" />
                <blockquote slot="quote" class="toujou-blockquote__blockquote">
                    <p class="toujou-blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
                </blockquote>
                <figcaption slot="author" class="toujou-blockquote__author">Jack Handey</figcaption>
            </toujou-blockquote>
            
            <toujou-blockquote role="figure" class="toujou-blockquote" blockquote-direction="vertical">
                <img slot="image" class="toujou-blockquote__image" src="https://picsum.photos/200/200" alt="quote image" />
                <blockquote slot="quote" class="toujou-blockquote__blockquote">
                    <p class="toujou-blockquote__text">Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
                </blockquote>
                <figcaption slot="author" class="toujou-blockquote__author">Jack Handey</figcaption>
            </toujou-blockquote>

        </toujou-blockquote-grid>
        
        <toujou-text-block class="toujou-text-block" text-blocks-column-count="1">
            <toujou-text-block-column class="toujou-text-block-column">
                <div class="toujou-text-block__content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </toujou-text-block-column>
        </toujou-text-block>

    `;
};

export const TestPage = Template.bind({});


