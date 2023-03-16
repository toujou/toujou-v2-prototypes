/// <reference types="cypress" />
/// <reference types="cypress-real-events" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('PN Nav', () => {
    beforeEach(() => {
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
        cy.get('.portfolio-gallery').should('have.css', 'width', '1920px');
        cy.get('.portfolio-gallery').should('have.css', 'max-width', '100%');
        cy.get('.portfolio-gallery').should('have.css', 'margin', '0px');
        cy.get('.portfolio-gallery').should('have.css', 'aspect-ratio', '2 / 1');
    });

    it('has correct slider styles', () => {
        cy.get('.portfolio-gallery .slider').should('have.css', 'display', 'grid');
        cy.get('.portfolio-gallery .slider').should('have.css', 'grid-gap', `${tokens.spacing.s} ${tokens.spacing.s}`);
        cy.get('.portfolio-gallery .slider').should('have.css', 'width', '1920px');
        cy.get('.portfolio-gallery .slider').should('have.css', 'max-width', '100%');
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

    it('has correct button hover styles', () => {
        cy.get('.portfolio-gallery .portfolio-gallery__button').should('have.css', 'background-color', colors.colorPrimary);
        cy.get('.portfolio-gallery .portfolio-gallery__button').should('have.css', 'color', colors.colorBg);
        cy.get('.portfolio-gallery .portfolio-gallery__button').realHover();
        cy.get('.portfolio-gallery .portfolio-gallery__button').should('have.css', 'background-color', colors.colorPrimaryDark);
        cy.get('.portfolio-gallery .portfolio-gallery__button').should('have.css', 'color', colors.colorBg);
    });

    it('on desktop correct elements have display: contents', () => {
        cy.get('.portfolio-gallery .slider__slider').should('have.css', 'display', 'contents');
        cy.get('.portfolio-gallery .slider__track').should('have.css', 'display', 'contents');
        cy.get('.portfolio-gallery .slider__list').should('have.css', 'display', 'contents');
    });

    it('has correct big image styles', () => {
        cy.get('.portfolio-gallery .slider-slide:nth-child(1)').should('have.css', 'grid-row', '1 / 3');
    });

    it('has correct small image styles', () => {
        cy.get('.portfolio-gallery .slider-slide:nth-child(2)').should('have.css', 'grid-row', '1 / auto');
        cy.get('.portfolio-gallery .slider-slide:nth-child(2)').should('have.css', 'grid-column', '2 / auto');

        cy.get('.portfolio-gallery .slider-slide:nth-child(3)').should('have.css', 'grid-row', '1 / auto');
        cy.get('.portfolio-gallery .slider-slide:nth-child(3)').should('have.css', 'grid-column', '3 / auto');

        cy.get('.portfolio-gallery .slider-slide:nth-child(4)').should('have.css', 'grid-row', '2 / auto');
        cy.get('.portfolio-gallery .slider-slide:nth-child(4)').should('have.css', 'grid-column', '2 / auto');

        cy.get('.portfolio-gallery .slider-slide:nth-child(5)').should('have.css', 'grid-row', '2 / auto');
        cy.get('.portfolio-gallery .slider-slide:nth-child(5)').should('have.css', 'grid-column', '3 / auto');
    });

    it.only('has correct image hover styles', () => {
        // @ts-ignore
        cy.get('body').resetRealHover();

        // @ts-ignore
        cy.get('.portfolio-gallery .slider-slide:nth-child(1) .portfolio-gallery__link').after('content').should('eq', '');
        // @ts-ignore
        cy.get('.portfolio-gallery .slider-slide:nth-child(1) .portfolio-gallery__link').after('position').should('eq', 'absolute');
        // @ts-ignore
        cy.get('.portfolio-gallery .slider-slide:nth-child(1) .portfolio-gallery__link').after('left').should('eq', '476px');
        // @ts-ignore
        cy.get('.portfolio-gallery .slider-slide:nth-child(1) .portfolio-gallery__link').after('top').should('eq', '480px');
        // @ts-ignore
        cy.get('.portfolio-gallery .slider-slide:nth-child(1) .portfolio-gallery__link').after('transform').should('eq', 'matrix(1, 0, 0, 1, -14, -14)');
        // @ts-ignore
        cy.get('.portfolio-gallery .slider-slide:nth-child(1) .portfolio-gallery__link').after('height').should('eq', '28px');
        // @ts-ignore
        cy.get('.portfolio-gallery .slider-slide:nth-child(1) .portfolio-gallery__link').after('width').should('eq', '28px');
        // @ts-ignore
        cy.get('.portfolio-gallery .slider-slide:nth-child(1) .portfolio-gallery__link').after('-webkit-mask-position').should('eq', '50% 50%');
        // @ts-ignore
        cy.get('.portfolio-gallery .slider-slide:nth-child(1) .portfolio-gallery__link').after('-webkit-mask-size').should('eq', 'contain');
        // @ts-ignore
        cy.get('.portfolio-gallery .slider-slide:nth-child(1) .portfolio-gallery__link').after('-webkit-mask-repeat').should('eq', 'no-repeat');
        // @ts-ignore
        cy.get('.portfolio-gallery .slider-slide:nth-child(1) .portfolio-gallery__link').after('-webkit-mask-image').should('eq', 'url("http://localhost:6006/assets/icons/icon-image-circle-filled.svg")');
        // @ts-ignore
        cy.get('.portfolio-gallery .slider-slide:nth-child(1) .portfolio-gallery__link').after('pointer-events').should('eq', 'none');
        // @ts-ignore
        cy.get('.portfolio-gallery .slider-slide:nth-child(1) .portfolio-gallery__link').after('opacity').should('eq', '0');
        // @ts-ignore
        cy.get('.portfolio-gallery .slider-slide:nth-child(1) .portfolio-gallery__link').after('transition').should('eq', `opacity ${tokens.animation.durationFast} ${tokens.animation.easingNormal} 0s`);

        // @ts-ignore
        cy.get('.portfolio-gallery .slider-slide:nth-child(1) .portfolio-gallery__link .single-media').after('content').should('eq', '');
        // @ts-ignore
        cy.get('.portfolio-gallery .slider-slide:nth-child(1) .portfolio-gallery__link .single-media').after('position').should('eq', 'absolute');
        // @ts-ignore
        cy.get('.portfolio-gallery .slider-slide:nth-child(1) .portfolio-gallery__link .single-media').after('top').should('eq', '0px');
        // @ts-ignore
        cy.get('.portfolio-gallery .slider-slide:nth-child(1) .portfolio-gallery__link .single-media').after('left').should('eq', '0px');
        // @ts-ignore
        cy.get('.portfolio-gallery .slider-slide:nth-child(1) .portfolio-gallery__link .single-media').after('height').should('eq', '960px');
        // @ts-ignore
        cy.get('.portfolio-gallery .slider-slide:nth-child(1) .portfolio-gallery__link .single-media').after('width').should('eq', '952px');
        // @ts-ignore
        cy.get('.portfolio-gallery .slider-slide:nth-child(1) .portfolio-gallery__link .single-media').after('background-color').should('eq', colors.colorBlackO50);
        // @ts-ignore
        cy.get('.portfolio-gallery .slider-slide:nth-child(1) .portfolio-gallery__link .single-media').after('pointer-events').should('eq', 'none');
        // @ts-ignore
        cy.get('.portfolio-gallery .slider-slide:nth-child(1) .portfolio-gallery__link .single-media').after('opacity').should('eq', '0');
        // @ts-ignore
        cy.get('.portfolio-gallery .slider-slide:nth-child(1) .portfolio-gallery__link .single-media').after('transition').should('eq', `opacity ${tokens.animation.durationFast} ${tokens.animation.easingNormal} 0s`);

        cy.get('.portfolio-gallery .slider-slide:nth-child(2) .portfolio-gallery__link').realHover();
        cy.get('.portfolio-gallery .slider-slide:nth-child(1) .portfolio-gallery__link').realHover();
        cy.wait(300);

        // @ts-ignore
        cy.get('.portfolio-gallery .slider-slide:nth-child(1) .portfolio-gallery__link').after('opacity').should('eq', '1');
        // @ts-ignore
        cy.get('.portfolio-gallery .slider-slide:nth-child(1) .portfolio-gallery__link .single-media').after('opacity').should('eq', '1');

    });
})

export {}
