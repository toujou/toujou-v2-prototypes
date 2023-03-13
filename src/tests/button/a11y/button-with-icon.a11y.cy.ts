/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('button with icon - a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-button--button&args=hasIcon:true');
        // @ts-ignore
        cy.get('.button').resetRealHover();
        cy.injectAxe();
    });

    beforeEach(() => {
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.button');
    });
})


export {}
