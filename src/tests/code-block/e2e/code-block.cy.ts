/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('code-block', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-code-block--code-block&args=showLanguageTag:!true');
    });

    it('has correct structure', () => {
        cy.get(`toujou-code-block`).then((codeBlock) => {
            expect(codeBlock).to.have.prop('tagName').equal('TOUJOU-CODE-BLOCK');
            expect(codeBlock).to.have.attr('class').equal('code-block');
        });

        cy.get(`toujou-code-block .code-block__pre`).then((codeBlockPre) => {
            expect(codeBlockPre).to.have.prop('tagName').equal('PRE');
            expect(codeBlockPre).to.have.attr('class').equal('code-block__pre');
        });

        cy.get(`toujou-code-block .code-block__code`).then((codeBlockCode) => {
            expect(codeBlockCode).to.have.prop('tagName').equal('CODE');
            expect(codeBlockCode).to.have.attr('class').equal('code-block__code hljs javascript');
        });

        cy.get(`toujou-code-block .code-block__language-tag`).then((codeBlockLangTag) => {
            expect(codeBlockLangTag).to.have.prop('tagName').equal('SPAN');
            expect(codeBlockLangTag).to.have.attr('class').equal('code-block__language-tag');
        });
    });

    it('has correct styles', () => {
        cy.get(`toujou-code-block .code-block__pre`).then((codeBlockPre) => {
            expect(codeBlockPre).to.have.css('padding').equal('0px');
        });

        cy.get(`toujou-code-block .code-block__code`).then((codeBlockCode) => {
            expect(codeBlockCode).to.have.css('background-color').equal('rgb(43, 43, 43)');
        });

        cy.get(`toujou-code-block .code-block__language-tag`).then((codeBlockLangTag) => {
            expect(codeBlockLangTag).to.have.css('position').equal('absolute');
            expect(codeBlockLangTag).to.have.css('right').equal('0px');
            expect(codeBlockLangTag).to.have.css('top').equal('0px');
            expect(codeBlockLangTag).to.have.css('background-color').equal(colors.colorBgO75);
            expect(codeBlockLangTag).to.have.css('color').equal(colors.colorFont);
            expect(codeBlockLangTag).to.have.css('padding').equal(`${tokens.spacing.xs} ${tokens.spacing.s}`);
            expect(codeBlockLangTag).to.have.css('border-radius').equal(`0px 0px 0px ${tokens.borderRadius.s}`);
            expect(codeBlockLangTag).to.have.css('font-size').equal(tokens.type.size.xxs);
        });
    });
})

export {}
