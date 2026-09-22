/// <reference types="cypress" />

const tokens = Cypress.env('tokens');

describe('Tokens - animation', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=tokens-animation--animation');
    });

    it('has correct values for the animation duration variables', () => {
        cy.get('.tokens-demo__animation-box.animation-slow').should('have.css', 'animation-duration', tokens.animation.durationSlow);
        cy.get('.tokens-demo__animation-box.animation-normal').should('have.css', 'animation-duration', tokens.animation.durationNormal);
        cy.get('.tokens-demo__animation-box.animation-fast').should('have.css', 'animation-duration', tokens.animation.durationFast);
        cy.get('.tokens-demo__animation-box.animation-very-fast').should('have.css', 'animation-duration', tokens.animation.durationVeryFast);
    });

    it('has correct values for the easing variables', () => {
        cy.get('.tokens-demo__animation-box.animation-slow').should('have.css', 'animation-timing-function', tokens.animation.easingNormal);
        cy.get('.tokens-demo__animation-box.animation-normal').should('have.css', 'animation-timing-function', tokens.animation.easingNormal);
        cy.get('.tokens-demo__animation-box.animation-fast').should('have.css', 'animation-timing-function', tokens.animation.easingNormal);
        cy.get('.tokens-demo__animation-box.animation-very-fast').should('have.css', 'animation-timing-function', tokens.animation.easingNormal);
    });

})

export {}
