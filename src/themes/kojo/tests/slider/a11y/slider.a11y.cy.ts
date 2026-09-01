/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('slider a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-media--slider');
        cy.injectAxe();
    });

    const a11yOptions = {
        rules: { 'aria-allowed-role': { enabled: false } }
    };

    it('has no detectable a11y violations on load', () => {
        cy.get('.slider');
        // @ts-ignore
        cy.checkA11yWithWait('.slider', a11yOptions);
    });

    const sliderVariants = ['primary', 'secondary', 'inverted'];

    sliderVariants.forEach(variant => {
        it(`${variant} slider has no detectable a11y violations`, () => {
            cy.get('toujou-slider').invoke('attr', 'element-design', variant);
            // @ts-ignore
            cy.checkA11yWithWait('.slider', a11yOptions);
        });
    });
});

export {};
