/// <reference types="cypress" />

const desktopViewportHeight = Cypress.env('desktopViewportHeight');
const desktopViewportWidth = Cypress.env('desktopViewportWidth');
const tokens = Cypress.env('tokens');

describe('header', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-header--header-slider');
    });

    it('has correct default attributes', () => {
        cy.get('.header').should('exist');
        cy.get('.header').invoke('prop', 'tagName').should('eq', 'HEADER');
        cy.get('.header').invoke('attr', 'class').should('eq', 'header');
        cy.get('.header').invoke('attr', 'image-height').should('eq', 'default');
        cy.get('.header').invoke('attr', 'header-type').should('eq', 'slider');
    });

    it('has correct structure', () => {
        cy.get('.header').should('exist');
        cy.get('.header .slider').should('exist');
        cy.get('.header .slider .slider__slider').should('exist');
        cy.get('.header .slider .slider__slider .slider-controls').should('exist');
        cy.get('.header .slider .slider__slider .slider-controls').children('.slider-control').should('have.length', 2);
        cy.get('.header .slider .slider__slider .slider__track').should('exist');
        cy.get('.header .slider .slider__slider .slider__track .slider__list').should('exist');
        cy.get('.header .slider .slider__slider .slider__track .slider__list').children('.slider__slide').should('have.length', 7);
        cy.get('.header .slider .slider__slider .slider-progress').should('exist');
        cy.get('.header .slider .slider__slider .slider-progress .slider-progress__bar').should('exist');
        cy.get('.header .slider .slider__slider .slider-bullets').should('exist');
        cy.get('.header .slider .slider__slider .slider-bullets').children('li').should('have.length', 3);
        cy.get('.header .slider .slider-count').should('exist');
        cy.get('.header .slider .slider-count .slider-count__current').should('exist');
        cy.get('.header .slider .slider-count .slider-count__separator').should('exist');
        cy.get('.header .slider .slider-count .slider-count__total').should('exist');
    });
});

describe('header - image-height', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-header--header-slider');
    });

    it('has correct default height', () => {
        const eightyPercentHeight = desktopViewportHeight / 100 * 80;
        cy.get('.header').should('have.css', 'height', `${eightyPercentHeight}px`);
    });

    it('has correct full height', () => {
        cy.get('.header').then((e) => {
            e[0].setAttribute('image-height', 'full');
            cy.get('.header').should('have.css', 'height', `${desktopViewportHeight}px`);
        });
    });

    it('has correct half height', () => {
        cy.get('.header').then((e) => {
            e[0].setAttribute('image-height', 'half');
        });
        const halfHeight = desktopViewportHeight / 2;
        cy.get('.header').should('have.css', 'height', `${halfHeight}px`);
    });

    it('has correct quarter height', () => {
        cy.get('.header').then((e) => {
            e[0].setAttribute('image-height', 'quarter');
        });
        const quarterHeight = desktopViewportHeight / 4;
        cy.get('.header').should('have.css', 'height', `${quarterHeight}px`);
    });
});

describe('header - content size', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-header--header-slider');
    });

    it('has correct full width', () => {
        cy.get('.header-content').then((e) => {
            e[0].setAttribute('content-size', 'full');
        });
        cy.get('.header-content').should('have.css', 'width', `1632px`);
    });

    it('has correct half width', () => {
        cy.get('.header-content').should('have.css', 'width', `960px`);
    });

    it('has correct half width', () => {
        cy.get('.header-content').then((e) => {
            e[0].setAttribute('content-size', 'third');
            const thirdWidth = desktopViewportWidth / 3;
            const headerContentWidth = Math.ceil(parseFloat(getComputedStyle(e[0]).width));
            expect(headerContentWidth).to.equal(thirdWidth);
        });
    });

    it('has correct half width', () => {
        cy.get('.header-content').then((e) => {
            e[0].setAttribute('content-size', 'quarter');
        });
        const quarterWidth = desktopViewportWidth / 4;
        cy.get('.header-content').should('have.css', 'width', `${quarterWidth}px`);
    });
});

describe('header - vertical position', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-header--header-slider');
    });

    it('has correct "mid" vertical position', () => {
        cy
            .get('.header').then((e) => {
                const headerHeight = parseInt(getComputedStyle(e[0]).height);
                return headerHeight;
            })
            .then((headerHeight) => {
                cy.get('.header-content').should('have.css', 'top', `${headerHeight / 2}px`);
            })
    });

    it('has correct "top" vertical position', () => {
        cy.get('.header-content').then((e) => {
            e[0].setAttribute('vertical-position', 'top');
        });
        cy.get('.header-content').should('have.css', 'top', tokens.spacing.xxl);
    });

    it('has correct "bottom" vertical position', () => {
        cy.get('.header-content').then((e) => {
            e[0].setAttribute('vertical-position', 'bottom');
        });
        cy.get('.header-content').should('have.css', 'bottom', tokens.spacing.xl);
    });
});

describe('header - horizontal position', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-header--header-slider');
    });

    it('has correct "center" horizontal position', () => {
        cy
            .get('.header').then((e) => {
                const headerWidth = parseInt(getComputedStyle(e[0]).width);
                return headerWidth;
            })
            .then((headerWidth) => {
                cy.get('.header-content').should('have.css', 'left', `${headerWidth / 2}px`);
            })
    });

    it('has correct "left" horizontal position', () => {
        cy.get('.header-content').then((e) => {
            e[0].setAttribute('horizontal-position', 'left');
        });
        cy.get('.header-content').should('have.css', 'left', '112px');
    });

    it('has correct "right" horizontal position', () => {
        cy.get('.header-content').then((e) => {
            e[0].setAttribute('horizontal-position', 'right');
        });
        cy.get('.header-content').should('have.css', 'right', '112px');
    });
});


export {}
