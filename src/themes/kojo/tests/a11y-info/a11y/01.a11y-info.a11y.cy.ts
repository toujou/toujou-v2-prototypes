/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('a11y-info a11y', () => {
    describe(`a11y-info a11y`, () => {
        beforeEach(() => {
            cy.visit('/iframe.html?viewMode=story&id=components-a11yinfo--a-11-y-info');
            cy.injectAxe();
            cy.get('.a11y-info').should('exist'); // Ensure the element exists before running aXe
        });

        it('has no detectable a11y violation on focus', () => {
            cy.get('.a11y-info')
                .focus()
                .should('be.visible');

            // @ts-ignore
            cy.checkA11yWithWait('.a11y-info');
        });
    });
});

export {}
