/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('consent widget a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-consent--consent-widget');
        cy.injectAxe();
    });

    it('has no detectable a11y violation when closed', () => {
        cy.get('.consent-widget');
        // @ts-ignore
        cy.checkA11yWithWait('.consent-widget');
    });

    it('has no detectable a11y violation when closed', () => {
        cy.get('.consent-widget');
        cy.get('#consentSettingsButton').click();
        // @ts-ignore
        cy.checkA11yWithWait('.consent-widget');
    });
})


export {}
