/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('estimated-reading-time', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-estimatedreadingtime--estimated-reading-time');
    });

    it('has correct class and tag name', () => {
        cy.get('.estimated-reading-time').should('have.prop', 'tagName').should('eq', 'TOUJOU-ESTIMATED-READING-TIME');
        cy.get('.estimated-reading-time').invoke('attr', 'class').should('eq', 'estimated-reading-time');
    });

    it('has correct attributes', () => {
        cy.get('.estimated-reading-time').invoke('attr', 'target-selector').should('eq', 'body');
    });

    it('has correct text content', () => {
        // @ts-ignore
        cy.get('.estimated-reading-time').shouldHaveTrimmedText('Estimated reading time:');
        // @ts-ignore
        cy.get('.estimated-reading-time').shadow().shouldHaveTrimmedText('3 minutes');

    });

    it('has correct styles', () => {
        cy.get('.estimated-reading-time').should('have.css', 'font-family', tokens.type.fontFamily.text);
        cy.get('.estimated-reading-time').should('have.css', 'font-size', tokens.type.size.normal);
        cy.get('.estimated-reading-time').should('have.css', 'color', colors.colorFont);
        cy.get('.estimated-reading-time').should('have.css', 'display', 'flex');
        cy.get('.estimated-reading-time').should('have.css', 'align-items', 'center');
        cy.get('.estimated-reading-time').should('have.css', 'gap', '4.8px');
        cy.get('.estimated-reading-time').should('have.css', 'padding', '0px');
        cy.get('.estimated-reading-time').should('have.css', 'margin', '0px');

        cy.get('.estimated-reading-time .estimated-reading-time__label').should('have.css', 'display', 'flex');
        cy.get('.estimated-reading-time .estimated-reading-time__label').should('have.css', 'align-items', 'center');
        cy.get('.estimated-reading-time .estimated-reading-time__label').should('have.css', 'gap', '4.8px');

        cy.get('.estimated-reading-time .estimated-reading-time__label .icon').should('exist');
        cy.get('.estimated-reading-time .icon').invoke('attr', 'icon-name').should('eq', 'clock-circle');
        cy.get('.estimated-reading-time .icon').invoke('attr', 'icon-size').should('eq', 'ms');
        cy.get('.estimated-reading-time .icon').invoke('attr', 'icon-color').should('eq', 'font');
    });
})

export {}
