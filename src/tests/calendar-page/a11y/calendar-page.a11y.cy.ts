/// <reference types="cypress" />
/// <reference types="cypress-axe" />

import { CALENDAR_PAGE_SELECTORS } from "../calendar-page-selectors";

describe('Calendar page a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-calendar-pages--calendar-');
        cy.injectAxe();
    });

    it('single day inline has no detectable a11y violation on load', () => {
        cy.get(CALENDAR_PAGE_SELECTORS.SINGLE_DAY_INLINE);
        cy.checkA11y(CALENDAR_PAGE_SELECTORS.SINGLE_DAY_INLINE);
    });

    it('single day no time has no detectable a11y violation on load', () => {
        cy.get(CALENDAR_PAGE_SELECTORS.SINGLE_DAY_NO_TIME);
        cy.checkA11y(CALENDAR_PAGE_SELECTORS.SINGLE_DAY_NO_TIME);
    });

    it('single day with time has no detectable a11y violation on load', () => {
        cy.get(CALENDAR_PAGE_SELECTORS.SINGLE_DAY_WITH_TIME);
        cy.checkA11y(CALENDAR_PAGE_SELECTORS.SINGLE_DAY_WITH_TIME);
    });

    it('multi day no time has no detectable a11y violation on load', () => {
        cy.get(CALENDAR_PAGE_SELECTORS.MULTI_DAY_NO_TIME);
        cy.checkA11y(CALENDAR_PAGE_SELECTORS.MULTI_DAY_NO_TIME);
    });

    it('multi day with time has no detectable a11y violation on load', () => {
        cy.get(CALENDAR_PAGE_SELECTORS.MULTI_DAY_WITH_TIME);
        cy.checkA11y(CALENDAR_PAGE_SELECTORS.MULTI_DAY_WITH_TIME);
    });

})

export {}
