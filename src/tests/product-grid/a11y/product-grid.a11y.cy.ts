/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('Product grid a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-product-grid--product-grid');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.image-card-grid');
    });
})

export {}
