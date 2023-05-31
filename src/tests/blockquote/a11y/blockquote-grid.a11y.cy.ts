/// <reference types="cypress" />
/// <reference types="cypress-axe" />

/// <reference types="cypress" />

describe('blockquote grid a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blockquote--toujou-blockquote-grid');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.blockquote-grid');
        cy.checkA11y('.blockquote-grid');
    });
});

describe('blockquote grid - 2 cols a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blockquote--toujou-blockquote-grid&args=gridCount:2');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.blockquote-grid');
        cy.checkA11y('.blockquote-grid');
    });
});

describe('blockquote grid - 3 cols a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blockquote--toujou-blockquote-grid&args=gridCount:3');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.blockquote-grid');
        cy.checkA11y('.blockquote-grid');
    });
});

describe('blockquote grid - horizontal a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blockquote--toujou-blockquote-grid&args=direction:horizontal');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.blockquote-grid');
        cy.checkA11y('.blockquote-grid');
    });
});

export {}
