/// <reference types="cypress" />

describe('toujou-html-container fullwidth [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-html--html&args=isFullwidth:true');
    });

    it('has correct structure', () => {
        cy.get('toujou-html-container').should('have.prop', 'tagName').should('eq', 'TOUJOU-HTML-CONTAINER');
        cy.get('toujou-html-container').invoke('attr', 'class').should('eq', 'html-container');
        cy.get('toujou-html-container').invoke('attr', 'fullwidth').should('exist');

    });

    it('has correct styles', () => {
        cy.get('toujou-html-container').then((container) => {
            expect(container).to.have.css('width').eq('375px');
            expect(container).to.have.css('max-width').eq('100%');
            expect(container).to.have.css('margin').eq('0px');
            expect(container).to.have.css('display').eq('block');
        })
    });
})

export {}
