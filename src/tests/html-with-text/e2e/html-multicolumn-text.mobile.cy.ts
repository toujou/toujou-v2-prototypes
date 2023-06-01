/// <reference types="cypress" />

const tokens = Cypress.env('tokens');

describe('html multicolumn text - left [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-html-with-text--html-with-text-story-props&args=layout:multicolumn-left');
    });

    it('has correct structure', () => {
        cy.get('toujou-grid').should('have.prop', 'tagName').should('eq', 'TOUJOU-GRID');
        cy.get('toujou-grid').should('have.prop', 'class').should('eq', 'grid');
        cy.get('toujou-grid').should('have.attr', 'grid-type').should('eq', 'default');
        cy.get('toujou-grid').should('have.attr', 'number-of-columns').should('eq', '3');
        cy.get('toujou-grid').should('have.attr', 'column-layout').should('eq', 'third-left');

        cy.get('toujou-html-container').should('have.prop', 'tagName').should('eq', 'TOUJOU-HTML-CONTAINER');
        cy.get('toujou-html-container').invoke('attr', 'class').should('eq', 'html-container');
        cy.get('toujou-html-container').invoke('attr', 'fullwidth').should('exist');

        cy.get('toujou-grid .grid-column:nth-child(1) .html-container').should('exist');
        cy.get('toujou-grid .grid-column:nth-child(2) .html-container').should('not.exist');
        cy.get('toujou-grid .grid-column:nth-child(3) .html-container').should('not.exist');
    });

    it('has correct styles', () => {
        cy.get('toujou-grid').should('have.css', 'display', 'grid');
        cy.get('toujou-grid').should('have.css', 'grid-template-columns', '296px');
        cy.get('toujou-grid').should('have.css', 'grid-gap', `${tokens.spacing.l} ${tokens.spacing.l}`);

    });
})

describe('html multicolumn text - right [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-html-with-text--html-with-text-story-props&args=layout:multicolumn-right');
    });

    it('has correct structure', () => {
        cy.get('toujou-grid').should('have.prop', 'tagName').should('eq', 'TOUJOU-GRID');
        cy.get('toujou-grid').should('have.prop', 'class').should('eq', 'grid');
        cy.get('toujou-grid').should('have.attr', 'grid-type').should('eq', 'default');
        cy.get('toujou-grid').should('have.attr', 'number-of-columns').should('eq', '3');
        cy.get('toujou-grid').should('have.attr', 'column-layout').should('eq', 'third-left');

        cy.get('toujou-html-container').should('have.prop', 'tagName').should('eq', 'TOUJOU-HTML-CONTAINER');
        cy.get('toujou-html-container').invoke('attr', 'class').should('eq', 'html-container');
        cy.get('toujou-html-container').invoke('attr', 'fullwidth').should('exist');

        cy.get('toujou-grid .grid-column:nth-child(1) .html-container').should('not.exist');
        cy.get('toujou-grid .grid-column:nth-child(2) .html-container').should('not.exist');
        cy.get('toujou-grid .grid-column:nth-child(3) .html-container').should('exist');
    });

    it('has correct styles', () => {
        cy.get('toujou-grid').should('have.css', 'display', 'grid');
        cy.get('toujou-grid').should('have.css', 'grid-template-columns', '296px');
        cy.get('toujou-grid').should('have.css', 'grid-gap', `${tokens.spacing.l} ${tokens.spacing.l}`);

    });
})

export {}
