/// <reference types="cypress" />
/// <reference types="cypress-real-events" />

const colorPrimary = Cypress.env('colorPrimary');
const colorPrimaryDark = Cypress.env('colorPrimaryDark');
const colorPrimaryO10 = Cypress.env('colorPrimaryO10');
const colorSecondary = Cypress.env('colorSecondary');
const colorSecondaryDark = Cypress.env('colorSecondaryDark');
const colorSecondaryO10 = Cypress.env('colorSecondaryO10');
const colorFont = Cypress.env('colorFont');
const colorFontDark = Cypress.env('colorFontDark');
const colorFontLight = Cypress.env('colorFontLight');
const colorFontO10 = Cypress.env('colorFontO10');
const colorBg = Cypress.env('colorBg');
const colorTransparent = Cypress.env('colorTransparent');

describe('toujou-button', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-button--button');
        // @ts-ignore
        cy.get('.button').resetRealHover();
    });

    it('has correct attributes', () => {
        cy.get('.button').invoke('attr', 'class').should('eq', 'button');
        cy.get('.button').invoke('attr', 'button-variant').should('eq', 'primary');
        cy.get('.button').invoke('attr', 'button-type').should('eq', 'default');
        cy.get('.button').invoke('attr', 'button-size').should('eq', 'normal');
        cy.get('.button').invoke('prop', 'tagName').should('eq', 'BUTTON');
    });

    it('has correct primary colors', () => {
        cy.get('.button').should('have.css', 'background-color', colorPrimary);
        cy.get('.button').should('have.css', 'color', colorBg);
        cy.get('.button').should('have.css', 'border', `1px solid ${colorPrimary}`);
        cy.get('.button').realHover();
        cy.get('.button').should('have.css', 'background-color', colorPrimaryDark);
        cy.get('.button').should('have.css', 'color', colorBg);
        cy.get('.button').should('have.css', 'border', `1px solid ${colorPrimaryDark}`);
    });

    it('has correct secondary colors', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-variant', 'secondary');
        });
        cy.get('.button').should('have.css', 'background-color', colorSecondary);
        cy.get('.button').should('have.css', 'color', colorBg);
        cy.get('.button').should('have.css', 'border', `1px solid ${colorSecondary}`);
        cy.get('.button').realHover();
        cy.get('.button').should('have.css', 'background-color', colorSecondaryDark);
        cy.get('.button').should('have.css', 'color', colorBg);
        cy.get('.button').should('have.css', 'border', `1px solid ${colorSecondaryDark}`);
    });

    it('has correct font colors', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-variant', 'font');
        });
        cy.get('.button').should('have.css', 'background-color', colorFont);
        cy.get('.button').should('have.css', 'color', colorBg);
        cy.get('.button').should('have.css', 'border', `1px solid ${colorFont}`);
        cy.get('.button').realHover();
        cy.get('.button').should('have.css', 'background-color', colorFontDark);
        cy.get('.button').should('have.css', 'color', colorBg);
        cy.get('.button').should('have.css', 'border', `1px solid ${colorFontDark}`);
    });

    it('has correct disabled primary colors', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-variant', 'primary');
            e[0].setAttribute('disabled', '');
        });
        cy.get('.button').should('have.css', 'background-color', colorFontLight);
        cy.get('.button').should('have.css', 'color', colorFont);
        cy.get('.button').should('have.css', 'border', `1px solid ${colorFontLight}`);
    });

    it('has correct disabled secondary colors', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-variant', 'secondary');
            e[0].setAttribute('disabled', '');
        });
        cy.get('.button').should('have.css', 'background-color', colorFontLight);
        cy.get('.button').should('have.css', 'color', colorFont);
        cy.get('.button').should('have.css', 'border', `1px solid ${colorFontLight}`);
    });

    it('has correct disabled font colors', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-variant', 'secondary');
            e[0].setAttribute('disabled', '');
        });
        cy.get('.button').should('have.css', 'background-color', colorFontLight);
        cy.get('.button').should('have.css', 'color', colorFont);
        cy.get('.button').should('have.css', 'border', `1px solid ${colorFontLight}`);
    });

    it('has correct default font size', () => {
        cy.get('.button').then((el) => {
            // @ts-ignore
            const win = cy.state('window');
            const styles = win.getComputedStyle(el[0]);
            const buttonFontSize = styles.getPropertyValue('--button-font-size');
            expect(buttonFontSize.trim()).to.eq('1rem');
        })
    });

    it('has correct tiny font size', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-size', 'tiny');
        });
        cy.get('.button').then((el) => {
            // @ts-ignore
            const win = cy.state('window');
            const styles = win.getComputedStyle(el[0]);
            const buttonFontSize = styles.getPropertyValue('--button-font-size');
            expect(buttonFontSize.trim()).to.eq('0.75rem');
        })
    });

    it('has correct small font size', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-size', 'small');
        });
        cy.get('.button').then((el) => {
            // @ts-ignore
            const win = cy.state('window');
            const styles = win.getComputedStyle(el[0]);
            const buttonFontSize = styles.getPropertyValue('--button-font-size');
            expect(buttonFontSize.trim()).to.eq('0.875rem');
        })
    });

    it('has correct large font size', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-size', 'large');
        });
        cy.get('.button').then((el) => {
            // @ts-ignore
            const win = cy.state('window');
            const styles = win.getComputedStyle(el[0]);
            const buttonFontSize = styles.getPropertyValue('--button-font-size');
            expect(buttonFontSize.trim()).to.eq('1.25rem');
        })
    });
})

