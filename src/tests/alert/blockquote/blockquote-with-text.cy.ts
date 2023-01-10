/// <reference types="cypress" />

describe('blockquote with text', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blockquote--blockquote-with-text');
    });

    it('has correct structure', () => {
        cy.get('toujou-grid.grid').should('exist');
        cy.get('toujou-grid.grid toujou-grid-column.grid-column').should('exist');
        cy.get('toujou-grid.grid toujou-grid-column.grid-column p').should('exist');
        cy.get('toujou-grid.grid toujou-grid-column.grid-column + .grid-column').should('exist');
        cy.get('toujou-grid.grid toujou-grid-column.grid-column + .grid-column .blockquote').should('exist');
    });
})

export {}
