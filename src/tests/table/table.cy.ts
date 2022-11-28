/// <reference types="cypress" />

const colors = Cypress.env('colors');

describe('table', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-table--table');
    });

    it('has correct class', () => {
        cy.get('table.table').should('exist')
    });

    it('has table container parent', () => {
        cy.get('table.table').parent().should('have.prop', 'tagName').should('eq', 'TOUJOU-TABLE-CONTAINER');
        cy.get('table.table').parent().invoke('attr', 'class').should('eq', 'table-container');
    });

    it('table container parent has correct styles', () => {
        cy.get('table.table').parent().should('have.css', 'display', 'block');
        cy.get('table.table').parent().should('have.css', 'overflow-x', 'auto');
        cy.get('table.table').parent().should('have.css', 'margin-bottom', '0px');
    });

    it('table element has correct styles', () => {
        cy.get('table.table tr:nth-child(1)').should('have.css', 'background-color', colors.colorFontO04);
        cy.get('table.table tr:nth-child(2)').should('have.css', 'background-color', colors.colorTransparent);
        cy.get('table.table tr:nth-child(3)').should('have.css', 'background-color', colors.colorFontO04);
        cy.get('table.table tr:nth-child(4)').should('have.css', 'background-color', colors.colorTransparent);

        cy.get('table.table tr td').should('have.css', 'color', colors.colorFont);
        cy.get('table.table tr th').should('have.css', 'color', colors.colorFont);
    });

    it('table caption and summary have correct styles', () => {
        cy.get('table.table .table__caption').should('have.css', 'color', colors.colorFont);
        cy.get('table.table .table__caption').should('have.css', 'margin-bottom', '8px');
        cy.get('table.table .table__caption').should('have.css', 'font-size', '16px');
        cy.get('table.table .table__summary').should('have.css', 'color', colors.colorFont);
        cy.get('table.table .table__summary').should('have.css', 'font-size', '14px');
    });
})

describe('table - centered', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-table--table&args=tableAlignment:center');
    });

    it('text has correct alignment', () => {
        cy.get('table.table').should('have.css', 'text-align', 'center');
        cy.get('table.table .table__caption').should('have.css', 'text-align', 'center');
    });
})

describe('table - left aligned', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-table--table&args=tableAlignment:left');
    });

    it('text has correct alignment', () => {
        cy.get('table.table').should('have.css', 'text-align', 'left');
        cy.get('table.table .table__caption').should('have.css', 'text-align', 'left');
    });
})

describe('table - right aligned', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-table--table&args=tableAlignment:right');
    });

    it('text has correct alignment', () => {
        cy.get('table.table').should('have.css', 'text-align', 'right');
        cy.get('table.table .table__caption').should('have.css', 'text-align', 'right');
    });
})



export {}
