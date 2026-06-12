/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe("headlines a11y", () => {
    beforeEach(() => {
        cy.visit("/iframe.html?viewMode=story&id=tests-type-tests--single-headlines");
        cy.injectAxe();
    });

    it("has no detectable a11y violation on all headline levels", () => {
        ["h1", "h2", "h3", "h4", "h5"].forEach((selector) => {
            cy.get(selector);
            // @ts-ignore
            cy.checkA11yWithWait(selector);
        });
    });
});

export {};
