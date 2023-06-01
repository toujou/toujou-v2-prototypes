/// <reference types="cypress" />
/// <reference types="cypress-real-events" />

describe('toujou-button with icon [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
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

    it('shows icon on the correct side', () => {
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
