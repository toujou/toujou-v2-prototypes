/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('contact dialog', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-contact-dialog--contact-dialog');
        cy.get('body').click();
    });

    it('has correct class and tag name', () => {
        cy.get('dialog.contact-dialog').should('have.prop', 'tagName').should('eq', 'DIALOG');
        cy.get('dialog.contact-dialog').invoke('attr', 'class').should('eq', 'contact-dialog');
    });

    it('it has correct styles when not visible', () => {
        cy.get('.contact-dialog').should('have.css', 'display', 'none');
        cy.get('.contact-dialog').invoke('attr', 'open').should('eq', undefined);
    });

    it('it has correct styles when visible', () => {
        cy.get('.button').click();
        cy.get('.contact-dialog').invoke('attr', 'open').should('eq', 'open');
        cy.get('.contact-dialog').should('have.css', 'display', 'flex');
        cy.get('.contact-dialog').should('have.css', 'visibility', 'visible');
        cy.get('.contact-dialog').should('have.css', 'position', 'fixed');
        cy.get('.contact-dialog').should('have.css', 'left', '0px');
        cy.get('.contact-dialog').should('have.css', 'top', '0px');
        cy.get('.contact-dialog').should('have.css', 'height', '268px');
        cy.get('.contact-dialog').should('have.css', 'width', '640px');
        cy.get('.contact-dialog').should('have.css', 'justify-content', 'center');
        cy.get('.contact-dialog').should('have.css', 'backdrop-filter', 'none');
        cy.get('.contact-dialog').should('have.css', 'background-color', colors.colorBg);
    });

    it('contact dialog card has correct styles', () => {
        cy.get('.button').click();

        cy.get('.contact-dialog__close').should('have.css', 'position', 'absolute');
        cy.get('.contact-dialog__close').should('have.css', 'top', tokens.spacing.s);
        cy.get('.contact-dialog__close').should('have.css', 'right', tokens.spacing.s);
        cy.get('.contact-dialog__close').should('have.css', 'display', 'flex');
        cy.get('.contact-dialog__close').should('have.css', 'align-items', 'center');
        cy.get('.contact-dialog__close').should('have.css', 'justify-content', 'center');
        cy.get('.contact-dialog__close').should('have.css', 'cursor', 'pointer');

        cy.get('.contact-dialog__close .icon').invoke('attr', 'class').should('eq', 'icon');
        cy.get('.contact-dialog__close .icon').invoke('attr', 'icon-size').should('eq', 'ms');
        cy.get('.contact-dialog__close .icon').invoke('attr', 'icon-name').should('eq', 'close');
        cy.get('.contact-dialog__close .icon').invoke('attr', 'icon-color').should('eq', 'font');

        cy.get('.contact-dialog__content').should('have.css', 'display', 'block');

        cy.get('.contact-dialog__headline').should('have.css', 'text-align', 'center');
        cy.get('.contact-dialog__headline').should('have.css', 'color', colors.colorFont);
        cy.get('.contact-dialog__headline').should('have.css', 'font-family', tokens.type.fontFamily.headline);
        cy.get('.contact-dialog__headline').should('have.css', 'font-size', tokens.type.size.xl);
        cy.get('.contact-dialog__headline').should('have.css', 'margin-bottom', '0px');

        cy.get('.contact-dialog__items').should('have.css', 'display', 'flex');
        cy.get('.contact-dialog__items').should('have.css', 'flex-direction', 'column');
        cy.get('.contact-dialog__items').should('have.css', 'align-items', 'flex-start');
        cy.get('.contact-dialog__items').should('have.css', 'justify-content', 'flex-start');
        cy.get('.contact-dialog__items').should('have.css', 'gap', tokens.spacing.normal);
        cy.get('.contact-dialog__items').should('have.css', 'margin', '32px 27px 0px 26.9922px');
        cy.get('.contact-dialog__items').should('have.css', 'width', '204.265625px');

        cy.get('.contact-dialog__item:first-child').should('have.css', 'display', 'flex');
        cy.get('.contact-dialog__item:first-child').should('have.css', 'align-items', 'center');
        cy.get('.contact-dialog__item:first-child').should('have.css', 'justify-content', 'center');
        cy.get('.contact-dialog__item:first-child').should('have.css', 'gap', tokens.spacing.normal);
        cy.get('.contact-dialog__item:first-child').should('have.css', 'font-family', tokens.type.fontFamily.text);
        cy.get('.contact-dialog__item:first-child').should('have.css', 'font-size', tokens.type.size.normal);

        cy.get('.contact-dialog__item:first-child .icon').should('exist');
        cy.get('.contact-dialog__item:first-child .icon').invoke('attr', 'icon-size').should('eq', 'ms');
        cy.get('.contact-dialog__item:first-child .icon').invoke('attr', 'icon-color').should('eq', 'font');
        cy.get('.contact-dialog__item:first-child .icon').invoke('attr', 'icon-name').should('eq', 'telephone');
        cy.get('.contact-dialog__item:nth-child(2) .icon').invoke('attr', 'icon-name').should('eq', 'email');
        cy.get('.contact-dialog__item:nth-child(3) .icon').invoke('attr', 'icon-name').should('eq', 'calendar-day');
    });

    it('it can toggle visibility', () => {
        cy.get('.contact-dialog').should('have.css', 'display', 'none');
        cy.get('.contact-dialog').invoke('attr', 'open').should('eq', undefined);

        cy.get('.button').click();
        cy.get('.contact-dialog').should('have.css', 'display', 'flex');
        cy.get('.contact-dialog').invoke('attr', 'open').should('eq', 'open');

        cy.get('.contact-dialog__close').click();
        cy.get('.contact-dialog').should('have.css', 'display', 'none');
        cy.get('.contact-dialog').invoke('attr', 'open').should('eq', undefined);

        cy.get('.button').click();
        cy.get('.contact-dialog').should('have.css', 'display', 'flex');
        cy.get('.contact-dialog').invoke('attr', 'open').should('eq', 'open');

        cy.get('.contact-dialog__close').click();
        cy.get('.contact-dialog').should('have.css', 'display', 'none');
        cy.get('.contact-dialog').invoke('attr', 'open').should('eq', undefined);
    });
});

export {}
