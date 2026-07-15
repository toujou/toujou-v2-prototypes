/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('poster-reveal a11y', () => {
    describe(`a11y-info a11y`, () => {
        beforeEach(() => {
            cy.visit('/iframe.html?viewMode=story&id=components-poster-reveal--poster-reveal');
            cy.injectAxe();
            cy.get('.poster-reveal').should('exist'); // Ensure the element exists before running aXe
        });

        it('has no detectable a11y violation on focus', () => {
            cy.get('.poster-reveal__button')
                .focus()
                .should('be.visible');

            // @ts-ignore
            cy.checkA11yWithWait('.poster-reveal__button');
        });
    });
});

export {}
