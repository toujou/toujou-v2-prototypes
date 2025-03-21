/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('blog-plugin: categories a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blog-plugin--categories');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', async () => { // Make the test async
        cy.get('.categories-list');
        await cy.checkA11y( // Await the check
            '.categories-list',
            {
                rules: {
                    'color-contrast': { enabled: false }
                }
            }
        );
    });
});

export {};
