/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('teaser a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-teaser--teaser');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.teaser');
    });
})

describe('teaser image 33% right a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-teaser--teaser&args=imageWidth:33;imageSide:right');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.teaser');
    });
})

describe('teaser image 33% left a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-teaser--teaser&args=imageWidth:33');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.teaser');
    });
})

describe('teaser image 66% left a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-teaser--teaser&args=imageWidth:66;imageSide:left');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.teaser');
    });
})

describe('teaser image 66% right a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-teaser--teaser&args=imageWidth:66;imageSide:right');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.teaser');
    });
})

describe('teaser primary a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-teaser--teaser&args=elementDesign:primary');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.teaser');
    });
})

describe('teaser secondary a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-teaser--teaser&args=elementDesign:secondary');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.teaser');
    });
})

describe('teaser inverted a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-teaser--teaser&args=elementDesign:inverted');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.teaser');
    });
})

describe('teaser media a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-teaser--teaser&args=teaserType:media');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.checkA11y('.teaser');
    });
})

export {}
