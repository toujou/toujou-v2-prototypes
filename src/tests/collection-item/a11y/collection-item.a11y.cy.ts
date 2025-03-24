/// <reference types="cypress" />
/// <reference types="cypress-axe" />

// Define test cases with their Storybook URLs
const testCases = [
    { name: 'default', storyId: 'components-collectioncards--card-default' },
    { name: 'primary', storyId: 'components-collectioncards--card-default', args: 'elementDesign:primary' },
    { name: 'secondary', storyId: 'components-collectioncards--card-default', args: 'elementDesign:secondary' },
    { name: 'inverted', storyId: 'components-collectioncards--card-default', args: 'elementDesign:inverted' },
    { name: 'blog', storyId: 'components-collectioncards--card-blog' },
    { name: 'trip', storyId: 'components-collectioncards--card-trip' },
    { name: 'product', storyId: 'components-collectioncards--card-product' },
    { name: 'product primary', storyId: 'components-collectioncards--card-product', args: 'elementDesign:primary' },
    { name: 'product secondary', storyId: 'components-collectioncards--card-product', args: 'elementDesign:secondary' },
    { name: 'product inverted', storyId: 'components-collectioncards--card-product', args: 'elementDesign:inverted' },
    { name: 'person', storyId: 'components-collectioncards--card-person' },
];

// Run tests for each variant/type
testCases.forEach(({ name, storyId, args }) => {
    describe(`Collection item - ${name} a11y`, () => {
        beforeEach(() => {
            const url = args ? `/iframe.html?viewMode=story&id=${storyId}&args=${args}` : `/iframe.html?viewMode=story&id=${storyId}`;
            cy.visit(url);
            cy.injectAxe();
        });

        it('has no detectable a11y violations on load', () => {
            // @ts-ignore
            cy.checkA11yWithWait('.card-collection__item', {
                rules: {
                    'landmark-no-duplicate-banner': { enabled: false }
                }
            });
        });
    });
});

export {};
