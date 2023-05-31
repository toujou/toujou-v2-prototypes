/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('alert a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-eventschedule--event-schedule');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.card-collection');
        cy.checkA11y('.card-collection');
    });
})


export {}
