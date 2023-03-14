/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('toujou-html-container', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=tests-type-tests--single-headlines');
    });

    it('h1 headline has correct styles', () => {
        cy.get('.text-block h1').should('have.css', 'font-family', tokens.type.fontFamily.headline);
        cy.get('.text-block h1').should('have.css', 'font-weight', '600');
        cy.get('.text-block h1').should('have.css', 'font-size', tokens.type.size.xxxl);
        cy.get('.text-block h1').should('have.css', 'margin', `0px 0px ${tokens.spacing.l}`);
        cy.get('.text-block h1').should('have.css', 'line-height', '54px');
        cy.get('.text-block h1').should('have.css', 'text-decoration', `none solid ${colors.colorPrimary}`);
        cy.get('.text-block h1').should('have.css', 'color', colors.colorPrimary);
    });

    it('h2 headline has correct styles', () => {
        cy.get('.text-block h2').should('have.css', 'font-family', tokens.type.fontFamily.headline);
        cy.get('.text-block h2').should('have.css', 'font-weight', '600');
        cy.get('.text-block h2').should('have.css', 'font-size', tokens.type.size.xxl);
        cy.get('.text-block h2').should('have.css', 'margin', `${tokens.spacing.xl} 0px ${tokens.spacing.m}`);
        cy.get('.text-block h2').should('have.css', 'line-height', '45px');
        cy.get('.text-block h2').should('have.css', 'text-decoration', `none solid ${colors.colorPrimary}`);
        cy.get('.text-block h2').should('have.css', 'color', colors.colorPrimary);
    });

    it('h3 headline has correct styles', () => {
        cy.get('.text-block h3').should('have.css', 'font-family', tokens.type.fontFamily.headline);
        cy.get('.text-block h3').should('have.css', 'font-weight', '600');
        cy.get('.text-block h3').should('have.css', 'font-size', tokens.type.size.xl);
        cy.get('.text-block h3').should('have.css', 'margin', `${tokens.spacing.xl} 0px 20px`);
        cy.get('.text-block h3').should('have.css', 'line-height', '40px');
        cy.get('.text-block h3').should('have.css', 'text-decoration', `none solid ${colors.colorPrimary}`);
        cy.get('.text-block h3').should('have.css', 'color', colors.colorPrimary);
    });

    it('h4 headline has correct styles', () => {
        cy.get('.text-block h4').should('have.css', 'font-family', tokens.type.fontFamily.headline);
        cy.get('.text-block h4').should('have.css', 'font-weight', '600');
        cy.get('.text-block h4').should('have.css', 'font-size', tokens.type.size.l);
        cy.get('.text-block h4').should('have.css', 'margin', `${tokens.spacing.xl} 0px 20px`);
        cy.get('.text-block h4').should('have.css', 'line-height', '35px');
        cy.get('.text-block h4').should('have.css', 'text-decoration', `none solid ${colors.colorPrimary}`);
        cy.get('.text-block h4').should('have.css', 'color', colors.colorPrimary);
    });

    it('h5 headline has correct styles', () => {
        cy.get('.text-block h5').should('have.css', 'font-family', tokens.type.fontFamily.headline);
        cy.get('.text-block h5').should('have.css', 'font-weight', '600');
        cy.get('.text-block h5').should('have.css', 'font-size', tokens.type.size.m);
        cy.get('.text-block h5').should('have.css', 'margin', `${tokens.spacing.xl} 0px ${tokens.spacing.normal}`);
        cy.get('.text-block h5').should('have.css', 'line-height', '27px');
        cy.get('.text-block h5').should('have.css', 'text-decoration', `none solid ${colors.colorPrimary}`);
        cy.get('.text-block h5').should('have.css', 'color', colors.colorPrimary);
    });
})

export {}
