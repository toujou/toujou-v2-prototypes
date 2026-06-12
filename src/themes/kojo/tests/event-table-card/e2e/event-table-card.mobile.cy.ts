/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');
const testEventCardSelector = 'main > .item-collection > .item-collection__item:first-child .event-table-card';

describe('event table [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-eventtable--event-table');
    });

    it.only('has correct styles', () => {
        cy.get(testEventCardSelector).should('have.css', 'display', 'grid');
        cy.get(testEventCardSelector).should('have.css', 'grid-template-areas', '"calendarPages eventChip" "eventContent eventContent"');
        cy.get(testEventCardSelector).should('have.css', 'grid-template-columns', '129.297px 134.703px');
        cy.get(testEventCardSelector).should('have.css', 'padding', `${tokens.spacing.normal} ${tokens.spacing.s}`);
        cy.get(testEventCardSelector).should('have.css', 'margin', '0px');

        cy.get(`${testEventCardSelector} .event-table-card__calendar-pages`).should('have.css', 'display', 'flex');
        cy.get(`${testEventCardSelector} .event-table-card__calendar-pages`).should('have.css', 'flex-direction', 'row');
        cy.get(`${testEventCardSelector} .event-table-card__calendar-pages`).should('have.css', 'align-items', 'center');
        cy.get(`${testEventCardSelector} .event-table-card__calendar-pages`).should('have.css', 'justify-content', 'center');
        cy.get(`${testEventCardSelector} .event-table-card__calendar-pages`).should('have.css', 'gap', '0px');

        cy.get(`${testEventCardSelector} .event-table-card__content`).should('have.css', 'grid-area', 'eventContent');
        cy.get(`${testEventCardSelector} .event-table-card__content`).should('have.css', 'display', 'block');
        cy.get(`${testEventCardSelector} .event-table-card__content`).should('have.css', 'width', '280px');
        cy.get(`${testEventCardSelector} .event-table-card__content`).should('have.css', 'height', '54px');

        cy.get(`${testEventCardSelector} .event-table-card__title`).should('have.css', 'font-family', `${tokens.type.fontFamily.text}`);
        cy.get(`${testEventCardSelector} .event-table-card__title`).should('have.css', 'font-size', `${tokens.type.size.ms}`);
        cy.get(`${testEventCardSelector} .event-table-card__title`).should('have.css', 'line-height', '25px');
        cy.get(`${testEventCardSelector} .event-table-card__title`).should('have.css', 'font-weight', '800');
        cy.get(`${testEventCardSelector} .event-table-card__title`).should('have.css', 'color', `${colors.colorFontDark}`);
    });
})

export {}
