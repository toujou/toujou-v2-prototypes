/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('cover slider a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-cover-slider--cover-slider');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.cover-slider');
        cy.checkA11y('.cover-slider', {
            rules: {
                'aria-allowed-role': { enabled: false }
            }
        });
    });
})

describe('cover slider primary a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-cover-slider--cover-slider&args=elementDesign:primary');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.cover-slider');
        cy.checkA11y('.cover-slider', {
            rules: {
                'aria-allowed-role': { enabled: false }
            }
        });
    });
})

describe('cover slider secondary a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-cover-slider--cover-slider&args=elementDesign:secondary');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.cover-slider');
        cy.checkA11y('.cover-slider', {
            rules: {
                'aria-allowed-role': { enabled: false }
            }
        });
    });
})

describe('cover slider inverted a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-cover-slider--cover-slider&args=elementDesign:inverted');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.cover-slider');
        cy.checkA11y('.cover-slider', {
            rules: {
                'aria-allowed-role': { enabled: false }
            }
        });
    });
})


export {}
