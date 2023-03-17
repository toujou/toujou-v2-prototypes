/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

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

    it('form-progress has correct styles', () => {
        cy.get('.form-progress').should('have.css', 'display', 'flex');
        cy.get('.form-progress').should('have.css', 'flex-direction', 'column');
        cy.get('.form-progress').should('have.css', 'align-items', 'flex-start');
        cy.get('.form-progress').should('have.css', 'justify-content', 'flex-start');
        cy.get('.form-progress').should('have.css', 'gap', tokens.spacing.normal);
        cy.get('.form-progress').should('have.css', 'margin-top', '0px');
        cy.get('.form-progress').should('have.css', 'margin-bottom', '0px');
        cy.get('.form-progress').should('have.css', 'padding-top', tokens.spacing.m);
        cy.get('.form-progress').should('have.css', 'padding-bottom', tokens.spacing.m);
    });

    it('form-progress headline has correct stlyes', () => {
        cy.get('.form-progress__headline').should('have.css', 'margin-bottom', '0px');
    });

    it('form-progress-bar has correct styles', () => {
        cy.get('.form-progress-bar').should('have.css', 'display', 'flex');
        cy.get('.form-progress-bar').should('have.css', 'flex-flow', 'row nowrap');
        cy.get('.form-progress-bar').should('have.css', 'justify-content', 'center');
        cy.get('.form-progress-bar').should('have.css', 'padding', '0px');
        cy.get('.form-progress-bar').should('have.css', 'margin', '0px');
        cy.get('.form-progress-bar').should('have.css', 'list-style', 'outside none none');
        cy.get('.form-progress-bar').should('have.css', 'pointer-events', 'none');
    });

    it('form-progress items have correct styles', () => {
        cy.get('.form-progress__item').should('have.css', 'position', 'relative');
        cy.get('.form-progress__item').should('have.css', 'display', 'flex');
        cy.get('.form-progress__item').should('have.css', 'flex-flow', 'column nowrap');
        cy.get('.form-progress__item').should('have.css', 'justify-content', 'center');
        cy.get('.form-progress__item').should('have.css', 'align-items', 'center');
        cy.get('.form-progress__item').should('have.css', 'margin-right', tokens.spacing.m);

        // @ts-ignore // "FUTURE"
        cy.get('.form-progress__item:nth-child(4)').after('background-color').should('eq', `rgba(0, 0, 0, 0)`);
        // @ts-ignore
        cy.get('.form-progress__item:nth-child(4)').after('border').should('eq', `1px solid ${colors.colorFontLight}`);

        // @ts-ignore // ACTIVE
        cy.get('.form-progress__item:nth-child(3)').after('background-color').should('eq', colors.colorPrimary);
        // @ts-ignore
        cy.get('.form-progress__item:nth-child(3)').after('border').should('eq', `${tokens.border.normal} solid ${colors.colorPrimary}`);

        // @ts-ignore // COMPLeTED
        cy.get('.form-progress__item:nth-child(2)').after('background-color').should('eq', colors.colorPrimary);
        // @ts-ignore
        cy.get('.form-progress__item:nth-child(2)').after('border').should('eq', `${tokens.border.normal} solid ${colors.colorPrimary}`);
    });

    it('form-progress index have correct styles', () => {
        cy.get('.form-progress__index').should('have.css', 'width', '28px');
        cy.get('.form-progress__index').should('have.css', 'height', '28px');
        cy.get('.form-progress__index').should('have.css', 'font-size', tokens.type.size.normal);
        cy.get('.form-progress__index').should('have.css', 'line-height', tokens.type.lineHeight.m);
        cy.get('.form-progress__index').should('have.css', 'border-radius', tokens.borderRadius.circle);
        cy.get('.form-progress__index').should('have.css', 'text-align', 'center');
        cy.get('.form-progress__index').should('have.css', 'box-sizing', 'content-box');

        // completed
        cy.get('.form-progress__item[completed] .form-progress__index').should('have.css', 'border', `${tokens.border.m} solid ${colors.colorPrimary}`);
        cy.get('.form-progress__item[completed] .form-progress__index').should('have.css', 'background-color', colors.colorPrimaryO10);
        cy.get('.form-progress__item[completed] .form-progress__index').should('have.css', 'color',colors. colorPrimary);
        // active
        cy.get('.form-progress__item[active] .form-progress__index').should('have.css', 'border', `${tokens.border.m} solid ${colors.colorPrimary}`);
        cy.get('.form-progress__item[active] .form-progress__index').should('have.css', 'background-color', colors.colorPrimary);
        cy.get('.form-progress__item[active] .form-progress__index').should('have.css', 'color', colors.colorBg);
        // "future"
        cy.get('.form-progress__item:last-child .form-progress__index').should('have.css', 'border', `${tokens.border.m} solid ${colors.colorFontLight}`);
        cy.get('.form-progress__item:last-child .form-progress__index').should('have.css', 'color', colors.colorFontLight);
    });
});

export {}
