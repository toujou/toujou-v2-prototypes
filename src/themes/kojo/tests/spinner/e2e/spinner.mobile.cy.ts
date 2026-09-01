/// <reference types="cypress" />

describe('toujou-spinner [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-spinner--spinner');
    });

    it('has correct structure', () => {
        cy.get('toujou-spinner').invoke('attr', 'class').should('eq', 'spinner');
        cy.get('toujou-spinner').invoke('prop', 'tagName').should('eq', 'TOUJOU-SPINNER');
        cy.get('toujou-spinner').shadow().find('.toujou-spinner__svg').should('exist');
        cy.get('toujou-spinner').shadow().find('.toujou-spinner__circle').should('exist');
    });

    it('has correct styles', () => {
        cy.get('.spinner').then((spinner) => {
            expect(spinner).to.have.css('display').eq('inline-flex');
            expect(spinner).to.have.css('height').eq('80px');
            expect(spinner).to.have.css('width').eq('80px');
            expect(spinner).to.have.css('align-items').eq('center');
            expect(spinner).to.have.css('justify-content').eq('center');
            expect(spinner).to.have.css('top').eq('0px');
            expect(spinner).to.have.css('left').eq('0px');
            expect(spinner).to.have.css('z-index').eq('auto');
        });

        cy.get('.spinner').shadow().find('.toujou-spinner__svg').then((spinnerSVG) => {
            expect(spinnerSVG).to.have.css('transform-origin').eq('40px 40px');
            expect(spinnerSVG).to.have.css('position').eq('absolute');
            expect(spinnerSVG).to.have.css('inset').eq('0px');
            expect(spinnerSVG).to.have.css('animation').eq('2s linear 0s infinite normal none running rotationAnimation');
        });

        cy.get('.spinner').shadow().find('.toujou-spinner__circle').then((spinnerCircle) => {
            expect(spinnerCircle).to.have.css('stroke-linecap').eq('round');
            expect(spinnerCircle).to.have.css('stroke-width').eq('4px');
            expect(spinnerCircle).to.have.css('fill').eq('none');
        });
    });
});

describe('toujou-spinner centered-on-page [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-spinner--spinner&args=isCenteredOnPage:true');
    });

    it('has correct structure', () => {
        cy.get('toujou-spinner').invoke('attr', 'centered-on-page').should('exist');
    });

    it('has correct styles', () => {
        cy.get('.spinner').then((spinner) => {
            expect(spinner).to.have.css('z-index').eq('100');
            expect(spinner).to.have.css('position').eq('fixed');
        });
    });
});

export {}
