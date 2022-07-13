/// <reference types="cypress" />

const colorPrimary = Cypress.env('colorPrimary');
const colorPrimaryLight = Cypress.env('colorPrimaryLight');
const colorPrimaryDark = Cypress.env('colorPrimaryDark');
const colorPrimaryO10 = Cypress.env('colorPrimaryO10');
const colorSecondary = Cypress.env('colorSecondary');
const colorSecondaryLight = Cypress.env('colorSecondaryLight');
const colorSecondaryDark = Cypress.env('colorSecondaryDark');
const colorSecondaryO10 = Cypress.env('colorSecondaryO10');
const colorFont = Cypress.env('colorFont');
const colorFontDark = Cypress.env('colorFontDark');
const colorFontLight = Cypress.env('colorFontLight');
const colorFontO10 = Cypress.env('colorFontO10');
const colorBg = Cypress.env('colorBg');
const colorTransparent = Cypress.env('colorTransparent');
const colorSuccess = Cypress.env('colorSuccess');
const colorSuccessDarken15 = Cypress.env('colorSuccessDarken15');
const colorWarning = Cypress.env('colorWarning');
const colorWarningDarken15 = Cypress.env('colorWarningDarken15');
const colorError = Cypress.env('colorError');
const colorErrorDarken15 = Cypress.env('colorErrorDarken15');

describe('toujou-chip', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-chip--chip');
    });

    it('has correct class', () => {
        cy.get('toujou-chip').invoke('attr', 'class').should('eq', 'chip');
    });

})

describe('toujou-chip - background-colors', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-chip--chip');
        // @ts-ignore
        cy.get('.chip').resetRealHover();
    });

    it('has correct transparent bg colors', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'transparent');
        });
        cy.get('.chip').should('have.css', 'background-color', colorTransparent);
        cy.get('.chip').should('have.css', 'color', colorFont);
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colorTransparent);
        cy.get('.chip').should('have.css', 'color', colorFont);
        cy.get('.chip').then((e) => {
            e[0].setAttribute('is-clickable', '');
        });
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colorTransparent);
        cy.get('.chip').should('have.css', 'color', colorFontDark);
    });

    it('has correct primary bg colors', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'primary');
        });
        cy.get('.chip').should('have.css', 'background-color', colorPrimary);
        cy.get('.chip').should('have.css', 'color', colorBg);
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colorPrimary);
        cy.get('.chip').should('have.css', 'color', colorBg);
        cy.get('.chip').then((e) => {
            e[0].setAttribute('is-clickable', '');
        });
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colorPrimaryDark);
        cy.get('.chip').should('have.css', 'color', colorBg);
    });

    it('has correct light primary bg colors', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'primary-light');
        });
        cy.get('.chip').should('have.css', 'background-color', colorPrimaryLight);
        cy.get('.chip').should('have.css', 'color', colorPrimaryDark);
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colorPrimaryLight);
        cy.get('.chip').should('have.css', 'color', colorPrimaryDark);
        cy.get('.chip').then((e) => {
            e[0].setAttribute('is-clickable', '');
        });
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colorPrimary);
        cy.get('.chip').should('have.css', 'color', colorBg);
    });

    it('has correct very light primary bg colors', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'primary-very-light');
        });
        cy.get('.chip').should('have.css', 'background-color', colorPrimaryO10);
        cy.get('.chip').should('have.css', 'color', colorPrimaryDark);
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colorPrimaryO10);
        cy.get('.chip').should('have.css', 'color', colorPrimaryDark);
        cy.get('.chip').then((e) => {
            e[0].setAttribute('is-clickable', '');
        });
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colorPrimaryLight);
        cy.get('.chip').should('have.css', 'color', colorPrimaryDark);
    });

    it('has correct secondary bg colors', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'secondary');
        });
        cy.get('.chip').should('have.css', 'background-color', colorSecondary);
        cy.get('.chip').should('have.css', 'color', colorBg);
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colorSecondary);
        cy.get('.chip').should('have.css', 'color', colorBg);
        cy.get('.chip').then((e) => {
            e[0].setAttribute('is-clickable', '');
        });
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colorPrimaryDark);
        cy.get('.chip').should('have.css', 'color', colorBg);
    });

    it('has correct light secondary bg colors', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'secondary-light');
        });
        cy.get('.chip').should('have.css', 'background-color', colorSecondaryLight);
        cy.get('.chip').should('have.css', 'color', colorSecondaryDark);
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colorSecondaryLight);
        cy.get('.chip').should('have.css', 'color', colorSecondaryDark);
        cy.get('.chip').then((e) => {
            e[0].setAttribute('is-clickable', '');
        });
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colorSecondary);
        cy.get('.chip').should('have.css', 'color', colorBg);
    });

    it('has correct very light secondary bg colors', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'secondary-very-light');
        });
        cy.get('.chip').should('have.css', 'background-color', colorSecondaryO10);
        cy.get('.chip').should('have.css', 'color', colorSecondaryDark);
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colorSecondaryO10);
        cy.get('.chip').should('have.css', 'color', colorSecondaryDark);
        cy.get('.chip').then((e) => {
            e[0].setAttribute('is-clickable', '');
        });
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colorSecondaryLight);
        cy.get('.chip').should('have.css', 'color', colorSecondaryDark);
    });

    it('has correct font bg colors', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'font');
        });
        cy.get('.chip').should('have.css', 'background-color', colorFont);
        cy.get('.chip').should('have.css', 'color', colorBg);
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colorFont);
        cy.get('.chip').should('have.css', 'color', colorBg);
        cy.get('.chip').then((e) => {
            e[0].setAttribute('is-clickable', '');
        });
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colorFontDark);
        cy.get('.chip').should('have.css', 'color', colorBg);
    });

    it('has correct light font bg colors', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'font-light');
        });
        cy.get('.chip').should('have.css', 'background-color', colorFontLight);
        cy.get('.chip').should('have.css', 'color', colorFontDark);
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colorFontLight);
        cy.get('.chip').should('have.css', 'color', colorFontDark);
        cy.get('.chip').then((e) => {
            e[0].setAttribute('is-clickable', '');
        });
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colorFont);
        cy.get('.chip').should('have.css', 'color', colorBg);
    });

    it('has correct very light font bg colors', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'font-very-light');
        });
        cy.get('.chip').should('have.css', 'background-color', colorFontO10);
        cy.get('.chip').should('have.css', 'color', colorFontDark);
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colorFontO10);
        cy.get('.chip').should('have.css', 'color', colorFontDark);
        cy.get('.chip').then((e) => {
            e[0].setAttribute('is-clickable', '');
        });
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colorFontLight);
        cy.get('.chip').should('have.css', 'color', colorFontDark);
    });

    it('has correct success bg colors', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'success');
        });
        cy.get('.chip').should('have.css', 'background-color', colorSuccess);
        cy.get('.chip').should('have.css', 'color', colorBg);
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colorSuccess);
        cy.get('.chip').should('have.css', 'color', colorBg);
        cy.get('.chip').then((e) => {
            e[0].setAttribute('is-clickable', '');
        });
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colorSuccessDarken15);
        cy.get('.chip').should('have.css', 'color', colorBg);
    });

    it('has warning success bg colors', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'warning');
        });
        cy.get('.chip').should('have.css', 'background-color', colorWarning);
        cy.get('.chip').should('have.css', 'color', colorBg);
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colorWarning);
        cy.get('.chip').should('have.css', 'color', colorBg);
        cy.get('.chip').then((e) => {
            e[0].setAttribute('is-clickable', '');
        });
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colorWarningDarken15);
        cy.get('.chip').should('have.css', 'color', colorBg);
    });

    it('has warning error bg colors', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'error');
        });
        cy.get('.chip').should('have.css', 'background-color', colorError);
        cy.get('.chip').should('have.css', 'color', colorBg);
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colorError);
        cy.get('.chip').should('have.css', 'color', colorBg);
        cy.get('.chip').then((e) => {
            e[0].setAttribute('is-clickable', '');
        });
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colorErrorDarken15);
        cy.get('.chip').should('have.css', 'color', colorBg);
    });
})

