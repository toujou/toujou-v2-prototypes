/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe("header a11y", () => {
    beforeEach(() => {
        cy.visit("/iframe.html?viewMode=story&id=components-header--header-three-to-one");
        cy.injectAxe();
    });

    it("has no detectable a11y violation on load", () => {
        cy.get(".header");
        // @ts-ignore
        cy.checkA11yWithWait(".header");
    });
});

describe("header primary a11y", () => {
    beforeEach(() => {
        cy.visit("/iframe.html?viewMode=story&id=components-header--header-three-to-one&args=accentColor:primary");
        cy.injectAxe();
    });

    it("has no detectable a11y violation on load", () => {
        cy.get(".header");
        // @ts-ignore
        cy.checkA11yWithWait(".header");
    });
});

describe("header secondary a11y", () => {
    beforeEach(() => {
        cy.visit("/iframe.html?viewMode=story&id=components-header--header-three-to-one&args=accentColor:secondary");
        cy.injectAxe();
    });

    it("has no detectable a11y violation on load", () => {
        cy.get(".header");
        // @ts-ignore
        cy.checkA11yWithWait(".header");
    });
});

describe("header font a11y", () => {
    beforeEach(() => {
        cy.visit("/iframe.html?viewMode=story&id=components-header--header-three-to-one&args=accentColor:font");
        cy.injectAxe();
    });

    it("has no detectable a11y violation on load", () => {
        cy.get(".header");
        // @ts-ignore
        cy.checkA11yWithWait(".header");
    });
});

export {};
