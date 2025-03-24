/// <reference types="cypress" />
/// <reference types="cypress-axe" />

const testCases = [
    { name: 'default', storyId: 'components-forms--checkbox-inputs' },
    { name: 'disabled', storyId: 'components-forms--checkbox-inputs', args: 'state:disabled' },
    { name: 'success', storyId: 'components-forms--checkbox-inputs', args: 'state:success' },
    { name: 'error', storyId: 'components-forms--checkbox-inputs', args: 'state:error' },
];

testCases.forEach(({ name, storyId, args }) => {
    describe(`Checkbox - ${name} a11y`, () => {
        beforeEach(() => {
            const url = args ? `/iframe.html?viewMode=story&id=${storyId}&args=${args}` : `/iframe.html?viewMode=story&id=${storyId}`;
            cy.visit(url);
            cy.injectAxe();
            cy.get('.form').should('exist').should('be.visible');
        });

        it('has no detectable a11y violations on load', () => {
            // @ts-ignore
            cy.checkA11yWithWait('.form');
        });

        if (name === 'default') {
            it('has no detectable a11y violation when a checkbox is checked', () => {
                cy.get('.input-group:first-child .checkbox-group__label').click();
                // @ts-ignore
                cy.checkA11yWithWait('.form');
            });
        }
    });
});

export {};
