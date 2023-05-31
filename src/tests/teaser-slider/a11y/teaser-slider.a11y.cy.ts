/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('teaser-slider a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-teaser--teaser-slider');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.slider');
        cy.checkA11y('.slider');
    });
})

export {}
