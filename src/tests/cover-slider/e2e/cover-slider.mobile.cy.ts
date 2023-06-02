/// <reference types="cypress" />
/// <reference types="cypress-real-events" />

const colors = Cypress.env('colors');

describe('toujou-cover-slider - desktop', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-cover-slider--cover-slider');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct class', () => {
        cy.get('toujou-cover-slider').invoke('attr', 'class').should('eq', 'cover-slider');
    });

    it('is-slider', () => {
        cy.get('toujou-cover-slider').invoke('attr', 'is-slider').should("exist");
    });

    // it.only('controls visible only on hover', () => {
    //     cy.get('.cover-slider .splide__arrow--prev').should('have.css', 'display', 'none');
    //     // @ts-ignore
    //     cy.get('.cover-slider').realHover();
    //     cy.get('.cover-slider .splide__arrow--prev').should('have.css', 'display', 'block');
    // });

    it('bullets are hidden', () => {
        cy.get('.cover-slider .slider-bullets').should('have.css', 'display', 'none');
    });

    it('link has correct link hover effect', () => {
        cy.get('a.cover-slider__link h3').should('have.css', 'color', colors.colorBg);
        cy.get('a.cover-slider__link .single-media').should('have.css', 'filter', 'none');
        cy.get('#splide01-slide01 a.cover-slider__link').realHover();
        cy.get('#splide01-slide01 a.cover-slider__link h3').should('have.css', 'color', colors.colorPrimaryLight);
        cy.get('#splide01-slide01 a.cover-slider__link .single-media img').should('have.css', 'transform', 'matrix(1.1, 0, 0, 1.1, 0, 0)');
    });
})

describe('toujou-cover-slider - primary design', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-cover-slider--cover-slider&args=elementDesign:primary');
    });

    it('link has correct link hover effect', () => {
        cy.get('a.cover-slider__link h3').should('have.css', 'color', colors.colorPrimary);
        cy.get('a.cover-slider__link .single-media').should('have.css', 'filter', 'none');
        cy.get('#splide01-slide01 a.cover-slider__link').realHover();
        cy.get('#splide01-slide01 a.cover-slider__link h3').should('have.css', 'color', colors.colorPrimaryLight);
        cy.get('#splide01-slide01 a.cover-slider__link .single-media img').should('have.css', 'transform', 'matrix(1.1, 0, 0, 1.1, 0, 0)');
    });
})

describe('toujou-cover-slider - secondary design', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-cover-slider--cover-slider&args=elementDesign:secondary');
    });

    it('link has correct link hover effect', () => {
        cy.get('a.cover-slider__link h3').should('have.css', 'color', colors.colorSecondary);
        cy.get('a.cover-slider__link .single-media').should('have.css', 'filter', 'none');
        cy.get('#splide01-slide01 a.cover-slider__link').realHover();
        cy.get('#splide01-slide01 a.cover-slider__link h3').should('have.css', 'color', colors.colorSecondaryLight);
        cy.get('#splide01-slide01 a.cover-slider__link .single-media img').should('have.css', 'transform', 'matrix(1.1, 0, 0, 1.1, 0, 0)');
    });
})

describe('toujou-cover-slider - inverted design', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-cover-slider--cover-slider&args=elementDesign:inverted');
    });

    it('link has correct link hover effect', () => {
        cy.get('a.cover-slider__link h3').should('have.css', 'color', colors.colorFont);
        cy.get('a.cover-slider__link .single-media').should('have.css', 'filter', 'none');
        cy.get('#splide01-slide01 a.cover-slider__link').realHover();
        cy.get('#splide01-slide01 a.cover-slider__link h3').should('have.css', 'color', colors.colorFontLight);
        cy.get('#splide01-slide01 a.cover-slider__link .single-media img').should('have.css', 'transform', 'matrix(1.1, 0, 0, 1.1, 0, 0)');
    });
})

export {}
