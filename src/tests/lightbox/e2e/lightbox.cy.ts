/// <reference types="cypress" />

const tokens = Cypress.env('tokens');

describe('grid 1 column', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-grid--grid');
    });

    it('has correct class and tag name', () => {
        cy.get('toujou-grid').should('have.prop', 'tagName').should('eq', 'TOUJOU-GRID');
        cy.get('toujou-grid').invoke('attr', 'class').should('contain', 'grid');
        cy.get('toujou-grid').invoke('attr', 'number-of-columns').should('eq', '1');
        cy.get('toujou-grid').invoke('attr', 'grid-type').should('eq', 'default');
    });

    it('has correct structure', () => {
        cy.get('.grid').should('exist');
        cy.get('.grid').children('.grid-column').should('have.length', 1);
    });

    it('has correct styles', () => {
        cy.get('.grid').should('have.css', 'display', 'grid');
        cy.get('.grid').should('have.css', 'grid-template-columns', '960px');
        cy.get('.grid').should('have.css', 'grid-gap', `${tokens.spacing.xl} ${tokens.spacing.xl}`);
        cy.get('.grid').should('have.css', 'width', '960px');
        cy.get('.grid').should('have.css', 'max-width', '960px');
        cy.get('.grid').should('have.css', 'margin', '0px 480px');
    });
})

describe('grid 2 columns', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-grid--grid&args=numberOfColumns:2');
    });

    it('has correct class and tag name', () => {
        cy.get('toujou-grid').should('have.prop', 'tagName').should('eq', 'TOUJOU-GRID');
        cy.get('toujou-grid').invoke('attr', 'number-of-columns').should('eq', '2');
    });

    it('has correct structure', () => {
        cy.get('.grid').should('exist');
        cy.get('.grid').children('.grid-column').should('have.length', 2);
    });

    it('has correct styles', () => {
        cy.get('.grid').should('have.css', 'display', 'grid');
        cy.get('.grid').should('have.css', 'grid-template-columns', '456px 456px');
        cy.get('.grid').should('have.css', 'grid-gap', `${tokens.spacing.xl} ${tokens.spacing.xl}`);
        cy.get('.grid').should('have.css', 'width', '960px');
        cy.get('.grid').should('have.css', 'max-width', '960px');
        cy.get('.grid').should('have.css', 'margin', '0px 480px');
    });
})

describe('grid 2 columns third right', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-grid--grid&args=numberOfColumns:2;columnsLayout:third-right');
    });

    it('has correct class and tag name', () => {
        cy.get('toujou-grid').should('have.prop', 'tagName').should('eq', 'TOUJOU-GRID');
        cy.get('toujou-grid').invoke('attr', 'number-of-columns').should('eq', '2');
        cy.get('toujou-grid').invoke('attr', 'column-layout').should('eq', 'third-right');
        cy.get('toujou-grid').invoke('attr', 'grid-type').should('eq', 'default');
    });

    it('has correct structure', () => {
        cy.get('.grid').should('exist');
        cy.get('.grid').children('.grid-column').should('have.length', 2);
    });

    it('has correct styles', () => {
        cy.get('.grid').should('have.css', 'display', 'grid');
        cy.get('.grid').should('have.css', 'grid-template-columns', '608px 304px');
        cy.get('.grid').should('have.css', 'grid-gap', `${tokens.spacing.xl} ${tokens.spacing.xl}`);
        cy.get('.grid').should('have.css', 'width', '960px');
        cy.get('.grid').should('have.css', 'max-width', '960px');
        cy.get('.grid').should('have.css', 'margin', '0px 480px');
    });
})

describe('grid 2 columns third left', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-grid--grid&args=numberOfColumns:2;columnsLayout:third-left');
    });

    it('has correct class and tag name', () => {
        cy.get('toujou-grid').should('have.prop', 'tagName').should('eq', 'TOUJOU-GRID');
        cy.get('toujou-grid').invoke('attr', 'number-of-columns').should('eq', '2');
        cy.get('toujou-grid').invoke('attr', 'column-layout').should('eq', 'third-left');
        cy.get('toujou-grid').invoke('attr', 'grid-type').should('eq', 'default');
    });

    it('has correct structure', () => {
        cy.get('.grid').should('exist');
        cy.get('.grid').children('.grid-column').should('have.length', 2);
    });

    it('has correct styles', () => {
        cy.get('.grid').should('have.css', 'display', 'grid');
        cy.get('.grid').should('have.css', 'grid-template-columns', '304px 608px');
        cy.get('.grid').should('have.css', 'grid-gap', `${tokens.spacing.xl} ${tokens.spacing.xl}`);
        cy.get('.grid').should('have.css', 'width', '960px');
        cy.get('.grid').should('have.css', 'max-width', '960px');
        cy.get('.grid').should('have.css', 'margin', '0px 480px');
    });
})

