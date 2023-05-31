/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('alert a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--date-inputs');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.form');
        cy.checkA11y('.form');
    });
})


export {}
