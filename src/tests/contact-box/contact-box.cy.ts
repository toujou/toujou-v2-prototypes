/// <reference types="cypress" />

const colors = Cypress.env('colors');

describe('contact box', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-contact-box--contact-box');
        cy.get('body').click();
    });

    it('has correct class and tag name', () => {
        cy.get('toujou-contact-box').should('have.prop', 'tagName').should('eq', 'TOUJOU-CONTACT-BOX');
        cy.get('toujou-contact-box').invoke('attr', 'class').should('eq', 'contact-box');
        cy.get('input.state-input').invoke('attr', 'type').should('eq', 'checkbox');
        cy.get('input.state-input').invoke('attr', 'name').should('eq', 'contact-state');
        cy.get('input.state-input').invoke('attr', 'class').should('eq', 'state-input');
        cy.get('input.state-input').invoke('attr', 'aria-hidden').should('eq', 'true');
    });

    it('it has correct styles when not visible', () => {
        cy.get('.contact-box').should('have.css', 'display', 'none');
        cy.get('.contact-box').should('have.css', 'visibility', 'hidden');
        cy.get('.contact-box').should('have.css', 'position', 'fixed');
        cy.get('.contact-box').should('have.css', 'left', '0px');
        cy.get('.contact-box').should('have.css', 'top', '0px');
        cy.get('.contact-box').should('have.css', 'height', '1080px');
        cy.get('.contact-box').should('have.css', 'width', '1905px');
        cy.get('.contact-box').should('have.css', 'justify-content', 'center');
        cy.get('.contact-box').should('have.css', 'pointer-events', 'none');
        cy.get('.contact-box').should('have.css', 'z-index', '3500');
        cy.get('.contact-box').should('have.css', 'backdrop-filter', 'blur(10px)');
        cy.get('.contact-box').should('have.css', 'background-color', colors.colorBlackO50);
    });

    it('it has correct styles when visible', () => {
        cy.get('.button').click();
        cy.get('.contact-box').should('have.css', 'display', 'flex');
        cy.get('.contact-box').should('have.css', 'visibility', 'visible');
        cy.get('.contact-box').should('have.css', 'position', 'fixed');
        cy.get('.contact-box').should('have.css', 'left', '0px');
        cy.get('.contact-box').should('have.css', 'top', '0px');
        cy.get('.contact-box').should('have.css', 'height', '1080px');
        cy.get('.contact-box').should('have.css', 'width', '1920px');
        cy.get('.contact-box').should('have.css', 'justify-content', 'center');
        cy.get('.contact-box').should('have.css', 'pointer-events', 'all');
        cy.get('.contact-box').should('have.css', 'z-index', '3500');
        cy.get('.contact-box').should('have.css', 'backdrop-filter', 'blur(10px)');
        cy.get('.contact-box').should('have.css', 'background-color', colors.colorBlackO50);
    });

    it('contact box card has correct styles', () => {
        cy.get('.button').click();
        cy.get('.contact-box__card').should('have.css', 'background-color', colors.colorBg);
        cy.get('.contact-box__card').should('have.css', 'display', 'block');
        cy.get('.contact-box__card').should('have.css', 'height', '200px');
        cy.get('.contact-box__card').should('have.css', 'width', '268.265625px');
        cy.get('.contact-box__card').should('have.css', 'position', 'relative');
        cy.get('.contact-box__card').should('have.css', 'visibility', 'visible');

        cy.get('.contact-box__close').should('have.css', 'position', 'absolute');
        cy.get('.contact-box__close').should('have.css', 'top', '8px');
        cy.get('.contact-box__close').should('have.css', 'right', '8px');
        cy.get('.contact-box__close').should('have.css', 'display', 'flex');
        cy.get('.contact-box__close').should('have.css', 'align-items', 'center');
        cy.get('.contact-box__close').should('have.css', 'justify-content', 'center');
        cy.get('.contact-box__close').should('have.css', 'cursor', 'pointer');

        cy.get('.contact-box__close .icon').invoke('attr', 'class').should('eq', 'icon');
        cy.get('.contact-box__close .icon').invoke('attr', 'icon-size').should('eq', 'ms');
        cy.get('.contact-box__close .icon').invoke('attr', 'icon-name').should('eq', 'close');
        cy.get('.contact-box__close .icon').invoke('attr', 'icon-color').should('eq', 'font');

        cy.get('.contact-box__content').should('have.css', 'display', 'block');

        cy.get('.contact-box__headline').should('have.css', 'text-align', 'center');
        cy.get('.contact-box__headline').should('have.css', 'color', colors.colorFont);
        cy.get('.contact-box__headline').should('have.css', 'font-family', 'Ubuntu, sans-serif');
        cy.get('.contact-box__headline').should('have.css', 'font-size', '32px');
        cy.get('.contact-box__headline').should('have.css', 'margin-bottom', '20px');

        cy.get('.contact-box__items').should('have.css', 'display', 'flex');
        cy.get('.contact-box__items').should('have.css', 'flex-direction', 'column');
        cy.get('.contact-box__items').should('have.css', 'align-items', 'flex-start');
        cy.get('.contact-box__items').should('have.css', 'justify-content', 'flex-start');
        cy.get('.contact-box__items').should('have.css', 'gap', '8px');
        cy.get('.contact-box__items').should('have.css', 'margin', '0px');
        cy.get('.contact-box__items').should('have.css', 'width', '204.265625px');

        cy.get('.contact-box__item:first-child').should('have.css', 'display', 'flex');
        cy.get('.contact-box__item:first-child').should('have.css', 'align-items', 'center');
        cy.get('.contact-box__item:first-child').should('have.css', 'justify-content', 'center');
        cy.get('.contact-box__item:first-child').should('have.css', 'gap', '16px');
        cy.get('.contact-box__item:first-child').should('have.css', 'font-family', 'Mulish, sans-serif');
        cy.get('.contact-box__item:first-child').should('have.css', 'font-size', '16px');

        cy.get('.contact-box__item:first-child .icon').should('exist');
        cy.get('.contact-box__item:first-child .icon').invoke('attr', 'icon-size').should('eq', 'ms');
        cy.get('.contact-box__item:first-child .icon').invoke('attr', 'icon-color').should('eq', 'font');
        cy.get('.contact-box__item:first-child .icon').invoke('attr', 'icon-name').should('eq', 'telephone');
        cy.get('.contact-box__item:nth-child(2) .icon').invoke('attr', 'icon-name').should('eq', 'email');
        cy.get('.contact-box__item:nth-child(3) .icon').invoke('attr', 'icon-name').should('eq', 'calendar-day');
    });

    it('it can toggle visibility', () => {
        cy.get('.contact-box').should('have.css', 'display', 'none');
        cy.get('.contact-box').should('have.css', 'visibility', 'hidden');
        cy.get('.button').click();
        cy.get('.contact-box').should('have.css', 'display', 'flex');
        cy.get('.contact-box').should('have.css', 'visibility', 'visible');
        cy.get('.contact-box__close').click();
        cy.get('.contact-box').should('have.css', 'display', 'none');
        cy.get('.contact-box').should('have.css', 'visibility', 'hidden');
        cy.get('.button').click();
        cy.get('.contact-box').should('have.css', 'display', 'flex');
        cy.get('.contact-box').should('have.css', 'visibility', 'visible');
        cy.get('.contact-box__close').click();
        cy.get('.contact-box').should('have.css', 'display', 'none');
        cy.get('.contact-box').should('have.css', 'visibility', 'hidden');
    });
});

export {}
