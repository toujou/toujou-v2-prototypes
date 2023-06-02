/// <reference types="cypress" />

const colors = Cypress.env('colors');

describe('teaser [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-teaser--teaser');
    });

    it('has correct class and tag name', () => {
        cy.get('.teaser').should('have.prop', 'tagName').should('eq', 'TOUJOU-TEASER');
        cy.get('.teaser').invoke('attr', 'class').should('eq', 'teaser');
    });

    it('has correct attributes', () => {
        cy.get('.teaser').invoke('attr', 'teaser-type').should('eq', 'cinema');
        cy.get('.teaser').invoke('attr', 'image-width').should('eq', '50');
        cy.get('.teaser').invoke('attr', 'image-side').should('eq', 'left');
        cy.get('.teaser').invoke('attr', 'element-design').should('eq', 'default');
    });

    it('has correct styles', () => {
        cy.get('.teaser').should('have.css', 'position', 'relative');
        cy.get('.teaser').should('have.css', 'display', 'grid');
        cy.get('.teaser').should('have.css', 'grid-template-columns', '311px');
        cy.get('.teaser').should('have.css', 'grid-auto-flow', 'dense');
        cy.get('.teaser').should('have.css', 'gap', '16px');
        cy.get('.teaser').should('have.css', 'width', '311px');
        cy.get('.teaser').should('have.css', 'max-width', '1440px');
        cy.get('.teaser').should('have.css', 'margin', '0px 16px');
        cy.get('.teaser').should('have.css', 'border-radius', '4px');
        cy.get('.teaser').should('have.css', 'background-color', colors.colorBg);
        cy.get('.teaser').should('have.css', 'z-index', '1');
        cy.get('.teaser').should('have.css', 'overflow', 'hidden');

        cy.get('.teaser .teaser__figure').should('exist');
        cy.get('.teaser .teaser__figure').should('have.css', 'grid-column', '1 / auto');
        cy.get('.teaser .teaser__figure').should('have.css', 'border-radius', '4px');
        cy.get('.teaser .teaser__figure').should('have.css', 'overflow', 'hidden');
        cy.get('.teaser .teaser__figure').should('have.css', 'position', 'relative');
        cy.get('.teaser .teaser__figure').should('have.css', 'width', '311px');

        cy.get('.teaser .teaser__image').should('have.css', 'aspect-ratio', '1.618 / 1');
        cy.get('.teaser .teaser__image').should('have.css', 'object-fit', 'cover');
        cy.get('.teaser .teaser__image').should('have.css', 'width', '311px');
        cy.get('.teaser .teaser__image').should('have.css', 'height', '192.2109375px');

        cy.get('.teaser .media-info').should('exist');

        cy.get('.teaser .teaser__content').should('have.css', 'padding', '0px');
        cy.get('.teaser .teaser__content').should('have.css', 'width', '311px');
    });
})

describe('teaser - image 33% left [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-teaser--teaser&args=imageWidth:33');
    });

    it('has correct attributes', () => {
        cy.get('.teaser').invoke('attr', 'teaser-type').should('eq', 'cinema');
        cy.get('.teaser').invoke('attr', 'image-width').should('eq', '33');
        cy.get('.teaser').invoke('attr', 'image-side').should('eq', 'left');
    });

    it('has correct styles', () => {
        cy.get('.teaser').should('have.css', 'grid-template-columns', '311px');
        cy.get('.teaser .teaser__figure').should('have.css', 'grid-column', '1 / auto');
        cy.get('.teaser .teaser__figure').should('have.css', 'width', '311px');
        cy.get('.teaser .teaser__image').should('have.css', 'width', '311px');
        cy.get('.teaser .teaser__image').should('have.css', 'height', '192.2109375px');
        cy.get('.teaser .teaser__content').should('have.css', 'width', '311px');
    });
})

describe('teaser - image 33% right [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-teaser--teaser&args=imageWidth:33;imageSide:right');
    });

    it('has correct attributes', () => {
        cy.get('.teaser').invoke('attr', 'teaser-type').should('eq', 'cinema');
        cy.get('.teaser').invoke('attr', 'image-width').should('eq', '33');
        cy.get('.teaser').invoke('attr', 'image-side').should('eq', 'right');
    });

    it('has correct styles', () => {
        cy.get('.teaser').should('have.css', 'grid-template-columns', '311px');
        cy.get('.teaser .teaser__figure').should('have.css', 'grid-column', '1 / auto');
        cy.get('.teaser .teaser__figure').should('have.css', 'width', '311px');
        cy.get('.teaser .teaser__image').should('have.css', 'width', '311px');
        cy.get('.teaser .teaser__image').should('have.css', 'height', '192.2109375px');
        cy.get('.teaser .teaser__content').should('have.css', 'width', '311px');
    });
})

