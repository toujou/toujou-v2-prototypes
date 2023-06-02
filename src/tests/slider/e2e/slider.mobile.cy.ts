/// <reference types="cypress" />

const colors = Cypress.env('colors');

describe('Slider - mobile', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-media--slider');
    });

    it('has correct attributes', () => {
        cy.get('toujou-slider').invoke('attr', 'class').should('eq', 'slider');
        cy.get('toujou-slider').invoke('attr', 'aria-label').should('eq', 'Toujou slider example');
        cy.get('toujou-slider').invoke('attr', 'element-design').should('eq', 'default');
        cy.get('toujou-slider').invoke('attr', 'show-count').should('exist');
        cy.get('toujou-slider').invoke('attr', 'auto-play-interval').should('eq', '6');
        cy.get('toujou-slider').invoke('attr', 'slides-to-show').should('eq', '1');
        cy.get('toujou-slider').invoke('attr', 'slider-type').should('eq', 'loop');
        cy.get('toujou-slider').invoke('attr', 'slides-per-move').should('eq', '1');
        cy.get('toujou-slider').invoke('attr', 'slider-gap').should('eq', 'var(--slider-slides-gap)');
        cy.get('toujou-slider').invoke('attr', 'slider-padding').should('eq', '0');
        cy.get('toujou-slider').invoke('attr', 'slider-focus-center').should('eq', 'false');
    });

    it('has correct default design colors', () => {
        cy.get('toujou-slider').then((e) => {
            e[0].setAttribute('auto-play', '');
        });
        cy.get('toujou-slider .slider-control--prev').should('have.css', 'background-color', colors.colorFont);
        cy.get('toujou-slider .slider-control--next').should('have.css', 'background-color', colors.colorFont);
        cy.get('toujou-slider .slider-control--prev toujou-icon').should('have.css', 'background-color', colors.colorBg);
        cy.get('toujou-slider .slider-control--next toujou-icon').should('have.css', 'background-color', colors.colorBg);
        cy.get('toujou-slider .slider-bullets__bullet.is-active').should('have.css', 'background-color', colors.colorBg);
        cy.get('toujou-slider .slider-bullets__bullet.is-active').should('have.css', 'border', `2px solid ${colors.colorBg}`);
        cy.get('toujou-slider .slider-bullets__bullet:not(.is-active)').should('have.css', 'background-color', colors.colorTransparent);
        cy.get('toujou-slider .slider-bullets__bullet:not(.is-active)').should('have.css', 'border', `2px solid ${colors.colorBg}`);
        cy.get('toujou-slider .slider-progress').should('have.css', 'background-color', colors.colorFontLight);
        cy.get('toujou-slider .slider-progress__bar').should('have.css', 'background-color', colors.colorFontDark);
    });

    it('has correct primary design colors', () => {
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
        cy.get('toujou-slider .slider-progress').should('have.css', 'background-color', colors.colorPrimaryDark);
        cy.get('toujou-slider .slider-progress__bar').should('have.css', 'background-color', colors.colorPrimaryLight);
    });

    it('has correct secondary design colors', () => {
        cy.get('toujou-slider').then((e) => {
            e[0].setAttribute('auto-play', '');
            e[0].setAttribute('element-design', 'secondary');
        });
        cy.get('toujou-slider .slider-control--prev').should('have.css', 'background-color', colors.colorSecondary);
        cy.get('toujou-slider .slider-control--next').should('have.css', 'background-color', colors.colorSecondary);
        cy.get('toujou-slider .slider-control--prev toujou-icon').should('have.css', 'background-color', colors.colorBg);
        cy.get('toujou-slider .slider-control--next toujou-icon').should('have.css', 'background-color', colors.colorBg);
        cy.get('toujou-slider .slider-bullets__bullet.is-active').should('have.css', 'background-color', colors.colorSecondary);
        cy.get('toujou-slider .slider-bullets__bullet.is-active').should('have.css', 'border', `2px solid ${colors.colorSecondary}`);
        cy.get('toujou-slider .slider-bullets__bullet:not(.is-active)').should('have.css', 'background-color', colors.colorTransparent);
        cy.get('toujou-slider .slider-bullets__bullet:not(.is-active)').should('have.css', 'border', `2px solid ${colors.colorSecondary}`);
        cy.get('toujou-slider .slider-progress').should('have.css', 'background-color', colors.colorSecondaryDark);
        cy.get('toujou-slider .slider-progress__bar').should('have.css', 'background-color', colors.colorSecondaryLight);
    });

    it('has correct default light-grey colors', () => {
        cy.get('toujou-slider').then((e) => {
            e[0].setAttribute('auto-play', '');
            e[0].setAttribute('element-design', 'light-grey');
        });
        cy.get('toujou-slider .slider-control--prev').should('have.css', 'background-color', colors.colorFontLight);
        cy.get('toujou-slider .slider-control--next').should('have.css', 'background-color', colors.colorFontLight);
        cy.get('toujou-slider .slider-control--prev toujou-icon').should('have.css', 'background-color', colors.colorFontDark);
        cy.get('toujou-slider .slider-control--next toujou-icon').should('have.css', 'background-color', colors.colorFontDark);
        cy.get('toujou-slider .slider-bullets__bullet.is-active').should('have.css', 'background-color', colors.colorFontLight);
        cy.get('toujou-slider .slider-bullets__bullet.is-active').should('have.css', 'border', `2px solid ${colors.colorFontLight}`);
        cy.get('toujou-slider .slider-bullets__bullet:not(.is-active)').should('have.css', 'background-color', colors.colorTransparent);
        cy.get('toujou-slider .slider-bullets__bullet:not(.is-active)').should('have.css', 'border', `2px solid ${colors.colorFontLight}`);
        cy.get('toujou-slider .slider-progress').should('have.css', 'background-color', colors.colorFontLight);
        cy.get('toujou-slider .slider-progress__bar').should('have.css', 'background-color', colors.colorFontDark);
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
            // const sliderWidth = styles.getPropertyValue('--slider-width');
            const sliderMaxWidth = styles.getPropertyValue('--slider-max-width');
            // expect(sliderWidth.trim()).to.eq('calc(100% - calc( 1rem * 2))');
            expect(sliderMaxWidth.trim()).to.eq('960px');
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
