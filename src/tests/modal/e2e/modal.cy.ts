/// <reference types="cypress" />

// const colors = Cypress.env('colors');

describe('modal', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-modal--modal');
    });

    it('has correct attributes', () => {
        cy.get('#root p a').click();
        cy.get('toujou-slider').invoke('attr', 'class').should('eq', 'slider');
    });
})

export {}
