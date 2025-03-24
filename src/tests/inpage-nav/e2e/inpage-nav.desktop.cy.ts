/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('inpage-nav desktop - default', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-inpage-nav--inpage-nav');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct structure', () => {
        cy.get('toujou-inpage-nav').invoke('prop', 'tagName').should('eq', 'TOUJOU-INPAGE-NAV');
        cy.get('toujou-inpage-nav').invoke('attr', 'class').should('eq', 'inpage-nav');
        cy.get('.inpage-nav .inpage-nav__toggle').should('exist');
        cy.get('.inpage-nav .inpage-nav__toggle').invoke('prop', 'tagName').should('eq', 'BUTTON');
        cy.get('.inpage-nav .inpage-nav__label').should('exist');
        cy.get('.inpage-nav .inpage-nav__label').invoke('prop', 'tagName').should('eq', 'SPAN');
        cy.get('.inpage-nav .inpage-nav__nav').should('exist');
        cy.get('.inpage-nav .inpage-nav__nav').invoke('prop', 'tagName').should('eq', 'NAV');
        cy.get('.inpage-nav .inpage-nav__cta').should('exist');
        cy.get('.inpage-nav .inpage-nav__cta').invoke('prop', 'tagName').should('eq', 'A');
        cy.get('.inpage-nav').shadow().find('slot').should('exist').should('have.length', 2);
        cy.get('.inpage-nav').shadow().find('slot[name="cta"]').should('exist');
        cy.get('.inpage-nav').invoke('attr', 'ismobile').should('not.exist');
        cy.get('.inpage-nav').invoke('attr', 'alignment').should('eq', 'left');
        cy.get('.inpage-nav').invoke('attr', 'element-design').should('eq', 'default');
    });

    it('nav has correct styles', () => {
        cy.get('.inpage-nav').then((nav) => {
            expect(nav).to.have.css('display').eq('grid');
            expect(nav).to.have.css('margin-top').eq(tokens.spacing.l);
            expect(nav).to.have.css('margin-bottom').eq(tokens.spacing.l);
            expect(nav).to.have.css('padding').eq(`0px ${tokens.spacing.s}`);
            expect(nav).to.have.css('position').eq('relative');
            expect(nav).to.have.css('border-bottom').eq(`${tokens.border.normal} solid rgba(0, 0, 0, 0)`);
            expect(nav).to.have.css('z-index').eq('60');
            expect(nav).to.have.css('opacity').eq('1');
            expect(nav).to.have.css('border-radius').eq(tokens.borderRadius.normal);
        })
    });

    it('toggle has correct styles', () => {
        cy.get('.inpage-nav__toggle').then((toggle) => {
            expect(toggle).to.have.css('display').eq('none');
            expect(toggle).to.have.css('align-items').eq('center');
            expect(toggle).to.have.css('justify-content').eq('center');
            expect(toggle).to.have.css('border').eq('0px none rgb(0, 0, 0)');
            expect(toggle).to.have.css('background-color').eq('rgba(0, 0, 0, 0)');
            expect(toggle).to.have.css('grid-area').eq('toggle');
            expect(toggle).to.have.css('transition').eq('transform 0.25s ease-in-out');
        })
    });

    it('label has correct styles', () => {
        cy.get('.inpage-nav__label').then((label) => {
            expect(label).to.have.css('grid-area').eq('label');
            expect(label).to.have.css('font-weight').eq(tokens.type.fontWeight.headline);
            expect(label).to.have.css('color').eq(colors.colorFont);
            expect(label).to.have.css('display').eq('flex');
            expect(label).to.have.css('align-items').eq('center');
            expect(label).to.have.css('justify-self').eq('flex-start');
        })
    });

    it('nav list is not visible and has correct styles', () => {
        cy.get('.inpage-nav__list').then((list) => {
            expect(list).to.have.css('visibility').eq('visible');
            expect(list).to.have.css('list-style').eq('outside none none');
            expect(list).to.have.css('margin').eq(`0px 0px 0px ${tokens.spacing.m}`);
            expect(list).to.have.css('padding').eq('0px');
            expect(list).to.have.css('display').eq('flex');
            expect(list).to.have.css('align-items').eq('center');
            expect(list).to.have.css('justify-content').eq('flex-start');
            expect(list).to.have.css('gap').eq('0px');
        })
    });

    it('nav list items have correct styles', () => {
        cy.get('.inpage-nav__item').then((item) => {
            expect(item).to.have.css('display').eq('flex');
            expect(item).to.have.css('align-items').eq('center');
        })
    });

    it('nav links have correct styles', () => {
        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').then((link) => {
            expect(link).to.have.css('position').eq('relative');
            expect(link).to.have.css('text-decoration').eq(`none solid ${colors.colorPrimary}`);
            expect(link).to.have.css('font-weight').eq(tokens.type.fontWeight.bold);
            expect(link).to.have.css('color').eq(colors.colorPrimary);
            expect(link).to.have.css('display').eq('flex');
            expect(link).to.have.css('align-items').eq('center');
            expect(link).to.have.css('padding').eq(`0px ${tokens.spacing.normal}`);
        })
    });

    it('active nav links have correct styles', () => {
        cy.get('.inpage-nav__item[active] .inpage-nav__link').then((link) => {
            expect(link).to.have.css('color').eq(colors.colorPrimary);
        })
        // @ts-ignore
        cy.get('.inpage-nav__item[active] .inpage-nav__link').after('background-color').should('eq', colors.colorPrimary);
        // @ts-ignore
        cy.get('.inpage-nav__item[active] .inpage-nav__link').after('height').should('eq', '4px');
        // @ts-ignore
        cy.get('.inpage-nav__item[active] .inpage-nav__link').after('position').should('eq', 'absolute');
        // @ts-ignore
        cy.get('.inpage-nav__item[active] .inpage-nav__link').after('bottom').should('eq', '0px');
        // @ts-ignore
        cy.get('.inpage-nav__item[active] .inpage-nav__link').after('left').should('eq', '0px');

    });

    it('cta button has correct styles', () => {
        cy.get('.inpage-nav__cta').then((cta) => {
            expect(cta).to.have.css('margin').eq('8px 0px');
            expect(cta).to.have.css('grid-area').eq('cta');
        })
    });

    it('has correct hover styles', () => {
        cy.get('.inpage-nav__item[active] .inpage-nav__link').should('have.css', 'background-color', colors.colorTransparent);
        cy.get('.inpage-nav__item[active] .inpage-nav__link').should('have.css', 'color', colors.colorPrimary);
        // @ts-ignore
        cy.get('.inpage-nav__item[active] .inpage-nav__link').after('opacity').should('eq', '1');
        // @ts-ignore
        cy.get('.inpage-nav__item[active] .inpage-nav__link').realHover();
        cy.get('.inpage-nav__item[active] .inpage-nav__link').should('have.css', 'background-color', colors.colorTransparent);
        cy.get('.inpage-nav__item[active] .inpage-nav__link').should('have.css', 'color', colors.colorPrimary);
        // @ts-ignore
        cy.get('.inpage-nav__item[active] .inpage-nav__link').after('opacity').should('eq', '1');
        // @ts-ignore
        cy.get('.inpage-nav__item[active] .inpage-nav__link').resetRealHover();

        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').should('have.css', 'background-color', colors.colorTransparent);
        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').should('have.css', 'color', colors.colorPrimary);
        // @ts-ignore
        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').after('opacity').should('eq', '0');
        // @ts-ignore
        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').realHover();
        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').should('have.css', 'background-color', colors.colorTransparent);
        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').should('have.css', 'color', colors.colorPrimary);
        // @ts-ignore
        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').after('opacity').should('eq', '1');
        // @ts-ignore
        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').resetRealHover();

        cy.get('.inpage-nav__cta').should('have.css', 'background-color', colors.colorPrimary);
        cy.get('.inpage-nav__cta').should('have.css', 'color', colors.colorBg);
        // @ts-ignore
        cy.get('.inpage-nav__cta').realHover();
        cy.get('.inpage-nav__cta').should('have.css', 'background-color', colors.colorPrimaryDark);
        cy.get('.inpage-nav__cta').should('have.css', 'color', colors.colorBg);
        // @ts-ignore
        cy.get('.inpage-nav__cta').resetRealHover();
    });
});

