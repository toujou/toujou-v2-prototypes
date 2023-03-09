/// <reference types="cypress" />

const colors = Cypress.env('colors');

describe('blog plugin: sidebar', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blog-plugin--sidebar');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct class and tag name', () => {
        cy.get('.blog-sidebar').should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('has correct structure', () => {
        cy.get('.blog-sidebar').should('exist');
        cy.get('.blog-sidebar').children('.blog-sidebar__column').should('have.length', 5);
    });

    it('has correct styles', () => {
        cy.get('.blog-sidebar').should('have.css', 'width', '1440px');
        cy.get('.blog-sidebar').should('have.css', 'max-width', '1440px');
        cy.get('.blog-sidebar').should('have.css', 'margin', '32px 224px 0px');
        cy.get('.blog-sidebar').should('have.css', 'display', 'grid');
        cy.get('.blog-sidebar').should('have.css', 'grid-template-columns', '336px 336px 336px 288px');
        cy.get('.blog-sidebar').should('have.css', 'grid-template-areas', '"posts categories comments archive" "posts tags comments archive"');
        cy.get('.blog-sidebar').should('have.css', 'grid-gap', '48px 48px');
        cy.get('.blog-sidebar').should('have.css', 'font-family', 'Mulish, sans-serif');
        cy.get('.blog-sidebar').should('have.css', 'font-size', '16px');
        cy.get('.blog-sidebar').should('have.css', 'color', colors.colorFont);
    });

    it('has correct "Neueste Beiträge" styles', () => {
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(1)').invoke('attr', 'column-type').should('eq', 'posts');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(1)').should('have.css', 'grid-area', 'posts / posts / posts / posts');

        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(1) h5').invoke('attr', 'class').should('eq', 'blog-sidebar__title');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(1) h5').should('have.css', 'font-size', '24px');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(1) h5').should('have.css', 'font-weight', '600');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(1) h5').should('have.css', 'margin-bottom', '16px');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(1) h5').should('have.css', 'font-family', 'Ubuntu, sans-serif');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(1) h5').should('have.css', 'color', colors.colorPrimary);
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(1) h5').should('have.css', 'text-decoration', 'none solid rgb(0, 121, 168)');

        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(1) .blog-sidebar__posts').should('exist');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(1) .blog-sidebar__posts').children('.blog-sidebar__post-link').should('have.length', 3);
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(1) .blog-sidebar__posts .blog-sidebar__post-link').should('have.css', 'border-top', `1px solid ${colors.colorFontLight}`);
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(1) .blog-sidebar__posts .blog-sidebar__post-link').should('have.css', 'display', 'grid');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(1) .blog-sidebar__posts .blog-sidebar__post-link').should('have.css', 'grid-template-columns', '20px 300px');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(1) .blog-sidebar__posts .blog-sidebar__post-link').should('have.css', 'grid-gap', '16px 16px');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(1) .blog-sidebar__posts .blog-sidebar__post-link').should('have.css', 'border-bottom', `1px solid ${colors.colorFontLight}`);
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(1) .blog-sidebar__posts .blog-sidebar__post-link').should('have.css', 'padding', '16px 0px');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(1) .blog-sidebar__posts .blog-sidebar__post-link').should('have.css', 'text-decoration', 'none solid rgb(0, 121, 168)');

        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(1) .blog-sidebar__posts .blog-sidebar__post-link .icon').invoke('attr', 'icon-name').should('eq', 'arrow-right');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(1) .blog-sidebar__posts .blog-sidebar__post-link .icon').invoke('attr', 'icon-size').should('eq', 'ms');

        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(1) .blog-sidebar__posts .blog-sidebar__post-link .blog-sidebar__posts-text').should('exist');
    });

    it('has correct "Kategorien" styles', () => {
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(2)').invoke('attr', 'column-type').should('eq', 'categories');

        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(2) h5').invoke('attr', 'class').should('eq', 'blog-sidebar__title');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(2) h5').should('have.css', 'font-size', '24px');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(2) h5').should('have.css', 'font-weight', '600');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(2) h5').should('have.css', 'margin-bottom', '16px');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(2) h5').should('have.css', 'font-family', 'Ubuntu, sans-serif');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(2) h5').should('have.css', 'color', colors.colorPrimary);
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(2) h5').should('have.css', 'text-decoration', 'none solid rgb(0, 121, 168)');

        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(2) .blog-sidebar__categories').should('have.css', 'display', 'flex');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(2) .blog-sidebar__categories').should('have.css', 'flex-wrap', 'wrap');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(2) .blog-sidebar__categories').should('have.css', 'flex-direction', 'row');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(2) .blog-sidebar__categories').should('have.css', 'gap', '16px');

        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(2) .blog-sidebar__categories').children('.blog-sidebar__category-link').should('have.length', 5);

        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(2) .blog-sidebar__categories .blog-sidebar__category-link .chip').should('exist');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(2) .blog-sidebar__categories .blog-sidebar__category-link .chip').invoke('attr', 'chip-icon-position').should('eq', 'left');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(2) .blog-sidebar__categories .blog-sidebar__category-link .chip').invoke('attr', 'chip-bg-color').should('eq', 'primary-light');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(2) .blog-sidebar__categories .blog-sidebar__category-link .chip').invoke('attr', 'chip-border-radius').should('eq', 'round');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(2) .blog-sidebar__categories .blog-sidebar__category-link .chip').invoke('attr', 'chip-size').should('eq', 'normal');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(2) .blog-sidebar__categories .blog-sidebar__category-link .chip').invoke('attr', 'is-clickable').should('exist');
    });

    it('has correct "Tags" styles', () => {
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(3)').invoke('attr', 'column-type').should('eq', 'tags');

        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(3) h5').invoke('attr', 'class').should('eq', 'blog-sidebar__title');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(3) h5').should('have.css', 'font-size', '24px');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(3) h5').should('have.css', 'font-weight', '600');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(3) h5').should('have.css', 'margin-bottom', '16px');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(3) h5').should('have.css', 'font-family', 'Ubuntu, sans-serif');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(3) h5').should('have.css', 'color', colors.colorPrimary);
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(3) h5').should('have.css', 'text-decoration', 'none solid rgb(0, 121, 168)');3

        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(3) .blog-sidebar__tags').should('have.css', 'display', 'flex');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(3) .blog-sidebar__tags').should('have.css', 'flex-wrap', 'wrap');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(3) .blog-sidebar__tags').should('have.css', 'flex-direction', 'row');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(3) .blog-sidebar__tags').should('have.css', 'gap', '16px');3

        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(3) .blog-sidebar__tags').children('.blog-sidebar__tag-link').should('have.length', 5);

        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(3) .blog-sidebar__tags .blog-sidebar__tag-link .chip').should('exist');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(3) .blog-sidebar__tags .blog-sidebar__tag-link .chip').invoke('attr', 'chip-icon-position').should('eq', 'left');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(3) .blog-sidebar__tags .blog-sidebar__tag-link .chip').invoke('attr', 'chip-bg-color').should('eq', 'primary-light');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(3) .blog-sidebar__tags .blog-sidebar__tag-link .chip').invoke('attr', 'chip-border-radius').should('eq', 'round');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(3) .blog-sidebar__tags .blog-sidebar__tag-link .chip').invoke('attr', 'chip-size').should('eq', 'normal');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(3) .blog-sidebar__tags .blog-sidebar__tag-link .chip').invoke('attr', 'is-clickable').should('exist');
    });

    it('has correct "Neuesten Kommentare" styles', () => {
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(4)').invoke('attr', 'column-type').should('eq', 'comments');

        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(4)').should('have.css', 'grid-area', 'comments / comments / comments / comments');

        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(4) h5').invoke('attr', 'class').should('eq', 'blog-sidebar__title');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(4) h5').should('have.css', 'font-size', '24px');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(4) h5').should('have.css', 'font-weight', '600');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(4) h5').should('have.css', 'margin-bottom', '16px');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(4) h5').should('have.css', 'font-family', 'Ubuntu, sans-serif');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(4) h5').should('have.css', 'color', colors.colorPrimary);
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(4) h5').should('have.css', 'text-decoration', 'none solid rgb(0, 121, 168)');

        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(4) .blog-sidebar__comments .blog-sidebar__comment').should('have.css', 'display', 'grid');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(4) .blog-sidebar__comments .blog-sidebar__comment').should('have.css', 'grid-template-columns', '20px 300px');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(4) .blog-sidebar__comments .blog-sidebar__comment').should('have.css', 'grid-gap', '16px 16px');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(4) .blog-sidebar__comments .blog-sidebar__comment').should('have.css', 'padding', '16px 0px');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(4) .blog-sidebar__comments .blog-sidebar__comment').should('have.css', 'border-top', `1px solid ${colors.colorFontLight}`);
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(4) .blog-sidebar__comments .blog-sidebar__comment').should('have.css', 'border-bottom', `1px solid ${colors.colorFontLight}`);

        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(4) .blog-sidebar__comments .blog-sidebar__comment .icon').invoke('attr', 'icon-name').should('eq', 'message-bubble');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(4) .blog-sidebar__comments .blog-sidebar__comment .icon').invoke('attr', 'icon-size').should('eq', 'ms');

        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(4) .blog-sidebar__comments .blog-sidebar__comment-text').should('have.css', 'margin', '0px');

        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(4) .blog-sidebar__comments .blog-sidebar__comment-data').should('have.css', 'margin', '8px 0px 0px');
    });

    it('has correct "Archive" styles', () => {
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(5)').invoke('attr', 'column-type').should('eq', 'archive');

        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(5)').should('have.css', 'grid-area', 'archive / archive / archive / archive');

        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(5) h5').invoke('attr', 'class').should('eq', 'blog-sidebar__title');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(5) h5').should('have.css', 'font-size', '24px');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(5) h5').should('have.css', 'font-weight', '600');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(5) h5').should('have.css', 'margin-bottom', '16px');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(5) h5').should('have.css', 'font-family', 'Ubuntu, sans-serif');
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(5) h5').should('have.css', 'color', colors.colorPrimary);
        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(5) h5').should('have.css', 'text-decoration', 'none solid rgb(0, 121, 168)');

        cy.get('.blog-sidebar .blog-sidebar__column:nth-child(5) .blog-sidebar__archive-container').children('.archive-year').should('have.length', 2);
    });
});

export {}
