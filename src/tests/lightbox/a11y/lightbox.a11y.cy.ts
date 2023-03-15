/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('grid a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-lightbox--lightbox');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.media-grid[lightbox-parent-id="1"] .single-media:first-child .lightbox-item').click();
        cy.wait(10);
        cy.checkA11y('.pswp');
    });
})

export {}
