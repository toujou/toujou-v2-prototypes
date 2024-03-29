/* JS Elements */
import { initSmoothScroll } from "./globals/_smooth-scroll";

if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(() => {
        initSmoothScroll();
    });
} else {
    document.addEventListener("DOMContentLoaded", () => {
        initSmoothScroll();
    });
}
