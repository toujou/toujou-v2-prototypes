/// <reference types="cypress" />
/// <reference types="cypress-real-events" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('Forms / image upload [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-forms--other-inputs');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('image upload has correct structure', () => {
        cy.get('.input-group--file-upload').should('exist');
        cy.get('.input-group--file-upload .input-label').should('exist');
        cy.get('.input-group--file-upload .input-description').should('exist');
        cy.get('.input-group--file-upload .input').should('exist');
        cy.get('.input-group--file-upload .input').invoke('attr', 'class').should('contain', 'input--file-upload');
        cy.get('.input-group--file-upload .input').invoke('attr', 'accept').should('exist');
        cy.get('.input-group--file-upload .input').invoke('attr', 'type').should('eq', 'file');
        cy.get('.input-group--file-upload .form__error').should('exist');
    });

    it('image upload has correct styles', () => {
        cy.get('.input-group--file-upload .input').then((fileUploadInput) => {
            expect(fileUploadInput).to.exist;
            expect(fileUploadInput).to.have.attr('type').equal('file');
            expect(fileUploadInput).to.have.css('position').equal('relative');
            expect(fileUploadInput).to.have.css('border').equal(`${tokens.border.normal} solid ${colors.colorFontLight}`);
            expect(fileUploadInput).to.have.css('background-color').equal(colors.colorBg);
            expect(fileUploadInput).to.have.css('padding').equal(`${tokens.spacing.m} ${tokens.spacing.s} ${tokens.spacing.s}`);
            expect(fileUploadInput).to.have.css('color').equal(colors.colorFont);
            expect(fileUploadInput).to.have.css('font-size').equal(tokens.type.size.normal);
            expect(fileUploadInput).to.have.css('font-weight').equal(tokens.type.fontWeight.normal);
        });
    });

    it('image upload input has correct hover styles', () => {
        cy.get('.input-group--file-upload .input').realHover();
        cy.get('.input-group--file-upload .input').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorFont}`)
    });

    it('image upload input has correct focus styles', () => {
        cy.get('.input-group--file-upload .input').focus();
        cy.get('.input-group--file-upload .input').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorPrimary}`)
    });
});

describe('Forms / image upload input - disabled [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-forms--other-inputs&args=state:disabled');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('input--text group has correct disabled styles', () => {
        cy.get('.input-group--file-upload .input').invoke('attr', 'disabled').should('exist');
        cy.get('.input-group--file-upload .input').should('have.css', 'color', colors.colorFontLight)
        cy.get('.input-group--file-upload .input').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorFontLight}`);
        cy.get('.input-group--file-upload .input').should('have.css', 'pointer-events', 'none');
    });

    it('input--text group has correct hover styles when disabled', () => {
        cy.get('.input-group--file-upload .input').invoke('attr', 'disabled').should('exist');
        cy.get('.input-group--file-upload .input').realHover();
        cy.get('.input-group--file-upload .input').invoke('attr', 'disabled').should('exist');
    });
});

describe('Forms / image upload input - success [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-forms--other-inputs&args=state:success');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('input--text group has correct success styles', () => {
        cy.get('.input-group--file-upload .input').should('have.css', 'color', colors.colorFont)
        cy.get('.input-group--file-upload .input').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorSuccess}`);
        cy.get('.input-group--file-upload .input').should('have.css', 'outline', `${colors.colorSuccess} solid ${tokens.border.normal}`);
    });
});

describe('Forms / image upload input - error [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-forms--other-inputs&args=state:error');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('input--text group has correct success styles', () => {
        cy.get('.input-group--file-upload .input').should('have.css', 'color', colors.colorFont)
        cy.get('.input-group--file-upload .input').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorError}`);
        cy.get('.input-group--file-upload .input').should('have.css', 'outline', `${colors.colorError} solid ${tokens.border.normal}`);
    });
});

export {}
