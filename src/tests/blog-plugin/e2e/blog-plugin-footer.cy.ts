/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('blog plugin: footer', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blog-plugin--footer');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct structure', () => {
        cy.get('.blog-footer').should('exist');
        cy.get('.blog-footer .blog-footer__content').should('exist');
        cy.get('.blog-footer .blog-footer__content').children('.chips-list').should('have.length', 2);
    });

    it('has correct footer styles', () => {
        cy.get('.blog-footer').should('have.css', 'padding', `${tokens.spacing.xl} 0px`);
        cy.get('.blog-footer').should('have.css', 'background-color', colors.colorPrimary);

        cy.get('.blog-footer .chips-list__title').should('have.css', 'color', colors.colorBg);
    });
});

export {}
