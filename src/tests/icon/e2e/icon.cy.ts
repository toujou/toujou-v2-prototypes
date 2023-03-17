/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

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
        cy.get('.icon').should('have.css', 'height', tokens.type.size.xxxl);
        cy.get('.icon').should('have.css', 'width', tokens.type.size.xxxl);
    });

    it('has correct xxl size', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-size', 'xxl');
        });
        cy.get('.icon').should('have.css', 'height', tokens.type.size.xxl);
        cy.get('.icon').should('have.css', 'width', tokens.type.size.xxl);
    });

    it('has correct xl size', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-size', 'xl');
        });
        cy.get('.icon').should('have.css', 'height', tokens.type.size.xl);
        cy.get('.icon').should('have.css', 'width', tokens.type.size.xl);
    });

    it('has correct l size', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-size', 'l');
        });
        cy.get('.icon').should('have.css', 'height', tokens.type.size.l);
        cy.get('.icon').should('have.css', 'width', tokens.type.size.l);
    });

    it('has correct m size', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-size', 'm');
        });
        cy.get('.icon').should('have.css', 'height', tokens.type.size.m);
        cy.get('.icon').should('have.css', 'width', tokens.type.size.m);
    });

    it('has correct ms size', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-size', 'ms');
        });
        cy.get('.icon').should('have.css', 'height', tokens.type.size.ms);
        cy.get('.icon').should('have.css', 'width', tokens.type.size.ms);
    });

    it('has correct normal size', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-size', 'normal');
        });
        cy.get('.icon').should('have.css', 'height', tokens.type.size.normal);
        cy.get('.icon').should('have.css', 'width', tokens.type.size.normal);
    });

    it('has correct s size', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-size', 's');
        });
        cy.get('.icon').should('have.css', 'height', tokens.type.size.s);
        cy.get('.icon').should('have.css', 'width', tokens.type.size.s);
    });

    it('has correct xs size', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-size', 'xs');
        });
        cy.get('.icon').should('have.css', 'height', tokens.type.size.xs);
        cy.get('.icon').should('have.css', 'width', tokens.type.size.xs);
    });

    it('has correct xxs size', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-size', 'xxs');
        });
        cy.get('.icon').should('have.css', 'height', tokens.type.size.xxs);
        cy.get('.icon').should('have.css', 'width', tokens.type.size.xxs);
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
        cy.get('.icon').should('have.css', 'background-color', colors.colorFont);
    });

    it('has correct font dark color', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-color', 'font-dark');
        });
        cy.get('.icon').should('have.css', 'background-color', colors.colorFontDark);
    });

    it('has correct font light color', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-color', 'font-light');
        });
        cy.get('.icon').should('have.css', 'background-color', colors.colorFontLight);
    });

    it('has correct primary color', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-color', 'primary');
        });
        cy.get('.icon').should('have.css', 'background-color', colors.colorPrimary);
    });

    it('has correct primary dark color', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-color', 'primary-dark');
        });
        cy.get('.icon').should('have.css', 'background-color', colors.colorPrimaryDark);
    });

    it('has correct primary light color', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-color', 'primary-light');
        });
        cy.get('.icon').should('have.css', 'background-color', colors.colorPrimaryLight);
    });

    it('has correct secondary color', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-color', 'secondary');
        });
        cy.get('.icon').should('have.css', 'background-color', colors.colorSecondary);
    });

    it('has correct secondary dark color', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-color', 'secondary-dark');
        });
        cy.get('.icon').should('have.css', 'background-color', colors.colorSecondaryDark);
    });

    it('has correct secondary light color', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-color', 'secondary-light');
        });
        cy.get('.icon').should('have.css', 'background-color', colors.colorSecondaryLight);
    });

    it('has correct background color', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-color', 'background');
        });
        cy.get('.icon').should('have.css', 'background-color', colors.colorBg);
    });

    it('has correct success color', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-color', 'success');
        });
        cy.get('.icon').should('have.css', 'background-color', colors.colorSuccess);
    });

    it('has correct warning color', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-color', 'warning');
        });
        cy.get('.icon').should('have.css', 'background-color', colors.colorWarning);
    });

    it('has correct error color', () => {
        cy.get('.icon').then((e) => {
            e[0].setAttribute('icon-color', 'error');
        });
        cy.get('.icon').should('have.css', 'background-color', colors.colorError);
    });
});

export {}
