/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('textarea input a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--toggle-inputs');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.form');
    });
})

describe('textarea input checked a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--toggle-inputs');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.toggle-group__label').click();
        cy.checkA11y('.form');
    });
})

describe('textarea input disabled a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--toggle-inputs&args=isDisabled:true');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.form');
    });
})

export {}
