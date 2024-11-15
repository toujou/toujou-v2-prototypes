/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('topbar [desktop]', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-topbar--topbar');
    });

    it('it has correct attributes', () => {
        cy.get('.topbar').invoke('attr', 'id').should('eq', 'topbar');
        cy.get('.topbar').invoke('attr', 'class').should('eq', 'topbar');
        cy.get('.topbar').invoke('attr', 'navigation-theme').should('eq', 'light');
        cy.get('.topbar').invoke('attr', 'logo-size').should('eq', 'medium');
    });

    it('it has correct attributes', () => {
        cy.get('.topbar').should('have.css', 'background-color', colors.colorBg);
        cy.get('.topbar').should('have.css', 'box-shadow', tokens.shadow.normal);
        cy.get('.topbar').should('have.css', 'display', 'grid');
        cy.get('.topbar').should('have.css', 'grid-template-areas', '"logo actions language-picker" "logo main-nav main-nav"');
        cy.get('.topbar').should('have.css', 'grid-template-columns', '128px 1176.33px 103.672px');
        cy.get('.topbar').should('have.css', 'height', '80px');
        cy.get('.topbar').should('have.css', 'width', '1905px');
        cy.get('.topbar').should('have.css', 'padding', `0px 232.5px`);
        cy.get('.topbar').should('have.css', 'position', 'fixed');
        cy.get('.topbar').should('have.css', 'top', '0px');
        cy.get('.topbar').should('have.css', 'z-index', '500');
    });
})

export {}
