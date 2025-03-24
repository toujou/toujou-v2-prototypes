/// <reference types="cypress" />

const mobileViewportHeight = Cypress.env('mobileViewportHeight');
const mobileViewportWidth = Cypress.env('mobileViewportWidth');

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('header [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-header--header');
        cy.wait(300)
    });

    it('has correct default attributes', () => {
        cy.get('.header').should('exist');
        cy.get('.header').invoke('prop', 'tagName').should('eq', 'HEADER');
        cy.get('.header').invoke('attr', 'class').should('eq', 'header');
        cy.get('.header').invoke('attr', 'image-height').should('eq', 'default');
    });
});

describe('header - image-height [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-header--header');
    });


    it('has correct default height', () => {
        const flooredEightyPercentHeight = Math.floor(mobileViewportHeight / 100 * 80);

        cy.get('.header')
            .invoke('height')
            .then((headerHeight) => {
                const flooredHeight = Math.floor(headerHeight!);
                expect(flooredHeight).to.eq(flooredEightyPercentHeight);
            })
    });

    it('has correct full height', () => {
        cy.get('.header')
            .then((e) => {
            e[0].setAttribute('image-height', 'full');
            cy.get('.header').should('have.css', 'height', `${mobileViewportHeight}px`);
        });
    });

    it('has correct half height', () => {
        cy.get('.header').then((e) => {
            e[0].setAttribute('image-height', 'half');
        });
        const halfHeight = mobileViewportHeight / 2;
        cy.get('.header').should('have.css', 'height', `${halfHeight}px`);
    });

    it('has correct quarter height', () => {
        cy.get('.header').then((e) => {
            e[0].setAttribute('image-height', 'quarter');
        });
        const quarterHeight = mobileViewportHeight / 4;
        cy.get('.header').should('have.css', 'height', `${quarterHeight}px`);
    });
});

describe('header - content size [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-header--header');
    });

    it('has correct full width', () => {
        cy.get('.header-content').then((e) => {
            e[0].setAttribute('content-size', 'full');
        });
        const contentPadding = 16;
        const fullWidth = mobileViewportWidth - (contentPadding * 2);
        cy.get('.header-content').should('have.css', 'width', `${fullWidth}px`);
    });

    it('has correct half width', () => {
        const contentPadding = 16;
        const contentWidth = mobileViewportWidth - (contentPadding * 2);
        cy.get('.header-content').should('have.css', 'width', `${contentWidth}px`);
    });

    it('has correct third width', () => {
        cy.get('.header-content').then((e) => {
            e[0].setAttribute('content-size', 'third');
            const contentPadding = 16;
            const contentWidth = mobileViewportWidth - (contentPadding * 2);
            const headerContentWidth = Math.ceil(parseFloat(getComputedStyle(e[0]).width));
            expect(headerContentWidth).to.equal(contentWidth);
        });
    });

    it('has correct half width', () => {
        cy.get('.header-content').then((e) => {
            e[0].setAttribute('content-size', 'quarter');
        });
        const contentPadding = 16;
        const contentWidth = mobileViewportWidth - (contentPadding * 2);
        cy.get('.header-content').should('have.css', 'width', `${contentWidth}px`);
    });
});

describe('header - vertical position [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-header--header');
    });

    it('has correct "mid" vertical position', () => {
        cy.get('.header')
            .then(() => {
                cy.get('.header-content').should('have.css', 'top', `266.797px`);
            });
    });

    it('has correct "top" vertical position', () => {
        cy.get('.header-content').then((e) => {
            e[0].setAttribute('vertical-position', 'top');
        });
        cy.get('.header-content').should('have.css', 'top', tokens.spacing.xxl);
    });

    it('has correct "bottom" vertical position', () => {
        cy.get('.header-content').then((e) => {
            e[0].setAttribute('vertical-position', 'bottom');
        });
        cy.get('.header-content').should('have.css', 'bottom', tokens.spacing.xxl);
    });
});

describe('header - horizontal position [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-header--header');
    });

    it('has correct "center" horizontal position', () => {
        cy
            .get('.header').then((e) => {
                const headerWidth = parseInt(getComputedStyle(e[0]).width);
                return headerWidth;
            })
            .then((headerWidth) => {
                cy.get('.header-content').should('have.css', 'left', `${headerWidth / 2}px`);
            })
    });

    it('has correct "left" horizontal position', () => {
        cy.get('.header-content').then((e) => {
            e[0].setAttribute('horizontal-position', 'left');
        });
        cy.get('.header-content').should('have.css', 'left', tokens.spacing.normal);
    });

    it('has correct "right" horizontal position', () => {
        cy.get('.header-content').then((e) => {
            e[0].setAttribute('horizontal-position', 'right');
        });
        cy.get('.header-content').should('have.css', 'right', tokens.spacing.normal);
    });
});

