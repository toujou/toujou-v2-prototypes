/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('image card a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-image-card--image-card');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.image-card-grid');
    });
})

export {}
