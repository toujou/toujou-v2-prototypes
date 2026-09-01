/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('footer a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-footer--footer');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.footer');
        cy.checkA11y('.footer');
    });
})

export {}
