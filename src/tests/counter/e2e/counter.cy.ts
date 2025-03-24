/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

// @ts-ignore
import ToujouCounter from '../../../../node_modules/@toujou/toujou-counter';

describe('counter', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-counter--counter');
    });

    it('has correct class and tag name', () => {
        cy.get('toujou-counter').should('have.prop', 'tagName').should('eq', 'TOUJOU-COUNTER');
        cy.get('toujou-counter').invoke('attr', 'class').should('eq', 'counter');
    });

    it('has correct attributes', () => {
        cy.get('toujou-counter').invoke('attr', 'aria-label').should('eq', '1000 - Default');
        cy.get('toujou-counter').invoke('attr', 'element-design').should('eq', 'default');
        cy.get('toujou-counter').invoke('attr', 'start-number').should('eq', '1');
        cy.get('toujou-counter').invoke('attr', 'end-number').should('eq', '123');
        cy.get('toujou-counter').invoke('attr', 'animation-speed').should('eq', 'medium');
        cy.get('toujou-counter').invoke('attr', 'tabindex').should('eq', '0');
    });

    it('has correct styles', () => {
        cy.get('toujou-counter').should('have.css', 'display', 'flex');
        cy.get('toujou-counter').should('have.css', 'flex-direction', 'column');
        cy.get('toujou-counter').should('have.css', 'align-items', 'center');
        cy.get('toujou-counter').should('have.css', 'justify-content', 'center');
        cy.get('toujou-counter').should('have.css', 'flex', '0 0 100%');
        cy.get('toujou-counter').should('have.css', 'align-self', 'stretch');
        cy.get('toujou-counter').should('have.css', 'border-radius', tokens.borderRadius.normal);
        cy.get('toujou-counter').should('have.css', 'padding', tokens.spacing.m);
        cy.get('toujou-counter').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
        cy.get('toujou-counter').should('have.css', 'width', '1440px');
    });

    it('has correct figure styles', () => {
        cy.get('toujou-counter .counter__figure').should('have.css', 'height', '48px');
        cy.get('toujou-counter .counter__figure').should('have.css', 'width', '48px');
        cy.get('toujou-counter .counter__figure').should('have.css', 'margin', '0px 672px 16px');
        cy.get('toujou-counter .counter__figure').should('have.css', 'border-radius', tokens.borderRadius.normal);
        cy.get('toujou-counter .counter__figure').should('have.css', 'overflow', 'hidden');
    });

    it('has correct image styles', () => {
        cy.get('toujou-counter .counter__image').should('have.css', 'height', '48px');
        cy.get('toujou-counter .counter__image').should('have.css', 'width', '48px');
        cy.get('toujou-counter .counter__image').should('have.css', 'margin', '0px');
        cy.get('toujou-counter .counter__image').should('have.css', 'object-fit', 'cover');
    });

    it('has correct number styles', () => {
        cy.get('toujou-counter .counter__number').should('have.css', 'font-family', tokens.type.fontFamily.headline);
        cy.get('toujou-counter .counter__number').should('have.css', 'font-weight', tokens.type.fontWeight.normal);
        cy.get('toujou-counter .counter__number').should('have.css', 'font-size', tokens.type.size.l);
        cy.get('toujou-counter .counter__number').should('have.css', 'color', colors.colorFont);
    });

    it('has correct title styles', () => {
        cy.get('toujou-counter .counter__title').should('have.css', 'font-family', tokens.type.fontFamily.text);
        cy.get('toujou-counter .counter__title').should('have.css', 'font-weight', tokens.type.fontWeight.normal);
        cy.get('toujou-counter .counter__title').should('have.css', 'font-size', tokens.type.size.ms);
        cy.get('toujou-counter .counter__title').should('have.css', 'color', colors.colorFont);
        cy.get('toujou-counter .counter__title').should('have.css', 'margin', '0px');
    });
})

