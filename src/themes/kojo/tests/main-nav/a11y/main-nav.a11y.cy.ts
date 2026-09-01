/// <reference types="cypress" />
/// <reference types="cypress-axe" />
/// <reference types="cypress-real-events" />

describe('main-nav a11y', () => {
    beforeEach(() => {
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
        const subNav2Id = 'nav2';
        const subNav2LabelId = 'label_nav2';
        const subSubNavId = 'nav2_2';
        const subSubNavLabelId = 'label_nav2_2';
        const subNav4Id = 'nav4';
        const subNav4LabelId = 'label_nav4';

        // Wait for fonts to be loaded
        cy.wait(1000);

        cy.get('.main-nav .main-nav__list:not([data-nav-list-level="1"]').should('not.be.visible');

        ['Enter', 'Space'].forEach(toggleKey => {
            // Tab over topbar items and to first second-level nav trigger
            cy.get('body').realClick();
            Cypress._.times(10, () => {
                cy.realPress('Tab');
            });

            // Open second level
            cy.focused().as('subNavChevron');
            cy.get('@subNavChevron').invoke('attr', 'class').should('contain', 'main-nav__chevron');
            cy.get('@subNavChevron').invoke('attr', 'aria-controls').should('eq', subNav2Id);
            cy.get('@subNavChevron').invoke('attr', 'aria-expanded').should('eq', 'false');
            cy.get('@subNavChevron').invoke('attr', 'aria-pressed').should('eq', 'false');
            cy.get('@subNavChevron').parent('.main-nav__list-item').as('subNavListItem');
            cy.get('@subNavListItem').invoke('attr', 'data-is-open').should('not.exist');
            cy.get('@subNavListItem').find(`.main-nav__text#${subNav2LabelId}`).should('exist');
            /* @ts-ignore */
            cy.realPress(toggleKey);
            cy.get('@subNavListItem').invoke('attr', 'data-is-open').should('exist');
            cy.get('@subNavChevron').invoke('attr', 'aria-expanded').should('eq', 'true');
            cy.get('@subNavChevron').invoke('attr', 'aria-pressed').should('eq', 'true');
            cy.get(`.main-nav .main-nav__list#${subNav2Id}`).as('subNavList');
            cy.get('@subNavList').should('exist');
            cy.get('@subNavList').should('be.visible');
            cy.get('@subNavList').invoke('attr', 'aria-labelledby').should('exist');
            cy.get('@subNavList').invoke('attr', 'aria-labelledby').should('eq', subNav2LabelId);

            // Open third level
            Cypress._.times(4, () => {
                cy.realPress('Tab');
            });
            cy.focused().as('subSubNavChevron');
            cy.get('@subSubNavChevron').invoke('attr', 'class').should('contain', 'main-nav__chevron');
            cy.get('@subSubNavChevron').invoke('attr', 'aria-controls').should('eq', subSubNavId);
            cy.get('@subSubNavChevron').invoke('attr', 'aria-expanded').should('eq', 'false');
            cy.get('@subSubNavChevron').invoke('attr', 'aria-pressed').should('eq', 'false');
            cy.get('@subSubNavChevron').parent('.main-nav__list-item').as('subSubNavListItem');
            cy.get('@subSubNavListItem').invoke('attr', 'data-is-open').should('not.exist');
            cy.get('@subSubNavListItem').find(`.main-nav__text#${subSubNavLabelId}`).should('exist');
            /* @ts-ignore */
            cy.realPress(toggleKey);
            cy.get('@subSubNavListItem').invoke('attr', 'data-is-open').should('exist');
            cy.get('@subSubNavChevron').invoke('attr', 'aria-expanded').should('eq', 'true');
            cy.get('@subSubNavChevron').invoke('attr', 'aria-pressed').should('eq', 'true');
            cy.get(`.main-nav .main-nav__list#${subSubNavId}`).as('subSubNavList');
            cy.get('@subSubNavList').should('exist');
            cy.get('@subSubNavList').should('be.visible');
            cy.get('@subSubNavList').invoke('attr', 'aria-labelledby').should('exist');
            cy.get('@subSubNavList').invoke('attr', 'aria-labelledby').should('eq', subSubNavLabelId);

            Cypress._.times(2, () => {
                cy.realPress('Tab');
            })

            // Close third-level nav
            cy.realPress('Escape');
            cy.get('@subSubNavListItem').invoke('attr', 'data-is-open').should('not.exist');
            cy.get('@subSubNavChevron').invoke('attr', 'aria-expanded').should('eq', 'false');
            cy.get('@subSubNavChevron').invoke('attr', 'aria-pressed').should('eq', 'false');

            // Check if second-level nav is still open
            cy.get(`.main-nav__chevron[aria-controls="${subNav2Id}"]`).as('subNavChevron');
            cy.get('@subNavChevron').invoke('attr', 'aria-expanded').should('eq', 'true');
            cy.get('@subNavChevron').invoke('attr', 'aria-pressed').should('eq', 'true');
            cy.get('@subNavChevron').parent('.main-nav__list-item').as('subNavListItem');
            cy.get('@subNavListItem').invoke('attr', 'data-is-open').should('exist');

            // Check if the appropriate chevron is focused
            cy.focused().invoke('attr', 'aria-controls').should('eq', subSubNavId);

            // Tab to fourth second-level nav trigger
            Cypress._.times(33, () => {
                cy.realPress('Tab');
            });
            cy.focused().as('subNavChevron');
            cy.get('@subNavChevron').invoke('attr', 'class').should('contain', 'main-nav__chevron');
            cy.get('@subNavChevron').invoke('attr', 'aria-controls').should('eq', subNav4Id);
            cy.get('@subNavChevron').invoke('attr', 'aria-expanded').should('eq', 'false');
            cy.get('@subNavChevron').invoke('attr', 'aria-pressed').should('eq', 'false');
            cy.get('@subNavChevron').parent('.main-nav__list-item').as('subNavListItem');
            cy.get('@subNavListItem').invoke('attr', 'data-is-open').should('not.exist');
            cy.get('@subNavListItem').find(`.main-nav__text#${subNav4LabelId}`).should('exist');
            /* @ts-ignore */
            cy.realPress(toggleKey);
            cy.get('@subNavListItem').invoke('attr', 'data-is-open').should('exist');
            cy.get('@subNavChevron').invoke('attr', 'aria-expanded').should('eq', 'true');
            cy.get('@subNavChevron').invoke('attr', 'aria-pressed').should('eq', 'true');
            cy.get(`.main-nav .main-nav__list#${subNav4Id}`).as('subNavList');
            cy.get('@subNavList').should('exist');
            cy.get('@subNavList').should('be.visible');
            cy.get('@subNavList').invoke('attr', 'aria-labelledby').should('exist');
            cy.get('@subNavList').invoke('attr', 'aria-labelledby').should('eq', subNav4LabelId);

            // Check if second second-level nav has been closed
            cy.get(`.main-nav__chevron[aria-controls="${subNav2Id}"]`).as('subNavSiblingChevron');
            cy.get('@subNavSiblingChevron').parent('.main-nav__list-item').invoke('attr', 'data-is-open').should('not.exist');
            cy.get('@subNavSiblingChevron').invoke('attr', 'aria-expanded').should('eq', 'false');
            cy.get('@subNavSiblingChevron').invoke('attr', 'aria-pressed').should('eq', 'false');
            cy.get(`.main-nav .main-nav__list#${subNav2Id}`).should('not.be.visible');

            // Close second-level nav
            cy.realPress('Escape');
            cy.get('@subNavListItem').invoke('attr', 'data-is-open').should('not.exist');
            cy.get('@subNavChevron').invoke('attr', 'aria-expanded').should('eq', 'false');
            cy.get('@subNavChevron').invoke('attr', 'aria-pressed').should('eq', 'false');
            cy.get('.main-nav .main-nav__list-item[data-is-open]').should('not.exist');
            cy.focused().invoke('attr', 'aria-controls').should('eq', subNav4Id);
        });
    });
})

export {}