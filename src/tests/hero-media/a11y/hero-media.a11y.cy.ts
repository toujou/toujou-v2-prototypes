/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('hero-media a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-media--hero-media');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.hero-media');
        cy.checkA11y('.hero-media');
    });
})

export {}
