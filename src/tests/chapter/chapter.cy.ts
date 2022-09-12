/// <reference types="cypress" />

describe('chapter', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter');
    });

    it('has correct class and tag name', () => {
        cy.get('section').should('have.prop', 'tagName').should('eq', 'SECTION');
        cy.get('section').invoke('attr', 'class').should('eq', 'chapter');
        cy.get('section').invoke('attr', 'chapter-variant').should('exist');
    });

    it('has correct styles', () => {
        cy.get('.chapter').then((chapter) => {
            expect(chapter).to.have.css('padding-top').equal('120px');
            expect(chapter).to.have.css('padding-bottom').equal('120px');
            expect(chapter).to.have.css('margin').equal('0px');
            const chapterCS = getComputedStyle(chapter[0]);
            const chapterBgColorVar = chapterCS.getPropertyValue('--chapter-background-color');
            expect(chapterBgColorVar).to.equal(' transparent');
        });
    });
});

export {}
