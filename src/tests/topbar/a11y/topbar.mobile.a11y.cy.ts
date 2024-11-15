/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('topbar a11y [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-topbar--topbar');
        cy.injectAxe();
        cy.get('.topbar');
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.topbar');
    });
})


export {}
