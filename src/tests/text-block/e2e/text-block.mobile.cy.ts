/// <reference types="cypress" />

describe('text block [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=test-id="text-block-default"');
    });

    it('has correct class and tag name', () => {
        cy.get('toujou-text-block').should('have.prop', 'tagName').should('eq', 'TOUJOU-TEXT-BLOCK');
        cy.get('toujou-text-block').invoke('attr', 'class').should('eq', 'text-block');
    });

    it('default text-block has correct styles', () => {
        cy.get('.text-block[test-id="text-block-default"]').should('have.css', 'display', 'grid');
        cy.get('.text-block[test-id="text-block-default"]').should('have.css', 'grid-template-columns', '296px');
        cy.get('.text-block[test-id="text-block-default"]').should('have.css', 'width', '296px');
        cy.get('.text-block[test-id="text-block-default"]').should('have.css', 'height', '178px');
        cy.get('.text-block[test-id="text-block-default"]').should('have.css', 'margin', '48px 16px 0px');
    });

    it('has correct styles when it comes after another element', () => {
        cy.get('.text-block[test-id="text-block-after-another-text-block"]').should('have.css', 'margin', '32px 16px 0px');
    });

    it('has correct styles when it first-child inside another element', () => {
        cy.get('.text-block[test-id="text-block-inside-a-chapter"]').should('have.css', 'margin', '0px 16px');
    });
})

export {}
