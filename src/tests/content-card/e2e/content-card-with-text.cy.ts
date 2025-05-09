/// <reference types="cypress" />

const tokens = Cypress.env('tokens');

describe('content card with text', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-content-card--content-card-with-text');
        cy.get('body').click();
    });

    it('has correct structure', () => {
        cy.get('toujou-grid.grid').should('exist');
        cy.get('toujou-grid.grid').invoke('attr', 'number-of-columns').should('eq', '2');
        cy.get('toujou-grid.grid').invoke('attr', 'grid-type').should('eq', 'default');
        cy.get('toujou-grid.grid').invoke('attr', 'column-layout').should('eq', 'third-right');

        cy.get('toujou-grid.grid').children('.grid-column').should('have.length', 4);
        cy.get('toujou-grid.grid .grid-column:first-child h1').should('exist');
        cy.get('toujou-grid.grid .grid-column:first-child p').should('exist');
        cy.get('toujou-grid.grid .grid-column:last-child .content-card-grid').should('exist');
        cy.get('toujou-grid.grid .grid-column:last-child .content-card-grid').invoke('attr', 'fullwidth').should('exist');
        cy.get('toujou-grid.grid .grid-column:last-child .content-card-grid .content-card').should('exist');
    });

    it('has correct grid styles', () => {
        cy.get('toujou-grid.grid').should('have.css', 'display', 'grid');
        cy.get('toujou-grid.grid').should('have.css', 'grid-template-columns', '608px 304px');
        cy.get('toujou-grid.grid').should('have.css', 'grid-gap', `${tokens.spacing.xl}`);
        cy.get('toujou-grid.grid').should('have.css', 'margin', '96px 456.5px 0px');
        cy.get('toujou-grid.grid').should('have.css', 'width', '960px');
        cy.get('toujou-grid.grid').should('have.css', 'max-width', '960px');
    });
});

describe('content card with text - left', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-content-card--content-card-with-text');
        cy.get('body').click();
    });

    it('has correct layout attribute', () => {
        cy.get('toujou-grid.grid').invoke('attr', 'column-layout').should('eq', 'third-right');
    });
});

describe('content card with text - right', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-content-card--content-card-with-text&args=direction:right');
        cy.get('body').click();
    });

    it('has correct layout attribute', () => {
        cy.get('toujou-grid.grid').invoke('attr', 'column-layout').should('eq', 'third-left');
    });
});

export {}
