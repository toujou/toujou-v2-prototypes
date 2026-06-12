/// <reference types="cypress" />
/// <reference types="cypress-axe" />

import { CALENDAR_PAGE_SELECTORS } from "../calendar-page-selectors";

describe('Calendar page a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-calendar-pages--calendar-');
        cy.injectAxe();
    });

    [
        { name: 'single day inline', selector: CALENDAR_PAGE_SELECTORS.SINGLE_DAY_INLINE },
        { name: 'single day no time', selector: CALENDAR_PAGE_SELECTORS.SINGLE_DAY_NO_TIME },
        { name: 'single day with time', selector: CALENDAR_PAGE_SELECTORS.SINGLE_DAY_WITH_TIME },
        { name: 'multi day no time', selector: CALENDAR_PAGE_SELECTORS.MULTI_DAY_NO_TIME },
        { name: 'multi day with time', selector: CALENDAR_PAGE_SELECTORS.MULTI_DAY_WITH_TIME }
    ].forEach(({ name, selector }) => {
        it(`${name} has no detectable a11y violation on load`, () => {
            // @ts-ignore
            cy.checkA11yWithWait(selector);
        });
    });
});

export {}