describe('grid 3 columns', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-grid--grid&args=numberOfColumns:3');
    });

    it('has correct class and tag name', () => {
        cy.get('toujou-grid').should('have.prop', 'tagName').should('eq', 'TOUJOU-GRID');
        cy.get('toujou-grid').invoke('attr', 'number-of-columns').should('eq', '3');
    });

    it('has correct structure', () => {
        cy.get('.grid').should('exist');
        cy.get('.grid').children('.grid-column').should('have.length', 3);
    });

    it('has correct styles', () => {
        cy.get('.grid').should('have.css', 'display', 'grid');
        cy.get('.grid').should('have.css', 'grid-template-columns', '288px 288px 288px');
        cy.get('.grid').should('have.css', 'grid-gap', `${tokens.spacing.xl} ${tokens.spacing.xl}`);
        cy.get('.grid').should('have.css', 'width', '960px');
        cy.get('.grid').should('have.css', 'max-width', '960px');
        cy.get('.grid').should('have.css', 'margin', '0px 480px');
    });
})

describe('grid 4 columns', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-grid--grid&args=numberOfColumns:4');
    });

    it('has correct class and tag name', () => {
        cy.get('toujou-grid').should('have.prop', 'tagName').should('eq', 'TOUJOU-GRID');
        cy.get('toujou-grid').invoke('attr', 'number-of-columns').should('eq', '4');
    });

    it('has correct structure', () => {
        cy.get('.grid').should('exist');
        cy.get('.grid').children('.grid-column').should('have.length', 4);
    });

    it('has correct styles', () => {
        cy.get('.grid').should('have.css', 'display', 'grid');
        cy.get('.grid').should('have.css', 'grid-template-columns', '204px 204px 204px 204px');
        cy.get('.grid').should('have.css', 'grid-gap', `${tokens.spacing.xl} ${tokens.spacing.xl}`);
        cy.get('.grid').should('have.css', 'width', '960px');
        cy.get('.grid').should('have.css', 'max-width', '960px');
        cy.get('.grid').should('have.css', 'margin', '0px 480px');
    });
})

describe('grid medium', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-grid--grid&args=type:medium');
    });

    it('has correct class and tag name', () => {
        cy.get('toujou-grid').should('have.prop', 'tagName').should('eq', 'TOUJOU-GRID');
        cy.get('toujou-grid').invoke('attr', 'number-of-columns').should('eq', '1');
        cy.get('toujou-grid').invoke('attr', 'grid-type').should('eq', 'medium');
    });

    it('has correct structure', () => {
        cy.get('.grid').should('exist');
        cy.get('.grid').children('.grid-column').should('have.length', 1);
    });

    it('has correct styles', () => {
        cy.get('.grid').should('have.css', 'width', '1200px');
        cy.get('.grid').should('have.css', 'max-width', '1200px');
        cy.get('.grid').should('have.css', 'margin', '0px 360px');
    });
})

describe('grid wide', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-grid--grid&args=type:wide');
    });

    it('has correct class and tag name', () => {
        cy.get('toujou-grid').should('have.prop', 'tagName').should('eq', 'TOUJOU-GRID');
        cy.get('toujou-grid').invoke('attr', 'number-of-columns').should('eq', '1');
        cy.get('toujou-grid').invoke('attr', 'grid-type').should('eq', 'wide');
    });

    it('has correct structure', () => {
        cy.get('.grid').should('exist');
        cy.get('.grid').children('.grid-column').should('have.length', 1);
    });

    it('has correct styles', () => {
        cy.get('.grid').should('have.css', 'width', '1440px');
        cy.get('.grid').should('have.css', 'max-width', '1440px');
        cy.get('.grid').should('have.css', 'margin', '0px 240px');
    });
})

describe('grid fullwidth', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-grid--grid&args=type:fullwidth');
    });

    it('has correct class and tag name', () => {
        cy.get('toujou-grid').should('have.prop', 'tagName').should('eq', 'TOUJOU-GRID');
        cy.get('toujou-grid').invoke('attr', 'number-of-columns').should('eq', '1');
        cy.get('toujou-grid').invoke('attr', 'grid-type').should('eq', 'fullwidth');
    });

    it('has correct structure', () => {
        cy.get('.grid').should('exist');
        cy.get('.grid').children('.grid-column').should('have.length', 1);
    });

    it('has correct styles', () => {
        cy.get('.grid').should('have.css', 'width', '1920px');
        cy.get('.grid').should('have.css', 'max-width', '100%');
        cy.get('.grid').should('have.css', 'margin', '0px');
    });
})

describe('grid ignore', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-grid--grid&args=type:ignore');
    });

    it('has correct class and tag name', () => {
        cy.get('toujou-grid').should('have.prop', 'tagName').should('eq', 'TOUJOU-GRID');
        cy.get('toujou-grid').invoke('attr', 'number-of-columns').should('eq', '1');
        cy.get('toujou-grid').invoke('attr', 'grid-type').should('eq', 'ignore');
    });

    it('has correct structure', () => {
        cy.get('.grid').should('exist');
        cy.get('.grid').children('.grid-column').should('have.length', 1);
    });

    it('has correct styles', () => {
        cy.get('.grid').should('have.css', 'width', '0px');
        cy.get('.grid').should('have.css', 'max-width', '960px');
        cy.get('.grid').should('have.css', 'margin', '0px auto');
        cy.get('.grid').should('have.css', 'display', 'contents');
    });
})

export {}
