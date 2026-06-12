/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('button - a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-collectioncards--card-default');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.card-collection');
        cy.checkA11y('.card-collection', {
            rules: {
                'landmark-no-duplicate-banner': { enabled: false }
            }
        });
    });
})


export {}