describe('teaser - image 66% left [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-teaser--teaser&args=imageWidth:66;imageSide:left');
    });

    it('has correct attributes', () => {
        cy.get('.teaser').invoke('attr', 'teaser-type').should('eq', 'cinema');
        cy.get('.teaser').invoke('attr', 'image-width').should('eq', '66');
        cy.get('.teaser').invoke('attr', 'image-side').should('eq', 'left');
    });

    it('has correct styles', () => {
        cy.get('.teaser').should('have.css', 'grid-template-columns', '311px');
        cy.get('.teaser .teaser__figure').should('have.css', 'grid-column', '1 / auto');
        cy.get('.teaser .teaser__figure').should('have.css', 'width', '311px');
        cy.get('.teaser .teaser__image').should('have.css', 'width', '311px');
        cy.get('.teaser .teaser__image').should('have.css', 'height', '192.2109375px');
        cy.get('.teaser .teaser__content').should('have.css', 'width', '311px');
    });
})

describe('teaser - image 66% right [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-teaser--teaser&args=imageWidth:66;imageSide:right');
    });

    it('has correct attributes', () => {
        cy.get('.teaser').invoke('attr', 'teaser-type').should('eq', 'cinema');
        cy.get('.teaser').invoke('attr', 'image-width').should('eq', '66');
        cy.get('.teaser').invoke('attr', 'image-side').should('eq', 'right');
    });

    it('has correct styles', () => {
        cy.get('.teaser').should('have.css', 'grid-template-columns', '311px');
        cy.get('.teaser .teaser__figure').should('have.css', 'grid-column', '1 / auto');
        cy.get('.teaser .teaser__figure').should('have.css', 'width', '311px');
        cy.get('.teaser .teaser__image').should('have.css', 'width', '311px');
        cy.get('.teaser .teaser__image').should('have.css', 'height', '192.2109375px');
        cy.get('.teaser .teaser__content').should('have.css', 'width', '311px');
    });
})

describe('teaser - primary [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-teaser--teaser&args=elementDesign:primary');
    });

    it('has correct attributes', () => {
        cy.get('.teaser').invoke('attr', 'teaser-type').should('eq', 'cinema');
        cy.get('.teaser').invoke('attr', 'element-design').should('eq', 'primary');
    });

    it('has correct styles', () => {
        cy.get('.teaser').should('have.css', 'background-color', colors.colorPrimary);
        cy.get('.teaser .teaser__content h3').should('have.css', 'color', colors.colorBg);
        cy.get('.teaser .teaser__content p').should('have.css', 'color', colors.colorBg);
    });
})

describe('teaser - secondary [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-teaser--teaser&args=elementDesign:secondary');
    });

    it('has correct attributes', () => {
        cy.get('.teaser').invoke('attr', 'teaser-type').should('eq', 'cinema');
        cy.get('.teaser').invoke('attr', 'element-design').should('eq', 'secondary');
    });

    it('has correct styles', () => {
        cy.get('.teaser').should('have.css', 'background-color', colors.colorSecondary);
        cy.get('.teaser .teaser__content h3').should('have.css', 'color', colors.colorBg);
        cy.get('.teaser .teaser__content p').should('have.css', 'color', colors.colorBg);
    });
})

describe('teaser - inverted [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-teaser--teaser&args=elementDesign:inverted');
    });

    it('has correct attributes', () => {
        cy.get('.teaser').invoke('attr', 'teaser-type').should('eq', 'cinema');
        cy.get('.teaser').invoke('attr', 'element-design').should('eq', 'inverted');
    });

    it('has correct styles', () => {
        cy.get('.teaser').should('have.css', 'background-color', colors.colorFont);
        cy.get('.teaser .teaser__content h3').should('have.css', 'color', colors.colorBg);
        cy.get('.teaser .teaser__content p').should('have.css', 'color', colors.colorBg);
    });
})

describe('teaser - media [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-teaser--teaser&args=teaserType:media');
    });

    it('has correct attributes', () => {
        cy.get('.teaser').invoke('attr', 'teaser-type').should('eq', 'media');
    });

    it('has correct styles', () => {
        cy.get('.teaser .teaser__figure').should('have.css', 'width', '296px');
        cy.get('.teaser .teaser__image').should('have.css', 'width', '296px');
        cy.get('.teaser .teaser__image').should('have.css', 'height', '427.8125px');
        cy.get('.teaser .teaser__content').should('have.css', 'width', '296px');
    });
})

export {}
