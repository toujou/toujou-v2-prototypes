/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('blockquote with text a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blockquote--blockquote-with-text');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.grid');
    });
})


export {}
