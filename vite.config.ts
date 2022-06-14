import { defineConfig } from 'vite'
import * as path from "path";
import postcss from 'rollup-plugin-postcss';
// @ts-ignore
import postcssLit from 'rollup-plugin-postcss-lit';
// @ts-ignore
import autoprefixer from 'autoprefixer';

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
        }
    },
    plugins: [
        postcssLit()
    ]
})
