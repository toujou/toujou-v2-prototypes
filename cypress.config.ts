import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:6006',
    includeShadowDom: true,
    specPattern: ['src/tests/**/*.cy.ts'],
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
    colorSuccess: `rgb(0, 230, 119)`,
    colorSuccessDarken15: `rgb(0, 153, 79)`,
    colorWarning: `rgb(255, 145, 0)`,
    colorWarningDarken15: `rgb(179, 101, 0)`,
    colorError: `rgb(255, 26, 71)`,
    colorErrorDarken15: `rgb(204, 0, 41)`,
  },
});
