/// <reference types="cypress" />

const colors = Cypress.env('colors');

describe('media-date', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-mediadate--media-date');
    });

    it('has correct class and tag name', () => {
        cy.get('.media-date').should('have.prop', 'tagName').should('eq', 'TIME');
        cy.get('.media-date').invoke('attr', 'class').should('eq', 'media-date');
    });

    it('has correct attributes', () => {
        cy.get('.media-date').invoke('attr', 'datetime').should('eq', '2023-06-14');
        cy.get('.media-date').invoke('attr', 'aria-label').should('eq', '2023-06-14');
    });

    it('has correct styles', () => {
        cy.get('.media-date').should('have.css', 'position', 'absolute');
        cy.get('.media-date').should('have.css', 'top', '16px');
        cy.get('.media-date').should('have.css', 'right', '16px');
        cy.get('.media-date').should('have.css', 'background-color', colors.colorBg);
        cy.get('.media-date').should('have.css', 'border-radius', '4px');
        cy.get('.media-date').should('have.css', 'padding', '8px');

        cy.get('.media-date__months').invoke('attr', 'aria-hidden').should('eq', 'true');
        cy.get('.media-date__months').children("*").should('have.length', '3');
        cy.get('.media-date__months').should('have.css', 'display', 'flex');
        cy.get('.media-date__months').should('have.css', 'flex-direction', 'row');
        cy.get('.media-date__months').should('have.css', 'align-items', 'center');
        cy.get('.media-date__months').should('have.css', 'justify-content', 'space-around');
        cy.get('.media-date__months').should('have.css', 'height', '16px');
        cy.get('.media-date__months').should('have.css', 'line-height', '16px');

        cy.get('.media-date__months .media-date__month:first-child').should('have.css', 'font-family', 'Mulish, sans-serif');
        cy.get('.media-date__months .media-date__month:first-child').should('have.css', 'font-size', '12px');
        cy.get('.media-date__months .media-date__month:first-child').should('have.css', 'color', colors.colorFont);
        cy.get('.media-date__months .media-date__month:first-child').should('have.css', 'text-transform', 'uppercase');

        cy.get('.media-date__months .media-date__month-separator').should('have.css', 'opacity', '0');

        cy.get('.media-date__years').invoke('attr', 'aria-hidden').should('eq', 'true');
        cy.get('.media-date__years').children("*").should('have.length', '3');
        cy.get('.media-date__years').should('have.css', 'display', 'flex');
        cy.get('.media-date__years').should('have.css', 'flex-direction', 'row');
        cy.get('.media-date__years').should('have.css', 'align-items', 'center');
        cy.get('.media-date__years').should('have.css', 'justify-content', 'space-around');
        cy.get('.media-date__years').should('have.css', 'height', '16px');
        cy.get('.media-date__years').should('have.css', 'line-height', '16px');

        cy.get('.media-date__years .media-date__year:first-child').should('have.css', 'font-family', 'Mulish, sans-serif');
        cy.get('.media-date__years .media-date__year:first-child').should('have.css', 'font-size', '12px');
        cy.get('.media-date__years .media-date__year:first-child').should('have.css', 'color', colors.colorFont);
        cy.get('.media-date__years .media-date__year:first-child').should('have.css', 'text-transform', 'uppercase');

        cy.get('.media-date__years .media-date__year-separator').should('have.css', 'opacity', '0');

        cy.get('.media-date__days').invoke('attr', 'aria-hidden').should('eq', 'true');
        cy.get('.media-date__days').children("*").should('have.length', '3');
        cy.get('.media-date__days').should('have.css', 'display', 'flex');
        cy.get('.media-date__days').should('have.css', 'flex-direction', 'row');
        cy.get('.media-date__days').should('have.css', 'align-items', 'center');
        cy.get('.media-date__days').should('have.css', 'justify-content', 'space-around');
        cy.get('.media-date__days').should('have.css', 'height', '24px');
        cy.get('.media-date__days').should('have.css', 'line-height', '16px');

        cy.get('.media-date__days .media-date__day:first-child').should('have.css', 'font-family', 'Mulish, sans-serif');
        cy.get('.media-date__days .media-date__day:first-child').should('have.css', 'font-size', '24px');
        cy.get('.media-date__days .media-date__day:first-child').should('have.css', 'color', colors.colorFont);
        cy.get('.media-date__days .media-date__day:first-child').should('have.css', 'text-transform', 'none');

        cy.get('.media-date__days .media-date__day-separator').should('have.css', 'opacity', '1');
    });
})

describe('media-date - single month', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-mediadate--media-date&args=singleMonth:true');
    });

    it('has correct styles', () => {
        cy.get('.media-date__months').children("*").should('have.length', '1');
        cy.get('.media-date__years').children("*").should('have.length', '3');
        cy.get('.media-date__days').children("*").should('have.length', '3');
    });
})

describe('media-date - single year', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-mediadate--media-date&args=singleYear:true');
    });

    it('has correct styles', () => {
        cy.get('.media-date__months').children("*").should('have.length', '3');
        cy.get('.media-date__years').children("*").should('have.length', '1');
        cy.get('.media-date__days').children("*").should('have.length', '3');
    });
})

describe('media-date - single month and single year', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-mediadate--media-date&args=singleMonth:true;singleYear:true');
    });

    it('has correct styles', () => {
        cy.get('.media-date__months').children("*").should('have.length', '1');
        cy.get('.media-date__years').children("*").should('have.length', '1');
        cy.get('.media-date__days').children("*").should('have.length', '3');
    });
})

describe('media-date - single day', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-mediadate--media-date&args=singleDay:true');
    });

    it('has correct styles', () => {
        cy.get('.media-date__months').children("*").should('have.length', '1');
        cy.get('.media-date__years').children("*").should('have.length', '1');
        cy.get('.media-date__days').children("*").should('have.length', '1');
    });
})

export {}
