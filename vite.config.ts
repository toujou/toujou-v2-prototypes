import { defineConfig } from 'vite'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    optimizeDeps: {
        entries: ['./src/tests/**/cy.ts']
    },
    build: {
        rollupOptions: {
            input: {
                // single components, that will be imported via asset collector
                'toujou-blockquote': path.resolve(__dirname, 'src/components/toujou-blockquote/toujou-blockquote.ts'),
                'toujou-slider': path.resolve(__dirname, 'src/components/toujou-slider/toujou-slider.ts'),
                'toujou-portfolio-gallery': path.resolve(__dirname, 'src/components/toujou-portfolio-gallery/toujou-portfolio-gallery.ts'),
                'toujou-cover-slider': path.resolve(__dirname, 'src/components/toujou-cover-slider/toujou-cover-slider.ts'),
                'toujou-language-picker-dropdown': path.resolve(__dirname, 'src/components/toujou-language-picker-dropdown/toujou-language-picker-dropdown.ts'),

                // JS Elements
                'main-nav': path.resolve(__dirname, 'src/js/elements/main-nav'),
                'photoswipe-lightbox-creator': path.resolve(__dirname, 'src/js/elements/photoswipe-lightbox-creator'),
                'video-autoplay': path.resolve(__dirname, 'src/js/elements/video-autoplay'),

                // Skippy links must be exported, so we can import it on the skip-links partial
                'skippy-links': path.resolve(__dirname, 'node_modules/skippy-links/dist/skippy-links'),

                // components from the @toujou/ui-components
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

                // base js, which imports all other js that needs to be loaded on all pages
                'base': path.resolve(__dirname, 'src/js/base.js'),
            },
            output: {
                assetFileNames: (assetInfo) => {
                    let extType = assetInfo?.name?.split('.').at(1);
                    // @ts-ignore
                    if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                        extType = 'img';
                    }
                    return `${extType}/[name]-[hash][extname]`;
                },
                chunkFileNames: 'js/[name]-[hash].js',
                entryFileNames: 'js/[name].js',
            },
        },
        sourcemap: true,
        minify: 'terser',
        terserOptions: {
            output: {
                comments: false,
            }
        }
    },
})
