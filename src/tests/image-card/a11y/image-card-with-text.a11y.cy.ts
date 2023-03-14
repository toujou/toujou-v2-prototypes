/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('image card with text a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-image-card--image-card-with-text');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.grid', {
            rules: {
                'heading-order': { enabled: false }
            }
        });
    });
})

export {}