describe('inpage-nav desktop - primary', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-inpage-nav--inpage-nav&args=elementDesign:primary');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct styles', () => {
        cy.get('.inpage-nav').should('have.css', 'background-color', colors.colorPrimary);
        cy.get('.inpage-nav__label').should('have.css', 'color', colors.colorBg);
        cy.get('.inpage-nav__cta').should('have.css', 'background-color', colors.colorBg);
        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').should('have.css', 'color', colors.colorBg);
        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').should('have.css', 'background-color', colors.colorTransparent);
        cy.get('.inpage-nav__item[active] .inpage-nav__link').should('have.css', 'background-color', colors.colorPrimaryDark);
        cy.get('.inpage-nav__item[active] .inpage-nav__link').should('have.css', 'color', colors.colorBg);
    });

    it('has correct hover styles', () => {
        cy.get('.inpage-nav__item[active] .inpage-nav__link').should('have.css', 'background-color', colors.colorPrimaryDark);
        cy.get('.inpage-nav__item[active] .inpage-nav__link').should('have.css', 'color', colors.colorBg);
        // @ts-ignore
        cy.get('.inpage-nav__item[active] .inpage-nav__link').after('opacity').should('eq', '0');
        // @ts-ignore
        cy.get('.inpage-nav__item[active] .inpage-nav__link').realHover();
        cy.get('.inpage-nav__item[active] .inpage-nav__link').should('have.css', 'background-color', colors.colorPrimaryDark);
        cy.get('.inpage-nav__item[active] .inpage-nav__link').should('have.css', 'color', colors.colorBg);
        // @ts-ignore
        cy.get('.inpage-nav__item[active] .inpage-nav__link').after('opacity').should('eq', '0');
        // @ts-ignore
        cy.get('.inpage-nav__item[active] .inpage-nav__link').resetRealHover();

        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').should('have.css', 'background-color', colors.colorTransparent);
        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').should('have.css', 'color', colors.colorBg);
        // @ts-ignore
        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').after('opacity').should('eq', '0');
        // @ts-ignore
        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').realHover();
        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').should('have.css', 'background-color', colors.colorPrimaryDark);
        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').should('have.css', 'color', colors.colorBg);
        // @ts-ignore
        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').after('opacity').should('eq', '0');
        // @ts-ignore
        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').resetRealHover();

        cy.get('.inpage-nav__cta').should('have.css', 'background-color', colors.colorBg);
        cy.get('.inpage-nav__cta').should('have.css', 'color', colors.colorPrimary);
        // @ts-ignore
        cy.get('.inpage-nav__cta').realHover();
        cy.get('.inpage-nav__cta').should('have.css', 'background-color', colors.colorPrimaryDark);
        cy.get('.inpage-nav__cta').should('have.css', 'color', colors.colorBg);
        // @ts-ignore
        cy.get('.inpage-nav__cta').resetRealHover();
    });
});

