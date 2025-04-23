/// <reference types="cypress" />
/// <reference types="cypress-axe" />
/// <reference types="cypress-real-events" />

describe('main-nav a11y [mobile]', () => {
    const mainNavId = 'mainNavigation';

    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-topbar--topbar');
    });

    it('has no detectable a11y violation on load', async () => {
        await cy.injectAxe();
        cy.get('.main-nav');
        await cy.checkA11y('.main-nav', {
            rules: {
                'color-contrast': { enabled: false }
            }
        });
    });

    it('is controllable via keyboard', () => {
       const subNavId = 'nav4';
       const subNavLabelId = 'label_nav4';

        // Wait for fonts to be loaded
        cy.wait(1000);

        cy.get('.burger-button').as('burgerButton');
        cy.get('@burgerButton').invoke('attr', 'aria-pressed').should('eq', 'false');
        cy.get('@burgerButton').invoke('attr', 'aria-expanded').should('eq', 'false');

        cy.get(`#${mainNavId} .main-nav__list`).should('not.be.visible');

        ['Enter', 'Space'].forEach(toggleKey => {
            // Open first level
            cy.get('@burgerButton').focus();
            /* @ts-ignore */
            cy.realPress(toggleKey);
            cy.wait(500);
            cy.get('@burgerButton').invoke('attr', 'aria-pressed').should('eq', 'true');
            cy.get('@burgerButton').invoke('attr', 'aria-expanded').should('eq', 'true');
            cy.get(`#${mainNavId} .main-nav__list[nav-list-level="1"]`).should('be.visible');

            // Open second level
            cy.get(`#${mainNavId} .main-nav__list[nav-list-level="1"] > .main-nav__list-item[has-subnav]`).last().as('subNavListItem');
            cy.get('@subNavListItem').find(`.main-nav__chevron[aria-controls="${subNavId}"]`).as('subNavChevron');
            cy.get('@subNavListItem').find(`.main-nav__text#${subNavLabelId}`).should('exist');

            Cypress._.times(6, () => {
                cy.realPress('Tab');
            });
            /* @ts-ignore */
            cy.realPress(toggleKey);

            cy.get('@subNavListItem').invoke('attr', 'is-open').should('exist');
            cy.get('@subNavChevron').invoke('attr', 'aria-expanded').should('eq', 'true');
            cy.get('@subNavChevron').invoke('attr', 'aria-pressed').should('eq', 'true');
            cy.get(`#${mainNavId} .main-nav__list#${subNavId}`).as('subNavList');
            cy.get('@subNavList').should('exist');
            cy.get('@subNavList').scrollIntoView().should('be.visible');
            cy.get('@subNavList').invoke('attr', 'aria-labelledby').should('exist');
            cy.get('@subNavList').invoke('attr', 'aria-labelledby').should('eq', subNavLabelId);

            // Close second level
            cy.realPress('Escape');
            cy.get('@subNavListItem').invoke('attr', 'is-open').should('not.exist');
            cy.get('@subNavChevron').invoke('attr', 'aria-expanded').should('eq', 'false');
            cy.get('@subNavChevron').invoke('attr', 'aria-pressed').should('eq', 'false');
            cy.get(`#${mainNavId} .main-nav__list#${subNavId}`).should('not.be.visible');

            // Close first level
            Cypress._.times(6, () => {
                cy.realPress(['Shift', 'Tab']);
            })
            /* @ts-ignore */
            cy.realPress(toggleKey);
        });
    });
});

export {}