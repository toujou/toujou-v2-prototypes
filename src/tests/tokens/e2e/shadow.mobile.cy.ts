/// <reference types="cypress" />

const tokens = Cypress.env('tokens');

describe('Tokens - shadow [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=tokens-shadow--shadow');
    });

    it('has correct values for the shadow variables', () => {
        cy.get('.tokens-demo__shadow-box.shadow-none').should('have.css', 'box-shadow', 'none');
        cy.get('.tokens-demo__shadow-box.shadow-small').should('have.css', 'box-shadow', tokens.shadow.s);
        cy.get('.tokens-demo__shadow-box.shadow-normal').should('have.css', 'box-shadow', tokens.shadow.normal);
        cy.get('.tokens-demo__shadow-box.shadow-large').should('have.css', 'box-shadow', tokens.shadow.l);
        cy.get('.tokens-demo__shadow-box.shadow-x-large').should('have.css', 'box-shadow', tokens.shadow.xl);
    });
})

export {}
