// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-real-events/support'
import 'cypress-axe'

// Fix the "Error: ResizeObserver loop limit exceeded" error
Cypress.setMaxListeners(40);
Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(`----------- 1 uncaught:exception: ${err}`);
    const resizeObserverLoopLimitExcedError = 'ResizeObserver loop limit exceeded';
    const resizeObserverLoopNotificationError =
        'ResizeObserver loop completed with undelivered notifications';
    if (
        err.message.indexOf(resizeObserverLoopLimitExcedError) !== -1 ||
        err.message.indexOf(resizeObserverLoopNotificationError) !== -1
    )  return false;
});

// Alternatively you can use CommonJS syntax:
// require('./commands')
