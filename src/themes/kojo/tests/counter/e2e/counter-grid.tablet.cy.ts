/// <reference types="cypress" />

const tokens = Cypress.env('tokens');

describe('counter-grid', () => {
    beforeEach(() => {
        cy.viewport('ipad-2')
        cy.visit('/iframe.html?viewMode=story&id=components-counter--counter');
    });

    it('has correct class and tag name', () => {
        cy.get('.counter-grid').should('have.prop', 'tagName').should('eq', 'UL');
        cy.get('.counter-grid').invoke('attr', 'class').should('eq', 'counter-grid');
    });

    it('has correct attributes', () => {
        cy.get('.counter-grid').invoke('attr', 'number-of-items').should('eq', '1');
    });

    it('has correct  styles', () => {
        cy.get('.counter-grid').should('have.css', 'display', 'flex');
        cy.get('.counter-grid').should('have.css', 'flex-flow', 'row wrap');
        cy.get('.counter-grid').should('have.css', 'grid-gap', tokens.spacing.l);
        cy.get('.counter-grid').should('have.css', 'justify-content', 'center');
        cy.get('.counter-grid').should('have.css', 'align-items', 'flex-start');
        cy.get('.counter-grid').should('have.css', 'margin', `${tokens.spacing.l} ${tokens.spacing.normal} 0px`);
        cy.get('.counter-grid').should('have.css', 'width', `704px`);
    });
})

describe('counter-grid - 1 item', () => {
    beforeEach(() => {
        cy.viewport('ipad-2')
        cy.visit('/iframe.html?viewMode=story&id=components-counter--counter');
    });

    it('has correct number of children', () => {
        cy.get('.counter-grid').children('.counter-grid__item').should('have.length', 1);
    });

    it('has correct  styles', () => {
        cy.get('.counter-grid .counter-grid__item').should('have.css', 'width', `336px`);
    });
})

describe('counter-grid - 2 item', () => {
    beforeEach(() => {
        cy.viewport('ipad-2')
        cy.visit('/iframe.html?viewMode=story&id=components-counter--counter&args=numberOfItems:2');
    });

    it('has correct number of children', () => {
        cy.get('.counter-grid').children('.counter-grid__item').should('have.length', 2);
    });

    it('has correct  styles', () => {
        cy.get('.counter-grid .counter-grid__item').should('have.css', 'width', `336px`);
    });
})

describe('counter-grid - 3 item', () => {
    beforeEach(() => {
        cy.viewport('ipad-2')
        cy.visit('/iframe.html?viewMode=story&id=components-counter--counter&args=numberOfItems:3');
    });

    it('has correct number of children', () => {
        cy.get('.counter-grid').children('.counter-grid__item').should('have.length', 3);
    });

    it('has correct  styles', () => {
        cy.get('.counter-grid .counter-grid__item').should('have.css', 'width', `336px`);
    });
})

describe('counter-grid - 4 item', () => {
    beforeEach(() => {
        cy.viewport('ipad-2')
        cy.visit('/iframe.html?viewMode=story&id=components-counter--counter&args=numberOfItems:4');
    });

    it('has correct number of children', () => {
        cy.get('.counter-grid').children('.counter-grid__item').should('have.length', 4);
    });

    it('has correct  styles', () => {
        cy.get('.counter-grid .counter-grid__item').should('have.css', 'width', `336px`);
    });
})

export {}
