/// <reference types="cypress" />

const colorFont = Cypress.env('colorFont');
const colorFontLight = Cypress.env('colorFontLight');
const colorPrimary = Cypress.env('colorPrimary');
const colorSuccess = Cypress.env('colorSuccess');
const colorError = Cypress.env('colorError');

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
        cy.get('.input-group--single-select .select__wrapper').after('background-color').should('eq', colorFont);
        // @ts-ignore
        cy.get('.input-group--single-select .select__wrapper').after('height').should('eq', '16px');
        // @ts-ignore
        cy.get('.input-group--single-select .select__wrapper').after('width').should('eq', '16px');
        // @ts-ignore
        cy.get('.input-group--single-select .select__wrapper').after('position').should('eq', 'absolute');
        // @ts-ignore
        cy.get('.input-group--single-select .select__wrapper').after('top').should('eq', '20px');
        // @ts-ignore
        cy.get('.input-group--single-select .select__wrapper').after('right').should('eq', '8px');
        // @ts-ignore
        cy.get('.input-group--single-select .select__wrapper').after('-webkit-mask-image').should('contain', 'chevron-filled-down');
    });

    it('select has correct hover styles', () => {
        cy.get('.select__wrapper .select').realHover();
        cy.get('.select__wrapper .select').should('have.css', 'border', `1px solid ${colorFont}`)
    });

    it('select has correct focus styles', () => {
        cy.get('.select__wrapper .select').focus();
        cy.get('.select__wrapper .select').should('have.css', 'border', `1px solid ${colorPrimary}`)
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
        cy.get('.input-group--single-select .select').should('have.css', 'color', colorFontLight)
        cy.get('.input-group--single-select .select').should('have.css', 'border', `1px solid ${colorFontLight}`);
        cy.get('.input-group--single-select .select').should('have.css', 'pointer-events', 'none');
        // @ts-ignore
        cy.get('.input-group--single-select .select__wrapper').after('background-color').should('eq', colorFontLight);
    });

    it('select has correct hover styles when disabled', () => {
        cy.get('.input-group--single-select .select').invoke('attr', 'disabled').should('exist');
        cy.get('.input-group--single-select .select').realHover();
        cy.get('.input-group--single-select .select').invoke('attr', 'disabled').should('exist');
        // @ts-ignore
        cy.get('.input-group--single-select .select__wrapper').after('background-color').should('eq', colorFontLight);
    });
});

describe('Forms / select input - success', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--select-input&args=state:success');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('input--text group has correct success styles', () => {
        cy.get('.input-group--single-select .select').should('have.css', 'color', colorFont)
        cy.get('.input-group--single-select .select').should('have.css', 'border', `1px solid ${colorSuccess}`);
        cy.get('.input-group--single-select .select').should('have.css', 'outline', `${colorSuccess} solid 1px`);
    });
});

describe('Forms / select input - error', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--select-input&args=state:error');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('input--text group has correct success styles', () => {
        cy.get('.input-group--single-select .select').should('have.css', 'color', colorFont)
        cy.get('.input-group--single-select .select').should('have.css', 'border', `1px solid ${colorError}`);
        cy.get('.input-group--single-select .select').should('have.css', 'outline', `${colorError} solid 1px`);
    });
});

export {}
