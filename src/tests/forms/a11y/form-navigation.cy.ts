/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('form navigation a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--form-navigation');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.form');
        // @ts-ignore
        cy.checkA11yWithWait('.form');
    });
})


export {}
