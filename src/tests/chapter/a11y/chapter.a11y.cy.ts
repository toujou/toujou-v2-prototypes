/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('chapter default a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=variant:default');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.chapter');
        cy.checkA11y('.chapter');
    });
})

describe('chapter primary a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=variant:primary');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.chapter');
        cy.checkA11y('.chapter');
    });
})

describe('chapter secondary a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=variant:secondary');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.chapter');
        cy.checkA11y('.chapter');
    });
})

describe('chapter inverted a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=variant:inverted');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.chapter');
        cy.checkA11y('.chapter');
    });
})

describe('chapter none a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=variant:none');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.chapter');
        cy.checkA11y('.chapter');
    });
})

describe('chapter none a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=variant:white');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.chapter');
        cy.checkA11y('.chapter');
    });
})

describe('chapter background a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=variant:background');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.chapter');
        cy.checkA11y('.chapter');
    });
})

describe('chapter no padding a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=hasNoPaddingAttr:true');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.chapter');
        cy.checkA11y('.chapter');
    });
})


export {}
