/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');
const elSelector = 'main > .item-collection'
const testEventCardSelector = 'main > .item-collection > .item-collection__item:first-child .event-table-card';

describe('event table', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-eventtable--event-table');
    });

    it('has correct class and tag name', () => {
        cy.get(elSelector).should('have.prop', 'tagName').should('eq', 'OL');
        cy.get(elSelector).invoke('attr', 'class').should('eq', 'item-collection');
    });

    // it('has correct attributes', () => {
    //     cy.get('.estimated-reading-time').invoke('attr', 'target-selector').should('eq', 'body');
    // });
    //
    // it('has correct text content', () => {
    //     // @ts-ignore
    //     cy.get('.estimated-reading-time').shouldHaveTrimmedText('Estimated reading time:');
    //     // @ts-ignore
    //     cy.get('.estimated-reading-time').shadow().shouldHaveTrimmedText('3 minutes');
    //
    // });
    //
    // it('has correct styles', () => {
    //     cy.get('.estimated-reading-time').should('have.css', 'font-family', tokens.type.fontFamily.text);
    //     cy.get('.estimated-reading-time').should('have.css', 'font-size', tokens.type.size.normal);
    //     cy.get('.estimated-reading-time').should('have.css', 'color', colors.colorFont);
    //     cy.get('.estimated-reading-time').should('have.css', 'display', 'flex');
    //     cy.get('.estimated-reading-time').should('have.css', 'align-items', 'center');
    //     cy.get('.estimated-reading-time').should('have.css', 'gap', '4.8px');
    //     cy.get('.estimated-reading-time').should('have.css', 'padding', '0px');
    //     cy.get('.estimated-reading-time').should('have.css', 'margin', '0px');
    //
    //     cy.get('.estimated-reading-time .estimated-reading-time__label').should('have.css', 'display', 'flex');
    //     cy.get('.estimated-reading-time .estimated-reading-time__label').should('have.css', 'align-items', 'center');
    //     cy.get('.estimated-reading-time .estimated-reading-time__label').should('have.css', 'gap', '4.8px');
    //
    //     cy.get('.estimated-reading-time .estimated-reading-time__label .icon').should('exist');
    //     cy.get('.estimated-reading-time .icon').invoke('attr', 'icon-name').should('eq', 'clock-circle');
    //     cy.get('.estimated-reading-time .icon').invoke('attr', 'icon-size').should('eq', 'ms');
    //     cy.get('.estimated-reading-time .icon').invoke('attr', 'icon-color').should('eq', 'font');
    // });
})

export {}
