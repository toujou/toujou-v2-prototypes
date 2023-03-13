/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('consent configuration a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-consent--consent-configuration');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load when no consents saved', () => {
        cy.checkA11y('.consent-widget');
    });

    it('has no detectable a11y violation on load when consents already saved', () => {
        cy.get('#consentAcceptAllButton').click();
        cy.checkA11y('.consent-widget');
    });
})


export {}
