/// <reference types="cypress" />

const colorPrimary = Cypress.env('colorPrimary');
const colorPrimaryDark = Cypress.env('colorPrimaryDark');
const colorFont = Cypress.env('colorFont');

describe('toujou-breadcrumb - desktop', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-breadcrumb--breadcrumb');
    });

    it('has correct role', () => {
        cy.get('toujou-breadcrumb').invoke('attr', 'role').should('eq', 'nav');
    });

    it('has correct aria-label', () => {
        cy.get('toujou-breadcrumb').invoke('attr', 'aria-label').should('eq', 'Breadcrumb');
    });

    it('has correct number of items', () => {
        cy.get('toujou-breadcrumb .breadcrumb__list').children().should('have.length', 7);
    });

    it('last item is selected', () => {
        cy.get('toujou-breadcrumb .breadcrumb__item:last-child .breadcrumb__link').invoke('attr', 'aria-current').should('eq', 'page');
        cy.get('toujou-breadcrumb .breadcrumb__item:last-child .breadcrumb__link').should('have.css', 'color', colorPrimary);
        cy.get('toujou-breadcrumb .breadcrumb__item:last-child .breadcrumb__link').should('have.css', 'pointer-events', 'none');
    });

    it('nav items have correct hover styles', () => {
        cy.get('toujou-breadcrumb .breadcrumb__item:first-child .breadcrumb__link').should('have.css', 'color', colorFont);
        // @ts-ignore
        cy.get('toujou-breadcrumb .breadcrumb__item:first-child .breadcrumb__link').realHover()
        cy.get('toujou-breadcrumb .breadcrumb__item:first-child .breadcrumb__link').should('have.css', 'color', colorPrimaryDark);
    });

    it('first item has "hover" icon', () => {
        // @ts-ignore
        cy.get('toujou-breadcrumb .breadcrumb__item:first-child').before('-webkit-mask-image').should('contain', 'home-smooth');
    });

    it('buttons are hidden', () => {
        cy.get('.breadcrumb__toggle.breadcrumb__toggle--open').should('have.css', 'display', 'none');
        cy.get('.breadcrumb__toggle.breadcrumb__toggle--close').should('have.css', 'display', 'none');
    });

    it('does not have "ismobile" attribute', () => {
        cy.get('toujou-breadcrumb').invoke('attr', 'ismobile').should('not.exist');
    });
})

describe('toujou-breadcrumb - mobile', () => {
    beforeEach(() => {
        cy.viewport('iphone-6')
        cy.visit('/iframe.html?viewMode=story&id=components-breadcrumb--breadcrumb');
    });

    it('has "ismobile" attribute', () => {
        cy.get('toujou-breadcrumb').invoke('attr', 'ismobile').should('exist');
    });

    it('shows only last item', () => {
        cy.get('toujou-breadcrumb .breadcrumb__item:nth-child(1)').should('have.css', 'display', 'none');
        cy.get('toujou-breadcrumb .breadcrumb__item:nth-child(2)').should('have.css', 'display', 'none');
        cy.get('toujou-breadcrumb .breadcrumb__item:nth-child(3)').should('have.css', 'display', 'none');
        cy.get('toujou-breadcrumb .breadcrumb__item:nth-child(4)').should('have.css', 'display', 'none');
        cy.get('toujou-breadcrumb .breadcrumb__item:nth-child(5)').should('have.css', 'display', 'none');
        cy.get('toujou-breadcrumb .breadcrumb__item:nth-child(6)').should('have.css', 'display', 'none');
        cy.get('toujou-breadcrumb .breadcrumb__item:nth-child(7)').should('have.css', 'display', 'flex');
    });

    it('shows open button', () => {
        cy.get('toujou-breadcrumb .breadcrumb__toggle--open').should('have.css', 'display', 'block');
        cy.get('toujou-breadcrumb .breadcrumb__toggle--open').should('be.visible');
        cy.get('toujou-breadcrumb .breadcrumb__toggle--close').should('have.css', 'display', 'none');
        cy.get('toujou-breadcrumb .breadcrumb__toggle--close').should('not.be.visible');
    });

    it('can toggle open / close button visibility on click', () => {
        cy.get('toujou-breadcrumb .breadcrumb__toggle--open').should('have.css', 'display', 'block');
        cy.get('toujou-breadcrumb .breadcrumb__toggle--close').should('have.css', 'display', 'none');

        cy.get('toujou-breadcrumb .breadcrumb__toggle--open').click();

        cy.get('toujou-breadcrumb .breadcrumb__toggle--open').should('have.css', 'display', 'none');
        cy.get('toujou-breadcrumb .breadcrumb__toggle--close').should('have.css', 'display', 'block');

        cy.get('toujou-breadcrumb .breadcrumb__toggle--close').click();

        cy.get('toujou-breadcrumb .breadcrumb__toggle--open').should('have.css', 'display', 'block');
        cy.get('toujou-breadcrumb .breadcrumb__toggle--close').should('have.css', 'display', 'none');
    });

    it('fake list is not visible per default', () => {
        cy.get('toujou-breadcrumb').shadow().find('.breadcrumb__fake-list').should('have.css', 'display', 'none');
    });

    it('can toggle fake list visibility with button clicks', () => {
        cy.get('toujou-breadcrumb').shadow().find('.breadcrumb__fake-list').should('have.css', 'display', 'none');
        cy.get('toujou-breadcrumb').invoke('attr', 'mobilemenuisopen').should('not.exist');
        cy.get('toujou-breadcrumb .breadcrumb__toggle--open').click();
        cy.get('toujou-breadcrumb').shadow().find('.breadcrumb__fake-list').should('have.css', 'display', 'flex');
        cy.get('toujou-breadcrumb').invoke('attr', 'mobilemenuisopen').should('exist');
        cy.get('toujou-breadcrumb .breadcrumb__toggle--close').click();
        cy.get('toujou-breadcrumb').shadow().find('.breadcrumb__fake-list').should('have.css', 'display', 'none');
        cy.get('toujou-breadcrumb').invoke('attr', 'mobilemenuisopen').should('not.exist');
    });
})

export {}
