/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('divider a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-divider--divider');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.divider');
        cy.checkA11y('.divider');
    });
})

describe('divider background a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-divider--divider&args=dividerType:background');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.divider');
        cy.checkA11y('.divider');
    });
})

describe('divider primary a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-divider--divider&args=dividerType:primary');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.divider');
        cy.checkA11y('.divider');
    });
})

describe('divider secondary a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-divider--divider&args=dividerType:secondary');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.divider');
        cy.checkA11y('.divider');
    });
})

describe('divider grey a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-divider--divider&args=dividerType:grey');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.divider');
        cy.checkA11y('.divider');
    });
})

export {}
