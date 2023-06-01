/// <reference types="cypress" />
/// <reference types="cypress-real-events" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('toujou-button border [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-button--button&args=buttonType:border');
        // @ts-ignore
        cy.get('.button').resetRealHover();
    });

    it('has correct attributes', () => {
        cy.get('.button').invoke('attr', 'class').should('eq', 'button');
        cy.get('.button').invoke('attr', 'button-variant').should('eq', 'primary');
        cy.get('.button').invoke('attr', 'button-type').should('eq', 'border');
        cy.get('.button').invoke('attr', 'button-size').should('eq', 'normal');
        cy.get('.button').invoke('prop', 'tagName').should('eq', 'BUTTON');
    });

    it('has correct border primary styles', () => {
        cy.get('.button').should('have.css', 'background-color', colors.colorTransparent);
        cy.get('.button').should('have.css', 'color', colors.colorPrimary);
        cy.get('.button').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorPrimary}`);
        cy.get('.button').realHover();
        cy.get('.button').should('have.css', 'background-color', colors.colorPrimaryO10);
        cy.get('.button').should('have.css', 'color', colors.colorPrimary);
        cy.get('.button').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorPrimary}`);
    });

    it('has correct border primary focus styles', () => {
        cy.get('.button').focus();
        cy.get('.button').should('have.css', 'background-color', colors.colorPrimaryO10);
        cy.get('.button').should('have.css', 'color', colors.colorPrimary);
        cy.get('.button').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorPrimary}`);
        cy.get('.button').should('have.css', 'outline', `${colors.colorPrimary} solid 2px`);
    });

    it('has correct border secondary styles', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-variant', 'secondary');
        });
        cy.get('.button').should('have.css', 'background-color', colors.colorTransparent);
        cy.get('.button').should('have.css', 'color', colors.colorSecondary);
        cy.get('.button').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorSecondary}`);
        cy.get('.button').realHover();
        cy.get('.button').should('have.css', 'background-color', colors.colorSecondaryO10);
        cy.get('.button').should('have.css', 'color', colors.colorSecondary);
        cy.get('.button').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorSecondary}`);
    });

    it('has correct border secondary focus styles', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-variant', 'secondary');
        });
        cy.get('.button').focus();
        cy.get('.button').should('have.css', 'background-color', colors.colorSecondaryO10);
        cy.get('.button').should('have.css', 'color', colors.colorSecondary);
        cy.get('.button').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorSecondary}`);
        cy.get('.button').should('have.css', 'outline', `${colors.colorPrimary} solid 2px`);
    });

    it('has correct border font styles', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-variant', 'font');
        });
        cy.get('.button').should('have.css', 'background-color', colors.colorTransparent);
        cy.get('.button').should('have.css', 'color', colors.colorFont);
        cy.get('.button').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorFont}`);
        cy.get('.button').realHover();
        cy.get('.button').should('have.css', 'background-color', colors.colorFontO10);
        cy.get('.button').should('have.css', 'color', colors.colorFont);
        cy.get('.button').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorFont}`);
    });

    it('has correct border font focus styles', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-variant', 'font');
        });
        cy.get('.button').focus();
        cy.get('.button').should('have.css', 'background-color', colors.colorFontO10);
        cy.get('.button').should('have.css', 'color', colors.colorFont);
        cy.get('.button').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorFont}`);
        cy.get('.button').should('have.css', 'outline', `${colors.colorPrimary} solid 2px`);
    });

    it('has correct border disabled primary border styles', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-variant', 'primary');
            e[0].setAttribute('disabled', '');
        });
        cy.get('.button').should('have.css', 'background-color', colors.colorTransparent);
        cy.get('.button').should('have.css', 'color', colors.colorFontLight);
        cy.get('.button').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorFontLight}`);
    });

    it('has correct border disabled secondary border styles', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-variant', 'secondary');
            e[0].setAttribute('disabled', '');
        });
        cy.get('.button').should('have.css', 'background-color', colors.colorTransparent);
        cy.get('.button').should('have.css', 'color', colors.colorFontLight);
        cy.get('.button').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorFontLight}`);
    });

    it('has correct border disabled font border styles', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-variant', 'font');
            e[0].setAttribute('disabled', '');
        });
        cy.get('.button').should('have.css', 'background-color', colors.colorTransparent);
        cy.get('.button').should('have.css', 'color', colors.colorFontLight);
        cy.get('.button').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorFontLight}`);
    });
})

export {}
