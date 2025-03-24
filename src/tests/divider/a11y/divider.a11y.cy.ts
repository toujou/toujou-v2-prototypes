/// <reference types="cypress" />
/// <reference types="cypress-axe" />

const testCases = [
    { name: 'default', storyId: 'components-divider--divider' },
    { name: 'background', storyId: 'components-divider--divider', args: 'dividerType:background' },
    { name: 'primary', storyId: 'components-divider--divider', args: 'dividerType:primary' },
    { name: 'secondary', storyId: 'components-divider--divider', args: 'dividerType:secondary' },
    { name: 'grey', storyId: 'components-divider--divider', args: 'dividerType:grey' },
];

testCases.forEach(({ name, storyId, args }) => {
    describe(`Divider - ${name} a11y`, () => {
        beforeEach(() => {
            const url = args ? `/iframe.html?viewMode=story&id=${storyId}&args=${args}` : `/iframe.html?viewMode=story&id=${storyId}`;
            cy.visit(url);
            cy.injectAxe();
            cy.get('.divider').should('exist').should('be.visible');
        });

        it('has no detectable a11y violations on load', () => {
            // @ts-ignore
            cy.checkA11yWithWait('.divider');
        });
    });
});

export {};
