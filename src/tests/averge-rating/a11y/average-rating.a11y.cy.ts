/// <reference types="cypress" />
/// <reference types="cypress-axe" />

const avrRatingSelector = '.average-rating[is-test-target';

describe('average rating a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-average-rating--average-rating');
        cy.injectAxe();
        cy.get(avrRatingSelector);
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y(avrRatingSelector);
    });
})

export {}
