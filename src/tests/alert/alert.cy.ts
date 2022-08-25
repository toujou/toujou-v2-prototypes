/// <reference types="cypress" />

const colors = Cypress.env('colors');

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
        cy.get('toujou-alert').should('have.css', 'text-decoration', `none solid ${colors.colorFont}`);
        cy.get('toujou-alert').should('have.css', 'color', colors.colorFont);
    });
})

describe('table - primary', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-alert--alert');
    });

    it('has correct primary styles', () => {
        cy.get('toujou-alert').invoke('attr', 'alert-variant').should('eq', 'primary');
        cy.get('toujou-alert').should('have.css', 'border', `1px solid ${colors.colorPrimary}`);
        cy.get('toujou-alert').should('have.css', 'background-color', colors.colorPrimaryO10);
    });
})

describe('alert - secondary', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-alert--alert&args=alertVariant:secondary');
    });

    it('has correct secondary styles', () => {
        cy.get('toujou-alert').invoke('attr', 'alert-variant').should('eq', 'secondary');
        cy.get('toujou-alert').should('have.css', 'border', `1px solid ${colors.colorSecondaryDark}`);
        cy.get('toujou-alert').should('have.css', 'background-color', colors.colorSecondaryO10);
    });
})

describe('alert - warning', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-alert--alert&args=alertVariant:warning');
    });

    it('has correct warning styles', () => {
        cy.get('toujou-alert').invoke('attr', 'alert-variant').should('eq', 'warning');
        cy.get('toujou-alert').should('have.css', 'border', `1px solid ${colors.colorWarningDarken15}`);
        cy.get('toujou-alert').should('have.css', 'background-color', colors.colorWarningO25);
    });
})

describe('alert - error', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-alert--alert&args=alertVariant:error');
    });

    it('has correct warning styles', () => {
        cy.get('toujou-alert').invoke('attr', 'alert-variant').should('eq', 'error');
        cy.get('toujou-alert').should('have.css', 'border', `1px solid ${colors.colorErrorO25}`);
        cy.get('toujou-alert').should('have.css', 'background-color', colors.colorErrorDarken15);
    });
})

describe('alert - success', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-alert--alert&args=alertVariant:success');
    });

    it('has correct warning styles', () => {
        cy.get('toujou-alert').invoke('attr', 'alert-variant').should('eq', 'success');
        cy.get('toujou-alert').should('have.css', 'border', `1px solid ${colors.colorSuccessO25}`);
        cy.get('toujou-alert').should('have.css', 'background-color', colors.colorSuccessDarken15);
    });
})

export {}
