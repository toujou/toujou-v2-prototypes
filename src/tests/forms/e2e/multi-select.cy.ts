/// <reference types="cypress" />
/// <reference types="cypress-real-events" />

const colors = Cypress.env('colors');

describe('Forms / multi-select input', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--other-inputs');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct structure', () => {
        cy.get('.input-group--multi-select').invoke('prop', 'tagName').should('eq', 'TOUJOU-INPUT-GROUP');
        cy.get('.input-group--multi-select input[type="hidden"]').should('exist');
        cy.get('.input-group--multi-select .input-label').should('exist');
        cy.get('.input-group--multi-select .input-description').should('exist');
        cy.get('.input-group--multi-select .form__error').should('exist');
        cy.get('.input-group--multi-select .multi-select option').should('exist');
        cy.get('.input-group--multi-select .multi-select').children('option').should('have.length', 5);
    });

    it('multi-select select input has correct styles', () => {
        cy.get('.multi-select').should('have.css', 'background-color', colors.colorBg);
        cy.get('.multi-select').should('have.css', 'border-radius', '4px');
        cy.get('.multi-select').should('have.css', 'padding', '24px 8px 8px');
        cy.get('.multi-select').should('have.css', 'border', `1px solid ${colors.colorFontLight}`);
    });

    it('select has correct hover styles', () => {
        cy.get('.multi-select').realHover();
        cy.get('.multi-select').should('have.css', 'border', `1px solid ${colors.colorFont}`);
        cy.get('.multi-select').should('have.css', 'outline', `${colors.colorFont} solid 1px`);
    });

    it('select has correct focus styles', () => {
        cy.get('.multi-select').focus();
        cy.get('.multi-select').should('have.css', 'border', `1px solid ${colors.colorPrimary}`);
        cy.get('.multi-select').should('have.css', 'outline', `${colors.colorPrimary} solid 1px`);
    });
});

describe('Forms / multi-select input - disabled', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--other-inputs&args=state:disabled');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('multi-select has correct disabled styles', () => {
        cy.get('.input-group--multi-select').invoke('attr', 'class').should('contain', 'input-group--disabled');
        cy.get('.input-group--multi-select .multi-select').should('have.css', 'border', `1px solid ${colors.colorFontLight}`);
        cy.get('.input-group--multi-select .multi-select').should('have.css', 'pointer-events', 'none');
        // @ts-ignore
    });

    it('multi-select has correct hover styles when disabled', () => {
        cy.get('.input-group--multi-select .multi-select').invoke('attr', 'disabled').should('exist');
        cy.get('.input-group--multi-select .multi-select').realHover();
        cy.get('.input-group--multi-select .multi-select').invoke('attr', 'disabled').should('exist');
        // @ts-ignore
    });
});

describe('Forms / multi-select - success', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--other-inputs&args=state:success');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('multi-select has correct success styles', () => {
        cy.get('.input-group--multi-select .multi-select').should('have.css', 'border', `1px solid ${colors.colorSuccess}`);
        cy.get('.input-group--multi-select .multi-select').should('have.css', 'outline', `${colors.colorSuccess} solid 1px`);
    });
});

describe('Forms / multi-select - error', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--other-inputs&args=state:error');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('multi-select has correct error styles', () => {
        cy.get('.input-group--multi-select .multi-select').should('have.css', 'border', `1px solid ${colors.colorError}`);
        cy.get('.input-group--multi-select .multi-select').should('have.css', 'outline', `${colors.colorError} solid 1px`);
    });
});

export {}