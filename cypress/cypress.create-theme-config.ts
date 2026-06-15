import { defineConfig } from 'cypress';
import { baseConfig } from './cypress.base.config';
import { themes } from './cypress.theme-registry';

/**
 * Creates a Cypress config for a given theme by merging the base config
 * with any theme-specific overrides defined in the theme registry.
 *
 * @example
 * export default createThemeConfig('kojo');
 */
export function createThemeConfig(themeName: keyof typeof themes) {
    const theme = themes[themeName];

    if (!theme) {
        throw new Error(`[Cypress] Unknown theme: "${String(themeName)}". Available themes: ${Object.keys(themes).join(', ')}`);
    }

    return defineConfig({
        ...baseConfig,
        e2e: {
            ...baseConfig.e2e,
            specPattern: theme.specPattern,
            ...theme.e2e,
        },
        env: {
            ...baseConfig.env,
            ...theme.env,
        },
    });
}
