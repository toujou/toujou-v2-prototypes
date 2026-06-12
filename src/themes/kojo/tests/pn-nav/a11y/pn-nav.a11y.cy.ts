/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('PN Nav a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-p-n-nav--pn-nav');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.pn-nav');
        // @ts-ignore
        cy.checkA11yWithWait(
            '.pn-nav',
            {
                rules: {
                    'color-contrast': { enabled: false }
                }
            }
        );
    });
})

export {}
