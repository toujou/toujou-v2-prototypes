/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('rating-stars [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-ratingstars--rating-stars');
    });

    it('has correct class and tag name', () => {
        cy.get('.rating-stars').should('have.prop', 'tagName').should('eq', 'TOUJOU-RATING-STARS');
        cy.get('.rating-stars').invoke('attr', 'class').should('eq', 'rating-stars');
    });

    it('has correct attributes', () => {
        cy.get('.rating-stars').invoke('attr', 'rating-entity').should('eq', '★');
        cy.get('.rating-stars').invoke('attr', 'rating-total').should('eq', '5');
        cy.get('.rating-stars').invoke('attr', 'rating-value').should('eq', '4.4');
        cy.get('.rating-stars').invoke('attr', 'rating-entity-size').should('eq', 'xl');
        cy.get('.rating-stars').invoke('attr', 'style').should('eq', '--rating-stars-percentage: 11.999999999999986%;');
    });

    it('has correct styles', () => {
        cy.get('.rating-stars').should('have.css', 'font-size', '32px');
        cy.get('.rating-stars').should('have.css', 'letter-spacing', '-6.4px');
        cy.get('.rating-stars').should('have.css', 'color', colors.colorGold);
        cy.get('.rating-stars').shadow().children('.entity').should('have.length', 5);
        cy.get('.rating-stars').shadow().get('.entity:first-child').should('have.have.css', 'position', 'relative');
        cy.get('.rating-stars').shadow().get('.entity:first-child').should('have.have.css', 'left', '-3.2px');
        cy.get('.rating-stars').shadow().get('.entity:first-child').should('have.have.css', 'font-size', tokens.type.size.xl);
        cy.get('.rating-stars').shadow().get('.overlay').should('exist');
        cy.get('.rating-stars').shadow().get('.overlay').should('have.have.css', 'position', 'absolute');
        cy.get('.rating-stars').shadow().get('.overlay').should('have.have.css', 'top', '0px');
        cy.get('.rating-stars').shadow().get('.overlay').should('have.have.css', 'height', '37px');
        cy.get('.rating-stars').shadow().get('.overlay').should('have.have.css', 'width', '16.125px');
        cy.get('.rating-stars').shadow().get('.overlay').should('have.have.css', 'display', 'block');
        cy.get('.rating-stars').shadow().get('.overlay').should('have.have.css', 'background-color', 'rgba(0, 0, 0, 0)');
        cy.get('.rating-stars').shadow().get('.overlay').should('have.have.css', 'backdrop-filter', 'grayscale(1)');
        // @ts-ignore
        cy.get('.rating-stars').shadow().get('.entity:first-child').shouldHaveTrimmedText('★');
    });
})

describe('rating-stars - s [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-ratingstars--rating-stars&args=size:s');
    });

    it('has correct attributes', () => {
        cy.get('.rating-stars').invoke('attr', 'rating-entity-size').should('eq', 's');
    });

    it('has correct styles', () => {
        cy.get('.rating-stars').should('have.css', 'font-size', tokens.type.size.s);
        cy.get('.rating-stars').should('have.css', 'letter-spacing', '-2.8px');
        cy.get('.rating-stars').shadow().get('.entity:first-child').should('have.have.css', 'font-size', tokens.type.size.s);
    });
})

describe('rating-stars - normal [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-ratingstars--rating-stars&args=size:normal');
    });

    it('has correct attributes', () => {
        cy.get('.rating-stars').invoke('attr', 'rating-entity-size').should('eq', 'normal');
    });

    it('has correct styles', () => {
        cy.get('.rating-stars').should('have.css', 'font-size', tokens.type.size.normal);
        cy.get('.rating-stars').should('have.css', 'letter-spacing', '-3.2px');
        cy.get('.rating-stars').shadow().get('.entity:first-child').should('have.have.css', 'font-size', tokens.type.size.normal);
    });
})

describe('rating-stars - m [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-ratingstars--rating-stars&args=size:m');
    });

    it('has correct attributes', () => {
        cy.get('.rating-stars').invoke('attr', 'rating-entity-size').should('eq', 'm');
    });

    it('has correct styles', () => {
        cy.get('.rating-stars').should('have.css', 'font-size', tokens.type.size.m);
        cy.get('.rating-stars').should('have.css', 'letter-spacing', '-4.8px');
        cy.get('.rating-stars').shadow().get('.entity:first-child').should('have.have.css', 'font-size', tokens.type.size.m);
    });
})

