/// <reference types="cypress" />

const colors = Cypress.env('colors');

describe('blockquote grid', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blockquote--toujou-blockquote-grid');
    });

    it('has correct structure', () => {
        cy.get('toujou-blockquote-grid.blockquote-grid').should('exist');
        cy.get('toujou-blockquote-grid.blockquote-grid').children('.blockquote').should('have.length', 4);
    });
});

describe('blockquote grid - 2 cols', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blockquote--toujou-blockquote-grid&args=gridCount:2');
    });

    it('has correct structure', () => {
        cy.get('toujou-blockquote-grid.blockquote-grid').invoke('attr', 'blockquote-grid-count').should('eq', '2');
    });
});

describe('blockquote grid - 3 cols', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blockquote--toujou-blockquote-grid&args=gridCount:3');
    });

    it('has correct structure', () => {
        cy.get('toujou-blockquote-grid.blockquote-grid').invoke('attr', 'blockquote-grid-count').should('eq', '3');
    });
});

describe('blockquote grid - horizontal', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blockquote--toujou-blockquote-grid&args=direction:horizontal');
    });

    it('has correct structure', () => {
        cy.get('toujou-blockquote-grid.blockquote-grid .blockquote').invoke('attr', 'blockquote-direction').should('eq', 'horizontal');
    });
});

export {}
