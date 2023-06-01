/// <reference types="cypress" />

describe('blockquote with text [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-blockquote--blockquote-with-text');
    });

    it('has correct structure', () => {
        cy.get('toujou-grid.grid').should('exist');
        cy.get('toujou-grid.grid').should('have.css', 'grid-template-columns', '311px');
        cy.get('toujou-grid.grid toujou-grid-column.grid-column').should('exist');
        cy.get('toujou-grid.grid toujou-grid-column.grid-column p').should('exist');
        cy.get('toujou-grid.grid toujou-grid-column.grid-column + .grid-column').should('exist');
        cy.get('toujou-grid.grid toujou-grid-column.grid-column + .grid-column .blockquote').should('exist');
    });
})

export {}
