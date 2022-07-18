import { Meta } from '@storybook/web-components';
import { withXD } from "storybook-addon-xd-designs";
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import TeaserSliderDocs from './teaser-slider.docs.mdx';

export default {
    title: 'COMPONENTS/Teaser',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl: 'https://xd.adobe.com/view/57945f95-9455-4031-a7b6-76e6a7ec74a6-02c7/screen/c8c36584-5431-4952-abe8-787d0b5d5776/Desktop',
        },
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: TeaserSliderDocs,
        }
    },
    argTypes: {}
} as Meta;


const Template = () => {
    return `

        <toujou-slider
            class="slider"
            aria-label="Toujou slider example"
            slider-design="primary"
            slides-to-show="1"
            slider-gap="0"
            slider-aspect-ratio="0.5625"
            slider-type="loop"
            content-type="teaser">
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
                        <li class="splide__slide slider-slide" data-splide-interval="1000">
                            <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="left">
                                <div class="teaser__figure">
                                    <img class="teaser__image" src="https://picsum.photos/1025" alt="nice image" />
                                </div>
                                <div class="teaser__content">
                                    <h3>Nice headline</h3>
                                    <p>This is a simple element containing a headline and this text. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
                                </div> 
                            </toujou-teaser>
                        </li>
                        <li class="splide__slide slider-slide" data-splide-interval="1000">
                            <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="left">
                                <div class="teaser__figure">
                                    <img class="teaser__image" src="https://picsum.photos/1025" alt="nice image" />
                                </div>
                                <div class="teaser__content">
                                    <h3>Nice headline</h3>
                                    <p>This is a simple element containing a headline and this text. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
                                </div> 
                            </toujou-teaser>
                        </li>
                        <li class="splide__slide slider-slide" data-splide-interval="1000">
                            <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="left">
                                <div class="teaser__figure">
                                    <img class="teaser__image" src="https://picsum.photos/1026" alt="nice image" />
                                </div>
                                <div class="teaser__content">
                                    <h3>Nice headline</h3>
                                    <p>This is a simple element containing a headline and this text. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
                                </div> 
                            </toujou-teaser>
                        </li>
                        <li class="splide__slide slider-slide" data-splide-interval="1000">
                            <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="left">
                                <div class="teaser__figure">
                                    <img class="teaser__image" src="https://picsum.photos/1027" alt="nice image" />
                                </div>
                                <div class="teaser__content">
                                    <h3>Nice headline</h3>
                                    <p>This is a simple element containing a headline and this text. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p>
                                </div> 
                            </toujou-teaser>
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

export const TeaserSlider = Template.bind({});

