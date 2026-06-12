/// <reference types="cypress" />
/// <reference types="cypress-axe" />

const chapterVariants = [
    { name: 'default', args: 'variant:default' },
    { name: 'primary', args: 'variant:primary' },
    { name: 'secondary', args: 'variant:secondary' },
    { name: 'inverted', args: 'variant:inverted' },
    { name: 'none', args: 'variant:none' },
    { name: 'white', args: 'variant:white' },
    { name: 'no padding', args: 'hasNoPaddingAttr:true' }
];

Cypress._.each(chapterVariants, (variant) => {
    describe(`chapter ${variant.name} a11y`, () => {
        beforeEach(() => {
            cy.visit(`/iframe.html?viewMode=story&id=components-chapter--chapter&args=${variant.args}`);
            cy.injectAxe();
        });

        it(`"${variant.name}" has no detectable a11y violations on load`, () => {
            // @ts-ignore
            cy.checkA11yWithWait('.chapter[is-test-target]');
        });
    });
});

export {};
