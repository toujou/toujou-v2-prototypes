import { initMainNav } from "../../src/themes/kojo/js/elements/main-nav";

/**
 * The main nav web component requires manual initialization inside Storybook
 * because the custom element registry fires before the DOM is fully painted
 * in the iframe context. A short delay works around this.
 */

/** Delay in ms to wait for the Storybook iframe to finish rendering before initializing the nav */
const MAIN_NAV_HACK_DELAY = 500;

// Hack to initialize the main nav inside Storybook
setTimeout(() => {
    const mainNavEl = document.querySelector('.main-nav');

    if (!mainNavEl || mainNavEl.mainNav) return;
    initMainNav();
}, MAIN_NAV_HACK_DELAY);
