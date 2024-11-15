/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');
const avrRatingSelector = '.average-rating[is-test-target]';

describe('average rating', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-average-rating--average-rating');
    });

    it('has correct class and tag name', () => {
        cy.get(avrRatingSelector).should('have.prop', 'tagName').should('eq', 'DIV');
        cy.get(avrRatingSelector).invoke('attr', 'class').should('eq', 'average-rating');
    });

    it.only('has correct styles', () => {
        cy.get(avrRatingSelector).should('have.css', 'display', 'block');
        cy.get(avrRatingSelector).should('have.css', 'padding', `${tokens.spacing.m}`);
        cy.get(avrRatingSelector).should('have.css', 'border-radius', tokens.borderRadius.normal);

        cy.get(`${avrRatingSelector} .average-rating__rating`).should('have.css', 'display', 'grid');
        cy.get(`${avrRatingSelector} .average-rating__rating`).should('have.css', 'grid-template-areas', '"rating stars" "count count"');
        cy.get(`${avrRatingSelector} .average-rating__rating`).should('have.css', 'grid-template-columns', '28.75px 103.375px');
        cy.get(`${avrRatingSelector} .average-rating__rating`).should('have.css', 'width', '140.125px');

        cy.get(`${avrRatingSelector} .average-rating__link`).should('have.css', 'font-family', `${tokens.type.fontFamily.text}`);
        cy.get(`${avrRatingSelector} .average-rating__link`).should('have.css', 'font-size', `${tokens.type.size.normal}`);
        cy.get(`${avrRatingSelector} .average-rating__link`).should('have.css', 'color', `${colors.colorPrimary}`);
        cy.get(`${avrRatingSelector} .average-rating__link`).should('have.css', 'text-decoration', `underline solid ${colors.colorPrimary}`);
    });
})

export {}
