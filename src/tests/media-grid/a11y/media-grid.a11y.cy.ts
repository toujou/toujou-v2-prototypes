/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('hero-grid a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-media--media-grid');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.media-grid');
        cy.checkA11y('.media-grid');
    });
})

export {}
