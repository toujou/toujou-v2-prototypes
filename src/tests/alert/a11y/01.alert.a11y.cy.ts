/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('alert a11y', () => {
    const variants = [
        { name: 'default', args: '' },
        { name: 'primary', args: '' },
        { name: 'secondary', args: '&args=alertVariant:secondary' },
        { name: 'warning', args: '&args=alertVariant:warning' },
        { name: 'error', args: '&args=alertVariant:error' },
        { name: 'success', args: '&args=alertVariant:success' },
        { name: 'info', args: '&args=alertVariant:info' }
    ];

    variants.forEach(({ name, args }) => {
        describe(`alert ${name} a11y`, () => {
            beforeEach(() => {
                cy.visit(`/iframe.html?viewMode=story&id=components-alert--alert${args}`);
                cy.injectAxe();
                cy.get('.alert').should('exist'); // Ensure the element exists before running aXe
            });

            it('has no detectable a11y violation on load', () => {
                // @ts-ignore
                cy.checkA11yWithWait('.alert');
            });
        });
    });
});

export {}
