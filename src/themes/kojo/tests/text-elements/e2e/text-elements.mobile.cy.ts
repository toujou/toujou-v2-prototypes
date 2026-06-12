/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('text elements [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-text-elements--text-elements-examples');
    });

    it('p has correct styles', () => {
        cy.get('toujou-text-block:first-child p').should('have.css', 'font-family', tokens.type.fontFamily.text);
        cy.get('toujou-text-block:first-child p').should('have.css', 'font-weight', tokens.type.fontWeight.normal);
        cy.get('toujou-text-block:first-child p').should('have.css', 'line-height', tokens.type.lineHeight.normal);
        cy.get('toujou-text-block:first-child p').should('have.css', 'font-size', tokens.type.size.normal);
        cy.get('toujou-text-block:first-child p').should('have.css', 'color', colors.colorFont);
    });

    it('ul has correct styles', () => {
        cy.get('ul').should('have.css', 'font-family', tokens.type.fontFamily.text);
        cy.get('ul').should('have.css', 'font-weight', tokens.type.fontWeight.normal);
        cy.get('ul').should('have.css', 'line-height', tokens.type.lineHeight.normal);
        cy.get('ul').should('have.css', 'font-size', tokens.type.size.normal);
        cy.get('ul').should('have.css', 'color', colors.colorFont);
        cy.get('ul').should('have.css', 'padding', '0px');
        cy.get('ul').should('have.css', 'margin', `${tokens.spacing.normal} 0px ${tokens.spacing.normal} ${tokens.spacing.ms}`);
    });

    it('nested ul has correct styles', () => {
        cy.get('ul ul').should('have.css', 'font-family', tokens.type.fontFamily.text);
        cy.get('ul ul').should('have.css', 'font-weight', tokens.type.fontWeight.normal);
        cy.get('ul ul').should('have.css', 'line-height', tokens.type.lineHeight.normal);
        cy.get('ul ul').should('have.css', 'font-size', tokens.type.size.normal);
        cy.get('ul ul').should('have.css', 'color', colors.colorFont);
        cy.get('ul ul').should('have.css', 'padding', '0px');
        cy.get('ul ul').should('have.css', 'margin', `0px 0px 0px ${tokens.spacing.l}`);
    });

    it('ul li has correct styles', () => {
        cy.get('ul li').should('have.css', 'font-family', tokens.type.fontFamily.text);
        cy.get('ul li').should('have.css', 'font-weight', tokens.type.fontWeight.normal);
        cy.get('ul li').should('have.css', 'line-height', tokens.type.lineHeight.normal);
        cy.get('ul li').should('have.css', 'font-size', tokens.type.size.normal);
        cy.get('ul li').should('have.css', 'color', colors.colorFont);
    });

    it('ol has correct styles', () => {
        cy.get('ol').should('have.css', 'font-family', tokens.type.fontFamily.text);
        cy.get('ol').should('have.css', 'font-weight', tokens.type.fontWeight.normal);
        cy.get('ol').should('have.css', 'line-height', tokens.type.lineHeight.normal);
        cy.get('ol').should('have.css', 'font-size', tokens.type.size.normal);
        cy.get('ol').should('have.css', 'color', colors.colorFont);
        cy.get('ol').should('have.css', 'padding', '0px');
        cy.get('ol').should('have.css', 'margin', `${tokens.spacing.normal} 0px ${tokens.spacing.normal} ${tokens.spacing.ms}`);
    });

    it('nested ol has correct styles', () => {
        cy.get('ol ol').should('have.css', 'font-family', tokens.type.fontFamily.text);
        cy.get('ol ol').should('have.css', 'font-weight', tokens.type.fontWeight.normal);
        cy.get('ol ol').should('have.css', 'line-height', tokens.type.lineHeight.normal);
        cy.get('ol ol').should('have.css', 'font-size', tokens.type.size.normal);
        cy.get('ol ol').should('have.css', 'color', colors.colorFont);
        cy.get('ol ol').should('have.css', 'padding', '0px');
        cy.get('ol ol').should('have.css', 'margin', `0px 0px 0px ${tokens.spacing.l}`);
    });

    it('ol li has correct styles', () => {
        cy.get('ol li').should('have.css', 'font-family', tokens.type.fontFamily.text);
        cy.get('ol li').should('have.css', 'font-weight', tokens.type.fontWeight.normal);
        cy.get('ol li').should('have.css', 'line-height', tokens.type.lineHeight.normal);
        cy.get('ol li').should('have.css', 'font-size', tokens.type.size.normal);
        cy.get('ol li').should('have.css', 'color', colors.colorFont);
    });

})

export {}
