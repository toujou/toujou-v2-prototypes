/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('textarea input a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--textarea-inputs');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.form');
    });
})

describe('textarea input disabled a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--textarea-inputs&args=state:disabled');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.form');
    });
})

describe('textarea input success a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--textarea-inputs&args=state:success');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.form');
    });
})

describe('textarea input error a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--textarea-inputs&args=state:error');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.form');
    });
})

export {}
