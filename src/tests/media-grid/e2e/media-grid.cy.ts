/// <reference types="cypress" />
/// <reference types="cypress-real-events" />

const tokens = Cypress.env('tokens');

describe('media grid', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-media--media-grid');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct class and tag name', () => {
        cy.get('toujou-media-grid').should('have.prop', 'tagName').should('eq', 'TOUJOU-MEDIA-GRID');
        cy.get('toujou-media-grid').invoke('attr', 'class').should('eq', 'media-grid');
        cy.get('toujou-media-grid').invoke('attr', 'media-grid-column-number').should('eq', '2');
    });

    it('has correct structure', () => {
        cy.get('.media-grid').should('exist');
        cy.get('.media-grid').children('.single-media').should('have.length', 2);
        cy.get('.media-grid .single-media .single-media__image').should('exist');
        cy.get('.media-grid .single-media .media-info').should('exist');
    });

    it('has correct styles', () => {
        cy.get('.media-grid').should('have.css', 'display', 'grid');
        cy.get('.media-grid').should('have.css', 'grid-gap', `${tokens.spacing.xl} ${tokens.spacing.xl}`);
        cy.get('.media-grid').should('have.css', 'grid-template-columns', '456px 456px');
        cy.get('.media-grid').should('have.css', 'width', '960px');
        cy.get('.media-grid').should('have.css', 'max-width', '960px');
        cy.get('.media-grid').should('have.css', 'margin', '0px 464px');
        cy.get('.media-grid').should('have.css', '', '');
    });
})

describe('media grid - 1 column', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-media--media-grid&args=numberOfCols:1');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct 1 column styles', () => {
        cy.get('toujou-media-grid').invoke('attr', 'media-grid-column-number').should('eq', '1');
        cy.get('.media-grid').should('have.css', 'grid-template-columns', '960px');
    });
})

describe('media grid - 3 columns', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-media--media-grid&args=numberOfCols:3');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct 3 columns styles', () => {
        cy.get('toujou-media-grid').invoke('attr', 'media-grid-column-number').should('eq', '3');
        cy.get('.media-grid').should('have.css', 'grid-template-columns', '448px 448px 448px');
    });
})

describe('media grid - 4 columns', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-media--media-grid&args=numberOfCols:4');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it.only('has correct 4 columns styles', () => {
        cy.get('toujou-media-grid').invoke('attr', 'media-grid-column-number').should('eq', '4');
        cy.get('.media-grid').should('have.css', 'grid-template-columns', '324px 324px 324px 324px');
    });
})

export {}
