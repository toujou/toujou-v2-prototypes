/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('alert a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-alert--alert');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.alert');
    });
})


export {}