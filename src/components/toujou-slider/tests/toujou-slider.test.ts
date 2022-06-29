import { html, fixture, expect } from '@open-wc/testing';
import { ToujouSlider } from "../toujou-slider";

describe('toujou-slider', () => {
    let sliderEl: ToujouSlider | null = null;

    beforeEach(async () => {
        // @ts-ignore
        sliderEl = await fixture(html`
            <toujou-slider class="slider" aria-label="Toujou slider example" slider-design="primary" show-count>
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
                            <li class="splide__slide slider__slide" data-splide-interval="6000">
                                <toujou-single-media class="single-media slider__item" slot="slider-item">
                                    <img class="single-media__image" src="https://picsum.photos/1600/900" alt="Nice image">
                                </toujou-single-media>
                            </li>
                            <li class="splide__slide slider__slide" data-splide-interval="6000">
                                 <toujou-single-media class="single-media slider__item" slot="slider-item">
                                    <img class="single-media__image" src="https://picsum.photos/1601/900" alt="Nice image">
                                </toujou-single-media>
                            </li>
                            <li class="splide__slide slider__slide" data-splide-interval="6000">
                                <toujou-single-media class="single-media slider__item" slot="slider-item">
                                    <img class="toujou-single-media__image" src="https://picsum.photos/1602/900" alt="Nice image">
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
        `);
    });

    it('can create component', () => {
        expect(sliderEl).to.not.be.null;
        expect(sliderEl?.nodeName).to.equal('TOUJOU-SLIDER');
    })

    it('passes a11y audit', () => {
        expect(sliderEl).to.be.accessible();
    })

    /* todo: write relevant tests */
});