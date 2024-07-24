/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('blog-plugin: footer a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blog-plugin--footer');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.blog-footer');
        cy.checkA11y(
            '.blog-footer',
            {
                rules: {
                    'color-contrast': { enabled: false }
                }
            }
        );
    });
})


export {}
