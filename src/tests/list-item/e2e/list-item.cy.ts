/// <reference types="cypress" />

const colors = Cypress.env('colors');

const firstCardSelector = '.item-collection__item:first-child .collection-item';

describe('list item - type default', () => {
    beforeEach(() => {
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
            expect(itemTop).to.have.css('margin').equal('24px 16px')
        });
        cy.get(`${firstCardSelector} .collection-item__image`).then((itemImage) => {
            expect(itemImage).to.have.css('object-fit').equal('cover')
            expect(itemImage).to.have.css('aspect-ratio').equal('1.618 / 1')
            expect(itemImage).to.have.css('vertical-align').equal('middle')
        });
    });

    it('has correct bottom styles', () => {
        cy.get(`${firstCardSelector} > .collection-item__bottom`).should('have.css', 'padding', '24px');
        cy.get(`${firstCardSelector} .collection-item__title`).then((itemTitle) => {
            expect(itemTitle).to.have.css('font-size').equal('20px');
            expect(itemTitle).to.have.css('color').equal(colors.colorFontDark);
            expect(itemTitle).to.have.css('margin').equal('0px 0px 4px');
        });
        cy.get(`${firstCardSelector} .collection-item__subtitles`).should('have.css', 'margin', '0px');
        cy.get(`${firstCardSelector} .collection-item__subtitle`).then((itemSubtitles) => {
            expect(itemSubtitles).to.have.css('color').equal(colors.colorFont);
            expect(itemSubtitles).to.have.css('font-size').equal('16px');
            expect(itemSubtitles).to.have.css('font-style').equal('italic');
        });
        cy.get(`${firstCardSelector} .collection-item__abstract`).then((itemAbstract) => {
            expect(itemAbstract).to.have.css('font-size').equal('16px');
            expect(itemAbstract).to.have.css('color').equal(colors.colorFont);
            expect(itemAbstract).to.have.css('text-overflow').equal('ellipsis');
            expect(itemAbstract).to.have.css('-webkit-line-clamp').equal('3');
            expect(itemAbstract).to.have.css('overflow').equal('hidden');
        });
        cy.get(`${firstCardSelector} .collection-item__button`).then((itemButton) => {
            expect(itemButton).to.have.css('text-decoration').equal(`none solid ${colors.colorPrimary}`);
            expect(itemButton).to.have.css('color').equal(colors.colorPrimary);
            expect(itemButton).to.have.css('display').equal('flex');
            expect(itemButton).to.have.css('align-items').equal('center');
            expect(itemButton).to.have.css('justify-content').equal('center');
            expect(itemButton).to.have.css('gap').equal('8px');
        });
        cy.get(`${firstCardSelector} .icon`).should('have.css', 'background-color', colors.colorPrimary);
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

describe('list item - type blog', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-collections--list-item-blog');
        // @ts-ignore
        cy.get(`${firstCardSelector} .collection-item__button`).resetRealHover();
    });

    it('has correct attributes and elements', () => {
        cy.get(`${firstCardSelector}`).invoke('attr', 'item-type').should('eq', 'blog');
        cy.get(`${firstCardSelector} .collection-item__categories`).should('exist');
        cy.get(`${firstCardSelector} .collection-item__category`).should('exist');
    });

    it('Categories have correct styles', () => {
        cy.get(`${firstCardSelector} .collection-item__categories`).should('have.css', 'position', 'absolute');
        cy.get(`${firstCardSelector} .collection-item__categories`).should('have.css', 'top', '16px');
        cy.get(`${firstCardSelector} .collection-item__categories`).should('have.css', 'left', '0px');
        cy.get(`${firstCardSelector} .collection-item__category`).should('have.css', 'background-color', colors.colorPrimaryLight);
        cy.get(`${firstCardSelector} .collection-item__category`).should('have.css', 'color', colors.colorPrimaryDark);
        cy.get(`${firstCardSelector} .collection-item__category`).should('have.css', 'display', 'flex');
        cy.get(`${firstCardSelector} .collection-item__category`).should('have.css', 'align-items', 'center');
        cy.get(`${firstCardSelector} .collection-item__category`).should('have.css', 'justify-content', 'flex-start');
        cy.get(`${firstCardSelector} .collection-item__category`).should('have.css', 'gap', '4px');
        cy.get(`${firstCardSelector} .collection-item__category`).should('have.css', 'padding', '4px 16px 4px 8px');
        cy.get(`${firstCardSelector} .collection-item__category`).should('have.css', 'border-radius', '0px 32px 32px 0px');
        cy.get(`${firstCardSelector} .collection-item__category`).should('have.css', 'font-size', '14px');
        cy.get(`${firstCardSelector} .collection-item__category`).should('have.css', 'margin', '0px 0px 4px');
    });
});

