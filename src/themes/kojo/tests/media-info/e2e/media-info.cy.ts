/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('media-info', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-media--media-grid');
    });

    it('has correct structure', () => {
        cy.get(`.media-info`).then((mediaInfo) => {
            expect(mediaInfo).to.have.prop('tagName').equal('TOUJOU-MEDIA-INFO');
            expect(mediaInfo).to.have.attr('class').equal('media-info');
            expect('.media-info .media-info__toggle[slot="open-button"]').to.exist;
            expect('.media-info .media-info__toggle[slot="close-button"]').to.exist;
            expect('.media-info .media-info__figcaption').to.exist;
            expect('.media-info .media-info__copyright').to.exist;
        })
    });

    it('can toggle visibility on click', () => {
        cy.get('.single-media:first-child .media-info').should('not.have.attr', 'open');
        cy.get('.single-media:first-child .media-info__toggle[slot="close-button"]').should('have.css', 'display', 'flex');
        cy.get('.single-media:first-child .media-info__toggle[slot="close-button"]').should('not.be.visible');
        cy.get('.single-media:first-child .media-info__toggle[slot="open-button"]').should('have.css', 'display', 'flex');
        cy.get('.single-media:first-child .media-info__toggle[slot="open-button"]').should('be.visible');
        cy.get('.single-media:first-child .media-info__figcaption').should('have.css', 'display', 'none');
        cy.get('.single-media:first-child .media-info__copyright').should('have.css', 'display', 'none');

        cy.get('.single-media:first-child .media-info__toggle[slot="open-button"]').click();

        cy.get('.single-media:first-child .media-info').should('have.attr', 'open');
        cy.get('.single-media:first-child .media-info__toggle[slot="close-button"]').should('be.visible');
        cy.get('.single-media:first-child .media-info__toggle[slot="open-button"]').should('not.be.visible');
        cy.get('.single-media:first-child .media-info__figcaption').should('have.css', 'display', 'block');
        cy.get('.single-media:first-child .media-info__copyright').should('have.css', 'display', 'block');

        cy.get('.single-media:first-child .media-info__toggle[slot="close-button"]').click();

        cy.get('.single-media:first-child .media-info').should('not.have.attr', 'open');
        cy.get('.single-media:first-child .media-info__toggle[slot="close-button"]').should('not.be.visible');
        cy.get('.single-media:first-child .media-info__toggle[slot="open-button"]').should('be.visible');
        cy.get('.single-media:first-child .media-info__figcaption').should('have.css', 'display', 'none');
        cy.get('.single-media:first-child .media-info__copyright').should('have.css', 'display', 'none');
    });

    it('has correct styles', () => {
        cy.get('.single-media:first-child .media-info__toggle[slot="open-button"]').click();

        cy.get('.single-media:first-child .media-info__figcaption').should('have.css', 'display', 'block');
        cy.get('.single-media:first-child .media-info__figcaption').should('have.css', 'color', colors.colorBg);
        cy.get('.single-media:first-child .media-info__figcaption').should('have.css', 'font-family', tokens.type.fontFamily.text);
        cy.get('.single-media:first-child .media-info__figcaption').should('have.css', 'font-size', tokens.type.size.s);
        cy.get('.single-media:first-child .media-info__figcaption').should('have.css', 'flex-grow', '1');
        cy.get('.single-media:first-child .media-info__copyright').should('have.css', 'display', 'block');
        cy.get('.single-media:first-child .media-info__copyright').should('have.css', 'color', colors.colorBg);
        cy.get('.single-media:first-child .media-info__copyright').should('have.css', 'font-family', tokens.type.fontFamily.text);
        cy.get('.single-media:first-child .media-info__copyright').should('have.css', 'font-size', tokens.type.size.s);
        cy.get('.single-media:first-child .media-info__copyright').should('have.css', 'flex-grow', '0');
        cy.get('.single-media:first-child .media-info__toggle[slot="open-button"]').should('have.css', 'background-color', colors.colorTransparent);
        cy.get('.single-media:first-child .media-info__toggle[slot="close-button"]').should('have.css', 'background-color', colors.colorTransparent);
    });
});

export {}
