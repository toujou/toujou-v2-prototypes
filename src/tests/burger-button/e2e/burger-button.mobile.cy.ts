/// <reference types="cypress" />

const colors = Cypress.env('colors');

describe('burger-button [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-topbar--topbar');
    });

    it('it has correct attributes', () => {
        cy.get('.burger-button').invoke('attr', 'class').should('eq', 'burger-button');
        cy.get('.burger-button').invoke('attr', 'role').should('eq', 'button');
        cy.get('.burger-button').invoke('attr', 'aria-pressed').should('eq', 'false');
        cy.get('.burger-button').invoke('attr', 'aria-haspopup').should('eq', 'true');
        cy.get('.burger-button').invoke('attr', 'aria-controls').should('eq', 'mainNavigation');
        cy.get('.burger-button').invoke('attr', 'aria-expanded').should('eq', 'false');
        cy.get('.burger-button').invoke('attr', 'aria-label').should('eq', 'Menu button');
        cy.get('.burger-button').invoke('attr', 'toggle-element-selector').should('eq', '#topbar');
        cy.get('.burger-button').invoke('attr', 'tabindex').should('eq', '0');
    });

    it('it has correct styles', () => {
        cy.get('.burger-button').should('have.css', 'height', '24px');
        cy.get('.burger-button').should('have.css', 'width', '24px');

        // top line
        cy.get('.burger-button .burger-button__line[line-position="top"]').should('have.css', 'animation-duration', '0.5s');
        cy.get('.burger-button .burger-button__line[line-position="top"]').should('have.css', 'animation-name', 'line-top-deactivate');
        cy.get('.burger-button .burger-button__line[line-position="top"]').should('have.css', 'background-color', colors.colorPrimary);
        cy.get('.burger-button .burger-button__line[line-position="top"]').should('have.css', 'border-radius', '1.5px');
        cy.get('.burger-button .burger-button__line[line-position="top"]').should('have.css', 'height', '3px');
        cy.get('.burger-button .burger-button__line[line-position="top"]').should('have.css', 'width', '24px');
        cy.get('.burger-button .burger-button__line[line-position="top"]').should('have.css', 'left', '1px');
        cy.get('.burger-button .burger-button__line[line-position="top"]').should('have.css', 'top', '3px');
        cy.get('.burger-button .burger-button__line[line-position="top"]').should('have.css', 'position', 'absolute');
        cy.get('.burger-button .burger-button__line[line-position="top"]').should('have.css', 'transition-duration', '0.25s');

        // middle line
        cy.get('.burger-button .burger-button__line[line-position="middle"]').should('have.css', 'animation-duration', '0.5s');
        cy.get('.burger-button .burger-button__line[line-position="middle"]').should('have.css', 'animation-name', 'line-middle-deactivate');
        cy.get('.burger-button .burger-button__line[line-position="middle"]').should('have.css', 'background-color', colors.colorPrimary);
        cy.get('.burger-button .burger-button__line[line-position="middle"]').should('have.css', 'border-radius', '1.5px');
        cy.get('.burger-button .burger-button__line[line-position="middle"]').should('have.css', 'height', '3px');
        cy.get('.burger-button .burger-button__line[line-position="middle"]').should('have.css', 'width', '24px');
        cy.get('.burger-button .burger-button__line[line-position="middle"]').should('have.css', 'left', '1px');
        cy.get('.burger-button .burger-button__line[line-position="middle"]').should('have.css', 'top', '10px');
        cy.get('.burger-button .burger-button__line[line-position="middle"]').should('have.css', 'position', 'absolute');
        cy.get('.burger-button .burger-button__line[line-position="middle"]').should('have.css', 'transition-duration', '0.25s');

        // bottom line
        cy.get('.burger-button .burger-button__line[line-position="bottom"]').should('have.css', 'animation-duration', '0.5s');
        cy.get('.burger-button .burger-button__line[line-position="bottom"]').should('have.css', 'animation-name', 'line-bottom-deactivate');
        cy.get('.burger-button .burger-button__line[line-position="bottom"]').should('have.css', 'background-color', colors.colorPrimary);
        cy.get('.burger-button .burger-button__line[line-position="bottom"]').should('have.css', 'border-radius', '1.5px');
        cy.get('.burger-button .burger-button__line[line-position="bottom"]').should('have.css', 'height', '3px');
        cy.get('.burger-button .burger-button__line[line-position="bottom"]').should('have.css', 'width', '24px');
        cy.get('.burger-button .burger-button__line[line-position="bottom"]').should('have.css', 'left', '1px');
        cy.get('.burger-button .burger-button__line[line-position="bottom"]').should('have.css', 'top', '17px');
        cy.get('.burger-button .burger-button__line[line-position="bottom"]').should('have.css', 'position', 'absolute');
        cy.get('.burger-button .burger-button__line[line-position="bottom"]').should('have.css', 'transition-duration', '0.25s');
    });
})

