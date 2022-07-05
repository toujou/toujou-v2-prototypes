/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

function unquote(str: string) {
    return str.replace(/(^")|("$)/g, '');
}

/**
 * Get a css property from an Element's "before" pseudo-element
 * https://stackoverflow.com/questions/55516990/cypress-testing-pseudo-css-class-before
 */
// @ts-ignore
Cypress.Commands.add('before', { prevSubject: 'element' }, (el: HTMLElement[], property) => {
        const win = el[0].ownerDocument.defaultView;
        const before = win?.getComputedStyle(el[0], 'before');
        // @ts-ignore
        return unquote(before.getPropertyValue(property));
    },
);

/**
 * Reset the hovered element (hovered with cypress-real-events)
 */
// @ts-ignore
Cypress.Commands.add('resetRealHover', { prevSubject: 'element' }, () => {
    cy.get("body").realHover({ position: "topLeft" });
    return;
});

export {}