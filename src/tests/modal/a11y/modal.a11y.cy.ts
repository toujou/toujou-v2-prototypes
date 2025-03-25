/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('modal a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-modal--modal');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('body p a').click();
        // @ts-ignore
        cy.checkA11yWithWait('toujou-modal');
    });
})

export {}
