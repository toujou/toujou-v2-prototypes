/// <reference types="cypress" />
/// <reference types="cypress-axe" />

const states = ["", "disabled", "success", "error"];
const rules = {
    success: { rules: { "color-contrast": { enabled: false } } }
} as Record<string, object>;

describe("file input a11y", () => {
    states.forEach((state: string) => {
        const url = state
            ? `/iframe.html?viewMode=story&id=components-forms--other-inputs&args=state:${state}`
            : "/iframe.html?viewMode=story&id=components-forms--other-inputs";

        it(`has no detectable a11y violation on load${state ? ` (${state})` : ""}`, () => {
            cy.visit(url);
            cy.injectAxe();
            cy.get(".form");
            // @ts-ignore
            cy.checkA11yWithWait(".form", rules[state] || {});
        });
    });
});

export {};
