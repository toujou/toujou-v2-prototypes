/// <reference types="cypress" />

const colors = Cypress.env('colors');

describe('rating-placeholder', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-mediaplaceholder--media-placeholder');
    });

    it('has correct class and tag name', () => {
        cy.get('.media-placeholder').should('have.prop', 'tagName').should('eq', 'TOUJOU-MEDIA-PLACEHOLDER');
        cy.get('.media-placeholder').invoke('attr', 'class').should('eq', 'media-placeholder');
    });

    it('has correct attributes', () => {
        cy.get('.media-placeholder').invoke('attr', 'media-type').should('eq', 'image');
    });

    it('has correct styles', () => {
        cy.get('.media-placeholder').should('have.css', 'display', 'block');
        cy.get('.media-placeholder').should('have.css', 'height', '270px');
        cy.get('.media-placeholder').should('have.css', 'width', '480px');
        cy.get('.media-placeholder').should('have.css', 'background-color', colors.colorFontLight);
        cy.get('.media-placeholder').should('have.css', 'opacity', '1');
        cy.get('.media-placeholder').should('have.css', 'position', 'relative');
        cy.get('.media-placeholder').should('have.css', 'border-radius', '4px');
        // @ts-ignore
        cy.get('.media-placeholder').after('position').should('eq', 'absolute');
        // @ts-ignore
        cy.get('.media-placeholder').after('top').should('eq', '135px');
        // @ts-ignore
        cy.get('.media-placeholder').after('left').should('eq', '240px');
        // @ts-ignore
        cy.get('.media-placeholder').after('transform').should('eq', 'matrix(1, 0, 0, 1, -32, -32)');
        // @ts-ignore
        cy.get('.media-placeholder').after('-webkit-mask-position').should('eq', '50% 50%');
        // @ts-ignore
        cy.get('.media-placeholder').after('-webkit-mask-size').should('eq', 'contain');
        // @ts-ignore
        cy.get('.media-placeholder').after('-webkit-mask-repeat').should('eq', 'no-repeat');
        // @ts-ignore
        cy.get('.media-placeholder').after('-webkit-mask-image').should('eq', 'url("http://localhost:6006/assets/icons/icon-image-circle-filled.svg")');
    });
})

describe('rating-placeholder - video', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-mediaplaceholder--media-placeholder&args=mediaType:video');
    });

    it('has correct attributes', () => {
        cy.get('.media-placeholder').invoke('attr', 'media-type').should('eq', 'video');
    });

    it('has correct styles', () => {
        // @ts-ignore
        cy.get('.media-placeholder').after('-webkit-mask-image').should('eq', 'url("http://localhost:6006/assets/icons/icon-videocam-circle-filled.svg")');
    });
})

describe('rating-placeholder - audio', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-mediaplaceholder--media-placeholder&args=mediaType:audio');
    });

    it('has correct attributes', () => {
        cy.get('.media-placeholder').invoke('attr', 'media-type').should('eq', 'audio');
    });

    it('has correct styles', () => {
        // @ts-ignore
        cy.get('.media-placeholder').after('-webkit-mask-image').should('eq', 'url("http://localhost:6006/assets/icons/icon-audiotrack-circle-filled.svg")');
    });
})

export {}
