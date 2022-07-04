/// <reference types="cypress" />

describe('toujou-details-accordion', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-accordion--details-accordion');
    })

    it('has correct number of child Details Elements', () => {
        cy.get('toujou-details-accordion').children().should('have.length', 4);
    })

    it('has correct number of open child Details Elements', () => {
        cy.get('toujou-details-accordion').children('toujou-details[is-open]').should('have.length', 1);
    })

    it('can close the first details element', () => {
        cy.get('toujou-details-accordion').find('toujou-details[is-open]').should('have.length', 1);
        cy.get('toujou-details-accordion').find('toujou-details[is-open] .details__title').click();
        cy.get('toujou-details-accordion').find('toujou-details[is-open]').should('have.length', 0);
    })

    it('can open the second details element', () => {
        cy.get('toujou-details-accordion').find('toujou-details[is-open]').should('have.length', 1);
        cy.get('toujou-details-accordion').find('toujou-details:nth-child(2) .details__title').click();
        cy.get('toujou-details-accordion').find('toujou-details[is-open]').should('have.length', 2);
    })

    it('can open multiple details elements at the same time', () => {
        cy.get('toujou-details-accordion').find('toujou-details[is-open]').should('have.length', 1);
        cy.get('toujou-details-accordion').find('toujou-details:nth-child(2) .details__title').click();
        cy.get('toujou-details-accordion').find('toujou-details:nth-child(3) .details__title').click();
        cy.get('toujou-details-accordion').find('toujou-details:nth-child(4) .details__title').click();
        cy.get('toujou-details-accordion').find('toujou-details[is-open]').should('have.length', 4);
    })

    it('keeps only one accordion open when SingleExpandMode is active', () => {
        cy.get('toujou-details-accordion').then((e) => {
            e[0].setAttribute('single-expand-mode', '');
        });
        cy.get('toujou-details-accordion').find('toujou-details[is-open]').should('have.length', 1);
        cy.get('toujou-details-accordion').find('toujou-details:nth-child(2) .details__title').click();
        cy.get('toujou-details-accordion').find('toujou-details[is-open]').should('have.length', 1);
        cy.get('toujou-details-accordion').find('toujou-details:nth-child(3) .details__title').click();
        cy.get('toujou-details-accordion').find('toujou-details[is-open]').should('have.length', 1);
        cy.get('toujou-details-accordion').find('toujou-details:nth-child(4) .details__title').click();
        cy.get('toujou-details-accordion').find('toujou-details[is-open]').should('have.length', 1);
    })
})

export {}
