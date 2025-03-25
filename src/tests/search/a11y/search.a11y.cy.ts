/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('Toujou search a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-search--search');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.form');
        // @ts-ignore
        cy.checkA11yWithWait('.form');
    });
})

export {}
