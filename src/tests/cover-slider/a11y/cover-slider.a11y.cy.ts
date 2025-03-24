/// <reference types="cypress" />
/// <reference types="cypress-axe" />

const testCases = [
    { name: 'default', storyId: 'components-cover-slider--cover-slider' },
    { name: 'primary', storyId: 'components-cover-slider--cover-slider', args: 'elementDesign:primary' },
    { name: 'secondary', storyId: 'components-cover-slider--cover-slider', args: 'elementDesign:secondary' },
    { name: 'inverted', storyId: 'components-cover-slider--cover-slider', args: 'elementDesign:inverted' },
];

const a11yRules = {
    rules: {
        'aria-allowed-role': { enabled: false },
        'aria-roledescription': { enabled: false }
    }
};

testCases.forEach(({ name, storyId, args }) => {
    describe(`Cover Slider - ${name} a11y`, () => {
        beforeEach(() => {
            const url = args ? `/iframe.html?viewMode=story&id=${storyId}&args=${args}` : `/iframe.html?viewMode=story&id=${storyId}`;
            cy.visit(url);
            cy.injectAxe();
            cy.get('.cover-slider').should('exist').should('be.visible');
        });

        it('has no detectable a11y violations on load', () => {
            // @ts-ignore
            cy.checkA11yWithWait('.cover-slider', a11yRules);
        });
    });
});

export {};
