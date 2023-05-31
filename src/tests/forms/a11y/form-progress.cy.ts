/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('form progress a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--form-progress');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.form-progress');
        cy.checkA11y('.form-progress');
    });
})


export {}
