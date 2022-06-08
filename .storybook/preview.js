import "../src/components/toujou-icon/toujou-icon";

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

