/// <reference types="cypress" />

const colors = Cypress.env('colors');

describe('divider', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-divider--divider');
    });

    it('has correct class', () => {
        cy.get('hr').invoke('attr', 'class').should('eq', 'divider');
    });

    it('has correct size', () => {
        cy.get('.divider').should('have.css', 'height', '4px');
        cy.get('.divider').should('have.css', 'width', '120px');
    });

    it('has correct margins', () => {
        cy.get('.divider').should('have.css', 'margin-top', '60px');
        cy.get('.divider').should('have.css', 'margin-bottom', '60px');
    });

    it('has correct primary color', () => {
        cy.get('.divider').should('have.css', 'background-color', colors.colorPrimary);
    });
})

describe('divider - type background', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-divider--divider&args=dividerType:background');
    });

    it('has correct background color', () => {
        cy.get('.divider').should('have.css', 'background-color', colors.colorBg);
    });
})

describe('divider - type primary', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-divider--divider&args=dividerType:primary');
    });

    it('has correct primary color', () => {
        cy.get('.divider').should('have.css', 'background-color', colors.colorPrimary);
    });
})

describe('divider - type secondary', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-divider--divider&args=dividerType:secondary');
    });

    it('has correct secondary color', () => {
        cy.get('.divider').should('have.css', 'background-color', colors.colorSecondary);
    });
})

describe('divider - type grey', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-divider--divider&args=dividerType:grey');
    });

    it('has correct grey color', () => {
        cy.get('.divider').should('have.css', 'background-color', colors.colorFontLight);
    });
})


export {}
