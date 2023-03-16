/// <reference types="cypress" />
/// <reference types="cypress-real-events" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('gallery', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-media--hero-media');
        // @ts-ignore
        cy.get('body').resetRealHover();
        cy.wait(300);
    });

    it('has correct class and tag name', () => {
        cy.get('.hero-media').should('have.prop', 'tagName').should('eq', 'A');
        cy.get('.hero-media').invoke('attr', 'headline-alignment').should('eq', 'default');
    });

    it('has correct structure', () => {
        cy.get('.hero-media').should('exist');
        cy.get('.hero-media .hero-media__media').should('exist');
        cy.get('.hero-media .hero-media__title').should('exist');
        cy.get('.hero-media .media-info').should('exist');
    });

    it.only('has correct styles', () => {
        cy.get('.hero-media').should('have.css', 'aspect-ratio', tokens.aspectRatio.threeToOne);
        cy.get('.hero-media').should('have.css', 'display', 'block');
        cy.get('.hero-media').should('have.css', 'position', 'relative');
        cy.get('.hero-media').should('have.css', 'padding', '0px');
        cy.get('.hero-media').should('have.css', 'margin', '0px 224px');
        cy.get('.hero-media').should('have.css', 'z-index', tokens.zIndex.content);
        cy.get('.hero-media').should('have.css', 'width', '1440px');
        cy.get('.hero-media').should('have.css', 'max-width', '1440px');
        cy.get('.hero-media').should('have.css', 'border-radius', tokens.borderRadius.normal);
        cy.get('.hero-media').should('have.css', 'overflow', 'hidden');

        cy.get('.hero-media .hero-media__media').should('have.css', 'aspect-ratio', tokens.aspectRatio.threeToOne);
        cy.get('.hero-media .hero-media__media').should('have.css', 'object-fit', 'cover');
        cy.get('.hero-media .hero-media__media').should('have.css', 'width', '1440px');
        cy.get('.hero-media .hero-media__media').should('have.css', 'height', '480px');

        cy.get('.hero-media .hero-media__title').should('have.css', 'position', 'absolute');
        cy.get('.hero-media .hero-media__title').should('have.css', 'top', '240px');
        cy.get('.hero-media .hero-media__title').should('have.css', 'left', '720px');
        cy.get('.hero-media .hero-media__title').should('have.css', 'right', '447.867px');
        cy.get('.hero-media .hero-media__title').should('have.css', 'transform', 'matrix(1, 0, 0, 1, -136, -36)');
        cy.get('.hero-media .hero-media__title').should('have.css', 'margin', '0px');
        cy.get('.hero-media .hero-media__title').should('have.css', 'color', colors.colorBg);
        cy.get('.hero-media .hero-media__title').should('have.css', 'padding', `${tokens.spacing.normal} ${tokens.spacing.xl}`);
    });
})

export {}