describe('list item - type event', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-collections--list-item-event');
        // @ts-ignore
        cy.get(`${firstCardSelector} .collection-item__button`).resetRealHover();
    });

    it('has correct attributes and elements', () => {
        cy.get(`${firstCardSelector}`).invoke('attr', 'item-type').should('eq', 'event');
        cy.get(`${firstCardSelector} .collection-item__date`).should('exist');
        cy.get(`${firstCardSelector} .collection-item__info`).should('exist');
        cy.get(`${firstCardSelector} toujou-fav-item`).should('exist');
    });

    it('date element has correct styles', () => {
        cy.get(`${firstCardSelector} .collection-item__date`).then((dateEl) => {
            expect(dateEl).to.have.css('position').equal('absolute');
            expect(dateEl).to.have.css('height').equal('80px');
            expect(dateEl).to.have.css('width').equal('44.8046875px');
            expect(dateEl).to.have.css('top').equal('16px');
            expect(dateEl).to.have.css('right').equal('16px');
            expect(dateEl).to.have.css('background-color').equal(colors.colorBg);
            expect(dateEl).to.have.css('border-radius').equal('4px');
            expect(dateEl).to.have.css('display').equal('flex');
            expect(dateEl).to.have.css('justify-content').equal('center');
            expect(dateEl).to.have.css('padding').equal('8px');
            expect(dateEl).to.have.css('color').equal(colors.colorFont);
        });
        cy.get(`${firstCardSelector} .media-date__day`).then((dayEl) => {
            expect(dayEl).to.have.css('font-size').equal('24px');
            expect(dayEl).to.have.css('font-weight').equal('800');
        });
        cy.get(`${firstCardSelector} .media-date__month`).then((monthEl) => {
            expect(monthEl).to.have.css('text-transform').equal('uppercase');
            expect(monthEl).to.have.css('font-size').equal('12px');
        });
    });

    it('Info element has correct styles', () => {
        cy.get(`${firstCardSelector} .collection-item__info`).then((infoEl) => {
            expect(infoEl).to.have.css('display').equal('grid');
            expect(infoEl).to.have.css('grid-gap').equal('8px 8px');
            expect(infoEl).to.have.css('margin').equal('16px 0px 0px');
        });
        cy.get(`${firstCardSelector} .collection-item__info .icon`).then((infoIcon) => {
            expect(infoIcon).to.exist;
            expect(infoIcon).to.have.attr('icon-color').equal('primary');
            expect(infoIcon).to.have.attr('icon-name').equal('info');
            expect(infoIcon).to.have.attr('icon-size').equal('ms');
        });
        cy.get(`${firstCardSelector} .collection-item__info-text`).then((infotextEl) => {
            expect(infotextEl).to.have.css('margin').equal('0px');
            expect(infotextEl).to.have.css('color').equal(colors.colorFont);

        });
    });
});

describe('collection item - type trip', () => {
    beforeEach(() => {
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
            expect(locationEl).to.have.css('gap').equal('4px');
            expect(locationEl).to.have.css('position').equal('absolute');
            expect(locationEl).to.have.css('bottom').equal('0px');
            expect(locationEl).to.have.css('left').equal('0px');
            expect(locationEl).to.have.css('padding').equal('24px');
        });
        cy.get(`${firstCardSelector} .collection-item__location-city`).then((cityEl) => {
            expect(cityEl).to.have.css('font-size').equal('20px');
            expect(cityEl).to.have.css('font-weight').equal('800');
            expect(cityEl).to.have.css('color').equal(colors.colorBg);
            expect(cityEl).to.have.css('margin').equal('0px');
        });
        cy.get(`${firstCardSelector} .collection-item__location-country`).then((countryEl) => {
            expect(countryEl).to.have.css('font-size').equal('16px');
            expect(countryEl).to.have.css('font-weight').equal('600');
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
            expect(tripPricePrefixEl).to.have.css('font-size').equal('16px');
        });
        cy.get(`${firstCardSelector} .collection-item__trip-price-amount`).then((tripPriceAmountEl) => {
            expect(tripPriceAmountEl).to.have.css('color').equal(colors.colorFont);
            expect(tripPriceAmountEl).to.have.css('font-size').equal('20px');
            expect(tripPriceAmountEl).to.have.css('font-weight').equal('800');
        });
        cy.get(`${firstCardSelector} .collection-item__trip-price-suffix`).then((tripPriceSuffixEl) => {
            expect(tripPriceSuffixEl).to.have.css('color').equal(colors.colorFont);
            expect(tripPriceSuffixEl).to.have.css('font-size').equal('12px');
        });
    });
});

describe('collection item - type product', () => {
    beforeEach(() => {
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
            expect(titleEl).to.have.css('font-size').equal('20px');
            expect(titleEl).to.have.css('margin').equal('0px 0px 4px');
            expect(titleEl).to.have.css('font-weight').equal('800');
        });
    });

});

export {}
