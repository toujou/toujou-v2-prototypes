/// <reference types="cypress" />

const tokens = Cypress.env('tokens');

describe('Tokens - border [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=tokens-border--border');
    });

    it('has correct values for the border variables', () => {
        cy.get('.tokens-demo__border-box.border-normal').should('have.css', 'border-width', tokens.border.normal);
        cy.get('.tokens-demo__border-box.border-m').should('have.css', 'border-width', tokens.border.m);
        cy.get('.tokens-demo__border-box.border-l').should('have.css', 'border-width', tokens.border.l);
    });
})

export {}
