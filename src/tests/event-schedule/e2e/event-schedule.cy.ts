/// <reference types="cypress" />

const colors = Cypress.env('colors');

const cardSelector = '.collection-item:first-child'

describe('alert', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-eventschedule--event-schedule');
    });

    it('has correct class and tag name', () => {
        cy.get(`${cardSelector}`).should('have.prop', 'tagName').should('eq', 'TOUJOU-COLLECTION-ITEM');
        cy.get(`${cardSelector}`).invoke('attr', 'class').should('eq', 'collection-item');
    });

    it('has correct attributes', () => {
        cy.get(`${cardSelector}`).invoke('attr', 'item-type').should('eq', 'event-schedule');
        cy.get(`${cardSelector}`).invoke('attr', 'element-design').should('eq', 'default');
        cy.get(`${cardSelector}`).invoke('attr', 'item-orientation').should('eq', 'vertical');
        cy.get(`${cardSelector}`).invoke('attr', 'role').should('eq', 'article');
    });

    it('has correct card styles', () => {
        cy.get(`${cardSelector}`).should('have.css', 'position', 'relative');
        cy.get(`${cardSelector}`).should('have.css', 'display', 'flex');
        cy.get(`${cardSelector}`).should('have.css', 'flex-direction', 'column');
        cy.get(`${cardSelector}`).should('have.css', 'width', '324px');
        cy.get(`${cardSelector}`).should('have.css', 'max-width', '100%');
        cy.get(`${cardSelector}`).should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.05) 0px 4px 5px 0px, rgba(0, 0, 0, 0.06) 0px 1px 10px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px -1px');
        cy.get(`${cardSelector}`).should('have.css', 'border-radius', '4px');
        cy.get(`${cardSelector}`).should('have.css', 'overflow', 'hidden');
        cy.get(`${cardSelector}`).should('have.css', 'background-color', colors.colorBg);
        cy.get(`${cardSelector}`).should('have.css', 'z-index', '1');
    });
})

export {}
