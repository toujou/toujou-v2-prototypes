/// <reference types="cypress" />

const tokens = Cypress.env('tokens');

describe('Tokens - border radius [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=tokens-borderradius--border-radius');
    });

    it('has correct values for the border-radius variables', () => {
        cy.get('.tokens-demo__border-radius-box.border-radius-xxxxl').should('have.css', 'border-radius', tokens.borderRadius.xxxxl);
        cy.get('.tokens-demo__border-radius-box.border-radius-xxxl').should('have.css', 'border-radius', tokens.borderRadius.xxxl);
        cy.get('.tokens-demo__border-radius-box.border-radius-xxl').should('have.css', 'border-radius', tokens.borderRadius.xxl);
        cy.get('.tokens-demo__border-radius-box.border-radius-xl').should('have.css', 'border-radius', tokens.borderRadius.xl);
        cy.get('.tokens-demo__border-radius-box.border-radius-l').should('have.css', 'border-radius', tokens.borderRadius.l);
        cy.get('.tokens-demo__border-radius-box.border-radius-m').should('have.css', 'border-radius', tokens.borderRadius.m);
        cy.get('.tokens-demo__border-radius-box.border-radius-normal').should('have.css', 'border-radius', tokens.borderRadius.normal);
        cy.get('.tokens-demo__border-radius-box.border-radius-s').should('have.css', 'border-radius', tokens.borderRadius.s);
        cy.get('.tokens-demo__border-radius-box.border-radius-xs').should('have.css', 'border-radius', tokens.borderRadius.xs);
        cy.get('.tokens-demo__border-radius-box.border-radius-circle').should('have.css', 'border-radius', tokens.borderRadius.circle);
        cy.get('.tokens-demo__border-radius-box.border-radius-0').should('have.css', 'border-radius', tokens.borderRadius.zero);
    });
})

export {}
