/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('overlay a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-overlay--overlay');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('toujou-overlay');
    });
})

export {}