describe('inpage-nav desktop - secondary', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-inpage-nav--inpage-nav&args=elementDesign:secondary');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct styles', () => {
        cy.get('.inpage-nav').should('have.css', 'background-color', colors.colorSecondary);
        cy.get('.inpage-nav__label').should('have.css', 'color', colors.colorBg);
        cy.get('.inpage-nav__toggle .icon').should('have.css', 'background-color', colors.colorBg);
        cy.get('.inpage-nav__cta').should('have.css', 'background-color', colors.colorBg);
        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').should('have.css', 'color', colors.colorBg);
        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').should('have.css', 'background-color', colors.colorTransparent);
        cy.get('.inpage-nav__item[active] .inpage-nav__link').should('have.css', 'background-color', colors.colorSecondaryDark);
        cy.get('.inpage-nav__item[active] .inpage-nav__link').should('have.css', 'color', colors.colorBg);
    });

    it('has correct hover styles', () => {
        cy.get('.inpage-nav__item[active] .inpage-nav__link').should('have.css', 'background-color', colors.colorSecondaryDark);
        cy.get('.inpage-nav__item[active] .inpage-nav__link').should('have.css', 'color', colors.colorBg);
        // @ts-ignore
        cy.get('.inpage-nav__item[active] .inpage-nav__link').after('opacity').should('eq', '0');
        // @ts-ignore
        cy.get('.inpage-nav__item[active] .inpage-nav__link').realHover();
        cy.get('.inpage-nav__item[active] .inpage-nav__link').should('have.css', 'background-color', colors.colorSecondaryDark);
        cy.get('.inpage-nav__item[active] .inpage-nav__link').should('have.css', 'color', colors.colorBg);
        // @ts-ignore
        cy.get('.inpage-nav__item[active] .inpage-nav__link').after('opacity').should('eq', '0');
        // @ts-ignore
        cy.get('.inpage-nav__item[active] .inpage-nav__link').resetRealHover();

        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').should('have.css', 'background-color', colors.colorTransparent);
        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').should('have.css', 'color', colors.colorBg);
        // @ts-ignore
        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').after('opacity').should('eq', '0');
        // @ts-ignore
        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').realHover();
        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').should('have.css', 'background-color', colors.colorSecondaryDark);
        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').should('have.css', 'color', colors.colorBg);
        // @ts-ignore
        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').after('opacity').should('eq', '0');
        // @ts-ignore
        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').resetRealHover();
        //
        cy.get('.inpage-nav__cta').should('have.css', 'background-color', colors.colorBg);
        cy.get('.inpage-nav__cta').should('have.css', 'color', colors.colorSecondary);
        // @ts-ignore
        cy.get('.inpage-nav__cta').realHover();
        cy.get('.inpage-nav__cta').should('have.css', 'background-color', colors.colorSecondaryDark);
        cy.get('.inpage-nav__cta').should('have.css', 'color', colors.colorBg);
        // @ts-ignore
        cy.get('.inpage-nav__cta').resetRealHover();
    });
});

