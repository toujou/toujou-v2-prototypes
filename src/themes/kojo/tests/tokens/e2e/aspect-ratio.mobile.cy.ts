/// <reference types="cypress" />

const tokens = Cypress.env('tokens');

describe('Tokens - aspect-ratio [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=tokens-aspectratio--aspect-ratio');
    });

    it('has correct values for the aspect-ratio variables', () => {
        cy.get('.tokens-demo__ratio-box.ratio-auto').should('have.css', 'aspect-ratio', tokens.aspectRatio.auto);
        cy.get('.tokens-demo__ratio-box.ratio-square').should('have.css', 'aspect-ratio', tokens.aspectRatio.square);
        cy.get('.tokens-demo__ratio-box.ratio-4-3').should('have.css', 'aspect-ratio', tokens.aspectRatio.fourByThree);
        cy.get('.tokens-demo__ratio-box.ratio-golden').should('have.css', 'aspect-ratio', tokens.aspectRatio.golden);
        cy.get('.tokens-demo__ratio-box.ratio-16-9').should('have.css', 'aspect-ratio', tokens.aspectRatio.sixteenToNine);
        cy.get('.tokens-demo__ratio-box.ratio-3-1').should('have.css', 'aspect-ratio', tokens.aspectRatio.threeToOne);
    });
})

export {}
