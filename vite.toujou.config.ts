import { defineConfig } from 'vite'
import * as path from "path";
// @ts-ignore
import postcssLit from 'rollup-plugin-postcss-lit';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                'toujou-blockquote': path.resolve(__dirname, 'src/components/toujou-blockquote/toujou-blockquote.ts'),
                'toujou-breadcrumb': path.resolve(__dirname, 'src/components/toujou-breadcrumb/toujou-breadcrumb.ts'),
                'toujou-button': path.resolve(__dirname, 'src/components/toujou-button/toujou-button.ts'),
                'toujou-details': path.resolve(__dirname, 'src/components/toujou-details/toujou-details.ts'),
                'toujou-details-accordion': path.resolve(__dirname, 'src/components/toujou-details-accordion/toujou-details-accordion.ts'),
                'toujou-slider': path.resolve(__dirname, 'src/components/toujou-slider/toujou-slider.ts'),
            },
            external: /^lit/,
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
                entryFileNames: 'js/[name]-[hash].js',
            },
        },
    },
    plugins: [
        postcssLit()
    ]
})
