/// <reference types="cypress" />
/// <reference types="cypress-real-events" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

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

    it('has correct transparent bg styles', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'transparent');
        });
        cy.get('.chip').should('have.css', 'background-color', colors.colorTransparent);
        cy.get('.chip').should('have.css', 'color', colors.colorFont);
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colors.colorTransparent);
        cy.get('.chip').should('have.css', 'color', colors.colorFont);
        cy.get('.chip').then((e) => {
            e[0].setAttribute('is-clickable', '');
        });
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colors.colorTransparent);
        cy.get('.chip').should('have.css', 'color', colors.colorFontDark);
    });

    it('has correct primary bg styles', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'primary');
        });
        cy.get('.chip').should('have.css', 'background-color', colors.colorPrimary);
        cy.get('.chip').should('have.css', 'color', colors.colorBg);
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colors.colorPrimary);
        cy.get('.chip').should('have.css', 'color', colors.colorBg);
        cy.get('.chip').then((e) => {
            e[0].setAttribute('is-clickable', '');
        });
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colors.colorPrimaryDark);
        cy.get('.chip').should('have.css', 'color', colors.colorBg);
    });

    it('has correct light primary bg styles', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'primary-light');
        });
        cy.get('.chip').should('have.css', 'background-color', colors.colorPrimaryLight);
        cy.get('.chip').should('have.css', 'color', colors.colorBg);
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colors.colorPrimaryLight);
        cy.get('.chip').should('have.css', 'color', colors.colorBg);
        cy.get('.chip').then((e) => {
            e[0].setAttribute('is-clickable', '');
        });
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colors.colorPrimary);
        cy.get('.chip').should('have.css', 'color', colors.colorBg);
    });

    it('has correct very light primary bg styles', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'primary-very-light');
        });
        cy.get('.chip').should('have.css', 'background-color', colors.colorPrimaryO10);
        cy.get('.chip').should('have.css', 'color', colors.colorPrimaryDark);
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colors.colorPrimaryO10);
        cy.get('.chip').should('have.css', 'color', colors.colorPrimaryDark);
        cy.get('.chip').then((e) => {
            e[0].setAttribute('is-clickable', '');
        });
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colors.colorPrimaryLight);
        cy.get('.chip').should('have.css', 'color', colors.colorFontDark);
    });

    it('has correct secondary bg styles', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'secondary');
        });
        cy.get('.chip').should('have.css', 'background-color', colors.colorSecondary);
        cy.get('.chip').should('have.css', 'color', colors.colorBg);
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colors.colorSecondary);
        cy.get('.chip').should('have.css', 'color', colors.colorBg);
        cy.get('.chip').then((e) => {
            e[0].setAttribute('is-clickable', '');
        });
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colors.colorSecondaryDark);
        cy.get('.chip').should('have.css', 'color', colors.colorBg);
    });

    it('has correct light secondary bg styles', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'secondary-light');
        });
        cy.get('.chip').should('have.css', 'background-color', colors.colorSecondaryLight);
        cy.get('.chip').should('have.css', 'color', colors.colorBg);
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colors.colorSecondaryLight);
        cy.get('.chip').should('have.css', 'color', colors.colorBg);
        cy.get('.chip').then((e) => {
            e[0].setAttribute('is-clickable', '');
        });
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colors.colorSecondary);
        cy.get('.chip').should('have.css', 'color', colors.colorBg);
    });

    it('has correct very light secondary bg styles', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'secondary-very-light');
        });
        cy.get('.chip').should('have.css', 'background-color', colors.colorSecondaryO10);
        cy.get('.chip').should('have.css', 'color', colors.colorSecondaryDark);
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colors.colorSecondaryO10);
        cy.get('.chip').should('have.css', 'color', colors.colorSecondaryDark);
        cy.get('.chip').then((e) => {
            e[0].setAttribute('is-clickable', '');
        });
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colors.colorSecondaryLight);
        cy.get('.chip').should('have.css', 'color', colors.colorFontDark);
    });

    it('has correct font bg styles', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'font');
        });
        cy.get('.chip').should('have.css', 'background-color', colors.colorFont);
        cy.get('.chip').should('have.css', 'color', colors.colorBg);
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colors.colorFont);
        cy.get('.chip').should('have.css', 'color', colors.colorBg);
        cy.get('.chip').then((e) => {
            e[0].setAttribute('is-clickable', '');
        });
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colors.colorFontDark);
        cy.get('.chip').should('have.css', 'color', colors.colorBg);
    });

    it('has correct light font bg styles', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'font-light');
        });
        cy.get('.chip').should('have.css', 'background-color', colors.colorFontLight);
        cy.get('.chip').should('have.css', 'color', colors.colorFontDark);
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colors.colorFontLight);
        cy.get('.chip').should('have.css', 'color', colors.colorFontDark);
        cy.get('.chip').then((e) => {
            e[0].setAttribute('is-clickable', '');
        });
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colors.colorFont);
        cy.get('.chip').should('have.css', 'color', colors.colorBg);
    });

    it('has correct very light font bg styles', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'font-very-light');
        });
        cy.get('.chip').should('have.css', 'background-color', colors.colorFontO10);
        cy.get('.chip').should('have.css', 'color', colors.colorFontDark);
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colors.colorFontO10);
        cy.get('.chip').should('have.css', 'color', colors.colorFontDark);
        cy.get('.chip').then((e) => {
            e[0].setAttribute('is-clickable', '');
        });
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colors.colorFontLight);
        cy.get('.chip').should('have.css', 'color', colors.colorFontDark);
    });

    it('has correct success bg styles', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'success');
        });
        cy.get('.chip').should('have.css', 'background-color', colors.colorSuccess);
        cy.get('.chip').should('have.css', 'color', colors.colorBg);
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colors.colorSuccess);
        cy.get('.chip').should('have.css', 'color', colors.colorBg);
        cy.get('.chip').then((e) => {
            e[0].setAttribute('is-clickable', '');
        });
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colors.colorSuccessDarken15);
        cy.get('.chip').should('have.css', 'color', colors.colorBg);
    });

    it('has correct warning bg styles', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'warning');
        });
        cy.get('.chip').should('have.css', 'background-color', colors.colorWarning);
        cy.get('.chip').should('have.css', 'color', colors.colorBg);
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colors.colorWarning);
        cy.get('.chip').should('have.css', 'color', colors.colorBg);
        cy.get('.chip').then((e) => {
            e[0].setAttribute('is-clickable', '');
        });
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colors.colorWarningDarken15);
        cy.get('.chip').should('have.css', 'color', colors.colorBg);
    });

    it('has correct error bg styles', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-bg-color', 'error');
        });
        cy.get('.chip').should('have.css', 'background-color', colors.colorError);
        cy.get('.chip').should('have.css', 'color', colors.colorBg);
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colors.colorError);
        cy.get('.chip').should('have.css', 'color', colors.colorBg);
        cy.get('.chip').then((e) => {
            e[0].setAttribute('is-clickable', '');
        });
        cy.get('.chip').realHover();
        cy.get('.chip').should('have.css', 'background-color', colors.colorErrorDarken15);
        cy.get('.chip').should('have.css', 'color', colors.colorBg);
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
        cy.get('.chip').should('have.css', 'border-radius', tokens.borderRadius.normal);
    });

    it('has correct medium border-radius', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-border-radius', 'medium');
        });
        cy.get('.chip').should('have.css', 'border-radius', tokens.borderRadius.m);
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
        cy.get('.chip').should('have.css', 'font-size', tokens.type.size.xs);
    });

    it('has correct "small" size', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-size', 'small');
        });
        cy.get('.chip').should('have.css', 'font-size', tokens.type.size.s);
    });

    it('has correct "small" size', () => {
        cy.get('.chip').then((e) => {
            e[0].setAttribute('chip-size', 'normal');
        });
        cy.get('.chip').should('have.css', 'font-size', tokens.type.size.normal);
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