describe('toujou-button border', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-button--button&args=buttonType:border');
        // @ts-ignore
        cy.get('.button').resetRealHover();
    });

    it('has correct attributes', () => {
        cy.get('.button').invoke('attr', 'class').should('eq', 'button');
        cy.get('.button').invoke('attr', 'button-variant').should('eq', 'primary');
        cy.get('.button').invoke('attr', 'button-type').should('eq', 'border');
        cy.get('.button').invoke('attr', 'button-size').should('eq', 'normal');
        cy.get('.button').invoke('prop', 'tagName').should('eq', 'BUTTON');
    });

    it('has correct primary colors', () => {
        cy.get('.button').should('have.css', 'background-color', colorTransparent);
        cy.get('.button').should('have.css', 'color', colorPrimary);
        cy.get('.button').should('have.css', 'border', `1px solid ${colorPrimary}`);
        cy.get('.button').realHover();
        cy.get('.button').should('have.css', 'background-color', colorPrimaryDark);
        cy.get('.button').should('have.css', 'color', colorBg);
        cy.get('.button').should('have.css', 'border', `1px solid ${colorPrimaryDark}`);
    });

    it('has correct secondary colors', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-variant', 'secondary');
        });
        cy.get('.button').should('have.css', 'background-color', colorTransparent);
        cy.get('.button').should('have.css', 'color', colorSecondary);
        cy.get('.button').should('have.css', 'border', `1px solid ${colorSecondary}`);
        cy.get('.button').realHover();
        cy.get('.button').should('have.css', 'background-color', colorSecondaryDark);
        cy.get('.button').should('have.css', 'color', colorBg);
        cy.get('.button').should('have.css', 'border', `1px solid ${colorSecondaryDark}`);
    });

    it('has correct font colors', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-variant', 'font');
        });
        cy.get('.button').should('have.css', 'background-color', colorTransparent);
        cy.get('.button').should('have.css', 'color', colorFont);
        cy.get('.button').should('have.css', 'border', `1px solid ${colorFont}`);
        cy.get('.button').realHover();
        cy.get('.button').should('have.css', 'background-color', colorFontDark);
        cy.get('.button').should('have.css', 'color', colorBg);
        cy.get('.button').should('have.css', 'border', `1px solid ${colorFontDark}`);
    });

    it('has correct disabled primary border colors', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-variant', 'primary');
            e[0].setAttribute('disabled', '');
        });
        cy.get('.button').should('have.css', 'background-color', colorTransparent);
        cy.get('.button').should('have.css', 'color', colorFontLight);
        cy.get('.button').should('have.css', 'border', `1px solid ${colorFontLight}`);
    });

    it('has correct disabled secondary border colors', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-variant', 'secondary');
            e[0].setAttribute('disabled', '');
        });
        cy.get('.button').should('have.css', 'background-color', colorTransparent);
        cy.get('.button').should('have.css', 'color', colorFontLight);
        cy.get('.button').should('have.css', 'border', `1px solid ${colorFontLight}`);
    });

    it('has correct disabled font border colors', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-variant', 'font');
            e[0].setAttribute('disabled', '');
        });
        cy.get('.button').should('have.css', 'background-color', colorTransparent);
        cy.get('.button').should('have.css', 'color', colorFontLight);
        cy.get('.button').should('have.css', 'border', `1px solid ${colorFontLight}`);
    });
})

