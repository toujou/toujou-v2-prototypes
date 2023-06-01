/// <reference types="cypress" />
/// <reference types="cypress-real-events" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('Forms / radio input [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-forms--radio-inputs');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct structure', () => {
        cy.get('.input-group--radio').invoke('prop', 'tagName').should('eq', 'TOUJOU-INPUT-GROUP');
        cy.get('.input-group--radio').invoke('prop', 'class').should('contain', 'radio-group');
        cy.get('.input-group--radio .radio-group__label').should('exist');
        cy.get('.input-group--radio .input-description').should('exist');
        cy.get('.input-group--radio .radio-group__option').should('exist');
        cy.get('.input-group--radio').children('.radio-group__option').should('have.length', 5);
        cy.get('.input-group--radio .form__error').should('exist');
    });

    it('select input has correct styles', () => {
        cy.get('.radio-group').then((radioGroup) => {
            expect(radioGroup).to.have.css('display').equal('grid');
            expect(radioGroup).to.have.css('grid-gap').equal(`0px ${tokens.spacing.s}`);
        });
        cy.get('.radio-group__option').then((radioGroupOption) => {
            expect(radioGroupOption).to.have.css('cursor').equal('pointer');
            expect(radioGroupOption).to.have.css('margin').equal(`${tokens.spacing.xs} 0px`);
        })
        cy.get('.radio-group__option-label').then((radioGroupOptionLabel) => {
            expect(radioGroupOptionLabel).to.have.css('display').equal('grid');
            expect(radioGroupOptionLabel).to.have.css('grid-gap').equal(`${tokens.spacing.s} ${tokens.spacing.s}`);
            expect(radioGroupOptionLabel).to.have.css('font-size').equal(tokens.type.size.normal);
            expect(radioGroupOptionLabel).to.have.css('color').equal(colors.colorFont);
            expect(radioGroupOptionLabel).to.have.css('grid-column').equal('1 / -1');
        })
    });

    it('select has correct hover styles', () => {
        cy.get('.radio-group__option:nth-child(3) .radio-group__option-label .radio').should('have.css', 'border', `${tokens.border.m} solid ${colors.colorPrimary}`);
        cy.get('.radio-group__option:nth-child(3) .radio-group__option-label .radio').realHover()
        cy.get('.radio-group__option:nth-child(3) .radio-group__option-label .radio').should('have.css', 'border', `${tokens.border.m} solid ${colors.colorPrimaryLight}`);
        cy.get('.radio-group__option:nth-child(4) .radio-group__option-label .radio').should('have.css', 'border', `${tokens.border.m} solid ${colors.colorFont}`);
        cy.get('.radio-group__option:nth-child(4) .radio-group__option-label .radio').realHover()
        cy.get('.radio-group__option:nth-child(4) .radio-group__option-label .radio').should('have.css', 'border', `${tokens.border.m} solid ${colors.colorPrimary}`);
    });

    it('select has correct focus styles', () => {
        cy.get('.radio-group__option:nth-child(3) .radio-group__option-label .radio').should('have.css', 'border', `${tokens.border.m} solid ${colors.colorPrimary}`);
        cy.get('.radio-group__option:nth-child(3) .radio-group__option-label .radio').should('have.css', 'outline', 'rgb(0, 0, 0) none 0px');
        cy.get('.radio-group__option:nth-child(3) .radio-group__option-label .radio').focus();
        cy.get('.radio-group__option:nth-child(3) .radio-group__option-label .radio').should('have.css', 'border', `${tokens.border.m} solid ${colors.colorPrimary}`);
        cy.get('.radio-group__option:nth-child(3) .radio-group__option-label .radio').should('have.css', 'outline', `${colors.colorPrimary} solid ${tokens.border.m}`);
        cy.get('.radio-group__option:nth-child(3) .radio-group__option-label .radio').should('have.css', 'outline-offset', '2px');
    });
});

