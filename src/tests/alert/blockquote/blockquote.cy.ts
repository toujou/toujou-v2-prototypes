/// <reference types="cypress" />

const colors = Cypress.env('colors');

describe('blockquote', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blockquote--blockquote');
    });

    it('has correct class and tag name', () => {
        cy.get('toujou-blockquote').should('have.prop', 'tagName').should('eq', 'TOUJOU-BLOCKQUOTE');
        cy.get('toujou-blockquote').invoke('attr', 'class').should('eq', 'blockquote');
    });

    it('has correct attributes', () => {
        cy.get('toujou-blockquote').invoke('attr', 'role').should('eq', 'figure');
        cy.get('toujou-blockquote').invoke('attr', 'blockquote-direction').should('eq', 'vertical');
        cy.get('toujou-blockquote').invoke('attr', 'blockquote-design').should('eq', 'default');
    });

    it('has correct children', () => {
        cy.get('toujou-blockquote .blockquote__image').should('exist');
        cy.get('toujou-blockquote .blockquote__blockquote').should('exist');
        cy.get('toujou-blockquote .blockquote__text').should('exist');
        cy.get('toujou-blockquote .blockquote__author').should('exist');
    });

    it('has correct styles', () => {
        cy.get('toujou-blockquote').should('have.css', 'background-color', colors.colorBg);
        cy.get('toujou-blockquote').should('have.css', 'display', 'grid');
        cy.get('toujou-blockquote').should('have.css', 'grid-template-columns', '944px');
        cy.get('toujou-blockquote').should('have.css', 'z-index', '1');
        cy.get('toujou-blockquote').should('have.css', 'grid-template-areas', '"blockquoteImage" "blockquoteQuote" "blockquoteAuthor"');

    });

    it('blockquote image has correct styles', () => {
        cy.get('toujou-blockquote .blockquote__image').should('have.css', 'display', 'block');
        cy.get('toujou-blockquote .blockquote__image').should('have.css', 'height', '112px');
        cy.get('toujou-blockquote .blockquote__image').should('have.css', 'width', '112px');
        cy.get('toujou-blockquote .blockquote__image').should('have.css', 'justify-self', 'center');
        cy.get('toujou-blockquote .blockquote__image').should('have.css', 'object-fit', 'cover');
        cy.get('toujou-blockquote .blockquote__image').should('have.css', 'vertical-align', 'middle');
        cy.get('toujou-blockquote .blockquote__image').should('have.css', 'border-radius', '50%');
        cy.get('toujou-blockquote .blockquote__image').should('have.css', 'margin', '0px');
        cy.get('toujou-blockquote .blockquote__image').should('have.css', 'grid-area', 'blockquoteImage / blockquoteImage / blockquoteImage / blockquoteImage');
    });

    it('blockquote quote has correct styles', () => {
        cy.get('toujou-blockquote .blockquote__blockquote').should('have.css', 'position', 'relative');
        cy.get('toujou-blockquote .blockquote__blockquote').should('have.css', 'font-family', 'Mulish, sans-serif');
        cy.get('toujou-blockquote .blockquote__blockquote').should('have.css', 'font-size', '16px');
        cy.get('toujou-blockquote .blockquote__blockquote').should('have.css', 'color', colors.colorFont);
        cy.get('toujou-blockquote .blockquote__blockquote').should('have.css', 'margin', '48px 0px 0px');
        cy.get('toujou-blockquote .blockquote__blockquote').should('have.css', 'line-height', '24px');
        cy.get('toujou-blockquote .blockquote__blockquote').should('have.css', 'grid-area', 'blockquoteQuote / blockquoteQuote / blockquoteQuote / blockquoteQuote');
    });

    it.only('blockquote quote icon has correct styles', () => {
        cy.get('toujou-blockquote .blockquote__blockquote').before('position').should('eq', 'absolute');
        cy.get('toujou-blockquote .blockquote__blockquote').before('top').should('eq', '0px');
        cy.get('toujou-blockquote .blockquote__blockquote').before('left').should('eq', '0px');
        cy.get('toujou-blockquote .blockquote__blockquote').before('display').should('eq', 'block');
        cy.get('toujou-blockquote .blockquote__blockquote').before('height').should('eq', '48px');
        cy.get('toujou-blockquote .blockquote__blockquote').before('width').should('eq', '48px');
        cy.get('toujou-blockquote .blockquote__blockquote').before('transform').should('eq', 'matrix(1, 0, 0, 1, 0, -48)');
        cy.get('toujou-blockquote .blockquote__blockquote').before('background-color').should('eq', colors.colorFontDark);
        cy.get('toujou-blockquote .blockquote__blockquote').before('-webkit-mask-image').should('eq', 'url("http://localhost:6006/assets/icons/icon-blockquote-round.svg")');
        cy.get('toujou-blockquote .blockquote__blockquote').before('-webkit-mask-position').should('eq', '50% 50%');
        cy.get('toujou-blockquote .blockquote__blockquote').before('-webkit-mask-size').should('eq', 'contain');
        cy.get('toujou-blockquote .blockquote__blockquote').before('-webkit-mask-repeat').should('eq', 'no-repeat');

    });

    it('blockquote text has correct styles', () => {
        cy.get('toujou-blockquote .blockquote__text').should('have.css', 'font-size', '16px');
        cy.get('toujou-blockquote .blockquote__text').should('have.css', 'line-height', '24px');
        cy.get('toujou-blockquote .blockquote__text').should('have.css', 'margin', '0px');
        cy.get('toujou-blockquote .blockquote__text').should('have.css', 'color', colors.colorFont);
    });

    it('blockquote author has correct styles', () => {
        cy.get('toujou-blockquote .blockquote__author').should('have.css', 'font-family', 'Mulish, sans-serif');
        cy.get('toujou-blockquote .blockquote__author').should('have.css', 'font-size', '16px');
        cy.get('toujou-blockquote .blockquote__author').should('have.css', 'color', colors.colorFont);
        cy.get('toujou-blockquote .blockquote__author').should('have.css', 'line-height', '24px');
        cy.get('toujou-blockquote .blockquote__author').should('have.css', 'grid-column', 'blockquoteAuthor / blockquoteAuthor');
        cy.get('toujou-blockquote .blockquote__author').should('have.css', 'grid-area', 'blockquoteAuthor / blockquoteAuthor / blockquoteAuthor / blockquoteAuthor');
    });
})

export {}
