import { defineConfig } from 'vite'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                // single components, that will be imported via asset collector
                'toujou-blockquote': path.resolve(__dirname, 'src/components/toujou-blockquote/toujou-blockquote.ts'),
                'toujou-breadcrumb': path.resolve(__dirname, 'src/components/toujou-breadcrumb/toujou-breadcrumb.ts'),
                'toujou-button': path.resolve(__dirname, 'src/components/toujou-button/toujou-button.ts'),
                'toujou-details': path.resolve(__dirname, 'src/components/toujou-details/toujou-details.ts'),
                'toujou-details-accordion': path.resolve(__dirname, 'src/components/toujou-details-accordion/toujou-details-accordion.ts'),
                'toujou-slider': path.resolve(__dirname, 'src/components/toujou-slider/toujou-slider.ts'),
                'toujou-gallery': path.resolve(__dirname, 'src/components/toujou-gallery/toujou-gallery.ts'),
                'toujou-portfolio-gallery': path.resolve(__dirname, 'src/components/toujou-portfolio-gallery/toujou-portfolio-gallery.ts'),
                'toujou-overlay': path.resolve(__dirname, 'src/components/toujou-overlay/toujou-overlay.ts'),
                'toujou-burger-button': path.resolve(__dirname, 'src/components/toujou-burger-button/toujou-burger-button.ts'),
                'toujou-sliding-nav': path.resolve(__dirname, 'src/components/toujou-sliding-nav/toujou-sliding-nav.ts'),
                'toujou-topbar': path.resolve(__dirname, 'src/components/toujou-topbar/toujou-topbar.ts'),
                'toujou-cover-slider': path.resolve(__dirname, 'src/components/toujou-cover-slider/toujou-cover-slider.ts'),
                'toujou-contact-box': path.resolve(__dirname, 'src/components/toujou-contact-box/toujou-contact-box.ts'),
                'toujou-media-info': path.resolve(__dirname, 'src/components/toujou-media-info/toujou-media-info.ts'),
                'toujou-topbutton': path.resolve(__dirname, 'src/components/toujou-topbutton/toujou-topbutton.ts'),
                'toujou-inpage-nav': path.resolve(__dirname, 'src/components/copied/toujou-inpage-nav/toujou-inpage-nav.js'),
                'toujou-map': path.resolve(__dirname, 'src/components/copied/toujou-map/toujou-map.js'),
                'toujou-map-geojson': path.resolve(__dirname, 'src/components/copied/toujou-map/toujou-map-geojson.js'),
                'toujou-map-layer': path.resolve(__dirname, 'src/components/copied/toujou-map/toujou-map-layer.js'),
                'toujou-map-marker': path.resolve(__dirname, 'src/components/copied/toujou-map/toujou-map-marker.js'),
                'toujou-map-popup': path.resolve(__dirname, 'src/components/copied/toujou-map/toujou-map-popup.js'),
                'toujou-map-static': path.resolve(__dirname, 'src/components/copied/toujou-map/toujou-map-static.js'),
                'toujou-third-party-content': path.resolve(__dirname, 'src/components/copied/toujou-third-party-content/toujou-third-party-content'),
                'toujou-consent': path.resolve(__dirname, 'src/components/copied/toujou-consent/toujou-consent'),
                'toujou-consent-widget': path.resolve(__dirname, 'src/components/copied/toujou-consent-widget/toujou-consent-widget'),
                // Skippy links must be exported, so we can import it on the skip-links partial
                'skippy-links': path.resolve(__dirname, 'node_modules/skippy-links/dist/skippy-links'),
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
                sourcemap: true,
            },
        },
    },
})
