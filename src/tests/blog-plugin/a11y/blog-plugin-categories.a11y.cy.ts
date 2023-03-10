/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('blog-plugin: categories a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blog-plugin--categories');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.categories-list');
    });
})


export {}
