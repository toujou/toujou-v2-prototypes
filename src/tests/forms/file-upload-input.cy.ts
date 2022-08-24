/// <reference types="cypress" />

const colorBg = Cypress.env('colorBg');
const colorFont = Cypress.env('colorFont');
const colorFontLight = Cypress.env('colorFontLight');
const colorPrimary = Cypress.env('colorPrimary');
const colorSuccess = Cypress.env('colorSuccess');
const colorError = Cypress.env('colorError');

describe('Forms / file upload', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--other-inputs');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('file upload has correct structure', () => {
        cy.get('.input-group--file-upload').should('exist');
        cy.get('.input-group--file-upload .input-label').should('exist');
        cy.get('.input-group--file-upload .input-description').should('exist');
        cy.get('.input-group--file-upload .input').should('exist');
        cy.get('.input-group--file-upload .input').invoke('attr', 'class').should('contain', 'input--file-upload');
        cy.get('.input-group--file-upload .input').invoke('attr', 'accept').should('exist');
        cy.get('.input-group--file-upload .input').invoke('attr', 'type').should('eq', 'file');
        cy.get('.input-group--file-upload .form__error').should('exist');
    });

    it('file upload has correct styles', () => {
        cy.get('.input-group--file-upload .input').then((fileUploadInput) => {
            expect(fileUploadInput).to.exist;
            expect(fileUploadInput).to.have.attr('type').equal('file');
            expect(fileUploadInput).to.have.css('position').equal('relative');
            expect(fileUploadInput).to.have.css('border').equal(`1px solid ${colorFontLight}`);
            expect(fileUploadInput).to.have.css('background-color').equal(colorBg);
            expect(fileUploadInput).to.have.css('padding').equal('24px 8px 8px');
            expect(fileUploadInput).to.have.css('color').equal(colorFont);
            expect(fileUploadInput).to.have.css('font-size').equal('16px');
            expect(fileUploadInput).to.have.css('font-weight').equal('600');
        });
    });

    it('file upload input has correct hover styles', () => {
        cy.get('.input-group--file-upload .input').realHover();
        cy.get('.input-group--file-upload .input').should('have.css', 'border', `1px solid ${colorFont}`)
    });

    it('file upload input has correct focus styles', () => {
        cy.get('.input-group--file-upload .input').focus();
        cy.get('.input-group--file-upload .input').should('have.css', 'border', `1px solid ${colorPrimary}`)
    });
});

describe('Forms / file upload input - disabled', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--other-inputs&args=state:disabled');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('input--text group has correct disabled styles', () => {
        cy.get('.input-group--file-upload .input').invoke('attr', 'disabled').should('exist');
        cy.get('.input-group--file-upload .input').should('have.css', 'color', colorFontLight)
        cy.get('.input-group--file-upload .input').should('have.css', 'border', `1px solid ${colorFontLight}`);
        cy.get('.input-group--file-upload .input').should('have.css', 'pointer-events', 'none');
    });

    it('input--text group has correct hover styles when disabled', () => {
        cy.get('.input-group--file-upload .input').invoke('attr', 'disabled').should('exist');
        cy.get('.input-group--file-upload .input').realHover();
        cy.get('.input-group--file-upload .input').invoke('attr', 'disabled').should('exist');
    });
});

describe('Forms / file upload input - success', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--other-inputs&args=state:success');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it.only('input--text group has correct success styles', () => {
        cy.get('.input-group--file-upload .input').should('have.css', 'color', colorFont)
        cy.get('.input-group--file-upload .input').should('have.css', 'border', `1px solid ${colorSuccess}`);
        cy.get('.input-group--file-upload .input').should('have.css', 'outline', `${colorSuccess} solid 1px`);
    });
});

describe('Forms / file upload input - error', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--other-inputs&args=state:error');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('input--text group has correct success styles', () => {
        cy.get('.input-group--file-upload .input').should('have.css', 'color', colorFont)
        cy.get('.input-group--file-upload .input').should('have.css', 'border', `1px solid ${colorError}`);
        cy.get('.input-group--file-upload .input').should('have.css', 'outline', `${colorError} solid 1px`);
    });
});

export {}
