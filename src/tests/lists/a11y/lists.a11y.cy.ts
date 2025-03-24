/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('lists a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-text-elements--text-elements-examples');
        cy.injectAxe();
    });

    const lists = [
        'ul.list',
        'ul.list--secondary',
        'ul.list--font',
        'ol.list',
        'ol.list--secondary',
        'ol.list--font'
    ];

    lists.forEach((selector) => {
        it(`a11y check for ${selector}`, () => {
            cy.get(selector);
            // @ts-ignore
            cy.checkA11yWithWait(selector);
        });
    });
});

export {};
