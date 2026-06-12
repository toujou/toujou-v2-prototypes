/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('Forms / input description', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--text-inputs');
    });

    it('has correct styles', () => {
        cy.get('.input-group--text .input-description').then((description) => {
            expect(description).to.have.prop('tagName').equal('SPAN');
            expect(description).to.have.css('order').equal('10');
            expect(description).to.have.css('margin').equal(`${tokens.spacing.s} 0px 0px`);
            expect(description).to.have.css('padding').equal(`0px ${tokens.spacing.xs}`);
            expect(description).to.have.css('color').equal(colors.colorFont);
            expect(description).to.have.css('font-size').equal(tokens.type.size.s);
            expect(description).to.have.css('font-weight').equal(tokens.type.fontWeight.normal);
            expect(description).to.have.css('grid-column').equal('1 / -1');
        });
    });

})

export {}
