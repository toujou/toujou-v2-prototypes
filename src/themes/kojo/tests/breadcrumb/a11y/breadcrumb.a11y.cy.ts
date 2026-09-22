/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('breadcrumb a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-breadcrumb--breadcrumb');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.breadcrumb');
        cy.checkA11y('.breadcrumb');
    });
})


export {}
