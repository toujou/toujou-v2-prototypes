/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('content card horizontal a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-content-card--horizontal-content-card');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.content-card');
        cy.checkA11y('.content-card', {
            rules: {
                "heading-order": { enabled: false }
            }
        });
    });
})

describe('content card vertical a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-content-card--vertical-content-card');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.content-card');
        cy.checkA11y('.content-card', {
            rules: {
                "heading-order": { enabled: false }
            }
        });
    });
})

describe('content card with text a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-content-card--content-card-with-text');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.content-card');
        cy.checkA11y('.content-card', {
            rules: {
                "heading-order": { enabled: false }
            }
        });
    });
})


export {}
