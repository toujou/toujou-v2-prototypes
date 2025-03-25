/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('media-info a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-media--media-grid');
        cy.injectAxe();
    });

    it('has no detectable a11y violations on load', () => {
        cy.get('.media-grid');
        // @ts-ignore
        cy.checkA11yWithWait('.media-grid');
    });

    it('has no detectable a11y violations after opening media info', () => {
        cy.get('.single-media:first .media-info__toggle:first').click();
        // @ts-ignore
        cy.checkA11yWithWait('.media-grid');
    });
});

export {};
