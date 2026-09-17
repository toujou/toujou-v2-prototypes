/// <reference types="cypress" />
/// <reference types="cypress-axe" />

const chipVariants = [
    'default',
    'primary',
    'primary-light',
    'primary-very-light',
    'primary-dark',
    'secondary',
    // 'secondary-light', // Commented out, but can be re-enabled
    'secondary-very-light',
    'secondary-dark',
    'font',
    'font-light',
    'primary-font-very-light',
    'font-dark',
    // 'success', // Commented out
    // 'warning', // Commented out
    'error'
];

describe('toujou-chip a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-chip--chip');
        cy.injectAxe();
    });

    Cypress._.each(chipVariants, (variant) => {
        it(`${variant}: has no detectable a11y violation on load`, () => {
            if (variant !== 'default') {
                cy.get('.chip').invoke('attr', 'chip-bg-color', variant);
            }

            const options = variant === 'primary-light' ? { rules: { 'color-contrast': { enabled: false } } } : undefined;
            // @ts-ignore
            cy.checkA11yWithWait('.chip', options);
        });
    });
});

export {};
