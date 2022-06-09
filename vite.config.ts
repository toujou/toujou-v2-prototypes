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
        'toujou-details': path.resolve(__dirname, 'src/components/toujou-details/toujou-details.ts'),
        'toujou-details-accordion': path.resolve(__dirname, 'src/components/toujou-details-accordion/toujou-details-accordion.ts'),
      },
      external: /^lit/,
    }
  }
})
