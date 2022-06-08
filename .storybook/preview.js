import "../src/components/toujou-blockquote/toujou-blockquote";
// import "../src/components/toujou-blockquote-grid/toujou-blockquote-grid";
// import "../src/components/toujou-grid/toujou-grid";
// import "../src/components/toujou-icon/toujou-icon";
// import "../src/components/toujou-text-block/toujou-text-block";

import "../src/styles/StorybookStyles.css";
import { badgeCustomConfig } from "./badgeCustomConfig.js";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { customViewports } from "./customViewports.js";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  badgesConfig: badgeCustomConfig,
  viewport: {
    viewports: {
      ...customViewports,
      ...INITIAL_VIEWPORTS,
    }
  },
  // layout: 'fullscreen' // This removes that padding on the storybook canvas
}

