/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe("icon a11y", () => {
    const colors = [
        "font-dark",
        "font-light",
        "primary",
        "primary-dark",
        "primary-light",
        "secondary",
        "secondary-dark",
        "secondary-light",
        "background",
        "success",
        "warning",
        "error",
    ];

    it("has no detectable a11y violation on default state", () => {
        cy.visit("/iframe.html?viewMode=story&id=components-icons--icons");
        cy.injectAxe(); // Move this after the visit
        cy.get(".icon");
        // @ts-ignore
        cy.checkA11yWithWait(".icon");
    });

    colors.forEach((color) => {
        it(`has no detectable a11y violation with color: ${color}`, () => {
            cy.visit(`/iframe.html?viewMode=story&id=components-icons--icons&args=iconColor:${color}`);
            cy.injectAxe(); // Move this after the visit
            cy.get(".icon");
            // @ts-ignore
            cy.checkA11yWithWait(".icon");
        });
    });
});

export {};
