/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('file input a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--other-inputs');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.form');
        cy.checkA11y('.form');
    });
})

describe('file input disabled a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--other-inputs&args=state:disabled');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.form');
        cy.checkA11y('.form');
    });
})

describe('file input success a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--other-inputs&args=state:success');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.form');
        cy.checkA11y(
            '.form',
            {
                rules: {
                    'color-contrast': { enabled: false }
                }
            }
        );    });
})

describe('file input error a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--other-inputs&args=state:error');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.form');
        cy.checkA11y('.form');
    });
})


export {}
