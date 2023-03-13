/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('media-date a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-mediadate--media-date');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.media-date');
    });
})

describe('media-date single month a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-mediadate--media-date&args=singleMonth:true');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.media-date');
    });
})

describe('media-date single year a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-mediadate--media-date&args=singleYear:true');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.media-date');
    });
})

describe('media-date single month and single year a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-mediadate--media-date&args=singleMonth:true;singleYear:true');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.media-date');
    });
})

describe('media-date single day a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-mediadate--media-date&args=singleDay:true');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.media-date');
    });
})

export {}
