/// <reference types="cypress" />
/// <reference types="cypress-axe" />

const tokens = Cypress.env('tokens');
const colors = Cypress.env('colors');

describe('a11y-info', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-a11yinfo--a-11-y-info');
    });

    it('should exist and have correct tag', () => {
        cy.get('.a11y-info').should('exist');
        cy.get('.a11y-info').then($el => {
            expect($el[0].tagName).to.eq('SECTION');
        });
    });

    it('should have correct attributes', () => {
        cy.get('.a11y-info').should('have.attr', 'tabindex', '0');
        cy.get('.a11y-info').should('have.attr', 'aria-label', 'Accessibility information');
        cy.get('.a11y-info').should('have.attr', 'class', 'a11y-info');
    });

    it('should be hidden by default and visible on focus', () => {
        cy.get('.a11y-info').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, -335.5)');
        cy.get('.a11y-info').focus().should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, -335.5)');
    });

    it('should have correct internal structure', () => {
        cy.get('.a11y-info__headline').should('contain.text', 'Keyboard shortcuts');
        cy.get('.a11y-info__description').should('exist');
        cy.get('.a11y-info__list').should('exist');
        cy.get('.a11y-info__item').should('have.length', 5);
        cy.get('.a11y-info__item').each($item => {
            expect($item.text()).to.match(/(Alt|Home|End)/);
        });
    });

    it('should have correct styling on focus', () => {
        cy.get('.a11y-info').focus().then($el => {
            cy.wrap($el).should('have.css', 'background-color', colors.colorPrimary);
            cy.get('.a11y-info__item').each($item => {
                cy.wrap($item).should('have.css', 'color', colors.colorBg);
                cy.wrap($item).should('have.css', 'font-size', tokens.type.size.normal);
            });
        });
    });
});

export {};
