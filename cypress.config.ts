import { defineConfig } from "cypress";

const desktopViewportWidth = 1920;
const desktopViewportHeight = 1080;
const mobileViewportWidth = 375;
const mobileViewportHeight = 667;

export default defineConfig({
    e2e: {
        baseUrl: 'http://localhost:6006',
        includeShadowDom: true,
        specPattern: ['src/tests/**/*.cy.ts'],
        viewportWidth: desktopViewportWidth,
        viewportHeight: desktopViewportHeight,
        modifyObstructiveCode: false,
        experimentalRunAllSpecs: true,
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
            colorFontO05: 'rgba(42, 54, 60, 0.05)',
            colorFontO10: 'rgba(42, 54, 60, 0.1)',
            colorFontO20: 'rgba(42, 54, 60, 0.2)',
            colorBg: 'rgb(255, 255, 255)',
            colorBgO75: 'rgba(255, 255, 255, 0.75)',
            colorTransparent: `rgba(0, 0, 0, 0)`,
            colorSuccess: `rgb(6, 162, 1)`,
            colorSuccessO25: `rgb(0, 153, 79)`,
            colorSuccessO25Alpha: `rgba(6, 162, 1, 0.25)`,
            colorSuccessDarken15: `rgb(3, 86, 0)`,
            colorSuccessDarken25: `rgba(6, 162, 1, 0.25)`,
            colorSuccessL15: `rgb(3, 76, 0)`,
            colorWarning: `rgb(255, 145, 0)`,
            colorWarningDarken15: `rgb(179, 101, 0)`,
            colorWarningO25: `rgba(255, 145, 0, 0.25)`,
            colorWarningO15: `rgba(255, 145, 0, 0.15)`,
            colorWarningL15: `rgb(77, 43, 0)`,
            colorError: `rgb(234, 11, 56)`,
            colorErrorO25: `rgb(204, 0, 41)`,
            colorErrorO25Alpha: `rgba(234, 11, 56, 0.25)`,
            colorErrorDarken25: `rgba(234, 11, 56, 0.25)`,
            colorErrorDarken15: `rgb(161, 8, 38)`,
            colorErrorL15: `rgb(73, 3, 17)`,
            colorBlackO75: `rgba(0, 0, 0, 0.75)`,
            colorBlackO50: `rgba(0, 0, 0, 0.5)`,
            colorBlackO10: `rgba(0, 0, 0, 0.1)`,
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
            },
            border: {
                l: '4px',
                m: '2px',
                normal: '1px',
            },
            borderRadius: {
                xxxxl: '48px',
                xxxl: '32px',
                xxl: '24px',
                xl: '16px',
                l: '12px',
                m: '8px',
                normal: '4px',
                s: '2px',
                xs: '1px',
                circle: '50%',
                zero: '0px'
            },
            shadow: {
                s: 'rgba(0, 0, 0, 0.05) 0px 4px 5px 0px, rgba(0, 0, 0, 0.06) 0px 1px 10px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px -1px',
                normal: 'rgba(0, 0, 0, 0.05) 0px 6px 10px 0px, rgba(0, 0, 0, 0.06) 0px 1px 18px 0px, rgba(0, 0, 0, 0.1) 0px 3px 5px -1px',
                l: 'rgba(0, 0, 0, 0.05) 0px 12px 15px 2px, rgba(0, 0, 0, 0.06) 0px 4px 24px 4px, rgba(0, 0, 0, 0.1) 0px 9px 8px -4px',
                xl: 'rgba(0, 0, 0, 0.05) 0px 16px 24px 2px, rgba(0, 0, 0, 0.06) 0px 6px 30px 6px, rgba(0, 0, 0, 0.1) 0px 12px 12px -5px',
            },
            spacing: {
                xxxxl: '120px',
                xxxl: '96px',
                xxl: '64px',
                xl: '48px',
                l: '32px',
                m: '24px',
                ms: '20px',
                normal: '16px',
                s: '8px',
                xs: '4px',
                xxs: '2px',
                onePx: '1px',
                twoPx: '2px'
            },
            type: {
                size: {
                    base: '16px',
                    xxxxl: '62px',
                    xxxl: '48px',
                    xxl: '40px',
                    xl: '32px',
                    l: '28px',
                    m: '24px',
                    ms: '20px',
                    normal: '16px',
                    s: '14px',
                    xs: '12px',
                    xxs: '10px'
                },
                lineHeight: {
                    l: '32px',
                    m: '28px',
                    normal: '24px',
                    s: '20px',
                    xs: '18px',
                    reset: '24px',
                    one: '16px'
                },
                letterSpacing: {
                    l: '2.4px',
                    m: '0.8px',
                    normal: '0',
                    s: '-0.4px',
                },
                fontFamily: {
                    headline: 'Ubuntu, sans-serif',
                    text: 'Mulish, sans-serif',
                },
                fontWeight: {
                    normal: '600',
                    bold: '800',
                    headline: '600'
                }
            },
            zIndex: {
                content: '1',
                pnNav: '30',
                topButton: '50',
                spinner: '75',
                inpageNav: '60',
                stickyNav: '200',
                topbar: '500',
                nav: '1000',
                notifications: '2000',
                backdrop: '3000',
                contactBox: '3500',
                modal: '10000',
                consent: '15000',
                overlay: '50000',
                important: '2147483641'
            }
        },
        desktopViewportWidth: desktopViewportWidth,
        desktopViewportHeight: desktopViewportHeight,
        mobileViewportHeight: mobileViewportHeight,
        mobileViewportWidth: mobileViewportWidth
    },
});
