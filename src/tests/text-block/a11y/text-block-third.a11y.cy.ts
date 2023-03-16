/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('text-block a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-text-elements--text-block-third');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('#root');
    });
})

export {}
