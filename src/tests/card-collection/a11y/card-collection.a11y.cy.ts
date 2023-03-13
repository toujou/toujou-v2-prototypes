/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('button - a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-collections');
        cy.injectAxe();
    });

    beforeEach(() => {
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.card-collection');
    });
})


export {}
