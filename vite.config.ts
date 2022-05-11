import { defineConfig } from 'vite'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        'toujou-example': path.resolve(__dirname, 'src/toujou-example/toujou-example.ts')
      },
      external: /^lit/
    }
  }
})
