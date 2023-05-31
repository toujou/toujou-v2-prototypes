/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('review-list a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-reviewlist--review-list');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.reviews');
        cy.checkA11y('.reviews');
    });
})

export {}
