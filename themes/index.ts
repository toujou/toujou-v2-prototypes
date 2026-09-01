/**
 * Single source of truth for all available themes.
 *
 * This manifest is the single place where a theme's identity, source root and
 * build-input entries are declared. Consumers (Vite, Storybook, Cypress and the
 * copy scripts) derive their configuration from this file so that adding or
 * renaming a theme only requires touching one place.
 */

export type ThemeKey = 'kojo' | 'toujou';

/** A theme entry: kept Vite-compatible, so `THEME_ENTRIES[theme]` can be spread into `rollupOptions.input`. */
export type ThemeEntries = Record<string, string>;

export type ThemeManifest = {
    key: ThemeKey;
    /** Directory name under `src/themes/<root>` and `assets/themes/<root>`. */
    root: string;
    /** Build input entries spread into Vite's rollup `input` object. */
    entries: ThemeEntries;
    /** Cypress spec pattern for this theme's e2e / a11y tests. */
    specPattern: string;
};

export const FALLBACK_THEME: ThemeKey = 'kojo';

export const THEME_MANIFEST: Record<ThemeKey, ThemeManifest> = {
    kojo: {
        key: 'kojo',
        root: 'kojo',
        entries: {
            'main-nav': `src/themes/kojo/js/elements/main-nav`,
            'base': `src/themes/kojo/js/base.js`,
        },
        specPattern: 'src/themes/kojo/tests/**/*.cy.ts',
    },
    toujou: {
        key: 'toujou',
        root: 'toujou',
        entries: {},
        specPattern: 'src/themes/toujou/tests/**/*.cy.ts',
    },
};

export const THEME_KEYS = Object.keys(THEME_MANIFEST) as ThemeKey[];

export function themeForRoot(root: string): ThemeManifest | undefined {
    return Object.values(THEME_MANIFEST).find((t) => t.root === root);
}
