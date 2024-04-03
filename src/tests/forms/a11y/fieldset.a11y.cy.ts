/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('fieldset a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--fieldset');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.form');
        cy.checkA11y(
            '.form',
            {
                rules: {
                    'color-contrast': { enabled: false }
                }
            }
        );
    });
})

describe('fieldset disabled a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--fieldset&args=state:disabled');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.form');
        cy.checkA11y(
            '.form',
            {
                rules: {
                    'color-contrast': { enabled: false }
                }
            }
        );
    });
})


export {}
