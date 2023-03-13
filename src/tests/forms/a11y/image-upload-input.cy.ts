/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('image upload input a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--other-inputs');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.input-group--image-upload');
    });
})


export {}
