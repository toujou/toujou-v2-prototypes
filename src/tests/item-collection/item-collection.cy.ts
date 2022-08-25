/// <reference types="cypress" />

const colorBg = Cypress.env('colorBg');
const colorFont = Cypress.env('colorFont');
const colorFontDark = Cypress.env('colorFontDark');
const colorPrimary = Cypress.env('colorPrimary');
const colorPrimaryDark = Cypress.env('colorPrimaryDark');
const colorPrimaryLight = Cypress.env('colorPrimaryLight');
const colorError = Cypress.env('colorError');

describe('item collection', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-collections--list-item-default');
    });

    it('has correct structure', () => {
        cy.get('.item-collection').invoke('prop', 'tagName').should('eq', 'OL');
        cy.get('.item-collection').children('.item-collection__item').should('have.length', 4);
    });

    it.only('has correct styles', () => {
        cy.get('.item-collection').should('have.css', 'display', 'flex');
        cy.get('.item-collection').should('have.css', 'flex-wrap', 'wrap');
        cy.get('.item-collection').should('have.css', 'align-items', 'center');
        cy.get('.item-collection').should('have.css', 'justify-content', 'center');
        cy.get('.item-collection').should('have.css', 'gap', '16px');
        cy.get('.item-collection').should('have.css', 'margin-top', '0px');
        cy.get('.item-collection').should('have.css', 'margin-bottom', '0px');
        cy.get('.item-collection').should('have.css', 'list-style', 'outside none none');
        cy.get('.item-collection').should('have.css', 'padding', '0px');
        cy.get('.item-collection').should('have.css', 'z-index', '1');
    });
});

export {}
