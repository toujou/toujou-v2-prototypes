/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('counter a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-counter--counter');
        cy.injectAxe();
        cy.get('.counter');
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.counter');
    });
})

describe('counter primary a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-counter--counter&args=elementDesign:primary');
        cy.injectAxe();
        cy.get('.counter');
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.counter');
    });
})

describe('counter secondary a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-counter--counter&args=elementDesign:secondary');
        cy.injectAxe();
        cy.get('.counter');
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.counter');
    });
})

describe('inverted warning a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-counter--counter&args=elementDesign:inverted');
        cy.injectAxe();
        cy.get('.counter');
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.counter');
    });
})

export {}
