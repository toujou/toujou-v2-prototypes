/// <reference types="cypress" />

const colors = Cypress.env('colors');

describe('chapter [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=variant:default');
    });

    it('has correct class and tag name', () => {
        cy.get('section').should('have.prop', 'tagName').should('eq', 'SECTION');
        cy.get('section').invoke('attr', 'class').should('eq', 'chapter chapter--default');
    });

    it('has correct styles', () => {
        cy.get('.chapter').then((chapter) => {
            expect(chapter).to.have.css('padding-top').equal('48px');
            expect(chapter).to.have.css('padding-bottom').equal('48px');
            expect(chapter).to.have.css('margin').equal('0px');
        });
    });
});

describe('chapter default [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=variant:default');
    });

    it('has correct default styles', () => {
        cy.get('.chapter').then((chapter) => {
            expect(chapter).to.have.css('background-color').equal(colors.colorBg);
        });

        cy.get('.chapter h1').then((h1) => {
            expect(h1).to.have.css('color').equal(colors.colorPrimary);
        });

        cy.get('.chapter p').then((text) => {
            expect(text).to.have.css('color').equal(colors.colorFont);
        });
    });
});

describe('chapter primary [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=variant:primary');
    });

    it('has correct primary styles', () => {
        cy.get('.chapter').then((chapter) => {
            expect(chapter).to.have.css('background-color').equal(colors.colorPrimary);
        });

        cy.get('.chapter h1').then((h1) => {
            expect(h1).to.have.css('color').equal(colors.colorBg);
        });

        cy.get('.chapter p').then((text) => {
            expect(text).to.have.css('color').equal(colors.colorBg);
        });
    });
});

describe('chapter secondary [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=variant:secondary');
    });

    it('has correct primary styles', () => {
        cy.get('.chapter').then((chapter) => {
            expect(chapter).to.have.css('background-color').equal(colors.colorSecondary);
        });

        cy.get('.chapter h1').then((h1) => {
            expect(h1).to.have.css('color').equal(colors.colorBg);
        });

        cy.get('.chapter p').then((text) => {
            expect(text).to.have.css('color').equal(colors.colorBg);
        });
    });
});

describe('chapter inverted [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=variant:inverted');
    });

    it('has correct primary styles', () => {
        cy.get('.chapter').then((chapter) => {
            expect(chapter).to.have.css('background-color').equal(colors.colorFont);
        });

        cy.get('.chapter h1').then((h1) => {
            expect(h1).to.have.css('color').equal(colors.colorBg);
        });

        cy.get('.chapter p').then((text) => {
            expect(text).to.have.css('color').equal(colors.colorBg);
        });
    });
});

describe('chapter none [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=variant:none');
    });

    it('has correct primary styles', () => {
        cy.get('.chapter').then((chapter) => {
            expect(chapter).to.have.css('background-color').equal(colors.colorBg);
        });

        cy.get('.chapter h1').then((h1) => {
            expect(h1).to.have.css('color').equal(colors.colorPrimary);
        });

        cy.get('.chapter p').then((text) => {
            expect(text).to.have.css('color').equal(colors.colorFont);
        });
    });
});

describe('chapter white [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=variant:white');
    });

    it('has correct primary styles', () => {
        cy.get('.chapter').then((chapter) => {
            expect(chapter).to.have.css('background-color').equal(colors.colorBg);
        });

        cy.get('.chapter h1').then((h1) => {
            expect(h1).to.have.css('color').equal(colors.colorPrimary);
        });

        cy.get('.chapter p').then((text) => {
            expect(text).to.have.css('color').equal(colors.colorFont);
        });
    });
});

describe('chapter background [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=variant:background');
    });

    it('has correct primary styles', () => {
        cy.get('.chapter').then((chapter) => {
            expect(chapter).to.have.css('background-color').equal(colors.colorFontO10);
        });

        cy.get('.chapter h1').then((h1) => {
            expect(h1).to.have.css('color').equal(colors.colorPrimary);
        });

        cy.get('.chapter p').then((text) => {
            expect(text).to.have.css('color').equal(colors.colorFont);
        });
    });
});

describe('chapter - no padding [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=hasNoPaddingAttr:true');
    });

    it('has correct attributes', () => {
        cy.get('.chapter').invoke('attr', 'no-padding').should('exist');
    });

    it('has correct primary styles', () => {
        cy.get('.chapter').then((chapter) => {
            expect(chapter).to.have.css('padding').equal('0px');
        });
    });
});

export {}