describe('counter - primary', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-counter--counter&args=elementDesign:primary');
    });

    it('has correct attributes', () => {
        cy.get('toujou-counter').invoke('attr', 'element-design').should('eq', 'primary');
    });

    it('has correct styles', () => {
        cy.get('toujou-counter').should('have.css', 'background-color', colors.colorPrimary);
    });

    it('has correct number styles', () => {
        cy.get('toujou-counter .counter__number').should('have.css', 'color', colors.colorBg);
    });

    it('has correct title styles', () => {
        cy.get('toujou-counter .counter__title').should('have.css', 'color', colors.colorBg);
    });
})

describe('counter - secondary', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-counter--counter&args=elementDesign:secondary');
    });

    it('has correct attributes', () => {
        cy.get('toujou-counter').invoke('attr', 'element-design').should('eq', 'secondary');
    });

    it('has correct styles', () => {
        cy.get('toujou-counter').should('have.css', 'background-color', colors.colorSecondary);
    });

    it('has correct number styles', () => {
        cy.get('toujou-counter .counter__number').should('have.css', 'color', colors.colorBg);
    });

    it('has correct title styles', () => {
        cy.get('toujou-counter .counter__title').should('have.css', 'color', colors.colorBg);
    });
})

describe('counter - inverted', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-counter--counter&args=elementDesign:inverted');
    });

    it('has correct attributes', () => {
        cy.get('toujou-counter').invoke('attr', 'element-design').should('eq', 'inverted');
    });

    it('has correct styles', () => {
        cy.get('toujou-counter').should('have.css', 'background-color', colors.colorFont);
    });

    it('has correct number styles', () => {
        cy.get('toujou-counter .counter__number').should('have.css', 'color', colors.colorBg);
    });

    it('has correct title styles', () => {
        cy.get('toujou-counter .counter__title').should('have.css', 'color', colors.colorBg);
    });
})

describe('counter - events', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-counter--counter');
    });

    it('dispatches "toujou-counter-init" event', () => {
        cy.document().then((doc) => {
            doc.addEventListener('toujou-counter-init', cy.stub().as('toujou-counter-init'));
        })

        cy.get('@toujou-counter-init').should('have.been.calledOnce')
    });

    it('dispatches "toujou-counter-animation-start" event', () => {
        cy.document().then((doc) => {
            doc.addEventListener('toujou-counter-animation-start', cy.stub().as('toujou-counter-animation-start'));
        })

        cy.get('@toujou-counter-animation-start').should('have.been.calledOnce')
    });

    it('dispatches "toujou-counter-animation-end" event', () => {
        cy.document().then((doc) => {
            doc.addEventListener('toujou-counter-animation-end', cy.stub().as('toujou-counter-animation-end'));
        })

        cy.wait(3000);

        cy.get('@toujou-counter-animation-end').should('have.been.calledOnce')
    });
})

describe('counter - speed animation', () => {
    it('dispatches "toujou-counter-init" event', () => {
        cy.visit('/iframe.html?viewMode=story&id=components-counter--counter');

        cy.get('toujou-counter').then((counterEls) => {
            const counterEl: ToujouCounter = counterEls[0];

            expect(counterEl._animationDuration).to.equal(3000);
        })
    });

    it('dispatches "toujou-counter-init" event', () => {
        cy.visit('/iframe.html?viewMode=story&id=components-counter--counter&args=animationDuration:slow');

        cy.get('toujou-counter').then((counterEls) => {
            const counterEl: ToujouCounter = counterEls[0];

            expect(counterEl._animationDuration).to.equal(6000);
        })
    });

    it('dispatches "toujou-counter-init" event', () => {
        cy.visit('/iframe.html?viewMode=story&id=components-counter--counter&args=animationDuration:fast');

        cy.get('toujou-counter').then((counterEls) => {
            const counterEl: ToujouCounter = counterEls[0];

            expect(counterEl._animationDuration).to.equal(1500);
        })
    });
})

describe('counter - page lang', () => {
    it('dispatches "toujou-counter-init" event', () => {
        cy.visit('/iframe.html?viewMode=story&id=components-counter--counter');

        cy.get('toujou-counter').then((counterEls) => {
            const counterEl: ToujouCounter = counterEls[0];

            expect(counterEl._pageLang).to.equal('en');
        })
    });
})


export {}
