/// <reference types="cypress" />
/// <reference types="cypress-axe" />
/// <reference types="cypress-real-events" />

describe('Skip links a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-skiplinks--skip-links');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('body').realClick();
        cy.realPress("Tab");
        cy.realPress("Tab");
        cy.realPress("Tab");
        cy.wait(1000);
        cy.checkA11y('skippy-links');
    });
})

export {}