describe('open burger-button [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-topbar--topbar');
        cy.get('.burger-button').click();
    });

    it('it has correct attributes', () => {
        cy.get('.burger-button').invoke('attr', 'class').should('eq', 'burger-button');
        cy.get('.burger-button').invoke('attr', 'role').should('eq', 'button');
        cy.get('.burger-button').invoke('attr', 'aria-pressed').should('eq', 'true');
        cy.get('.burger-button').invoke('attr', 'aria-haspopup').should('eq', 'true');
        cy.get('.burger-button').invoke('attr', 'aria-controls').should('eq', 'mainNavigation');
        cy.get('.burger-button').invoke('attr', 'aria-expanded').should('eq', 'true');
        cy.get('.burger-button').invoke('attr', 'aria-label').should('eq', 'Menu button');
        cy.get('.burger-button').invoke('attr', 'toggle-element-selector').should('eq', '#topbar');
        cy.get('.burger-button').invoke('attr', 'tabindex').should('eq', '0');
    });

    it('it has correct open styles', () => {
        cy.get('.burger-button').should('have.css', 'height', '24px');
        cy.get('.burger-button').should('have.css', 'width', '24px');

        // top line
        cy.get('.burger-button .burger-button__line[line-position="top"]').should('have.css', 'animation-duration', '0.5s');
        cy.get('.burger-button .burger-button__line[line-position="top"]').should('have.css', 'animation-name', 'line-top-activate');
        cy.get('.burger-button .burger-button__line[line-position="top"]').should('have.css', 'background-color', colors.colorBg);
        cy.get('.burger-button .burger-button__line[line-position="top"]').should('have.css', 'border-radius', '1.5px');
        cy.get('.burger-button .burger-button__line[line-position="top"]').should('have.css', 'height', '3px');
        cy.get('.burger-button .burger-button__line[line-position="top"]').should('have.css', 'width', '24px');
        cy.get('.burger-button .burger-button__line[line-position="top"]').should('have.css', 'left', '1px');
        cy.get('.burger-button .burger-button__line[line-position="top"]').should('have.css', 'top', '10px');
        cy.get('.burger-button .burger-button__line[line-position="top"]').should('have.css', 'position', 'absolute');
        cy.get('.burger-button .burger-button__line[line-position="top"]').should('have.css', 'transition-duration', '0.25s');

        // middle line
        cy.get('.burger-button .burger-button__line[line-position="middle"]').should('have.css', 'animation-duration', '0.5s');
        cy.get('.burger-button .burger-button__line[line-position="middle"]').should('have.css', 'animation-name', 'line-middle-activate');
        cy.get('.burger-button .burger-button__line[line-position="middle"]').should('have.css', 'background-color', colors.colorBg);
        cy.get('.burger-button .burger-button__line[line-position="middle"]').should('have.css', 'border-radius', '1.5px');
        cy.get('.burger-button .burger-button__line[line-position="middle"]').should('have.css', 'height', '3px');
        cy.get('.burger-button .burger-button__line[line-position="middle"]').should('have.css', 'width', '24px');
        cy.get('.burger-button .burger-button__line[line-position="middle"]').should('have.css', 'left', '1px');
        cy.get('.burger-button .burger-button__line[line-position="middle"]').should('have.css', 'top', '10px');
        cy.get('.burger-button .burger-button__line[line-position="middle"]').should('have.css', 'position', 'absolute');
        cy.get('.burger-button .burger-button__line[line-position="middle"]').should('have.css', 'transition-duration', '0.25s');

        // bottom line
        cy.get('.burger-button .burger-button__line[line-position="bottom"]').should('have.css', 'animation-duration', '0.5s');
        cy.get('.burger-button .burger-button__line[line-position="bottom"]').should('have.css', 'animation-name', 'line-bottom-activate');
        cy.get('.burger-button .burger-button__line[line-position="bottom"]').should('have.css', 'background-color', colors.colorBg);
        cy.get('.burger-button .burger-button__line[line-position="bottom"]').should('have.css', 'border-radius', '1.5px');
        cy.get('.burger-button .burger-button__line[line-position="bottom"]').should('have.css', 'height', '3px');
        cy.get('.burger-button .burger-button__line[line-position="bottom"]').should('have.css', 'width', '24px');
        cy.get('.burger-button .burger-button__line[line-position="bottom"]').should('have.css', 'left', '1px');
        cy.get('.burger-button .burger-button__line[line-position="bottom"]').should('have.css', 'top', '10px');
        cy.get('.burger-button .burger-button__line[line-position="bottom"]').should('have.css', 'position', 'absolute');
        cy.get('.burger-button .burger-button__line[line-position="bottom"]').should('have.css', 'transition-duration', '0.25s');
    });
});

export {}
