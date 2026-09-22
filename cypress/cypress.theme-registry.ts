import { baseConfig } from './cypress.base.config';
import { THEME_MANIFEST, THEME_KEYS, type ThemeKey } from '../themes/index';

/** Recursively makes all nested object properties optional */
type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

export type ThemeDefinition = {
    name: string;
    specPattern: string;
    /** Partial overrides merged on top of baseConfig.env (e.g., theme-specific colors) */
    env?: DeepPartial<typeof baseConfig.env>;
    /** Partial overrides merged on top of baseConfig.e2e (e.g. viewport, timeouts) */
    e2e?: Partial<typeof baseConfig.e2e>;
};

/**
 * Central registry of all supported themes.
 * Theme identity (name + specPattern) is derived from the shared theme manifest,
 * so adding a theme there automatically wires it into Cypress. Theme-specific
 * test overrides (e.g. colors, viewports) are declared here.
 */
export const themes: Record<ThemeKey, ThemeDefinition> = {
    kojo: {
        name: THEME_MANIFEST.kojo.key,
        specPattern: THEME_MANIFEST.kojo.specPattern,
    },
    toujou: {
        name: THEME_MANIFEST.toujou.key,
        specPattern: THEME_MANIFEST.toujou.specPattern,
        env: {
            colors: {
                colorPrimary: 'rgb(200, 50, 80)',
            },
        },
    },
};

export const themeKeys = THEME_KEYS;

