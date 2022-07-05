import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:6006',
    includeShadowDom: true,
    specPattern: ['src/**/*.cy.ts'],
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
  env: {
    colorPrimary: 'rgb(0, 121, 168)',
    colorPrimaryLight: 'rgb(117, 227, 255)',
    colorPrimaryDark: 'rgb(17, 88, 116)',
    colorPrimaryO10: 'rgba(0, 121, 168, 0.1)',
    colorSecondary: 'rgb(210, 45, 92)',
    colorSecondaryLight: 'rgb(224, 108, 143)',
    colorSecondaryDark: 'rgb(84, 18, 38)',
    colorSecondaryO10: 'rgba(210, 45, 92, 0.1)',
    colorFont: 'rgb(84, 109, 120)',
    colorFontLight: 'rgb(183, 198, 205)',
    colorFontDark: 'rgb(42, 54, 60)',
    colorFontO10: 'rgba(84, 109, 120, 0.1)',
    colorBg: 'rgb(255, 255, 255)',
    colorTransparent: `rgba(0, 0, 0, 0)`,
  },
});
