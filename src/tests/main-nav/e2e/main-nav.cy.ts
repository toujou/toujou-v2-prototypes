/// <reference types="cypress" />
/// <reference types="cypress-real-events" />

const tokens = Cypress.env('tokens');

describe('main-nav', () => {
   beforeEach(() => {
       cy.visit('/iframe.html?viewMode=story&id=components-topbar--topbar');
   });

   it('has correct default attributes', () => {
      cy.get('.main-nav').should('exist');
      cy.get('.main-nav').invoke('prop', 'tagName').should('eq', 'NAV');
      cy.get('.main-nav').invoke('attr', 'class').should('eq', 'main-nav');
      cy.get('.main-nav').invoke('attr', 'aria-label').should('eq', 'Main navigation');
   });

   it('has correct structure', () => {
       cy.get('.main-nav').should('exist');
       cy.get('.main-nav .main-nav__list').should('exist');
       cy.get('.main-nav .main-nav__list').invoke('prop', 'tagName').should('match', /UL|OL/);
       cy.get('.main-nav .main-nav__list').invoke('attr', 'nav-list-level').should('exist');
       cy.get('.main-nav .main-nav__list[nav-list-level="1"]').invoke('attr', 'nav-list-level').should('exist');

       cy.get('.main-nav .main-nav__list > .main-nav__list-item').should('exist');
       cy.get('.main-nav .main-nav__list > .main-nav__list-item').invoke('prop', 'tagName').should('eq', 'LI');
       cy.get('.main-nav .main-nav__list > .main-nav__list-item').invoke('attr', 'nav-item-level').should('exist');
       cy.get('.main-nav .main-nav__list[nav-list-level="1"] > .main-nav__list-item').invoke('attr', 'nav-item-level').should('eq', '1');

       cy.get('.main-nav .main-nav__list > .main-nav__list-item > .main-nav__link').should('exist');
       cy.get('.main-nav .main-nav__list > .main-nav__list-item > .main-nav__link').invoke('prop', 'tagName').should('eq', 'A');
       cy.get('.main-nav .main-nav__list > .main-nav__list-item > .main-nav__link').invoke('attr', 'href').should('exist');

       cy.get('.main-nav .main-nav__list > .main-nav__list-item > .main-nav__link[aria-current="page"]').should('have.length.of', 1);

       cy.get('.main-nav .main-nav__list > .main-nav__list-item > .main-nav__link > .main-nav__text').should('exist');
       cy.get('.main-nav .main-nav__list > .main-nav__list-item > .main-nav__link > .main-nav__text').invoke('prop', 'tagName').should('eq', 'SPAN');

       cy.get('.main-nav .main-nav__list-item[has-subnav] > .main-nav__link > .main-nav__text').invoke('attr', 'id').should('exist');
       cy.get('.main-nav .main-nav__list-item[has-subnav] > .main-nav__chevron').should('exist');
       cy.get('.main-nav .main-nav__list-item[has-subnav] > .main-nav__chevron').invoke('prop', 'tagName').should('eq', 'BUTTON');
       cy.get('.main-nav .main-nav__list-item[has-subnav] > .main-nav__chevron').invoke('attr', 'aria-label').should('exist');
       cy.get('.main-nav .main-nav__list-item[has-subnav] > .main-nav__chevron').invoke('attr', 'aria-controls').should('exist');
       cy.get('.main-nav .main-nav__list-item[has-subnav] > .main-nav__chevron').invoke('attr', 'aria-expanded').should('exist');
       cy.get('.main-nav .main-nav__list-item[has-subnav]:not([is-open]) > .main-nav__chevron').invoke('attr', 'aria-expanded').should('eq', 'false');
       cy.get('.main-nav .main-nav__list-item[has-subnav] > .main-nav__chevron').invoke('attr', 'aria-pressed').should('exist');
       cy.get('.main-nav .main-nav__list-item[has-subnav]:not([is-open]) > .main-nav__chevron').invoke('attr', 'aria-pressed').should('eq', 'false');
       cy.get('.main-nav .main-nav__list-item[has-subnav] > .main-nav__list').should('exist');
   });

   it('has correct behavior', () => {
       const subNavId = 'nav2';
       const subNavLabelId = 'label_nav2';
       const subSubNavId = 'nav2_2';
       const subSubNavLabelId = 'label_nav2_2';

       // Wait for fonts to be loaded
       cy.wait(1000);

       cy.get('.main-nav .main-nav__list:not([nav-list-level="1"]').should('not.be.visible');

       // Open second level
       cy.get('.main-nav .main-nav__list-item[has-subnav]').first().as('subNavListItem');
       cy.get('@subNavListItem').find(`.main-nav__chevron[aria-controls="${subNavId}"]`).as('subNavChevron');
       cy.get('@subNavListItem').find(`.main-nav__text#${subNavLabelId}`).should('exist');
       cy.get('@subNavChevron').realClick();
       cy.get('@subNavListItem').invoke('attr', 'is-open').should('exist');
       cy.get('@subNavChevron').invoke('attr', 'aria-expanded').should('eq', 'true');
       cy.get('@subNavChevron').invoke('attr', 'aria-pressed').should('eq', 'true');
       cy.get(`.main-nav .main-nav__list#${subNavId}`).should('exist');
       cy.get(`.main-nav .main-nav__list#${subNavId}`).should('be.visible');
       cy.get(`.main-nav .main-nav__list#${subNavId}`).invoke('attr', 'aria-labelledby').should('exist');
       cy.get(`.main-nav .main-nav__list#${subNavId}`).invoke('attr', 'aria-labelledby').should('eq', subNavLabelId);

       // Open third level
       cy.get(`.main-nav .main-nav__list#${subNavId}`).find(`.main-nav__list-item[has-subnav]:has([aria-controls="${subSubNavId}"])`).as('subSubNavListItem');
       cy.get('@subSubNavListItem').find(`.main-nav__chevron[aria-controls="${subSubNavId}"]`).as('subSubNavChevron');
       cy.get('@subSubNavListItem').find(`.main-nav__text#${subSubNavLabelId}`).should('exist');
       cy.get('@subSubNavChevron').realClick();
       cy.get('@subSubNavListItem').invoke('attr', 'is-open').should('exist');
       cy.get('@subSubNavChevron').invoke('attr', 'aria-expanded').should('eq', 'true');
       cy.get('@subSubNavChevron').invoke('attr', 'aria-pressed').should('eq', 'true');
       cy.get(`.main-nav .main-nav__list#${subSubNavId}`).should('exist');
       cy.get(`.main-nav .main-nav__list#${subSubNavId}`).should('be.visible');
       cy.get(`.main-nav .main-nav__list#${subSubNavId}`).invoke('attr', 'aria-labelledby').should('exist');
       cy.get(`.main-nav .main-nav__list#${subSubNavId}`).invoke('attr', 'aria-labelledby').should('eq', subSubNavLabelId);

       // Close third level
       cy.get('@subSubNavChevron').realClick();
       cy.get('@subSubNavListItem').invoke('attr', 'is-open').should('not.exist');
       cy.get('@subSubNavChevron').invoke('attr', 'aria-expanded').should('eq', 'false');
       cy.get('@subSubNavChevron').invoke('attr', 'aria-pressed').should('eq', 'false');
       cy.get(`.main-nav .main-nav__list#${subSubNavId}`).should('not.be.visible');
       cy.get('@subSubNavChevron').realClick();

       // Close second level
       cy.get('@subNavChevron').realClick();
       cy.get('@subNavListItem').invoke('attr', 'is-open').should('not.exist');
       cy.get('@subNavChevron').invoke('attr', 'aria-expanded').should('eq', 'false');
       cy.get('@subNavChevron').invoke('attr', 'aria-pressed').should('eq', 'false');
       cy.get(`.main-nav .main-nav__list#${subNavId}`).should('not.be.visible');

       // Check if third level has also been closed
       cy.get(`.main-nav .main-nav__list#${subSubNavId}`).should('not.be.visible');

       // Check if third level controls are reset on re-opening second level
       cy.get('@subNavChevron').realClick();
       cy.get('@subSubNavListItem').invoke('attr', 'is-open').should('not.exist');
       cy.get('@subSubNavChevron').invoke('attr', 'aria-expanded').should('eq', 'false');
       cy.get('@subSubNavChevron').invoke('attr', 'aria-pressed').should('eq', 'false');
   });
});

export {}