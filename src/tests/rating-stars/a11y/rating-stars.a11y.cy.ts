/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('rating-stars a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-ratingstars--rating-stars');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.rating-stars');
        cy.checkA11y('.rating-stars');
    });
})

export {}
