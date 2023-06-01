/// <reference types="cypress" />
/// <reference types="cypress-real-events" />

describe('toujou-breadcrumb [mobile]', () => {
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
