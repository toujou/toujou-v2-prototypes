/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('spinner a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-spinner--spinner');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.spinner');
    });
})

describe('spinner centered on page a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-spinner--spinner&args=isCenteredOnPage:true');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.spinner');
    });
})

export {}
