/// <reference types="cypress" />

describe('image-card with text [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-image-card--image-card-with-text');
    });

    it('has correct structure', () => {
        cy.get('.grid').should('exist');
        cy.get('.grid').invoke('attr', 'number-of-columns').should('eq', '2');
        cy.get('.grid').invoke('attr', 'grid-type').should('eq', 'default');
        cy.get('.grid').invoke('attr', 'column-layout').should('eq', 'third-right');

        cy.get('.grid').children('.grid-column').should('have.length', 2);

        cy.get('.grid .grid-column:nth-child(1) h1').should('exist');
        cy.get('.grid .grid-column:nth-child(1) p').should('exist');

        cy.get('.grid .grid-column:nth-child(2) .content-card-grid').should('exist');
        cy.get('.grid .grid-column:nth-child(2) .content-card-grid .image-card').should('exist');
    });
})

export {}
