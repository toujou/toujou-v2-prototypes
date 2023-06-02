/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('media-date [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-mediadate--media-date');
    });

    it('has correct class and tag name', () => {
        cy.get('.media-date').should('have.prop', 'tagName').should('eq', 'TIME');
        cy.get('.media-date').invoke('attr', 'class').should('eq', 'media-date');
    });

    it('has correct attributes', () => {
        cy.get('.media-date').invoke('attr', 'datetime').should('eq', '2023-06-14');
    });

    it('has correct styles', () => {
        cy.get('.media-date').should('have.css', 'position', 'absolute');
        cy.get('.media-date').should('have.css', 'top', tokens.spacing.normal);
        cy.get('.media-date').should('have.css', 'right', tokens.spacing.normal);
        cy.get('.media-date').should('have.css', 'background-color', colors.colorBg);
        cy.get('.media-date').should('have.css', 'border-radius', tokens.borderRadius.normal);
        cy.get('.media-date').should('have.css', 'padding', tokens.spacing.s);

        cy.get('.media-date__months').children("*").should('have.length', '3');
        cy.get('.media-date__months').should('have.css', 'display', 'flex');
        cy.get('.media-date__months').should('have.css', 'flex-direction', 'row');
        cy.get('.media-date__months').should('have.css', 'align-items', 'center');
        cy.get('.media-date__months').should('have.css', 'justify-content', 'space-around');
        cy.get('.media-date__months').should('have.css', 'height', tokens.spacing.normal);
        cy.get('.media-date__months').should('have.css', 'line-height', tokens.spacing.normal);

        cy.get('.media-date__months .media-date__month:first-child').should('have.css', 'font-family', tokens.type.fontFamily.text);
        cy.get('.media-date__months .media-date__month:first-child').should('have.css', 'font-size', tokens.type.size.xs);
        cy.get('.media-date__months .media-date__month:first-child').should('have.css', 'color', colors.colorFont);
        cy.get('.media-date__months .media-date__month:first-child').should('have.css', 'text-transform', 'uppercase');

        cy.get('.media-date__months .media-date__month-separator').should('have.css', 'opacity', '0');

        cy.get('.media-date__years').children("*").should('have.length', '3');
        cy.get('.media-date__years').should('have.css', 'display', 'flex');
        cy.get('.media-date__years').should('have.css', 'flex-direction', 'row');
        cy.get('.media-date__years').should('have.css', 'align-items', 'center');
        cy.get('.media-date__years').should('have.css', 'justify-content', 'space-around');
        cy.get('.media-date__years').should('have.css', 'height', tokens.spacing.normal);
        cy.get('.media-date__years').should('have.css', 'line-height', tokens.spacing.normal);

        cy.get('.media-date__years .media-date__year:first-child').should('have.css', 'font-family', tokens.type.fontFamily.text);
        cy.get('.media-date__years .media-date__year:first-child').should('have.css', 'font-size', tokens.type.size.xs);
        cy.get('.media-date__years .media-date__year:first-child').should('have.css', 'color', colors.colorFont);
        cy.get('.media-date__years .media-date__year:first-child').should('have.css', 'text-transform', 'uppercase');

        cy.get('.media-date__years .media-date__year-separator').should('have.css', 'opacity', '0');

        cy.get('.media-date__days').children("*").should('have.length', '3');
        cy.get('.media-date__days').should('have.css', 'display', 'flex');
        cy.get('.media-date__days').should('have.css', 'flex-direction', 'row');
        cy.get('.media-date__days').should('have.css', 'align-items', 'center');
        cy.get('.media-date__days').should('have.css', 'justify-content', 'space-around');
        cy.get('.media-date__days').should('have.css', 'height', tokens.spacing.m);
        cy.get('.media-date__days').should('have.css', 'line-height', tokens.spacing.normal);

        cy.get('.media-date__days .media-date__day:first-child').should('have.css', 'font-family', tokens.type.fontFamily.text);
        cy.get('.media-date__days .media-date__day:first-child').should('have.css', 'font-size', tokens.type.size.m);
        cy.get('.media-date__days .media-date__day:first-child').should('have.css', 'color', colors.colorFont);
        cy.get('.media-date__days .media-date__day:first-child').should('have.css', 'text-transform', 'none');

        cy.get('.media-date__days .media-date__day-separator').should('have.css', 'opacity', '1');
    });
})

describe('media-date - single month [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-mediadate--media-date&args=singleMonth:true');
    });

    it('has correct styles', () => {
        cy.get('.media-date__months').children("*").should('have.length', '1');
        cy.get('.media-date__years').children("*").should('have.length', '3');
        cy.get('.media-date__days').children("*").should('have.length', '3');
    });
})

describe('media-date - single year [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-mediadate--media-date&args=singleYear:true');
    });

    it('has correct styles', () => {
        cy.get('.media-date__months').children("*").should('have.length', '3');
        cy.get('.media-date__years').children("*").should('have.length', '1');
        cy.get('.media-date__days').children("*").should('have.length', '3');
    });
})

describe('media-date - single month and single year [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-mediadate--media-date&args=singleMonth:true;singleYear:true');
    });

    it('has correct styles', () => {
        cy.get('.media-date__months').children("*").should('have.length', '1');
        cy.get('.media-date__years').children("*").should('have.length', '1');
        cy.get('.media-date__days').children("*").should('have.length', '3');
    });
})

describe('media-date - single day [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-mediadate--media-date&args=singleDay:true');
    });

    it('has correct styles', () => {
        cy.get('.media-date__months').children("*").should('have.length', '1');
        cy.get('.media-date__years').children("*").should('have.length', '1');
        cy.get('.media-date__days').children("*").should('have.length', '1');
    });
})

export {}
