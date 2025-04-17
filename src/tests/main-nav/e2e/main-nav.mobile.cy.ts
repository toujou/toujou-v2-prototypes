/// <reference types="cypress" />
/// <reference types="cypress-real-events" />

const tokens = Cypress.env('tokens');

describe('main-nav [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-topbar--topbar');
    });

    // TODO: Add additional tests for mobile behavior
});

export {}