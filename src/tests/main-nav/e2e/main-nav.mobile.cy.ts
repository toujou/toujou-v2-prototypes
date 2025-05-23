/// <reference types="cypress" />
/// <reference types="cypress-real-events" />

describe('main-nav [mobile]', () => {
    const mainNavId = 'mainNavigation';

    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-topbar--topbar');
    });

    it('has associated burger button', () => {

        cy.get('.burger-button').should('exist');
        cy.get('.burger-button').invoke('attr', 'aria-controls').should('eq', mainNavId);

        cy.get(`#${mainNavId}`).should('exist');
        cy.get(`#${mainNavId}`).invoke('attr', 'class').should('contain', 'main-nav');
    });

    it('has correct behavior', () => {
        const subNavId = 'nav4';
        const subNavLabelId = 'label_nav4';

        // Wait for fonts to be loaded
        cy.wait(1000);

        cy.get('.burger-button').as('burgerButton');
        cy.get('@burgerButton').invoke('attr', 'aria-pressed').should('eq', 'false');
        cy.get('@burgerButton').invoke('attr', 'aria-expanded').should('eq', 'false');

        cy.get(`#${mainNavId} .main-nav__list`).should('not.be.visible');

        // Open first level
        cy.get('@burgerButton').realTouch();
        cy.wait(500);
        cy.get('@burgerButton').invoke('attr', 'aria-pressed').should('eq', 'true');
        cy.get('@burgerButton').invoke('attr', 'aria-expanded').should('eq', 'true');
        cy.get(`#${mainNavId} .main-nav__list[data-nav-list-level="1"]`).should('be.visible');

        // Open second level
        cy.get(`#${mainNavId} .main-nav__list[data-nav-list-level="1"] > .main-nav__list-item[data-has-subnav]`).last().as('subNavListItem');
        cy.get('@subNavListItem').find(`.main-nav__chevron[aria-controls="${subNavId}"]`).as('subNavChevron');
        cy.get('@subNavListItem').find(`.main-nav__text#${subNavLabelId}`).should('exist');
        cy.get('@subNavChevron').realTouch();
        cy.get('@subNavListItem').invoke('attr', 'data-is-open').should('exist');
        cy.get('@subNavChevron').invoke('attr', 'aria-expanded').should('eq', 'true');
        cy.get('@subNavChevron').invoke('attr', 'aria-pressed').should('eq', 'true');
        cy.get(`#${mainNavId} .main-nav__list#${subNavId}`).as('subNavList');
        cy.get('@subNavList').should('exist');
        cy.get('@subNavList').scrollIntoView().should('be.visible');
        cy.get('@subNavList').invoke('attr', 'aria-labelledby').should('exist');
        cy.get('@subNavList').invoke('attr', 'aria-labelledby').should('eq', subNavLabelId);

        // Close first level
        cy.get('@burgerButton').realTouch();
        cy.wait(500);
        cy.get('@burgerButton').invoke('attr', 'aria-pressed').should('eq', 'false');
        cy.get('@burgerButton').invoke('attr', 'aria-expanded').should('eq', 'false');
        cy.get(`#${mainNavId} .main-nav__list[data-nav-list-level="1"]`).should('not.be.visible');

        // Check if second level controls are reset on re-opening first level
        cy.get('@burgerButton').realTouch();
        cy.wait(500);
        cy.get('@subNavListItem').invoke('attr', 'data-is-open').should('not.exist');
        cy.get('@subNavChevron').invoke('attr', 'aria-expanded').should('eq', 'false');
        cy.get('@subNavChevron').invoke('attr', 'aria-pressed').should('eq', 'false');
    });
});

export {}