/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('blog-plugin: post-meta a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blog-plugin--post-meta');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.post-meta');
        cy.checkA11y('.post-meta');
    });
})


export {}
