/// <reference types="cypress" />

const colorFontLight = Cypress.env('colorFontLight');

describe('Forms / input description', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--text-inputs');
    });

    it('has correct styles', () => {
        cy.get('.input-group--text .input-description').then((description) => {
            expect(description).to.have.prop('tagName').equal('SPAN');
            expect(description).to.have.css('order').equal('10');
            expect(description).to.have.css('margin').equal('8px 0px 0px');
            expect(description).to.have.css('padding').equal('0px 4px');
            expect(description).to.have.css('color').equal(colorFontLight);
            expect(description).to.have.css('font-size').equal('14px');
            expect(description).to.have.css('font-weight').equal('600');
            expect(description).to.have.css('grid-column').equal('1 / -1');
        });
    });

})

export {}
