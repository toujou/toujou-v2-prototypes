/// <reference types="cypress" />

const tokens = Cypress.env('tokens');

describe('blog plugin: tags [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-blog-plugin--tags');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct structure', () => {
        cy.get('.chips-list.tags-list').should('exist');
        cy.get('.chips-list.tags-list .chips-list__title').should('exist');
        cy.get('.chips-list.tags-list .chips-list__list').should('exist');
        cy.get('.chips-list.tags-list .chips-list__list').children('.chips-list__item').should('have.length', 4);
    });

    it('has correct list styles', () => {
        cy.get('.chips-list__list').should('have.css', 'list-style', 'outside none none');
        cy.get('.chips-list__list').should('have.css', 'display', 'flex');
        cy.get('.chips-list__list').should('have.css', 'flex-wrap', 'wrap');
        cy.get('.chips-list__list').should('have.css', 'gap', tokens.spacing.normal);
        cy.get('.chips-list__list').should('have.css', 'margin', '0px');
        cy.get('.chips-list__list').should('have.css', 'hyphens', 'auto');
    });
});

export {}
