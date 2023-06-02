/// <reference types="cypress" />

describe('product grid [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-product-grid--product-grid');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct class and tag name', () => {
        cy.get('.image-card-grid').should('have.prop', 'tagName').should('eq', 'TOUJOU-IMAGE-CARD-GRID');
    });

    it('has correct structure', () => {
        cy.get('.image-card-grid').should('exist');
        cy.get('.image-card-grid').children('.image-card').should('have.length', 4);
        cy.get('.image-card-grid .image-card').invoke('attr', 'image-format').should('eq', '16-9');
        cy.get('.image-card-grid .image-card').invoke('attr', 'card-variant').should('eq', 'default');
        cy.get('.image-card-grid .image-card__figure').should('exist');
        cy.get('.image-card-grid .image-card__image').should('exist');
        cy.get('.image-card-grid .image-card__title').should('exist');

    });
})

export {}
