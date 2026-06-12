/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('consent configuration [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-consent--consent-configuration');
    });

    it('has correct class', () => {
        cy.get('toujou-consent-widget[inpage]').invoke('attr', 'class').should('eq', 'consent-widget');
        cy.get('toujou-consent-widget[inpage]').should('have.prop', 'tagName').should('eq', 'TOUJOU-CONSENT-WIDGET');
        cy.get('toujou-consent-widget[inpage]').invoke('attr', 'inpage').should('exist');
        cy.get('toujou-consent-widget[inpage]').invoke('attr', 'warningvisible').should('eq', 'true');
        cy.get('toujou-consent-widget[inpage]').invoke('attr', 'listento').should('eq', 'click');
        cy.get('toujou-consent-widget[inpage]').invoke('attr', 'listenon').should('eq', '#consentSaveButton,#consentAcceptAllButton');
    });

    it('has correct correct styles', () => {
        cy.get('.consent-widget[inpage]').then((consentWidget) => {
            expect(consentWidget).to.have.css('position').equal('relative');
            expect(consentWidget).to.have.css('bottom').equal('0px');
            expect(consentWidget).to.have.css('left').equal('0px');
            expect(consentWidget).to.have.css('margin-top').equal('0px');
            expect(consentWidget).to.have.css('margin-bottom').equal('0px');
            expect(consentWidget).to.have.css('z-index').equal('1');
            expect(consentWidget).to.have.css('padding').equal(tokens.spacing.normal);
            expect(consentWidget).to.have.css('border').equal(`${tokens.border.normal} solid ${colors.colorFontLight}`);
            expect(consentWidget).to.have.css('border-radius').equal(tokens.borderRadius.normal);
            expect(consentWidget).to.have.css('background-color').equal(colors.colorBg);
        });

        cy.get('.consent-widget[inpage] .consent-widget__title').then((consentWidgetTitle) => {
            expect(consentWidgetTitle).to.have.css('color').equal(colors.colorFont);
            expect(consentWidgetTitle).to.have.css('margin').equal(`0px`);
        });

        cy.get('.consent-widget[inpage] .consent-widget__bottom').then((consentWidgetBottom) => {
            expect(consentWidgetBottom).to.have.css('display').equal('none');
            expect(consentWidgetBottom).to.have.css('align-items').equal('flex-start');
            expect(consentWidgetBottom).to.have.css('justify-content').equal('space-between');
            expect(consentWidgetBottom).to.have.css('gap').equal(tokens.spacing.s);
        });
    });
});

describe('consent configuration with warning [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-consent--consent-configuration&args=showError:true');
    });

    it('consent widget warning element has correct styles', () => {
        cy.get('.consent-widget[inpage] .consent-widget__warning').then((warning) => {
            expect(warning).to.have.css('display').equal('flex');
            expect(warning).to.have.css('align-items').equal('center');
            expect(warning).to.have.css('justify-content').equal('center');
            expect(warning).to.have.css('gap').equal(tokens.spacing.normal);
            expect(warning).to.have.css('margin').equal(`${tokens.spacing.normal} 0px 0px`);
            expect(warning).to.have.css('color').equal(colors.colorFontDark);
            expect(warning).to.have.css('border').equal(`${tokens.border.normal} solid ${colors.colorWarning}`);
            expect(warning).to.have.css('padding').equal(tokens.spacing.normal);
            expect(warning).to.have.css('border-radius').equal(tokens.borderRadius.normal);
        });

        cy.get('.consent-widget[inpage] .consent-widget__warning .icon').then((warningIcon) => {
            expect(warningIcon).to.exist;
            expect(warningIcon).to.have.attr('icon-name').equal('warning');
            expect(warningIcon).to.have.attr('icon-color').equal('warning');
            expect(warningIcon).to.have.attr('icon-size').equal('normal');
            expect(warningIcon).to.have.css('background-color').equal(colors.colorWarning);
        })
    });
});

export {}
