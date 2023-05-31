/// <reference types="cypress" />
/// <reference types="cypress-real-events" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('toujou-button default', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-button--button');
        // @ts-ignore
        cy.get('.button').resetRealHover();
    });

    it('has correct attributes', () => {
        cy.get('.button').invoke('attr', 'class').should('eq', 'button');
        cy.get('.button').invoke('attr', 'button-variant').should('eq', 'primary');
        cy.get('.button').invoke('attr', 'button-type').should('eq', 'default');
        cy.get('.button').invoke('attr', 'button-size').should('eq', 'normal');
        cy.get('.button').invoke('prop', 'tagName').should('eq', 'BUTTON');
    });

    it('has correct default primary styles', () => {
        cy.get('.button').should('have.css', 'background-color', colors.colorPrimary);
        cy.get('.button').should('have.css', 'color', colors.colorBg);
        cy.get('.button').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorPrimary}`);
        cy.get('.button').realHover();
        cy.get('.button').should('have.css', 'background-color', colors.colorPrimaryDark);
        cy.get('.button').should('have.css', 'color', colors.colorBg);
        cy.get('.button').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorPrimaryDark}`);
    });

    it('has correct default primary focus styles', () => {
        cy.get('.button').focus();
        cy.get('.button').should('have.css', 'background-color', colors.colorPrimaryDark);
        cy.get('.button').should('have.css', 'color', colors.colorBg);
        cy.get('.button').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorPrimaryDark}`);
        cy.get('.button').should('have.css', 'outline', `${colors.colorPrimary} solid 2px`);
    });

    it('has correct default secondary styles', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-variant', 'secondary');
        });
        cy.get('.button').should('have.css', 'background-color', colors.colorSecondary);
        cy.get('.button').should('have.css', 'color', colors.colorBg);
        cy.get('.button').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorSecondary}`);
        cy.get('.button').realHover();
        cy.get('.button').should('have.css', 'background-color', colors.colorSecondaryDark);
        cy.get('.button').should('have.css', 'color', colors.colorBg);
        cy.get('.button').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorSecondaryDark}`);
    });

    it('has correct default secondary focus styles', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-variant', 'secondary');
        });
        cy.get('.button').focus();
        cy.get('.button').should('have.css', 'background-color', colors.colorSecondaryDark);
        cy.get('.button').should('have.css', 'color', colors.colorBg);
        cy.get('.button').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorSecondaryDark}`);
        cy.get('.button').should('have.css', 'outline', `${colors.colorPrimary} solid 2px`);
    });

    it('has correct default font styles', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-variant', 'font');
        });
        cy.get('.button').should('have.css', 'background-color', colors.colorFont);
        cy.get('.button').should('have.css', 'color', colors.colorBg);
        cy.get('.button').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorFont}`);
        cy.get('.button').realHover();
        cy.get('.button').should('have.css', 'background-color', colors.colorFontDark);
        cy.get('.button').should('have.css', 'color', colors.colorBg);
        cy.get('.button').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorFontDark}`);
    });

    it('has correct default font focus styles', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-variant', 'font');
        });
        cy.get('.button').focus();
        cy.get('.button').should('have.css', 'background-color', colors.colorFontDark);
        cy.get('.button').should('have.css', 'color', colors.colorBg);
        cy.get('.button').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorFontDark}`);
        cy.get('.button').should('have.css', 'outline', `${colors.colorPrimary} solid 2px`);
    });

    it('has correct default disabled primary styles', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-variant', 'primary');
            e[0].setAttribute('disabled', '');
        });
        cy.get('.button').should('have.css', 'background-color', colors.colorFontLight);
        cy.get('.button').should('have.css', 'color', colors.colorFont);
        cy.get('.button').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorFontLight}`);
    });

    it('has correct default disabled secondary styles', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-variant', 'secondary');
            e[0].setAttribute('disabled', '');
        });
        cy.get('.button').should('have.css', 'background-color', colors.colorFontLight);
        cy.get('.button').should('have.css', 'color', colors.colorFont);
        cy.get('.button').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorFontLight}`);
    });

    it('has correct disabled font styles', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-variant', 'secondary');
            e[0].setAttribute('disabled', '');
        });
        cy.get('.button').should('have.css', 'background-color', colors.colorFontLight);
        cy.get('.button').should('have.css', 'color', colors.colorFont);
        cy.get('.button').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorFontLight}`);
    });

    it('has correct default font size', () => {
        cy.get('.button').then((el) => {
            // @ts-ignore
            const win = cy.state('window');
            const styles = win.getComputedStyle(el[0]);
            const buttonFontSize = styles.getPropertyValue('--button-font-size');
            expect(buttonFontSize.trim()).to.eq('calc(1rem * 1)');
        })
    });

    it('has correct default tiny font size', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-size', 'tiny');
        });
        cy.get('.button').then((el) => {
            // @ts-ignore
            const win = cy.state('window');
            const styles = win.getComputedStyle(el[0]);
            const buttonFontSize = styles.getPropertyValue('--button-font-size');
            expect(buttonFontSize.trim()).to.eq('calc(1rem * .75)');
        })
    });

    it('has correct default small font size', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-size', 'small');
        });
        cy.get('.button').then((el) => {
            // @ts-ignore
            const win = cy.state('window');
            const styles = win.getComputedStyle(el[0]);
            const buttonFontSize = styles.getPropertyValue('--button-font-size');
            expect(buttonFontSize.trim()).to.eq('calc(1rem * .875)');
        })
    });

    it('has correct default large font size', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-size', 'large');
        });
        cy.get('.button').then((el) => {
            // @ts-ignore
            const win = cy.state('window');
            const styles = win.getComputedStyle(el[0]);
            const buttonFontSize = styles.getPropertyValue('--button-font-size');
            expect(buttonFontSize.trim()).to.eq('calc(1rem * 1.25)');
        })
    });
})

export {}
