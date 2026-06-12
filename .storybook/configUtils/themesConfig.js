/**
 * Config for the available Themes
 */

// Import theme stylesheets
import kojoStylesheetUrl from '../../src/themes/kojo/styles/StorybookStyles.css?url';
import toujouStylesheetUrl from '../../src/themes/toujou/styles/toujouStorybookStyles.css?url';

/**
 * @typedef {Object} Theme
 * @property {string} value       - The theme key used in Storybook globals
 * @property {string} title       - The label shown in the toolbar dropdown
 * @property {string} stylesheet  - Vite-resolved URL for the theme's stylesheet
 */

/** @type {Theme[]} */
export const THEMES = [
    { value: 'kojo',   title: 'Theme: Kojo',   stylesheet: kojoStylesheetUrl   },
    { value: 'toujou', title: 'Theme: Toujou', stylesheet: toujouStylesheetUrl },
];

/** The theme value to activate on the initial load */
export const DEFAULT_THEME = 'kojo';
