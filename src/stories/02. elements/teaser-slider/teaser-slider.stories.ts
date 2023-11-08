import { Meta, StoryFn } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import TeaserSliderDocs from './teaser-slider.docs.mdx';

export default {
    title: 'COMPONENTS/Teaser',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
        docs: {
            page: TeaserSliderDocs,
        }
    },
    argTypes: {
        teaserDirection: {
            table: {
                category: "Teaser slider settings",
                defaultValue: { summary: 'right' },
            },
            name: 'Teaser direction',
            description: "Choose the teaser direction",
            options: ['right', 'left'],
            control: { type: 'radio' },
            defaultValue: ['right'],
            required: true,
        }
    },
    tags: ['autodocs']
} as Meta;

interface ToujouTeaserSliderProps {
    teaserDirection: string;
}

const Template: StoryFn<ToujouTeaserSliderProps> = (args: ToujouTeaserSliderProps) => {
    const teaserImageSide = args.teaserDirection === 'right' ? 'left' : 'right';
    return `
        <toujou-slider
            class="slider"
            aria-label="Toujou slider example"
            element-design="primary"
            slides-to-show="1"
            slider-gap="var(--slider-slides-gap)"
            slider-aspect-ratio="0.5625"
            slider-type="loop"
            content-type="teaser"
        >
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
                        <li class="splide__slide slider-slide" data-splide-interval="1000">
                            <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="${teaserImageSide}" element-design="default">
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
                            <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="${teaserImageSide}" element-design="default">
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
                            <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="${teaserImageSide}" element-design="default">
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
                            <toujou-teaser class="teaser slider__item" slot="slider-item" teaser-type="cinema" image-width="50" image-side="${teaserImageSide}" element-design="default">
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

TeaserSlider.args = {
    teaserDirection: 'right'
}
