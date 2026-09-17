import { defineConfig } from 'vite'
import * as path from "path";
import { FALLBACK_THEME, getThemeEntries, type ThemeKey } from './themes/index';

/**
 * Select the theme to build from VITE_THEME.
 * Falls back to the default theme when no theme is specified.
 */
const CURRENT_THEME: ThemeKey = (process.env.VITE_THEME as ThemeKey | undefined) ?? FALLBACK_THEME;

/**
 * Resolve the build entries for the current theme to absolute paths.
 * The entries come from the central theme manifest in `themes/index.ts`.
 */
const THEME_ENTRIES: Record<string, string> = Object.fromEntries(
    Object.entries(getThemeEntries(CURRENT_THEME)).map(([name, entry]) => {
        return [name, path.resolve(__dirname, entry)];
    })
);

export default defineConfig({
    /** Tell Vite to scan the current theme's Cypress specs for dependencies. */
    optimizeDeps: {
        entries: [`./src/themes/${CURRENT_THEME}/tests/**/*.cy.ts`]
    },
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: THEME_ENTRIES,
            output: {
                /**
                 * Keep generated assets separated by theme and asset type.
                 * For example: `dist/themes/kojo/css/...` or `dist/themes/kojo/img/...`.
                 */
                assetFileNames: (assetInfo) => {
                    let extType = assetInfo?.name?.split('.')[1];
                    if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType ?? '')) {
                        extType = 'img';
                    }
                    return `themes/${CURRENT_THEME}/${extType}/[name]-[hash][extname]`;
                },

                /** Put generated JavaScript chunks into the current theme's JS directory. */
                chunkFileNames: `themes/${CURRENT_THEME}/js/[name]-[hash].js`,

                /** Put theme entry points into the current theme's JS directory. */
                entryFileNames: `themes/${CURRENT_THEME}/js/[name].js`,
            },
        },
        sourcemap: true,
        minify: 'terser',

        /**
         * Keep existing theme builds in `dist` when building another theme.
         * This allows multiple themes to be built into the same `dist` directory.
         */
        emptyOutDir: false,
        terserOptions: {
            output: {
                comments: false,
            }
        }
    },
})
