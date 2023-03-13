/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('media-placeholder a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-mediaplaceholder--media-placeholder');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.media-placeholder');
    });
})

export {}
