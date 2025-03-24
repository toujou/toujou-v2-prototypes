/// <reference types="cypress" />

const tokens = Cypress.env('tokens');

describe('Forms / form navigation', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--form-navigation');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct properties and styles', () => {
        cy.get('.form-navigation').then((formNav) => {
            expect(formNav).to.have.attr('role').eq('toolbar');
        });
        cy.get('.form-navigation .form-navigation__submit').should('exist');
        cy.get('.form-navigation .form-navigation__submit .button.form-navigation__button').should('exist');
        cy.get('.form-navigation .form-navigation__submit .form-navigation__button[type="submit"]').invoke('attr', 'button-variant').should('eq', 'primary');
        cy.get('.form-navigation .form-navigation__submit .form-navigation__button[type="submit"]').invoke('attr', 'button-size').should('eq', 'normal');
        cy.get('.form-navigation .form-navigation__submit .form-navigation__button[type="submit"]').invoke('attr', 'button-type').should('eq', 'default');
        cy.get('.form-navigation .form-navigation__previous').should('exist');
        cy.get('.form-navigation .form-navigation__previous .button.form-navigation__button').should('exist');
        cy.get('.form-navigation .form-navigation__previous .form-navigation__button[type="submit"]').invoke('attr', 'button-variant').should('eq', 'primary');
        cy.get('.form-navigation .form-navigation__previous .form-navigation__button[type="submit"]').invoke('attr', 'button-size').should('eq', 'normal');
        cy.get('.form-navigation .form-navigation__previous .form-navigation__button[type="submit"]').invoke('attr', 'button-type').should('eq', 'border');
        cy.get('.form-navigation').should('have.css', 'display', 'flex');
        cy.get('.form-navigation').should('have.css', 'flex-direction', 'column-reverse');
        cy.get('.form-navigation').should('have.css', 'justify-content', 'flex-start');
        cy.get('.form-navigation').should('have.css', 'gap', tokens.spacing.normal);
        cy.get('.form-navigation').should('have.css', 'margin', `${tokens.spacing.m} 0px`);
    });
});

export {}
