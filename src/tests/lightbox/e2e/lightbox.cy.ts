/// <reference types="cypress" />

const tokens = Cypress.env('tokens');

describe('lightbox', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-lightbox--lightbox');
        cy.get('.media-grid[lightbox-parent-id="1"] .single-media:first-child .lightbox-item').click();
        cy.wait(10);
    });

    it('has correct class and tag name', () => {
        cy.get('.pswp').should('have.prop', 'tagName').should('eq', 'DIV');
        cy.get('.pswp').invoke('attr', 'tabindex').should('eq', '-1');
        cy.get('.pswp').invoke('attr', 'role').should('eq', 'dialog');
        cy.get('.pswp').invoke('attr', 'aria-label').should('eq', 'Lightbox');
    });

    it('has correct structure', () => {
        cy.get('.pswp').should('exist');
        cy.get('.pswp .pswp__bg').should('exist');
        cy.get('.pswp .pswp__scroll-wrap').should('exist');
        cy.get('.pswp .pswp__scroll-wrap .pswp__container').should('exist');
        cy.get('.pswp .pswp__scroll-wrap .pswp__container').children('.pswp__item').should('have.length', 3);
        cy.get('.pswp .pswp__scroll-wrap .pswp__top-bar').should('exist');
        cy.get('.pswp .pswp__scroll-wrap .pswp__button--arrow--prev').should('exist');
        cy.get('.pswp .pswp__scroll-wrap .pswp__button--arrow--next').should('exist');
        cy.get('.pswp .pswp__caption').should('exist');
    });

    it('has correct styles', () => {
        cy.get('.pswp').should('have.css', 'position', 'fixed');
        cy.get('.pswp').should('have.css', 'top', '0px');
        cy.get('.pswp').should('have.css', 'left', '0px');
        cy.get('.pswp').should('have.css', 'width', '1920px');
        cy.get('.pswp').should('have.css', 'height', '1080px');
        cy.get('.pswp').should('have.css', 'z-index', '100000');
        cy.get('.pswp').should('have.css', 'overflow', 'hidden');

        cy.get('.pswp .pswp__bg').should('have.css', 'position', 'absolute');
        cy.get('.pswp .pswp__bg').should('have.css', 'top', '0px');
        cy.get('.pswp .pswp__bg').should('have.css', 'bottom', '0px');
        cy.get('.pswp .pswp__bg').should('have.css', 'left', '0px');
        cy.get('.pswp .pswp__bg').should('have.css', 'width', '1920px');
        cy.get('.pswp .pswp__bg').should('have.css', 'height', '1080px');
        cy.get('.pswp .pswp__bg').should('have.css', 'opacity', '0.8');
        cy.get('.pswp .pswp__bg').should('have.css', 'background-color', 'rgb(0, 0, 0)');

        cy.get('.pswp .pswp__scroll-wrap').should('have.css', 'position', 'absolute');
        cy.get('.pswp .pswp__scroll-wrap').should('have.css', 'top', '0px');
        cy.get('.pswp .pswp__scroll-wrap').should('have.css', 'bottom', '0px');
        cy.get('.pswp .pswp__scroll-wrap').should('have.css', 'left', '0px');

        cy.get('.pswp .pswp__container').should('have.css', 'position', 'absolute');
        cy.get('.pswp .pswp__container').should('have.css', 'top', '0px');
        cy.get('.pswp .pswp__container').should('have.css', 'bottom', '0px');
        cy.get('.pswp .pswp__container').should('have.css', 'left', '0px');

        cy.get('.pswp .pswp__item').should('have.css', 'position', 'absolute');
        cy.get('.pswp .pswp__item').should('have.css', 'top', '0px');
        cy.get('.pswp .pswp__item').should('have.css', 'bottom', '0px');
        cy.get('.pswp .pswp__item').should('have.css', 'left', '0px');
        cy.get('.pswp .pswp__item').should('have.css', 'overflow', 'hidden');
        cy.get('.pswp .pswp__item').should('have.css', 'z-index', '1');

        cy.get('.pswp .pswp__item .pswp__img').should('have.css', 'padding', tokens.spacing.xl);
    });
})

describe('lightbox', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-lightbox--lightbox');

    });

    it.only('can open', () => {
        cy.get('.pswp').should('not.exist');
        cy.get('.media-grid[lightbox-parent-id="1"] .single-media:first-child .lightbox-item').click();
        cy.wait(10);
        cy.get('.pswp').should('exist');
    });
})

export {}