describe('header - content alignment [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-header--header');
    });

    it('has correct default content alignment', () => {
        cy.get('.header-content__title').should('have.css', 'text-align', `center`);
        cy.get('.header-content__text').should('have.css', 'text-align', `center`);
        cy.get('.header-content__cta').should('not.have.css', 'margin-right', `0`);
        cy.get('.header-content__cta').should('not.have.css', 'margin-left', `0`);
    });

    it('can align content center', () => {
        cy.get('.header-content').then((e) => {
            e[0].setAttribute('text-alignment', 'center');
        });
        cy.get('.header-content__title').should('have.css', 'text-align', `center`);
        cy.get('.header-content__text').should('have.css', 'text-align', `center`);
        cy.get('.header-content__cta').should('not.have.css', 'margin-right', `0`);
        cy.get('.header-content__cta').should('not.have.css', 'margin-left', `0`);
    });

    it('can align content left', () => {
        cy.get('.header-content').then((e) => {
            e[0].setAttribute('text-alignment', 'left');
        });
        cy.get('.header-content__title').should('have.css', 'text-align', `left`);
        cy.get('.header-content__text').should('have.css', 'text-align', `left`);
        cy.get('.header-content__cta').should('not.have.css', 'margin-right', `0`);
        cy.get('.header-content__cta').should('have.css', 'margin-left', `0px`);
    });

    it('can align content right', () => {
        cy.get('.header-content').then((e) => {
            e[0].setAttribute('text-alignment', 'right');
        });
        cy.get('.header-content__title').should('have.css', 'text-align', `right`);
        cy.get('.header-content__text').should('have.css', 'text-align', `right`);
        cy.get('.header-content__cta').should('have.css', 'margin-right', `0px`);
        cy.get('.header-content__cta').should('not.have.css', 'margin-left', `0`);
    });
});

describe('header - accent color [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-header--header');
        // @ts-ignore
        cy.get('.header').resetRealHover();
    });

    it('has correct default headline accent color', () => {
        cy.get('.header-content__title').should('have.css', 'color', colors.colorPrimary);
    });

    it('has correct primary headline accent color', () => {
        cy.get('.header-content').then((e) => {
            e[0].setAttribute('accent-color', 'primary');
        });
        cy.get('.header-content__title').should('have.css', 'color', colors.colorPrimary);
    });

    it('has correct secondary headline accent color', () => {
        cy.get('.header-content').then((e) => {
            e[0].setAttribute('accent-color', 'secondary');
        });
        cy.get('.header-content__title').should('have.css', 'color', colors.colorSecondary);
    });

    it('has correct grey headline accent color', () => {
        cy.get('.header-content').then((e) => {
            e[0].setAttribute('accent-color', 'font');
        });
        cy.get('.header-content__title').should('have.css', 'color', colors.colorFont);
    });

    it('has correct default button variant color', () => {
        cy.get('.header-content__cta').should('have.css', 'background-color', colors.colorPrimary);
        cy.get('.header-content__cta').should('have.css', 'color', colors.colorBg);
        // @ts-ignore
        cy.get('.header-content__cta').realHover();
        cy.get('.header-content__cta').should('have.css', 'background-color', colors.colorPrimaryDark);
        cy.get('.header-content__cta').should('have.css', 'color', colors.colorBg);
    });

    it('has correct primary button variant color', () => {
        cy.get('.header-content__cta').should('have.css', 'background-color', colors.colorPrimary);
        cy.get('.header-content__cta').should('have.css', 'color', colors.colorBg);
        // @ts-ignore
        cy.get('.header-content__cta').realHover();
        cy.get('.header-content__cta').should('have.css', 'background-color', colors.colorPrimaryDark);
        cy.get('.header-content__cta').should('have.css', 'color', colors.colorBg);
    });

    it('has correct secondary button variant color', () => {
        cy.get('.header-content__cta').then((e) => {
            e[0].setAttribute('button-variant', 'secondary');
        });
        cy.get('.header-content__cta').should('have.css', 'background-color', colors.colorSecondary);
        cy.get('.header-content__cta').should('have.css', 'color', colors.colorBg);
        // @ts-ignore
        cy.get('.header-content__cta').realHover();
        cy.get('.header-content__cta').should('have.css', 'background-color', colors.colorSecondaryDark);
        cy.get('.header-content__cta').should('have.css', 'color', colors.colorBg);
    });

    it('has correct font button variant color', () => {
        cy.get('.header-content__cta').then((e) => {
            e[0].setAttribute('button-variant', 'font');
        });
        cy.get('.header-content__cta').should('have.css', 'background-color', colors.colorFont);
        cy.get('.header-content__cta').should('have.css', 'color', colors.colorBg);
        // @ts-ignore
        cy.get('.header-content__cta').realHover();
        cy.get('.header-content__cta').should('have.css', 'background-color', colors.colorFontDark);
        cy.get('.header-content__cta').should('have.css', 'color', colors.colorBg);
    });
});

export {}
