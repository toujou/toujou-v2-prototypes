/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

const firstCardSelector = '.item-collection__item:first-child .collection-item';

describe('list item - type default [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-collections--list-item-default');
    });

    it('has correct class, attributes and tag name', () => {
        cy.get(`${firstCardSelector}`).then((collectionItem) => {
            expect(collectionItem).to.have.prop('tagName').equal('TOUJOU-COLLECTION-ITEM');
            expect(collectionItem).to.have.attr('class').equal('collection-item');
            expect(collectionItem).to.have.attr('item-orientation').equal('horizontal');
            expect(collectionItem).to.have.attr('item-type').equal('default');
            expect(collectionItem).to.have.attr('element-design').equal('default');
        })
    });

    it('has correct children', () => {
        cy.get(`${firstCardSelector} > .collection-item__top`).should('exist');
        cy.get(`${firstCardSelector} > .collection-item__top > .collection-item__figure`).should('exist');
        cy.get(`${firstCardSelector} > .collection-item__top > .collection-item__figure > .collection-item__image`).should('exist');
        cy.get(`${firstCardSelector} > .collection-item__bottom`).should('exist');
        cy.get(`${firstCardSelector} > .collection-item__bottom > .collection-item__title`).should('exist');
        cy.get(`${firstCardSelector} > .collection-item__bottom > .collection-item__subtitles`).should('exist');
        cy.get(`${firstCardSelector} > .collection-item__bottom > .collection-item__subtitles > .collection-item__subtitle`).should('exist');
        cy.get(`${firstCardSelector} > .collection-item__bottom > .collection-item__abstract`).should('exist');
        cy.get(`${firstCardSelector} > .collection-item__bottom > .collection-item__button`).should('exist');
        cy.get(`${firstCardSelector} > .collection-item__bottom > .collection-item__button > .icon`).should('exist');
    });

    it('has correct top styles', () => {
        cy.get(`${firstCardSelector} > .collection-item__top`).then((itemTop) => {
            expect(itemTop).to.have.css('position').equal('relative')
            expect(itemTop).to.have.css('margin').equal(`0px`)
        });
        cy.get(`${firstCardSelector} .collection-item__image`).then((itemImage) => {
            expect(itemImage).to.have.css('object-fit').equal('cover')
            expect(itemImage).to.have.css('aspect-ratio').equal('1.618 / 1')
            expect(itemImage).to.have.css('vertical-align').equal('middle')
        });
    });

    it('has correct bottom styles', () => {
        cy.get(`${firstCardSelector} > .collection-item__bottom`).should('have.css', 'padding', `${tokens.spacing.m} 0px`);
        cy.get(`${firstCardSelector} .collection-item__title`).then((itemTitle) => {
            expect(itemTitle).to.have.css('font-size').equal(tokens.type.size.ms);
            expect(itemTitle).to.have.css('color').equal(colors.colorFontDark);
            expect(itemTitle).to.have.css('margin').equal(`0px 0px ${tokens.spacing.xs}`);
        });
        cy.get(`${firstCardSelector} .collection-item__subtitles`).should('have.css', 'margin', '0px');
        cy.get(`${firstCardSelector} .collection-item__subtitle`).then((itemSubtitles) => {
            expect(itemSubtitles).to.have.css('color').equal(colors.colorFont);
            expect(itemSubtitles).to.have.css('font-size').equal(tokens.type.size.normal);
            expect(itemSubtitles).to.have.css('font-style').equal('italic');
        });
        cy.get(`${firstCardSelector} .collection-item__abstract`).then((itemAbstract) => {
            expect(itemAbstract).to.have.css('font-size').equal(tokens.type.size.normal);
            expect(itemAbstract).to.have.css('color').equal(colors.colorFont);
            expect(itemAbstract).to.have.css('text-overflow').equal('clip');
            expect(itemAbstract).to.have.css('-webkit-line-clamp').equal('none');
            expect(itemAbstract).to.have.css('overflow').equal('visible');
        });
        cy.get(`${firstCardSelector} .collection-item__button`).then((itemButton) => {
            expect(itemButton).to.have.css('text-decoration').equal(`none solid ${colors.colorPrimary}`);
            expect(itemButton).to.have.css('color').equal(colors.colorPrimary);
            expect(itemButton).to.have.css('display').equal('flex');
            expect(itemButton).to.have.css('align-items').equal('flex-end');
            expect(itemButton).to.have.css('justify-content').equal('flex-start');
            expect(itemButton).to.have.css('gap').equal(tokens.spacing.s);
        });
        cy.get(`${firstCardSelector} .icon`).should('have.css', 'background-color', colors.colorBg);
    });

    it('has correct bottom hover styles', () => {
        // @ts-ignore
        cy.get(`${firstCardSelector} .collection-item__button`).resetRealHover();
        cy.get(`${firstCardSelector} .collection-item__button`).should('have.css', 'color', colors.colorPrimary);
        cy.get(`${firstCardSelector} .collection-item__button`).should('have.css', 'text-decoration', `none solid ${colors.colorPrimary}`);
        // @ts-ignore
        cy.get(`${firstCardSelector} .collection-item__button`).realHover();
        cy.get(`${firstCardSelector} .collection-item__button`).should('have.css', 'color', colors.colorPrimaryDark);
        cy.get(`${firstCardSelector} .collection-item__button`).should('have.css', 'text-decoration', `underline solid ${colors.colorPrimaryDark}`);
    });
});

