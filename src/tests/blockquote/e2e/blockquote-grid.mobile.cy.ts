/// <reference types="cypress" />

describe('blockquote grid [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-blockquote--toujou-blockquote-grid');
    });

    it('has correct structure', () => {
        cy.get('toujou-blockquote-grid.blockquote-grid').should('exist');
        cy.get('toujou-blockquote-grid.blockquote-grid').children('.blockquote').should('have.length', 4);
    });
});

describe('blockquote grid - 2 cols [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-blockquote--toujou-blockquote-grid&args=gridCount:2');
    });

    it('has correct structure', () => {
        cy.get('toujou-blockquote-grid.blockquote-grid').invoke('attr', 'blockquote-grid-count').should('eq', '2');
        cy.get('toujou-blockquote-grid.blockquote-grid').should('have.css', 'grid-template-columns', '296px');
    });
});

describe('blockquote grid - 3 cols [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-blockquote--toujou-blockquote-grid&args=gridCount:3');
        cy.get('toujou-blockquote-grid.blockquote-grid').should('have.css', 'grid-template-columns', '296px');
    });

    it('has correct structure', () => {
        cy.get('toujou-blockquote-grid.blockquote-grid').invoke('attr', 'blockquote-grid-count').should('eq', '3');
    });
});

describe('blockquote grid - horizontal [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-blockquote--toujou-blockquote-grid&args=direction:horizontal');
    });

    it('has correct structure', () => {
        cy.get('toujou-blockquote-grid.blockquote-grid .blockquote').invoke('attr', 'blockquote-direction').should('eq', 'horizontal');
    });
});

export {}
