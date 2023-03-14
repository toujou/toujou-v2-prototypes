/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('slider a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-media--slider');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.slider');
    });

    it('primary slider has no detectable a11y violations', () => {
        cy.get('toujou-slider').then((e) => {
            e[0].setAttribute('element-design', 'primary');
        });
        cy.checkA11y('.slider');
    });

    it('secondary slider has no detectable a11y violations', () => {
        cy.get('toujou-slider').then((e) => {
            e[0].setAttribute('element-design', 'secondary');
        });
        cy.checkA11y('.slider');
    });

    it('inverted slider has no detectable a11y violations', () => {
        cy.get('toujou-slider').then((e) => {
            e[0].setAttribute('element-design', 'inverted');
        });
        cy.checkA11y('.slider');
    });
})

export {}
