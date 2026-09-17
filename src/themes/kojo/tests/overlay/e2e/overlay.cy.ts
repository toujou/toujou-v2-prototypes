/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens  = Cypress.env('tokens');

describe('overlay', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-overlay--overlay');
    });

    it('has correct attributes', () => {
        cy.get('toujou-overlay').should('have.prop', 'tagName').should('eq', 'TOUJOU-OVERLAY');
        cy.get('toujou-overlay').invoke('attr', 'class').should('eq', 'overlay');
        cy.get('toujou-overlay').invoke('attr', 'overlay-theme').should('eq', 'light');
        cy.get('toujou-overlay').invoke('attr', 'state').should('eq', 'open');
    });

    it('has correct structure', () => {
        cy.get('.overlay').should('exist');
        cy.get('.overlay .overlay__infos').should('exist');
        cy.get('.overlay .overlay__infos .overlay__title').should('exist');
        cy.get('.overlay .overlay__infos .overlay__warning').should('exist');
        cy.get('.overlay .overlay__infos .overlay__buttons').should('exist');
    });

    it('has correct styles', () => {
        cy.get('.overlay').should('have.css', 'background-color', colors.colorBlackO75);
        cy.get('.overlay').should('have.css', 'position', 'fixed');
        cy.get('.overlay').should('have.css', 'top', '0px');
        cy.get('.overlay').should('have.css', 'left', '0px');
        cy.get('.overlay').should('have.css', 'height', '1080px');
        cy.get('.overlay').should('have.css', 'width', '1920px');
        cy.get('.overlay').should('have.css', 'align-items', 'center');
        cy.get('.overlay').should('have.css', 'justify-content', 'center');
        cy.get('.overlay').should('have.css', 'z-index', tokens.zIndex.important);

        cy.get('.overlay .overlay__infos').should('have.css', 'position', 'relative');
        cy.get('.overlay .overlay__infos').should('have.css', 'display', 'flex');
        cy.get('.overlay .overlay__infos').should('have.css', 'flex-direction', 'column');
        cy.get('.overlay .overlay__infos').should('have.css', 'align-items', 'center');
        cy.get('.overlay .overlay__infos').should('have.css', 'justify-content', 'center');
        cy.get('.overlay .overlay__infos').should('have.css', 'gap', tokens.spacing.l);
        cy.get('.overlay .overlay__infos').should('have.css', 'padding', tokens.spacing.l);
        cy.get('.overlay .overlay__infos').should('have.css', 'box-shadow', tokens.shadow.normal);
        cy.get('.overlay .overlay__infos').should('have.css', 'border-radius', tokens.borderRadius.normal);
        cy.get('.overlay .overlay__infos').should('have.css', 'background-color', colors.colorBg);
        cy.get('.overlay .overlay__infos').should('have.css', 'max-width', 'min(100% - 48px, 640px)');

        cy.get('.overlay .overlay__title').should('have.css', 'margin', '0px');

        cy.get('.overlay .overlay__warning').should('have.css', 'display', 'none');
        cy.get('.overlay .overlay__warning').should('have.css', 'color', colors.colorWarning);

        cy.get('.overlay .overlay__buttons').should('have.css', 'display', 'flex');
        cy.get('.overlay .overlay__buttons').should('have.css', 'align-items', 'center');
        cy.get('.overlay .overlay__buttons').should('have.css', 'justify-content', 'center');
        cy.get('.overlay .overlay__buttons').should('have.css', 'flex-flow', 'row wrap');
        cy.get('.overlay .overlay__buttons').should('have.css', 'gap', tokens.spacing.normal);
    });
})

describe('overlay dismiss', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-overlay--overlay');
    });

    it('can be dismissed', () => {
        cy.get('toujou-overlay').invoke('attr', 'state').should('eq', 'open');
        cy.contains('Ja, ich bin 18 Jahre oder älter').click();
        cy.get('toujou-overlay').invoke('attr', 'state').should('eq', 'closed');
    });
})

describe('overlay warning', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-overlay--overlay');
    });

    it('can show warning', () => {
        cy.get('toujou-overlay').invoke('attr', 'state').should('eq', 'open');
        cy.contains('Nein, ich bin unter 18 Jahre alt').click();
        cy.get('toujou-overlay').invoke('attr', 'state').should('eq', 'open');
        cy.get('.overlay .overlay__warning').should('have.css', 'display', 'block');
    });
})

describe('overlay theme dark', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-overlay--overlay&args=overlayTheme:dark');
    });

    it('has correct dark theme styles', () => {
        cy.get('.overlay').should('have.css', 'background-color', colors.colorBlackO75);

    });
})

export {}
