/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('blog-plugin: tags a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blog-plugin--tags');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.tags-list');
        cy.checkA11y(
            '.tags-list',
            {
                rules: {
                    'color-contrast': { enabled: false }
                }
            }
        );
    });
})


export {}
