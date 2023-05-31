/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('alert a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-alert--alert');
        cy.injectAxe();
        cy.get('.alert');
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.alert');
    });
})

describe('alert primary a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-alert--alert');
        cy.injectAxe();
        cy.get('.alert');
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.alert');
    });
})

describe('alert secondary a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-alert--alert&args=alertVariant:secondary');
        cy.injectAxe();
        cy.get('.alert');
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.alert');
    });
})

describe('alert warning a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-alert--alert&args=alertVariant:warning');
        cy.injectAxe();
        cy.get('.alert');
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.alert');
    });
})

describe('alert error a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-alert--alert&args=alertVariant:error');
        cy.injectAxe();
        cy.get('.alert');
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.alert');
    });
})

describe('alert success a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-alert--alert&args=alertVariant:success');
        cy.injectAxe();
        cy.get('.alert');
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.alert');
    });
})

describe('alert info a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-alert--alert&args=alertVariant:info');
        cy.injectAxe();
        cy.get('.alert');
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.alert');
    });
})


export {}
