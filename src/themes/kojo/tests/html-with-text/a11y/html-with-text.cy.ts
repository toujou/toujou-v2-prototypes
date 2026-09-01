/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('html with text a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-html-with-text--html-with-text-story-props');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.html-container');
        // @ts-ignore
        cy.checkA11yWithWait('.html-container');
    });
})

export {}
