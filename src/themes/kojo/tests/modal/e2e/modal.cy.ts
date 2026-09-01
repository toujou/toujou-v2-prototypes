/// <reference types="cypress" />

// const colors = Cypress.env('colors');

describe('modal', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-modal--modal');
    });

    it('has correct attributes', () => {
        cy.get('body p a').click();

        cy.get(`toujou-modal`).then((modalEl) => {
            expect(modalEl).to.have.prop('tagName').equal('TOUJOU-MODAL');
            expect(modalEl).to.have.attr('id').equal('toujou-modal--2094889675');
            expect(modalEl).to.have.attr('opened').equal('')
            expect(modalEl).to.have.attr('visible').equal('');
        })
    });
})

export {}
