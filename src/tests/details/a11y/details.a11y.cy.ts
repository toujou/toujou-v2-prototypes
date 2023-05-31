/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('details a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-accordion--details');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.details');
        cy.checkA11y('.details');
    });
})

export {}
