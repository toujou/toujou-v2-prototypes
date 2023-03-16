/// <reference types="cypress" />
/// <reference types="cypress-real-events" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('hero media', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-media--hero-media');
        // @ts-ignore
        cy.get('body').resetRealHover();
        cy.wait(300);
    });

    it('has correct class and tag name', () => {
        cy.get('.hero-media').should('have.prop', 'tagName').should('eq', 'A');
        cy.get('.hero-media').invoke('attr', 'headline-alignment').should('eq', 'default');
    });

    it('has correct structure', () => {
        cy.get('.hero-media').should('exist');
        cy.get('.hero-media .hero-media__media').should('exist');
        cy.get('.hero-media .hero-media__title').should('exist');
        cy.get('.hero-media .media-info').should('exist');
    });

    it('has correct styles', () => {
        cy.get('.hero-media').should('have.css', 'aspect-ratio', tokens.aspectRatio.threeToOne);
        cy.get('.hero-media').should('have.css', 'display', 'block');
        cy.get('.hero-media').should('have.css', 'position', 'relative');
        cy.get('.hero-media').should('have.css', 'padding', '0px');
        cy.get('.hero-media').should('have.css', 'margin', '0px 224px');
        cy.get('.hero-media').should('have.css', 'z-index', tokens.zIndex.content);
        cy.get('.hero-media').should('have.css', 'width', '1440px');
        cy.get('.hero-media').should('have.css', 'max-width', '1440px');
        cy.get('.hero-media').should('have.css', 'border-radius', tokens.borderRadius.normal);
        cy.get('.hero-media').should('have.css', 'overflow', 'hidden');

        cy.get('.hero-media .hero-media__media').should('have.css', 'aspect-ratio', tokens.aspectRatio.threeToOne);
        cy.get('.hero-media .hero-media__media').should('have.css', 'object-fit', 'cover');
        cy.get('.hero-media .hero-media__media').should('have.css', 'width', '1440px');
        cy.get('.hero-media .hero-media__media').should('have.css', 'height', '480px');

        cy.get('.hero-media .hero-media__title').should('have.css', 'position', 'absolute');
        cy.get('.hero-media .hero-media__title').should('have.css', 'top', '240px');
        cy.get('.hero-media .hero-media__title').should('have.css', 'left', '720px');
        cy.get('.hero-media .hero-media__title').should('have.css', 'font-family', tokens.type.fontFamily.headline);
        cy.get('.hero-media .hero-media__title').should('have.css', 'font-size', tokens.type.size.xl);
        cy.get('.hero-media .hero-media__title').should('have.css', 'right', '447.867px');
        cy.get('.hero-media .hero-media__title').should('have.css', 'transform', 'matrix(1, 0, 0, 1, -136, -36)');
        cy.get('.hero-media .hero-media__title').should('have.css', 'margin', '0px');
        cy.get('.hero-media .hero-media__title').should('have.css', 'color', colors.colorBg);
        cy.get('.hero-media .hero-media__title').should('have.css', 'padding', `${tokens.spacing.normal} ${tokens.spacing.xl}`);
    });
})

describe('hero media - alpha title', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-media--hero-media&args=headerSize:alpha');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct alpha title styles', () => {
        cy.get('.hero-media .hero-media__title').should('have.css', 'font-family', tokens.type.fontFamily.headline);
        cy.get('.hero-media .hero-media__title').should('have.css', 'font-size', tokens.type.size.xxxl);
        cy.get('.hero-media .hero-media__title').should('have.css', 'color', colors.colorBg);
    });
})

describe('hero media - beta title', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-media--hero-media&args=headerSize:beta');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct beta title styles', () => {
        cy.get('.hero-media .hero-media__title').should('have.css', 'font-family', tokens.type.fontFamily.headline);
        cy.get('.hero-media .hero-media__title').should('have.css', 'font-size', tokens.type.size.xxl);
        cy.get('.hero-media .hero-media__title').should('have.css', 'color', colors.colorBg);
    });
})

describe('hero media - gamma title', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-media--hero-media&args=headerSize:gamma');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct gamma title styles', () => {
        cy.get('.hero-media .hero-media__title').should('have.css', 'font-family', tokens.type.fontFamily.headline);
        cy.get('.hero-media .hero-media__title').should('have.css', 'font-size', tokens.type.size.xl);
        cy.get('.hero-media .hero-media__title').should('have.css', 'color', colors.colorBg);
    });
})

describe('hero media - delta title', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-media--hero-media&args=headerSize:delta');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct delta title styles', () => {
        cy.get('.hero-media .hero-media__title').should('have.css', 'font-family', tokens.type.fontFamily.headline);
        cy.get('.hero-media .hero-media__title').should('have.css', 'font-size', tokens.type.size.l);
        cy.get('.hero-media .hero-media__title').should('have.css', 'color', colors.colorBg);
    });
})

describe('hero media - epsilon title', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-media--hero-media&args=headerSize:epsilon');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct epsilon title styles', () => {
        cy.get('.hero-media .hero-media__title').should('have.css', 'font-family', tokens.type.fontFamily.headline);
        cy.get('.hero-media .hero-media__title').should('have.css', 'font-size', tokens.type.size.m);
        cy.get('.hero-media .hero-media__title').should('have.css', 'color', colors.colorBg);
    });
})

describe('hero media - omega title', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-media--hero-media&args=headerSize:omega');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct omega title styles', () => {
        cy.get('.hero-media .hero-media__title').should('have.css', 'font-family', tokens.type.fontFamily.headline);
        cy.get('.hero-media .hero-media__title').should('have.css', 'font-size', tokens.type.size.ms);
        cy.get('.hero-media .hero-media__title').should('have.css', 'color', colors.colorBg);
    });
})

describe('hero media - header alignment center', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-media--hero-media&args=headerAlignment:center');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct header center styles', () => {
        cy.get('.hero-media .hero-media__title').should('have.css', 'right', '447.867px');
        cy.get('.hero-media .hero-media__title').should('have.css', 'left', '720px');
    });
})

describe('hero media - header alignment left', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-media--hero-media&args=headerAlignment:left');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct header left styles', () => {
        cy.get('.hero-media .hero-media__title').should('have.css', 'right', '1151.87px');
        cy.get('.hero-media .hero-media__title').should('have.css', 'left', tokens.spacing.normal);
    });
})

describe('hero media - header alignment right', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-media--hero-media&args=headerAlignment:right');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct header right styles', () => {
        cy.get('.hero-media .hero-media__title').should('have.css', 'right', tokens.spacing.normal);
        cy.get('.hero-media .hero-media__title').should('have.css', 'left', '1151.87px');
    });
})

describe('hero media - hover', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-media--hero-media&args=headerAlignment:right');
        // @ts-ignore
        cy.get('body').resetRealHover();
    });

    it('has correct hover styles', () => {
        cy.get('.hero-media .hero-media__title').should('have.css', 'color', colors.colorBg);
        cy.get('.hero-media').realHover();
        cy.get('.hero-media .hero-media__title').should('have.css', 'color', colors.colorPrimary);
    });
})

export {}
