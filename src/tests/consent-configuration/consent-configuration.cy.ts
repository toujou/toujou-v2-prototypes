/// <reference types="cypress" />

const colorFont = Cypress.env('colorFont');
const colorFontLight = Cypress.env('colorFontLight');
const colorWarning = Cypress.env('colorWarning');
const colorBg = Cypress.env('colorBg');

describe('consent configuration', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-consent--consent-configuration');
    });

    it('has correct class', () => {
        cy.get('toujou-consent-widget').invoke('attr', 'class').should('eq', 'consent-widget');
        cy.get('toujou-consent-widget').should('have.prop', 'tagName').should('eq', 'TOUJOU-CONSENT-WIDGET');
        cy.get('toujou-consent-widget').invoke('attr', 'in-page').should('exist');
        cy.get('toujou-consent-widget').invoke('attr', 'warningvisible').should('eq', 'false');
        cy.get('toujou-consent-widget').invoke('attr', 'listento').should('eq', 'click');
        cy.get('toujou-consent-widget').invoke('attr', 'listenon').should('eq', '#consentSaveButton,#consentAcceptAllButton');
    });

    it('has correct correct styles', () => {
        cy.get('.consent-widget').then((consentWidget) => {
            expect(consentWidget).to.have.css('position').equal('relative');
            expect(consentWidget).to.have.css('bottom').equal('0px');
            expect(consentWidget).to.have.css('left').equal('0px');
            expect(consentWidget).to.have.css('margin-top').equal('0px');
            expect(consentWidget).to.have.css('margin-bottom').equal('0px');
            expect(consentWidget).to.have.css('z-index').equal('1');
            expect(consentWidget).to.have.css('padding').equal('24px');
            expect(consentWidget).to.have.css('border').equal(`1px solid ${colorFontLight}`);
            expect(consentWidget).to.have.css('border-radius').equal('4px');
            expect(consentWidget).to.have.css('background-color').equal(colorBg);
        });

        cy.get('.consent-widget__title').then((consentWidgetTitle) => {
            expect(consentWidgetTitle).to.have.css('color').equal(colorFont);
            expect(consentWidgetTitle).to.have.css('margin').equal('0px 0px 16px');
        });

        cy.get('.consent-widget__bottom').then((consentWidgetBottom) => {
            expect(consentWidgetBottom).to.have.css('display').equal('flex');
            expect(consentWidgetBottom).to.have.css('align-items').equal('flex-end');
            expect(consentWidgetBottom).to.have.css('justify-content').equal('flex-start');
            expect(consentWidgetBottom).to.have.css('gap').equal('16px');
        });
    });
});

describe('consent configuration with warning', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-consent--consent-configuration&args=showError:true');
    });

    it.only('consent widget warning element has correct styles', () => {
        cy.get('.consent-widget__warning').then((warning) => {
            expect(warning).to.have.css('display').equal('flex');
            expect(warning).to.have.css('align-items').equal('center');
            expect(warning).to.have.css('justify-content').equal('center');
            expect(warning).to.have.css('gap').equal('16px');
            expect(warning).to.have.css('margin').equal('0px');
            expect(warning).to.have.css('color').equal(colorWarning);
            expect(warning).to.have.css('border').equal(`1px solid ${colorWarning}`);
            expect(warning).to.have.css('padding').equal('8px');
            expect(warning).to.have.css('border-radius').equal('4px');
        });
        cy.get('.consent-widget__warning .icon').then((warningIcon) => {
            expect(warningIcon).to.exist;
            expect(warningIcon).to.have.attr('icon-name').equal('tools');
            expect(warningIcon).to.have.attr('icon-color').equal('warning');
            expect(warningIcon).to.have.attr('icon-size').equal('normal');
            expect(warningIcon).to.have.css('background-color').equal(colorWarning);
        })
    });
});

export {}
