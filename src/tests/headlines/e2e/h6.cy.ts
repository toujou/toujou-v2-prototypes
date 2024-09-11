/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('headline h6', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-headlines--headline-h-6');
    });

    it('has correct default styles', () => {
        cy.get('#storybook-root > h6:nth-child(1)').should('have.css', 'font-family', tokens.type.fontFamily.headline);
        cy.get('#storybook-root > h6:nth-child(1)').should('have.css', 'font-weight', tokens.type.fontWeight.headline);
        cy.get('#storybook-root > h6:nth-child(1)').should('have.css', 'font-size', tokens.type.size.ms);
        cy.get('#storybook-root > h6:nth-child(1)').should('have.css', 'margin', `0px`);
        cy.get('#storybook-root > h6:nth-child(1)').should('have.css', 'line-height', '25px');
        cy.get('#storybook-root > h6:nth-child(1)').should('have.css', 'text-decoration', `none solid ${colors.colorPrimary}`);
        cy.get('#storybook-root > h6:nth-child(1)').should('have.css', 'color', colors.colorPrimary);
    });

    it('has correct left alignment styles', () => {
        cy.get('#storybook-root > h6:nth-child(1)').should('have.css', 'text-align', `left`);
    });

    it('has correct center alignment styles', () => {
        cy.get('#storybook-root > h6:nth-child(2)').should('have.css', 'text-align', `center`);
    });

    it('has correct right alignment styles', () => {
        cy.get('#storybook-root > h6:nth-child(3)').should('have.css', 'text-align', `right`);
    });

    it('has correct default color', () => {
        cy.get('#storybook-root > h6:nth-child(1)').should('have.css', 'color', colors.colorPrimary);
    });

    it('has correct grey color', () => {
        cy.get('#storybook-root > h6:nth-child(4)').should('have.css', 'color', colors.colorFontLight);
    });

    it('has correct primary color', () => {
        cy.get('#storybook-root > h6:nth-child(5)').should('have.css', 'color', colors.colorPrimary);
    });

    it('has correct secondary color', () => {
        cy.get('#storybook-root > h6:nth-child(6)').should('have.css', 'color', colors.colorSecondary);
    });

    it('has correct font color', () => {
        cy.get('#storybook-root > h6:nth-child(7)').should('have.css', 'color', colors.colorFont);
    });

    it('has correct default size', () => {
        cy.get('#storybook-root > h6:nth-child(1)').should('have.css', 'font-size', tokens.type.size.ms);
    });

    it('has correct alpha size', () => {
        cy.get('#storybook-root > h6:nth-child(8)').should('have.css', 'font-size', tokens.type.size.xxxl);
    });

    it('has correct beta size', () => {
        cy.get('#storybook-root > h6:nth-child(9)').should('have.css', 'font-size', tokens.type.size.xxl);
    });

    it('has correct gamma size', () => {
        cy.get('#storybook-root > h6:nth-child(10)').should('have.css', 'font-size', tokens.type.size.xl);
    });

    it('has correct delta size', () => {
        cy.get('#storybook-root > h6:nth-child(11)').should('have.css', 'font-size', tokens.type.size.l);
    });

    it('has correct epsilon size', () => {
        cy.get('#storybook-root > h6:nth-child(12)').should('have.css', 'font-size', tokens.type.size.m);
    });

    it('has correct omega size', () => {
        cy.get('#storybook-root > h6:nth-child(13)').should('have.css', 'font-size', tokens.type.size.ms);
    });
})

export {}
