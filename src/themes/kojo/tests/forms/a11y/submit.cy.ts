/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('select input a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--submit');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.button[type="submit"');
        // @ts-ignore
        cy.checkA11yWithWait('.button[type="submit"');
    });
})

export {}
