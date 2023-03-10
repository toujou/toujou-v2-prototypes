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
    modifyObstructiveCode: false,
  },
  env: {
    colors: {
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
      colorFontO04: 'rgba(42, 54, 60, 0.04)',
      colorFontO10: 'rgba(42, 54, 60, 0.1)',
      colorFontO20: 'rgba(42, 54, 60, 0.2)',
      colorBg: 'rgb(255, 255, 255)',
      colorBgO75: 'rgba(255, 255, 255, 0.75)',
      colorTransparent: `rgba(0, 0, 0, 0)`,
      colorSuccess: `rgb(0, 230, 119)`,
      colorSuccessO25: `rgb(0, 153, 79)`,
      colorSuccessO25Alpha: `rgba(0, 230, 119, 0.25)`,
      colorSuccessDarken15: `rgb(0, 153, 79)`,
      colorSuccessL15: `rgb(0, 77, 40)`,
      colorWarning: `rgb(255, 145, 0)`,
      colorWarningDarken15: `rgb(179, 101, 0)`,
      colorWarningO25: `rgba(255, 145, 0, 0.25)`,
      colorWarningL15: `rgb(77, 43, 0)`,
      colorError: `rgb(255, 26, 71)`,
      colorErrorO25: `rgb(204, 0, 41)`,
      colorErrorO25Alpha: `rgba(255, 26, 71, 0.25)`,
      colorErrorDarken15: `rgb(204, 0, 41)`,
      colorErrorL15: `rgb(77, 0, 15)`,
      colorBlackO75: `rgba(0, 0, 0, 0.75)`,
      colorBlackO50: `rgba(0, 0, 0, 0.5)`,
      colorBlackO05: `rgba(0, 0, 0, 0.05)`,
      colorInfo: `rgb(107, 216, 237)`,
      colorInfoDarken15: `rgb(108, 187, 224)`,
      colorInfoO25Alpha: `rgba(171, 216, 237, 0.25)`,
      colorGold: `rgb(255, 187, 0)`,
    },
    tokens: {
      animation: {
        durationSlow: '1s',
        durationNormal: '0.5s',
        durationFast: '0.25s',
        durationVeryFast: '0.125s',
        easingNormal: 'ease-in-out',
        easingEaseIn: 'ease-in',
        easingEaseOut: 'ease-out'
      },
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        fourByThree: '4 / 3',
        sixteenToNine: '16 / 9',
        golden: '1.618 / 1',
        threeToOne: '3 / 1',
      }
    },
    desktopViewportWidth: desktopViewportWidth,
    desktopViewportHeight: desktopViewportHeight,
  },
});
