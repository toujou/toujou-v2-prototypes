/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('icon a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-icons--icons');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.icon');
        cy.checkA11y('.icon');
    });
})

describe('icon font-color dark a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-icons--icons&args=iconColor:font-dark');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.icon');
        cy.checkA11y('.icon');
    });
})

describe('icon font-color light a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-icons--icons&args=iconColor:font-light');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.icon');
        cy.checkA11y('.icon');
    });
})

describe('icon primary a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-icons--icons&args=iconColor:primary');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.icon');
        cy.checkA11y('.icon');
    });
})

describe('icon primary dark a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-icons--icons&args=iconColor:primary-dark');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.icon');
        cy.checkA11y('.icon');
    });
})

describe('icon primary light a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-icons--icons&args=iconColor:primary-light');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.icon');
        cy.checkA11y('.icon');
    });
})

describe('icon secondary a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-icons--icons&args=iconColor:secondary');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.icon');
        cy.checkA11y('.icon');
    });
})

describe('icon secondary dark a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-icons--icons&args=iconColor:secondary-dark');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.icon');
        cy.checkA11y('.icon');
    });
})

describe('icon secondary light a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-icons--icons&args=iconColor:secondary-light');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.icon');
        cy.checkA11y('.icon');
    });
})

describe('icon background a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-icons--icons&args=iconColor:background');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.icon');
        cy.checkA11y('.icon');
    });
})

describe('icon success a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-icons--icons&args=iconColor:success');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.icon');
        cy.checkA11y('.icon');
    });
})

describe('icon warning a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-icons--icons&args=iconColor:warning');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.icon');
        cy.checkA11y('.icon');
    });
})

describe('icon error a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-icons--icons&args=iconColor:error');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.icon');
        cy.checkA11y('.icon');
    });
})

export {}
