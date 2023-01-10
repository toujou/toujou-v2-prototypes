/// <reference types="cypress" />

const colors = Cypress.env('colors');

describe('blockquote tag', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blockquote--blockquote-tag');
    });

    it('has correct structure', () => {
        cy.get('blockquote').should('exist');
        cy.get('blockquote + p.blockquote__author').should('exist');
        cy.get('blockquote').before().should('exist');
        cy.get('blockquote').before('-webkit-mask-image').should('eq', 'url("http://localhost:6006/assets/icons/icon-blockquote-round.svg")');
        cy.get('blockquote').should('have.class', '');
    });

    it('blockquote text has correct styles', () => {
        cy.get('blockquote p').should('have.css', 'font-size', '16px');
        cy.get('blockquote p').should('have.css', 'line-height', '24px');
        cy.get('blockquote p').should('have.css', 'margin', '16px 0px 0px');
        cy.get('blockquote p').should('have.css', 'color', colors.colorFont);
    });

    it('blockquote author has correct styles', () => {
        cy.get('blockquote + .blockquote__author').should('have.css', 'font-family', 'Mulish, sans-serif');
        cy.get('blockquote + .blockquote__author').should('have.css', 'font-size', '16px');
        cy.get('blockquote + .blockquote__author').should('have.css', 'color', colors.colorFont);
        cy.get('blockquote + .blockquote__author').should('have.css', 'line-height', '24px');
        cy.get('blockquote + .blockquote__author').should('have.css', 'grid-column', 'blockquoteAuthor / blockquoteAuthor');
        cy.get('blockquote + .blockquote__author').should('have.css', 'grid-area', 'blockquoteAuthor / blockquoteAuthor / blockquoteAuthor / blockquoteAuthor');
    });
})

export {}
