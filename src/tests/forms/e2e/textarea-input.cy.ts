/// <reference types="cypress" />
/// <reference types="cypress-real-events" />

const colors = Cypress.env('colors');

describe('Forms / textarea', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--textarea-inputs');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('textarea has correct styles', () => {
        cy.get('.input-group--textarea .input--textarea').then((textInput) => {
            expect(textInput).to.exist;
            expect(textInput).to.have.css('position').equal('relative');
            expect(textInput).to.have.css('border').equal(`1px solid ${colors.colorFontLight}`);
            expect(textInput).to.have.css('background-color').equal(colors.colorBg);
            expect(textInput).to.have.css('padding').equal('24px 8px 8px');
            expect(textInput).to.have.css('color').equal(colors.colorFont);
            expect(textInput).to.have.css('font-size').equal('16px');
            expect(textInput).to.have.css('font-weight').equal('600');
        });
        cy.get('.input-group--textarea .input--textarea').realHover();
        cy.get('.input-group--textarea .input--textarea').should('have.css', 'border', `1px solid ${colors.colorFont}`)
    });

    it('textarea has correct hover styles', () => {
        cy.get('.input-group--textarea .input--textarea').realHover();
        cy.get('.input-group--textarea .input--textarea').should('have.css', 'border', `1px solid ${colors.colorFont}`)
    });

    it('textarea has correct focus styles', () => {
        cy.get('.input-group--textarea .input--textarea').focus();
        cy.get('.input-group--textarea .input--textarea').should('have.css', 'border', `1px solid ${colors.colorPrimary}`)
    });
});

describe('Forms / textarea - disabled', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--textarea-inputs&args=state:disabled');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('textarea has correct disabled styles', () => {
        cy.get('.input-group--textarea .input--textarea').invoke('attr', 'disabled').should('exist');
        cy.get('.input-group--textarea .input--textarea').should('have.css', 'color', colors.colorFontLight)
        cy.get('.input-group--textarea .input--textarea').should('have.css', 'border', `1px solid ${colors.colorFontLight}`);
        cy.get('.input-group--textarea .input--textarea').should('have.css', 'pointer-events', 'none');
    });

    it('textarea has correct hover styles when disabled', () => {
        cy.get('.input-group--textarea .input--textarea').invoke('attr', 'disabled').should('exist');
        cy.get('.input-group--textarea .input--textarea').realHover();
        cy.get('.input-group--textarea .input--textarea').invoke('attr', 'disabled').should('exist');
    });
});

describe('Forms / textarea - success', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--textarea-inputs&args=state:success');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('textarea has correct success styles', () => {
        cy.get('.input-group--textarea .input--textarea').should('have.css', 'color', colors.colorFont)
        cy.get('.input-group--textarea .input--textarea').should('have.css', 'border', `1px solid ${colors.colorSuccess}`);
        cy.get('.input-group--textarea .input--textarea').should('have.css', 'outline', `${colors.colorSuccess} solid 1px`);
    });
});

describe('Forms / textarea - error', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--textarea-inputs&args=state:error');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('textarea has correct success styles', () => {
        cy.get('.input-group--textarea .input--textarea').should('have.css', 'color', colors.colorFont)
        cy.get('.input-group--textarea .input--textarea').should('have.css', 'border', `1px solid ${colors.colorError}`);
        cy.get('.input-group--textarea .input--textarea').should('have.css', 'outline', `${colors.colorError} solid 1px`);
    });
});

export {}
