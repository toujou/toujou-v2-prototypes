/// <reference types="cypress" />

describe('iframe resizer', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-iframeresizer--iframe-resizer');
    });

    it('has correct class and tag name', () => {
        cy.get('toujou-iframe-resizer').should('have.prop', 'tagName').should('eq', 'TOUJOU-IFRAME-RESIZER');
    });

    it('has correct styles on load', () => {
        cy.wait(4000);

        cy.get('toujou-iframe-resizer').should('have.css', 'display', 'inline');
        cy.get('toujou-iframe-resizer').should('have.css', 'width', '328px');
        cy.get('toujou-iframe-resizer').should('have.css', 'height', '4650px');
    });
})

export {}
