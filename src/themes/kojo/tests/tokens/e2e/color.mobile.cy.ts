/// <reference types="cypress" />

const colors = Cypress.env('colors');

describe('Tokens - color primary [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=tokens-color--primary-color');
    });

    it('has correct values for the primary color variables', () => {
        cy.get('.tokens-demo__color-stripe.bg-color-primary').should('have.css', 'background-color', colors.colorPrimary);
        cy.get('.tokens-demo__color-stripe.bg-color-primary-light').should('have.css', 'background-color', colors.colorPrimaryLight);
        cy.get('.tokens-demo__color-stripe.bg-color-primary-dark').should('have.css', 'background-color', colors.colorPrimaryDark);
    });
})

describe('Tokens - color secondary [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=tokens-color--secondary-color');
    });

    it('has correct values for the secondary color variables', () => {
        cy.get('.tokens-demo__color-stripe.bg-color-secondary').should('have.css', 'background-color', colors.colorSecondary);
        cy.get('.tokens-demo__color-stripe.bg-color-secondary-light').should('have.css', 'background-color', colors.colorSecondaryLight);
        cy.get('.tokens-demo__color-stripe.bg-color-secondary-dark').should('have.css', 'background-color', colors.colorSecondaryDark);
    });
})

describe('Tokens - color font [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=tokens-color--font-color');
    });

    it('has correct values for the font color variables', () => {
        cy.get('.tokens-demo__color-stripe.bg-color-font').should('have.css', 'background-color', colors.colorFont);
        cy.get('.tokens-demo__color-stripe.bg-color-font-light').should('have.css', 'background-color', colors.colorFontLight);
        cy.get('.tokens-demo__color-stripe.bg-color-font-dark').should('have.css', 'background-color', colors.colorFontDark);
    });
})

describe('Tokens - color extra [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=tokens-color--color-extra');
    });

    it('has correct values for the extra color variables', () => {
        cy.get('.tokens-demo__color-stripe.bg-color-black-o-75').should('have.css', 'background-color', colors.colorBlackO75);
        cy.get('.tokens-demo__color-stripe.bg-color-black-o-50').should('have.css', 'background-color', colors.colorBlackO50);
        cy.get('.tokens-demo__color-stripe.bg-color-black-o-10').should('have.css', 'background-color', colors.colorBlackO10);
        cy.get('.tokens-demo__color-stripe.bg-color-black-o-05').should('have.css', 'background-color', colors.colorBlackO05);
    });
})

describe('Tokens - color system [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=tokens-color--system-colors');
    });

    it('has correct values for the system color variables', () => {
        cy.get('.tokens-demo__color-stripe.bg-color-bg').should('have.css', 'background-color', colors.colorBg);
        cy.get('.tokens-demo__color-stripe.bg-color-success').should('have.css', 'background-color', colors.colorSuccess);
        cy.get('.tokens-demo__color-stripe.bg-color-warning').should('have.css', 'background-color', colors.colorWarning);
        cy.get('.tokens-demo__color-stripe.bg-color-error').should('have.css', 'background-color', colors.colorError);
    });
})

export {}
