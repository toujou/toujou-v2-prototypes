/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('Tokens - type font-families', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=tokens-type--font-families');
    });

    it('has correct values for the headline font family variables', () => {
        cy.get('.font-family-headline.font-weight-headline').should('have.css', 'font-family', tokens.type.fontFamily.headline);
        cy.get('.font-family-headline.font-weight-headline').should('have.css', 'font-weight', '600');
    });

    it('has correct values for the text font-family variables', () => {
        cy.get('.font-family-text.font-weight-text-normal').should('have.css', 'font-family', tokens.type.fontFamily.text);
        cy.get('.font-family-text.font-weight-text-normal').should('have.css', 'font-weight', '600');
        cy.get('.font-family-text.font-weight-text-bold').should('have.css', 'font-family', tokens.type.fontFamily.text);
        cy.get('.font-family-text.font-weight-text-bold').should('have.css', 'font-weight', '800');
    });
})

describe('Tokens - type font-sizes', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=tokens-type--font-sizes');
    });

    it('has correct values for the headline font sizes variables', () => {
        cy.get('.font-size-xxxxl').should('have.css', 'font-size', tokens.type.size.xxxxl);
        cy.get('.font-size-xxxl').should('have.css', 'font-size', tokens.type.size.xxxl);
        cy.get('.font-size-xxl').should('have.css', 'font-size', tokens.type.size.xxl);
        cy.get('.font-size-xl').should('have.css', 'font-size', tokens.type.size.xl);
        cy.get('.font-size-l').should('have.css', 'font-size', tokens.type.size.l);
        cy.get('.font-size-m').should('have.css', 'font-size', tokens.type.size.m);
        cy.get('.font-size-normal').should('have.css', 'font-size', tokens.type.size.normal);
        cy.get('.font-size-s').should('have.css', 'font-size', tokens.type.size.s);
        cy.get('.font-size-xs').should('have.css', 'font-size', tokens.type.size.xs);
        cy.get('.font-size-xxs').should('have.css', 'font-size', tokens.type.size.xxs);
    });
})

describe('Tokens - type line-height', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=tokens-type--line-heights');
    });

    it('has correct values for the headline line-height variables', () => {
        cy.get('.line-height-l').should('have.css', 'line-height', tokens.type.lineHeight.l);
        cy.get('.line-height-m').should('have.css', 'line-height', tokens.type.lineHeight.m);
        cy.get('.line-height-normal').should('have.css', 'line-height', tokens.type.lineHeight.normal);
        cy.get('.line-height-s').should('have.css', 'line-height', tokens.type.lineHeight.s);
        cy.get('.line-height-reset').should('have.css', 'line-height', tokens.type.lineHeight.reset);
    });
})

describe('Tokens - type letter-spacing', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=tokens-type--letter-spacing');
    });

    it('has correct values for the headline letter spacing variables', () => {
        cy.get('.letter-spacing-l').should('have.css', 'letter-spacing', tokens.type.letterSpacing.l);
        cy.get('.letter-spacing-m').should('have.css', 'letter-spacing', tokens.type.letterSpacing.m);
        cy.get('.letter-spacing-normal').should('have.css', 'letter-spacing', tokens.type.letterSpacing.normal);
        cy.get('.letter-spacing-s').should('have.css', 'letter-spacing', tokens.type.letterSpacing.s);
    });
})

describe('Tokens - type font-styles', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=tokens-type--font-styles');
    });

    it('has correct values for the headline font styles variables', () => {
        cy.get('.font-style-normal').should('have.css', 'font-style', 'normal');
        cy.get('.font-style-bold').should('have.css', 'font-weight', '800');
        cy.get('.font-style-italic').should('have.css', 'font-style', 'italic');
        cy.get('.font-style-bold.font-style-italic').should('have.css', 'font-weight', '800');
        cy.get('.font-style-bold.font-style-italic').should('have.css', 'font-style', 'italic');
        cy.get('.font-style-strikethrough').should('have.css', 'text-decoration', 'line-through solid rgb(42, 54, 60)');
        cy.get('.font-style-underline').should('have.css', 'text-decoration', 'underline solid rgb(42, 54, 60)');
    });
})

