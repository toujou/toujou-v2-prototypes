/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('select input a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--submit');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.button[type="submit"');
    });
})

export {}
