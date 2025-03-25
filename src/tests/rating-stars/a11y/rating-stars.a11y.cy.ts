/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('rating-stars a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-rating-stars--rating-stars');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.rating-stars');
        // @ts-ignore
        cy.checkA11yWithWait('.rating-stars');
    });
})

export {}
