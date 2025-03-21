/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('blog-plugin: archive a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blog-plugin--archive');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', async () => {
        cy.get('.blog-archive');
        await cy.checkA11y('.blog-archive');
    });
})


export {}
