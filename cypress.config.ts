import { defineConfig } from "cypress";

const desktopViewportWidth = 1920;
const desktopViewportHeight = 1080;

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:6006',
    includeShadowDom: true,
    specPattern: ['src/tests/**/*.cy.ts'],
    viewportWidth: desktopViewportWidth,
    viewportHeight: desktopViewportHeight,
  },
  env: {
    colorPrimary: 'rgb(0, 121, 168)',
    colorPrimaryLight: 'rgb(117, 227, 255)',
    colorPrimaryDark: 'rgb(2, 55, 75)',
    colorPrimaryO10: 'rgba(0, 121, 168, 0.1)',
    colorSecondary: 'rgb(210, 45, 92)',
    colorSecondaryLight: 'rgb(224, 108, 143)',
    colorSecondaryDark: 'rgb(84, 18, 38)',
    colorSecondaryO10: 'rgba(210, 45, 92, 0.1)',
    colorFont: 'rgb(42, 54, 60)',
    colorFontLight: 'rgb(183, 197, 205)',
    colorFontDark: 'rgb(21, 27, 30)',
    colorFontO10: 'rgba(42, 54, 60, 0.1)',
    colorBg: 'rgb(255, 255, 255)',
    colorTransparent: `rgba(0, 0, 0, 0)`,
    colorSuccess: `rgb(0, 230, 119)`,
    colorSuccessDarken15: `rgb(0, 153, 79)`,
    colorWarning: `rgb(255, 145, 0)`,
    colorWarningDarken15: `rgb(179, 101, 0)`,
    colorError: `rgb(255, 26, 71)`,
    colorErrorDarken15: `rgb(204, 0, 41)`,
    desktopViewportWidth: desktopViewportWidth,
    desktopViewportHeight: desktopViewportHeight,
  },
});
