/// <reference types="cypress" />

// const desktopViewportHeight = Cypress.env('desktopViewportHeight');
// const desktopViewportWidth = Cypress.env('desktopViewportWidth');
//
// const colors = Cypress.env('colors');

describe('header with video [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-header--header-video');
    });

    it('has correct default attributes', () => {
        cy.get('.header').should('exist');
        cy.get('.header').invoke('prop', 'tagName').should('eq', 'HEADER');
        cy.get('.header').invoke('attr', 'class').should('eq', 'header');
        cy.get('.header').invoke('attr', 'image-height').should('eq', 'default');
    });

    it('Video has correct attributes', () => {
        cy.get('.header .video').invoke('attr', 'playsinline').should('exist');
        cy.get('.header .video').invoke('attr', 'poster').should('exist');
        cy.get('.header .video').invoke('attr', 'loop').should('exist');
        cy.get('.header .video').invoke('attr', 'controls').should('exist');
    });

    it('Video has correct styles', () => {
        cy.get('.header').should('have.css', 'width', '375px');
        cy.get('.header').should('have.css', 'height', '533.59375px');
        cy.get('.header .video').should('have.css', 'width', '375px');
        cy.get('.header .video').should('have.css', 'height', '533.59375px');
        cy.get('.header .video').should('have.css', 'position', 'absolute');
        cy.get('.header .video').should('have.css', 'top', '0px');
        cy.get('.header .video').should('have.css', 'left', '0px');
        cy.get('.header .video').should('have.css', 'object-fit', 'cover');
        cy.get('.header .video').should('have.css', 'vertical-align', 'middle');
    });

    it('can play video', () => {
        cy.get('.header .video')
            .should('have.prop', 'paused', true)
            .and('have.prop', 'ended', false)
            .then(($video) => {
                // @ts-ignore
                $video[0].play()
            });

        cy.get('video')
            .should('have.prop', 'paused', false)
            .and('have.prop', 'ended', false)
            .then(($video) => {
                $video[0].pause()
            });

        cy.get('.header .video')
            .should('have.prop', 'paused', true)
            .and('have.prop', 'ended', false)
    });
});

export {}