describe('list item - type blog [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-collections--list-item-blog');
        // @ts-ignore
        cy.get(`${firstCardSelector} .collection-item__button`).resetRealHover();
    });

    it('has correct attributes and elements', () => {
        cy.get(`${firstCardSelector}`).invoke('attr', 'item-type').should('eq', 'blog');
        cy.get(`${firstCardSelector} .collection-item__categories`).should('exist');
        cy.get(`${firstCardSelector} .collection-item__category-chip`).should('exist');
    });

    it('Categories have correct styles', () => {
        cy.get(`${firstCardSelector} .collection-item__categories`).should('have.css', 'position', 'absolute');
        cy.get(`${firstCardSelector} .collection-item__categories`).should('have.css', 'top', tokens.spacing.normal);
        cy.get(`${firstCardSelector} .collection-item__categories`).should('have.css', 'left', tokens.spacing.normal);
        cy.get(`${firstCardSelector} .collection-item__category-chip`).should('have.css', 'background-color', colors.colorPrimary);
        cy.get(`${firstCardSelector} .collection-item__category-chip`).should('have.css', 'color', colors.colorBg);
        cy.get(`${firstCardSelector} .collection-item__category-chip`).should('have.css', 'display', 'inline-flex');
        cy.get(`${firstCardSelector} .collection-item__category-chip`).should('have.css', 'align-items', 'center');
        cy.get(`${firstCardSelector} .collection-item__category-chip`).should('have.css', 'justify-content', 'center');
        cy.get(`${firstCardSelector} .collection-item__category-chip`).should('have.css', 'gap', tokens.spacing.s);
        cy.get(`${firstCardSelector} .collection-item__category-chip`).should('have.css', 'padding', `${tokens.spacing.xs} ${tokens.spacing.normal} ${tokens.spacing.xs} ${tokens.spacing.s}`);
        cy.get(`${firstCardSelector} .collection-item__category-chip`).should('have.css', 'border-radius', `${tokens.borderRadius.xxxl}`);
        cy.get(`${firstCardSelector} .collection-item__category-chip`).should('have.css', 'font-size', tokens.type.size.xs);
        cy.get(`${firstCardSelector} .collection-item__category-chip`).should('have.css', 'margin', `0px`);
    });
});

describe('list item - type event [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-collections--list-item-event');
        // @ts-ignore
        cy.get(`${firstCardSelector} .collection-item__button`).resetRealHover();
    });

    it('has correct attributes and elements', () => {
        cy.get(`${firstCardSelector}`).invoke('attr', 'item-type').should('eq', 'event');
        cy.get(`${firstCardSelector} .collection-item__date`).should('exist');
        cy.get(`${firstCardSelector} .collection-item__status`).should('exist');
        cy.get(`${firstCardSelector} .collection-item__abstract`).should('exist');
        cy.get(`${firstCardSelector} .collection-item__button`).should('exist');
        cy.get(`${firstCardSelector} toujou-fav-item`).should('exist');
    });

    it('date element has correct styles', () => {
        cy.get(`${firstCardSelector} .collection-item__date`).then((dateEl) => {
            expect(dateEl).to.have.css('position').equal('relative');
            expect(dateEl).to.have.css('height').equal('24px');
            expect(dateEl).to.have.css('width').equal('296px');
            expect(dateEl).to.have.css('top').equal('0px');
            expect(dateEl).to.have.css('right').equal('0px');
            expect(dateEl).to.have.css('border-radius').equal('0px');
            expect(dateEl).to.have.css('display').equal('flex');
            expect(dateEl).to.have.css('justify-content').equal('flex-start');
            expect(dateEl).to.have.css('padding').equal('0px');
            expect(dateEl).to.have.css('color').equal(colors.colorFont);
        });
    });
});

