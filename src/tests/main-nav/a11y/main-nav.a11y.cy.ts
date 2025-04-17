/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('main-nav a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-topbar--topbar');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.main-nav');
        cy.checkA11y('.main-nav', {
            rules: {
                'color-contrast': { enabled: false }
            }
        });
    });

    // TODO: Add tests for keyboard navigation
})

export {}