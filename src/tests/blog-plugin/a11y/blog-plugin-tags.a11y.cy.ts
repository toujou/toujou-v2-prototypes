/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('blog-plugin: tags a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blog-plugin--tags');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.tags-list');
    });
})


export {}
