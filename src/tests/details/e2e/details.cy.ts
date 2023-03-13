/// <reference types="cypress" />

const colors = Cypress.env('colors');

describe('toujou-details', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-accordion--details');
    })

    it('opens / closes on title click', () => {
        /* open on title click */
        cy.get('#details-1').invoke('attr', 'is-open').should('not.exist');
        cy.get(`#details-1 .details__title`).click();
        cy.get('toujou-details').invoke('attr', 'is-open').should('exist');

        /* close on title click */
         cy.get('#details-1 .details__title').click();
         cy.get('#details-1').invoke('attr', 'is-open').should('not.exist');
    })

    it('opens / closes on chevron click', () => {
        /* open on chevron click */
        cy.get('#details-1').invoke('attr', 'is-open').should('not.exist')
        cy.get('#details-1 toujou-icon').click();
        cy.get('#details-1').invoke('attr', 'is-open').should('exist')

        /* close on chevron click */
        cy.get('#details-1 toujou-icon').click();
        cy.get('#details-1').invoke('attr', 'is-open').should('not.exist');
    })

    it('opens / closes on list click', () => {
        /* open on chevron click */
        cy.get('#details-1').invoke('attr', 'is-open').should('not.exist');
        cy.get('#details-1 .details__subtitle ').click();
        cy.get('#details-1').invoke('attr', 'is-open').should('exist');

        /* close on chevron click */
        cy.get('#details-1 .details__subtitle ').click();
        cy.get('#details-1').invoke('attr', 'is-open').should('not.exist');
    })

    it('title has correct color when closed', () => {
        cy.get('#details-1 .details__title').should('have.css', 'color', colors.colorFontDark);
    })

    it('title has correct color when open', () => {
        cy.get('#details-1 .details__title').click();
        cy.get('#details-1 .details__title').should('have.css', 'color', colors.colorPrimary);
    })

    it('chevron has correct color when closed', () => {
        cy.get('#details-1 .details__chevron').should('have.css', 'background-color', colors.colorFontDark);
    })

    it('chevron has correct color when open', () => {
        cy.get('#details-1 .details__title').click();
        cy.get('#details-1 .details__chevron').should('have.css', 'background-color', colors.colorFontDark);
    })
})

export {}
