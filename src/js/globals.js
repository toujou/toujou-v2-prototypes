/* Polyfills */
import '@ungap/custom-elements';

/* JS Elements */
import { initMainNav } from "./elements/main-nav";

function initGlobalsScripts() {
    console.log('11111');
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
