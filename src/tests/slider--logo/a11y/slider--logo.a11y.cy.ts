/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('slider--logo a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-media--slider-logo');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.slider', {
            rules: {
                'aria-allowed-role': { enabled: false }
            }
        });
    });

    it('primary slider has no detectable a11y violations', () => {
        cy.get('toujou-slider').then((e) => {
            e[0].setAttribute('element-design', 'primary');
        });
        cy.checkA11y('.slider', {
            rules: {
                'aria-allowed-role': { enabled: false }
            }
        });
    });

    it('secondary slider has no detectable a11y violations', () => {
        cy.get('toujou-slider').then((e) => {
            e[0].setAttribute('element-design', 'secondary');
        });
        cy.checkA11y('.slider', {
            rules: {
                'aria-allowed-role': { enabled: false }
            }
        });
    });

    it('inverted slider has no detectable a11y violations', () => {
        cy.get('toujou-slider').then((e) => {
            e[0].setAttribute('element-design', 'inverted');
        });
        cy.checkA11y('.slider', {
            rules: {
                'aria-allowed-role': { enabled: false }
            }
        });
    });
})

export {}
