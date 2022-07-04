import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:6006',
    includeShadowDom: true,
    specPattern: ['src/**/*.cy.ts']
  },
  env: {
    colorPrimary: 'rgb(0, 121, 168)',
    colorFont: 'rgb(42, 54, 60)'
  },
});
