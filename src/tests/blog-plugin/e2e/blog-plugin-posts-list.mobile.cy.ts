/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('blog plugin: posts lists [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
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
        cy.get('.post-list-title').should('have.css', 'font-size', tokens.type.size.xl);
    });
});

export {}
