/// <reference types="cypress" />
/// <reference types="cypress-real-events" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('PN Nav [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-p-n-nav--pn-nav');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct class and tag name', () => {
        cy.get('.pn-nav').should('have.prop', 'tagName').should('eq', 'TOUJOU-PN-NAV');
        cy.get('.pn-nav').invoke('attr', 'aria-label').should('eq', 'Page navigation buttons');
    });

    it('has correct structure', () => {
        cy.get('.pn-nav').should('exist');
        cy.get('.pn-nav').children('.pn-nav__link').should('have.length', 2);
        cy.get('.pn-nav .pn-nav__link .pn-nav__button').should('exist');
        cy.get('.pn-nav .pn-nav__link .pn-nav__button .icon').should('exist');
        cy.get('.pn-nav .pn-nav__link .pn-nav__content .pn-nav__title').should('exist');
        cy.get('.pn-nav .pn-nav__link .pn-nav__content .pn-nav__image').should('exist');
    });

    it('has correct styles', () => {
        cy.get('.pn-nav').should('have.css', 'position', 'fixed');
        cy.get('.pn-nav').should('have.css', 'top', '333.5px');
        cy.get('.pn-nav').should('have.css', 'left', '0px');
        cy.get('.pn-nav').should('have.css', 'width', '360px');
        cy.get('.pn-nav').should('have.css', 'height', '96px');
        cy.get('.pn-nav').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, -48)');
        cy.get('.pn-nav').should('have.css', 'z-index', tokens.zIndex.pnNav);

        cy.get('.pn-nav .pn-nav__link[button-direction="prev"]').should('have.css', 'position', 'absolute');
        cy.get('.pn-nav .pn-nav__link[button-direction="prev"]').should('have.css', 'text-decoration', `none solid ${colors.colorPrimary}`);
        cy.get('.pn-nav .pn-nav__link[button-direction="prev"]').should('have.css', 'height', '96px');
        cy.get('.pn-nav .pn-nav__link[button-direction="prev"]').should('have.css', 'display', 'flex');
        cy.get('.pn-nav .pn-nav__link[button-direction="prev"]').should('have.css', 'flex-direction', 'row-reverse');
        cy.get('.pn-nav .pn-nav__link[button-direction="prev"]').should('have.css', 'left', '-4px');

        cy.get('.pn-nav .pn-nav__link[button-direction="next"]').should('have.css', 'flex-direction', 'row');
        cy.get('.pn-nav .pn-nav__link[button-direction="next"]').should('have.css', 'right', '-4px');

        cy.get('.pn-nav .pn-nav__link[button-direction="next"] .pn-nav__button').should('have.css', 'background-color', colors.colorPrimary);
        cy.get('.pn-nav .pn-nav__link[button-direction="next"] .pn-nav__button').should('have.css', 'height', '96px');
        cy.get('.pn-nav .pn-nav__link[button-direction="next"] .pn-nav__button').should('have.css', 'width', '48px');
        cy.get('.pn-nav .pn-nav__link[button-direction="next"] .pn-nav__button').should('have.css', 'display', 'flex');
        cy.get('.pn-nav .pn-nav__link[button-direction="next"] .pn-nav__button').should('have.css', 'align-items', 'center');
        cy.get('.pn-nav .pn-nav__link[button-direction="next"] .pn-nav__button').should('have.css', 'justify-content', 'center');
        cy.get('.pn-nav .pn-nav__link[button-direction="next"] .pn-nav__button').should('have.css', 'border-radius', `${tokens.borderRadius.xxxxl} 0px 0px ${tokens.borderRadius.xxxxl}`);
        cy.get('.pn-nav .pn-nav__link[button-direction="next"] .pn-nav__button').should('have.css', 'z-index', tokens.zIndex.content);

        cy.get('.pn-nav .pn-nav__link[button-direction="next"] .pn-nav__content').should('have.css', 'display', 'flex');
        cy.get('.pn-nav .pn-nav__link[button-direction="next"] .pn-nav__content').should('have.css', 'align-items', 'center');
        cy.get('.pn-nav .pn-nav__link[button-direction="next"] .pn-nav__content').should('have.css', 'justify-content', 'center');
        cy.get('.pn-nav .pn-nav__link[button-direction="next"] .pn-nav__content').should('have.css', 'gap', tokens.spacing.normal);
        cy.get('.pn-nav .pn-nav__link[button-direction="next"] .pn-nav__content').should('have.css', 'flex-direction', 'row-reverse');
        cy.get('.pn-nav .pn-nav__link[button-direction="next"] .pn-nav__content').should('have.css', 'position', 'absolute');
        cy.get('.pn-nav .pn-nav__link[button-direction="next"] .pn-nav__content').should('have.css', 'top', '0px');
        cy.get('.pn-nav .pn-nav__link[button-direction="next"] .pn-nav__content').should('have.css', 'left', '-227.188px');
        cy.get('.pn-nav .pn-nav__link[button-direction="next"] .pn-nav__content').should('have.css', 'right', '48px');
        cy.get('.pn-nav .pn-nav__link[button-direction="next"] .pn-nav__content').should('have.css', 'width', '227.1875px');
        cy.get('.pn-nav .pn-nav__link[button-direction="next"] .pn-nav__content').should('have.css', 'height', '96px');
        cy.get('.pn-nav .pn-nav__link[button-direction="next"] .pn-nav__content').should('have.css', 'background-color', colors.colorPrimary);
        cy.get('.pn-nav .pn-nav__link[button-direction="next"] .pn-nav__content').should('have.css', 'padding', `${tokens.spacing.s} ${tokens.spacing.xl} ${tokens.spacing.s} ${tokens.spacing.s}`);
        cy.get('.pn-nav .pn-nav__link[button-direction="next"] .pn-nav__content').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 275, 0)');
        cy.get('.pn-nav .pn-nav__link[button-direction="next"] .pn-nav__content').should('have.css', 'transition', 'transform 0.5s ease-in-out 0s, background-color 0.5s ease-in-out 0s');

        cy.get('.pn-nav .pn-nav__link[button-direction="next"] .pn-nav__title').should('have.css', 'color', colors.colorPrimaryDark);
        cy.get('.pn-nav .pn-nav__link[button-direction="next"] .pn-nav__title').should('have.css', 'font-family', tokens.type.fontFamily.headline);
        cy.get('.pn-nav .pn-nav__link[button-direction="next"] .pn-nav__title').should('have.css', 'font-size', tokens.type.size.normal);
        cy.get('.pn-nav .pn-nav__link[button-direction="next"] .pn-nav__title').should('have.css', 'margin', '0px');

        cy.get('.pn-nav .pn-nav__link[button-direction="next"] .pn-nav__image').should('have.css', 'height', '80px');
        cy.get('.pn-nav .pn-nav__link[button-direction="next"] .pn-nav__image').should('have.css', 'width', '80px');
        cy.get('.pn-nav .pn-nav__link[button-direction="next"] .pn-nav__image').should('have.css', 'border-radius', tokens.borderRadius.circle);
        cy.get('.pn-nav .pn-nav__link[button-direction="next"] .pn-nav__image').should('have.css', 'object-fit', 'cover');
    });

    it('has correct hover styles', () => {
        cy.get('.pn-nav .pn-nav__link[button-direction="prev"]').realHover();
        cy.wait(300)
        cy.get('.pn-nav .pn-nav__link[button-direction="prev"] .pn-nav__content').should('have.css', 'transform', 'matrix(1, 0, 0, 1, -48, 0)');
        cy.get('.pn-nav .pn-nav__link[button-direction="prev"] .pn-nav__content').should('have.css', 'background-color', colors.colorPrimaryLight);
    });
})

export {}
