/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('contact-box a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-contact-dialog--contact-dialog');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.button').click();

        // Wait for the .contact-box to be visible
        cy.get('.contact-box').should('be.visible');

        cy.checkA11y('.contact-box');
    });
})


export {}
