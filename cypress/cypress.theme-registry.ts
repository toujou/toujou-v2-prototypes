import { baseConfig } from './cypress.base.config';

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
 * To add a new theme, add an entry here — the Cypress config derives from it automatically.
 */
export const themes: Record<string, ThemeDefinition> = {
    kojo: {
        name: 'kojo',
        specPattern: 'src/themes/kojo/tests/**/*.cy.ts',
    },
    toujou: {
        name: 'toujou',
        specPattern: 'src/themes/toujou/tests/**/*.cy.ts',
        env: {
            colors: {
                colorPrimary: 'rgb(200, 50, 80)',
            },
        },
    },
};
