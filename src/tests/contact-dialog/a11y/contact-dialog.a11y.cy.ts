/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('contact-dialog a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-contact-dialog--contact-dialog');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.button').click();

        // Wait for the .contact-box to be visible
        cy.get('.contact-dialog').should('be.visible');

        cy.checkA11y('.contact-dialog');
    });
})


export {}