describe('rating-stars - l [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-ratingstars--rating-stars&args=size:l');
    });

    it('has correct attributes', () => {
        cy.get('.rating-stars').invoke('attr', 'rating-entity-size').should('eq', 'l');
    });

    it('has correct styles', () => {
        cy.get('.rating-stars').should('have.css', 'font-size', tokens.type.size.l);
        cy.get('.rating-stars').should('have.css', 'letter-spacing', '-5.6px');
        cy.get('.rating-stars').shadow().get('.entity:first-child').should('have.have.css', 'font-size', tokens.type.size.l);
    });
})

describe('rating-stars - xl [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-ratingstars--rating-stars&args=size:xl');
    });

    it('has correct attributes', () => {
        cy.get('.rating-stars').invoke('attr', 'rating-entity-size').should('eq', 'xl');
    });

    it('has correct styles', () => {
        cy.get('.rating-stars').should('have.css', 'font-size', tokens.type.size.xl);
        cy.get('.rating-stars').should('have.css', 'letter-spacing', '-6.4px');
        cy.get('.rating-stars').shadow().get('.entity:first-child').should('have.have.css', 'font-size', tokens.type.size.xl);
    });
})

describe('rating-stars - xxl [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-ratingstars--rating-stars&args=size:xxl');
    });

    it('has correct attributes', () => {
        cy.get('.rating-stars').invoke('attr', 'rating-entity-size').should('eq', 'xxl');
    });

    it('has correct styles', () => {
        cy.get('.rating-stars').should('have.css', 'font-size', tokens.type.size.xxl);
        cy.get('.rating-stars').should('have.css', 'letter-spacing', '-8px');
        cy.get('.rating-stars').shadow().get('.entity:first-child').should('have.have.css', 'font-size', tokens.type.size.xxl);
    });
})

describe('rating-stars - can set rating 3.5 [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-ratingstars--rating-stars&args=rating:3.5');
    });

    it('has correct attributes', () => {
        cy.get('.rating-stars').invoke('attr', 'rating-value').should('eq', '3.5');
    });

    it('has correct styles', () => {
        cy.get('.rating-stars').shadow().get('.overlay').should('have.have.css', 'width', '40.3203125px');
    });
})

describe('rating-stars - can set rating 1.2 [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-ratingstars--rating-stars&args=rating:1.2');
    });

    it('has correct attributes', () => {
        cy.get('.rating-stars').invoke('attr', 'rating-value').should('eq', '1.2');
    });

    it('has correct styles', () => {
        cy.get('.rating-stars').shadow().get('.overlay').should('have.have.css', 'width', '102.1484375px');
    });
})

describe('rating-stars - can set rating 5 [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-ratingstars--rating-stars&args=rating:5');
    });

    it('has correct attributes', () => {
        cy.get('.rating-stars').invoke('attr', 'rating-value').should('eq', '5');
    });

    it('has correct styles', () => {
        cy.get('.rating-stars').shadow().get('.overlay').should('have.have.css', 'width', '0px');
    });
})

describe('rating-stars - can set rating total 8 with rating 6 [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-ratingstars--rating-stars');
    });

    it('has correct styles', () => {
        cy.get('.rating-stars').then((e) => {
            e[0].setAttribute('rating-total', '8');
            e[0].setAttribute('rating-value', '6');
        });
        cy.get('.rating-stars').shadow().get('.overlay').should('have.have.css', 'width', '54px');
    });
})

describe('rating-stars - can set rating total 3 with rating 2.4 [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-ratingstars--rating-stars');
    });

    it('has correct styles', () => {
        cy.get('.rating-stars').then((e) => {
            e[0].setAttribute('rating-total', '3');
            e[0].setAttribute('rating-value', '2.4');
        });
        cy.get('.rating-stars').shadow().get('.overlay').should('have.have.css', 'width', '16px');
    });
})

describe('rating-stars - can set rating total 10 with rating 7.6 [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-ratingstars--rating-stars');
    });

    it('has correct styles', () => {
        cy.get('.rating-stars').then((e) => {
            e[0].setAttribute('rating-total', '10');
            e[0].setAttribute('rating-value', '7.6');
        });
        cy.get('.rating-stars').shadow().get('.overlay').should('have.have.css', 'width', '64.8984375px');
    });
})

describe('rating-stars - can set entity  [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-ratingstars--rating-stars');
    });

    it('has correct styles', () => {
        cy.get('.rating-stars').then((e) => {
            e[0].setAttribute('rating-entity', '♥');
            e[0].setAttribute('rating-value', '4.5');
        });
        // @ts-ignore
        cy.get('.rating-stars').shadow().get('.entity:first-child').shouldHaveTrimmedText('♥');
    });
})

export {}

