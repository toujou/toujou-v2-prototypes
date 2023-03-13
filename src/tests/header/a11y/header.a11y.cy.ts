/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('header a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-header--header');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.header');
    });
})

describe('header primary a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-header--header&args=accentColor:primary');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.header');
    });
})

describe('header secondary a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-header--header&args=accentColor:secondary');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.header');
    });
})

describe('header font a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-header--header&args=accentColor:font');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.header');
    });
})

export {}
