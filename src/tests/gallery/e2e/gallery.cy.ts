/// <reference types="cypress" />
/// <reference types="cypress-real-events" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('gallery', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-media--gallery');
        // @ts-ignore
        cy.get('body').resetRealHover();
        cy.wait(300);
    });

    it('has correct class and tag name', () => {
        cy.get('.gallery').should('have.prop', 'tagName').should('eq', 'TOUJOU-GALLERY');
        cy.get('.gallery').invoke('attr', 'lightbox-parent-id').should('eq', '1');
    });

    it('has correct structure', () => {
        cy.get('.gallery').should('exist');
        cy.get('.gallery').children('.gallery__item').should('have.length', 5);
        cy.get('.gallery .gallery__item .gallery__image').should('exist');
    });

    it('has correct styles', () => {
        cy.get('.gallery').should('have.css', 'display', 'grid');
        cy.get('.gallery').should('have.css', 'grid-template-columns', '314.664px 314.664px 314.672px');
        cy.get('.gallery').should('have.css', 'grid-gap', `${tokens.spacing.s} ${tokens.spacing.s}`);
        cy.get('.gallery').should('have.css', 'width', '960px');
        cy.get('.gallery').should('have.css', 'max-width', '960px');
        cy.get('.gallery').should('have.css', 'margin', '0px 464px');

        cy.get('.gallery .gallery__item:first-child').should('have.css', 'position', 'relative');
        cy.get('.gallery .gallery__item:first-child').should('have.css', 'aspect-ratio', tokens.aspectRatio.golden);

        cy.get('.gallery .gallery__item:first-child .gallery__image').should('have.css', 'height', '194.4765625px');
        cy.get('.gallery .gallery__item:first-child .gallery__image').should('have.css', 'width', '314.6640625px');
        cy.get('.gallery .gallery__item:first-child .gallery__image').should('have.css', 'object-fit', 'cover');
        cy.get('.gallery .gallery__item:first-child .gallery__image').should('have.css', 'border-radius', tokens.borderRadius.normal);
        cy.get('.gallery .gallery__item:first-child .gallery__image').should('have.css', 'vertical-align', 'middle');
    });

    it('has correct hover styles', () => {
        // @ts-ignore
        cy.get('.gallery .gallery__item:first-child').before('content').should('eq', '');
        // @ts-ignore
        cy.get('.gallery .gallery__item:first-child').before('position').should('eq', 'absolute');
        // @ts-ignore
        cy.get('.gallery .gallery__item:first-child').before('top').should('eq', '0px');
        // @ts-ignore
        cy.get('.gallery .gallery__item:first-child').before('left').should('eq', '0px');
        // @ts-ignore
        cy.get('.gallery .gallery__item:first-child').before('height').should('eq', '194.477px');
        // @ts-ignore
        cy.get('.gallery .gallery__item:first-child').before('width').should('eq', '314.664px');
        // @ts-ignore
        cy.get('.gallery .gallery__item:first-child').before('background-color').should('eq', 'rgba(0, 0, 0, 0.5)');
        // @ts-ignore
        cy.get('.gallery .gallery__item:first-child').before('pointer-events').should('eq', 'none');
        // @ts-ignore
        cy.get('.gallery .gallery__item:first-child').before('opacity').should('eq', '0');
        // @ts-ignore
        cy.get('.gallery .gallery__item:first-child').before('transition').should('eq', 'opacity 0.25s ease-in-out 0s');

        // @ts-ignore
        cy.get('.gallery .gallery__item:first-child').after('content').should('eq', '');
        // @ts-ignore
        cy.get('.gallery .gallery__item:first-child').after('position').should('eq', 'absolute');
        // @ts-ignore
        cy.get('.gallery .gallery__item:first-child').after('top').should('eq', '97.2344px');
        // @ts-ignore
        cy.get('.gallery .gallery__item:first-child').after('left').should('eq', '157.328px');
        // @ts-ignore
        cy.get('.gallery .gallery__item:first-child').after('transform').should('eq', 'matrix(1, 0, 0, 1, -14, -14)');
        // @ts-ignore
        cy.get('.gallery .gallery__item:first-child').after('height').should('eq', '28px');
        // @ts-ignore
        cy.get('.gallery .gallery__item:first-child').after('width').should('eq', '28px');
        // @ts-ignore
        cy.get('.gallery .gallery__item:first-child').after('background-color').should('eq', colors.colorBg);
        // @ts-ignore
        cy.get('.gallery .gallery__item:first-child').after('pointer-events').should('eq', 'none');
        // @ts-ignore
        cy.get('.gallery .gallery__item:first-child').after('opacity').should('eq', '0');
        // @ts-ignore
        cy.get('.gallery .gallery__item:first-child').after('transition').should('eq', 'opacity 0.25s ease-in-out 0s');

        cy.get('.gallery .gallery__item:first-child').realHover();
        cy.wait(300);
        // @ts-ignore
        cy.get('.gallery .gallery__item:first-child').before('opacity').should('eq', '1');
        // @ts-ignore
        cy.get('.gallery .gallery__item:first-child').after('opacity').should('eq', '1');
    });

    it('can open lightbox', () => {
        // @ts-ignore
        cy.get('.pswp').should('not.exist');
        cy.get('.gallery .gallery__item:first-child').click();
        cy.wait(500);
        cy.get('.pswp').should('exist');
    });
})

export {}
