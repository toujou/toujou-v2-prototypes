/// <reference types="cypress" />

describe('card-collection', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-collectioncards--card-default');
    });

    it('exists', () => {
        cy.get('.card-collection').should('exist');
        cy.get('.card-collection').should('have.prop', 'tagName').should('eq', 'UL');
    });

    it('has correct styles', () => {
        cy.get('.card-collection').then((collection) => {
            expect(collection).to.have.css('display').equal('flex');
            expect(collection).to.have.css('flex-wrap').equal('wrap');
            expect(collection).to.have.css('align-items').equal('center');
            expect(collection).to.have.css('justify-content').equal('center');
            expect(collection).to.have.css('margin-top').equal('0px');
            expect(collection).to.have.css('margin-bottom').equal('0px');
            expect(collection).to.have.css('list-style').equal('outside none none');
            expect(collection).to.have.css('padding').equal('0px');
            expect(collection).to.have.css('z-index').equal('1');
        });
    });
});

export {}
