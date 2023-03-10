/// <reference types="cypress" />

const colors = Cypress.env('colors');

describe('blog plugin: post meta', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blog-plugin--post-meta');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct structure', () => {
        cy.get('.post-meta').should('exist');
        cy.get('.post-meta').children('.post-meta__group').should('have.length', 5);
        cy.get('.post-meta .post-meta__group:nth-child(1) .post-meta__author-avatar').should('exist');
        cy.get('.post-meta .post-meta__group:nth-child(1) .post-meta__text').should('exist');
        cy.get('.post-meta .post-meta__group:nth-child(2) .chip').should('exist');
        cy.get('.post-meta .post-meta__group:nth-child(3) .chip').should('exist');
        cy.get('.post-meta .post-meta__group:nth-child(4) .icon').should('exist');
        cy.get('.post-meta .post-meta__group:nth-child(4) .post-meta__text').should('exist');
        cy.get('.post-meta .post-meta__group:nth-child(5) .icon').should('exist');
        cy.get('.post-meta .post-meta__group:nth-child(5) .post-meta__text').should('exist');
    });

    it('has correct header styles', () => {
        cy.get('.post-meta').should('have.css', 'background-color', colors.colorBlackO05);
        cy.get('.post-meta').should('have.css', 'padding', '24px');
        cy.get('.post-meta').should('have.css', 'width', '960px');
        cy.get('.post-meta').should('have.css', 'max-width', '960px');
        cy.get('.post-meta').should('have.css', 'border-radius', '4px');
        cy.get('.post-meta').should('have.css', 'margin', '32px 464px');
        cy.get('.post-meta').should('have.css', 'display', 'flex');
        cy.get('.post-meta').should('have.css', 'flex-direction', 'row');
        cy.get('.post-meta').should('have.css', 'align-items', 'center');
        cy.get('.post-meta').should('have.css', 'justify-content', 'flex-start');
        cy.get('.post-meta').should('have.css', 'flex-wrap', 'wrap');
        cy.get('.post-meta').should('have.css', 'gap', '16px 32px');

        cy.get('.post-meta .post-meta__group:nth-child(1)').should('have.css', 'display', 'flex');
        cy.get('.post-meta .post-meta__group:nth-child(1)').should('have.css', 'flex-direction', 'row');
        cy.get('.post-meta .post-meta__group:nth-child(1)').should('have.css', 'align-items', 'center');
        cy.get('.post-meta .post-meta__group:nth-child(1)').should('have.css', 'justify-content', 'flex-start');
        cy.get('.post-meta .post-meta__group:nth-child(1)').should('have.css', 'gap', '8px');
        cy.get('.post-meta .post-meta__group:nth-child(1)').should('have.css', 'text-decoration', 'none solid rgb(0, 0, 0)');

        cy.get('.post-meta .post-meta__group:nth-child(1) .post-meta__author-avatar').should('have.css', 'height', '48px');
        cy.get('.post-meta .post-meta__group:nth-child(1) .post-meta__author-avatar').should('have.css', 'width', '48px');
        cy.get('.post-meta .post-meta__group:nth-child(1) .post-meta__author-avatar').should('have.css', 'border-radius', '50%');
        cy.get('.post-meta .post-meta__group:nth-child(1) .post-meta__author-avatar').should('have.css', 'object-fit', 'cover');

        cy.get('.post-meta .post-meta__group:nth-child(1) .post-meta__text').should('have.css', 'margin', '0px');
        cy.get('.post-meta .post-meta__group:nth-child(1) .post-meta__text').should('have.css', 'font-family', 'Mulish, sans-serif');
        cy.get('.post-meta .post-meta__group:nth-child(1) .post-meta__text').should('have.css', 'font-size', '16px');
        cy.get('.post-meta .post-meta__group:nth-child(1) .post-meta__text').should('have.css', 'color', colors.colorFont);

        cy.get('.post-meta .post-meta__group:nth-child(4) .icon').should('have.css', 'background-color', colors.colorFont);
        cy.get('.post-meta .post-meta__group:nth-child(4) .icon').should('have.css', '-webkit-mask-image', 'url("http://localhost:6006/assets/icons/icon-article.svg")');

        cy.get('.post-meta .post-meta__group:nth-child(5) .icon').should('have.css', 'background-color', colors.colorFont);
        cy.get('.post-meta .post-meta__group:nth-child(5) .icon').should('have.css', '-webkit-mask-image', 'url("http://localhost:6006/assets/icons/icon-calendar-lines.svg")');
    });
});

export {}
