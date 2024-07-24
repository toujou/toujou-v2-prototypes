/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('blog plugin: authors', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blog-plugin--authors');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct class and tag name', () => {
        cy.get('.post-authors').should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('has correct structure', () => {
        cy.get('.post-authors').should('have.prop', 'tagName').should('eq', 'DIV');
        cy.get('.post-authors').children('.post-author').should('have.length', 2);
        cy.get('.post-author:first-child').invoke('attr', 'itemprop').should('eq', 'author');
        cy.get('.post-author:first-child').invoke('attr', 'itemscope').should('exist');
        cy.get('.post-author:first-child').invoke('attr', 'itemtype').should('eq', 'http://schema.org/Person');

        cy.get('.post-author:first-child .post-author__figure').should('exist');
        cy.get('.post-author:first-child .post-author__avatar').should('exist');
        cy.get('.post-author:first-child .post-author__meta').should('exist');
        cy.get('.post-author:first-child .post-author__name').should('exist');
        cy.get('.post-author:first-child .post-author__info').should('exist');
        cy.get('.post-author:first-child .post-author__description').should('exist');
        cy.get('.post-author:first-child .post-author__socials').should('exist');
        cy.get('.post-author:first-child .post-author__socials').invoke('attr', 'inline').should('exist');
        cy.get('.post-author:first-child .post-author__socials').invoke('attr', 'no-headline').should('exist');
        cy.get('.post-author:first-child .post-author__socials').invoke('attr', 'no-margins').should('exist');
    });

    it('has correct styles', () => {
        cy.get('.post-authors').should('have.css', 'display', 'flex');
        cy.get('.post-authors').should('have.css', 'flex-direction', 'column');
        cy.get('.post-authors').should('have.css', 'gap', tokens.spacing.normal);
        cy.get('.post-authors').should('have.css', 'margin', '48px 464px 0px');
        cy.get('.post-authors').should('have.css', 'width', '960px');
        cy.get('.post-authors').should('have.css', 'max-width', '960px');

        cy.get('.post-author:first-child').should('have.css', 'width', '960px');
        cy.get('.post-author:first-child').should('have.css', 'background-color', colors.colorBlackO05);
        cy.get('.post-author:first-child').should('have.css', 'border-radius', tokens.borderRadius.normal);
        cy.get('.post-author:first-child').should('have.css', 'padding', tokens.spacing.m);
        cy.get('.post-author:first-child').should('have.css', 'margin', '0px');
        cy.get('.post-author:first-child').should('have.css', 'display', 'grid');
        cy.get('.post-author:first-child').should('have.css', 'grid-template-columns', `${tokens.spacing.xl} 848px`);
        cy.get('.post-author:first-child').should('have.css', 'grid-template-areas', '"avatar meta" ". description" ". socials"');
        cy.get('.post-author:first-child').should('have.css', 'grid-gap', `0px ${tokens.spacing.normal}`);

        cy.get('.post-author:first-child .post-author__figure').should('have.css', 'height', '48px');
        cy.get('.post-author:first-child .post-author__figure').should('have.css', 'width', '48px');

        cy.get('.post-author:first-child .post-author__avatar').should('have.css', 'height', '48px');
        cy.get('.post-author:first-child .post-author__avatar').should('have.css', 'width', '48px');
        cy.get('.post-author:first-child .post-author__avatar').should('have.css', 'border-radius', tokens.borderRadius.circle);
        cy.get('.post-author:first-child .post-author__avatar').should('have.css', 'object-fit', 'cover');

        cy.get('.post-author:first-child .post-author__meta').should('have.css', 'font-family', tokens.type.fontFamily.text);
        cy.get('.post-author:first-child .post-author__meta').should('have.css', 'font-size', tokens.type.size.normal);
        cy.get('.post-author:first-child .post-author__meta').should('have.css', 'color', colors.colorFont);
        cy.get('.post-author:first-child .post-author__meta').should('have.css', 'align-self', 'center');
        cy.get('.post-author:first-child .post-author__meta').should('have.css', 'flex-wrap', 'wrap');
        cy.get('.post-author:first-child .post-author__meta').should('have.css', 'gap', `${tokens.spacing.xxs} ${tokens.spacing.s}`);
        cy.get('.post-author:first-child .post-author__meta').should('have.css', 'grid-area', 'meta');

        cy.get('.post-author:first-child .post-author__name').should('have.css', 'font-family', tokens.type.fontFamily.text);
        cy.get('.post-author:first-child .post-author__name').should('have.css', 'font-size', tokens.type.size.normal);
        cy.get('.post-author:first-child .post-author__name').should('have.css', 'font-weight', tokens.type.fontWeight.bold);
        cy.get('.post-author:first-child .post-author__name').should('have.css', 'color', colors.colorFont);

        cy.get('.post-author:first-child .post-author__info').should('have.css', 'font-family', tokens.type.fontFamily.text);
        cy.get('.post-author:first-child .post-author__info').should('have.css', 'font-size', tokens.type.size.normal);
        cy.get('.post-author:first-child .post-author__info').should('have.css', 'color', colors.colorFont);

        cy.get('.post-author:first-child .post-author__description').should('have.css', 'grid-area', 'description');
    });
})

describe('blog plugin: authors - no avatar', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blog-plugin--authors&args=hasAvatar:false');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct structure', () => {
        cy.get('.post-author:first-child .post-author__figure').should('not.exist');
    });

    it('has correct styles', () => {
        cy.get('.post-author:first-child').should('have.css', 'grid-template-columns', '912px');
        cy.get('.post-author:first-child').should('have.css', 'grid-template-areas', '"meta" "description" "socials"');
    });
});

export {}
