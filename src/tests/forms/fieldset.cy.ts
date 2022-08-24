/// <reference types="cypress" />

const colorFont = Cypress.env('colorFont');
const colorFontLight = Cypress.env('colorFontLight');
const colorPrimary = Cypress.env('colorPrimary');

describe('Forms / fieldset', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--fieldset');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('fieldset has correct structure', () => {
        cy.get('fieldset').invoke('attr', 'class').should('contain', 'fieldset');
        cy.get('fieldset .fieldset__legend').should('exist');
        cy.get('fieldset .input-group').should('exist');
    });

    it('fieldset has correct styles', () => {
        cy.get('.fieldset').then((fieldset) => {
            expect(fieldset).to.exist;
            expect(fieldset).to.have.css('padding').equal('16px');
            expect(fieldset).to.have.css('border').equal(`1px solid ${colorFontLight}`);
            expect(fieldset).to.have.css('border-radius').equal('4px');
            expect(fieldset).to.have.css('margin-top').equal('0px');
        });
        cy.get('.fieldset .fieldset__legend').then((fieldsetLegend) => {
            expect(fieldsetLegend).to.exist;
            expect(fieldsetLegend).to.have.css('color').equal(colorFont);
            expect(fieldsetLegend).to.have.css('font-size').equal('16px');
            expect(fieldsetLegend).to.have.css('font-weight').equal('600');
            expect(fieldsetLegend).to.have.css('padding').equal('0px 8px');
        });
    });

    it('fieldset has correct focus styles', () => {
        cy.get('.fieldset .input-group:last-child .input').focus();
        cy.get('.fieldset').should('have.css', 'border', `1px solid ${colorPrimary}`)
        cy.get('.fieldset__legend').should('have.css', 'color', colorPrimary)
    });
});

describe('Forms / fieldset - disabled', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--fieldset&args=state:disabled');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('fieldset has correct disabled styles', () => {
        cy.get('.fieldset').invoke('attr', 'class').should('contain', 'fieldset--disabled');
        cy.get('.fieldset').should('have.css', 'border', `1px solid ${colorFontLight}`);
        cy.get('.fieldset__legend').should('have.css', 'color', colorFontLight);
    });

    it('fieldset has correct hover styles when disabled', () => {
        cy.get('.fieldset').should('have.css', 'border', `1px solid ${colorFontLight}`);
        cy.get('.fieldset__legend').should('have.css', 'color', colorFontLight);
    });
});

describe('Forms / fieldset - success', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--fieldset&args=state:success');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('fieldset has correct success styles', () => {
        cy.get('.fieldset').should('have.css', 'border', `1px solid ${colorFontLight}`);
        cy.get('.fieldset__legend').should('have.css', 'color', colorFont);
    });
});

describe('Forms / fieldset - error', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--fieldset&args=state:error');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('fieldset has correct error styles', () => {
        cy.get('.fieldset').should('have.css', 'border', `1px solid ${colorFontLight}`);
        cy.get('.fieldset__legend').should('have.css', 'color', colorFont);
    });
});

export {}
