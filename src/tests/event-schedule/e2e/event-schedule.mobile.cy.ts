/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

const cardSelector = '.collection-item:first-child'

describe('event schedule [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-eventschedule--event-schedule');
    });

    it('has correct class and tag name', () => {
        cy.get(`${cardSelector}`).should('have.prop', 'tagName').should('eq', 'TOUJOU-COLLECTION-ITEM');
        cy.get(`${cardSelector}`).invoke('attr', 'class').should('eq', 'collection-item');
    });

    it('has correct attributes', () => {
        cy.get(`${cardSelector}`).invoke('attr', 'item-type').should('eq', 'event-schedule');
        cy.get(`${cardSelector}`).invoke('attr', 'element-design').should('eq', 'default');
        cy.get(`${cardSelector}`).invoke('attr', 'item-orientation').should('eq', 'vertical');
        cy.get(`${cardSelector}`).invoke('attr', 'role').should('eq', 'article');
    });

    it('has correct card styles', () => {
        cy.get(`${cardSelector}`).should('have.css', 'position', 'relative');
        cy.get(`${cardSelector}`).should('have.css', 'display', 'flex');
        cy.get(`${cardSelector}`).should('have.css', 'flex-direction', 'column');
        cy.get(`${cardSelector}`).should('have.css', 'width', '296px');
        cy.get(`${cardSelector}`).should('have.css', 'max-width', '100%');
        cy.get(`${cardSelector}`).should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.05) 0px 4px 5px 0px, rgba(0, 0, 0, 0.06) 0px 1px 10px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px -1px');
        cy.get(`${cardSelector}`).should('have.css', 'border-radius', tokens.borderRadius.normal);
        cy.get(`${cardSelector}`).should('have.css', 'overflow', 'hidden');
        cy.get(`${cardSelector}`).should('have.css', 'background-color', colors.colorBg);
        cy.get(`${cardSelector}`).should('have.css', 'z-index', '1');
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
        cy.get(`${cardSelector} .event-schedule-card__content`).should('exist');

        cy.get(`${cardSelector} .event-schedule-card__title`).should('have.css', 'font-size', tokens.type.size.ms);
        cy.get(`${cardSelector} .event-schedule-card__title`).should('have.css', 'color', colors.colorFontDark);
        cy.get(`${cardSelector} .event-schedule-card__title`).should('have.css', 'margin', `0px 0px ${tokens.spacing.xs}`);
        cy.get(`${cardSelector} .event-schedule-card__title`).should('have.css', 'font-family', tokens.type.fontFamily.text);
        cy.get(`${cardSelector} .event-schedule-card__title`).should('have.css', 'font-weight', tokens.type.fontWeight.bold);

        cy.get(`${cardSelector} .event-schedule-card__info`).should('have.css', 'display', 'flex');
        cy.get(`${cardSelector} .event-schedule-card__info`).should('have.css', 'flex-direction', 'row');
        cy.get(`${cardSelector} .event-schedule-card__info`).should('have.css', 'gap', tokens.spacing.s);

        cy.get(`${cardSelector} .event-schedule-card__info .icon`).invoke('attr', 'icon-name').should('eq', 'info');
        cy.get(`${cardSelector} .event-schedule-card__info .icon`).invoke('attr', 'icon-color').should('eq', 'primary');
        cy.get(`${cardSelector} .event-schedule-card__info .icon`).invoke('attr', 'icon-size').should('eq', 'ms');
    });

    it('has correct button styles', () => {
        cy.get(`${cardSelector} .event-schedule-card__button`).should('exist');

        cy.get(`${cardSelector} .event-schedule-card__button`).should('have.css', 'text-decoration', `none solid ${colors.colorPrimary}`);
        cy.get(`${cardSelector} .event-schedule-card__button`).should('have.css', 'color', colors.colorPrimary);
        cy.get(`${cardSelector} .event-schedule-card__button`).should('have.css', 'display', 'flex');
        cy.get(`${cardSelector} .event-schedule-card__button`).should('have.css', 'align-items', 'center');
        cy.get(`${cardSelector} .event-schedule-card__button`).should('have.css', 'justify-content', 'center');
        cy.get(`${cardSelector} .event-schedule-card__button`).should('have.css', 'width', '175.6484375px');
        cy.get(`${cardSelector} .event-schedule-card__button`).should('have.css', 'gap', tokens.spacing.s);
    });
})

export {}
