/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('inpge-nav desktop a11y', () => {
    beforeEach(() => {
        cy.viewport('iphone-6')
        cy.visit('/iframe.html?viewMode=story&id=components-inpage-nav--inpage-nav');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.inpage-nav');
        // @ts-ignore
        cy.checkA11yWithWait('.inpage-nav');
    });
})

export {}
