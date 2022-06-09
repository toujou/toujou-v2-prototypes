import { defineConfig } from 'vite'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        'toujou-blockquote': path.resolve(__dirname, 'src/components/toujou-blockquote/toujou-blockquote.ts'),
        'toujou-breadcrumb': path.resolve(__dirname, 'src/components/toujou-breadcrumb/toujou-breadcrumb.ts'),
        'toujou-button': path.resolve(__dirname, 'src/components/toujou-button/toujou-button.ts'),
        // 'toujou-blockquote-grid': path.resolve(__dirname, 'src/components/toujou-blockquote-grid/toujou-blockquote-grid.ts'),
        // 'toujou-grid': path.resolve(__dirname, 'src/components/toujou-grid/toujou-grid.ts'),
        // 'toujou-icon': path.resolve(__dirname, 'src/components/toujou-icon/toujou-icon.ts'),
        // 'toujou-text-block': path.resolve(__dirname, 'src/components/toujou-text-block/toujou-text-block.ts'),
      },
      external: /^lit/,
    }
  }
})
