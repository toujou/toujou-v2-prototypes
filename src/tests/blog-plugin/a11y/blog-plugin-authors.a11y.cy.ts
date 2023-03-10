/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('blog-plugin: authors a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blog-plugin--authors');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.post-author:first-child');
    });
})


export {}
