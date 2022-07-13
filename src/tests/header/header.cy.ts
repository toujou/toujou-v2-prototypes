/// <reference types="cypress" />

const desktopViewportHeight = Cypress.env('desktopViewportHeight');

describe('header', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-header--header');
    });

    it('has correct default attributes', () => {
        cy.get('.header').should('exist');
        cy.get('.header').invoke('prop', 'tagName').should('eq', 'HEADER');
        cy.get('.header').invoke('attr', 'class').should('eq', 'header');
        cy.get('.header').invoke('attr', 'image-height').should('eq', 'default');
    });
})

describe.only('header - image-height', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-header--header');
    });

    it('has correct default height', () => {
        const eightyPercentHeight = desktopViewportHeight / 100 * 80;
        cy.get('.header').should('have.css', 'height', `${eightyPercentHeight}px`);
    });
})

export {}