describe('Tokens - type tags', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=tokens-type--tags');
    });

    it('has correct styles for the different tags', () => {
        cy.get('.demo-font-tags h1').should('have.css', 'font-family', tokens.type.fontFamily.headline);
        cy.get('.demo-font-tags h1').should('have.css', 'font-size', tokens.type.size.xxxl);
        cy.get('.demo-font-tags h1').should('have.css', 'font-weight', '600');
        cy.get('.demo-font-tags h1').should('have.css', 'color', colors.colorPrimary);

        cy.get('.demo-font-tags h2').should('have.css', 'font-family', tokens.type.fontFamily.headline);
        cy.get('.demo-font-tags h2').should('have.css', 'font-size', tokens.type.size.xxl);
        cy.get('.demo-font-tags h2').should('have.css', 'font-weight', '600');
        cy.get('.demo-font-tags h2').should('have.css', 'color', colors.colorPrimary);

        cy.get('.demo-font-tags h3').should('have.css', 'font-family', tokens.type.fontFamily.headline);
        cy.get('.demo-font-tags h3').should('have.css', 'font-size', tokens.type.size.xl);
        cy.get('.demo-font-tags h3').should('have.css', 'font-weight', '600');
        cy.get('.demo-font-tags h3').should('have.css', 'color', colors.colorPrimary);

        cy.get('.demo-font-tags h4').should('have.css', 'font-family', tokens.type.fontFamily.headline);
        cy.get('.demo-font-tags h4').should('have.css', 'font-size', tokens.type.size.l);
        cy.get('.demo-font-tags h4').should('have.css', 'font-weight', '600');
        cy.get('.demo-font-tags h4').should('have.css', 'color', colors.colorPrimary);

        cy.get('.demo-font-tags h5').should('have.css', 'font-family', tokens.type.fontFamily.headline);
        cy.get('.demo-font-tags h5').should('have.css', 'font-size', tokens.type.size.m);
        cy.get('.demo-font-tags h5').should('have.css', 'font-weight', '600');
        cy.get('.demo-font-tags h5').should('have.css', 'color', colors.colorPrimary);

        cy.get('.demo-font-tags h6').should('have.css', 'font-family', tokens.type.fontFamily.headline);
        cy.get('.demo-font-tags h6').should('have.css', 'font-size', tokens.type.size.ms);
        cy.get('.demo-font-tags h6').should('have.css', 'font-weight', '600');
        cy.get('.demo-font-tags h6').should('have.css', 'color', colors.colorPrimary);

        cy.get('.demo-font-tags p').should('have.css', 'font-family', tokens.type.fontFamily.text);
        cy.get('.demo-font-tags p').should('have.css', 'font-size', tokens.type.size.normal);
        cy.get('.demo-font-tags p').should('have.css', 'font-weight', '1.5');
        cy.get('.demo-font-tags p').should('have.css', 'color', colors.colorFont);

        cy.get('.demo-font-tags ul li').should('have.css', 'font-family', tokens.type.fontFamily.text);
        cy.get('.demo-font-tags ul li').should('have.css', 'font-size', tokens.type.size.normal);
        cy.get('.demo-font-tags ul li').should('have.css', 'font-weight', '1.5');
        cy.get('.demo-font-tags ul li').should('have.css', 'color', colors.colorFont);

        cy.get('.demo-font-tags ol li').should('have.css', 'font-family', tokens.type.fontFamily.text);
        cy.get('.demo-font-tags ol li').should('have.css', 'font-size', tokens.type.size.normal);
        cy.get('.demo-font-tags ol li').should('have.css', 'font-weight', '1.5');
        cy.get('.demo-font-tags ol li').should('have.css', 'color', colors.colorFont);
    });
})

describe('Tokens - type text styles', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=tokens-type--text-styles');
    });

    it('has correct values for the different text styles', () => {
        cy.get('#root h1 + p').should('have.css', 'font-family', tokens.type.fontFamily.text);
        cy.get('#root h1 + p').should('have.css', 'font-size', tokens.type.size.normal);
        cy.get('#root h1 + p').should('have.css', 'font-weight', '1.5');
        cy.get('#root h1 + p').should('have.css', 'line-height', tokens.type.lineHeight.normal);

        cy.get('#root p.teasertext').should('have.css', 'font-family', tokens.type.fontFamily.text);
        cy.get('#root p.teasertext').should('have.css', 'font-size', tokens.type.size.normal);
        cy.get('#root p.teasertext').should('have.css', 'font-weight', '800');
        cy.get('#root p.teasertext').should('have.css', 'line-height', tokens.type.lineHeight.normal);

        cy.get('#root p.infotext').should('have.css', 'font-family', tokens.type.fontFamily.text);
        cy.get('#root p.infotext').should('have.css', 'font-size', tokens.type.size.ms);
        cy.get('#root p.infotext').should('have.css', 'font-weight', '1.5');
        cy.get('#root p.infotext').should('have.css', 'line-height', '30px');

        cy.get('#root p.notes').should('have.css', 'font-family', tokens.type.fontFamily.text);
        cy.get('#root p.notes').should('have.css', 'font-size', tokens.type.size.s);
        cy.get('#root p.notes').should('have.css', 'font-weight', '1.5');
        cy.get('#root p.notes').should('have.css', 'line-height', '21px');
    });
})

export {}
