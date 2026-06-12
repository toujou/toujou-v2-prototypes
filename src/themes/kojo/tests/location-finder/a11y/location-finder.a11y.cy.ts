/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('location-finder a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-locationfinder--location-finder');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.location-finder');
        // @ts-ignore
        cy.checkA11yWithWait('.location-finder');
    });
})

export {}
