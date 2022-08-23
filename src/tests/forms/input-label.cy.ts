/// <reference types="cypress" />

const colorFont = Cypress.env('colorFont');
const colorFontLight = Cypress.env('colorFontLight');
const colorPrimary = Cypress.env('colorPrimary');
const colorSuccess = Cypress.env('colorSuccess');
const colorError = Cypress.env('colorError');

describe('Forms / input label', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--text-inputs');
    });

    it('has correct styles', () => {
        cy.get('.input-group--text .input-label').then((label) => {
           expect(label).to.have.prop('tagName').equal('LABEL');
           expect(label).to.have.css('position').equal('absolute');
           expect(label).to.have.css('top').equal('8px');
           expect(label).to.have.css('left').equal('8px');
           expect(label).to.have.css('font-size').equal('12px');
           expect(label).to.have.css('color').equal(colorFont);
           expect(label).to.have.css('z-index').equal('1');
        });
    });

    it('has correct styles when group has focus', () => {
        cy.get('.input-group--text .input--text').focus();
        cy.get('.input-group--text .input-label').should('have.css', 'color', colorPrimary);
    });
});

describe('Forms / input label - disabled group', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--text-inputs&args=state:disabled');
    });

    it('has correct styles when group is disabled', () => {
        cy.get('.input-group--text .input-label').should('have.css', 'color', colorFontLight);
    });
})

describe('Forms / input label - success group', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--text-inputs&args=state:success');
    });

    it('has correct styles when group has success', () => {
        cy.get('.input-group--text .input-label').should('have.css', 'color', colorSuccess);
    });
})

describe('Forms / input label - error group', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--text-inputs&args=state:error');
    });

    it('has correct styles when group has error', () => {
        cy.get('.input-group--text .input-label').should('have.css', 'color', colorError);
    });
})

export {}
