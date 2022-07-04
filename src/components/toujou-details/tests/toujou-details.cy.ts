/// <reference types="cypress" />

const colorPrimary = Cypress.env('colorPrimary');
const colorFont = Cypress.env('colorFont');

describe('toujou-details', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-accordion--details')
    })

    it('opens / closes on title click', () => {
        /* open on title click */
        cy.get('toujou-details').invoke('attr', 'is-open').should('not.exist')
        cy.get('.details__title').click();
        cy.get('toujou-details').invoke('attr', 'is-open').should('exist')

        /* close on title click */
        cy.get('.details__title').click();
        cy.get('toujou-details').invoke('attr', 'is-open').should('not.exist')
    })

    it('opens / closes on chevron click', () => {
        /* open on chevron click */
        cy.get('toujou-details').invoke('attr', 'is-open').should('not.exist')
        cy.get('toujou-icon').click();
        cy.get('toujou-details').invoke('attr', 'is-open').should('exist')

        /* close on chevron click */
        cy.get('toujou-icon').click();
        cy.get('toujou-details').invoke('attr', 'is-open').should('not.exist')
    })

    it('opens / closes on list click', () => {
        /* open on chevron click */
        cy.get('toujou-details').invoke('attr', 'is-open').should('not.exist')
        cy.get('.details__subtitle ').click();
        cy.get('toujou-details').invoke('attr', 'is-open').should('exist')

        /* close on chevron click */
        cy.get('.details__subtitle ').click();
        cy.get('toujou-details').invoke('attr', 'is-open').should('not.exist')
    })

    it('title has correct color when closed', () => {
        cy.get('.details__title').should('have.css', 'color', colorFont)
    })

    it('title has correct color when open', () => {
        cy.get('.details__title').click();
        cy.get('.details__title').should('have.css', 'color', colorPrimary)
    })

    it('chevron has correct color when closed', () => {
        cy.get('.details__chevron').should('have.css', 'background-color', colorFont)
    })

    it.only('chevron has correct color when open', () => {
        cy.get('.details__title').click();
        cy.get('.details__chevron').should('have.css', 'background-color', colorPrimary)
    })
})

export {}