describe('collection item - type trip [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-collections--list-item-trip');
        // @ts-ignore
        cy.get(`${firstCardSelector} .collection-item__button`).resetRealHover();
    });

    it('has correct attributes and elements', () => {
        cy.get(`${firstCardSelector}`).invoke('attr', 'item-type').should('eq', 'trip');
        cy.get(`${firstCardSelector} .collection-item__categories`).should('exist');
        cy.get(`${firstCardSelector} .collection-item__location`).should('exist');
        cy.get(`${firstCardSelector} toujou-fav-item`).should('exist');
        cy.get(`${firstCardSelector} .collection-item__trip-infos`).should('exist');
        cy.get(`${firstCardSelector} .collection-item__trip-price`).should('exist');
    });

    it('location element has correct styles', () => {
        cy.get(`${firstCardSelector} .collection-item__location`).then((locationEl) => {
            expect(locationEl).to.have.css('display').equal('flex');
            expect(locationEl).to.have.css('align-items').equal('flex-start');
            expect(locationEl).to.have.css('justify-content').equal('flex-start');
            expect(locationEl).to.have.css('gap').equal(tokens.spacing.xs);
            expect(locationEl).to.have.css('position').equal('absolute');
            expect(locationEl).to.have.css('bottom').equal('0px');
            expect(locationEl).to.have.css('left').equal('0px');
            expect(locationEl).to.have.css('padding').equal(tokens.spacing.m);
        });
        cy.get(`${firstCardSelector} .collection-item__location-city`).then((cityEl) => {
            expect(cityEl).to.have.css('font-size').equal(tokens.type.size.ms);
            expect(cityEl).to.have.css('font-weight').equal(tokens.type.fontWeight.bold);
            expect(cityEl).to.have.css('color').equal(colors.colorBg);
            expect(cityEl).to.have.css('margin').equal('0px');
        });
        cy.get(`${firstCardSelector} .collection-item__location-country`).then((countryEl) => {
            expect(countryEl).to.have.css('font-size').equal(tokens.type.size.normal);
            expect(countryEl).to.have.css('font-weight').equal(tokens.type.fontWeight.normal);
            expect(countryEl).to.have.css('color').equal(colors.colorBg);
            expect(countryEl).to.have.css('margin').equal('0px');
        });
    });

    it('trip infos element has correct styles', () => {
        cy.get(`${firstCardSelector} .collection-item__trip-info`).then((tripInfoEl) => {
            expect(tripInfoEl).to.have.css('margin').equal('0px');
            expect(tripInfoEl).to.have.css('color').equal(colors.colorFont);
        });
    });

    it('trip price element has correct styles', () => {
        cy.get(`${firstCardSelector} .collection-item__trip-price-prefix`).then((tripPricePrefixEl) => {
            expect(tripPricePrefixEl).to.have.css('color').equal(colors.colorFont);
            expect(tripPricePrefixEl).to.have.css('font-size').equal(tokens.type.size.normal);
        });
        cy.get(`${firstCardSelector} .collection-item__trip-price-amount`).then((tripPriceAmountEl) => {
            expect(tripPriceAmountEl).to.have.css('color').equal(colors.colorFont);
            expect(tripPriceAmountEl).to.have.css('font-size').equal(tokens.type.size.ms);
            expect(tripPriceAmountEl).to.have.css('font-weight').equal(tokens.type.fontWeight.bold);
        });
        cy.get(`${firstCardSelector} .collection-item__trip-price-suffix`).then((tripPriceSuffixEl) => {
            expect(tripPriceSuffixEl).to.have.css('color').equal(colors.colorFont);
            expect(tripPriceSuffixEl).to.have.css('font-size').equal(tokens.type.size.xs);
        });
    });
});

describe('collection item - type product [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-collections--list-item-product');
        // @ts-ignore
        cy.get(`${firstCardSelector}`).resetRealHover();
    });

    it('has correct attributes and elements', () => {
        cy.get(`${firstCardSelector}`).invoke('attr', 'item-type').should('eq', 'product');
        cy.get(`${firstCardSelector} .collection-item__categories`).should('exist');
        cy.get(`${firstCardSelector} .collection-item__title`).should('exist');
    });

    it('product bottom has correct styles', () => {
        cy.get(`${firstCardSelector} .collection-item__bottom`).then((bottomEl) => {
            expect(bottomEl).to.have.css('position').equal('static');
            expect(bottomEl).to.have.css('bottom').equal('auto');
            expect(bottomEl).to.have.css('left').equal('auto');
        });
    });

    it('product title has correct styles ', () => {
        cy.get(`${firstCardSelector} .collection-item__title`).then((titleEl) => {
            expect(titleEl).to.have.css('color').equal(colors.colorFontDark);
            expect(titleEl).to.have.css('font-size').equal(tokens.type.size.ms);
            expect(titleEl).to.have.css('margin').equal(`0px 0px ${tokens.spacing.xs}`);
            expect(titleEl).to.have.css('font-weight').equal(tokens.type.fontWeight.bold);
        });
    });

});

export {}
