/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('snackbar a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-snackbar--snackbar&args=snackbarType:action');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('#snackbarTriggerButton').click();
        cy.get('.snackbar');

        // @ts-ignore
        cy.checkA11yWithWait(
            '.snackbar',
            {
                rules: {
                    'button-name': { enabled: false }
                }
            }
        );
    });
})

export {}
