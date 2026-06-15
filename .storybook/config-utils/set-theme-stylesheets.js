/**
 * Dynamically loads a theme-specific stylesheet into the document <head>
 * based on the active Storybook global theme selection.
 */

import { THEMES } from './themes-config';

/** @type {string} ID applied to the active theme <link> element */
const THEME_STYLESHEET_ID = 'storybook-theme-stylesheet';

/**
 * Lookup map derived from THEMES for efficient stylesheet URL resolution.
 * Keyed by theme value (e.g. 'kojo', 'toujou') → stylesheet URL.
 *
 * @type {Record<string, string>}
 */
const THEME_STYLESHEET_MAP = Object.fromEntries(
    THEMES.map(({ value, stylesheet }) => [value, stylesheet])
);

/**
 * Replaces the active theme stylesheet in <head> with the one for the given theme.
 *
 * @param {string} theme - A theme value key (e.g. 'kojo', 'toujou')
 */
const loadStylesheet = (theme) => {
    const existing = document.getElementById(THEME_STYLESHEET_ID);
    if (existing) existing.remove();

    const url = THEME_STYLESHEET_MAP[theme];

    if (!url) {
        console.warn(`[setThemeStylesheets] No stylesheet registered for theme: "${theme}"`);
        return;
    }

    const link = document.createElement('link');
    link.id = THEME_STYLESHEET_ID;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;

    // Trigger a resize event once the stylesheet has loaded so layout-dependent
    // components (e.g. Splide sliders) recalculate after styles are applied
    link.addEventListener('load', () => {
        window.dispatchEvent(new Event('resize'));
    });

    document.head.appendChild(link);

    console.log(
        `%c 🎨 Theme stylesheet loaded: ${String(theme)} `,
        'background: #1565C0; color: #fff; font-weight: bold; border-radius: 4px; padding: 2px 6px;'
    );
};

/**
 * Storybook decorator helper — reads the active theme from Storybook globals and loads the corresponding stylesheet.
 *
 * @param {{ globals: { toujouTheme: string } }} context - Storybook decorator context
 */
export const setThemeStylesheets = (context) => {
    const theme = context?.globals?.toujouTheme;

    if (!theme) {
        console.warn('[setThemeStylesheets] No theme found in Storybook globals.');
        return;
    }

    loadStylesheet(theme);
};
