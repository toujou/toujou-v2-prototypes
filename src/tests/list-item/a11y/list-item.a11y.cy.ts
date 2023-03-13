/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('list-item a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-collections--list-item-default');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.item-collection');
    });
})

export {}
