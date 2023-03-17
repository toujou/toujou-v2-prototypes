/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('Forms / form error', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--text-inputs');
    });

    it('has correct styles', () => {
        cy.get('.input-group--text .form__error').then((errorEl) => {
            expect(errorEl).to.have.prop('tagName').equal('SPAN');
            expect(errorEl).to.have.css('display').equal('none');
            expect(errorEl).to.have.css('order').equal('20');
            expect(errorEl).to.have.css('color').equal(colors.colorError);
            expect(errorEl).to.have.css('padding').equal(`0px ${tokens.spacing.xs}`);
            expect(errorEl).to.have.css('font-size').equal(tokens.type.size.s);
            expect(errorEl).to.have.css('grid-column').equal('1 / -1');
        });
    });
})

describe('Forms / form error - visible', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--text-inputs&args=state:error');
    });

    it('has correct styles', () => {
        cy.get('.input-group--text.input-group--has-error').should('exist');
        cy.get('.input-group--text .form__error').should('have.css', 'display', 'block');
    });
})

export {}
