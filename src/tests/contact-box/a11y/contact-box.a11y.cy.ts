/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('contact-box a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-contact-box--contact-box');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.button').click();
        cy.checkA11y('.contact-box');
    });
})


export {}
