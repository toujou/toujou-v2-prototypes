/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('header with video a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-header--header-video');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.header');
        cy.checkA11y('.header');
    });
})

export {}
