/* Polyfills */
import '@ungap/custom-elements';

/* JS Elements */
import { initMainNav } from "./elements/main-nav";

function initGlobalsScripts() {
    initMainNav();
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
