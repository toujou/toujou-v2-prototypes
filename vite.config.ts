import { defineConfig } from 'vite'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        'toujou-example': path.resolve(__dirname, 'src/components/toujou-example/toujou-example.ts'),
        'toujou-topbar': path.resolve(__dirname, 'src/components/toujou-topbar/toujou-topbar.ts')
      },
      external: /^lit/
    }
  }
})
