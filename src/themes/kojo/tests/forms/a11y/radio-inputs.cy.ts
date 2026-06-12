/// <reference types="cypress" />
/// <reference types="cypress-axe" />

const states = ["", "disabled", "success", "error"];

describe("radio-inputs a11y", () => {
    states.forEach((state: string) => {
        const url = state
            ? `/iframe.html?viewMode=story&id=components-forms--radio-inputs&args=state:${state}`
            : "/iframe.html?viewMode=story&id=components-forms--radio-inputs";

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
