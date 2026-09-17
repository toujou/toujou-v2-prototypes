/**
 * Single source of truth for all available themes.
 *
 * This manifest is the single place where a theme's identity, source root, and
 * build-input entries are declared. Consumers (Vite, Storybook, Cypress, and the
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
    /** Whether this theme includes the shared web components and utilities. */
    optInShared?: boolean;
    /** Whether this theme includes the third-party and node-module entries. */
    optInThirdParty?: boolean;
};

/**
 * Shared build input entries: the 5 shared web components plus the 2 shared
 * utils. Kept Vite-compatible (source paths, resolved at build time).
 */
export const SHARED_ENTRIES: ThemeEntries = {
    'toujou-blockquote': `src/shared/components/toujou-blockquote/toujou-blockquote.ts`,
    'toujou-slider': `src/shared/components/toujou-slider/toujou-slider.ts`,
    'toujou-portfolio-gallery': `src/shared/components/toujou-portfolio-gallery/toujou-portfolio-gallery.ts`,
    'toujou-cover-slider': `src/shared/components/toujou-cover-slider/toujou-cover-slider.ts`,
    'toujou-language-picker-dropdown': `src/shared/components/toujou-language-picker-dropdown/toujou-language-picker-dropdown.ts`,
    'photoswipe-lightbox-creator': `src/shared/js/utils/photoswipe-lightbox-creator/photoswipe-lightbox-creator.ts`,
    'video-autoplay': `src/shared/js/utils/video-autoplay/video-autoplay.ts`,
};

/**
 * Third-party / node-module build input entries (skippy-links + @toujou libs).
 * Kept Vite-compatible; resolved from `node_modules` at build time.
 */
export const THIRD_PARTY_ENTRIES: ThemeEntries = {
    'skippy-links': `node_modules/skippy-links/dist/skippy-links`,
    'toujou-breadcrumb': `node_modules/@toujou/toujou-breadcrumb/lib`,
    'toujou-clamped-content': `node_modules/@toujou/toujou-clamped-content/lib`,
    'toujou-counter': `node_modules/@toujou/toujou-counter/lib`,
    'toujou-inpage-nav': `node_modules/@toujou/toujou-inpage-nav/lib`,
    'toujou-input-password-toggle': `node_modules/@toujou/toujou-input-password-toggle/lib`,
    'toujou-location-finder': `node_modules/@toujou/toujou-location-finder/lib`,
    'toujou-map': `node_modules/@toujou/toujou-map/lib`,
    'toujou-rating-stars': `node_modules/@toujou/toujou-rating-stars/lib`,
    'toujou-timeline': `node_modules/@toujou/toujou-timeline/lib`,
    'toujou-topbutton': `node_modules/@toujou/toujou-topbutton/lib`,
    'toujou-datepicker': `node_modules/@toujou/toujou-datepicker/lib`,
    'toujou-collection-load-more': `node_modules/@toujou/toujou-collection-load-more/lib`,
    'toujou-details': `node_modules/@toujou/toujou-details/lib`,
    'toujou-burger-button': `node_modules/@toujou/toujou-burger-button/lib`,
    'toujou-topbar': `node_modules/@toujou/toujou-topbar/lib`,
    'toujou-overlay': `node_modules/@toujou/toujou-overlay/lib`,
    'toujou-read-more': `node_modules/@toujou/toujou-read-more/lib`,
    'toujou-tabs': `node_modules/@toujou/toujou-tabs/lib`,
    'toujou-poster-reveal': `node_modules/@toujou/toujou-poster-reveal/lib`,
    'toujou-countdown': `node_modules/@toujou/toujou-countdown/lib`,
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
        optInShared: true,
        optInThirdParty: true,
        specPattern: 'src/themes/kojo/tests/**/*.cy.ts',
    },
    toujou: {
        key: 'toujou',
        root: 'toujou',
        entries: {
            'toujou': `src/themes/toujou/js/toujou.js`,
        },
        specPattern: 'src/themes/toujou/tests/**/*.cy.ts',
    },
};

/**
 * Build input entries for the given theme. When a theme opts into the shared
 * and/or third-party sets, they are merged ahead of the theme-specific entries.
 * Spread order reproduces each theme's exact historical entry set.
 */
export function getThemeEntries(theme: ThemeKey): ThemeEntries {
    const manifest = THEME_MANIFEST[theme];
    return {
        ...(manifest.optInShared ? SHARED_ENTRIES : {}),
        ...(manifest.optInThirdParty ? THIRD_PARTY_ENTRIES : {}),
        ...manifest.entries,
    };
}

export const THEME_KEYS = Object.keys(THEME_MANIFEST) as ThemeKey[];
