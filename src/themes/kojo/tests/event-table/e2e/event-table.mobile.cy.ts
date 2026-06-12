/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');
const elSelector = 'main > .item-collection'
const testEventCardSelector = 'main > .item-collection > .item-collection__item:first-child .event-table-card';

describe('event table [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-eventtable--event-table');
    });

    it('has correct class and tag name', () => {
        cy.get(elSelector).should('have.prop', 'tagName').should('eq', 'OL');
        cy.get(elSelector).invoke('attr', 'class').should('eq', 'item-collection');
    });

    it.only('has correct styles', () => {
        cy.get(testEventCardSelector).should('have.css', 'display', 'grid');
        cy.get(testEventCardSelector).should('have.css', 'grid-template-areas', '"calendarPages eventChip" "eventContent eventContent"');
        cy.get(testEventCardSelector).should('have.css', 'grid-template-columns', '129.297px 134.703px');
        cy.get(testEventCardSelector).should('have.css', 'padding', `${tokens.spacing.normal} ${tokens.spacing.s}`);
        cy.get(testEventCardSelector).should('have.css', 'margin', '0px');
    });
})

export {}