describe('inpage-nav desktop - inverted', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-inpage-nav--inpage-nav&args=elementDesign:inverted');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct styles', () => {
        cy.get('.inpage-nav').should('have.css', 'background-color', colors.colorFont);
        cy.get('.inpage-nav__label').should('have.css', 'color', colors.colorBg);
        cy.get('.inpage-nav__toggle .icon').should('have.css', 'background-color', colors.colorBg);
        cy.get('.inpage-nav__cta').should('have.css', 'background-color', colors.colorBg);
        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').should('have.css', 'color', colors.colorBg);
        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').should('have.css', 'background-color', colors.colorTransparent);
        cy.get('.inpage-nav__item[active] .inpage-nav__link').should('have.css', 'background-color', colors.colorFontDark);
        cy.get('.inpage-nav__item[active] .inpage-nav__link').should('have.css', 'color', colors.colorBg);
    });

    it('has correct hover styles', () => {
        cy.get('.inpage-nav__item[active] .inpage-nav__link').should('have.css', 'background-color', colors.colorFontDark);
        cy.get('.inpage-nav__item[active] .inpage-nav__link').should('have.css', 'color', colors.colorBg);
        // @ts-ignore
        cy.get('.inpage-nav__item[active] .inpage-nav__link').after('opacity').should('eq', '0');
        // @ts-ignore
        cy.get('.inpage-nav__item[active] .inpage-nav__link').realHover();
        cy.get('.inpage-nav__item[active] .inpage-nav__link').should('have.css', 'background-color', colors.colorFontDark);
        cy.get('.inpage-nav__item[active] .inpage-nav__link').should('have.css', 'color', colors.colorBg);
        // @ts-ignore
        cy.get('.inpage-nav__item[active] .inpage-nav__link').after('opacity').should('eq', '0');
        // @ts-ignore
        cy.get('.inpage-nav__item[active] .inpage-nav__link').resetRealHover();

        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').should('have.css', 'background-color', colors.colorTransparent);
        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').should('have.css', 'color', colors.colorBg);
        // @ts-ignore
        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').after('opacity').should('eq', '0');
        // @ts-ignore
        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').realHover();
        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').should('have.css', 'background-color', colors.colorFontDark);
        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').should('have.css', 'color', colors.colorBg);
        // @ts-ignore
        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').after('opacity').should('eq', '0');
        // @ts-ignore
        cy.get('.inpage-nav__item:nth-child(2) .inpage-nav__link').resetRealHover();

        cy.get('.inpage-nav__cta').should('have.css', 'background-color', colors.colorBg);
        cy.get('.inpage-nav__cta').should('have.css', 'color', colors.colorFont);
        // @ts-ignore
        cy.get('.inpage-nav__cta').realHover();
        cy.get('.inpage-nav__cta').should('have.css', 'background-color', colors.colorFontDark);
        cy.get('.inpage-nav__cta').should('have.css', 'color', colors.colorBg);
        // @ts-ignore
        cy.get('.inpage-nav__cta').resetRealHover();
    });
});

describe('inpage-nav desktop - text width', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-inpage-nav--inpage-nav&args=width:text');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct attributes', () => {
        cy.get('.inpage-nav').invoke('attr', 'element-width').should('eq', 'text');
    });

    it('has correct wide styles', () => {
        cy.get('.inpage-nav').should('have.css', 'width', '960px');

    });
});

describe('inpage-nav desktop - wide', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-inpage-nav--inpage-nav&args=width:wide');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct attributes', () => {
        cy.get('.inpage-nav').invoke('attr', 'element-width').should('eq', 'wide');
    });

    it('has correct wide styles', () => {
        cy.get('.inpage-nav').should('have.css', 'width', '1440px');

    });
});

describe('inpage-nav desktop - fullwidth', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-inpage-nav--inpage-nav&args=width:fullwidth');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct attributes', () => {
        cy.get('.inpage-nav').invoke('attr', 'element-width').should('eq', 'fullwidth');
    });

    it('has correct wide styles', () => {
        cy.get('.inpage-nav').should('have.css', 'width', '1873px');

    });
});

export {}
