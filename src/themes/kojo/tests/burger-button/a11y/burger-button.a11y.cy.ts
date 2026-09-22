/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('burger-button a11y', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-topbar--topbar');
        cy.injectAxe();
        cy.get('.burger-button');
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.burger-button');
    });
})


export {}
