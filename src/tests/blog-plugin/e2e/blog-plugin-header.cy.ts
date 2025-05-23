/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('blog plugin: header', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blog-plugin--header');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct structure', () => {
        cy.get('.header.blog-header').should('exist');
        cy.get('.header.blog-header .header__image').should('exist');
        cy.get('.header.blog-header .blog-header__content').should('exist');
        cy.get('.header.blog-header .blog-header__content-title').should('exist');
    });

    it('has correct header styles', () => {
        cy.get('.blog-header').should('have.css', 'position', 'relative');
        cy.get('.blog-header').should('have.css', 'height', '864px');
        cy.get('.blog-header').should('have.css', 'width', '1920px');
        cy.get('.blog-header').should('have.css', 'z-index', tokens.zIndex.content);

        cy.get('.blog-header .header__image').should('have.css', 'height', '864px');
        cy.get('.blog-header .header__image').should('have.css', 'width', '1920px');
        cy.get('.blog-header .header__image').should('have.css', 'position', 'absolute');
        cy.get('.blog-header .header__image').should('have.css', 'top', '0px');
        cy.get('.blog-header .header__image').should('have.css', 'left', '0px');
        cy.get('.blog-header .header__image').should('have.css', 'object-fit', 'cover');

        cy.get('.blog-header .blog-header__content').should('have.css', 'position', 'absolute');
        cy.get('.blog-header .blog-header__content').should('have.css', 'top', '432px');
        cy.get('.blog-header .blog-header__content').should('have.css', 'left', '960px');
        cy.get('.blog-header .blog-header__content').should('have.css', 'transform', 'matrix(1, 0, 0, 1, -944, -43)');
        cy.get('.blog-header .blog-header__content').should('have.css', 'width', '1888px');
        cy.get('.blog-header .blog-header__content').should('have.css', 'max-width', 'calc(100% - 32px)');
        cy.get('.blog-header .blog-header__content').should('have.css', 'display', 'flex');
        cy.get('.blog-header .blog-header__content').should('have.css', 'flex-direction', 'column');
        cy.get('.blog-header .blog-header__content').should('have.css', 'align-items', 'center');
        cy.get('.blog-header .blog-header__content').should('have.css', 'justify-content', 'center');

        cy.get('.blog-header .blog-header__content-title').should('have.css', 'padding', `${tokens.spacing.normal}`);
        cy.get('.blog-header .blog-header__content-title').should('have.css', 'background-color', colors.colorBg);
        cy.get('.blog-header .blog-header__content-title').should('have.css', 'color', colors.colorPrimary);
        cy.get('.blog-header .blog-header__content-title').should('have.css', 'border-radius', tokens.borderRadius.normal);
        cy.get('.blog-header .blog-header__content-title').should('have.css', 'width', '489.25px');
        cy.get('.blog-header .blog-header__content-title').should('have.css', 'text-align', 'center');
    });
});

export {}
