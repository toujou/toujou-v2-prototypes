/// <reference types="cypress" />

const colors = Cypress.env('colors');

describe('top button', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-topbutton--topbutton');
        // @ts-ignore
        cy.get('body').resetRealHover();
        cy.scrollTo('top').wait(1000);
    });

    it('has correct structure', () => {
        cy.get('toujou-topbutton').should('exist');
        cy.get('toujou-topbutton').invoke('prop', 'tagName').should('eq', 'TOUJOU-TOPBUTTON');
        cy.get('toujou-topbutton').invoke('attr', 'class').should('eq', 'topbutton');
        cy.get('toujou-topbutton').invoke('attr', 'role').should('eq', 'button');
        cy.get('toujou-topbutton').invoke('attr', 'title').should('eq', 'Nach oben');
        cy.get('toujou-topbutton').invoke('attr', 'aria-hidden').should('eq', 'true');
        cy.get('toujou-topbutton').invoke('attr', 'tabindex').should('eq', '0');
        cy.get('toujou-topbutton toujou-icon').should('exist');
        cy.get('toujou-topbutton toujou-icon').invoke('attr', 'class').should('eq', 'icon');
        cy.get('toujou-topbutton toujou-icon').invoke('attr', 'icon-name').should('eq', 'arrow-up');
        cy.get('toujou-topbutton toujou-icon').invoke('attr', 'icon-size').should('eq', 'm');
        cy.get('toujou-topbutton toujou-icon').invoke('attr', 'icon-color').should('eq', 'primary');
    });

    it('has correct styles', () => {
        cy.get('toujou-topbutton').should('have.css', 'display', 'flex');
        cy.get('toujou-topbutton').should('have.css', 'align-items', 'center');
        cy.get('toujou-topbutton').should('have.css', 'justify-content', 'center');
        cy.get('toujou-topbutton').should('have.css', 'background-color', colors.colorBg);
        cy.get('toujou-topbutton').should('have.css', 'position', 'fixed');
        cy.get('toujou-topbutton').should('have.css', 'bottom', '16px');
        cy.get('toujou-topbutton').should('have.css', 'right', '16px');
        cy.get('toujou-topbutton').should('have.css', 'padding', '8px');
        cy.get('toujou-topbutton').should('have.css', 'margin', '0px');
        cy.get('toujou-topbutton').should('have.css', 'border-radius', '4px');
        cy.get('toujou-topbutton').should('have.css', 'border', `1px solid ${colors.colorPrimary}`);
        cy.get('toujou-topbutton').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, 84)');
        cy.get('toujou-topbutton').should('have.css', 'transition', 'transform 0.5s ease-in-out 0s');
        cy.get('toujou-topbutton').should('not.be.visible');
    });

    it('scroll can toggle visibility', () => {
        cy.get('toujou-topbutton').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, 84)');
        cy.get('toujou-topbutton').should('not.be.visible');
        cy.scrollTo('bottom').wait(500);
        cy.get('toujou-topbutton').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, 0)');
        cy.get('toujou-topbutton').should('be.visible');
        cy.scrollTo('top').wait(500);
        cy.get('toujou-topbutton').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, 84)');
        cy.get('toujou-topbutton').should('not.be.visible');
        cy.scrollTo('bottom').wait(500);
        cy.get('toujou-topbutton').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, 0)');
        cy.get('toujou-topbutton').should('be.visible');
    });

    it('has correct hover styles', () => {
        cy.scrollTo('bottom').wait(1000);
        cy.get('toujou-topbutton').should('have.css', 'border', `1px solid ${colors.colorPrimary}`);
        cy.get('toujou-topbutton').should('have.css', 'background-color', colors.colorBg);
        cy.get('toujou-topbutton .icon').should('have.css', 'background-color', colors.colorPrimary);
        // @ts-ignore
        cy.get('toujou-topbutton').realHover();
        cy.get('toujou-topbutton').should('have.css', 'border', `1px solid ${colors.colorPrimaryDark}`);
        cy.get('toujou-topbutton').should('have.css', 'background-color', colors.colorPrimaryDark);
        cy.get('toujou-topbutton .icon').should('have.css', 'background-color', colors.colorBg);
    });

    it('has correct focus styles', () => {
        cy.scrollTo('bottom').wait(1000);
        cy.get('toujou-topbutton').should('have.css', 'border', `1px solid ${colors.colorPrimary}`);
        cy.get('toujou-topbutton').should('have.css', 'background-color', colors.colorBg);
        cy.get('toujou-topbutton').should('have.css', 'outline', 'rgb(0, 0, 0) none 0px');
        cy.get('toujou-topbutton .icon').should('have.css', 'background-color', colors.colorPrimary);
        // @ts-ignore
        cy.get('toujou-topbutton').focus();
        cy.get('toujou-topbutton').should('have.css', 'border', `1px solid ${colors.colorPrimaryDark}`);
        cy.get('toujou-topbutton').should('have.css', 'background-color', colors.colorPrimaryDark);
        cy.get('toujou-topbutton').should('have.css', 'outline', `${colors.colorPrimary} solid 2px`);
        cy.get('toujou-topbutton').should('have.css', 'outline-offset', '2px');
        cy.get('toujou-topbutton .icon').should('have.css', 'background-color', colors.colorBg);
    });

    it('scrollup on click', () => {
        cy.scrollTo('bottom').wait(1000);
        cy.get('toujou-topbutton').should('have.css', 'border', `1px solid ${colors.colorPrimary}`);
        cy.get('.topbutton').then(() => {
            // @ts-ignore
            expect(cy.state('window').scrollY).to.eq(2044);
        });
        cy.get('toujou-topbutton').click().wait(1000);
        cy.get('.topbutton').then(() => {
            // @ts-ignore
            expect(cy.state('window').scrollY).to.eq(0);
            // @ts-ignore
            expect(document.activeElement).to.eq(document.querySelector('body'));
        });
    });

    it('can be activated on SPACE click', () => {
        cy.scrollTo('bottom').wait(1000);
        cy.get('toujou-topbutton').should('have.css', 'border', `1px solid ${colors.colorPrimary}`);
        cy.get('.topbutton').then(() => {
            // @ts-ignore
            expect(cy.state('window').scrollY).to.eq(2044);
        });
        cy.get('toujou-topbutton').focus().type(' ').wait(1000);
        cy.get('.topbutton').then(() => {
            // @ts-ignore
            expect(cy.state('window').scrollY).to.eq(0);
            // @ts-ignore
            expect(document.activeElement).to.eq(document.querySelector('body'));
        });
    });

    it('can be activated on ENTER click', () => {
        cy.scrollTo('bottom').wait(1000);
        cy.get('toujou-topbutton').should('have.css', 'border', `1px solid ${colors.colorPrimary}`);
        cy.get('.topbutton').then(() => {
            // @ts-ignore
            expect(cy.state('window').scrollY).to.eq(2044);
        });
        cy.get('toujou-topbutton').focus().type('{enter}').wait(1000);
        cy.get('.topbutton').then(() => {
            // @ts-ignore
            expect(cy.state('window').scrollY).to.eq(0);
            // @ts-ignore
            expect(document.activeElement).to.eq(document.querySelector('body'));
        });
    });

})

export {}
