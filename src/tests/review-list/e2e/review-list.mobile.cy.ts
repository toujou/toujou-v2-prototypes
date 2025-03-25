/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('review-list [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-review-list--review-list');
    });

    it('has correct class and tag name', () => {
        cy.get('.reviews').should('have.prop', 'tagName').should('eq', 'DIV');
        cy.get('.reviews .review').should('have.prop', 'tagName').should('eq', 'ARTICLE');
    });

    it('has correct structure', () => {
        cy.get('.reviews').should('exist')
        cy.get('.reviews').children('.review').should('have.length', 8);
        cy.get('.review:first-child .review__header').should('exist');
        cy.get('.review:first-child .review__header .review__title').should('exist');
        cy.get('.review:first-child .review__header .review__infos').should('exist');
        cy.get('.review:first-child .review__header .review__infos .review__info--name').should('exist');
        cy.get('.review:first-child .review__header .review__infos .review__info--name .review__info-label').should('exist');
        cy.get('.review:first-child .review__header .review__infos .review__info--date').should('exist');
        cy.get('.review:first-child .review__header .review__infos .review__info--date .review__info-label').should('exist');
        cy.get('.review:first-child .review__header .review__infos .review__info--link').should('exist');
        cy.get('.review:first-child .review__header .review__infos .review__info--link .review__info-label').should('exist');
        cy.get('.review:first-child .review__header .review__rating').should('exist');
        cy.get('.review:first-child .review__header .review__rating .rating-stars').should('exist');
        cy.get('.review:first-child .review__content').should('exist');
        cy.get('.review:first-child .review__content .review__figure').should('exist');
        cy.get('.review:first-child .review__content .review__figure .review__image').should('exist');
        cy.get('.review:first-child .review__content toujou-clamped-content').should('exist');
        cy.get('.review:first-child .review__content toujou-clamped-content .review__review').should('exist');
        cy.get('.review:first-child .review__content toujou-clamped-content .button[slot="show-button"]').should('exist');
        cy.get('.review:first-child .review__content toujou-clamped-content .button[slot="hide-button"]').should('exist');
        cy.get('.review:first-child .review__footer').should('exist');
        cy.get('.review:first-child .review__footer .review__footer-title').should('exist');
        cy.get('.review:first-child .review__footer .review__comment').should('exist');
    });

    it('has correct styles', () => {
        cy.get('.reviews').should('have.css', 'margin', '32px 16px 0px');
        cy.get('.reviews').should('have.css', 'width', '296px');
        cy.get('.reviews').should('have.css', 'max-width', '960px');

        cy.get('.review:first-child').should('have.css', 'border-top', `${tokens.border.normal} solid ${colors.colorFontLight}`);
        cy.get('.review:first-child').should('have.css', 'border-bottom', `${tokens.border.normal} solid ${colors.colorFontLight}`);
        cy.get('.review:first-child').should('have.css', 'padding', `${tokens.spacing.m} 0px`);

        cy.get('.review:first-child .review__header').should('have.css', 'display', 'flex');
        cy.get('.review:first-child .review__header').should('have.css', 'flex-direction', 'column');
        cy.get('.review:first-child .review__header').should('have.css', 'align-items', 'flex-start');
        cy.get('.review:first-child .review__header').should('have.css', 'justify-content', 'center');
        cy.get('.review:first-child .review__header').should('have.css', 'gap', '16px');
        cy.get('.review:first-child .review__header').should('have.css', 'width', '296px');

        cy.get('.review:first-child .review__title').should('have.css', 'font-family', 'Ubuntu, sans-serif');
        cy.get('.review:first-child .review__title').should('have.css', 'font-size', '32px');
        cy.get('.review:first-child .review__title').should('have.css', 'color', colors.colorPrimary);
        cy.get('.review:first-child .review__title').should('have.css', 'margin', '0px');

        cy.get('.review:first-child .review__infos').should('have.css', 'display', 'flex');
        cy.get('.review:first-child .review__infos').should('have.css', 'flex-direction', 'row');
        cy.get('.review:first-child .review__infos').should('have.css', 'align-items', 'center');
        cy.get('.review:first-child .review__infos').should('have.css', 'justify-content', 'flex-start');
        cy.get('.review:first-child .review__infos').should('have.css', 'gap', '8px 16px');
        cy.get('.review:first-child .review__infos').should('have.css', 'width', '296px');

        cy.get('.review:first-child .review__info').should('have.css', 'margin', '0px');
        cy.get('.review:first-child .review__info').should('have.css', 'font-family', 'Mulish, sans-serif');
        cy.get('.review:first-child .review__info').should('have.css', 'font-size', '16px');
        cy.get('.review:first-child .review__info').should('have.css', 'color', colors.colorFont);

        cy.get('.review:first-child .review__info-label').should('have.css', 'font-weight', '800');

        cy.get('.review:first-child .review__content').should('have.css', 'margin-top', '16px');
        cy.get('.review:first-child .review__content').should('have.css', 'display', 'grid');
        cy.get('.review:first-child .review__content').should('have.css', 'grid-template-columns', '296px');
        cy.get('.review:first-child .review__content').should('have.css', 'gap', '32px');

        cy.get('.review:first-child .review__figure').should('have.css', 'width', '296px');
        cy.get('.review:first-child .review__figure').should('have.css', 'border-radius', '4px');
        cy.get('.review:first-child .review__figure').should('have.css', 'overflow', 'hidden');

        cy.get('.review:first-child .review__image').should('have.css', 'height', '182.9375px');
        cy.get('.review:first-child .review__image').should('have.css', 'width', '296px');
        cy.get('.review:first-child .review__image').should('have.css', 'aspect-ratio', '1.618 / 1');
        cy.get('.review:first-child .review__image').should('have.css', 'object-fit', 'cover');

        cy.get('.review:first-child .review__footer').should('have.css', 'color', colors.colorPrimary);
        cy.get('.review:first-child .review__footer').should('have.css', 'padding', '24px');
        cy.get('.review:first-child .review__footer').should('have.css', 'background-color', colors.colorPrimaryO10);
        cy.get('.review:first-child .review__footer').should('have.css', 'margin', '24px 0px 0px');

        cy.get('.review:first-child .review__footer-title').should('have.css', 'font-family', 'Mulish, sans-serif');
        cy.get('.review:first-child .review__footer-title').should('have.css', 'font-size', '16px');
        cy.get('.review:first-child .review__footer-title').should('have.css', 'font-weight', '800');
        cy.get('.review:first-child .review__footer-title').should('have.css', 'color', colors.colorFont);
        cy.get('.review:first-child .review__footer-title').should('have.css', 'margin', '0px 0px 8px');
    });

    it('can open and close the clamped content', () => {
        cy.get('.review:first-child').should('have.css', 'height', '823.4375px');
        cy.get('.review:first-child .review__content toujou-clamped-content .button[slot="show-button"]').click({ multiple: true });
        cy.get('.review:first-child').should('have.css', 'height', '1039.4375px');
        cy.get('.review:first-child .review__content toujou-clamped-content .button[slot="hide-button"]').click({ multiple: true });
        cy.get('.review:first-child').should('have.css', 'height', '823.4375px');
        cy.get('.review:first-child .review__content toujou-clamped-content .button[slot="show-button"]').click({ multiple: true });
        cy.get('.review:first-child').should('have.css', 'height', '1039.4375px');
        cy.get('.review:first-child .review__content toujou-clamped-content .button[slot="hide-button"]').click({ multiple: true });
        cy.get('.review:first-child').should('have.css', 'height', '823.4375px');
    })

    it('has correct "no media" styles', () => {
        cy.get('.review:nth-child(2)').invoke('attr', 'no-media').should('exist');
        cy.get('.review:nth-child(2) .review__content').should('have.css', 'grid-template-columns', '296px');
    })
})

export {}
