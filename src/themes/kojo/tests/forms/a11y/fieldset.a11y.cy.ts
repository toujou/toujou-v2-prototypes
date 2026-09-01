/// <reference types="cypress" />
/// <reference types="cypress-axe" />

const testCases = [
    { name: 'default', storyId: 'components-forms--fieldset' },
    { name: 'disabled', storyId: 'components-forms--fieldset', args: 'state:disabled' },
];

testCases.forEach(({ name, storyId, args }) => {
    describe(`Fieldset - ${name} a11y`, () => {
        beforeEach(() => {
            const url = args ? `/iframe.html?viewMode=story&id=${storyId}&args=${args}` : `/iframe.html?viewMode=story&id=${storyId}`;
            cy.visit(url);
            cy.injectAxe();
            cy.get('.form').should('exist').should('be.visible');
        });

        it('has no detectable a11y violations on load', () => {
            // @ts-ignore
            cy.checkA11yWithWait('.form', {
                rules: {
                    'color-contrast': { enabled: false }
                }
            });
        });
    });
});

export {};
