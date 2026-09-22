/// <reference types="cypress" />

const tokens = Cypress.env('tokens');

describe('Tokens - spacing', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=tokens-spacing--spacing');
    });

    it('has correct values for the spacing variables', () => {
        cy.get('.tokens-demo__spacing-square-box.size-xxxxl').should('have.css', 'width', tokens.spacing.xxxxl);
        cy.get('.tokens-demo__spacing-square-box.size-xxxl').should('have.css', 'width', tokens.spacing.xxxl);
        cy.get('.tokens-demo__spacing-square-box.size-xxl').should('have.css', 'width', tokens.spacing.xxl);
        cy.get('.tokens-demo__spacing-square-box.size-xl').should('have.css', 'width', tokens.spacing.xl);
        cy.get('.tokens-demo__spacing-square-box.size-l').should('have.css', 'width', tokens.spacing.l);
        cy.get('.tokens-demo__spacing-square-box.size-m').should('have.css', 'width', tokens.spacing.m);
        cy.get('.tokens-demo__spacing-square-box.size-normal').should('have.css', 'width', tokens.spacing.normal);
        cy.get('.tokens-demo__spacing-square-box.size-s').should('have.css', 'width', tokens.spacing.s);
        cy.get('.tokens-demo__spacing-square-box.size-xs').should('have.css', 'width', tokens.spacing.xs);
        cy.get('.tokens-demo__spacing-square-box.size-xxs').should('have.css', 'width', tokens.spacing.xxs);
        cy.get('.tokens-demo__spacing-square-box.size-1px').should('have.css', 'width', tokens.spacing.onePx);
        cy.get('.tokens-demo__spacing-square-box.size-2px').should('have.css', 'width', tokens.spacing.twoPx);
    });
})

export {}
