/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('blog-plugin: header a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blog-plugin--header');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', async () => {
        cy.get('.blog-header');
        await cy.checkA11y('.blog-header');
    });
})


export {}
