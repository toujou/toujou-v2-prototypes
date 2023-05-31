/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('social media bar a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-social-media-bar--social-media-bar');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.social-media-bar');
        cy.checkA11y('.social-media-bar');
    });
})

describe('social media bar inline a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-social-media-bar--social-media-bar&args=isInline:true');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.social-media-bar');
        cy.checkA11y('.social-media-bar');
    });
})

describe('social media bar primary a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-social-media-bar--social-media-bar&args=elementDesign:primary');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.social-media-bar');
        cy.checkA11y('.social-media-bar');
    });
})

describe('social media bar secondary a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-social-media-bar--social-media-bar&args=elementDesign:secondary');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.social-media-bar');
        cy.checkA11y('.social-media-bar');
    });
})

describe('social media bar inverted a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-social-media-bar--social-media-bar&args=elementDesign:inverted');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.social-media-bar');
        cy.checkA11y('.social-media-bar');
    });
})

describe('social media bar no headline a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-social-media-bar--social-media-bar&args=hideHeadline:true');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.social-media-bar');
        cy.checkA11y('.social-media-bar');
    });
})

export {}
