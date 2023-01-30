/// <reference types="cypress" />

const colors = Cypress.env('colors');

describe('content card - vertical', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-content-card--vertical-content-card');
        cy.get('body').click();
    });

    it('has correct class and tag name', () => {
        cy.get('toujou-content-card').should('have.prop', 'tagName').should('eq', 'TOUJOU-CONTENT-CARD');
        cy.get('toujou-content-card').invoke('attr', 'class').should('eq', 'content-card');
    });

    it('has correct card grid structure', () => {
        cy.get('toujou-content-card-grid').should('have.prop', 'tagName').should('eq', 'TOUJOU-CONTENT-CARD-GRID');
        cy.get('toujou-content-card-grid').invoke('attr', 'class').should('eq', 'content-card-grid');
        cy.get('toujou-content-card-grid').children('.content-card').should('have.length', 4);
    });

    it('has correct card structure', () => {
        cy.get('.content-card:first-child').should('exist');
        cy.get('.content-card:first-child .content-card__figure').should('exist');
        cy.get('.content-card:first-child .content-card__figure .content-card__image').should('exist');
        cy.get('.content-card:first-child .content-card__content').should('exist');
        cy.get('.content-card:first-child .content-card__content .content-card__title').should('exist');
        cy.get('.content-card:first-child .content-card__content .content-card__text').should('exist');
    });

    it('card has correct attributes', () => {
        cy.get('.content-card:first-child').invoke('attr', 'class').should('eq', 'content-card');
        cy.get('.content-card:first-child').invoke('attr', 'card-variant').should('eq', 'default');
        cy.get('.content-card:first-child').invoke('attr', 'card-direction').should('eq', 'vertical');
        cy.get('.content-card:first-child').invoke('attr', 'role').should('eq', 'article');
    });

    it('has correct styles', () => {
        cy.get('.content-card:first-child').should('have.css', 'display', 'flex');
        cy.get('.content-card:first-child').should('have.css', 'align-items', 'center');
        cy.get('.content-card:first-child').should('have.css', 'align-self', 'stretch');
        cy.get('.content-card:first-child').should('have.css', 'justify-content', 'flex-start');
        cy.get('.content-card:first-child').should('have.css', 'flex-direction', 'column');
        cy.get('.content-card:first-child').should('have.css', 'background-color', colors.colorBg);
        cy.get('.content-card:first-child').should('have.css', 'position', 'relative');
        cy.get('.content-card:first-child').should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.05) 0px 6px 10px 0px, rgba(0, 0, 0, 0.06) 0px 1px 18px 0px, rgba(0, 0, 0, 0.1) 0px 3px 5px -1px');
        cy.get('.content-card:first-child').should('have.css', 'max-width', 'calc(25% - 24px)');
        cy.get('.content-card:first-child').should('have.css', 'z-index', '1');

        cy.get('.content-card:first-child .content-card__figure').should('have.css', 'display', 'block');
        cy.get('.content-card:first-child .content-card__figure').should('have.css', 'margin', '0px');

        cy.get('.content-card:first-child .content-card__image').should('have.css', 'aspect-ratio', '1.618 / 1');
        cy.get('.content-card:first-child .content-card__image').should('have.css', 'display', 'block');
        cy.get('.content-card:first-child .content-card__image').should('have.css', 'object-fit', 'cover');
        cy.get('.content-card:first-child .content-card__image').should('have.css', 'vertical-align', 'middle');

        cy.get('.content-card:first-child .content-card__content').should('have.css', 'display', 'block');
        cy.get('.content-card:first-child .content-card__content').should('have.css', 'flex', '0 0 auto');
        cy.get('.content-card:first-child .content-card__content').should('have.css', 'padding', '24px');

        cy.get('.content-card:first-child .content-card__title').should('have.css', 'font-family', 'Mulish, sans-serif');
        cy.get('.content-card:first-child .content-card__title').should('have.css', 'font-size', '20px');
        cy.get('.content-card:first-child .content-card__title').should('have.css', 'color', colors.colorFontDark);
        cy.get('.content-card:first-child .content-card__title').should('have.css', 'margin', '0px 0px 16px');

        cy.get('.content-card:first-child .content-card__text').should('have.css', 'margin', '16px 0px 0px');
        cy.get('.content-card:first-child .content-card__text').should('have.css', 'font-family', 'Mulish, sans-serif');
        cy.get('.content-card:first-child .content-card__text').should('have.css', 'font-size', '16px');
        cy.get('.content-card:first-child .content-card__text').should('have.css', 'color', colors.colorFont);
    });
});

describe('content card - vertical - primary', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-content-card--vertical-content-card&args=cardVariant:primary');
        cy.get('body').click();
    });

    it('has correct primary styles', () => {
        cy.get('toujou-content-card').invoke('attr', 'card-variant').should('eq', 'primary');
        cy.get('.content-card:first-child').should('have.css', 'background-color', colors.colorPrimary);
        cy.get('.content-card:first-child .content-card__title').should('have.css', 'color', colors.colorBg);
        cy.get('.content-card:first-child .content-card__text').should('have.css', 'color', colors.colorBg);

    });
});

describe('content card - vertical - secondary', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-content-card--vertical-content-card&args=cardVariant:secondary');
        cy.get('body').click();
    });

    it('has correct primary styles', () => {
        cy.get('toujou-content-card').invoke('attr', 'card-variant').should('eq', 'secondary');
        cy.get('.content-card:first-child').should('have.css', 'background-color', colors.colorSecondary);
        cy.get('.content-card:first-child .content-card__title').should('have.css', 'color', colors.colorBg);
        cy.get('.content-card:first-child .content-card__text').should('have.css', 'color', colors.colorBg);

    });
});

describe('content card - vertical - inverted', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-content-card--vertical-content-card&args=cardVariant:inverted');
        cy.get('body').click();
    });

    it('has correct primary styles', () => {
        cy.get('toujou-content-card').invoke('attr', 'card-variant').should('eq', 'inverted');
        cy.get('.content-card:first-child').should('have.css', 'background-color', colors.colorFont);
        cy.get('.content-card:first-child .content-card__title').should('have.css', 'color', colors.colorBg);
        cy.get('.content-card:first-child .content-card__text').should('have.css', 'color', colors.colorBg);

    });
});

export {}