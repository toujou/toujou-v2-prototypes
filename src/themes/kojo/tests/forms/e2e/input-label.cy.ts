/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('Forms / input label', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--text-inputs');
    });

    it('has correct styles', () => {
        cy.get('.input-group--text .input-label').then((label) => {
           expect(label).to.have.prop('tagName').equal('LABEL');
           expect(label).to.have.css('position').equal('absolute');
           expect(label).to.have.css('top').equal(tokens.spacing.s);
           expect(label).to.have.css('left').equal(tokens.spacing.s);
           expect(label).to.have.css('font-size').equal(tokens.type.size.xs);
           expect(label).to.have.css('color').equal(colors.colorFont);
           expect(label).to.have.css('z-index').equal('1');
        });
    });

    it('has correct styles when group has focus', () => {
        cy.get('.input-group--text .input--text').focus();
        cy.get('.input-group--text .input-label').should('have.css', 'color', colors.colorPrimary);
    });
});

describe('Forms / input label - disabled group', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--text-inputs&args=state:disabled');
    });

    it('has correct styles when group is disabled', () => {
        cy.get('.input-group--text .input-label').should('have.css', 'color', colors.colorFontLight);
    });
})

describe('Forms / input label - success group', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--text-inputs&args=state:success');
    });

    it('has correct styles when group has success', () => {
        cy.get('.input-group--text .input-label').should('have.css', 'color', colors.colorSuccess);
    });
})

describe('Forms / input label - error group', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--text-inputs&args=state:error');
    });

    it('has correct styles when group has error', () => {
        cy.get('.input-group--text .input-label').should('have.css', 'color', colors.colorError);
    });
})

export {}
