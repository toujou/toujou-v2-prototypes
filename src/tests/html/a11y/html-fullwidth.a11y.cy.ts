/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('html fullwidth a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-html--html&args=isFullwidth:true');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.html-container');
        // @ts-ignore
        cy.checkA11yWithWait('.html-container');
    });
})

export {}
