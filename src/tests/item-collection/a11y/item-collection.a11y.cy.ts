/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('item-collection a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-collectionlists--list-item-default');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.item-collection');
        // @ts-ignore
        cy.checkA11yWithWait('.item-collection', {
            rules: {
                "landmark-no-duplicate-banner": { enabled: false }
            }
        });
    });
})

export {}
