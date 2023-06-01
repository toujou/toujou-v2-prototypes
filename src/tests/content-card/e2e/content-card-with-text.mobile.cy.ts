/// <reference types="cypress" />

describe('content card with text [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-content-card--content-card-with-text');
        cy.get('body').click();
    });

    it('has correct structure', () => {
        cy.get('toujou-grid.grid').should('exist');
        cy.get('toujou-grid.grid').invoke('attr', 'number-of-columns').should('eq', '2');
        cy.get('toujou-grid.grid').invoke('attr', 'grid-type').should('eq', 'default');
        cy.get('toujou-grid.grid').invoke('attr', 'column-layout').should('eq', 'third-right');

        cy.get('toujou-grid.grid').children('.grid-column').should('have.length', 2);
        cy.get('toujou-grid.grid .grid-column:first-child h1').should('exist');
        cy.get('toujou-grid.grid .grid-column:first-child p').should('exist');
        cy.get('toujou-grid.grid .grid-column:last-child .content-card-grid').should('exist');
        cy.get('toujou-grid.grid .grid-column:last-child .content-card-grid').invoke('attr', 'fullwidth').should('exist');
        cy.get('toujou-grid.grid .grid-column:last-child .content-card-grid .content-card').should('exist');
    });

    it('has correct grid styles', () => {
        cy.get('toujou-grid.grid').should('have.css', 'display', 'grid');
        cy.get('toujou-grid.grid').should('have.css', 'grid-template-columns', '296px');
        cy.get('toujou-grid.grid').should('have.css', 'grid-gap', '32px 32px');
        cy.get('toujou-grid.grid').should('have.css', 'margin', '0px 16px');
        cy.get('toujou-grid.grid').should('have.css', 'width', '296px');
        cy.get('toujou-grid.grid').should('have.css', 'max-width', '960px');
    });
});

describe('content card with text - left [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-content-card--content-card-with-text');
        cy.get('body').click();
    });

    it('has correct layout attribute', () => {
        cy.get('toujou-grid.grid').invoke('attr', 'column-layout').should('eq', 'third-right');
    });
});

describe('content card with text - right [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-content-card--content-card-with-text&args=direction:right');
        cy.get('body').click();
    });

    it('has correct layout attribute', () => {
        cy.get('toujou-grid.grid').invoke('attr', 'column-layout').should('eq', 'third-left');
    });
});

export {}
