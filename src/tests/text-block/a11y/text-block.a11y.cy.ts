/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('text-block a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=tests-text-blocks--text-blocks');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.text-block');
        cy.checkA11y('.text-block');
    });
})

export {}