describe('toujou-chip - border-radius', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-chip--chip');
    });

    it('has correct "none: border-radius', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-border-radius', 'none');
        });
        cy.get('.chip').should('have.css', 'border-radius', '0px');
    });

    it('has correct small border-radius', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-border-radius', 'small');
        });
        cy.get('.chip').should('have.css', 'border-radius', '4px');
    });

    it('has correct medium border-radius', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-border-radius', 'medium');
        });
        cy.get('.chip').should('have.css', 'border-radius', '8px');
    });

    it('has correct round border-radius', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-border-radius', 'round');
        });
        cy.get('.chip').should('have.css', 'border-radius', '32px');
    });
});

describe('toujou-chip - size', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-chip--chip');
    });

    it('has correct "extra small" size', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-size', 'extra-small');
        });
        cy.get('.chip').should('have.css', 'font-size', '12px');
    });

    it('has correct "small" size', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-size', 'small');
        });
        cy.get('.chip').should('have.css', 'font-size', '14px');
    });

    it('has correct "small" size', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-size', 'normal');
        });
        cy.get('.chip').should('have.css', 'font-size', '16px');
    });
});

describe('toujou-chip - is uppercase', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-chip--chip');
    });

    it('has correct uppercase styles', () => {
        cy.get('.chip').should('have.css', 'text-transform', 'none');
        cy.get('.chip').then((e) => {
            e[0].setAttribute('is-uppercase', '');
        });
        cy.get('.chip').should('have.css', 'text-transform', 'uppercase');
    });
});

export {}
