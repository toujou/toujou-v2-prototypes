/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('blog-plugin: sidebar a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blog-plugin--sidebar');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', async () => {
        cy.get('.blog-sidebar');
        await cy.checkA11y(
            '.blog-sidebar',
            {
                rules: {
                    'color-contrast': { enabled: false }
                }
            }
        );
    });
})


export {}
