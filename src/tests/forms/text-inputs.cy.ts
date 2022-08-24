/// <reference types="cypress" />

const colorFont = Cypress.env('colorFont');
const colorFontLight = Cypress.env('colorFontLight');
const colorPrimary = Cypress.env('colorPrimary');
const colorSuccess = Cypress.env('colorSuccess');
const colorError = Cypress.env('colorError');
const colorBg = Cypress.env('colorBg');

describe('Forms / text input', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--text-inputs');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('input--text has correct styles', () => {
        cy.get('.input-group--text .input--text').then((textInput) => {
           expect(textInput).to.exist;
           expect(textInput).to.have.attr('type').equal('text');
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

    it('input--text group has correct focus styles', () => {
        cy.get('.input-group--text .input--text').focus();
        cy.get('.input-group--text .input--text').should('have.css', 'border', `1px solid ${colorPrimary}`)
    });
});

describe('Forms / text input - disabled', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--text-inputs&args=state:disabled');
        // @ts-ignore
        cy.get('body').resetRealHover();
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

describe('Forms / text input - success', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--text-inputs&args=state:success');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('input--text group has correct success styles', () => {
        cy.get('.input-group--text .input--text').should('have.css', 'color', colorFont)
        cy.get('.input-group--text .input--text').should('have.css', 'border', `1px solid ${colorSuccess}`);
        cy.get('.input-group--text .input--text').should('have.css', 'outline', `${colorSuccess} solid 1px`);
    });
});

describe('Forms / text input - error', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--text-inputs&args=state:error');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('input--text group has correct success styles', () => {
        cy.get('.input-group--text .input--text').should('have.css', 'color', colorFont)
        cy.get('.input-group--text .input--text').should('have.css', 'border', `1px solid ${colorError}`);
        cy.get('.input-group--text .input--text').should('have.css', 'outline', `${colorError} solid 1px`);
    });
});

describe('Forms / text input - types', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--text-inputs&args=state:error');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('text inputs have correct types', () => {
        cy.get('.input-group--text .input--text').invoke('attr', 'type').should('eq', 'text');
        cy.get('.input-group--email .input--text').invoke('attr', 'type').should('eq', 'email');
        cy.get('.input-group--number .input--text').invoke('attr', 'type').should('eq', 'number');
        cy.get('.input-group--url .input--text').invoke('attr', 'type').should('eq', 'url');
        cy.get('.input-group--telephone .input--text').invoke('attr', 'type').should('eq', 'tel');
    });
});

export {}
