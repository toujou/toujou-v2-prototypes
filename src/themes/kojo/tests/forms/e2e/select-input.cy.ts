/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('Forms / select input', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--select-input');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct structure', () => {
       cy.get('.input-group--single-select').invoke('prop', 'tagName').should('eq', 'TOUJOU-INPUT-GROUP');
       cy.get('.input-group--single-select .input-label').should('exist');
       cy.get('.input-group--single-select .input-description').should('exist');
       cy.get('.input-group--single-select .select__wrapper').should('exist');
       cy.get('.input-group--single-select .select__wrapper .select').should('exist');
       cy.get('.input-group--single-select .form__error').should('exist');
    });

    it('select input has correct styles', () => {
        // @ts-ignore
        cy.get('.input-group--single-select .select__wrapper').after('background-color').should('eq', colors.colorFont);
        // @ts-ignore
        cy.get('.input-group--single-select .select__wrapper').after('height').should('eq', '24px');
        // @ts-ignore
        cy.get('.input-group--single-select .select__wrapper').after('width').should('eq', '24px');
        // @ts-ignore
        cy.get('.input-group--single-select .select__wrapper').after('position').should('eq', 'absolute');
        // @ts-ignore
        cy.get('.input-group--single-select .select__wrapper').after('top').should('eq', tokens.spacing.normal);
        // @ts-ignore
        cy.get('.input-group--single-select .select__wrapper').after('right').should('eq', tokens.spacing.s);
        // @ts-ignore
        cy.get('.input-group--single-select .select__wrapper').after('-webkit-mask-image').should('contain', 'url("http://localhost:6006/assets/icons/icon-chevron-down.svg")');
    });

    it('select has correct hover styles', () => {
        // @ts-ignore
        cy.get('.select__wrapper .select').realHover();
        cy.get('.select__wrapper .select').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorFont}`)
    });

    it('select has correct focus styles', () => {
        cy.get('.select__wrapper .select').focus();
        cy.get('.select__wrapper .select').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorPrimary}`)
    });
});

describe('Forms / select input - disabled', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--select-input&args=state:disabled');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('select has correct disabled styles', () => {
        cy.get('.input-group--single-select').invoke('attr', 'class').should('contain', 'input-group--disabled');
        cy.get('.input-group--single-select .select').should('have.css', 'color', colors.colorFontLight)
        cy.get('.input-group--single-select .select').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorFontLight}`);
        cy.get('.input-group--single-select .select').should('have.css', 'pointer-events', 'none');
        // @ts-ignore
        cy.get('.input-group--single-select .select__wrapper').after('background-color').should('eq', colors.colorFontLight);
    });

    it('select has correct hover styles when disabled', () => {
        cy.get('.input-group--single-select .select').invoke('attr', 'disabled').should('exist');
        // @ts-ignore
        cy.get('.input-group--single-select .select').realHover();
        cy.get('.input-group--single-select .select').invoke('attr', 'disabled').should('exist');
        // @ts-ignore
        cy.get('.input-group--single-select .select__wrapper').after('background-color').should('eq', colors.colorFontLight);
    });
});

describe('Forms / select input - success', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--select-input&args=state:success');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('input--text group has correct success styles', () => {
        cy.get('.input-group--single-select .select').should('have.css', 'color', colors.colorFont)
        cy.get('.input-group--single-select .select').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorSuccess}`);
        cy.get('.input-group--single-select .select').should('have.css', 'outline', `${colors.colorSuccess} solid ${tokens.border.normal}`);
    });
});

describe('Forms / select input - error', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--select-input&args=state:error');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('input--text group has correct success styles', () => {
        cy.get('.input-group--single-select .select').should('have.css', 'color', colors.colorFont)
        cy.get('.input-group--single-select .select').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorError}`);
        cy.get('.input-group--single-select .select').should('have.css', 'outline', `${colors.colorError} solid ${tokens.border.normal}`);
    });
});

export {}
