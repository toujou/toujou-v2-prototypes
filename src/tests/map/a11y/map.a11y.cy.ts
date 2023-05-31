/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('map a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-map--map');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.map-contact');
        cy.checkA11y('.map-contact');
    });
})

export {}
