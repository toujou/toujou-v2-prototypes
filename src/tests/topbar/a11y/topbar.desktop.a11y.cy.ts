/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('topbar a11y [desktop]', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-topbar--topbar');
        cy.injectAxe();
        cy.get('.topbar');
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.topbar');
    });
})


export {}
