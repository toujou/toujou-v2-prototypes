/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('opening hours', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=pages-organization--organization-no-content');
    });

    it('has correct class and tag name', () => {
        cy.get('toujou-opening-hours').should('have.prop', 'tagName').should('eq', 'TOUJOU-OPENING-HOURS');
        cy.get('toujou-opening-hours').invoke('attr', 'class').should('eq', 'opening-hours');
    });

    it('has correct styles', () => {
        cy.get('.opening-hours').should('have.css', 'font-family', tokens.type.fontFamily.text);
        cy.get('.opening-hours').should('have.css', 'font-size', tokens.type.size.normal);
        cy.get('.opening-hours').should('have.css', 'line-height', '24px');
        cy.get('.opening-hours').should('have.css', 'color', colors.colorFont);

        cy.get('.opening-hours').children('.opening-hours__row').should('have.length', 6);

        cy.get('.opening-hours__row').should('have.css', 'display', 'grid');
        cy.get('.opening-hours__row').should('have.css', 'grid-template-columns', '260px 260px');
        cy.get('.opening-hours__row').should('have.css', 'grid-gap', `${tokens.spacing.normal} ${tokens.spacing.normal}`);

        cy.get('.opening-hours__day').should('have.css', 'overflow-wrap', 'anywhere');
        cy.get('.opening-hours__day').should('have.css', 'hyphens', 'auto');

        cy.get('.opening-hours__time').should('have.css', 'overflow-wrap', 'anywhere');
        cy.get('.opening-hours__time').should('have.css', 'hyphens', 'auto');
    });
})

export {}
