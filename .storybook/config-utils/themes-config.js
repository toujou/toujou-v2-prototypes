/**
 * Single source of truth for all available Storybook themes.
 */

// Import theme stylesheets
import storybookStylesThemeKojo from '../../src/themes/kojo/styles/storybook-styles-theme-kojo.css?url';
import storybookStylesThemeToujou from '../../src/themes/toujou/styles/storybook-styles-theme-toujou.css?url';

/**
 * @typedef {Object} Theme
 * @property {string} value       - The theme key used in Storybook globals
 * @property {string} title       - The label shown in the toolbar dropdown
 * @property {string} stylesheet  - Vite-resolved URL for the theme's stylesheet
 */

/** @type {Theme[]} */
export const THEMES = [
    { value: 'kojo',   title: 'Theme: Kojo',   stylesheet: storybookStylesThemeKojo   },
    { value: 'toujou', title: 'Theme: Toujou', stylesheet: storybookStylesThemeToujou },
];

/** The theme value to activate on the initial load */
export const DEFAULT_THEME = 'kojo';
