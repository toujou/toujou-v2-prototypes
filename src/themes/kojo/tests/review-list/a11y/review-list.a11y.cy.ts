/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('review-list a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-review-list--review-list');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.reviews');
        // @ts-ignore
        cy.checkA11yWithWait('.reviews', {
            rules: {
                'aria-allowed-role': { enabled: false }
            }
        });
    });
})

export {}
