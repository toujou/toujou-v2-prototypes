/// <reference types="cypress" />

const colors = Cypress.env('colors');

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
            expect(checkbox).to.have.css('background-color').equal(colors.colorBg);
            expect(checkbox).to.have.css('border').equal(`2px solid ${colors.colorFont}`);
            expect(checkbox).to.have.css('border-radius').equal('2px');
            expect(checkbox).to.have.css('position').equal('relative');
        });
    });

    it('select has correct hover styles', () => {
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colors.colorFont}`);
        // @ts-ignore
        cy.get('.input-group--check:first-child .checkbox-group').realHover();
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colors.colorPrimary}`);
        // @ts-ignore
        cy.get('.input-group--check:first-child .checkbox-group').resetRealHover();
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colors.colorFont}`);
        // @ts-ignore
        cy.get('.input-group--check:first-child .checkbox').realHover();
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colors.colorPrimary}`);
    });

    it('select has correct checked styles', () => {
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colors.colorFont}`);
        cy.get('.input-group--check:first-child .checkbox').click();
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colors.colorPrimary}`);
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'background-color', colors.colorPrimary);
        // @ts-ignore
        cy.get('.input-group--check:first-child .checkbox').after('background-color').should('eq', colors.colorBg);
        // @ts-ignore
        cy.get('.input-group--check:first-child .checkbox').after('-webkit-mask-image').should('contain', 'check');
        // // @ts-ignore
        // @ts-ignore
        cy.get('.input-group--check:first-child .checkbox').realHover();
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colors.colorPrimaryLight}`);
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'background-color', colors.colorPrimaryLight);
        // @ts-ignore
        cy.get('.input-group--check:first-child .checkbox').after('background-color').should('eq', colors.colorBg);
        // @ts-ignore
        cy.get('.input-group--check:first-child .checkbox').after('-webkit-mask-image').should('contain', 'check');
    });

    it('select has correct focus styles', () => {
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colors.colorFont}`);
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'outline', 'rgb(0, 0, 0) none 0px');
        cy.get('.input-group--check:first-child .checkbox').focus();
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colors.colorFont}`);
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'outline', `${colors.colorPrimary} solid 2px`);

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
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colors.colorFontLight}`);
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colors.colorFontLight}`);
    });

    it('checkbox has correct hover styles when disabled', () => {
        // @ts-ignore
        cy.get('.input-group--check:first-child .checkbox-group').realHover()
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colors.colorFontLight}`);
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colors.colorFontLight}`);
        // @ts-ignore
        cy.get('.input-group--check:first-child .checkbox').realHover()
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colors.colorFontLight}`);
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colors.colorFontLight}`);
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
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colors.colorSuccess}`);
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'background-color', colors.colorSuccessO25Alpha);
        cy.get('.input-group--check:first-child .checkbox').click();
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colors.colorSuccess}`);
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'background-color', colors.colorSuccess);
        // @ts-ignore
        cy.get('.input-group--check:first-child .checkbox').after('-webkit-mask-image').should('contain', 'check');
        // @ts-ignore
        cy.get('.input-group--check:first-child .checkbox').after('background-color').should('contain', colors.colorBg);
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
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colors.colorError}`);
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'background-color', colors.colorErrorO25Alpha);
        cy.get('.input-group--check:first-child .checkbox').click();
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'border', `2px solid ${colors.colorError}`);
        cy.get('.input-group--check:first-child .checkbox').should('have.css', 'background-color', colors.colorError);
        // @ts-ignore
        cy.get('.input-group--check:first-child .checkbox').after('-webkit-mask-image').should('contain', 'check');
        // @ts-ignore
        cy.get('.input-group--check:first-child .checkbox').after('background-color').should('contain', colors.colorBg);
    });
});

export {}
