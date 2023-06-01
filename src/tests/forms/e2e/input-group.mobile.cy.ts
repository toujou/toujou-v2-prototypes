/// <reference types="cypress" />

const colors = Cypress.env('colors');

describe('Forms / input group [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-forms--text-inputs');
    });

    it('input group has correct styles', () => {
        cy.get('.input-group').then((inputGroup) => {
            expect(inputGroup).to.have.prop('tagName').equal('TOUJOU-INPUT-GROUP');
            expect(inputGroup).to.have.css('position').equal('relative');
            expect(inputGroup).to.have.css('display').equal('flex');
            expect(inputGroup).to.have.css('flex-direction').equal('column');
            expect(inputGroup).to.have.css('justify-content').equal('flex-start');
            expect(inputGroup).to.have.css('align-items').equal('flex-start');
            expect(inputGroup).to.have.css('gap').equal('0px');
            expect(inputGroup).to.have.css('grid-column').equal('span 12 / auto');
        })
    });
});

describe('Forms / input group with error [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-forms--text-inputs&args=state:error');
    });

    it('input group has correct styles', () => {
        // @ts-ignore
        cy.get('.input-group--text').after('display').should('eq', 'block');
        // @ts-ignore
        cy.get('.input-group--text').after('background-color').should('eq', colors.colorError);
        // @ts-ignore
        cy.get('.input-group--text').after('-webkit-mask-image').should('contain', 'icon-info');

    });
});

describe('Forms / input group with success [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-forms--text-inputs&args=state:success');
    });

    it('input group has correct styles', () => {
        // @ts-ignore
        cy.get('.input-group--text').after('display').should('eq', 'block');
        // @ts-ignore
        cy.get('.input-group--text').after('background-color').should('eq', colors.colorSuccess);
        // @ts-ignore
        cy.get('.input-group--text').after('-webkit-mask-image').should('contain', 'icon-check');

    });
});

export {}
