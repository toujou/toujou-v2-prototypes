/// <reference types="cypress" />
/// <reference types="cypress-real-events" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('product grid', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-skiplinks--skip-links');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct class and tag name', () => {
        cy.get('skippy-links').should('have.prop', 'tagName').should('eq', 'SKIPPY-LINKS');
        cy.get('skippy-links').invoke('attr', 'role').should('eq', 'navigation');
    });

    it('has correct structure', () => {
        cy.get('skippy-links').shadow().children('.skippy-links__link').should('have.length', 3);
    });

    it('has correct styles', () => {
        cy.get('skippy-links').should('have.css', 'background-color', colors.colorError);
        cy.get('skippy-links').should('have.css', 'border', '0px none rgb(0, 0, 0)');
        cy.get('skippy-links').should('have.css', 'font-family', tokens.type.fontFamily.text);
        cy.get('skippy-links').should('have.css', 'font-size', tokens.type.size.normal);
        cy.get('skippy-links').should('have.css', 'min-width', 'fit-content');
        cy.get('skippy-links').should('have.css', 'width', '320px');
        cy.get('skippy-links').should('have.css', 'border-radius', `0px 0px ${tokens.borderRadius.normal}`);
        cy.get('skippy-links').should('have.css', 'font-weight', '800');

        cy.get('skippy-links').shadow().find('.skippy-links__link').should('have.css', 'color', colors.colorBg);
        cy.get('skippy-links').shadow().find('.skippy-links__link').should('have.css', 'font-size', tokens.type.size.normal);
    });

    it('has correct focus styles', () => {
        cy.get('skippy-links').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, 0)');
        cy.get('body').realClick();
        cy.realPress("Tab");
        cy.realPress("Tab");
        cy.realPress("Tab");
        // Focus on first link
        cy.get('skippy-links').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, 80)');
        cy.get('skippy-links').shadow().find('.skippy-links__link:nth-child(2)').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, 0)');
        cy.get('skippy-links').shadow().find('.skippy-links__link:nth-child(3)').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, -80)');
        cy.get('skippy-links').shadow().find('.skippy-links__link:nth-child(4)').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, -80)');

        // Focus on second link
        cy.realPress("Tab");
        cy.get('skippy-links').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, 80)');
        cy.get('skippy-links').shadow().find('.skippy-links__link:nth-child(2)').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, -80)');
        cy.get('skippy-links').shadow().find('.skippy-links__link:nth-child(3)').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, 0)');
        cy.get('skippy-links').shadow().find('.skippy-links__link:nth-child(4)').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, -80)');

        // Focus on third link
        cy.realPress("Tab");
        cy.get('skippy-links').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, 80)');
        cy.get('skippy-links').shadow().find('.skippy-links__link:nth-child(2)').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, -80)');
        cy.get('skippy-links').shadow().find('.skippy-links__link:nth-child(3)').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, -80)');
        cy.get('skippy-links').shadow().find('.skippy-links__link:nth-child(4)').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, 0)');

        // Focus not anymore on skippy links
        cy.realPress("Tab");
        cy.get('skippy-links').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, 0)');
        cy.get('skippy-links').shadow().find('.skippy-links__link:nth-child(2)').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, -80)');
        cy.get('skippy-links').shadow().find('.skippy-links__link:nth-child(3)').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, -80)');
        cy.get('skippy-links').shadow().find('.skippy-links__link:nth-child(4)').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, -80)');
    });
})

export {}
