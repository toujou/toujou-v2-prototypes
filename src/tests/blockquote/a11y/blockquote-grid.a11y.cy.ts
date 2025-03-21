/// <reference types="cypress" />
/// <reference types="cypress-axe" />

const blockquoteVariants = [
    { name: 'default', url: '/iframe.html?viewMode=story&id=components-blockquote--toujou-blockquote-grid' },
    { name: '2 cols', url: '/iframe.html?viewMode=story&id=components-blockquote--toujou-blockquote-grid&args=gridCount:2' },
    { name: '3 cols', url: '/iframe.html?viewMode=story&id=components-blockquote--toujou-blockquote-grid&args=gridCount:3' },
    { name: 'horizontal', url: '/iframe.html?viewMode=story&id=components-blockquote--toujou-blockquote-grid&args=direction:horizontal' }
];

describe('Blockquote grid accessibility tests', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.injectAxe();
    });

    blockquoteVariants.forEach(({ name, url }) => {
        it(`has no detectable a11y violations for ${name} variant`, () => {
            cy.visit(url);
            cy.get('.blockquote-grid').should('exist');
            cy.wait(1000); // Give the page time to fully render before running Axe
            cy.checkA11y('.blockquote-grid');
        });
    });
});

export {};
