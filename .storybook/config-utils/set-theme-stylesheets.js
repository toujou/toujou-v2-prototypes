/**
 * Dynamically loads a theme-specific stylesheet into the document <head>
 * based on the active Storybook global theme selection.
 */

import { THEMES } from './themes-config';

/** @type {string} ID applied to the active theme <link> element */
const THEME_STYLESHEET_ID = 'storybook-theme-stylesheet';

/**
 * Lookup map derived from THEMES for efficient stylesheet URL resolution.
 * @type {Record<string, string>}
 */
const THEME_STYLESHEET_MAP = Object.fromEntries(
    THEMES.map(({ value, stylesheet }) => [value, stylesheet])
);

/**
 * Replaces the active theme stylesheet in <head> with the one for the given theme.
 * Skips loading if the requested theme is already active in the DOM.
 * Triggers a resize event on 'load' so layout-dependent components recalculate.
 *
 * @param {string} theme - A theme value key (e.g. 'kojo', 'toujou')
 * @returns {Promise<void>}
 */
const loadStylesheet = (theme) => {
    return new Promise((resolve) => {
        const existing = document.getElementById(THEME_STYLESHEET_ID);

        if (existing && existing.dataset.theme === theme) {
            resolve();
            return;
        }

        if (existing) existing.remove();

        const url = THEME_STYLESHEET_MAP[theme];
        if (!url) {
            console.warn(`[setThemeStylesheets] No stylesheet registered for theme: "${theme}"`);
            resolve();
            return;
        }

        const link = document.createElement('link');
        link.id = THEME_STYLESHEET_ID;
        link.dataset.theme = theme;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = url;

        link.addEventListener('load', () => {
            // Trigger resize so layout-dependent components (e.g. Splide sliders)
            // recalculate after the new stylesheet has been applied
            window.dispatchEvent(new Event('resize'));
            console.log(
                `%c 🎨 Theme stylesheet loaded: ${theme} `,
                'background: #1565C0; color: #fff; font-weight: bold; border-radius: 4px; padding: 2px 6px;'
            );
            resolve();
        });

        link.addEventListener('error', () => {
            console.warn(`[setThemeStylesheets] Failed to load stylesheet for theme: "${theme}"`);
            resolve();
        });

        document.head.appendChild(link);
    });
};

/**
 * Storybook decorator helper:
 * reads the active theme from Storybook globals and loads the corresponding stylesheet.
 *
 * @param {{ globals: { toujouTheme: string } }} context - Storybook decorator context
 * @returns {Promise<void>}
 */
export const setThemeStylesheets = (context) => {
    const theme = context?.globals?.toujouTheme;

    if (!theme) {
        console.warn('[setThemeStylesheets] No theme found in Storybook globals.');
        return Promise.resolve();
    }

    // Check the DOM directly rather than a module-level variable —
    // avoids stale state across hot reloads
    const existing = document.getElementById(THEME_STYLESHEET_ID);
    if (existing?.dataset.theme === theme) return Promise.resolve();

    return loadStylesheet(theme);
};
