/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('social-media-bar', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-social-media-bar--social-media-bar');
    });

    it('has correct class and tag name', () => {
        cy.get('.social-media-bar').should('have.prop', 'tagName').should('eq', 'TOUJOU-SOCIAL-MEDIA-BAR');
        cy.get('.social-media-bar').invoke('attr', 'class').should('eq', 'social-media-bar');
    });

    it('has correct attributes', () => {
        cy.get('.social-media-bar').invoke('attr', 'element-design').should('eq', 'default');
        cy.get('.social-media-bar').invoke('attr', 'inline').should('not.exist');
    });

    it('has correct styles', () => {
        cy.get('.social-media-bar').should('have.css', 'border', `1px solid ${colors.colorFontLight}`);
        cy.get('.social-media-bar').should('have.css', 'padding', '48px 32px');
        cy.get('.social-media-bar').should('have.css', 'margin', '0px 464px');
        cy.get('.social-media-bar').should('have.css', 'display', 'flex');
        cy.get('.social-media-bar').should('have.css', 'flex-direction', 'column');
        cy.get('.social-media-bar').should('have.css', 'align-items', 'center');
        cy.get('.social-media-bar').should('have.css', 'justify-content', 'center');
        cy.get('.social-media-bar').should('have.css', 'border-radius', '4px');
        cy.get('.social-media-bar').should('have.css', 'background-color', colors.colorBg);
    });

    it('has correct headline styles', () => {
        cy.get('.social-media-bar__headline').should('have.css', 'font-family', 'Ubuntu, sans-serif');
        cy.get('.social-media-bar__headline').should('have.css', 'font-size', '32px');
        cy.get('.social-media-bar__headline').should('have.css', 'color', colors.colorFont);
        cy.get('.social-media-bar__headline').should('have.css', 'margin-bottom', tokens.spacing.normal);
        cy.get('.social-media-bar__headline').should('have.css', 'text-decoration', 'none solid rgb(42, 54, 60)');
    });

    it('has correct links styles', () => {
        cy.get('.social-media-bar__links').should('have.css', 'display', 'flex');
        cy.get('.social-media-bar__links').should('have.css', 'flex-direction', 'row');
        cy.get('.social-media-bar__links').should('have.css', 'flex-wrap', 'wrap');
        cy.get('.social-media-bar__links').should('have.css', 'gap', '16px 32px');
        cy.get('.social-media-bar__links').should('have.css', 'align-items', 'center');
        cy.get('.social-media-bar__links').should('have.css', 'justify-content', 'center');

        cy.get('.social-media-bar__links').children('.social-media-bar__link').should('have.length', 4);

        cy.get('.social-media-bar__link:first-child .icon').invoke('attr', 'icon-name').should('eq', 'sm-facebook');
        cy.get('.social-media-bar__link:first-child .icon').invoke('attr', 'icon-size').should('eq', 'xxl');
        cy.get('.social-media-bar__link:first-child .icon').invoke('attr', 'icon-color').should('eq', 'primary');
        cy.get('.social-media-bar__link:first-child .icon').invoke('attr', 'aria-hidden').should('exist');
        cy.get('.social-media-bar__link:first-child .icon').should('have.css', 'background-color', colors.colorPrimary);
    });
})

describe('social-media-bar - inline', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-social-media-bar--social-media-bar&args=isInline:true');
    });

    it('has correct attributes', () => {
        cy.get('.social-media-bar').invoke('attr', 'inline').should('exist');
    });

    it('has correct styles', () => {
        cy.get('.social-media-bar').should('have.css', 'border', `1px solid rgba(0, 0, 0, 0)`);
        cy.get('.social-media-bar').should('have.css', 'padding', '0px');
        cy.get('.social-media-bar').should('have.css', 'margin', '24px 0px');
        cy.get('.social-media-bar').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
        cy.get('.social-media-bar').should('have.css', 'gap', 'normal');
    });
})

describe('social-media-bar - primary', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-social-media-bar--social-media-bar&args=elementDesign:primary');
    });

    it('has correct attributes', () => {
        cy.get('.social-media-bar').invoke('attr', 'element-design').should('eq', 'primary');
    });

    it('has correct styles', () => {
        cy.get('.social-media-bar').should('have.css', 'border', `1px solid ${colors.colorPrimary}`);
        cy.get('.social-media-bar').should('have.css', 'background-color', colors.colorPrimary);
        cy.get('.social-media-bar__headline').should('have.css', 'color', colors.colorBg);
        cy.get('.social-media-bar__link:first-child .icon').should('have.css', 'background-color', colors.colorBg);
    });
})

describe('social-media-bar - secondary', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-social-media-bar--social-media-bar&args=elementDesign:secondary');
    });

    it('has correct attributes', () => {
        cy.get('.social-media-bar').invoke('attr', 'element-design').should('eq', 'secondary');
    });

    it('has correct styles', () => {
        cy.get('.social-media-bar').should('have.css', 'border', `1px solid ${colors.colorSecondary}`);
        cy.get('.social-media-bar').should('have.css', 'background-color', colors.colorSecondary);
        cy.get('.social-media-bar__headline').should('have.css', 'color', colors.colorBg);
        cy.get('.social-media-bar__link:first-child .icon').should('have.css', 'background-color', colors.colorBg);
    });
})

describe('social-media-bar - inverted', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-social-media-bar--social-media-bar&args=elementDesign:inverted');
    });

    it('has correct attributes', () => {
        cy.get('.social-media-bar').invoke('attr', 'element-design').should('eq', 'inverted');
    });

    it('has correct styles', () => {
        cy.get('.social-media-bar').should('have.css', 'border', `1px solid ${colors.colorFont}`);
        cy.get('.social-media-bar').should('have.css', 'background-color', colors.colorFont);
        cy.get('.social-media-bar__headline').should('have.css', 'color', colors.colorBg);
        cy.get('.social-media-bar__link:first-child .icon').should('have.css', 'background-color', colors.colorBg);
    });
})

describe('social-media-bar - no headline', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-social-media-bar--social-media-bar&args=hideHeadline:true');
    });

    it('has correct attributes', () => {
        cy.get('.social-media-bar').invoke('attr', 'no-headline').should('exist');
    });

    it('has correct styles', () => {
        cy.get('.social-media-bar__headline').should('not.exist');
        cy.get('.social-media-bar').should('have.css', 'padding', '16px');
    });
})

export {}
