/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('estimated reading time a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-estimatedreadingtime--estimated-reading-time');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.estimated-reading-time');
        cy.checkA11y('.estimated-reading-time');
    });
})

export {}
