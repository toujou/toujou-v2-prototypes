/// <reference types="cypress" />

const tokens = Cypress.env('tokens');

describe('Tokens - z-index [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=tokens-zindex--z-index');
    });

    it('has correct values for the z-index variables', () => {
        cy.contains('--z-index-content').should('have.css', 'z-index', tokens.zIndex.content);
        cy.contains('--z-index-pn-nav').should('have.css', 'z-index', tokens.zIndex.pnNav);
        cy.contains('--z-index-top-button').should('have.css', 'z-index', tokens.zIndex.topButton);
        cy.contains('--z-index-spinner').should('have.css', 'z-index', tokens.zIndex.spinner);
        cy.contains('--z-index-inpage-nav').should('have.css', 'z-index', tokens.zIndex.inpageNav);
        cy.contains('--z-index-sticky-nav').should('have.css', 'z-index', tokens.zIndex.stickyNav);
        cy.contains('--z-index-topbar').should('have.css', 'z-index', tokens.zIndex.topbar);
        cy.contains('--z-index-nav').should('have.css', 'z-index', tokens.zIndex.nav);
        cy.contains('--z-index-notifications').should('have.css', 'z-index', tokens.zIndex.notifications);
        cy.contains('--z-index-backdrop').should('have.css', 'z-index', tokens.zIndex.backdrop);
        cy.contains('--z-index-contact-box').should('have.css', 'z-index', tokens.zIndex.contactBox);
        cy.contains('--z-index-modal').should('have.css', 'z-index', tokens.zIndex.modal);
        cy.contains('--z-index-consent').should('have.css', 'z-index', tokens.zIndex.consent);
        cy.contains('--z-index-overlay').should('have.css', 'z-index', tokens.zIndex.overlay);
        cy.contains('--z-index-important').should('have.css', 'z-index', tokens.zIndex.important);
    });
})

export {}
