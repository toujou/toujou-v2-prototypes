/**
 * Config for the available Themes
 */

// Import theme stylesheets
import kojoStylesheetUrl from '../../src/styles/StorybookStyles.css?url';
import toujouStylesheetUrl from '../../src/styles/StorybookTestToujouStyles.css?url';

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

/** The theme value to activate on initial load */
export const DEFAULT_THEME = 'kojo';
