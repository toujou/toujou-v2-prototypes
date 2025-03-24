/// <reference types="cypress" />
/// <reference types="cypress-axe" />

const states = ["", "disabled", "success", "error"];

describe("select input a11y", () => {
    states.forEach((state: string) => {
        const url = state
            ? `/iframe.html?viewMode=story&id=components-forms--select-input&args=state:${state}`
            : "/iframe.html?viewMode=story&id=components-forms--select-input";

        it(`has no detectable a11y violation on load${state ? ` (${state})` : ""}`, () => {
            cy.visit(url);
            cy.injectAxe();
            cy.get(".form");
            // @ts-ignore
            cy.checkA11yWithWait(".form");
        });
    });
});

export {};
