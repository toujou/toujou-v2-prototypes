/// <reference types="cypress" />
/// <reference types="cypress-real-events" />

const colors = Cypress.env('colors');

describe('toujou-cover-slider - desktop', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
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

    it('bullets are hidden', () => {
        cy.get('.cover-slider .slider-bullets').should('have.css', 'display', 'none');
    });

    it('link has correct link hover effect', () => {
        cy.get('a.cover-slider__link h3').should('have.css', 'color', colors.colorBg);
        cy.get('a.cover-slider__link h3').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
        cy.get('a.cover-slider__link .single-media').should('have.css', 'filter', 'none');
        cy.get('#splide01-slide01 a.cover-slider__link').realHover();
        cy.get('#splide01-slide01 a.cover-slider__link h3').should('have.css', 'color', colors.colorPrimary);
        cy.get('a.cover-slider__link h3').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
        cy.get('#splide01-slide01 a.cover-slider__link .single-media img').should('have.css', 'transform', 'matrix(1.1, 0, 0, 1.1, 0, 0)');
    });

    it('link has correct primary design', () => {
        cy.get('#splide01-slide03 a.cover-slider__link h3').should('have.css', 'color', colors.colorBg);
        cy.get('#splide01-slide03 a.cover-slider__link h3').should('have.css', 'background-color', colors.colorSecondary);
        cy.get('#splide01-slide03 a.cover-slider__link .single-media').should('have.css', 'filter', 'none');
        cy.get('#splide01-slide03 a.cover-slider__link').realHover();
        cy.get('#splide01-slide03 a.cover-slider__link h3').should('have.css', 'color', colors.colorBg);
        cy.get('#splide01-slide03 a.cover-slider__link h3').should('have.css', 'background-color', colors.colorSecondaryDark);
        cy.get('#splide01-slide03 a.cover-slider__link .single-media img').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, 0)');
    });

    it('link has correct inverted design', () => {
        cy.get('#splide01-slide04 a.cover-slider__link h3').should('have.css', 'color', colors.colorBg);
        cy.get('#splide01-slide04 a.cover-slider__link h3').should('have.css', 'background-color', colors.colorFontLight);
        cy.get('#splide01-slide04 a.cover-slider__link .single-media').should('have.css', 'filter', 'none');
        cy.get('#splide01-slide04 a.cover-slider__link').realHover();
        cy.get('#splide01-slide04 a.cover-slider__link h3').should('have.css', 'color', colors.colorBg);
        cy.get('#splide01-slide04 a.cover-slider__link h3').should('have.css', 'background-color', colors.colorFontDark);
        cy.get('#splide01-slide04 a.cover-slider__link .single-media img').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, 0)');
    });
})

export {}
