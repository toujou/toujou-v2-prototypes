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
 * Get a css property from an Element's "after" pseudo-element
 * https://stackoverflow.com/questions/55516990/cypress-testing-pseudo-css-class-before
 */
// @ts-ignore
Cypress.Commands.add('after', { prevSubject: 'element' }, (el: HTMLElement[], property) => {
        const win = el[0].ownerDocument.defaultView;
        const before = win?.getComputedStyle(el[0], 'after');
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

/**
 * Check if an element is visible inside the viewport
 * From here: https://github.com/cypress-io/cypress/issues/877
 */
// @ts-ignore
Cypress.Commands.add('isInViewport', element => {
    // @ts-ignore
    cy.get(element).then($el => {
        // @ts-ignore
        const bottom = Cypress.$(cy.state('window')).height();
        const rect = $el[0].getBoundingClientRect();

        expect(rect.top).not.to.be.greaterThan(bottom);
        expect(rect.bottom).not.to.be.greaterThan(bottom);
        expect(rect.top).not.to.be.greaterThan(bottom);
        expect(rect.bottom).not.to.be.greaterThan(bottom);
    });
})

/**
 * Check equality of trimmed text (otherwise we always get errors because of empty spaces)
 * From here: https://github.com/cypress-io/cypress/issues/3887
 */
// @ts-ignore
Cypress.Commands.add("shouldHaveTrimmedText", { prevSubject: true },
    (subject, equalTo) => {
        // @ts-ignore
        expect(subject.text().trim()).to.eq(equalTo);
        return subject;
    },
);

export {}
