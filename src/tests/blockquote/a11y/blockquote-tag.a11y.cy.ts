/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('blockquote tag a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blockquote--blockquote-tag');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('blockquote');
        cy.checkA11y('blockquote');
    });
})


export {}
