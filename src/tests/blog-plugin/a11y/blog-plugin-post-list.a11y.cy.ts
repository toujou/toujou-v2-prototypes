/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('blog-plugin: post-list a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blog-plugin--posts-list');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.collection-item');
    });
})


export {}
