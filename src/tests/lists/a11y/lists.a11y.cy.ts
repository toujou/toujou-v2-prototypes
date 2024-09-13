/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('lists a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-text-elements--text-elements-examples');
        cy.injectAxe();
    });

    it('default ul', () => {
        cy.get('ul.list');
        cy.checkA11y('ul.list');
    });

    it('secondary ul', () => {
        cy.get('ul.list--secondary');
        cy.checkA11y('ul.list--secondary');
    });

    it('font ul', () => {
        cy.get('ul.list--font');
        cy.checkA11y('ul.list--font');
    });

    it('default ol', () => {
        cy.get('ol.list');
        cy.checkA11y('ol.list');
    });

    it('secondary ol', () => {
        cy.get('ol.list--secondary');
        cy.checkA11y('ol.list--secondary');
    });

    it('font ol', () => {
        cy.get('ol.list--font');
        cy.checkA11y('ol.list--font');
    });
})

export {}
