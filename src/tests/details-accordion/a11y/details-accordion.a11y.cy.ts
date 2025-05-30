/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('details-accordion a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-accordion--details-accordion');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.details-accordion');
        // @ts-ignore
        cy.checkA11yWithWait('.details-accordion');
    });
})

export {}
