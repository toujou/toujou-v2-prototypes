/// <reference types="cypress" />
/// <reference types="cypress-real-events" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('Forms / text input [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-forms--text-inputs');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('input--text has correct styles', () => {
        cy.get('.input-group--text .input--text').then((textInput) => {
           expect(textInput).to.exist;
           expect(textInput).to.have.attr('type').equal('text');
           expect(textInput).to.have.css('position').equal('relative');
           expect(textInput).to.have.css('border').equal(`${tokens.border.normal} solid ${colors.colorFontLight}`);
           expect(textInput).to.have.css('background-color').equal(colors.colorBg);
           expect(textInput).to.have.css('padding').equal(`${tokens.spacing.m} ${tokens.spacing.s} ${tokens.spacing.s}`);
           expect(textInput).to.have.css('color').equal(colors.colorFont);
           expect(textInput).to.have.css('font-size').equal(tokens.type.size.normal);
           expect(textInput).to.have.css('font-weight').equal(tokens.type.fontWeight.normal);
        });
    });

    it('input--text group has correct hover styles', () => {
        cy.get('.input-group--text .input--text').realHover();
        cy.get('.input-group--text .input--text').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorFont}`)
    });

    it('input--text group has correct focus styles', () => {
        cy.get('.input-group--text .input--text').focus();
        cy.get('.input-group--text .input--text').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorPrimary}`)
    });
});

describe('Forms / text input - disabled [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-forms--text-inputs&args=state:disabled');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('input--text group has correct disabled styles', () => {
        cy.get('.input-group--text .input--text').invoke('attr', 'disabled').should('exist');
        cy.get('.input-group--text .input--text').should('have.css', 'color', colors.colorFontLight)
        cy.get('.input-group--text .input--text').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorFontLight}`);
        cy.get('.input-group--text .input--text').should('have.css', 'pointer-events', 'none');
    });

    it('input--text group has correct hover styles when disabled', () => {
        cy.get('.input-group--text .input--text').invoke('attr', 'disabled').should('exist');
        cy.get('.input-group--text .input--text').realHover();
        cy.get('.input-group--text .input--text').invoke('attr', 'disabled').should('exist');
    });
});

describe('Forms / text input - success [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-forms--text-inputs&args=state:success');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('input--text group has correct success styles', () => {
        cy.get('.input-group--text .input--text').should('have.css', 'color', colors.colorFont)
        cy.get('.input-group--text .input--text').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorSuccess}`);
        cy.get('.input-group--text .input--text').should('have.css', 'outline', `${colors.colorSuccess} solid ${tokens.border.normal}`);
    });
});

describe('Forms / text input - error [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-forms--text-inputs&args=state:error');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('input--text group has correct success styles', () => {
        cy.get('.input-group--text .input--text').should('have.css', 'color', colors.colorFont)
        cy.get('.input-group--text .input--text').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorError}`);
        cy.get('.input-group--text .input--text').should('have.css', 'outline', `${colors.colorError} solid ${tokens.border.normal}`);
    });
});

describe('Forms / text input - types [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
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
