/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('required a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--required&args=isRequired:true');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.form');
    });
})

export {}
