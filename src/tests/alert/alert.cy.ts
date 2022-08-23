/// <reference types="cypress" />

const colorFont = Cypress.env('colorFont');
const colorPrimary = Cypress.env('colorPrimary');
const colorPrimaryO10 = Cypress.env('colorPrimaryO10');
const colorSecondaryDark = Cypress.env('colorSecondaryDark');
const colorSecondaryO10 = Cypress.env('colorSecondaryO10');
const colorWarningDarken15 = Cypress.env('colorWarningDarken15');
const colorWarningO25 = Cypress.env('colorWarningO25');
const colorErrorO25 = Cypress.env('colorErrorO25');
const colorErrorDarken15 = Cypress.env('colorErrorDarken15');
const colorSuccessO25 = Cypress.env('colorSuccessO25');
const colorSuccessDarken15 = Cypress.env('colorSuccessDarken15');

describe('table', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-alert--alert');
    });

    it('has correct class and tag name', () => {
        cy.get('toujou-alert').should('have.prop', 'tagName').should('eq', 'TOUJOU-ALERT');
        cy.get('toujou-alert').invoke('attr', 'class').should('eq', 'alert');
    });

    it('has correct attributes', () => {
        cy.get('toujou-alert').should('have.prop', 'role').should('eq', 'alert');
        cy.get('toujou-alert').invoke('attr', 'alert-variant').should('eq', 'primary');
    });

    it('has correct styles', () => {
        cy.get('toujou-alert').should('have.css', 'display', 'flex');
        cy.get('toujou-alert').should('have.css', 'font-size', '16px');
        cy.get('toujou-alert').should('have.css', 'padding', '8px 16px');
        cy.get('toujou-alert').should('have.css', 'border-radius', '4px');
        cy.get('toujou-alert').should('have.css', 'text-decoration', `none solid ${colorFont}`);
        cy.get('toujou-alert').should('have.css', 'color', colorFont);
    });
})

describe('table - primary', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-alert--alert');
    });

    it('has correct primary styles', () => {
        cy.get('toujou-alert').invoke('attr', 'alert-variant').should('eq', 'primary');
        cy.get('toujou-alert').should('have.css', 'border', `1px solid ${colorPrimary}`);
        cy.get('toujou-alert').should('have.css', 'background-color', colorPrimaryO10);
    });
})

describe('alert - secondary', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-alert--alert&args=alertVariant:secondary');
    });

    it('has correct secondary styles', () => {
        cy.get('toujou-alert').invoke('attr', 'alert-variant').should('eq', 'secondary');
        cy.get('toujou-alert').should('have.css', 'border', `1px solid ${colorSecondaryDark}`);
        cy.get('toujou-alert').should('have.css', 'background-color', colorSecondaryO10);
    });
})

describe('alert - warning', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-alert--alert&args=alertVariant:warning');
    });

    it('has correct warning styles', () => {
        cy.get('toujou-alert').invoke('attr', 'alert-variant').should('eq', 'warning');
        cy.get('toujou-alert').should('have.css', 'border', `1px solid ${colorWarningDarken15}`);
        cy.get('toujou-alert').should('have.css', 'background-color', colorWarningO25);
    });
})

describe('alert - error', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-alert--alert&args=alertVariant:error');
    });

    it('has correct warning styles', () => {
        cy.get('toujou-alert').invoke('attr', 'alert-variant').should('eq', 'error');
        cy.get('toujou-alert').should('have.css', 'border', `1px solid ${colorErrorO25}`);
        cy.get('toujou-alert').should('have.css', 'background-color', colorErrorDarken15);
    });
})

describe('alert - success', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-alert--alert&args=alertVariant:success');
    });

    it('has correct warning styles', () => {
        cy.get('toujou-alert').invoke('attr', 'alert-variant').should('eq', 'success');
        cy.get('toujou-alert').should('have.css', 'border', `1px solid ${colorSuccessO25}`);
        cy.get('toujou-alert').should('have.css', 'background-color', colorSuccessDarken15);
    });
})

export {}
