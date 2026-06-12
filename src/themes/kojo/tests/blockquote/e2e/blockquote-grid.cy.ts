/// <reference types="cypress" />

describe('blockquote grid', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blockquote--toujou-blockquote-grid');
    });

    it('has correct structure', () => {
        cy.get('toujou-blockquote-grid.blockquote-grid').should('exist');
        cy.get('toujou-blockquote-grid.blockquote-grid').children('.blockquote').should('have.length', 8);
    });
});

describe('blockquote grid - 2 cols', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blockquote--toujou-blockquote-grid&args=gridCount:2');
    });

    it('has correct structure', () => {
        cy.get('toujou-blockquote-grid.blockquote-grid').invoke('attr', 'blockquote-grid-count').should('eq', '2');
        cy.get('toujou-blockquote-grid.blockquote-grid').should('have.css', 'grid-template-columns', '696px 696px');
    });
});

describe('blockquote grid - 3 cols', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blockquote--toujou-blockquote-grid&args=gridCount:3');
    });

    it('has correct structure', () => {
        cy.get('toujou-blockquote-grid.blockquote-grid').invoke('attr', 'blockquote-grid-count').should('eq', '3');
        cy.get('toujou-blockquote-grid.blockquote-grid').should('have.css', 'grid-template-columns', '324px 324px 324px 324px');
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
