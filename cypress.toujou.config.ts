import { defineConfig } from "cypress";

const desktopViewportWidth = 1920;
const desktopViewportHeight = 1080;

export default defineConfig({
    e2e: {
        baseUrl: 'http://localhost:6006',
        includeShadowDom: true,
        specPattern: 'src/themes/toujou/tests/cypress/**/*.cy.ts',
        viewportWidth: desktopViewportWidth,
        viewportHeight: desktopViewportHeight,
        modifyObstructiveCode: false,
        experimentalRunAllSpecs: true,
    },
});
