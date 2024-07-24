/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('toujou-chip a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-chip--chip');
        cy.injectAxe();
    });

    it('default: has no detectable a11y violation on load', () => {
        cy.get('.chip');
        cy.checkA11y('.chip');
    });

    it('primary: has no detectable a11y violation on load', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'primary');
        });
        cy.checkA11y('.chip');
    });

    it('primary-light: has no detectable a11y violation on load', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'primary-light');
        });
        cy.checkA11y(
            '.chip',
            {
                rules: {
                    'color-contrast': { enabled: false }
                }
            }
        );
    });

    it('primary-very-light: has no detectable a11y violation on load', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'primary-very-light');
        });
        cy.checkA11y('.chip');
    });

    it('primary-dark: has no detectable a11y violation on load', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'primary-dark');
        });
        cy.checkA11y('.chip');
    });

    it('secondary: has no detectable a11y violation on load', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'secondary');
        });
        cy.checkA11y('.chip');
    });

    // it('secondary-light: has no detectable a11y violation on load', () => {
    //     cy.get('.chip').then((e) => {
    //         e[0].setAttribute('chip-bg-color', 'secondary-light');
    //     });
    //     cy.checkA11y('.chip');
    // });

    it('secondary-very-light: has no detectable a11y violation on load', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'secondary-very-light');
        });
        cy.checkA11y('.chip');
    });

    it('secondary-dark: has no detectable a11y violation on load', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'secondary-dark');
        });
        cy.checkA11y('.chip');
    });

    it('font: has no detectable a11y violation on load', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'font');
        });
        cy.checkA11y('.chip');
    });

    it('font-light: has no detectable a11y violation on load', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'font-light');
        });
        cy.checkA11y('.chip');
    });

    it('primary-font-very-light: has no detectable a11y violation on load', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'primary-font-very-light');
        });
        cy.checkA11y('.chip');
    });

    it('font-dark: has no detectable a11y violation on load', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'font-dark');
        });
        cy.checkA11y('.chip');
    });

    // it('success: has no detectable a11y violation on load', () => {
    //     cy.get('.chip').then((e) => {
    //         e[0].setAttribute('chip-bg-color', 'success');
    //     });
    //     cy.checkA11y('.chip');
    // });

    // it('warning: has no detectable a11y violation on load', () => {
    //     cy.get('.chip').then((e) => {
    //         e[0].setAttribute('chip-bg-color', 'warning');
    //     });
    //     cy.checkA11y('.chip');
    // });

    it('error: has no detectable a11y violation on load', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'error');
        });
        cy.checkA11y('.chip');
    });
})

export {}
