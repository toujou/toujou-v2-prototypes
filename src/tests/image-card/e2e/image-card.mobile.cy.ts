/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('image-card-grid [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-image-card--image-card');
    });

    it('has correct tags and attributes', () => {
        cy.get('toujou-image-card-grid').should('have.prop', 'tagName').should('eq', 'TOUJOU-IMAGE-CARD-GRID');
        cy.get('toujou-image-card-grid').invoke('attr', 'class').should('eq', 'image-card-grid');
    });

    it('has correct styles', () => {
        cy.get('toujou-image-card-grid').should('have.css', 'display', 'flex');
        cy.get('toujou-image-card-grid').should('have.css', 'grid-gap', `${tokens.spacing.l}`);
        cy.get('toujou-image-card-grid').should('have.css', 'flex-wrap', 'wrap');
        cy.get('toujou-image-card-grid').should('have.css', 'align-items', 'normal');
        cy.get('toujou-image-card-grid').should('have.css', 'justify-content', 'center');
        cy.get('toujou-image-card-grid').should('have.css', 'width', '296px');
        cy.get('toujou-image-card-grid').should('have.css', 'max-width', '1440px');
        cy.get('toujou-image-card-grid').should('have.css', 'z-index', tokens.zIndex.content);
    });
})

describe('image-card [mobile]', () => {
    const imageCard = `.image-card-grid .image-card:first-child`;

    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-image-card--image-card');
    });

    it('has correct tags and attributes', () => {
        cy.get(imageCard).should('have.prop', 'tagName').should('eq', 'A');
        cy.get(imageCard).invoke('attr', 'class').should('eq', 'image-card');
        cy.get(imageCard).invoke('attr', 'image-format').should('eq', '16-9');
        cy.get(imageCard).invoke('attr', 'card-variant').should('eq', 'default');
    });

    it('has correct structure', () => {
        cy.get(`${imageCard} .image-card__figure`).should('exist');
        cy.get(`${imageCard} .image-card__figure .image-card__image`).should('exist');
        cy.get(`${imageCard} .image-card__title`).should('exist');
        cy.get(`${imageCard} .image-card__title .icon`).should('exist');
    });

    it('has correct styles', () => {
        cy.get(`${imageCard}`).should('have.css', 'position', 'relative');
        cy.get(`${imageCard}`).should('have.css', 'display', 'block');
        cy.get(`${imageCard}`).should('have.css', 'width', '296px');
        cy.get(`${imageCard}`).should('have.css', 'max-width', '100%');
        cy.get(`${imageCard}`).should('have.css', 'border-radius', tokens.borderRadius.normal);
        cy.get(`${imageCard}`).should('have.css', 'overflow', 'hidden');
        cy.get(`${imageCard}`).should('have.css', 'text-decoration', `none solid ${colors.colorPrimary}`);
        cy.get(`${imageCard}`).should('have.css', 'z-index', tokens.zIndex.content);
    });

    it('has correct image styles', () => {
        cy.get(`${imageCard} .image-card__image`).should('have.css', 'height', '182.9375px');
        cy.get(`${imageCard} .image-card__image`).should('have.css', 'width', '296px');
        cy.get(`${imageCard} .image-card__image`).should('have.css', 'aspect-ratio', tokens.aspectRatio.golden);
        cy.get(`${imageCard} .image-card__image`).should('have.css', 'object-fit', 'cover');
    });

    it('has correct title styles', () => {
        cy.get(`${imageCard} .image-card__title`).should('have.css', 'display', 'flex');
        cy.get(`${imageCard} .image-card__title`).should('have.css', 'align-items', 'center');
        cy.get(`${imageCard} .image-card__title`).should('have.css', 'justify-content', 'flex-start');
        cy.get(`${imageCard} .image-card__title`).should('have.css', 'gap', tokens.spacing.s);
        cy.get(`${imageCard} .image-card__title`).should('have.css', 'position', 'relative');
        cy.get(`${imageCard} .image-card__title`).should('have.css', 'inset', '0px');
        cy.get(`${imageCard} .image-card__title`).should('have.css', 'width', '296px');
        cy.get(`${imageCard} .image-card__title`).should('have.css', 'color', colors.colorBg);
        cy.get(`${imageCard} .image-card__title`).should('have.css', 'background-color', colors.colorFontDark);
        cy.get(`${imageCard} .image-card__title`).should('have.css', 'font-family', tokens.type.fontFamily.text);
        cy.get(`${imageCard} .image-card__title`).should('have.css', 'font-size', tokens.type.size.normal);
        cy.get(`${imageCard} .image-card__title`).should('have.css', 'font-weight', tokens.type.fontWeight.normal);
        cy.get(`${imageCard} .image-card__title`).should('have.css', 'padding', `${tokens.spacing.s}`);
        cy.get(`${imageCard} .image-card__title`).should('have.css', 'margin', '0px');
    });

    it('has correct icon', () => {
        cy.get(`${imageCard} .image-card__title .icon`).invoke('attr', 'icon-name').should('eq', 'arrow-right');
    });
})

export {}
