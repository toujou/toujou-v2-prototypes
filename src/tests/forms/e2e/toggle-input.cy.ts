/// <reference types="cypress" />
/// <reference types="cypress-real-events" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('Forms / toggle input', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--toggle-inputs');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct structure', () => {
        cy.get('.input-group--toggle').invoke('prop', 'tagName').should('eq', 'TOUJOU-INPUT-GROUP');
        cy.get('.input-group--toggle .toggle-group').should('exist');
        cy.get('.input-group--toggle .toggle-group .toggle').should('exist');
        cy.get('.input-group--toggle .toggle-group .toggle-group__label').should('exist');
        cy.get('.input-group--toggle .toggle-group .input-description').should('exist');
        cy.get('.input-group--toggle .toggle-group .form__error').should('exist');
    });

    it('has correct styles', () => {
        cy.get('.input-group--toggle .toggle-group').then((toggleGroup) => {
            expect(toggleGroup).to.have.css('display').equal('grid');
            expect(toggleGroup).to.have.css('grid-gap').equal(`0px ${tokens.spacing.s}`);
        });
        cy.get('.input-group--toggle .toggle-group .toggle').then((toggle) => {
            expect(toggle).to.have.css('appearance').equal('none');
            expect(toggle).to.have.css('height').equal(tokens.spacing.normal);
            expect(toggle).to.have.css('width').equal('28px');
            expect(toggle).to.have.css('position').equal('relative');
        });
        // @ts-ignore
        cy.get('.input-group--toggle .toggle-group .toggle').before('position').should('eq', 'absolute');
        // @ts-ignore
        cy.get('.input-group--toggle .toggle-group .toggle').before('top').should('eq', tokens.spacing.s);
        // @ts-ignore
        cy.get('.input-group--toggle .toggle-group .toggle').before('display').should('eq', 'block');
        // @ts-ignore
        cy.get('.input-group--toggle .toggle-group .toggle').before('width').should('eq', '28px');
        // @ts-ignore
        cy.get('.input-group--toggle .toggle-group .toggle').before('height').should('eq', '10px');
        // @ts-ignore
        cy.get('.input-group--toggle .toggle-group .toggle').before('border-radius').should('eq', '5px');
        // @ts-ignore
        cy.get('.input-group--toggle .toggle-group .toggle').before('background-color').should('eq', colors.colorFontLight);
        // @ts-ignore
        cy.get('.input-group--toggle .toggle-group .toggle').after('display').should('eq', 'block');
        // @ts-ignore
        cy.get('.input-group--toggle .toggle-group .toggle').after('position').should('eq', 'absolute');
        // @ts-ignore
        cy.get('.input-group--toggle .toggle-group .toggle').after('width').should('eq', tokens.spacing.normal);
        // @ts-ignore
        cy.get('.input-group--toggle .toggle-group .toggle').after('height').should('eq', tokens.spacing.normal);
        // @ts-ignore
        cy.get('.input-group--toggle .toggle-group .toggle').after('border-radius').should('eq', tokens.borderRadius.circle);
        // @ts-ignore
        cy.get('.input-group--toggle .toggle-group .toggle').after('background-color').should('eq', colors.colorFont);
    });

    it('select has correct hover styles', () => {
        // @ts-ignore
        cy.get('.input-group--toggle .toggle-group .toggle').before('background-color').should('eq', colors.colorFontLight);
        // @ts-ignore
        cy.get('.input-group--toggle .toggle-group .toggle').after('background-color').should('eq', colors.colorFont);
        cy.get('.input-group--toggle .toggle-group .toggle').realHover();
        // @ts-ignore
        cy.get('.input-group--toggle .toggle-group .toggle').before('background-color').should('eq', colors.colorFontLight);
        // @ts-ignore
        cy.get('.input-group--toggle .toggle-group .toggle').after('background-color').should('eq', colors.colorPrimary);
    });

    it('has correct checked styles', () => {
        // @ts-ignore
        cy.get('.input-group--toggle .toggle-group .toggle').before('background-color').should('eq', colors.colorFontLight);
        // @ts-ignore
        cy.get('.input-group--toggle .toggle-group .toggle').after('background-color').should('eq', colors.colorFont);
        cy.get('.input-group--toggle .toggle-group .toggle').click();
        // @ts-ignore
        cy.get('.input-group--toggle .toggle-group .toggle').before('background-color').should('eq', colors.colorPrimaryLight);
        // @ts-ignore
        cy.get('.input-group--toggle .toggle-group .toggle').after('background-color').should('eq', colors.colorPrimary);
        cy.get('.input-group--toggle .toggle-group .toggle').realHover();
        // @ts-ignore
        cy.get('.input-group--toggle .toggle-group .toggle').before('background-color').should('eq', colors.colorPrimaryLight);
        // @ts-ignore
        cy.get('.input-group--toggle .toggle-group .toggle').after('background-color').should('eq', colors.colorPrimaryDark);
    });

    it('select has correct focus styles', () => {
        cy.get('.input-group--toggle .toggle-group .toggle').should('have.css', 'outline', 'rgb(0, 0, 0) none 0px');
        cy.get('.input-group--toggle .toggle-group .toggle').focus();
        cy.get('.input-group--toggle .toggle-group .toggle').should('have.css', 'outline', `${colors.colorPrimary} solid 2px`);
    });
});

describe('Forms / toggle - disabled', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--toggle-inputs&args=isDisabled:true');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('checkbox has correct disabled styles', () => {
        // @ts-ignore
        cy.get('.input-group--toggle .toggle-group .toggle').before('background-color').should('eq', colors.colorFontO20);
        // @ts-ignore
        cy.get('.input-group--toggle .toggle-group .toggle').after('background-color').should('eq', colors.colorFontLight);
    });

    it('checkbox has correct hover styles when disabled', () => {
        cy.get('.input-group--toggle .toggle-group .toggle').realHover();
        // @ts-ignore
        cy.get('.input-group--toggle .toggle-group .toggle').before('background-color').should('eq', colors.colorFontO20);
        // @ts-ignore
        cy.get('.input-group--toggle .toggle-group .toggle').after('background-color').should('eq', colors.colorFontLight);
    });
});

export {}
