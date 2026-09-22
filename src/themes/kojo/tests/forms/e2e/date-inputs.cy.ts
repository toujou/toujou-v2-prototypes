/// <reference types="cypress" />
/// <reference types="cypress-real-events" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('Forms / date inputs', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--date');
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

    it('input date has correct styles', () => {
        cy.get('.input-group--date .input--date').then((inputDate) => {
            expect(inputDate).to.exist;
            expect(inputDate).to.have.css('position').equal('relative');
            expect(inputDate).to.have.css('border').equal(`${tokens.border.normal} solid ${colors.colorFontLight}`);
            expect(inputDate).to.have.css('background-color').equal(colors.colorBg);
            expect(inputDate).to.have.css('padding').equal(`${tokens.spacing.m} ${tokens.spacing.s} ${tokens.spacing.s}`);
            expect(inputDate).to.have.css('color').equal(colors.colorFont);
            expect(inputDate).to.have.css('font-size').equal(tokens.type.size.normal);
            expect(inputDate).to.have.css('font-weight').equal(tokens.type.fontWeight.normal);
        });
    });

    it('input date has correct hover styles', () => {
        cy.get('.input-group--date .input--date').realHover();
        cy.get('.input-group--date .input--date').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorFont}`)
    });

    it('input date has correct focus styles', () => {
        cy.get('.input-group--date .input--date').focus();
        cy.get('.input-group--date .input--date').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorPrimary}`)
    });
});

export {}
