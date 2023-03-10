/// <reference types="cypress" />

describe('blog plugin: categories', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-blog-plugin--categories');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct structure', () => {
        cy.get('.chips-list.categories-list').should('exist');
        cy.get('.chips-list.categories-list .chips-list__title').should('exist');
        cy.get('.chips-list.categories-list .chips-list__list').should('exist');
        cy.get('.chips-list.categories-list .chips-list__list').children('.chips-list__item').should('have.length', 4);
    });

    it('has correct list styles', () => {
        cy.get('.chips-list__list').should('have.css', 'list-style', 'outside none none');
        cy.get('.chips-list__list').should('have.css', 'display', 'flex');
        cy.get('.chips-list__list').should('have.css', 'flex-wrap', 'wrap');
        cy.get('.chips-list__list').should('have.css', 'gap', '16px');
        cy.get('.chips-list__list').should('have.css', 'margin', '0px');
        cy.get('.chips-list__list').should('have.css', 'hyphens', 'auto');
    });
});

export {}
