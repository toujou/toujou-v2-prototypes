/// <reference types="cypress" />

const colorBg = Cypress.env('colorBg');
const colorFont = Cypress.env('colorFont');
const colorFontLight = Cypress.env('colorFontLight');
const colorPrimary = Cypress.env('colorPrimary');
const colorPrimaryLight = Cypress.env('colorPrimaryLight');
const colorSuccess = Cypress.env('colorSuccess');
const colorSuccessO25 = Cypress.env('colorSuccessO25');
const colorError = Cypress.env('colorError');
const colorErrorO25 = Cypress.env('colorErrorO25');

describe('Forms / single checkbox input', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--checkbox-inputs');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct structure', () => {
        cy.get('.input-group--check').invoke('prop', 'tagName').should('eq', 'TOUJOU-INPUT-GROUP');
        cy.get('.input-group--check').invoke('prop', 'class').should('contain', 'checkbox-group');
        cy.get('.input-group--check .checkbox-group').should('exist');
        cy.get('.input-group--check .checkbox-group .checkbox').should('exist');
        cy.get('.input-group--check .checkbox-group .checkbox-group__label').should('exist');
        cy.get('.input-group--check .checkbox-group .input-description.input-description--checkbox-group').should('exist');
        cy.get('.input-group--check .form__error').should('exist');
    });

    it('select input has correct styles', () => {
        cy.get('.input-group--check .checkbox-group').then((checkboxGroup) => {
            expect(checkboxGroup).to.have.css('display').equal('grid');
            expect(checkboxGroup).to.have.css('grid-gap').equal('0px 8px');
        });
        cy.get('.input-group--check .checkbox').then((checkbox) => {
            expect(checkbox).to.have.css('appearance').equal('none');
            expect(checkbox).to.have.css('height').equal('16px');
            expect(checkbox).to.have.css('width').equal('16px');
            expect(checkbox).to.have.css('background-color').equal(colorBg);
            expect(checkbox).to.have.css('border').equal(`2px solid ${colorFont}`);
            expect(checkbox).to.have.css('border-radius').equal('2px');
            expect(checkbox).to.have.css('position').equal('relative');
        });
    });

    it('select has correct hover styles', () => {
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colorFont}`);
        cy.get('.input-group--check:first-child .checkbox-group').realHover();
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colorPrimary}`);
        // @ts-ignore
        cy.get('.input-group--check:first-child .checkbox-group').resetRealHover();
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colorFont}`);
        cy.get('.input-group--check:first-child .checkbox').realHover();
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colorPrimary}`);
    });

    it('select has correct checked styles', () => {
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colorFont}`);
        cy.get('.input-group--check:first-child .checkbox').click();
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colorPrimary}`);
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'background-color', colorPrimary);
        // @ts-ignore
        cy.get('.input-group--check:first-child .checkbox').after('background-color').should('eq', colorBg);
        // @ts-ignore
        cy.get('.input-group--check:first-child .checkbox').after('-webkit-mask-image').should('contain', 'check');
        // // @ts-ignore
        cy.get('.input-group--check:first-child .checkbox').realHover();
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colorPrimaryLight}`);
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'background-color', colorPrimaryLight);
        // @ts-ignore
        cy.get('.input-group--check:first-child .checkbox').after('background-color').should('eq', colorBg);
        // @ts-ignore
        cy.get('.input-group--check:first-child .checkbox').after('-webkit-mask-image').should('contain', 'check');
    });

    it('select has correct focus styles', () => {
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colorFont}`);
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'outline', 'rgb(0, 0, 0) none 0px');
        cy.get('.input-group--check:first-child .checkbox').focus();
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colorFont}`);
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'outline', `${colorPrimary} solid 2px`);

    });
});

describe('Forms / checkbox input - disabled', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--checkbox-inputs&args=state:disabled');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('checkbox has correct disabled styles', () => {
        cy.get('.input-group--check:first-child').invoke('attr', 'class').should('contain', 'input-group--disabled');
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colorFontLight}`);
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colorFontLight}`);
    });

    it('checkbox has correct hover styles when disabled', () => {
        cy.get('.input-group--check:first-child .checkbox-group').realHover()
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colorFontLight}`);
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colorFontLight}`);
        cy.get('.input-group--check:first-child .checkbox').realHover()
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colorFontLight}`);
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colorFontLight}`);
    });
});

describe('Forms / checkbox - success', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--checkbox-inputs&args=state:success');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('radio group has correct success styles', () => {
        cy.get('.input-group--check:first-child').invoke('attr', 'class').should('contain', 'input-group--has-success');
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colorSuccess}`);
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'background-color', colorSuccessO25);
        cy.get('.input-group--check:first-child .checkbox').click();
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colorSuccess}`);
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'background-color', colorSuccess);
        // @ts-ignore
        cy.get('.input-group--check:first-child .checkbox').after('-webkit-mask-image').should('contain', 'check');
        // @ts-ignore
        cy.get('.input-group--check:first-child .checkbox').after('background-color').should('contain', colorBg);
    });
});

describe('Forms / checkbox - error', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--checkbox-inputs&args=state:error');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('radio group has correct success styles', () => {
        cy.get('.input-group--check:first-child').invoke('attr', 'class').should('contain', 'input-group--has-error');
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colorError}`);
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'background-color', colorErrorO25);
        cy.get('.input-group--check:first-child .checkbox').click();
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colorError}`);
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'background-color', colorError);
        // @ts-ignore
        cy.get('.input-group--check:first-child .checkbox').after('-webkit-mask-image').should('contain', 'check');
        // @ts-ignore
        cy.get('.input-group--check:first-child .checkbox').after('background-color').should('contain', colorBg);
    });
});

export {}
