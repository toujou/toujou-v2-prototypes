/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('headlines a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=tests-type-tests--single-headlines');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('h1');
        cy.checkA11y('h1');
        cy.get('h2');
        cy.checkA11y('h2');
        cy.get('h3');
        cy.checkA11y('h3');
        cy.get('h4');
        cy.checkA11y('h4');
        cy.get('h5');
        cy.checkA11y('h5');
    });
})

export {}
