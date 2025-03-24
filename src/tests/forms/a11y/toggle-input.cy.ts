/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe("toggle input a11y", () => {
    beforeEach(() => {
        cy.visit("/iframe.html?viewMode=story&id=components-forms--toggle-inputs");
        cy.injectAxe();
    });

    it("has no detectable a11y violation on load", () => {
        cy.get(".form");
        // @ts-ignore
        cy.checkA11yWithWait(".form");
    });

    it("has no detectable a11y violation when checked", () => {
        cy.get(".toggle-group__label").click();
        // @ts-ignore
        cy.checkA11yWithWait(".form");
    });
});

describe("toggle input disabled a11y", () => {
    beforeEach(() => {
        cy.visit("/iframe.html?viewMode=story&id=components-forms--toggle-inputs&args=isDisabled:true");
        cy.injectAxe();
    });

    it("has no detectable a11y violation on load", () => {
        cy.get(".form");
        // @ts-ignore
        cy.checkA11yWithWait(".form");
    });
});

export {};
