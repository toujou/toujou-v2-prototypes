/// <reference types="cypress" />

describe('toujou-html-container [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-html--html');
    });

    it('has correct structure', () => {
        cy.get('toujou-html-container').should('have.prop', 'tagName').should('eq', 'TOUJOU-HTML-CONTAINER');
        cy.get('toujou-html-container').invoke('attr', 'class').should('eq', 'html-container');
        cy.get('toujou-html-container').invoke('attr', 'fullwidth').should('not.exist');

    });

    it('has correct styles', () => {
        cy.get('toujou-html-container').then((container) => {
            expect(container).to.have.css('width').eq('343px');
            expect(container).to.have.css('max-width').eq('1200px');
            expect(container).to.have.css('margin').eq('0px 16px');
            expect(container).to.have.css('display').eq('block');
        })
    });
})

export {}
