/// <reference types="cypress" />

const desktopViewportHeight = Cypress.env('desktopViewportHeight');
const colors = Cypress.env('colors');

describe('header', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-header--header');
    });

    it('has correct default attributes', () => {
        cy.get('.header').should('exist');
        cy.get('.header').invoke('prop', 'tagName').should('eq', 'HEADER');
        cy.get('.header').invoke('attr', 'class').should('eq', 'header');
        cy.get('.header').invoke('attr', 'image-height').should('eq', 'default');
    });
});

describe('header - image-height', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-header--header');
    });

    it('has correct default height', () => {
        const eightyPercentHeight = desktopViewportHeight / 100 * 80;
        cy.get('.header').should('have.css', 'height', `${eightyPercentHeight}px`);
    });

    it('has correct full height', () => {
        cy.get('.header').then((e) => {
            e[0].setAttribute('image-height', 'full');
            cy.get('.header').should('have.css', 'height', `${desktopViewportHeight}px`);
        });
    });

    it('has correct half height', () => {
        cy.get('.header').then((e) => {
            e[0].setAttribute('image-height', 'half');
        });
        const halfHeight = desktopViewportHeight / 2;
        cy.get('.header').should('have.css', 'height', `${halfHeight}px`);
    });

    it('has correct quarter height', () => {
        cy.get('.header').then((e) => {
            e[0].setAttribute('image-height', 'quarter');
        });
        cy.get('.header').should('have.css', 'height', `364px`);
    });
});

describe('header - image-height with long content', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-header--header&args=showExtraLongContent:!true');
    });

    it('has correct default height', () => {
        const eightyPercentHeight = desktopViewportHeight / 100 * 80;
        cy.get('.header').should('have.css', 'height', `${eightyPercentHeight}px`);
    });

    it('has correct full height', () => {
        cy.get('.header').then((e) => {
            e[0].setAttribute('image-height', 'full');
            cy.get('.header').should('have.css', 'height', `${desktopViewportHeight}px`);
        });
    });

    it('has correct half height', () => {
        cy.get('.header').then((e) => {
            e[0].setAttribute('image-height', 'half');
        });
        cy.get('.header').should('have.css', 'height', `652px`);
    });

    it('has correct quarter height', () => {
        cy.get('.header').then((e) => {
            e[0].setAttribute('image-height', 'quarter');
        });
        cy.get('.header').should('have.css', 'height', `652px`);
    });
});

describe('header - content size', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-header--header');
    });

    it('has correct full width', () => {
        cy.get('.header-content').then((e) => {
            e[0].setAttribute('content-size', 'full');
        });
        cy.get('.header-content').should('have.css', 'width', `1728px`);
    });

    it('has correct half width', () => {
        cy.get('.header-content').should('have.css', 'width', `896px`);
    });

    it('has correct half width', () => {
        cy.get('.header-content').then((e) => {
            e[0].setAttribute('content-size', 'quarter');
        });
        cy.get('.header-content').should('have.css', 'width', `448px`);
    });
});

describe('header - "mid" vertical position', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-header--header');
    });

    it('has correct "mid" vertical position', () => {
        cy.get('.header-content')
            .then((el) => {
                const rect = el[0].getBoundingClientRect();
                expect(rect.top).to.be.closeTo(314, 1);
            });
    });
});

describe('header - "top" vertical position', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-header--header&args=headerVerticalPos:top');
    });

    it('has correct "mid" vertical position', () => {
        cy.get('.header-content')
            .then((el) => {
                const rect = el[0].getBoundingClientRect();
                expect(rect.top).to.be.closeTo(64, 1);
            });
    });
});

describe('header - "bottom" vertical position', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-header--header&args=headerVerticalPos:bottom');
    });

    it('has correct "mid" vertical position', () => {
        cy.get('.header-content')
            .then((el) => {
                const rect = el[0].getBoundingClientRect();
                expect(rect.top).to.be.closeTo(565, 1);
            });
    });
});

describe('header - "left" horizontal position', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-header--header&args=headerHorizontalPos:left');
    });

    it('has correct "center" horizontal position', () => {
        cy.get('.header-content')
            .then((el) => {
                const rect = el[0].getBoundingClientRect();
                expect(rect.left).to.be.closeTo(64, 1);
            });
    });
});

describe('header - "center" horizontal position', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-header--header');
    });

    it('has correct "center" horizontal position', () => {
        cy.get('.header-content')
            .then((el) => {
                const rect = el[0].getBoundingClientRect();
                expect(rect.left).to.be.closeTo(512, 1);
            });
    });
});

describe('header - "right" horizontal position', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-header--header&args=headerHorizontalPos:right');
    });

    it('has correct "center" horizontal position', () => {
        cy.get('.header-content')
            .then((el) => {
                const rect = el[0].getBoundingClientRect();
                expect(rect.left).to.be.closeTo(960, 1);
            });
    });
});

describe('header - content alignment', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-header--header');
    });

    it('has correct default content alignment', () => {
        cy.get('.header-content__title').should('have.css', 'text-align', `center`);
        cy.get('.header-content__cta').should('not.have.css', 'margin-right', `0`);
        cy.get('.header-content__cta').should('not.have.css', 'margin-left', `0`);
    });

    it('can align content center', () => {
        cy.get('.header-content').then((e) => {
            e[0].setAttribute('text-alignment', 'center');
        });
        cy.get('.header-content__title').should('have.css', 'text-align', `center`);
        cy.get('.header-content__cta').should('not.have.css', 'margin-right', `0`);
        cy.get('.header-content__cta').should('not.have.css', 'margin-left', `0`);
    });

    it('can align content left', () => {
        cy.get('.header-content').then((e) => {
            e[0].setAttribute('text-alignment', 'left');
        });
        cy.get('.header-content__title').should('have.css', 'text-align', `left`);
        cy.get('.header-content__cta').should('not.have.css', 'margin-right', `0`);
        cy.get('.header-content__cta').should('have.css', 'margin-left', `0px`);
    });

    it('can align content right', () => {
        cy.get('.header-content').then((e) => {
            e[0].setAttribute('text-alignment', 'right');
        });
        cy.get('.header-content__title').should('have.css', 'text-align', `right`);
        cy.get('.header-content__cta').should('have.css', 'margin-right', `0px`);
        cy.get('.header-content__cta').should('not.have.css', 'margin-left', `0`);
    });
});

describe('header - accent color', () => {
    beforeEach(() => {
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
