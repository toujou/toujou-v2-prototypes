/// <reference types="cypress" />
/// <reference types="cypress-real-events" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

const quickLinksSelector = '.quick-links';
const firstQuickLinkSelector = '.quick-links .quick-links__item:first-child .quick-link';

// --- Default story (verticalPos: bottom, horizontalPos: right, bgColor: primary, iconOnly: false) ---

describe('quick-links - default', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-quicklinks--quick-links');
        // @ts-ignore
        cy.get('body').realHover();
        // @ts-ignore
        cy.get(firstQuickLinkSelector).resetRealHover();
    });

    it('has correct attributes', () => {
        cy.get(quickLinksSelector).should('have.attr', 'aria-label', 'Quick links');
        cy.get(quickLinksSelector).should('have.attr', 'data-vertical-position', 'bottom');
        cy.get(quickLinksSelector).should('have.attr', 'data-horizontal-position', 'right');
    });

    it('has correct children', () => {
        cy.get(`${quickLinksSelector} > .quick-links__list`).should('exist');
        cy.get(`${quickLinksSelector} > .quick-links__list > .quick-links__item`).should('have.length', 3);
        cy.get(`${quickLinksSelector} > .quick-links__list > .quick-links__item > .quick-link`).should('exist');
        cy.get(`${quickLinksSelector} .quick-link > .quick-link__figure`).should('exist');
        cy.get(`${quickLinksSelector} .quick-link > .quick-link__figure > .quick-link__image`).should('exist');
        cy.get(`${quickLinksSelector} .quick-link > .quick-link__text`).should('exist');
    });

    it('has correct quick-links wrapper styles', () => {
        cy.get(quickLinksSelector).then((el) => {
            expect(el).to.have.css('position', 'fixed');
            expect(el).to.have.css('display', 'block');
        });
    });

    it('has correct list styles', () => {
        cy.get(`${quickLinksSelector} .quick-links__list`).then((list) => {
            expect(list).to.have.css('display', 'flex');
            expect(list).to.have.css('flex-direction', 'column');
            expect(list).to.have.css('list-style-type', 'none');
            expect(list).to.have.css('padding', '0px');
            expect(list).to.have.css('margin', '0px');
            expect(list).to.have.css('align-items', 'flex-end');
            expect(list).to.have.css('gap', tokens.spacing.s);
        });
    });

    it('has correct positioning for bottom-right (default)', () => {
        cy.get(quickLinksSelector).then((el) => {
            expect(el).to.have.css('right', '0px');
        });
    });

    it('has correct quick-link styles', () => {
        cy.get(firstQuickLinkSelector).then((link) => {
            expect(link).to.have.css('display', 'flex');
            expect(link).to.have.css('align-items', 'center');
            expect(link).to.have.css('justify-content', 'center');
            expect(link).to.have.css('cursor', 'pointer');
            expect(link).to.have.css('text-decoration', 'none');
            expect(link).to.have.css('width', '118.9296875px');
            expect(link).to.have.css('margin', '0px');
        });
    });

    it('has correct quick-link figure and image styles', () => {
        cy.get(`${firstQuickLinkSelector} .quick-link__figure`).then((figure) => {
            expect(figure).to.have.css('height', '32px');
            expect(figure).to.have.css('width', '32px');
        });
        cy.get(`${firstQuickLinkSelector} .quick-link__image`).then((image) => {
            expect(image).to.have.css('height', '32px');
            expect(image).to.have.css('width', '32px');
        });
    });

    it('has correct quick-link text styles', () => {
        cy.get(`${firstQuickLinkSelector} .quick-link__text`).then((text) => {
            expect(text).to.have.css('color', colors.colorBg);
            expect(text).to.have.css('line-height', '16px');
        });
    });

    it('has correct right-positioned link styles', () => {
        cy.get(firstQuickLinkSelector).then((link) => {
            expect(link).to.have.css('flex-direction', 'row');
            expect(link).to.have.css('border-radius').to.match(/^\d+px 0px 0px \d+px$/);
        });
    });

    it('has correct focus styles', () => {
        cy.get(firstQuickLinkSelector).focus();
        cy.get(firstQuickLinkSelector).should('have.css', 'background-color', colors.colorPrimaryDark);
        cy.get(firstQuickLinkSelector).should('have.css', 'outline', `${colors.colorPrimary} solid 2px`);
    });
});

