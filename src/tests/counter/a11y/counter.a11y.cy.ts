/// <reference types="cypress" />
/// <reference types="cypress-axe" />

// Define test cases with their Storybook URLs
const testCases = [
    { name: 'default', storyId: 'components-counter--counter' },
    { name: 'primary', storyId: 'components-counter--counter', args: 'elementDesign:primary' },
    { name: 'secondary', storyId: 'components-counter--counter', args: 'elementDesign:secondary' },
    { name: 'inverted warning', storyId: 'components-counter--counter', args: 'elementDesign:inverted' },
];

// Run tests for each variant/type
testCases.forEach(({ name, storyId, args }) => {
    describe(`Counter - ${name} a11y`, () => {
        beforeEach(() => {
            const url = args ? `/iframe.html?viewMode=story&id=${storyId}&args=${args}` : `/iframe.html?viewMode=story&id=${storyId}`;
            cy.visit(url);
            cy.injectAxe();
            cy.get('.counter').should('exist').should('be.visible');
        });

        it('has no detectable a11y violations on load', () => {
            // @ts-ignore
            cy.checkA11yWithWait('.counter');
        });
    });
});

export {};
