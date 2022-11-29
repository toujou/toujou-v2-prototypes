/// <reference types="cypress" />

describe('toujou-html-container', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-html--html');
    });

    it('has correct structure', () => {
        cy.get('toujou-html-container').should('have.prop', 'tagName').should('eq', 'TOUJOU-HTML-CONTAINER');
        cy.get('toujou-html-container').invoke('attr', 'class').should('eq', 'html-container');
        cy.get('toujou-html-container').invoke('attr', 'fullwidth').should('not.exist');

    });

    it('has correct styles', () => {
        cy.get('toujou-html-container').then((container) => {
            expect(container).to.have.css('width').eq('944px');
            expect(container).to.have.css('max-width').eq('944px');
            expect(container).to.have.css('margin').eq('0px 488px');
            expect(container).to.have.css('display').eq('block');
        })
    });
})

export {}
