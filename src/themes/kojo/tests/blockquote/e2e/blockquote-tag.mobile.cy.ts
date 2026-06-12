/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('blockquote tag [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-blockquote--blockquote-tag');
    });

    it('has correct structure', () => {
        cy.get('blockquote').should('exist');
        cy.get('blockquote + p.blockquote__author').should('exist');
        // @ts-ignore
        cy.get('blockquote').before().should('exist');
        // @ts-ignore
        cy.get('blockquote').before('-webkit-mask-image').should('eq', 'url("http://localhost:6006/assets/icons/icon-blockquote-round.svg")');
        cy.get('blockquote').should('have.class', '');
    });

    it('blockquote text has correct styles', () => {
        cy.get('blockquote p').should('have.css', 'font-size', tokens.type.size.normal);
        cy.get('blockquote p').should('have.css', 'line-height', tokens.type.lineHeight.normal);
        cy.get('blockquote p').should('have.css', 'margin', `${tokens.spacing.normal} 0px 0px`);
        cy.get('blockquote p').should('have.css', 'color', colors.colorFont);
    });

    it('blockquote author has correct styles', () => {
        cy.get('blockquote + .blockquote__author').should('have.css', 'font-family', tokens.type.fontFamily.text);
        cy.get('blockquote + .blockquote__author').should('have.css', 'font-size', tokens.type.size.normal);
        cy.get('blockquote + .blockquote__author').should('have.css', 'color', colors.colorFont);
        cy.get('blockquote + .blockquote__author').should('have.css', 'line-height', tokens.type.lineHeight.normal);
        cy.get('blockquote + .blockquote__author').should('have.css', 'grid-column', 'blockquoteAuthor');
        cy.get('blockquote + .blockquote__author').should('have.css', 'grid-area', 'blockquoteAuthor');
    });
})

export {}
