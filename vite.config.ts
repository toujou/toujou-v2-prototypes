import { defineConfig } from 'vite'
import * as path from "path";
import { FALLBACK_THEME, THEME_MANIFEST, type ThemeKey } from './themes/index';

const CURRENT_THEME: ThemeKey = (process.env.VITE_THEME as ThemeKey | undefined) ?? FALLBACK_THEME;

/** Build input entries (Vite-resolved) for the current theme. */
const THEME_ENTRIES: Record<string, string> = Object.fromEntries(
    Object.entries(THEME_MANIFEST[CURRENT_THEME].entries).map(([name, entry]) => {
        return [name, path.resolve(__dirname, entry)];
    })
);

export default defineConfig({
    optimizeDeps: {
        entries: [`./src/themes/${CURRENT_THEME}/tests/**/*.cy.ts`]
    },
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                // ─── Web Components (shared) ──────────────────────────────────
                'toujou-blockquote': path.resolve(__dirname, 'src/shared/components/toujou-blockquote/toujou-blockquote.ts'),
                'toujou-slider': path.resolve(__dirname, 'src/shared/components/toujou-slider/toujou-slider.ts'),
                'toujou-portfolio-gallery': path.resolve(__dirname, 'src/shared/components/toujou-portfolio-gallery/toujou-portfolio-gallery.ts'),
                'toujou-cover-slider': path.resolve(__dirname, 'src/shared/components/toujou-cover-slider/toujou-cover-slider.ts'),
                'toujou-language-picker-dropdown': path.resolve(__dirname, 'src/shared/components/toujou-language-picker-dropdown/toujou-language-picker-dropdown.ts'),

                // ─── Utils (Shared js) ─-──────────────────────────────────────
                'photoswipe-lightbox-creator': path.resolve(__dirname, 'src/shared/js/utils/photoswipe-lightbox-creator/photoswipe-lightbox-creator.ts'),
                'video-autoplay': path.resolve(__dirname, 'src/shared/js/utils/video-autoplay/video-autoplay.ts'),

                // ─── Theme-specific JS ────────────────────────────────────────
                ...THEME_ENTRIES,

                // ─── Third-party / Node Modules ───────────────────────────────
                'skippy-links': path.resolve(__dirname, 'node_modules/skippy-links/dist/skippy-links'),
                'toujou-breadcrumb': path.resolve(__dirname, 'node_modules/@toujou/toujou-breadcrumb/lib'),
                'toujou-clamped-content': path.resolve(__dirname, 'node_modules/@toujou/toujou-clamped-content/lib'),
                'toujou-counter': path.resolve(__dirname, 'node_modules/@toujou/toujou-counter/lib'),
                'toujou-inpage-nav': path.resolve(__dirname, 'node_modules/@toujou/toujou-inpage-nav/lib'),
                'toujou-input-password-toggle': path.resolve(__dirname, 'node_modules/@toujou/toujou-input-password-toggle/lib'),
                'toujou-location-finder': path.resolve(__dirname, 'node_modules/@toujou/toujou-location-finder/lib'),
                'toujou-map': path.resolve(__dirname, 'node_modules/@toujou/toujou-map/lib'),
                'toujou-rating-stars': path.resolve(__dirname, 'node_modules/@toujou/toujou-rating-stars/lib'),
                'toujou-timeline': path.resolve(__dirname, 'node_modules/@toujou/toujou-timeline/lib'),
                'toujou-topbutton': path.resolve(__dirname, 'node_modules/@toujou/toujou-topbutton/lib'),
                'toujou-datepicker': path.resolve(__dirname, 'node_modules/@toujou/toujou-datepicker/lib'),
                'toujou-collection-load-more': path.resolve(__dirname, 'node_modules/@toujou/toujou-collection-load-more/lib'),
                'toujou-details': path.resolve(__dirname, 'node_modules/@toujou/toujou-details/lib'),
                'toujou-burger-button': path.resolve(__dirname, 'node_modules/@toujou/toujou-burger-button/lib'),
                'toujou-topbar': path.resolve(__dirname, 'node_modules/@toujou/toujou-topbar/lib'),
                'toujou-overlay': path.resolve(__dirname, 'node_modules/@toujou/toujou-overlay/lib'),
                'toujou-read-more': path.resolve(__dirname, 'node_modules/@toujou/toujou-read-more/lib'),
                'toujou-tabs': path.resolve(__dirname, 'node_modules/@toujou/toujou-tabs/lib'),
                'toujou-poster-reveal': path.resolve(__dirname, 'node_modules/@toujou/toujou-poster-reveal/lib'),
                'toujou-countdown': path.resolve(__dirname, 'node_modules/@toujou/toujou-countdown/lib'),
            },
            output: {
                assetFileNames: (assetInfo) => {
                    let extType = assetInfo?.name?.split('.')[1];
                    if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType ?? '')) {
                        extType = 'img';
                    }
                    return `themes/${CURRENT_THEME}/${extType}/[name]-[hash][extname]`;
                },
                chunkFileNames: `themes/${CURRENT_THEME}/js/[name]-[hash].js`,
                entryFileNames: `themes/${CURRENT_THEME}/js/[name].js`,
            },
        },
        sourcemap: true,
        minify: 'terser',
        emptyOutDir: false, // prevent Vite from wiping the dist/ between theme builds
        terserOptions: {
            output: {
                comments: false,
            }
        }
    },
})
