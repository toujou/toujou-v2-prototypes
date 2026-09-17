/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('teaser a11y', () => {
    const variants = [
        { name: 'default', url: '' },
        { name: 'image 33% right', url: '&args=imageWidth:33;imageSide:right' },
        { name: 'image 33% left', url: '&args=imageWidth:33' },
        { name: 'image 66% left', url: '&args=imageWidth:66;imageSide:left' },
        { name: 'image 66% right', url: '&args=imageWidth:66;imageSide:right' },
        { name: 'primary', url: '&args=elementDesign:primary' },
        { name: 'secondary', url: '&args=elementDesign:secondary' },
        { name: 'inverted', url: '&args=elementDesign:inverted' },
        { name: 'media', url: '&args=teaserType:media' },
    ];

    variants.forEach(({ name, url }) => {
        it(`has no detectable a11y violations - ${name}`, () => {
            cy.visit(`/iframe.html?viewMode=story&id=components-teaser--teaser${url}`);
            cy.injectAxe();
            cy.get('.teaser');
            // @ts-ignore
            cy.checkA11yWithWait('.teaser');
        });
    });
});

export {};
