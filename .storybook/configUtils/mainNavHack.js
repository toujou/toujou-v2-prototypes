import { initMainNav } from "../../src/js/elements/main-nav";

const MAIN_NAV_HACK_DELAY = 500;

// Hack no initialize the main nav inside Storybook
setTimeout(() => {
    const mainNavEl = document.querySelector('.main-nav');

    if (!mainNavEl || mainNavEl.mainNav) return;
    initMainNav();
}, MAIN_NAV_HACK_DELAY);
