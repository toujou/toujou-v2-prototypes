/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('iframe resizer a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-iframeresizer--iframe-resizer');
        cy.injectAxe();
        cy.get('toujou-iframe-resizer');
    });

    it('has no detectable a11y violation on load', () => {
        // @ts-ignore
        cy.checkA11yWithWait('toujou-iframe-resizer');
    });
})

export {}
