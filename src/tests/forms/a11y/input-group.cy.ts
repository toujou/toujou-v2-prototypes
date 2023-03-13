/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('input group a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--text-inputs');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.form');
    });
})

describe('input group with error a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--text-inputs&args=state:error');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.form');
    });
})

describe('input group with success a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--text-inputs&args=state:success');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.form');
    });
})


export {}
