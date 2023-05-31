/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('code block a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-code-block--code-block');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.code-block');
        cy.checkA11y('.code-block');
    });
})


export {}
