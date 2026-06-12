/// <reference types="cypress" />

describe('burger-button [desktop]', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-topbar--topbar');
    });

    it('is not visible', () => {
        cy.get('.burger-button').should('have.css', 'display', 'none');

    });
})


export {}
