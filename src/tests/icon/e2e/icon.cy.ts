/// <reference types="cypress" />

const colors = Cypress.env("colors");
const tokens = Cypress.env("tokens");

describe("toujou-icon", () => {
    beforeEach(() => {
        cy.visit("/iframe.html?viewMode=story&id=components-icons--icons");
    });

    it("has correct class", () => {
        cy.get("toujou-icon").should("have.class", "icon");
    });
});

describe.only("toujou-icon - sizes", () => {
    const sizes = ["xxxl", "xxl", "xl", "l", "m", "ms", "normal", "s", "xs", "xxs"];

    beforeEach(() => {
        cy.visit("/iframe.html?viewMode=story&id=components-icons--icons");
    });

    sizes.forEach((size) => {
        it(`has correct ${size} size`, () => {
            cy.get(".icon").first().invoke("attr", "icon-size", size);
            cy.get(".icon").first()
                .should("have.css", "height", tokens.type.size[size])
                .and("have.css", "width", tokens.type.size[size]);
        });
    });
});

describe("toujou-icon - colors", () => {
    const colorMappings = {
        "font": colors.colorFont,
        "font-dark": colors.colorFontDark,
        "font-light": colors.colorFontLight,
        "primary": colors.colorPrimary,
        "primary-dark": colors.colorPrimaryDark,
        "primary-light": colors.colorPrimaryLight,
        "secondary": colors.colorSecondary,
        "secondary-dark": colors.colorSecondaryDark,
        "secondary-light": colors.colorSecondaryLight,
        "background": colors.colorBg,
        "success": colors.colorSuccess,
        "warning": colors.colorWarning,
        "error": colors.colorError,
    };

    beforeEach(() => {
        cy.visit("/iframe.html?viewMode=story&id=components-icons--icons");
    });

    Object.entries(colorMappings).forEach(([color, expectedValue]) => {
        it(`has correct ${color} color`, () => {
            cy.get(".icon").first().invoke("attr", "icon-color", color);
            cy.get(".icon").first().should("have.css", "background-color", expectedValue);
        });
    });
});

export {};
