/// <reference types="cypress" />

const colors = Cypress.env('colors');

describe('toujou-snackbar action [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-snackbar--snackbar&args=snackbarType:action');
    });

    it('has correct structure', () => {
        cy.get('toujou-snackbar').invoke('attr', 'class').should('eq', 'snackbar');
        cy.get('toujou-snackbar').invoke('prop', 'tagName').should('eq', 'TOUJOU-SNACKBAR');
    });

    it('shows when we click the button', () => {
        cy.get('#snackbarTriggerButton').click();
        cy.get('toujou-snackbar').invoke('attr', 'visible').should('exist');
        cy.get('toujou-snackbar').invoke('attr', 'info').should('exist');
    });

    it('has correct inner structure', () => {
        cy.get('#snackbarTriggerButton').click();
        cy.get('toujou-snackbar').shadow().find('.snackbar__message').should('exist')
        cy.get('toujou-snackbar').shadow().find('.snackbar__message').should('have.text', "welcome to the bonus page!");
        cy.get('toujou-snackbar').shadow().find('.snackbar__button').should('exist')
        cy.get('toujou-snackbar').shadow().find('.snackbar__button').should('have.text', "ok");
    });

    it('has correct info styles', () => {
        cy.get('#snackbarTriggerButton').click();
        cy.get('toujou-snackbar').should('have.css', 'background-color', colors.colorPrimary);
        cy.get('toujou-snackbar').shadow().find('.snackbar__message').should('have.css', 'color', colors.colorBg);
        cy.get('toujou-snackbar').shadow().find('.snackbar__message').should('have.css', 'font-size', '16px');
        cy.get('toujou-snackbar').shadow().find('.snackbar__button').should('have.css', 'color', colors.colorBg);
        cy.get('toujou-snackbar').shadow().find('.snackbar__button').should('have.css', 'font-size', '14px');
        cy.get('toujou-snackbar').shadow().find('.snackbar__button').should('have.css', 'text-transform', 'uppercase');
    });
});

describe('toujou-snackbar action info [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-snackbar--snackbar&args=snackbarType:action');
    });

    it('has correct info styles', () => {
        cy.get('#snackbarTriggerButton').click();
        cy.get('toujou-snackbar').should('have.css', 'background-color', colors.colorPrimary);
        cy.get('toujou-snackbar').shadow().find('.snackbar__message').should('have.css', 'color', colors.colorBg);
        cy.get('toujou-snackbar').shadow().find('.snackbar__message').should('have.css', 'font-size', '16px');
        cy.get('toujou-snackbar').shadow().find('.snackbar__button').should('have.css', 'color', colors.colorBg);
        cy.get('toujou-snackbar').shadow().find('.snackbar__button').should('have.css', 'font-size', '14px');
        cy.get('toujou-snackbar').shadow().find('.snackbar__button').should('have.css', 'text-transform', 'uppercase');
    });
});

describe('toujou-snackbar action success [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-snackbar--snackbar&args=snackbarVariant:success;snackbarType:action');
    });

    it('has correct success styles', () => {
        cy.get('#snackbarTriggerButton').click();
        cy.get('toujou-snackbar').invoke('attr', 'success').should('exist');
        cy.get('toujou-snackbar').should('have.css', 'background-color', colors.colorSuccess);
        cy.get('toujou-snackbar').shadow().find('.snackbar__message').should('have.css', 'color', colors.colorSuccessL15);
        cy.get('toujou-snackbar').shadow().find('.snackbar__button').should('have.css', 'color', colors.colorSuccessL15);
    });
});

describe('toujou-snackbar action error [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-snackbar--snackbar&args=snackbarVariant:error;snackbarType:action');
    });

    it('has correct error styles', () => {
        cy.get('#snackbarTriggerButton').click();
        cy.get('toujou-snackbar').invoke('attr', 'error').should('exist');
        cy.get('toujou-snackbar').should('have.css', 'background-color', colors.colorError);
        cy.get('toujou-snackbar').shadow().find('.snackbar__message').should('have.css', 'color', colors.colorErrorL15);
        cy.get('toujou-snackbar').shadow().find('.snackbar__button').should('have.css', 'color', colors.colorErrorL15);
    });
});

describe('toujou-snackbar action warning [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-snackbar--snackbar&args=snackbarVariant:warning;snackbarType:action');
    });

    it('has correct error styles', () => {
        cy.get('#snackbarTriggerButton').click();
        cy.get('toujou-snackbar').invoke('attr', 'warning').should('exist');
        cy.get('toujou-snackbar').should('have.css', 'background-color', colors.colorWarning);
        cy.get('toujou-snackbar').shadow().find('.snackbar__message').should('have.css', 'color', colors.colorWarningL15);
        cy.get('toujou-snackbar').shadow().find('.snackbar__button').should('have.css', 'color', colors.colorWarningL15);
    });
});

describe('toujou-snackbar auto info [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-snackbar--snackbar');
    });

    it('has correct structure', () => {
        cy.get('#snackbarTriggerButton').click();
        cy.get('toujou-snackbar').invoke('attr', 'info').should('exist');
        cy.get('toujou-snackbar').invoke('attr', 'visible').should('exist');
        cy.wait(4050);
        cy.get('toujou-snackbar').invoke('attr', 'visible').should('not.exist');
    });
});

export {}
