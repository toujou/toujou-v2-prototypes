/// <reference types="cypress" />

const colors = Cypress.env('colors');

describe('Forms / date inputs', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--date-inputs');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('input date has correct structure', () => {
        cy.get('.input-group--date .input-label').should('exist');
        cy.get('.input-group--date .input-description').should('exist');
        cy.get('.input-group--date .input--date').should('exist');
        cy.get('.input-group--date .input--date').invoke('attr', 'pattern').should('exist');
        cy.get('.input-group--date .input--date').invoke('attr', 'type').should('eq', 'date');
        cy.get('.input-group--date .form__error').should('exist');
    });

    it('input date jquery has correct structure', () => {
        cy.get('.input-group--date-jquery .input-label').should('exist');
        cy.get('.input-group--date-jquery .input-description').should('exist');
        cy.get('.input-group--date-jquery .date-dummy').invoke('attr', 'class').should('contain', 'date-dummy--empty');
        cy.get('.input-group--date-jquery .date-dummy').invoke('attr', 'class').should('contain', 'input--date');
        cy.get('.input-group--date-jquery .date-dummy').invoke('attr', 'class').should('contain', 'flatpickr-input');
        cy.get('.input-group--date-jquery .input--date').invoke('attr', 'type').should('eq', 'text');
        cy.get('.input-group--date-jquery .input--date').invoke('attr', 'readonly').should('eq', 'readonly');
        cy.get('.input-group--date-jquery input[type="hidden"').should('exist');
        cy.get('.input-group--date-jquery input[type="hidden"').invoke('attr', 'value').should('eq', 'Y-m-d');
        cy.get('.input-group--date-jquery .form__error').should('exist');
    });

    it('input date has correct styles', () => {
        cy.get('.input-group--date .input--date').then((inputDate) => {
            expect(inputDate).to.exist;
            expect(inputDate).to.have.css('position').equal('relative');
            expect(inputDate).to.have.css('border').equal(`1px solid ${colors.colorFontLight}`);
            expect(inputDate).to.have.css('background-color').equal(colors.colorBg);
            expect(inputDate).to.have.css('padding').equal('24px 8px 8px');
            expect(inputDate).to.have.css('color').equal(colors.colorFont);
            expect(inputDate).to.have.css('font-size').equal('16px');
            expect(inputDate).to.have.css('font-weight').equal('600');
        });
    });

    it('input date jquery has correct styles', () => {
        cy.get('.input-group--date-jquery .input--date').then((inputDateJQuery) => {
            expect(inputDateJQuery).to.exist;
            expect(inputDateJQuery).to.have.css('position').equal('relative');
            expect(inputDateJQuery).to.have.css('border').equal(`1px solid ${colors.colorFontLight}`);
            expect(inputDateJQuery).to.have.css('background-color').equal(colors.colorBg);
            expect(inputDateJQuery).to.have.css('padding').equal('24px 8px 8px');
            expect(inputDateJQuery).to.have.css('color').equal(colors.colorFont);
            expect(inputDateJQuery).to.have.css('font-size').equal('16px');
            expect(inputDateJQuery).to.have.css('font-weight').equal('600');
        });
    });

    it('input date has correct hover styles', () => {
        cy.get('.input-group--date .input--date').realHover();
        cy.get('.input-group--date .input--date').should('have.css', 'border', `1px solid ${colors.colorFont}`)
    });

    it('input jquery date has correct hover styles', () => {
        cy.get('.input-group--date-jquery .input--date').realHover();
        cy.get('.input-group--date-jquery .input--date').should('have.css', 'border', `1px solid ${colors.colorFont}`)
    });

    it('input date has correct focus styles', () => {
        cy.get('.input-group--date .input--date').focus();
        cy.get('.input-group--date .input--date').should('have.css', 'border', `1px solid ${colors.colorPrimary}`)
    });

    it('input date jquery has correct focus styles', () => {
        cy.get('.input-group--date-jquery .input--date').focus();
        cy.get('.input-group--date-jquery .input--date').should('have.css', 'border', `1px solid ${colors.colorPrimary}`)
    });
});

export {}
