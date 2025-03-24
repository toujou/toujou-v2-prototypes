/// <reference types="cypress" />
/// <reference types="cypress-axe" />

import { CALENDAR_PAGE_SELECTORS } from "../calendar-page-selectors";

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('Calendar page inline', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-calendar-pages--calendar-pages');
    });

    it('single day inline has correct attributes', () => {
        cy.get(CALENDAR_PAGE_SELECTORS.SINGLE_DAY_INLINE).should('have.prop', 'tagName').should('eq', 'TIME');
        cy.get(CALENDAR_PAGE_SELECTORS.SINGLE_DAY_INLINE).invoke('attr', 'datetime').should('eq', '2025-11-14');
        cy.get(CALENDAR_PAGE_SELECTORS.SINGLE_DAY_INLINE).invoke('attr', 'single-day').should('exist');
        cy.get(CALENDAR_PAGE_SELECTORS.SINGLE_DAY_INLINE).invoke('attr', 'inline').should('exist');
    });

    it('single day inline has correct structure', () => {
        cy.get(`${CALENDAR_PAGE_SELECTORS.SINGLE_DAY_INLINE} .calendar-page__date`).should('exist');
        cy.get(`${CALENDAR_PAGE_SELECTORS.SINGLE_DAY_INLINE} .calendar-page__date .calendar-page__month`).should('exist');
        cy.get(`${CALENDAR_PAGE_SELECTORS.SINGLE_DAY_INLINE} .calendar-page__date .calendar-page__day`).should('exist');
        cy.get(`${CALENDAR_PAGE_SELECTORS.SINGLE_DAY_INLINE} .calendar-page__date .calendar-page__year`).should('not.exist');
        cy.get(`${CALENDAR_PAGE_SELECTORS.SINGLE_DAY_INLINE} .calendar-page__times`).should('not.exist');
        cy.get(`${CALENDAR_PAGE_SELECTORS.SINGLE_DAY_INLINE} .calendar-page__time--start`).should('not.exist');
        cy.get(`${CALENDAR_PAGE_SELECTORS.SINGLE_DAY_INLINE} .calendar-page__time-separator`).should('not.exist');
        cy.get(`${CALENDAR_PAGE_SELECTORS.SINGLE_DAY_INLINE} .calendar-page__time--end`).should('not.exist');
    });

    it('single day inline has correct styles', () => {
        cy.get(`${CALENDAR_PAGE_SELECTORS.SINGLE_DAY_INLINE}`).then((singleDayInline) => {
            expect(singleDayInline).to.have.css('display').equal('flex');
            expect(singleDayInline).to.have.css('flex-direction').equal('row');
            expect(singleDayInline).to.have.css('align-items').equal('center');
            expect(singleDayInline).to.have.css('justify-content').equal('center');
            expect(singleDayInline).to.have.css('border').equal('1px solid rgba(0, 0, 0, 0)');
            expect(singleDayInline).to.have.css('padding').equal('0px');
            expect(singleDayInline).to.have.css('margin').equal('0px');
            expect(singleDayInline).to.have.css('height').equal('42px');
        });
    });

    it('single day inline "date" has correct styles', () => {
        cy.get(`${CALENDAR_PAGE_SELECTORS.SINGLE_DAY_INLINE} .calendar-page__date`).then((singleDayDateInline) => {
            expect(singleDayDateInline).to.have.css('display').equal('flex');
            expect(singleDayDateInline).to.have.css('flex-direction').equal('column');
            expect(singleDayDateInline).to.have.css('align-items').equal('center');
            expect(singleDayDateInline).to.have.css('justify-content').equal('center');
            expect(singleDayDateInline).to.have.css('padding').equal('0px');
            expect(singleDayDateInline).to.have.css('margin').equal('0px');
            expect(singleDayDateInline).to.have.css('height').equal('40px');
        });
    });

    it('single day inline "month" has correct styles', () => {
        cy.get(`${CALENDAR_PAGE_SELECTORS.SINGLE_DAY_INLINE} .calendar-page__month`).then((singleDayMonthInline) => {
            expect(singleDayMonthInline).to.have.css('display').equal('block');
            expect(singleDayMonthInline).to.have.css('flex-direction').equal('row');
            expect(singleDayMonthInline).to.have.css('padding').equal('0px');
            expect(singleDayMonthInline).to.have.css('margin').equal('0px');
            expect(singleDayMonthInline).to.have.css('height').equal('12px');
            expect(singleDayMonthInline).to.have.css('font-family').equal(tokens.type.fontFamily.text);
            expect(singleDayMonthInline).to.have.css('font-size').equal(tokens.type.size.xs);
            expect(singleDayMonthInline).to.have.css('font-weight').equal(tokens.type.fontWeight.headline);
            expect(singleDayMonthInline).to.have.css('color').equal(colors.colorFont);
        });
    });

    it('single day inline "day" has correct styles', () => {
        cy.get(`${CALENDAR_PAGE_SELECTORS.SINGLE_DAY_INLINE} .calendar-page__day`).then((singleDayDayInline) => {
            expect(singleDayDayInline).to.have.css('display').equal('block');
            expect(singleDayDayInline).to.have.css('flex-direction').equal('row');
            expect(singleDayDayInline).to.have.css('padding').equal('0px');
            expect(singleDayDayInline).to.have.css('margin').equal('0px 0px 2px');
            expect(singleDayDayInline).to.have.css('height').equal('24px');
            expect(singleDayDayInline).to.have.css('font-family').equal(tokens.type.fontFamily.text);
            expect(singleDayDayInline).to.have.css('font-size').equal(tokens.type.size.m);
            expect(singleDayDayInline).to.have.css('font-weight').equal(tokens.type.fontWeight.bold);
            expect(singleDayDayInline).to.have.css('color').equal(colors.colorFont);
        });
    });

})

export {}
