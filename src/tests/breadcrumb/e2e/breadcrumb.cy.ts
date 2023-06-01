/// <reference types="cypress" />
/// <reference types="cypress-real-events" />

const colors = Cypress.env('colors');

describe('toujou-breadcrumb [desktop]', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-breadcrumb--breadcrumb');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct role', () => {
        cy.get('toujou-breadcrumb').invoke('attr', 'role').should('eq', 'navigation');
    });

    it('has correct aria-label', () => {
        cy.get('toujou-breadcrumb').invoke('attr', 'aria-label').should('eq', 'Breadcrumb');
    });

    it('has correct number of items', () => {
        cy.get('toujou-breadcrumb .breadcrumb__list').children().should('have.length', 7);
    });

    it('last item is selected', () => {
        cy.get('toujou-breadcrumb .breadcrumb__item:last-child .breadcrumb__link').invoke('attr', 'aria-current').should('eq', 'page');
        cy.get('toujou-breadcrumb .breadcrumb__item:last-child .breadcrumb__link').should('have.css', 'color', colors.colorPrimary);
        cy.get('toujou-breadcrumb .breadcrumb__item:last-child .breadcrumb__link').should('have.css', 'pointer-events', 'none');
    });

    it('nav items have correct hover styles', () => {
        cy.get('toujou-breadcrumb .breadcrumb__item:first-child .breadcrumb__link').should('have.css', 'color', colors.colorFont);
        cy.get('toujou-breadcrumb .breadcrumb__item:first-child .breadcrumb__link').realHover();
        cy.get('toujou-breadcrumb .breadcrumb__item:first-child .breadcrumb__link').should('have.css', 'color', colors.colorPrimary);
    });

    it('first item has "hover" icon', () => {
        // @ts-ignore
        cy.get('toujou-breadcrumb .breadcrumb__item:first-child').before('-webkit-mask-image').should('contain', 'home-smooth');
    });

    it('buttons are hidden', () => {
        cy.get('.breadcrumb__toggle.breadcrumb__toggle--open').should('have.css', 'display', 'none');
        cy.get('.breadcrumb__toggle.breadcrumb__toggle--close').should('have.css', 'display', 'none');
    });

    it('does not have "ismobile" attribute', () => {
        cy.get('toujou-breadcrumb').invoke('attr', 'ismobile').should('not.exist');
    });
})

export {}