// --- bgColor: primary (default, already covered above, explicit check) ---

describe('quick-links - bgColor primary', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-quicklinks--quick-links&args=bgColor:primary');
        // @ts-ignore
        cy.get(firstQuickLinkSelector).resetRealHover();
    });

    it('has correct primary background color', () => {
        cy.get(firstQuickLinkSelector).invoke('attr', 'data-element-design').should('eq', 'primary');
        cy.get(firstQuickLinkSelector).should('have.css', 'background-color', colors.colorPrimary);
    });

    it('has correct primary hover background color', () => {
        // @ts-ignore
        cy.get(firstQuickLinkSelector).realHover();
        cy.get(firstQuickLinkSelector).should('have.css', 'background-color', colors.colorPrimaryDark);
    });
});

// --- bgColor: secondary ---

describe('quick-links - bgColor secondary', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-quicklinks--quick-links&args=bgColor:secondary');
        // @ts-ignore
        cy.get(firstQuickLinkSelector).resetRealHover();
    });

    it('has correct secondary background color', () => {
        cy.get(firstQuickLinkSelector).invoke('attr', 'data-element-design').should('eq', 'secondary');
        cy.get(firstQuickLinkSelector).should('have.css', 'background-color', colors.colorSecondary);
    });

    it('has correct secondary hover background color', () => {
        // @ts-ignore
        cy.get(firstQuickLinkSelector).realHover();
        cy.get(firstQuickLinkSelector).should('have.css', 'background-color', colors.colorSecondaryDark);
    });
});

// --- bgColor: font ---

describe('quick-links - bgColor font', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-quicklinks--quick-links&args=bgColor:font');
        // @ts-ignore
        cy.get(firstQuickLinkSelector).resetRealHover();
    });

    it('has correct font background color', () => {
        cy.get(firstQuickLinkSelector).invoke('attr', 'data-element-design').should('eq', 'font');
        cy.get(firstQuickLinkSelector).should('have.css', 'background-color', colors.colorFont);
    });

    it('has correct font hover background color', () => {
        // @ts-ignore
        cy.get(firstQuickLinkSelector).realHover();
        cy.get(firstQuickLinkSelector).should('have.css', 'background-color', colors.colorFontDark);
    });
});

// --- horizontalPos: left ---

describe('quick-links - horizontalPos left', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-quicklinks--quick-links&args=horizontalPos:left');
        // @ts-ignore
        cy.get(firstQuickLinkSelector).resetRealHover();
    });

    it('has correct left positioning attributes and styles', () => {
        cy.get(quickLinksSelector).should('have.attr', 'data-horizontal-position', 'left');
        cy.get(quickLinksSelector).should('have.css', 'left', '0px');
    });

    it('list aligns items to flex-start when left', () => {
        cy.get(`${quickLinksSelector} .quick-links__list`).should('have.css', 'align-items', 'flex-start');
    });

    it('quick-link has correct left-side border-radius', () => {
        cy.get(firstQuickLinkSelector).then((link) => {
            expect(link).to.have.css('border-radius').to.match(/^0px \d+px \d+px 0px$/);
        });
    });

    it('quick-link has correct row-reverse flex direction', () => {
        cy.get(firstQuickLinkSelector).should('have.css', 'flex-direction', 'row-reverse');
    });

    it('slides in on hover from the left', () => {
        // @ts-ignore
        cy.get(firstQuickLinkSelector).realHover();
        cy.get(firstQuickLinkSelector).should('have.css', 'transform', 'matrix(1, 0, 0, 1, -70.9297, 0)');
    });
});

// --- horizontalPos: right ---

