/// <reference types="cypress" />

describe('Forms / required inputs [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-forms--required&args=isRequired:true');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('shows "*" on labels for required inputs', () => {
        // @ts-ignore
        cy.get('.input-group:first-child .input-label').after('content').should('eq', '*');
        // @ts-ignore
        cy.get('.input-group:first-child .input-label').after('margin').should('eq', '0px 0px 0px 2px');
    });
});

export {}
