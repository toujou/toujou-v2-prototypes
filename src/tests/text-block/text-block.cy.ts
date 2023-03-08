/// <reference types="cypress" />

describe('alert', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=tests-text-blocks--text-blocks');
    });

    it('has correct class and tag name', () => {
        cy.get('toujou-text-block').should('have.prop', 'tagName').should('eq', 'TOUJOU-TEXT-BLOCK');
        cy.get('toujou-text-block').invoke('attr', 'class').should('eq', 'text-block');
    });

    it('default text-block has correct styles', () => {
        cy.get('.text-block[test-id="text-block-default"]').should('have.css', 'display', 'grid');
        cy.get('.text-block[test-id="text-block-default"]').should('have.css', 'grid-template-columns', '1200px');
        cy.get('.text-block[test-id="text-block-default"]').should('have.css', 'width', '1200px');
        cy.get('.text-block[test-id="text-block-default"]').should('have.css', 'height', '86px');
        cy.get('.text-block[test-id="text-block-default"]').should('have.css', 'margin', '96px 344px 0px');
    });

    it('has correct styles when it comes after another element', () => {
        cy.get('.text-block[test-id="text-block-after-another-text-block"]').should('have.css', 'margin', '32px 344px 0px');
    });

    it('has correct styles when it first-child inside another element', () => {
        cy.get('.text-block[test-id="text-block-inside-a-chapter"]').should('have.css', 'margin', '0px 224px');
    });
})

export {}
