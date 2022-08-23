/// <reference types="cypress" />

const colorFont = Cypress.env('colorFont');
const colorPrimary = Cypress.env('colorPrimary');

describe('Forms / radio input', () => {
    beforeEach(() => {
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

    it.only('select input has correct styles', () => {
        cy.get('.radio-group').then((radioGroup) => {
            expect(radioGroup).to.have.css('display').equal('grid');
            expect(radioGroup).to.have.css('grid-gap').equal('0px 8px');
        });
        cy.get('.radio-group__option').then((radioGroupOption) => {
            expect(radioGroupOption).to.have.css('cursor').equal('pointer');
            expect(radioGroupOption).to.have.css('margin').equal('4px 0px');
        })
        cy.get('.radio-group__option-label').then((radioGroupOptionLabel) => {
            expect(radioGroupOptionLabel).to.have.css('display').equal('grid');
            expect(radioGroupOptionLabel).to.have.css('grid-gap').equal('8px 8px');
            expect(radioGroupOptionLabel).to.have.css('font-size').equal('16px');
            expect(radioGroupOptionLabel).to.have.css('color').equal(colorFont);
            expect(radioGroupOptionLabel).to.have.css('grid-column').equal('1 / -1');
        })
    });

    // it('select has correct hover styles', () => {
    //     cy.get('.select__wrapper .select').realHover();
    //     cy.get('.select__wrapper .select').should('have.css', 'border', `1px solid ${colorFont}`)
    // });
    //
    // it('select has correct focus styles', () => {
    //     cy.get('.select__wrapper .select').focus();
    //     cy.get('.select__wrapper .select').should('have.css', 'border', `1px solid ${colorPrimary}`)
    // });
});

// describe('Forms / radio input - disabled', () => {
//     beforeEach(() => {
//         cy.visit('/iframe.html?viewMode=story&id=components-forms--radio-inputs&args=state:disabled');
//         // @ts-ignore
//         cy.get('body').resetRealHover();
//     });
//
//     it('select has correct disabled styles', () => {
//         cy.get('.input-group--single-select').invoke('attr', 'class').should('contain', 'input-group--disabled');
//         cy.get('.input-group--single-select .select').should('have.css', 'color', colorFontLight)
//         cy.get('.input-group--single-select .select').should('have.css', 'border', `1px solid ${colorFontLight}`);
//         cy.get('.input-group--single-select .select').should('have.css', 'pointer-events', 'none');
//         // @ts-ignore
//         cy.get('.input-group--single-select .select__wrapper').after('background-color').should('eq', colorFontLight);
//     });
//
//     it('select has correct hover styles when disabled', () => {
//         cy.get('.input-group--single-select .select').invoke('attr', 'disabled').should('exist');
//         cy.get('.input-group--single-select .select').realHover();
//         cy.get('.input-group--single-select .select').invoke('attr', 'disabled').should('exist');
//         // @ts-ignore
//         cy.get('.input-group--single-select .select__wrapper').after('background-color').should('eq', colorFontLight);
//     });
// });
//
// describe('Forms / radio input - success', () => {
//     beforeEach(() => {
//         cy.visit('/iframe.html?viewMode=story&id=components-forms--radio-inputs&args=state:success');
//         // @ts-ignore
//         cy.get('body').resetRealHover();
//     });
//
//     it('input--text group has correct success styles', () => {
//         cy.get('.input-group--single-select .select').should('have.css', 'color', colorFont)
//         cy.get('.input-group--single-select .select').should('have.css', 'border', `1px solid ${colorSuccess}`);
//         cy.get('.input-group--single-select .select').should('have.css', 'outline', `${colorSuccess} solid 1px`);
//     });
// });
//
// describe('Forms / radio input - error', () => {
//     beforeEach(() => {
//         cy.visit('/iframe.html?viewMode=story&id=components-forms--radio-inputs&args=state:error');
//         // @ts-ignore
//         cy.get('body').resetRealHover();
//     });
//
//     it('input--text group has correct success styles', () => {
//         cy.get('.input-group--single-select .select').should('have.css', 'color', colorFont)
//         cy.get('.input-group--single-select .select').should('have.css', 'border', `1px solid ${colorError}`);
//         cy.get('.input-group--single-select .select').should('have.css', 'outline', `${colorError} solid 1px`);
//     });
// });

export {}
