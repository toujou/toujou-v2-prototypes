function t(){const t=window.matchMedia("(prefers-reduced-motion: reduce)").matches;document.querySelectorAll('video[data-is-autoplay="1"]').forEach((e=>{t?e.setAttribute("controls",""):e.setAttribute("autoplay","")}))}"loading"!==document.readyState?setTimeout((()=>{t()})):document.addEventListener("DOMContentLoaded",(()=>{t()}));
//# sourceMappingURL=video-autoplay.js.map
