/// <reference types="cypress" />

const colorPrimary = Cypress.env('colorPrimary');
const colorPrimaryLight = Cypress.env('colorPrimaryLight');
const colorPrimaryDark = Cypress.env('colorPrimaryDark');
const colorSecondary= Cypress.env('colorSecondary');
const colorSecondaryLight = Cypress.env('colorSecondaryLight');
const colorSecondaryDark = Cypress.env('colorSecondaryDark');
const colorFont = Cypress.env('colorFont');
const colorFontLight = Cypress.env('colorFontLight');
const colorFontDark = Cypress.env('colorFontDark');
const colorBg = Cypress.env('colorBg');

describe('toujou-breadcrumb - desktop', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-media--slider');
    });

    it('has correct attributes', () => {
        cy.get('toujou-slider').invoke('attr', 'class').should('eq', 'slider');
        cy.get('toujou-slider').invoke('attr', 'aria-label').should('eq', 'Toujou slider example');
        cy.get('toujou-slider').invoke('attr', 'slider-design').should('eq', 'default');
        cy.get('toujou-slider').invoke('attr', 'show-count').should('exist');
        cy.get('toujou-slider').invoke('attr', 'autoplay-interval').should('eq', '6000');
        cy.get('toujou-slider').invoke('attr', 'slides-to-show').should('eq', '1');
        cy.get('toujou-slider').invoke('attr', 'slider-type').should('eq', 'loop');
        cy.get('toujou-slider').invoke('attr', 'slides-per-move').should('eq', '1');
        cy.get('toujou-slider').invoke('attr', 'slider-gap').should('eq', '0');
        cy.get('toujou-slider').invoke('attr', 'slider-padding').should('eq', '0');
        cy.get('toujou-slider').invoke('attr', 'slider-focus-center').should('eq', 'false');
    });

    it('has correct default design colors', () => {
        cy.get('toujou-slider').then((e) => {
            e[0].setAttribute('auto-play', '');
        });
        cy.get('toujou-slider .slider-control--prev').should('have.css', 'background-color', colorFont);
        cy.get('toujou-slider .slider-control--next').should('have.css', 'background-color', colorFont);
        cy.get('toujou-slider .slider-control--prev toujou-icon').should('have.css', 'background-color', colorBg);
        cy.get('toujou-slider .slider-control--next toujou-icon').should('have.css', 'background-color', colorBg);
        cy.get('toujou-slider .slider-bullets__bullet.is-active').should('have.css', 'background-color', colorFont);
        cy.get('toujou-slider .slider-bullets__bullet:not(.is-active)').should('have.css', 'background-color', colorBg);
        cy.get('toujou-slider .slider-progress').should('have.css', 'background-color', colorFontLight);
        cy.get('toujou-slider .slider-progress__bar').should('have.css', 'background-color', colorFontDark);
    });

    it('has correct primary design colors', () => {
        cy.get('toujou-slider').then((e) => {
            e[0].setAttribute('auto-play', '');
            e[0].setAttribute('slider-design', 'primary');
        });
        cy.get('toujou-slider .slider-control--prev').should('have.css', 'background-color', colorPrimary);
        cy.get('toujou-slider .slider-control--next').should('have.css', 'background-color', colorPrimary);
        cy.get('toujou-slider .slider-control--prev toujou-icon').should('have.css', 'background-color', colorBg);
        cy.get('toujou-slider .slider-control--next toujou-icon').should('have.css', 'background-color', colorBg);
        cy.get('toujou-slider .slider-bullets__bullet.is-active').should('have.css', 'background-color', colorPrimary);
        cy.get('toujou-slider .slider-bullets__bullet:not(.is-active)').should('have.css', 'background-color', colorBg);
        cy.get('toujou-slider .slider-progress').should('have.css', 'background-color', colorPrimaryLight);
        cy.get('toujou-slider .slider-progress__bar').should('have.css', 'background-color', colorPrimaryDark);
    });

    it('has correct secondary design colors', () => {
        cy.get('toujou-slider').then((e) => {
            e[0].setAttribute('auto-play', '');
            e[0].setAttribute('slider-design', 'secondary');
        });
        cy.get('toujou-slider .slider-control--prev').should('have.css', 'background-color', colorSecondary);
        cy.get('toujou-slider .slider-control--next').should('have.css', 'background-color', colorSecondary);
        cy.get('toujou-slider .slider-control--prev toujou-icon').should('have.css', 'background-color', colorBg);
        cy.get('toujou-slider .slider-control--next toujou-icon').should('have.css', 'background-color', colorBg);
        cy.get('toujou-slider .slider-bullets__bullet.is-active').should('have.css', 'background-color', colorSecondary);
        cy.get('toujou-slider .slider-bullets__bullet:not(.is-active)').should('have.css', 'background-color', colorBg);
        cy.get('toujou-slider .slider-progress').should('have.css', 'background-color', colorSecondaryLight);
        cy.get('toujou-slider .slider-progress__bar').should('have.css', 'background-color', colorSecondaryDark);
    });

    it('has correct default light-grey colors', () => {
        cy.get('toujou-slider').then((e) => {
            e[0].setAttribute('auto-play', '');
            e[0].setAttribute('slider-design', 'light-grey');
        });
        cy.get('toujou-slider .slider-control--prev').should('have.css', 'background-color', colorFontLight);
        cy.get('toujou-slider .slider-control--next').should('have.css', 'background-color', colorFontLight);
        cy.get('toujou-slider .slider-control--prev toujou-icon').should('have.css', 'background-color', colorFontDark);
        cy.get('toujou-slider .slider-control--next toujou-icon').should('have.css', 'background-color', colorFontDark);
        cy.get('toujou-slider .slider-bullets__bullet.is-active').should('have.css', 'background-color', colorFont);
        cy.get('toujou-slider .slider-bullets__bullet:not(.is-active)').should('have.css', 'background-color', colorBg);
        cy.get('toujou-slider .slider-progress').should('have.css', 'background-color', colorFontLight);
        cy.get('toujou-slider .slider-progress__bar').should('have.css', 'background-color', colorFontDark);
    });

    it('has can hide the counter', () => {
        cy.get('toujou-slider .slider-count').should('have.css', 'display', 'block');
        cy.get('toujou-slider').then((e) => {
            e[0].removeAttribute('show-count');
        });
        cy.get('toujou-slider .slider-count').should('have.css', 'display', 'none');
    });

    it('counter has correct total number', () => {
        cy.get('toujou-slider .slider-count__total').should('have.text', '5');
    });

    it('counter shows correct active index', () => {
        cy.get('toujou-slider .slider-count__current').should('have.text', '1');
        cy.get('toujou-slider li[role="presentation"]:nth-child(3)').click();
        cy.get('toujou-slider .slider-count__current').should('have.text', '3');
        cy.get('toujou-slider li[role="presentation"]:nth-child(5)').click();
        cy.get('toujou-slider .slider-count__current').should('have.text', '5');
        cy.get('toujou-slider li[role="presentation"]:nth-child(2)').click();
        cy.get('toujou-slider .slider-count__current').should('have.text', '2');
        cy.get('toujou-slider li[role="presentation"]:nth-child(4)').click();
        cy.get('toujou-slider .slider-count__current').should('have.text', '4');
    });

    it('control clicks go to next / previous slide', () => {
        cy.get('toujou-slider').then((el) => {
            const sliderEl = el[0];
            // @ts-ignore
            const activeIndex = sliderEl.splideSlider.index;
            expect(activeIndex).to.eq(0);
        });
        cy.get('toujou-slider .slider-control--next').click();
        cy.get('toujou-slider').then((el) => {
            const sliderEl = el[0];
            // @ts-ignore
            const activeIndex = sliderEl.splideSlider.index;
            expect(activeIndex).to.eq(1);
        });
        cy.get('toujou-slider .slider-control--next').click();
        cy.get('toujou-slider .slider-control--next').click();
        cy.get('toujou-slider').then((el) => {
            const sliderEl = el[0];
            // @ts-ignore
            const activeIndex = sliderEl.splideSlider.index;
            expect(activeIndex).to.eq(3);
        });
        cy.get('toujou-slider .slider-control--prev').click();
        cy.get('toujou-slider').then((el) => {
            const sliderEl = el[0];
            // @ts-ignore
            const activeIndex = sliderEl.splideSlider.index;
            expect(activeIndex).to.eq(2);
        });
        cy.get('toujou-slider .slider-control--prev').click();
        cy.get('toujou-slider .slider-control--prev').click();
        cy.get('toujou-slider').then((el) => {
            const sliderEl = el[0];
            // @ts-ignore
            const activeIndex = sliderEl.splideSlider.index;
            expect(activeIndex).to.eq(0);
        });
    });

    it('slider of type "loop" can "wrap around', () => {
        cy.get('toujou-slider').then((e) => {
            e[0].setAttribute('slider-type', 'loop');
        });
        cy.get('toujou-slider').then((el) => {
            const sliderEl = el[0];
            // @ts-ignore
            const activeIndex = sliderEl.splideSlider.index;
            expect(activeIndex).to.eq(0);
        });
        cy.get('toujou-slider .slider-control--prev').click();
        cy.get('toujou-slider').then((el) => {
            const sliderEl = el[0];
            // @ts-ignore
            const activeIndex = sliderEl.splideSlider.index;
            expect(activeIndex).to.eq(4);
        });
        cy.get('toujou-slider .slider-control--next').click();
        cy.get('toujou-slider').then((el) => {
            const sliderEl = el[0];
            // @ts-ignore
            const activeIndex = sliderEl.splideSlider.index;
            expect(activeIndex).to.eq(0);
        });
    });

    it('slider has correct fullwidth styles', () => {
        cy.get('toujou-slider').then((e) => {
            e[0].setAttribute('slider-fullwidth', '');
        });

        cy.get('toujou-slider').then((el) => {
            // @ts-ignore
            const win = cy.state('window');
            const styles = win.getComputedStyle(el[0]);
            const sliderWidth = styles.getPropertyValue('--slider-width');
            const sliderMaxWidth = styles.getPropertyValue('--slider-max-width');
            expect(sliderWidth.trim()).to.eq('100%');
            expect(sliderMaxWidth.trim()).to.eq('100%');
        });

        cy.get('toujou-slider .slider-control').then((el) => {
            // @ts-ignore
            const win = cy.state('window');
            const styles = win.getComputedStyle(el[0]);
            const sliderControlInset = styles.getPropertyValue('--slider-control-inset');
            const sliderControlIconTransform = styles.getPropertyValue('--slider-control-icon-transform');
            expect(sliderControlInset.trim()).to.eq('calc(calc(100% - 2rem) / 2) auto auto 0');
            expect(sliderControlIconTransform.trim()).to.eq('translate(-65%, -50%)');
        });
    });
})

export {}
