/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('html a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=tests-type-tests--single-headlines');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('h1');
        cy.checkA11y('h2');
        cy.checkA11y('h3');
        cy.checkA11y('h4');
        cy.checkA11y('h5');
    });
})

export {}
