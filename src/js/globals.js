/* Polyfills */
import '@ungap/custom-elements';

/* JS Elements */
import { initSmoothScroll } from "./globals/_smooth-scroll";
import { initMainNav } from "./elements/main-nav";

function initGlobalsScripts() {
    initMainNav();
    initSmoothScroll();
}

if (document.readyState !== "loading") {
    setTimeout(() => {
        initGlobalsScripts();
    });
} else {
    document.addEventListener("DOMContentLoaded", () => {
        initGlobalsScripts();
    });
}
