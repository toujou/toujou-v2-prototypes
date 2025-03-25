/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('social media bar a11y', () => {
    const args = [
        { name: 'default', url: '' },
        { name: 'inline', url: '&args=isInline:true' },
        { name: 'primary', url: '&args=elementDesign:primary' },
        { name: 'secondary', url: '&args=elementDesign:secondary' },
        { name: 'inverted', url: '&args=elementDesign:inverted' },
        { name: 'no headline', url: '&args=hideHeadline:true' }
    ];

    args.forEach(({ name, url }) => {
        it(`has no detectable a11y violations - ${name}`, () => {
            cy.visit(`/iframe.html?viewMode=story&id=components-social-media-bar--social-media-bar${url}`);
            cy.injectAxe(); // Ensure Axe is injected after visiting the page
            cy.get('.social-media-bar');
            // @ts-ignore
            cy.checkA11yWithWait('.social-media-bar');
        });
    });
});

export {};