describe('quick-links - horizontalPos right', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-quicklinks--quick-links&args=horizontalPos:right');
        // @ts-ignore
        cy.get(firstQuickLinkSelector).resetRealHover();
    });

    it('has correct right positioning attributes and styles', () => {
        cy.get(quickLinksSelector).should('have.attr', 'data-horizontal-position', 'right');
        cy.get(quickLinksSelector).should('have.css', 'right', '0px');
    });

    it('list aligns items to flex-end when right', () => {
        cy.get(`${quickLinksSelector} .quick-links__list`).should('have.css', 'align-items', 'flex-end');
    });

    it('slides in on hover from the right', () => {
        // @ts-ignore
        cy.get(firstQuickLinkSelector).realHover();
        cy.get(firstQuickLinkSelector).should('have.css', 'transform', 'matrix(1, 0, 0, 1, 70.9297, 0)');
    });
});

// --- verticalPos: top ---

describe('quick-links - verticalPos top', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-quicklinks--quick-links&args=verticalPos:top');
    });

    it('has correct top attribute', () => {
        cy.get(quickLinksSelector).should('have.attr', 'data-vertical-position', 'top');
    });

    it('is positioned using top property', () => {
        cy.get(quickLinksSelector).then((el) => {
            const top = parseInt(el.css('top'));
            expect(top).to.be.greaterThan(0);
        });
    });
});

// --- verticalPos: middle ---

describe('quick-links - verticalPos middle', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-quicklinks--quick-links&args=verticalPos:middle');
    });

    it('has correct middle attribute', () => {
        cy.get(quickLinksSelector).should('have.attr', 'data-vertical-position', 'middle');
    });

    it('has top set to 50%', () => {
        cy.get(quickLinksSelector).then((el) => {
            const viewportHeight = Cypress.config('viewportHeight');
            const top = parseInt(el.css('top'));
            expect(top).to.equal(viewportHeight / 2);
        });
    });

    it('has translateY(-50%) transform', () => {
        cy.get(quickLinksSelector).then((el) => {
            const transform = el.css('transform');
            // matrix(1, 0, 0, 1, 0, -X) where X is half the element height
            expect(transform).to.match(/matrix\(1, 0, 0, 1, 0, -\d/);
        });
    });
});

// --- verticalPos: bottom ---

describe('quick-links - verticalPos bottom', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-quicklinks--quick-links&args=verticalPos:bottom');
    });

    it('has correct bottom attribute', () => {
        cy.get(quickLinksSelector).should('have.attr', 'data-vertical-position', 'bottom');
    });

    it('is positioned using bottom property', () => {
        cy.get(quickLinksSelector).then((el) => {
            const bottom = parseInt(el.css('bottom'));
            expect(bottom).to.be.greaterThan(0);
        });
    });
});

// --- iconOnly: true ---

describe('quick-links - iconOnly true', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-quicklinks--quick-links&args=iconOnly:true');
        // @ts-ignore
        cy.get(firstQuickLinkSelector).resetRealHover();
    });

    it('does not render text spans', () => {
        cy.get(`${quickLinksSelector} .quick-link__text`).should('not.exist');
    });

    it('still renders figures and icons', () => {
        cy.get(`${quickLinksSelector} .quick-link__figure`).should('exist');
        cy.get(`${quickLinksSelector} .quick-link__image`).should('exist');
    });
});

// --- iconOnly: false ---

describe('quick-links - iconOnly false', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-quicklinks--quick-links&args=iconOnly:false');
        // @ts-ignore
        cy.get(firstQuickLinkSelector).resetRealHover();
    });

    it('renders text spans', () => {
        cy.get(`${quickLinksSelector} .quick-link__text`).should('exist');
        cy.get(`${quickLinksSelector} .quick-link__text`).should('have.length', 3);
    });

    it('text has correct color', () => {
        cy.get(`${firstQuickLinkSelector} .quick-link__text`).should('have.css', 'color', colors.colorBg);
    });
});

export {};
