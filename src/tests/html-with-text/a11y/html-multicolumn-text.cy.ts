/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('html a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-html-with-text--html-with-text-story-props&args=layout:multicolumn-left');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.html-container');
    });
})

export {}
