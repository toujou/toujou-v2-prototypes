/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('text-block a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-text-elements--text-block');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.text-block');
        // @ts-ignore
        cy.checkA11yWithWait(
            '.text-block',
            {
                rules: {
                    'heading-order': { enabled: false }
                }
            }
        );
    });
})

export {}
