/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('Blockquote tag accessibility tests', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blockquote--toujou-blockquote-grid');
        cy.injectAxe();
        cy.get('blockquote').should('exist'); // Ensure the element exists before running aXe
    });

    it('has no detectable a11y violations on load', () => {
        cy.wait(100);
        // @ts-ignore
        cy.checkA11yWithWait('blockquote');
    });
});

export {};
