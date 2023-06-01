/// <reference types="cypress" />

const tokens = Cypress.env('tokens');

describe('grid 1 column [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
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
        cy.get('.grid').should('have.css', 'grid-template-columns', '343px');
        cy.get('.grid').should('have.css', 'grid-gap', `${tokens.spacing.l} ${tokens.spacing.l}`);
        cy.get('.grid').should('have.css', 'width', '343px');
        cy.get('.grid').should('have.css', 'max-width', '960px');
        cy.get('.grid').should('have.css', 'margin', '0px 16px');
    });
})

describe('grid 2 columns [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
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
        cy.get('.grid').should('have.css', 'grid-template-columns', '343px');
        cy.get('.grid').should('have.css', 'grid-gap', `${tokens.spacing.l} ${tokens.spacing.l}`);
        cy.get('.grid').should('have.css', 'width', '343px');
        cy.get('.grid').should('have.css', 'max-width', '960px');
        cy.get('.grid').should('have.css', 'margin', '0px 16px');
    });
})

describe('grid 2 columns third right [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
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
        cy.get('.grid').should('have.css', 'grid-template-columns', '343px');
        cy.get('.grid').should('have.css', 'grid-gap', `${tokens.spacing.l} ${tokens.spacing.l}`);
        cy.get('.grid').should('have.css', 'width', '343px');
        cy.get('.grid').should('have.css', 'max-width', '960px');
        cy.get('.grid').should('have.css', 'margin', '0px 16px');
    });
})

describe('grid 2 columns third left [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
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
        cy.get('.grid').should('have.css', 'grid-template-columns', '343px');
        cy.get('.grid').should('have.css', 'grid-gap', `${tokens.spacing.l} ${tokens.spacing.l}`);
        cy.get('.grid').should('have.css', 'width', '343px');
        cy.get('.grid').should('have.css', 'max-width', '960px');
        cy.get('.grid').should('have.css', 'margin', '0px 16px');
    });
})

describe('grid 3 columns [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
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
        cy.get('.grid').should('have.css', 'grid-template-columns', '343px');
        cy.get('.grid').should('have.css', 'grid-gap', `${tokens.spacing.l} ${tokens.spacing.l}`);
        cy.get('.grid').should('have.css', 'width', '343px');
        cy.get('.grid').should('have.css', 'max-width', '960px');
        cy.get('.grid').should('have.css', 'margin', '0px 16px');
    });
})

describe('grid 4 columns [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
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
        cy.get('.grid').should('have.css', 'grid-template-columns', '343px');
        cy.get('.grid').should('have.css', 'grid-gap', `${tokens.spacing.l} ${tokens.spacing.l}`);
        cy.get('.grid').should('have.css', 'width', '343px');
        cy.get('.grid').should('have.css', 'max-width', '960px');
        cy.get('.grid').should('have.css', 'margin', '0px 16px');
    });
})

describe('grid medium [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
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
        cy.get('.grid').should('have.css', 'width', '343px');
        cy.get('.grid').should('have.css', 'max-width', '1200px');
        cy.get('.grid').should('have.css', 'margin', '0px 16px');
    });
})

describe('grid wide [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
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
        cy.get('.grid').should('have.css', 'width', '343px');
        cy.get('.grid').should('have.css', 'max-width', '1440px');
        cy.get('.grid').should('have.css', 'margin', '0px 16px');
    });
})

describe('grid fullwidth [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
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
        cy.get('.grid').should('have.css', 'width', '375px');
        cy.get('.grid').should('have.css', 'max-width', '100%');
        cy.get('.grid').should('have.css', 'margin', '0px');
    });
})

describe('grid ignore [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
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
