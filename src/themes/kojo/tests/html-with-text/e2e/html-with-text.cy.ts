/// <reference types="cypress" />

const tokens = Cypress.env('tokens');

describe('html with text', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-html-with-text--html-with-text-story-props');
    });

    it('has correct structure', () => {
        cy.get('toujou-grid').should('have.prop', 'tagName').should('eq', 'TOUJOU-GRID');
        cy.get('toujou-grid').should('have.prop', 'class').should('eq', 'grid');
        cy.get('toujou-grid').should('have.attr', 'grid-type').should('eq', 'default');
        cy.get('toujou-grid').should('have.attr', 'number-of-columns').should('eq', '2');
        cy.get('toujou-grid').should('have.attr', 'column-layout').should('eq', 'third-left');

        cy.get('toujou-html-container').should('have.prop', 'tagName').should('eq', 'TOUJOU-HTML-CONTAINER');
        cy.get('toujou-html-container').invoke('attr', 'class').should('eq', 'html-container');
        cy.get('toujou-html-container').invoke('attr', 'fullwidth').should('exist');
    });

    it('has correct styles', () => {
        cy.get('toujou-grid .grid-column:first-child .html-container').should('exist');
        cy.get('toujou-grid .grid-column:last-child .html-container').should('not.exist');
        cy.get('toujou-grid .grid-column:first-child .html-container').should('have.css', 'width', '304px');
        cy.get('toujou-grid').should('have.css', 'width', '960px');
        cy.get('toujou-grid').should('have.css', 'display', 'grid');
        cy.get('toujou-grid').should('have.css', 'grid-template-columns', '304px 608px');
        cy.get('toujou-grid').should('have.css', 'grid-gap', `${tokens.spacing.xl}`);
    });
})

describe('html with text - 33-left', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-html-with-text--html-with-text-story-props');
    });

    it('has correct structure', () => {
        cy.get('toujou-grid .grid-column:first-child .html-container').should('exist');
        cy.get('toujou-grid .grid-column:last-child .html-container').should('not.exist');
    });

    it('has correct styles', () => {
        cy.get('toujou-grid .grid-column:first-child .html-container').should('have.css', 'width', '304px');
        cy.get('toujou-grid').should('have.css', 'width', '960px');
        cy.get('toujou-grid').should('have.css', 'display', 'grid');
        cy.get('toujou-grid').should('have.css', 'grid-template-columns', '304px 608px');
        cy.get('toujou-grid').should('have.css', 'grid-gap', `${tokens.spacing.xl}`);
    });
})

describe('html with text - 33-right', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-html-with-text--html-with-text-story-props&args=layout:33-right');
    });

    it('has correct structure', () => {
        cy.get('toujou-grid .grid-column:last-child .html-container').should('exist');
        cy.get('toujou-grid .grid-column:first-child .html-container').should('not.exist');
    });

    it('has correct styles', () => {
        cy.get('toujou-grid .grid-column:last-child .html-container').should('have.css', 'width', '304px');
        cy.get('toujou-grid').should('have.css', 'width', '960px');
        cy.get('toujou-grid').should('have.css', 'display', 'grid');
        cy.get('toujou-grid').should('have.css', 'grid-template-columns', '608px 304px');
        cy.get('toujou-grid').should('have.css', 'grid-gap', `${tokens.spacing.xl}`);
    });
})

describe('html with text - 50-left', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-html-with-text--html-with-text-story-props&args=layout:50-left');
    });

    it('has correct structure', () => {
        cy.get('toujou-grid .grid-column:first-child .html-container').should('exist');
        cy.get('toujou-grid .grid-column:last-child .html-container').should('not.exist');
    });

    it('has correct styles', () => {
        cy.get('toujou-grid .grid-column:first-child .html-container').should('have.css', 'width', '456px');
        cy.get('toujou-grid').should('have.css', 'width', '960px');
        cy.get('toujou-grid').should('have.css', 'display', 'grid');
        cy.get('toujou-grid').should('have.css', 'grid-template-columns', '456px 456px');
        cy.get('toujou-grid').should('have.css', 'grid-gap', `${tokens.spacing.xl}`);
    });
})

describe('html with text - 50-right', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-html-with-text--html-with-text-story-props&args=layout:50-right');
    });

    it('has correct structure', () => {
        cy.get('toujou-grid .grid-column:last-child .html-container').should('exist');
        cy.get('toujou-grid .grid-column:first-child .html-container').should('not.exist');
    });

    it('has correct styles', () => {
        cy.get('toujou-grid .grid-column:last-child .html-container').should('have.css', 'width', '456px');
        cy.get('toujou-grid').should('have.css', 'width', '960px');
        cy.get('toujou-grid').should('have.css', 'display', 'grid');
        cy.get('toujou-grid').should('have.css', 'grid-template-columns', '456px 456px');
        cy.get('toujou-grid').should('have.css', 'grid-gap', `${tokens.spacing.xl}`);
    });
})

describe('html with text - 66-left', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-html-with-text--html-with-text-story-props&args=layout:66-left');
    });

    it('has correct structure', () => {
        cy.get('toujou-grid .grid-column:first-child .html-container').should('exist');
        cy.get('toujou-grid .grid-column:last-child .html-container').should('not.exist');
    });

    it('has correct styles', () => {
        cy.get('toujou-grid .grid-column:first-child .html-container').should('have.css', 'width', '608px');
        cy.get('toujou-grid').should('have.css', 'width', '960px');
        cy.get('toujou-grid').should('have.css', 'display', 'grid');
        cy.get('toujou-grid').should('have.css', 'grid-template-columns', '608px 304px');
        cy.get('toujou-grid').should('have.css', 'grid-gap', `${tokens.spacing.xl}`);
    });
})

describe('html with text - 66-right', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-html-with-text--html-with-text-story-props&args=layout:66-right');
    });

    it('has correct structure', () => {
        cy.get('toujou-grid .grid-column:last-child .html-container').should('exist');
        cy.get('toujou-grid .grid-column:first-child .html-container').should('not.exist');
    });

    it('has correct styles', () => {
        cy.get('toujou-grid .grid-column:last-child .html-container').should('have.css', 'width', '608px');
        cy.get('toujou-grid').should('have.css', 'width', '960px');
        cy.get('toujou-grid').should('have.css', 'display', 'grid');
        cy.get('toujou-grid').should('have.css', 'grid-template-columns', '304px 608px');
        cy.get('toujou-grid').should('have.css', 'grid-gap', `${tokens.spacing.xl}`);
    });
})

export {}
