/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('modal a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-modal--modal');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('#root p a').click();
        cy.checkA11y('toujou-modal');
    });
})

export {}
