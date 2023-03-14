/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('footer', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-footer--footer');
    });

    it('has correct class and tag name', () => {
        cy.get('footer').should('have.prop', 'tagName').should('eq', 'FOOTER');
        cy.get('footer').invoke('attr', 'class').should('eq', 'footer');
    });

    it('has correct structure', () => {
        cy.get('.footer').should('exist');
        cy.get('.footer .footer-content').should('exist');
        cy.get('.footer .footer-content').children('.footer-column').should('have.length', 4);

        cy.get('footer .footer-column:nth-child(1)').invoke('attr', 'column-name').should('eq', 'logo');
        cy.get('footer .footer-column:nth-child(1) .footer__logo').should('exist');

        cy.get('footer .footer-column:nth-child(2)').invoke('attr', 'column-name').should('eq', 'service-nav');
        cy.get('footer .footer-column:nth-child(2) .footer__list').should('exist');
        cy.get('footer .footer-column:nth-child(2) .footer__list').children('.footer__list-item').should('have.length', 5)
        cy.get('footer .footer-column:nth-child(2) .footer__list .footer__list-item .footer__list-link').should('exist');

        cy.get('footer .footer-column:nth-child(3)').invoke('attr', 'column-name').should('eq', 'footer-nav');
        cy.get('footer .footer-column:nth-child(3) .footer__list').should('exist');
        cy.get('footer .footer-column:nth-child(3) .footer__list').children('.footer__list-item').should('have.length', 5)
        cy.get('footer .footer-column:nth-child(3) .footer__list .footer__list-item .footer__list-link').should('exist');

        cy.get('footer .footer-column:nth-child(4)').invoke('attr', 'column-name').should('eq', 'address');
        cy.get('footer .footer-column:nth-child(4) .footer__address').should('exist');
        cy.get('footer .footer-column:nth-child(4) .footer__address .footer__address-title').should('exist');
        cy.get('footer .footer-column:nth-child(4) .footer__address .footer__address-text--name').should('exist');
        cy.get('footer .footer-column:nth-child(4) .footer__address .footer__address-text--street').should('exist');
        cy.get('footer .footer-column:nth-child(4) .footer__address .footer__address-text--city').should('exist');
        cy.get('footer .footer-column:nth-child(4) .footer__address .footer__address-text--phone').should('exist');
        cy.get('footer .footer-column:nth-child(4) .footer__address .footer__address-text--fax').should('exist');
        cy.get('footer .footer-column:nth-child(4) .footer__address .footer__address-text--mail').should('exist');
        cy.get('footer .footer-column:nth-child(4) .footer__socials').should('exist');
        cy.get('footer .footer-column:nth-child(4) .footer__socials').children('.footer__socials-link').should('have.length', 3);
        cy.get('footer .footer-column:nth-child(4) .footer__socials .icon').should('exist');
    });

    it('has correct styles', () => {
        cy.get('.footer').should('have.css', 'background-color', colors.colorFontDark);
        cy.get('.footer').should('have.css', 'padding', `${tokens.spacing.xl} ${tokens.spacing.normal}`);

        cy.get('.footer-content').should('have.css', 'display', 'grid');
        cy.get('.footer-content').should('have.css', 'grid-template-columns', '354.047px 354.047px 354.055px 233.852px');
        cy.get('.footer-content').should('have.css', 'grid-gap', `${tokens.spacing.xl} ${tokens.spacing.xl}`);
        cy.get('.footer-content').should('have.css', 'align-items', 'flex-start');
        cy.get('.footer-content').should('have.css', 'justify-content', 'center');
        cy.get('.footer-content').should('have.css', 'max-width', '1440px');
        cy.get('.footer-content').should('have.css', 'margin', '0px 224px');

        cy.get('.footer-column').should('have.css', 'display', 'flex');
        cy.get('.footer-column').should('have.css', 'gap', `normal`);
        cy.get('.footer-column').should('have.css', 'align-items', 'flex-start');
        cy.get('.footer-column').should('have.css', 'justify-content', 'flex-start');


        cy.get('footer .footer-column:nth-child(1) .footer__logo').should('have.css', 'max-width', '180px');

        cy.get('footer .footer-column:nth-child(2) .footer__list').should('have.css', 'list-style', 'outside none none');
        cy.get('footer .footer-column:nth-child(2) .footer__list').should('have.css', 'padding', '0px');
        cy.get('footer .footer-column:nth-child(2) .footer__list').should('have.css', 'margin', '0px');
        cy.get('footer .footer-column:nth-child(2) .footer__list').should('have.css', 'text-align', 'left');

        cy.get('footer .footer-column:nth-child(2) .footer__list .footer__list-link').should('have.css', 'color', colors.colorPrimaryLight);
        cy.get('footer .footer-column:nth-child(2) .footer__list .footer__list-link').should('have.css', 'text-decoration', `underline solid ${colors.colorPrimaryLight}`);

        cy.get('footer .footer-column:nth-child(3) .footer__list').should('have.css', 'list-style', 'outside none none');
        cy.get('footer .footer-column:nth-child(3) .footer__list').should('have.css', 'padding', '0px');
        cy.get('footer .footer-column:nth-child(3) .footer__list').should('have.css', 'margin', '0px');
        cy.get('footer .footer-column:nth-child(3) .footer__list').should('have.css', 'text-align', 'left');

        cy.get('footer .footer-column:nth-child(3) .footer__list .footer__list-link').should('have.css', 'color', colors.colorPrimaryLight);
        cy.get('footer .footer-column:nth-child(3) .footer__list .footer__list-link').should('have.css', 'text-decoration', `underline solid ${colors.colorPrimaryLight}`);

        cy.get('footer .footer-column:nth-child(4) .footer__address').should('have.css', 'margin', `0px 0px ${tokens.spacing.l}`);
        cy.get('footer .footer-column:nth-child(4) .footer__address-title').should('have.css', 'color', colors.colorBg);
        cy.get('footer .footer-column:nth-child(4) .footer__address-title').should('have.css', 'margin', '0px');
        cy.get('footer .footer-column:nth-child(4) .footer__address-title').should('have.css', 'text-align', 'left');
        cy.get('footer .footer-column:nth-child(4) .footer__address-title').should('have.css', 'font-style', 'normal');

        cy.get('footer .footer-column:nth-child(4) .footer__address-text').should('have.css', 'display', 'flex');
        cy.get('footer .footer-column:nth-child(4) .footer__address-text').should('have.css', 'flex-direction', 'row');
        cy.get('footer .footer-column:nth-child(4) .footer__address-text').should('have.css', 'align-items', 'center');
        cy.get('footer .footer-column:nth-child(4) .footer__address-text').should('have.css', 'justify-content', 'flex-start');
        cy.get('footer .footer-column:nth-child(4) .footer__address-text').should('have.css', 'gap', tokens.spacing.normal);

    });
})

export {}
