/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('grid a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-grid--grid');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.grid', {
            rules: {
                'color-contrast': { enabled: false }
            }
        });
    });
})

export {}
