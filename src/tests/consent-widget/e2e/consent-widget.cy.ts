/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('consent widget', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-consent--consent-widget');
    });

    it('has correct class', () => {
        cy.get('toujou-consent-widget').invoke('attr', 'class').should('eq', 'consent-widget');
        cy.get('toujou-consent-widget').should('have.prop', 'tagName').should('eq', 'TOUJOU-CONSENT-WIDGET');
        cy.get('toujou-consent-widget').invoke('attr', 'in-page').should('not.exist');
        cy.get('toujou-consent-widget').invoke('attr', 'warningvisible').should('eq', 'false');
        cy.get('toujou-consent-widget').invoke('attr', 'listento').should('eq', 'click');
        cy.get('toujou-consent-widget').invoke('attr', 'listenon').should('eq', '#consentSaveButton,#consentAcceptAllButton');
    });

    it('has correct correct styles', () => {
        cy.get('.consent-widget').then((consentWidget) => {
            expect(consentWidget).to.have.css('position').equal('absolute');
            expect(consentWidget).to.have.css('bottom').equal(tokens.spacing.normal);
            expect(consentWidget).to.have.css('left').equal(tokens.spacing.normal);
            expect(consentWidget).to.have.css('margin-top').equal('0px');
            expect(consentWidget).to.have.css('margin-bottom').equal('0px');
            expect(consentWidget).to.have.css('z-index').equal('15000');
            expect(consentWidget).to.have.css('padding').equal(tokens.spacing.m);
            expect(consentWidget).to.have.css('border').equal(`${tokens.border.normal} solid ${colors.colorFontLight}`);
            expect(consentWidget).to.have.css('border-radius').equal(tokens.borderRadius.normal);
            expect(consentWidget).to.have.css('background-color').equal(colors.colorBg);
        });

        cy.get('.consent-widget__title').then((consentWidgetTitle) => {
            expect(consentWidgetTitle).to.have.css('color').equal(colors.colorFont);
            expect(consentWidgetTitle).to.have.css('margin').equal(`0px 0px ${tokens.spacing.normal}`);
        });

        cy.get('.consent-widget__bottom').then((consentWidgetBottom) => {
            expect(consentWidgetBottom).to.have.css('display').equal('flex');
            expect(consentWidgetBottom).to.have.css('align-items').equal('flex-end');
            expect(consentWidgetBottom).to.have.css('justify-content').equal('flex-start');
            expect(consentWidgetBottom).to.have.css('gap').equal(tokens.spacing.normal);
        });

        cy.get('#consentAcceptAllButton').then((acceptAllButton) => {
            expect(acceptAllButton).to.have.text('Alles akzeptieren');
            expect(acceptAllButton).to.have.attr('accept-all');
            expect(acceptAllButton).to.have.attr('button-type').equal('default');
            expect(acceptAllButton).to.have.attr('button-size').equal('small');
            expect(acceptAllButton).to.have.attr('button-variant').equal('primary');
        });

        cy.get('.consent-widget__details').then((consentWidgetDetails) => {
            expect(consentWidgetDetails).to.have.prop('tagName').equal('DETAILS')
        });

        cy.get('#consentSettingsButton').then((consentSetttingsButton) => {
            expect(consentSetttingsButton).to.have.text('Einstellungen');
            expect(consentSetttingsButton).to.have.attr('button-type').equal('default');
            expect(consentSetttingsButton).to.have.attr('button-size').equal('small');
            expect(consentSetttingsButton).to.have.attr('button-variant').equal('font');
        });
    });
});

describe('consent widget - open', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-consent--consent-widget&args=isOpen:true');
    });

    it('has correct class and elements', () => {

        cy.get('#consentSettingsButton').click();
        cy.get('toujou-consent-widget').invoke('attr', 'class').should('eq', 'consent-widget');
        cy.get('toujou-consent-widget').invoke('attr', 'in-page').should('not.exist');
        cy.get('toujou-consent-widget').invoke('attr', 'warningvisible').should('eq', 'false');
        cy.get('toujou-consent-widget').invoke('attr', 'listento').should('eq', 'click');
        cy.get('toujou-consent-widget').invoke('attr', 'listenon').should('eq', '#consentSaveButton,#consentAcceptAllButton');
    });

    it('has correct styles', () => {
        cy.get('.consent-widget__consent-elements').then((consentElements) => {
            expect(consentElements).to.have.css('display').equal('flex');
            expect(consentElements).to.have.css('flex-direction').equal('column');
            expect(consentElements).to.have.css('flex-grow').equal('1');
            expect(consentElements).to.have.css('gap').equal('4px');
        });
        cy.get('.consent-widget__consent-elements').children('toujou-consent').should('have.length', 4);
        cy.get('#consentSaveButton').then((consentSaveButton) => {
            expect(consentSaveButton).to.have.text('OK');
            expect(consentSaveButton).to.have.attr('button-type').equal('default');
            expect(consentSaveButton).to.have.attr('button-size').equal('small');
            expect(consentSaveButton).to.have.attr('button-variant').equal('primary');
        });
    });
});

export {}
