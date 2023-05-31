/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('grid a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-media--gallery');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.gallery');
        cy.checkA11y('.gallery');
    });
})

export {}
