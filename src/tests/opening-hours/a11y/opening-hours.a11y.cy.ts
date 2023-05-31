/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('opening-hours a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=pages-organization--organization-no-content');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.opening-hours');
        cy.checkA11y('.opening-hours');
    });
})

export {}
