/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('button ghost - a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-button--button&args=buttonType:ghost');
        // @ts-ignore
        cy.get('.button').resetRealHover();
        cy.injectAxe();
    });


    it('has no detectable a11y violation on load', () => {
        cy.get('.button');
        cy.checkA11y('.button');
    });
})


export {}
