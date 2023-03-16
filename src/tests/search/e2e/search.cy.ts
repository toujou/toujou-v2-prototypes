/// <reference types="cypress" />
/// <reference types="cypress-real-events" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('Toujou search grid', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-search--search');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct class and tag name', () => {
        cy.get('.search').should('have.prop', 'tagName').should('eq', 'TOUJOU-SEARCH');
    });

    it('has correct structure', () => {
        cy.get('.search').should('exist');
        cy.get('.search .input.input--search').should('exist');
        cy.get('.search .button--search').should('exist');
        cy.get('.search .button--search .search__button-text').should('exist');
        cy.get('.search .button--search .icon').should('exist');
    });

    it('has correct styles', () => {
        cy.get('.search').should('have.css', 'display', 'flex');
        cy.get('.search').should('have.css', 'align-items', 'stretch');
        cy.get('.search').should('have.css', 'justify-content', 'center');
        cy.get('.search').should('have.css', 'flex-direction', 'row');

        cy.get('.search .input--search').should('have.css', 'position', 'relative');
        cy.get('.search .input--search').should('have.css', 'width', '818.78125px');
        cy.get('.search .input--search').should('have.css', 'border-radius', `${tokens.borderRadius.normal} 0px 0px ${tokens.borderRadius.normal}`);
        cy.get('.search .input--search').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorFontLight}`);
        cy.get('.search .input--search').should('have.css', 'background-color', 'rgb(255, 255, 255)');
        cy.get('.search .input--search').should('have.css', 'padding', `0px ${tokens.spacing.s}`);
        cy.get('.search .input--search').should('have.css', 'color', colors.colorFont);
        cy.get('.search .input--search').should('have.css', 'font-family', tokens.type.fontFamily.text);
        cy.get('.search .input--search').should('have.css', 'font-size', tokens.type.size.normal);
        cy.get('.search .input--search').should('have.css', 'font-weight', tokens.type.fontWeight.normal);

        cy.get('.search .button--search').should('have.css', 'width', '141.21875px');
        cy.get('.search .button--search').should('have.css', 'height', '46px');
        cy.get('.search .button--search').should('have.css', 'display', 'flex');
        cy.get('.search .button--search').should('have.css', 'align-items', 'center');
        cy.get('.search .button--search').should('have.css', 'justify-content', 'center');
        cy.get('.search .button--search').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorPrimary}`);
        cy.get('.search .button--search').should('have.css', 'gap', tokens.spacing.s);
        cy.get('.search .button--search').should('have.css', 'background-color', colors.colorPrimary);
        cy.get('.search .button--search').should('have.css', 'color', colors.colorBg);
        cy.get('.search .button--search').should('have.css', 'font-family', tokens.type.fontFamily.text);
        cy.get('.search .button--search').should('have.css', 'font-size', tokens.type.size.normal);
        cy.get('.search .button--search').should('have.css', 'padding', `${tokens.spacing.s} ${tokens.spacing.m}`);
        cy.get('.search .button--search').should('have.css', 'cursor', 'pointer');
    });

    it('has correct button hover styles', () => {
        cy.get('.search .button--search').should('have.css', 'background-color', colors.colorPrimary);
        cy.get('.search .button--search').should('have.css', 'color', colors.colorBg);
        cy.get('.search .button--search').realHover();
        cy.get('.search .button--search').should('have.css', 'background-color', colors.colorPrimaryDark);
        cy.get('.search .button--search').should('have.css', 'color', colors.colorBg);
    });

    it('can add text', () => {
        const testString = 'This is a test';
        cy.get('.search .input--search').type(testString);
        cy.get('.search .input--search').should('have.value', testString);
    });

    it('has correct input focus styles', () => {
        const testString = 'This is a test';
        cy.get('.search .input--search').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorFontLight}`);
        cy.get('.search .input--search').type(testString);
        cy.get('.search .input--search').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorPrimary}`);
    });

    it('has correct input hover styles', () => {
        cy.get('.search .input--search').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorFontLight}`);
        cy.get('.search .input--search').realHover();
        cy.get('.search .input--search').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorFont}`);
        // @ts-ignore
        cy.get('body').resetRealHover();
        cy.get('.search .input--search').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorFontLight}`);
    });
})

export {}