describe('Forms / radio input - disabled [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-forms--radio-inputs&args=state:disabled');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('radio options have correct disabled styles', () => {
        cy.get('.input-group--radio').invoke('attr', 'class').should('contain', 'input-group--disabled');
        cy.get('.radio-group__option:nth-child(3) .radio-group__option-label .radio').should('have.css', 'border', `${tokens.border.m} solid ${colors.colorFontLight}`);
        cy.get('.radio-group__option:nth-child(3) .radio-group__option-label').should('have.css', 'color', colors.colorFont);
        cy.get('.radio-group__option:nth-child(3) .radio-group__option-label').should('have.css', 'pointer-events', 'none');
        cy.get('.radio-group__option:nth-child(4) .radio-group__option-label .radio').should('have.css', 'border', `${tokens.border.m} solid ${colors.colorFontLight}`);
        cy.get('.radio-group__option:nth-child(4) .radio-group__option-label').should('have.css', 'color', colors.colorFont);
        cy.get('.radio-group__option:nth-child(4) .radio-group__option-label').should('have.css', 'pointer-events', 'none');
    });

    it('radio options have correct hover styles when disabled', () => {
        cy.get('.radio-group__option:nth-child(3) .radio-group__option-label').realHover()
        cy.get('.radio-group__option:nth-child(3) .radio-group__option-label .radio').should('have.css', 'border', `${tokens.border.m} solid ${colors.colorFontLight}`);
        cy.get('.radio-group__option:nth-child(3) .radio-group__option-label').should('have.css', 'color', colors.colorFont);
        cy.get('.radio-group__option:nth-child(4) .radio-group__option-label').realHover()
        cy.get('.radio-group__option:nth-child(4) .radio-group__option-label .radio').should('have.css', 'border', `${tokens.border.m} solid ${colors.colorFontLight}`);
        cy.get('.radio-group__option:nth-child(4) .radio-group__option-label').should('have.css', 'color', colors.colorFont);
    });
});

describe('Forms / radio input - success [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-forms--radio-inputs&args=state:success');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('radio group has correct success styles', () => {
        cy.get('.input-group--radio').invoke('attr', 'class').should('contain', 'input-group--has-success');
        cy.get('.radio-group__option:nth-child(3) .radio-group__option-label .radio').should('have.css', 'border', `${tokens.border.m} solid ${colors.colorSuccess}`);
        cy.get('.radio-group__option:nth-child(3) .radio-group__option-label').should('have.css', 'color', colors.colorFont);
        cy.get('.radio-group__option:nth-child(4) .radio-group__option-label .radio').should('have.css', 'border', `${tokens.border.m} solid ${colors.colorFont}`);
        cy.get('.radio-group__option:nth-child(4) .radio-group__option-label').should('have.css', 'color', colors.colorFont);
    });
});

describe('Forms / radio input - error [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-forms--radio-inputs&args=state:error');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('radio group has correct error styles', () => {
        cy.get('.input-group--radio').invoke('attr', 'class').should('contain', 'input-group--has-error');
        cy.get('.radio-group__option:nth-child(3) .radio-group__option-label .radio').should('have.css', 'border', `${tokens.border.m} solid ${colors.colorError}`);
        cy.get('.radio-group__option:nth-child(3) .radio-group__option-label').should('have.css', 'color', colors.colorFont);
        // @ts-ignore
        cy.get('.radio-group__option:nth-child(3) .radio-group__option-label .radio').after('background-color').should('eq', colors.colorError);
        cy.get('.radio-group__option:nth-child(4) .radio-group__option-label .radio').should('have.css', 'border', `${tokens.border.m} solid ${colors.colorError}`);
        cy.get('.radio-group__option:nth-child(4) .radio-group__option-label').should('have.css', 'color', colors.colorFont);
        // @ts-ignore
        cy.get('.radio-group__option:nth-child(4) .radio-group__option-label .radio').after('background-color').should('eq', 'rgba(0, 0, 0, 0)');
        cy.get('.radio-group.input-group--has-error .form__error').should('have.css', 'display', 'block');
    });
});

export {}
