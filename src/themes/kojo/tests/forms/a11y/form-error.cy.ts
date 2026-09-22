/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('form error a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--text-inputs&args=state:error');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.form');
        // @ts-ignore
        cy.checkA11yWithWait('.form');
    });
})

export {}