describe('toujou-button ghost', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-button--button&args=buttonType:ghost');
        // @ts-ignore
        cy.get('.button').resetRealHover();
    });

    it('has correct attributes', () => {
        cy.get('.button').invoke('attr', 'class').should('eq', 'button');
        cy.get('.button').invoke('attr', 'button-variant').should('eq', 'primary');
        cy.get('.button').invoke('attr', 'button-type').should('eq', 'ghost');
        cy.get('.button').invoke('attr', 'button-size').should('eq', 'normal');
        cy.get('.button').invoke('prop', 'tagName').should('eq', 'BUTTON');
    });

    it('has correct primary colors', () => {
        cy.get('.button').should('have.css', 'background-color', colorTransparent);
        cy.get('.button').should('have.css', 'color', colorPrimary);
        cy.get('.button').should('have.css', 'border', `1px solid ${colorTransparent}`);
        cy.get('.button').realHover();
        cy.get('.button').should('have.css', 'background-color', colorPrimaryO10);
        cy.get('.button').should('have.css', 'color', colorPrimary);
        cy.get('.button').should('have.css', 'border', `1px solid ${colorTransparent}`);
    });

    it('has correct secondary colors', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-variant', 'secondary');
        });
        cy.get('.button').should('have.css', 'background-color', colorTransparent);
        cy.get('.button').should('have.css', 'color', colorSecondary);
        cy.get('.button').should('have.css', 'border', `1px solid ${colorTransparent}`);
        cy.get('.button').realHover();
        cy.get('.button').should('have.css', 'background-color', colorSecondaryO10);
        cy.get('.button').should('have.css', 'color', colorSecondary);
        cy.get('.button').should('have.css', 'border', `1px solid ${colorTransparent}`);
    });

    it('has correct font colors', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-variant', 'font');
        });
        cy.get('.button').should('have.css', 'background-color', colorTransparent);
        cy.get('.button').should('have.css', 'color', colorFont);
        cy.get('.button').should('have.css', 'border', `1px solid ${colorTransparent}`);
        cy.get('.button').realHover();
        cy.get('.button').should('have.css', 'background-color', colorFontO10);
        cy.get('.button').should('have.css', 'color', colorFont);
        cy.get('.button').should('have.css', 'border', `1px solid ${colorTransparent}`);
    });

    it('has correct disabled primary ghost colors', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-variant', 'primary');
            e[0].setAttribute('disabled', '');
        });
        cy.get('.button').should('have.css', 'background-color', colorTransparent);
        cy.get('.button').should('have.css', 'color', colorFontLight);
        cy.get('.button').should('have.css', 'border', `1px solid ${colorTransparent}`);
    });

    it('has correct disabled secondary ghost colors', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-variant', 'secondary');
            e[0].setAttribute('disabled', '');
        });
        cy.get('.button').should('have.css', 'background-color', colorTransparent);
        cy.get('.button').should('have.css', 'color', colorFontLight);
        cy.get('.button').should('have.css', 'border', `1px solid ${colorTransparent}`);
    });

    it('has correct disabled font ghost colors', () => {
        cy.get('.button').then((e) => {
            e[0].setAttribute('button-variant', 'font');
            e[0].setAttribute('disabled', '');
        });
        cy.get('.button').should('have.css', 'background-color', colorTransparent);
        cy.get('.button').should('have.css', 'color', colorFontLight);
        cy.get('.button').should('have.css', 'border', `1px solid ${colorTransparent}`);
    });
})

describe('toujou-button expanded', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-button--button&args=isExpanded:true');
        // @ts-ignore
        cy.get('.button').resetRealHover();
    });

    it('has correct attributes', () => {
        cy.get('.button').invoke('attr', 'class').should('eq', 'button');
        cy.get('.button').invoke('attr', 'button-variant').should('eq', 'primary');
        cy.get('.button').invoke('attr', 'button-type').should('eq', 'default');
        cy.get('.button').invoke('attr', 'button-size').should('eq', 'normal');
        cy.get('.button').invoke('prop', 'tagName').should('eq', 'BUTTON');
        cy.get('.button').invoke('attr', 'is-expanded').should('exist');
    });

    it('has 100% width', () => {
        cy.get('.button').then((el) => {
            // @ts-ignore
            const win = cy.state('window');
            const styles = win.getComputedStyle(el[0]);
            const buttonWidth = styles.getPropertyValue('--button-width');
            expect(buttonWidth.trim()).to.eq('100%');
        })
    });
})

describe('toujou-button with icon', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-button--button&args=hasIcon:true');
        // @ts-ignore
        cy.get('.button').resetRealHover();
    });

    it('has correct attributes', () => {
        cy.get('.button').invoke('attr', 'class').should('eq', 'button');
        cy.get('.button').invoke('attr', 'button-variant').should('eq', 'primary');
        cy.get('.button').invoke('attr', 'button-type').should('eq', 'default');
        cy.get('.button').invoke('attr', 'button-size').should('eq', 'normal');
        cy.get('.button').invoke('prop', 'tagName').should('eq', 'BUTTON');
        cy.get('.button').invoke('attr', 'button-icon-position').should('eq', 'left');
    });

    it('has icon element', () => {
        cy.get('.button .button__icon').should('exist');
    });

    it.only('shows icon on the correct side', () => {
        cy.get('.button').then((el) => {
            // @ts-ignore
            const win = cy.state('window');
            const styles = win.getComputedStyle(el[0]);
            const buttonFlexDirection = styles.getPropertyValue('--button-flex-direction');
            expect(buttonFlexDirection.trim()).to.eq('row');
        });

        cy.get('.button').then((e) => {
            e[0].setAttribute('button-icon-position', 'right');
        });

        cy.get('.button').then((el) => {
            // @ts-ignore
            const win = cy.state('window');
            const styles = win.getComputedStyle(el[0]);
            const buttonFlexDirection = styles.getPropertyValue('--button-flex-direction');
            expect(buttonFlexDirection.trim()).to.eq('row-reverse');
        });
    });
})

export {}
