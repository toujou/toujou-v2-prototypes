/// <reference types="cypress" />

const colorBg = Cypress.env('colorBg');
const colorPrimary = Cypress.env('colorPrimary');

describe('Forms / required inputs', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--submit');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct properties and styles', () => {
        cy.get('.button').then((button) => {
            expect(button).to.have.attr('button-variant').eq('primary');
            expect(button).to.have.attr('button-size').eq('normal');
            expect(button).to.have.attr('button-type').eq('default');
            expect(button).to.have.attr('type').eq('submit');
            expect(button).to.have.attr('is').eq('toujou-button');
            expect(button).to.have.text('Submit');
            expect(button).to.have.css('background-color').eq(colorPrimary);
            expect(button).to.have.css('color').eq(colorBg);
        })
    });
});

export {}
