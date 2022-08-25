/// <reference types="cypress" />

const colorPrimary = Cypress.env('colorPrimary');
const colorPrimaryLight = Cypress.env('colorPrimaryLight');
const colorPrimaryDark = Cypress.env('colorPrimaryDark');
const colorSecondary = Cypress.env('colorSecondary');
const colorSecondaryLight = Cypress.env('colorSecondaryLight');
const colorSecondaryDark = Cypress.env('colorSecondaryDark');
const colorFont = Cypress.env('colorFont');
const colorFontDark = Cypress.env('colorFontDark');
const colorFontLight = Cypress.env('colorFontLight');
const colorBg = Cypress.env('colorBg');
const colorSuccess = Cypress.env('colorSuccess');
const colorWarning = Cypress.env('colorWarning');
const colorError = Cypress.env('colorError');

describe('toujou-icon', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-icons--icons');
    });

    it('has correct class', () => {
        cy.get('toujou-icon').invoke('attr', 'class').should('eq', 'icon');
    });
})

describe('toujou-icon - sizes', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-icons--icons');
    });

    it('has correct xxxl size', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-size', 'xxxl');
        });
        cy.get('.icon').should('have.css', 'height', '48px');
        cy.get('.icon').should('have.css', 'width', '48px');
    });

    it('has correct xxl size', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-size', 'xxl');
        });
        cy.get('.icon').should('have.css', 'height', '40px');
        cy.get('.icon').should('have.css', 'width', '40px');
    });

    it('has correct xl size', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-size', 'xl');
        });
        cy.get('.icon').should('have.css', 'height', '32px');
        cy.get('.icon').should('have.css', 'width', '32px');
    });

    it('has correct l size', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-size', 'l');
        });
        cy.get('.icon').should('have.css', 'height', '28px');
        cy.get('.icon').should('have.css', 'width', '28px');
    });

    it('has correct m size', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-size', 'm');
        });
        cy.get('.icon').should('have.css', 'height', '24px');
        cy.get('.icon').should('have.css', 'width', '24px');
    });

    it('has correct ms size', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-size', 'ms');
        });
        cy.get('.icon').should('have.css', 'height', '20px');
        cy.get('.icon').should('have.css', 'width', '20px');
    });

    it('has correct normal size', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-size', 'normal');
        });
        cy.get('.icon').should('have.css', 'height', '16px');
        cy.get('.icon').should('have.css', 'width', '16px');
    });

    it('has correct s size', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-size', 's');
        });
        cy.get('.icon').should('have.css', 'height', '14px');
        cy.get('.icon').should('have.css', 'width', '14px');
    });

    it('has correct xs size', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-size', 'xs');
        });
        cy.get('.icon').should('have.css', 'height', '12px');
        cy.get('.icon').should('have.css', 'width', '12px');
    });

    it('has correct xxs size', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-size', 'xxs');
        });
        cy.get('.icon').should('have.css', 'height', '10px');
        cy.get('.icon').should('have.css', 'width', '10px');
    });
});

describe('toujou-icon - colors', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-icons--icons');
    });

    it('has correct font color', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-color', 'font');
        });
        cy.get('.icon').should('have.css', 'background-color', colorFont);
    });

    it('has correct font dark color', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-color', 'font-dark');
        });
        cy.get('.icon').should('have.css', 'background-color', colorFontDark);
    });

    it('has correct font light color', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-color', 'font-light');
        });
        cy.get('.icon').should('have.css', 'background-color', colorFontLight);
    });

    it('has correct primary color', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-color', 'primary');
        });
        cy.get('.icon').should('have.css', 'background-color', colorPrimary);
    });

    it('has correct primary dark color', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-color', 'primary-dark');
        });
        cy.get('.icon').should('have.css', 'background-color', colorPrimaryDark);
    });

    it('has correct primary light color', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-color', 'primary-light');
        });
        cy.get('.icon').should('have.css', 'background-color', colorPrimaryLight);
    });

    it('has correct secondary color', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-color', 'secondary');
        });
        cy.get('.icon').should('have.css', 'background-color', colorSecondary);
    });

    it('has correct secondary dark color', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-color', 'secondary-dark');
        });
        cy.get('.icon').should('have.css', 'background-color', colorSecondaryDark);
    });

    it('has correct secondary light color', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-color', 'secondary-light');
        });
        cy.get('.icon').should('have.css', 'background-color', colorSecondaryLight);
    });

    it('has correct background color', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-color', 'background');
        });
        cy.get('.icon').should('have.css', 'background-color', colorBg);
    });

    it('has correct success color', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-color', 'success');
        });
        cy.get('.icon').should('have.css', 'background-color', colorSuccess);
    });

    it('has correct warning color', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-color', 'warning');
        });
        cy.get('.icon').should('have.css', 'background-color', colorWarning);
    });

    it('has correct error color', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-color', 'error');
        });
        cy.get('.icon').should('have.css', 'background-color', colorError);
    });
});

export {}
