/// <reference types="cypress" />

const colorBg = Cypress.env('colorBg');
const colorFont = Cypress.env('colorFont');
const colorFontLight = Cypress.env('colorFontLight');
const colorPrimary = Cypress.env('colorPrimary');
const colorPrimaryO10 = Cypress.env('colorPrimaryO10');

describe('Forms / form progress', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-forms--form-progress');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct structure', () => {
        cy.get('.form-progress').should('exist');
        cy.get('.form-progress .form-progress__headline').should('exist');
        cy.get('.form-progress .form-progress-bar').should('exist');
        cy.get('.form-progress .form-progress-bar').children('.form-progress__item').should('have.length', 4);
        cy.get('.form-progress .form-progress__index').should('exist');
    });

    it('form-progress has correct structure', () => {
        cy.get('.form-progress').should('have.css', 'display', 'flex');
        cy.get('.form-progress').should('have.css', 'flex-direction', 'column');
        cy.get('.form-progress').should('have.css', 'align-items', 'flex-start');
        cy.get('.form-progress').should('have.css', 'justify-content', 'flex-start');
        cy.get('.form-progress').should('have.css', 'gap', '16px');
        cy.get('.form-progress').should('have.css', 'margin-top', '24px');
        cy.get('.form-progress').should('have.css', 'margin-bottom', '24px');
    });

    it('form-progress headline has correct structure', () => {
        cy.get('.form-progress__headline').should('have.css', 'margin-bottom', '0px');
    });

    it('form-progress-bar has correct structure', () => {
        cy.get('.form-progress-bar').should('have.css', 'display', 'flex');
        cy.get('.form-progress-bar').should('have.css', 'flex-flow', 'row nowrap');
        cy.get('.form-progress-bar').should('have.css', 'justify-content', 'center');
        cy.get('.form-progress-bar').should('have.css', 'padding', '0px');
        cy.get('.form-progress-bar').should('have.css', 'margin', '0px');
        cy.get('.form-progress-bar').should('have.css', 'list-style', 'outside none none');
        cy.get('.form-progress-bar').should('have.css', 'pointer-events', 'none');
    });

    it('form-progress items have correct structure', () => {
        cy.get('.form-progress__item').should('have.css', 'position', 'relative');
        cy.get('.form-progress__item').should('have.css', 'display', 'flex');
        cy.get('.form-progress__item').should('have.css', 'flex-flow', 'column nowrap');
        cy.get('.form-progress__item').should('have.css', 'justify-content', 'center');
        cy.get('.form-progress__item').should('have.css', 'align-items', 'center');
        cy.get('.form-progress__item').should('have.css', 'margin-right', '28px');
    });

    it('form-progress index have correct structure', () => {
        cy.get('.form-progress__index').should('have.css', 'width', '28px');
        cy.get('.form-progress__index').should('have.css', 'height', '28px');
        cy.get('.form-progress__index').should('have.css', 'font-size', '16px');
        cy.get('.form-progress__index').should('have.css', 'line-height', '28px');
        cy.get('.form-progress__index').should('have.css', 'border-radius', '50%');
        cy.get('.form-progress__index').should('have.css', 'text-align', 'center');
        cy.get('.form-progress__index').should('have.css', 'box-sizing', 'content-box');
        // completed
        cy.get('.form-progress__item[completed] .form-progress__index').should('have.css', 'border', `2px solid ${colorPrimary}`);
        cy.get('.form-progress__item[completed] .form-progress__index').should('have.css', 'background-color', colorPrimary);
        cy.get('.form-progress__item[completed] .form-progress__index').should('have.css', 'color', colorBg);
        // active
        cy.get('.form-progress__item[active] .form-progress__index').should('have.css', 'border', `2px solid ${colorPrimary}`);
        cy.get('.form-progress__item[active] .form-progress__index').should('have.css', 'background-color', colorPrimaryO10);
        cy.get('.form-progress__item[active] .form-progress__index').should('have.css', 'color', colorPrimary);
        // active
        cy.get('.form-progress__item:last-child .form-progress__index').should('have.css', 'border', `2px solid ${colorFontLight}`);
        cy.get('.form-progress__item:last-child .form-progress__index').should('have.css', 'color', colorFont);
    });
});

export {}
