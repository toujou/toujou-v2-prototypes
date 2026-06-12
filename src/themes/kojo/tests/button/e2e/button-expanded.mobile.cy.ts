/// <reference types="cypress" />
/// <reference types="cypress-real-events" />

describe('toujou-button expanded [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-button--button&args=isExpanded:!true');
        // @ts-ignore
        cy.get('.button').resetRealHover();
    });

    it('has correct expanded attributes', () => {
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

export {}
