/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('html a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-html--html');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.html-container');
        cy.checkA11y('.html-container');
    });
})

export {}
