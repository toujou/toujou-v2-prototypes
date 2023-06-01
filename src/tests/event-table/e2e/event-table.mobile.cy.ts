/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

const cardSelector = '.item-collection__item:first-child'

describe('event-table [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-eventtable--event-table');
    });

    it('has correct class and tag name', () => {
        cy.get(`${cardSelector}`).should('have.prop', 'tagName').should('eq', 'LI');
        cy.get(`${cardSelector}`).invoke('attr', 'class').should('eq', 'item-collection__item');
    });

    it('has correct card styles', () => {
        cy.get(`${cardSelector} .event-table-card`).should('have.css', 'display', 'grid');
        cy.get(`${cardSelector} .event-table-card`).should('have.css', 'grid-template-columns', '96px 184px');
        cy.get(`${cardSelector} .event-table-card`).should('have.css', 'width', '296px');
        cy.get(`${cardSelector} .event-table-card`).should('have.css', 'max-width', 'none');
        cy.get(`${cardSelector} .event-table-card`).should('have.css', 'border-radius', '0px');
        cy.get(`${cardSelector} .event-table-card`).should('have.css', 'z-index', 'auto');
    });

    it('has correct media date styles', () => {
        cy.get(`${cardSelector} .media-date`).should('exist');
        cy.get(`${cardSelector} .media-date`).should('have.css', 'position', 'relative');
        cy.get(`${cardSelector} .media-date`).should('have.css', 'top', '0px');
        cy.get(`${cardSelector} .media-date`).should('have.css', 'right', '0px');
        cy.get(`${cardSelector} .media-date`).should('have.css', 'background-color', colors.colorFontO10);
    });

    it('has correct chip styles', () => {
        cy.get(`${cardSelector} .chip`).invoke('attr', 'chip-size').should('eq', 'small');
        cy.get(`${cardSelector} .chip`).invoke('attr', 'chip-bg-color').should('eq', 'error');
    });

    it('has correct content styles', () => {
        cy.get(`${cardSelector} .event-table-card__content`).should('exist');

        cy.get(`${cardSelector} .event-table-card__title`).should('have.css', 'font-size', tokens.type.size.ms);
        cy.get(`${cardSelector} .event-table-card__title`).should('have.css', 'color', colors.colorFontDark);
        cy.get(`${cardSelector} .event-table-card__title`).should('have.css', 'margin', `0px 0px ${tokens.spacing.xs}`);
        cy.get(`${cardSelector} .event-table-card__title`).should('have.css', 'font-family', tokens.type.fontFamily.text);
        cy.get(`${cardSelector} .event-table-card__title`).should('have.css', 'font-weight', tokens.type.fontWeight.bold);
        cy.get(`${cardSelector} .event-table-card__info`).should('have.css', 'display', 'flex');
        cy.get(`${cardSelector} .event-table-card__info`).should('have.css', 'flex-direction', 'row');
        cy.get(`${cardSelector} .event-table-card__info`).should('have.css', 'gap', tokens.spacing.s);
        cy.get(`${cardSelector} .event-table-card__info .icon`).invoke('attr', 'icon-name').should('eq', 'info');
        cy.get(`${cardSelector} .event-table-card__info .icon`).invoke('attr', 'icon-color').should('eq', 'primary');
        cy.get(`${cardSelector} .event-table-card__info .icon`).invoke('attr', 'icon-size').should('eq', 'ms');
    });

    it('has correct button styles', () => {
        cy.get(`${cardSelector} .event-table-card__button`).should('exist');

        cy.get(`${cardSelector} .event-table-card__button`).should('have.css', 'text-decoration', `none solid ${colors.colorPrimary}`);
        cy.get(`${cardSelector} .event-table-card__button`).should('have.css', 'color', colors.colorPrimary);
        cy.get(`${cardSelector} .event-table-card__button`).should('have.css', 'display', 'flex');
        cy.get(`${cardSelector} .event-table-card__button`).should('have.css', 'align-items', 'center');
        cy.get(`${cardSelector} .event-table-card__button`).should('have.css', 'justify-content', 'center');
        cy.get(`${cardSelector} .event-table-card__button`).should('have.css', 'width', '175.6484375px');
        cy.get(`${cardSelector} .event-table-card__button`).should('have.css', 'gap', tokens.spacing.s);
    });
})

export {}
