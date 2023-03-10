/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('event table a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-eventtable--event-table');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.item-collection');
    });
})


export {}
