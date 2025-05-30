/// <reference types="cypress" />
/// <reference types="cypress-real-events" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('Map [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-map--map');
    });

    it('has correct class, tag name and structure', () => {
        cy.get('toujou-map-contact').should('have.prop', 'tagName').should('eq', 'TOUJOU-MAP-CONTACT');
        cy.get('toujou-map-contact').invoke('attr', 'class').should('eq', 'map-contact');
        cy.get('toujou-map-contact').invoke('attr', 'direction').should('exist');
        cy.get('toujou-map-contact').invoke('attr', 'map-aspect-ratio').should('exist');
        cy.get('toujou-map-contact .map-contact__map-container').should('exist');
        cy.get('toujou-map-contact .map-contact__map-container .map-contact__image').should('exist');
        cy.get('toujou-map-contact .map-contact__content').should('exist');
        cy.get('toujou-map-contact .map-contact__content .map-contact__headline').should('exist');
        cy.get('toujou-map-contact .map-contact__content .map-contact__address').should('exist');
        cy.get('toujou-map-contact .map-contact__content .map-contact__socials').should('exist');
        cy.get('toujou-map-contact .map-contact__content .map-contact__socials').children('.map-contact__social').should('have.length', 6);
    });

    it('has correct styles', () => {
        cy.get('.map-contact').then((mapEl) => {
            expect(mapEl).to.have.css('display').equal('grid');
            expect(mapEl).to.have.css('margin-top').equal('0px');
            expect(mapEl).to.have.css('margin-bottom').equal('0px');
            expect(mapEl).to.have.css('grid-gap').equal(`${tokens.spacing.normal}`);
            expect(mapEl).to.have.css('grid-template-areas').equal('"map" "address"');
        });
        cy.get('.map-contact .map-contact__map-container').then((mapContainer) => {
            expect(mapContainer).to.have.css('overflow').equal('hidden');
            expect(mapContainer).to.have.css('grid-area').equal('map');
            expect(mapContainer).to.have.css('aspect-ratio').equal('1 / 1');
        });
        cy.get('.map-contact .map-contact__image').then((mapImage) => {
            expect(mapImage).to.have.css('aspect-ratio').equal('1 / 1');
            expect(mapImage).to.have.css('object-fit').equal('cover');
        });
        cy.get('.map-contact .map-contact__content').then((mapContent) => {
            expect(mapContent).to.have.css('grid-area').equal('address');
        });
        cy.get('.map-contact .map-contact__headline').then((mapHeadline) => {
            expect(mapHeadline).to.have.css('color').equal(colors.colorFontDark);
        });
        cy.get('.map-contact .map-contact__address').then((mapAddress) => {
            expect(mapAddress).to.have.css('color').equal(colors.colorFont);
            expect(mapAddress).to.have.css('font-size').equal(tokens.type.size.normal);
            expect(mapAddress).to.have.css('font-style').equal('normal');
            expect(mapAddress).to.have.css('line-height').equal(tokens.type.lineHeight.normal);
        });
        cy.get('.map-contact .map-contact__socials').then((mapSocials) => {
            expect(mapSocials).to.have.css('margin').equal(`${tokens.spacing.normal} 0px 0px`);
        });
        cy.get('.map-contact .map-contact__social').then((mapSocial) => {
            expect(mapSocial).to.have.css('margin').equal(`0px ${tokens.spacing.normal} 0px 0px`);
            expect(mapSocial).to.have.css('color').equal('rgba(0, 0, 0, 0)');
        });
    });
});

describe('Map direction reverse [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-map--map&args=direction:reverse');
    });

    it('has correct styles', () => {
        cy.get('.map-contact').then((mapContact) => {
            expect(mapContact).to.have.css('grid-template-areas').equal('"map" "address"');
        });
    });
});

describe('Map aspect ratio 1:1 [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-map--map');
    });

    it('has correct ratios', () => {
        cy.get('.map-contact .map-contact__map-container').then((mapContainer) => {
            expect(mapContainer).to.have.css('aspect-ratio').equal(tokens.aspectRatio.square);
        });
        cy.get('.map-contact .map-contact__image').then((mapImage) => {
            expect(mapImage).to.have.css('aspect-ratio').equal(tokens.aspectRatio.square);
            expect(mapImage).to.have.css('object-fit').equal('cover');
        });
    });
});

describe('Map aspect ratio 16:9 [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-map--map&args=mapAspectRatio:16-9');
    });

    it('has correct ratios', () => {
        cy.get('.map-contact .map-contact__map-container').then((mapContainer) => {
            expect(mapContainer).to.have.css('aspect-ratio').equal(tokens.aspectRatio.sixteenToNine);
        });
        cy.get('.map-contact .map-contact__image').then((mapImage) => {
            expect(mapImage).to.have.css('aspect-ratio').equal(tokens.aspectRatio.sixteenToNine);
            expect(mapImage).to.have.css('object-fit').equal('cover');
        });
    });
});

describe('Map hover [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-map--map');
        // @ts-ignore
        cy.get('.map-contact').resetRealHover();
    });

    it('has correct hover styles', () => {
        cy.get('.map-contact .map-contact__social:first-child').then((mapSocial) => {
            expect(mapSocial).to.have.css('color').equal('rgba(0, 0, 0, 0)');
        });
        cy.get('.map-contact .map-contact__social:first-child .icon').then((mapSocialIcon) => {
            expect(mapSocialIcon).to.have.css('background-color').equal(colors.colorFont);
        });
        cy.get('.map-contact .map-contact__social:first-child').realHover();
        cy.get('.map-contact .map-contact__social:first-child').then((mapSocial) => {
            expect(mapSocial).to.have.css('color').equal('rgba(0, 0, 0, 0)');
        });
        cy.get('.map-contact .map-contact__social:first-child .icon').then((mapSocialIcon) => {
            expect(mapSocialIcon).to.have.css('background-color').equal(colors.colorPrimary);
        });
    });
});

export {}
