/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('image card a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-image-card--image-card');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.image-card-grid');
        // @ts-ignore
        cy.checkA11yWithWait('.image-card-grid');
    });
})

export {}
