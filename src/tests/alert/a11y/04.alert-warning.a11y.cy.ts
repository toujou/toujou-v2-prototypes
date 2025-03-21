/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('alert warning a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-alert--alert&args=alertVariant:warning');
        cy.injectAxe();
        cy.get('.alert');
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.alert');
    });
})

export {}
