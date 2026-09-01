/* Polyfills */
import '@ungap/custom-elements';

/* JS Elements */
import { initMainNav } from "./elements/main-nav";
import { initTopbarActionsKeyboardBehavior } from "./elements/topbar-actions";

function initGlobalsScripts() {
    initMainNav();
    initTopbarActionsKeyboardBehavior()
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
