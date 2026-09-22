/// <reference types="cypress" />
/// <reference types="cypress-axe" />

const elSelector = 'main > .item-collection:first-child .event-table-card'

describe('event table a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-eventtable--event-table');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get(elSelector);
        cy.checkA11y(elSelector);
    });
})

export {}
