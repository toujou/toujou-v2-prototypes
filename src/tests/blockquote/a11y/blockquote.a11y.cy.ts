/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('blockquote a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blockquote--blockquote');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.blockquote');
    });
})


export {}
