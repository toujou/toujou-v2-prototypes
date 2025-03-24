/// <reference types="cypress" />

// const colors = Cypress.env('colors');

describe('location finder', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-locationfinder--location-finder');
    });

    it('has correct class and tag name', () => {
        cy.get('toujou-location-finder').should('have.prop', 'tagName').should('eq', 'TOUJOU-LOCATION-FINDER');
        cy.get('toujou-location-finder').invoke('attr', 'class').should('eq', 'location-finder');
    });

    it('has correct attributes', () => {
        const teaserURL = '/placesteaser.html?details=name%2Cbranch_code%2Ctelephone%2Clogo';
        const geoJsonURL = '/placesgeo.json';
        const filterParams = '&pagetypes=34&pages=1000435&recursive=2&hmac=3e4c316ebf46da7e82bcb3c911655e561fb95f52';

        cy.get('toujou-location-finder').invoke('attr', 'bounds').should('eq', '[[7.22852, 46.321555], [11.573955, 50.898213]]');
        cy.get('toujou-location-finder').invoke('attr', 'teaserurl').should('eq', teaserURL);
        cy.get('toujou-location-finder').invoke('attr', 'geojsonurl').should('eq', geoJsonURL);
        cy.get('toujou-location-finder').invoke('attr', 'filterparams').should('eq', filterParams);
        cy.get('toujou-location-finder').invoke('attr', 'map-style').should('eq', 'mapbox://styles/mapbox/light-v10');
        cy.get('toujou-location-finder').invoke('attr', 'access-token').should('eq', 'pk.eyJ1IjoiZGZhdSIsImEiOiJjbDdyanc5aHUwZzA2M29wMmM4cjJud2IxIn0.EtfjXD2re5QUhatJJoKPYg');
    });
})

export {}
