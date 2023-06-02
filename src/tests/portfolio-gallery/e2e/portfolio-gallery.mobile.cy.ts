/// <reference types="cypress" />
/// <reference types="cypress-real-events" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('Portfolio gallery [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-portfolio-gallery--portfolio-gallery');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct class and tag name', () => {
        cy.get('.portfolio-gallery').should('have.prop', 'tagName').should('eq', 'TOUJOU-PORTFOLIO-GALLERY');
        cy.get('.portfolio-gallery').invoke('attr', 'number-of-items').should('eq', 'max');
        cy.get('.portfolio-gallery').invoke('attr', 'is-header').should('exist');
        cy.get('.portfolio-gallery').invoke('attr', 'lightbox-parent-id').should('eq', '1');
    });

    it('has correct structure', () => {
        cy.get('.portfolio-gallery').should('exist');
        cy.get('.portfolio-gallery .slider').should('exist');
        cy.get('.portfolio-gallery .slider').invoke('attr', 'slider-type').should('eq', 'slider');
        cy.get('.portfolio-gallery .slider').invoke('attr', 'slot').should('eq', 'slider');
        cy.get('.portfolio-gallery .slider .slider__slider').should('exist');
        cy.get('.portfolio-gallery .slider .slider__slider .splide__arrows').should('exist');
        cy.get('.portfolio-gallery .slider .slider__slider .splide__arrows').children('.splide__arrow').should('have.length', 2);
        cy.get('.portfolio-gallery .slider .slider__slider .slider__track').should('exist');
        cy.get('.portfolio-gallery .slider .slider__slider .slider__track .slider__list').should('exist');
        cy.get('.portfolio-gallery .slider .slider__slider .slider__track .slider__list').children('.slider-slide').should('have.length', 7);
        cy.get('.portfolio-gallery .slider .slider__slider .slider-bullets').should('exist');
        cy.get('.portfolio-gallery .slider .slider-count').should('exist');
        cy.get('.portfolio-gallery .portfolio-gallery__button').should('exist');
        cy.get('.portfolio-gallery .portfolio-gallery__button').invoke('attr', 'slot').should('eq', 'button');
        cy.get('.portfolio-gallery .portfolio-gallery__button .icon').should('exist');
    });

    it('has correct styles', () => {
        cy.get('.portfolio-gallery').should('have.css', 'position', 'relative');
        cy.get('.portfolio-gallery').should('have.css', 'display', 'block');
        cy.get('.portfolio-gallery').should('have.css', 'z-index', tokens.zIndex.content);
        cy.get('.portfolio-gallery').should('have.css', 'width', '375px');
        cy.get('.portfolio-gallery').should('have.css', 'max-width', '100%');
        cy.get('.portfolio-gallery').should('have.css', 'margin', '0px');
        cy.get('.portfolio-gallery').should('have.css', 'aspect-ratio', 'auto');
    });

    it('has correct slider styles', () => {
        cy.get('.portfolio-gallery .slider').should('have.css', 'display', 'block');
        cy.get('.portfolio-gallery .slider').should('have.css', 'grid-gap', `normal normal`);
        cy.get('.portfolio-gallery .slider').should('have.css', 'width', '375px');
        cy.get('.portfolio-gallery .slider').should('have.css', 'max-width', '960px');
        cy.get('.portfolio-gallery .slider').should('have.css', 'position', 'relative');
        cy.get('.portfolio-gallery .slider').should('have.css', 'margin', '0px');
        cy.get('.portfolio-gallery .slider').should('have.css', 'z-index', tokens.zIndex.content);
    });

    it('has correct button styles', () => {
        cy.get('.portfolio-gallery .portfolio-gallery__button').should('have.css', 'position', 'absolute');
        cy.get('.portfolio-gallery .portfolio-gallery__button').should('have.css', 'bottom', tokens.spacing.normal);
        cy.get('.portfolio-gallery .portfolio-gallery__button').should('have.css', 'right', tokens.spacing.normal);
        cy.get('.portfolio-gallery .portfolio-gallery__button').should('have.css', 'z-index', tokens.zIndex.content);
        cy.get('.portfolio-gallery .portfolio-gallery__button').should('have.css', 'width', '123.578125px');
        cy.get('.portfolio-gallery .portfolio-gallery__button').should('have.css', 'height', '38px');
        cy.get('.portfolio-gallery .portfolio-gallery__button').should('have.css', 'display', 'flex');
        cy.get('.portfolio-gallery .portfolio-gallery__button').should('have.css', 'align-items', 'center');
        cy.get('.portfolio-gallery .portfolio-gallery__button').should('have.css', 'justify-content', 'center');
        cy.get('.portfolio-gallery .portfolio-gallery__button').should('have.css', 'border', `${tokens.border.normal} solid ${colors.colorPrimary}`);
        cy.get('.portfolio-gallery .portfolio-gallery__button').should('have.css', 'outline', 'rgb(255, 255, 255) none 0px');
        cy.get('.portfolio-gallery .portfolio-gallery__button').should('have.css', 'gap', tokens.spacing.s);
        cy.get('.portfolio-gallery .portfolio-gallery__button').should('have.css', 'background-color', colors.colorPrimary);
        cy.get('.portfolio-gallery .portfolio-gallery__button').should('have.css', 'color', colors.colorBg);
        cy.get('.portfolio-gallery .portfolio-gallery__button').should('have.css', 'font-size', tokens.type.size.normal);
        cy.get('.portfolio-gallery .portfolio-gallery__button').should('have.css', 'font-family', tokens.type.fontFamily.text);
        cy.get('.portfolio-gallery .portfolio-gallery__button').should('have.css', 'padding', `${tokens.spacing.s} ${tokens.spacing.m}`);
        cy.get('.portfolio-gallery .portfolio-gallery__button').should('have.css', 'border-radius', tokens.borderRadius.normal);
        cy.get('.portfolio-gallery .portfolio-gallery__button').should('have.css', 'text-decoration', `none solid ${colors.colorBg}`);
        cy.get('.portfolio-gallery .portfolio-gallery__button').should('have.css', 'cursor', 'pointer');
    });

    it('on desktop correct elements have display: contents', () => {
        cy.get('.portfolio-gallery .slider__slider').should('have.css', 'display', 'block');
        cy.get('.portfolio-gallery .slider__track').should('have.css', 'display', 'block');
        cy.get('.portfolio-gallery .slider__list').should('have.css', 'display', 'flex');
    });

    it('has correct big image styles', () => {
        cy.get('.portfolio-gallery .slider-slide:nth-child(1)').should('have.css', 'grid-row', 'auto / auto');
    });

    it('has correct small image styles', () => {
        cy.get('.portfolio-gallery .slider-slide:nth-child(2)').should('have.css', 'grid-row', 'auto / auto');
        cy.get('.portfolio-gallery .slider-slide:nth-child(2)').should('have.css', 'grid-column', 'auto / auto');

        cy.get('.portfolio-gallery .slider-slide:nth-child(3)').should('have.css', 'grid-row', 'auto / auto');
        cy.get('.portfolio-gallery .slider-slide:nth-child(3)').should('have.css', 'grid-column', 'auto / auto');

        cy.get('.portfolio-gallery .slider-slide:nth-child(4)').should('have.css', 'grid-row', 'auto / auto');
        cy.get('.portfolio-gallery .slider-slide:nth-child(4)').should('have.css', 'grid-column', 'auto / auto');

        cy.get('.portfolio-gallery .slider-slide:nth-child(5)').should('have.css', 'grid-row', 'auto / auto');
        cy.get('.portfolio-gallery .slider-slide:nth-child(5)').should('have.css', 'grid-column', 'auto / auto');
    });
})

export {}
