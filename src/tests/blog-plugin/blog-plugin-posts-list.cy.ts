/// <reference types="cypress" />

const colors = Cypress.env('colors');

describe('blog plugin: posts lists', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blog-plugin--posts-list');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct structure', () => {
        cy.get('.post-list-title').should('exist');
        cy.get('.card-collection').should('exist');
        cy.get('.card-collection').children('.card-collection__item').should('have.length', 4);
    });

    it('has correct header styles', () => {
        cy.get('.post-list-title').should('have.css', 'color', colors.colorPrimary);
        cy.get('.post-list-title').should('have.css', 'font-size', '32px');
    });
});

export {}
