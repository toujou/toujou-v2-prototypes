/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('topbutton a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-topbutton--topbutton');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.topbutton');
    });
})


export {}
