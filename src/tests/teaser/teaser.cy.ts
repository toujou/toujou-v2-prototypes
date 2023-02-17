/// <reference types="cypress" />

const colors = Cypress.env('colors');

describe('teaser', () => {
    beforeEach(() => {
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
        cy.get('.teaser').should('have.css', 'grid-template-columns', '696px 696px');
        cy.get('.teaser').should('have.css', 'grid-auto-flow', 'dense');
        cy.get('.teaser').should('have.css', 'gap', '48px');
        cy.get('.teaser').should('have.css', 'width', '1440px');
        cy.get('.teaser').should('have.css', 'max-width', '1440px');
        cy.get('.teaser').should('have.css', 'margin', '0px 224px');
        cy.get('.teaser').should('have.css', 'border-radius', '4px');
        cy.get('.teaser').should('have.css', 'background-color', colors.colorBg);
        cy.get('.teaser').should('have.css', 'z-index', '1');
        cy.get('.teaser').should('have.css', 'overflow', 'hidden');

        cy.get('.teaser .teaser__figure').should('exist');
        cy.get('.teaser .teaser__figure').should('have.css', 'grid-column', '1 / auto');
        cy.get('.teaser .teaser__figure').should('have.css', 'border-radius', '4px');
        cy.get('.teaser .teaser__figure').should('have.css', 'overflow', 'hidden');
        cy.get('.teaser .teaser__figure').should('have.css', 'position', 'relative');
        cy.get('.teaser .teaser__figure').should('have.css', 'width', '696px');

        cy.get('.teaser .teaser__image').should('have.css', 'aspect-ratio', '1.618 / 1');
        cy.get('.teaser .teaser__image').should('have.css', 'object-fit', 'cover');
        cy.get('.teaser .teaser__image').should('have.css', 'width', '696px');
        cy.get('.teaser .teaser__image').should('have.css', 'height', '430.15625px');

        cy.get('.teaser .media-info').should('exist');

        cy.get('.teaser .teaser__content').should('have.css', 'padding', '0px');
        cy.get('.teaser .teaser__content').should('have.css', 'width', '696px');
    });
})

describe('teaser - image 33% left', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-teaser--teaser&args=imageWidth:33');
    });

    it('has correct attributes', () => {
        cy.get('.teaser').invoke('attr', 'teaser-type').should('eq', 'cinema');
        cy.get('.teaser').invoke('attr', 'image-width').should('eq', '33');
        cy.get('.teaser').invoke('attr', 'image-side').should('eq', 'left');
    });

    it('has correct styles', () => {
        cy.get('.teaser').should('have.css', 'grid-template-columns', '464px 928px');
        cy.get('.teaser .teaser__figure').should('have.css', 'grid-column', '1 / auto');
        cy.get('.teaser .teaser__figure').should('have.css', 'width', '464px');
        cy.get('.teaser .teaser__image').should('have.css', 'width', '464px');
        cy.get('.teaser .teaser__image').should('have.css', 'height', '286.7734375px');
        cy.get('.teaser .teaser__content').should('have.css', 'width', '928px');
    });
})

describe('teaser - image 33% right', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-teaser--teaser&args=imageWidth:33;imageSide:right');
    });

    it('has correct attributes', () => {
        cy.get('.teaser').invoke('attr', 'teaser-type').should('eq', 'cinema');
        cy.get('.teaser').invoke('attr', 'image-width').should('eq', '33');
        cy.get('.teaser').invoke('attr', 'image-side').should('eq', 'right');
    });

    it('has correct styles', () => {
        cy.get('.teaser').should('have.css', 'grid-template-columns', '928px 464px');
        cy.get('.teaser .teaser__figure').should('have.css', 'grid-column', '2 / auto');
        cy.get('.teaser .teaser__figure').should('have.css', 'width', '464px');
        cy.get('.teaser .teaser__image').should('have.css', 'width', '464px');
        cy.get('.teaser .teaser__image').should('have.css', 'height', '286.7734375px');
        cy.get('.teaser .teaser__content').should('have.css', 'width', '928px');
    });
})

describe('teaser - image 66% left', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-teaser--teaser&args=imageWidth:66;imageSide:left');
    });

    it('has correct attributes', () => {
        cy.get('.teaser').invoke('attr', 'teaser-type').should('eq', 'cinema');
        cy.get('.teaser').invoke('attr', 'image-width').should('eq', '66');
        cy.get('.teaser').invoke('attr', 'image-side').should('eq', 'left');
    });

    it('has correct styles', () => {
        cy.get('.teaser').should('have.css', 'grid-template-columns', '928px 464px');
        cy.get('.teaser .teaser__figure').should('have.css', 'grid-column', '1 / auto');
        cy.get('.teaser .teaser__figure').should('have.css', 'width', '928px');
        cy.get('.teaser .teaser__image').should('have.css', 'width', '928px');
        cy.get('.teaser .teaser__image').should('have.css', 'height', '573.546875px');
        cy.get('.teaser .teaser__content').should('have.css', 'width', '464px');
    });
})

describe('teaser - image 66% right', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-teaser--teaser&args=imageWidth:66;imageSide:right');
    });

    it('has correct attributes', () => {
        cy.get('.teaser').invoke('attr', 'teaser-type').should('eq', 'cinema');
        cy.get('.teaser').invoke('attr', 'image-width').should('eq', '66');
        cy.get('.teaser').invoke('attr', 'image-side').should('eq', 'left');
    });

    it('has correct styles', () => {
        cy.get('.teaser').should('have.css', 'grid-template-columns', '464px 928px');
        cy.get('.teaser .teaser__figure').should('have.css', 'grid-column', '2 / auto');
        cy.get('.teaser .teaser__figure').should('have.css', 'width', '928px');
        cy.get('.teaser .teaser__image').should('have.css', 'width', '928px');
        cy.get('.teaser .teaser__image').should('have.css', 'height', '573.546875px');
        cy.get('.teaser .teaser__content').should('have.css', 'width', '464px');
    });
})

describe('teaser - primary', () => {
    beforeEach(() => {
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

describe('teaser - secondary', () => {
    beforeEach(() => {
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

describe('teaser - inverted', () => {
    beforeEach(() => {
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

describe('teaser - media', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-teaser--teaser&args=teaserType:media');
    });

    it('has correct attributes', () => {
        cy.get('.teaser').invoke('attr', 'teaser-type').should('eq', 'media');
    });

    it.only('has correct styles', () => {
        cy.get('.teaser .teaser__figure').should('have.css', 'width', '696px');
        cy.get('.teaser .teaser__image').should('have.css', 'width', '696px');
        cy.get('.teaser .teaser__image').should('have.css', 'height', '1005.9375px');
        cy.get('.teaser .teaser__content').should('have.css', 'width', '696px');
    });
})

export {}
