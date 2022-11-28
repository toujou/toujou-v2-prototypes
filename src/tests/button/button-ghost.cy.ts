/// <reference types="cypress" />
/// <reference types="cypress-real-events" />

const colors = Cypress.env('colors');

describe('toujou-button ghost', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-button--button&args=buttonType:ghost');
        // @ts-ignore
        cy.get('.button').resetRealHover();
    });

    it('has correct ghost attributes', () => {
        cy.get('.button').invoke('attr', 'class').should('eq', 'button');
        cy.get('.button').invoke('attr', 'button-variant').should('eq', 'primary');
        cy.get('.button').invoke('attr', 'button-type').should('eq', 'ghost');
        cy.get('.button').invoke('attr', 'button-size').should('eq', 'normal');
        cy.get('.button').invoke('prop', 'tagName').should('eq', 'BUTTON');
    });

    it('has correct ghost primary styles', () => {
        cy.get('.button').should('have.css', 'background-color', colors.colorTransparent);
        cy.get('.button').should('have.css', 'color', colors.colorPrimary);
        cy.get('.button').should('have.css', 'border', `1px solid ${colors.colorTransparent}`);
        cy.get('.button').realHover();
        cy.get('.button').should('have.css', 'background-color', colors.colorPrimaryO10);
        cy.get('.button').should('have.css', 'color', colors.colorPrimary);
        cy.get('.button').should('have.css', 'border', `1px solid ${colors.colorTransparent}`);
    });

    it('has correct ghost primary focus styles', () => {
        cy.get('.button').focus();
        cy.get('.button').should('have.css', 'background-color', colors.colorPrimaryO10);
        cy.get('.button').should('have.css', 'color', colors.colorPrimary);
        cy.get('.button').should('have.css', 'border', `1px solid ${colors.colorTransparent}`);
        cy.get('.button').should('have.css', 'outline', `${colors.colorPrimary} solid 2px`);
    });

    it('has correct ghost secondary styles', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-variant', 'secondary');
        });
        cy.get('.button').should('have.css', 'background-color', colors.colorTransparent);
        cy.get('.button').should('have.css', 'color', colors.colorSecondary);
        cy.get('.button').should('have.css', 'border', `1px solid ${colors.colorTransparent}`);
        cy.get('.button').realHover();
        cy.get('.button').should('have.css', 'background-color', colors.colorSecondaryO10);
        cy.get('.button').should('have.css', 'color', colors.colorSecondary);
        cy.get('.button').should('have.css', 'border', `1px solid ${colors.colorTransparent}`);
    });

    it('has correct ghost secondary focus styles', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-variant', 'secondary');
        });
        cy.get('.button').focus();
        cy.get('.button').should('have.css', 'background-color', colors.colorSecondaryO10);
        cy.get('.button').should('have.css', 'color', colors.colorSecondary);
        cy.get('.button').should('have.css', 'border', `1px solid ${colors.colorTransparent}`);
        cy.get('.button').should('have.css', 'outline', `${colors.colorPrimary} solid 2px`);
    });

    it('has correct ghost font styles', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-variant', 'font');
        });
        cy.get('.button').should('have.css', 'background-color', colors.colorTransparent);
        cy.get('.button').should('have.css', 'color', colors.colorFont);
        cy.get('.button').should('have.css', 'border', `1px solid ${colors.colorTransparent}`);
        cy.get('.button').realHover();
        cy.get('.button').should('have.css', 'background-color', colors.colorFontO10);
        cy.get('.button').should('have.css', 'color', colors.colorFont);
        cy.get('.button').should('have.css', 'border', `1px solid ${colors.colorTransparent}`);
    });

    it('has correct ghost font focus styles', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-variant', 'font');
        });
        cy.get('.button').focus();
        cy.get('.button').should('have.css', 'background-color', colors.colorFontO10);
        cy.get('.button').should('have.css', 'color', colors.colorFont);
        cy.get('.button').should('have.css', 'border', `1px solid ${colors.colorTransparent}`);
        cy.get('.button').should('have.css', 'outline', `${colors.colorPrimary} solid 2px`);
    });

    it('has correct ghost disabled primary ghost styles', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-variant', 'primary');
            e[0].setAttribute('disabled', '');
        });
        cy.get('.button').should('have.css', 'background-color', colors.colorTransparent);
        cy.get('.button').should('have.css', 'color', colors.colorFontLight);
        cy.get('.button').should('have.css', 'border', `1px solid ${colors.colorTransparent}`);
    });

    it('has correct ghost disabled secondary ghost styles', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-variant', 'secondary');
            e[0].setAttribute('disabled', '');
        });
        cy.get('.button').should('have.css', 'background-color', colors.colorTransparent);
        cy.get('.button').should('have.css', 'color', colors.colorFontLight);
        cy.get('.button').should('have.css', 'border', `1px solid ${colors.colorTransparent}`);
    });

    it('has correct ghost disabled font ghost styles', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-variant', 'font');
            e[0].setAttribute('disabled', '');
        });
        cy.get('.button').should('have.css', 'background-color', colors.colorTransparent);
        cy.get('.button').should('have.css', 'color', colors.colorFontLight);
        cy.get('.button').should('have.css', 'border', `1px solid ${colors.colorTransparent}`);
    });
});

export {}
