import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/toujou-example/toujou-example.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit/
    }
  }
})
