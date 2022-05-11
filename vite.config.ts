import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/toujou-chip/toujou-chip.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit/
    }
  }
})
