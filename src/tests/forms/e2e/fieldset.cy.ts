/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

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
            expect(fieldset).to.have.css('padding').equal(tokens.spacing.normal);
            expect(fieldset).to.have.css('border').equal(`${tokens.border.normal} solid ${colors.colorFontLight}`);
            expect(fieldset).to.have.css('border-radius').equal(tokens.borderRadius.normal);
            expect(fieldset).to.have.css('margin-top').equal('0px');
        });
        cy.get('.fieldset .fieldset__legend').then((fieldsetLegend) => {
            expect(fieldsetLegend).to.exist;
            expect(fieldsetLegend).to.have.css('color').equal(colors.colorFont);
            expect(fieldsetLegend).to.have.css('font-size').equal(tokens.type.size.normal);
            expect(fieldsetLegend).to.have.css('font-weight').equal(tokens.type.fontWeight.normal);
            expect(fieldsetLegend).to.have.css('padding').equal(`0px ${tokens.spacing.s}`);
        });
    });

    it('fieldset has correct focus styles', () => {
        cy.get('.fieldset .input-group:last-child .input').focus();
        cy.get('.fieldset').should('have.css', 'border', `1px solid ${colors.colorPrimary}`)
        cy.get('.fieldset__legend').should('have.css', 'color', colors.colorPrimary)
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
        cy.get('.fieldset').should('have.css', 'border', `1px solid ${colors.colorFontLight}`);
        cy.get('.fieldset__legend').should('have.css', 'color', colors.colorFontLight);
    });

    it('fieldset has correct hover styles when disabled', () => {
        cy.get('.fieldset').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorFontLight}`);
        cy.get('.fieldset__legend').should('have.css', 'color', colors.colorFontLight);
    });
});

describe('Forms / fieldset - success', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--fieldset&args=state:success');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('fieldset has correct success styles', () => {
        cy.get('.fieldset').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorFontLight}`);
        cy.get('.fieldset__legend').should('have.css', 'color', colors.colorFont);
    });
});

describe('Forms / fieldset - error', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--fieldset&args=state:error');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('fieldset has correct error styles', () => {
        cy.get('.fieldset').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorFontLight}`);
        cy.get('.fieldset__legend').should('have.css', 'color', colors.colorFont);
    });
});

export {}
