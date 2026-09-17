/// <reference types="cypress" />

const colors = Cypress.env('colors');

describe('teaser-slider [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-teaser--teaser-slider');
    });

    it('has correct class and tag name', () => {
        cy.get('toujou-slider').should('have.prop', 'tagName').should('eq', 'TOUJOU-SLIDER');
        cy.get('toujou-slider').invoke('attr', 'class').should('eq', 'slider');
    });

    it('has correct structure', () => {
        cy.get('toujou-slider .splide__list').children('.splide__slide').should('have.length', 16);
        cy.get('toujou-slider .splide__list .splide__slide .teaser').should('exist');
        cy.get('toujou-slider .splide__list .splide__slide .teaser .teaser__figure').should('exist');
        cy.get('toujou-slider .splide__list .splide__slide .teaser .teaser__content').should('exist');
    });

    it('has correct attributes', () => {
        cy.get('.slider').invoke('attr', 'element-design').should('eq', 'primary');
        cy.get('.slider').invoke('attr', 'slides-to-show').should('eq', '1');
        cy.get('.slider').invoke('attr', 'slider-gap').should('eq', 'var(--slider-slides-gap)');
        cy.get('.slider').invoke('attr', 'slider-aspect-ratio').should('eq', '0.5625');
        cy.get('.slider').invoke('attr', 'slider-type').should('eq', 'loop');
        cy.get('.slider').invoke('attr', 'content-type').should('eq', 'teaser');
        cy.get('.slider').invoke('attr', 'slides-per-move').should('eq', '1');
        cy.get('.slider').invoke('attr', 'auto-play-interval').should('eq', '6000');
        cy.get('.slider').invoke('attr', 'slider-padding').should('eq', '0');
        cy.get('.slider').invoke('attr', 'slider-focus-center').should('eq', 'false');
    });

    it('has correct teaser styles', () => {
        cy.get('.teaser').should('have.css', 'position', 'relative');
        cy.get('.teaser').should('have.css', 'display', 'grid');
        cy.get('.teaser').should('have.css', 'grid-template-columns', '296px');
        cy.get('.teaser').should('have.css', 'grid-auto-flow', 'dense');
        cy.get('.teaser').should('have.css', 'gap', '16px');
        cy.get('.teaser').should('have.css', 'width', '296px');
        cy.get('.teaser').should('have.css', 'max-width', '1440px');
        cy.get('.teaser').should('have.css', 'margin', '0px');
        cy.get('.teaser').should('have.css', 'border-radius', '4px');
        cy.get('.teaser').should('have.css', 'background-color', colors.colorBg);
        cy.get('.teaser').should('have.css', 'z-index', '1');
        cy.get('.teaser').should('have.css', 'overflow', 'hidden');

        cy.get('.teaser .teaser__figure').should('exist');
        cy.get('.teaser .teaser__figure').should('have.css', 'grid-column', '1');
        cy.get('.teaser .teaser__figure').should('have.css', 'border-radius', '4px');
        cy.get('.teaser .teaser__figure').should('have.css', 'overflow', 'hidden');
        cy.get('.teaser .teaser__figure').should('have.css', 'position', 'relative');
        cy.get('.teaser .teaser__figure').should('have.css', 'width', '296px');

        cy.get('.teaser .teaser__image').should('have.css', 'aspect-ratio', '1.618 / 1');
        cy.get('.teaser .teaser__image').should('have.css', 'object-fit', 'cover');
        cy.get('.teaser .teaser__image').should('have.css', 'width', '296px');

        cy.get('.teaser .teaser__content').should('have.css', 'padding', '0px');
        cy.get('.teaser .teaser__content').should('have.css', 'width', '296px');
    });

    it('has correct slider styles', () => {
        cy.get('toujou-slider').then((e) => {
            e[0].setAttribute('auto-play', '');
            e[0].setAttribute('element-design', 'primary');
        });
        cy.get('toujou-slider .slider-control--prev').should('have.css', 'background-color', colors.colorPrimary);
        cy.get('toujou-slider .slider-control--next').should('have.css', 'background-color', colors.colorPrimary);
        cy.get('toujou-slider .slider-control--prev toujou-icon').should('have.css', 'background-color', colors.colorBg);
        cy.get('toujou-slider .slider-control--next toujou-icon').should('have.css', 'background-color', colors.colorBg);
        cy.get('toujou-slider .slider-bullets__bullet.is-active').should('have.css', 'background-color', colors.colorPrimary);
        cy.get('toujou-slider .slider-bullets__bullet.is-active').should('have.css', 'border', `2px solid ${colors.colorPrimary}`);
        cy.get('toujou-slider .slider-bullets__bullet:not(.is-active)').should('have.css', 'background-color', colors.colorTransparent);
        cy.get('toujou-slider .slider-bullets__bullet:not(.is-active)').should('have.css', 'border', `2px solid ${colors.colorPrimary}`);
    });

    it('slider control clicks go to next / previous slide', () => {
        cy.get('toujou-slider').then((el) => {
            const sliderEl = el[0];
            // @ts-ignore
            const activeIndex = sliderEl.splideSlider.index;
            expect(activeIndex).to.eq(0);
        });
        cy.get('toujou-slider .slider-control--next').click({ multiple: true });
        cy.get('toujou-slider').then((el) => {
            const sliderEl = el[0];
            // @ts-ignore
            const activeIndex = sliderEl.splideSlider.index;
            expect(activeIndex).to.eq(1);
        });
        cy.get('toujou-slider .slider-control--next').click({ multiple: true });
        cy.get('toujou-slider .slider-control--next').click({ multiple: true });
        cy.get('toujou-slider').then((el) => {
            const sliderEl = el[0];
            // @ts-ignore
            const activeIndex = sliderEl.splideSlider.index;
            expect(activeIndex).to.eq(3);
        });
        cy.get('toujou-slider .slider-control--prev').click({ multiple: true });
        cy.get('toujou-slider').then((el) => {
            const sliderEl = el[0];
            // @ts-ignore
            const activeIndex = sliderEl.splideSlider.index;
            expect(activeIndex).to.eq(2);
        });
        cy.get('toujou-slider .slider-control--prev').click({ multiple: true });
        cy.get('toujou-slider .slider-control--prev').click({ multiple: true });
        cy.get('toujou-slider').then((el) => {
            const sliderEl = el[0];
            // @ts-ignore
            const activeIndex = sliderEl.splideSlider.index;
            expect(activeIndex).to.eq(0);
        });
    });

    it('slider of type "loop" can "wrap around"', () => {
        cy.get('toujou-slider').then((e) => {
            e[0].setAttribute('slider-type', 'loop');
        });
        cy.get('toujou-slider').then((el) => {
            const sliderEl = el[0];
            // @ts-ignore
            const activeIndex = sliderEl.splideSlider.index;
            expect(activeIndex).to.eq(0);
        });
        cy.get('toujou-slider .slider-control--prev').click({ multiple: true });
        cy.get('toujou-slider').then((el) => {
            const sliderEl = el[0];
            // @ts-ignore
            const activeIndex = sliderEl.splideSlider.index;
            expect(activeIndex).to.eq(3);
        });
        cy.get('toujou-slider .slider-control--next').click({ multiple: true });
        cy.get('toujou-slider').then((el) => {
            const sliderEl = el[0];
            // @ts-ignore
            const activeIndex = sliderEl.splideSlider.index;
            expect(activeIndex).to.eq(0);
        });
    });
})

export {}
