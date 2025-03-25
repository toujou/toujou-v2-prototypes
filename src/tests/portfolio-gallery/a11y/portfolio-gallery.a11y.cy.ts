/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('PN Nav a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-portfolio-gallery--portfolio-gallery');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.portfolio-gallery');
        // @ts-ignore
        cy.checkA11yWithWait('.portfolio-gallery', {
            rules: {
                'aria-allowed-role': { enabled: false }
            }
        });
    });
})

export {}
