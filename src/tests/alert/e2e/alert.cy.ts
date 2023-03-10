/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('alert', () => {
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
        cy.get('toujou-alert').should('have.css', 'font-size', tokens.type.size.normal);
        cy.get('toujou-alert').should('have.css', 'padding', `${tokens.spacing.s} ${tokens.spacing.normal}`);
        cy.get('toujou-alert').should('have.css', 'border-radius', tokens.borderRadius.normal);
        cy.get('toujou-alert').should('have.css', 'text-decoration', `none solid ${colors.colorFont}`);
        cy.get('toujou-alert').should('have.css', 'color', colors.colorFont);
    });
})

describe('alert - primary', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-alert--alert');
    });

    it('has correct primary styles', () => {
        cy.get('toujou-alert').invoke('attr', 'alert-variant').should('eq', 'primary');
        cy.get('toujou-alert').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorPrimary}`);
        cy.get('toujou-alert').should('have.css', 'background-color', colors.colorPrimaryO10);
    });
})

describe('alert - secondary', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-alert--alert&args=alertVariant:secondary');
    });

    it('has correct secondary styles', () => {
        cy.get('toujou-alert').invoke('attr', 'alert-variant').should('eq', 'secondary');
        cy.get('toujou-alert').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorSecondaryDark}`);
        cy.get('toujou-alert').should('have.css', 'background-color', colors.colorSecondaryO10);
    });
})

describe('alert - warning', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-alert--alert&args=alertVariant:warning');
    });

    it('has correct warning styles', () => {
        cy.get('toujou-alert').invoke('attr', 'alert-variant').should('eq', 'warning');
        cy.get('toujou-alert').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorWarningDarken15}`);
        cy.get('toujou-alert').should('have.css', 'background-color', colors.colorWarningO25);
    });
})

describe('alert - error', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-alert--alert&args=alertVariant:error');
    });

    it('has correct warning styles', () => {
        cy.get('toujou-alert').invoke('attr', 'alert-variant').should('eq', 'error');
        cy.get('toujou-alert').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorErrorDarken15}`);
        cy.get('toujou-alert').should('have.css', 'background-color', colors.colorErrorO25Alpha);
    });
})

describe('alert - success', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-alert--alert&args=alertVariant:success');
    });

    it('has correct success styles', () => {
        cy.get('toujou-alert').invoke('attr', 'alert-variant').should('eq', 'success');
        cy.get('toujou-alert').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorSuccessDarken15}`);
        cy.get('toujou-alert').should('have.css', 'background-color', colors.colorSuccessO25Alpha);
    });
})

describe('alert - info', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-alert--alert&args=alertVariant:info');
    });

    it('has correct info styles', () => {
        cy.get('toujou-alert').invoke('attr', 'alert-variant').should('eq', 'info');
        cy.get('toujou-alert').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorInfoDarken15}`);
        cy.get('toujou-alert').should('have.css', 'background-color', colors.colorInfoO25Alpha);
    });
})

export {}
