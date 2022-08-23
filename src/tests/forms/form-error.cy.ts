/// <reference types="cypress" />

const colorError = Cypress.env('colorError');

describe('Forms / form error', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--text-inputs');
    });

    it('has correct styles', () => {
        cy.get('.input-group--text .form__error').then((errorEl) => {
            expect(errorEl).to.have.prop('tagName').equal('SPAN');
            expect(errorEl).to.have.css('display').equal('none');
            expect(errorEl).to.have.css('order').equal('20');
            expect(errorEl).to.have.css('color').equal(colorError);
            expect(errorEl).to.have.css('padding').equal('0px 4px');
            expect(errorEl).to.have.css('font-size').equal('14px');
            expect(errorEl).to.have.css('grid-column').equal('1 / -1');
        });
    });
})

describe('Forms / form error - visible', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--text-inputs&args=state:error');
    });

    it.only('has correct styles', () => {
        cy.get('.input-group--text.input-group--has-error').should('exist');
        cy.get('.input-group--text .form__error').should('have.css', 'display', 'block');
    });
})

export {}
