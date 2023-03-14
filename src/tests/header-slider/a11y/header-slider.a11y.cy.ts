/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('header slider a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-header--header-slider');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.header', {
            rules: {
                'aria-allowed-role': { enabled: false }
            }
        });
    });
})

export {}
