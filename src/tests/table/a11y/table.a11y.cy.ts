/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('table a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-table--table');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.table-container');
    });
})

export {}
