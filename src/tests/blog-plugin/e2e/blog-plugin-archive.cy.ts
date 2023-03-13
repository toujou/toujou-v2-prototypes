/// <reference types="cypress" />
/// <reference types="cypress-real-events" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('blog plugin: archive', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blog-plugin--archive');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct class and tag name', () => {
        cy.get('.blog-archive').should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('has correct structure', () => {
        cy.get('.blog-archive .blog-archive__title').should('exist');
        cy.get('.blog-archive .blog-archive__years').should('exist');
        cy.get('.blog-archive .blog-archive__years').children('.archive-year').should("have.length", 2);

        cy.get('.blog-archive .archive-year:first-child .archive-year__title').should('exist');
        cy.get('.blog-archive .archive-year:first-child .archive-year__list').should('exist');
        cy.get('.blog-archive .archive-year:first-child .archive-year__list').should('have.prop', 'tagName').should('eq', 'UL');
        cy.get('.blog-archive .archive-year:first-child .archive-year__list').children('.archive-year__item').should('have.length', 2);
        cy.get('.blog-archive .archive-year:first-child .archive-year__list .archive-year__link').should('exist');
    });

    it('has correct styles', () => {
        cy.get('.blog-archive').should('have.css', 'width', '960px');
        cy.get('.blog-archive').should('have.css', 'max-width', '960px');
        cy.get('.blog-archive').should('have.css', 'border-radius', tokens.borderRadius.normal);
        cy.get('.blog-archive').should('have.css', 'margin', '32px 464px');

        cy.get('.blog-archive__title').should('have.css', 'font-family', tokens.type.fontFamily.headline);
        cy.get('.blog-archive__title').should('have.css', 'font-size', tokens.type.size.xl);
        cy.get('.blog-archive__title').should('have.css', 'font-weight', '600');
        cy.get('.blog-archive__title').should('have.css', 'line-height', '40px');
        cy.get('.blog-archive__title').should('have.css', 'color', colors.colorPrimary);
        cy.get('.blog-archive__title').should('have.css', 'margin-bottom', '20px');
        cy.get('.blog-archive__title').should('have.css', 'text-decoration', 'none solid rgb(0, 121, 168)');

        cy.get('.archive-year__title').should('have.css', 'font-family', tokens.type.fontFamily.headline);
        cy.get('.archive-year__title').should('have.css', 'font-weight', '600');
        cy.get('.archive-year__title').should('have.css', 'font-size', tokens.type.size.normal);
        cy.get('.archive-year__title').should('have.css', 'color', colors.colorPrimary);
        cy.get('.archive-year__title').should('have.css', 'text-decoration', 'none solid rgb(0, 121, 168)');

        cy.get('.archive-year__list').should('have.css', 'list-style', 'outside none none');
        cy.get('.archive-year__list').should('have.css', 'margin', '0px');
        cy.get('.archive-year__list').should('have.css', 'padding', '0px');

        cy.get('.archive-year__link').should('have.css', 'color', colors.colorPrimary);
        cy.get('.archive-year__link').should('have.css', 'text-decoration', `underline solid ${colors.colorPrimary}`);
    });

    it('has correct hover styles', () => {
        cy.get('.archive-year:first-child .archive-year__item:first-child .archive-year__link').should('have.css', 'color', colors.colorPrimary);
        cy.get('.archive-year__link').realHover();
        cy.get('.archive-year:first-child .archive-year__item:first-child .archive-year__link').should('have.css', 'color', colors.colorPrimaryDark);
        // @ts-ignore
        cy.get('body').resetRealHover();
        cy.get('.archive-year:first-child .archive-year__item:first-child .archive-year__link').should('have.css', 'color', colors.colorPrimary);
    });
})

export {}
