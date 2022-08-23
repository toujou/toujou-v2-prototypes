/// <reference types="cypress" />

const colorFont = Cypress.env('colorFont');
const colorFontLight = Cypress.env('colorFontLight');
const colorPrimary = Cypress.env('colorPrimary');
const colorSuccess = Cypress.env('colorSuccess');
const colorError = Cypress.env('colorError');
const colorBg = Cypress.env('colorBg');

describe('Forms / input group', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--text-inputs');
        // @ts-ignore
        cy.get('.input--text').resetRealHover();
    });

    it('input--text group has correct styles', () => {
        cy.get('.input-group--text .input--text').then((textInput) => {
           expect(textInput).to.exist;
           expect(textInput).to.have.css('position').equal('relative');
           expect(textInput).to.have.css('border').equal(`1px solid ${colorFontLight}`);
           expect(textInput).to.have.css('background-color').equal(colorBg);
           expect(textInput).to.have.css('padding').equal('24px 8px 8px');
           expect(textInput).to.have.css('color').equal(colorFont);
           expect(textInput).to.have.css('font-size').equal('16px');
           expect(textInput).to.have.css('font-weight').equal('600');
        });
        cy.get('.input-group--text .input--text').realHover();
        cy.get('.input-group--text .input--text').should('have.css', 'border', `1px solid ${colorFont}`)
    });

    it('input--text group has correct hover styles', () => {
        cy.get('.input-group--text .input--text').realHover();
        cy.get('.input-group--text .input--text').should('have.css', 'border', `1px solid ${colorFont}`)
    });

    it('input--text group has correct hover styles', () => {
        cy.get('.input-group--text .input--text').focus();
        cy.get('.input-group--text .input--text').should('have.css', 'border', `1px solid ${colorPrimary}`)
    });
});

describe('Forms / input group - disabled', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--text-inputs&args=state:disabled');
        // @ts-ignore
        cy.get('.input--text').resetRealHover();
    });

    it('input--text group has correct disabled styles', () => {
        cy.get('.input-group--text .input--text').invoke('attr', 'disabled').should('exist');
        cy.get('.input-group--text .input--text').should('have.css', 'color', colorFontLight)
        cy.get('.input-group--text .input--text').should('have.css', 'border', `1px solid ${colorFontLight}`);
        cy.get('.input-group--text .input--text').should('have.css', 'pointer-events', 'none');
    });

    it('input--text group has correct hover styles when disabled', () => {
        cy.get('.input-group--text .input--text').invoke('attr', 'disabled').should('exist');
        cy.get('.input-group--text .input--text').realHover();
        cy.get('.input-group--text .input--text').invoke('attr', 'disabled').should('exist');
    });
});

describe('Forms / input group - success', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--text-inputs&args=state:success');
        // @ts-ignore
        cy.get('.input--text').resetRealHover();
    });

    it('input--text group has correct success styles', () => {
        cy.get('.input-group--text .input--text').should('have.css', 'color', colorFont)
        cy.get('.input-group--text .input--text').should('have.css', 'border', `1px solid ${colorSuccess}`);
        cy.get('.input-group--text .input--text').should('have.css', 'outline', `${colorSuccess} solid 1px`);
    });
});

describe('Forms / input group - error', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--text-inputs&args=state:error');
        // @ts-ignore
        cy.get('.input--text').resetRealHover();
    });

    it('input--text group has correct success styles', () => {
        cy.get('.input-group--text .input--text').should('have.css', 'color', colorFont)
        cy.get('.input-group--text .input--text').should('have.css', 'border', `1px solid ${colorError}`);
        cy.get('.input-group--text .input--text').should('have.css', 'outline', `${colorError} solid 1px`);
    });
});

export {}
