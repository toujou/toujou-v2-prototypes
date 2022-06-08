import { defineConfig } from 'vite'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        'toujou-icon': path.resolve(__dirname, 'src/components/toujou-icon/toujou-icon.ts'),
      },
      external: /^lit/,
    }
  }
})
