/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('spinner a11y', () => {
    const args = [
        { name: 'default', url: '' },
        { name: 'centered on page', url: '&args=isCenteredOnPage:true' }
    ];

    args.forEach(({ name, url }) => {
        it(`has no detectable a11y violations - ${name}`, () => {
            cy.visit(`/iframe.html?viewMode=story&id=components-spinner--spinner${url}`);
            cy.injectAxe(); // Ensure Axe is injected after visiting the page
            cy.get('.spinner');
            // @ts-ignore
            cy.checkA11yWithWait('.spinner');
        });
    });
});

export {};
